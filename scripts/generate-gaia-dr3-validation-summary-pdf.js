/* eslint-disable no-console */
// Generates a simple multi-page PDF without external dependencies.
// Output: public/publications/gaia-dr3-validation-summary.pdf
// Note: This is a public-safe institutional summary. It intentionally avoids proprietary implementation details.

const fs = require('fs');
const path = require('path');

function escapePdfText(text) {
  return String(text)
    .replace(/\\/g, '\\\\')
    .replace(/\(/g, '\\(')
    .replace(/\)/g, '\\)')
    .replace(/\r?\n/g, ' ');
}

function wrapText(text, maxChars) {
  const words = String(text).split(/\s+/).filter(Boolean);
  const lines = [];
  let current = '';

  for (const word of words) {
    const next = current ? `${current} ${word}` : word;
    if (next.length <= maxChars) {
      current = next;
      continue;
    }

    if (current) lines.push(current);
    current = word;
  }

  if (current) lines.push(current);
  return lines;
}

function textBlock(lines, { fontSize = 12, startX = 72, startY = 720, leading = 16 } = {}) {
  const parts = [];
  parts.push('BT');
  parts.push(`/F1 ${fontSize} Tf`);
  parts.push(`${startX} ${startY} Td`);

  for (let i = 0; i < lines.length; i++) {
    const line = escapePdfText(lines[i]);
    parts.push(`(${line}) Tj`);
    if (i !== lines.length - 1) parts.push(`0 -${leading} Td`);
  }

  parts.push('ET');
  return parts.join('\n');
}

function buildPageContent(blocks) {
  return blocks.filter(Boolean).join('\n\n') + '\n';
}

function buildPdf({ pages }) {
  // Objects:
  // 1 Catalog
  // 2 Pages
  // 3..(2+pages) Page objects
  // then content streams
  // then Font object

  const objects = [];

  const header = '%PDF-1.4\n%\xE2\xE3\xCF\xD3\n';

  const pageObjectIds = [];
  const contentObjectIds = [];

  // Reserve IDs
  const pageStartId = 3;
  const contentStartId = pageStartId + pages.length;
  const fontObjectId = contentStartId + pages.length;

  for (let i = 0; i < pages.length; i++) {
    pageObjectIds.push(pageStartId + i);
    contentObjectIds.push(contentStartId + i);
  }

  // 1: Catalog
  objects.push({
    id: 1,
    body: `<< /Type /Catalog /Pages 2 0 R >>`,
  });

  // 2: Pages
  objects.push({
    id: 2,
    body: `<< /Type /Pages /Kids [${pageObjectIds.map((id) => `${id} 0 R`).join(' ')}] /Count ${pages.length} >>`,
  });

  // Page objects
  for (let i = 0; i < pages.length; i++) {
    objects.push({
      id: pageObjectIds[i],
      body: `<< /Type /Page /Parent 2 0 R /MediaBox [0 0 612 792] /Contents ${contentObjectIds[i]} 0 R /Resources << /Font << /F1 ${fontObjectId} 0 R >> >> >>`,
    });
  }

  // Content streams
  for (let i = 0; i < pages.length; i++) {
    const content = pages[i];
    const stream = Buffer.from(content, 'utf8');
    objects.push({
      id: contentObjectIds[i],
      body: `<< /Length ${stream.length} >>\nstream\n${content}endstream`,
    });
  }

  // Font
  objects.push({
    id: fontObjectId,
    body: `<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>`,
  });

  // Serialize and build xref
  const chunks = [header];
  const offsets = [0]; // xref entry 0
  let byteOffset = Buffer.byteLength(header, 'utf8');

  for (const obj of objects) {
    offsets[obj.id] = byteOffset;
    const serialized = `${obj.id} 0 obj\n${obj.body}\nendobj\n`;
    chunks.push(serialized);
    byteOffset += Buffer.byteLength(serialized, 'utf8');
  }

  const xrefStart = byteOffset;
  const maxId = Math.max(...objects.map((o) => o.id));

  let xref = `xref\n0 ${maxId + 1}\n`;
  xref += `0000000000 65535 f \n`;

  for (let i = 1; i <= maxId; i++) {
    const off = offsets[i] || 0;
    xref += `${String(off).padStart(10, '0')} 00000 n \n`;
  }

  const trailer =
    `trailer\n<< /Size ${maxId + 1} /Root 1 0 R >>\nstartxref\n${xrefStart}\n%%EOF\n`;

  chunks.push(xref);
  chunks.push(trailer);

  return Buffer.from(chunks.join(''), 'utf8');
}

function makePdfPages() {
  const title = 'Gaia DR3 Validation Report — Structured Hypothesis Search at Scale';
  const version = 'Public Institutional Summary — February 2026';

  const page1 = buildPageContent([
    textBlock([title], { fontSize: 18, startY: 740, leading: 22 }),
    textBlock([version], { fontSize: 12, startY: 712, leading: 16 }),
    textBlock(
      wrapText(
        'This document is a public-safe summary of Northflow validation work on Gaia Data Release 3 (DR3). It is designed for institutional orientation and does not disclose proprietary methodology, internal heuristics, or security-sensitive implementation details.',
        95
      ),
      { fontSize: 11, startY: 680, leading: 15 }
    ),
    textBlock(
      wrapText(
        'For contextual material: /validation, /technical-papers, and institutional engagement via /engage/request-access.',
        95
      ),
      { fontSize: 11, startY: 610, leading: 15 }
    ),
  ]);

  const page2Blocks = [];
  page2Blocks.push(textBlock(['1. Scope and dataset context'], { fontSize: 14, startY: 740, leading: 18 }));
  page2Blocks.push(
    textBlock(
      wrapText(
        'Gaia DR3 is one of the largest structured scientific catalogs available, containing approximately 1.8 billion observational objects. The validation demonstrates that HGE can operate at this scale while producing institutionally reviewable evidence outputs.',
        95
      ),
      { fontSize: 11, startY: 712, leading: 15 }
    )
  );
  page2Blocks.push(textBlock(['2. What the validation demonstrates (public-safe)'], { fontSize: 14, startY: 650, leading: 18 }));

  const demoBullets = [
    'Deterministic replay: outputs can be reproduced under identical inputs and policy constraints.',
    'Provenance-aware evidence packaging: outputs are structured as evidence bundles for review and traceability.',
    'Integrity verification: evidence bundles support signature + integrity checks for institutional workflows.',
    'Institutional review readiness: artifacts are formatted for audit and governance-aligned evaluation.',
  ];

  const bulletLines = [];
  for (const b of demoBullets) {
    bulletLines.push(...wrapText(`• ${b}`, 95));
  }

  page2Blocks.push(textBlock(bulletLines, { fontSize: 11, startY: 622, leading: 15 }));

  const page2 = buildPageContent(page2Blocks);

  const page3Blocks = [];
  page3Blocks.push(textBlock(['3. Artifacts available for review'], { fontSize: 14, startY: 740, leading: 18 }));

  const artifacts = [
    'Validation summary PDF (this document).',
    'Evidence bundle schema and integrity verification steps (specification).',
    'Replay demonstration context for briefings (controlled disclosure).',
    'Security / tamper testing summary (red-team results overview).',
  ];

  const artifactLines = [];
  for (const a of artifacts) artifactLines.push(...wrapText(`• ${a}`, 95));
  page3Blocks.push(textBlock(artifactLines, { fontSize: 11, startY: 712, leading: 15 }));

  page3Blocks.push(textBlock(['4. What we do not publish'], { fontSize: 14, startY: 610, leading: 18 }));
  page3Blocks.push(
    textBlock(
      wrapText(
        'For safety, integrity, and IP reasons, certain implementation details are not published openly. Northflow focuses on publishing evidence, not recipes.',
        95
      ),
      { fontSize: 11, startY: 582, leading: 15 }
    )
  );

  const notPublished = [
    'Internal heuristics, ranking logic, and decision policies.',
    'Deployment-specific operational parameters tied to governance constraints.',
    'Security-sensitive mechanisms that would weaken tamper resistance if disclosed.',
  ];

  const npLines = [];
  for (const n of notPublished) npLines.push(...wrapText(`• ${n}`, 95));
  page3Blocks.push(textBlock(npLines, { fontSize: 11, startY: 540, leading: 15 }));

  const page3 = buildPageContent(page3Blocks);

  const page4Blocks = [];
  page4Blocks.push(textBlock(['5. Access pathways'], { fontSize: 14, startY: 740, leading: 18 }));
  page4Blocks.push(
    textBlock(
      wrapText(
        'Public materials are published for transparency and institutional orientation. Additional packages (where applicable) are shared selectively for qualified stakeholders under appropriate confidentiality arrangements.',
        95
      ),
      { fontSize: 11, startY: 712, leading: 15 }
    )
  );

  const links = [
    'Validation evidence register: https://northflow.no/validation',
    'Institutional access request: https://northflow.no/engage/request-access',
    'Technical papers: https://northflow.no/technical-papers',
    'Security: https://northflow.no/security',
  ];
  const linkLines = [];
  for (const l of links) linkLines.push(...wrapText(`• ${l}`, 95));

  page4Blocks.push(textBlock(linkLines, { fontSize: 11, startY: 650, leading: 15 }));

  page4Blocks.push(textBlock(['Document classification'], { fontSize: 14, startY: 560, leading: 18 }));
  page4Blocks.push(
    textBlock(
      wrapText(
        'This summary is intended for public distribution. It does not grant access to controlled disclosure materials, internal specifications, or implementation details.',
        95
      ),
      { fontSize: 11, startY: 532, leading: 15 }
    )
  );

  const page4 = buildPageContent(page4Blocks);

  return [page1, page2, page3, page4];
}

function main() {
  const outputPath = path.join(
    process.cwd(),
    'public',
    'publications',
    'gaia-dr3-validation-summary.pdf'
  );

  const pages = makePdfPages();
  const pdf = buildPdf({ pages });

  fs.mkdirSync(path.dirname(outputPath), { recursive: true });
  fs.writeFileSync(outputPath, pdf);

  console.log(`Wrote: ${outputPath}`);
  console.log(`Size: ${pdf.length} bytes`);
  console.log(`Pages: ${pages.length}`);
}

main();
