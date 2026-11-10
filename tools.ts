export type CategoryId =
  | "all"
  | "pdf"
  | "image"
  | "document"
  | "archive"
  | "audio"
  | "video"
  | "qr"
  | "utility";

export type Tool = {
  id: string;
  name: string;
  description: string;
  category: Exclude<CategoryId, "all">;
  icon: string;
  popular?: boolean;
  status: "planned";
};

export const categories: { id: CategoryId; label: string; icon: string; description: string }[] = [
  { id: "all", label: "All tools", icon: "grid", description: "Browse the complete toolkit" },
  { id: "pdf", label: "PDF tools", icon: "file-pdf", description: "Manage and convert PDF files" },
  { id: "image", label: "Image tools", icon: "image", description: "Resize, compress and convert images" },
  { id: "document", label: "Documents", icon: "file-text", description: "Work with documents and text" },
  { id: "archive", label: "File tools", icon: "archive", description: "Manage archives and file data" },
  { id: "audio", label: "Audio tools", icon: "audio", description: "Edit and convert audio" },
  { id: "video", label: "Video tools", icon: "video", description: "Trim and convert video" },
  { id: "qr", label: "QR & barcode", icon: "qr", description: "Create and scan codes" },
  { id: "utility", label: "Utilities", icon: "wrench", description: "Useful everyday tools" }
];

export const tools: Tool[] = [
  { id: "merge-pdf", name: "Merge PDF", description: "Combine multiple PDF files into one document.", category: "pdf", icon: "layers", popular: true, status: "planned" },
  { id: "split-pdf", name: "Split PDF", description: "Extract selected pages into separate PDF files.", category: "pdf", icon: "scissors", popular: true, status: "planned" },
  { id: "compress-pdf", name: "Compress PDF", description: "Reduce PDF file size where the document allows it.", category: "pdf", icon: "minimize", popular: true, status: "planned" },
  { id: "pdf-to-jpg", name: "PDF to JPG", description: "Export PDF pages as image files.", category: "pdf", icon: "image", status: "planned" },
  { id: "jpg-to-pdf", name: "JPG to PDF", description: "Turn one or more images into a PDF.", category: "pdf", icon: "file-image", status: "planned" },
  { id: "rotate-pdf", name: "Rotate PDF", description: "Rotate selected pages and save a new PDF.", category: "pdf", icon: "rotate", status: "planned" },
  { id: "organize-pdf", name: "Organize PDF", description: "Reorder, remove and extract pages.", category: "pdf", icon: "layout", status: "planned" },
  { id: "sign-pdf", name: "Sign PDF", description: "Add a drawn or typed signature to a document.", category: "pdf", icon: "pen", status: "planned" },
  { id: "image-compressor", name: "Image Compressor", description: "Reduce image size while balancing quality.", category: "image", icon: "minimize", popular: true, status: "planned" },
  { id: "image-resizer", name: "Image Resizer", description: "Resize images to custom dimensions.", category: "image", icon: "expand", popular: true, status: "planned" },
  { id: "image-cropper", name: "Image Cropper", description: "Crop an image to the exact area you need.", category: "image", icon: "crop", status: "planned" },
  { id: "image-converter", name: "Image Converter", description: "Convert between supported image formats.", category: "image", icon: "refresh", status: "planned" },
  { id: "png-to-webp", name: "PNG to WebP", description: "Convert PNG images to smaller WebP files.", category: "image", icon: "file-image", status: "planned" },
  { id: "image-watermark", name: "Image Watermark", description: "Add a text or image watermark to pictures.", category: "image", icon: "stamp", status: "planned" },
  { id: "metadata-viewer", name: "Image Metadata", description: "Inspect available image metadata locally.", category: "image", icon: "info", status: "planned" },
  { id: "word-to-pdf", name: "Word to PDF", description: "Convert supported Word documents to PDF.", category: "document", icon: "file-text", popular: true, status: "planned" },
  { id: "pdf-to-word", name: "PDF to Word", description: "Extract document content into an editable format.", category: "document", icon: "file-text", status: "planned" },
  { id: "word-counter", name: "Word Counter", description: "Count words, characters and lines in text.", category: "document", icon: "type", status: "planned" },
  { id: "json-formatter", name: "JSON Formatter", description: "Format and validate JSON data.", category: "document", icon: "braces", status: "planned" },
  { id: "csv-to-excel", name: "CSV to Excel", description: "Convert CSV data into a spreadsheet.", category: "document", icon: "table", status: "planned" },
  { id: "zip-creator", name: "ZIP Creator", description: "Package multiple files into a ZIP archive.", category: "archive", icon: "archive", status: "planned" },
  { id: "zip-extractor", name: "ZIP Extractor", description: "Extract files from supported ZIP archives.", category: "archive", icon: "folder-open", status: "planned" },
  { id: "file-analyzer", name: "File Size Analyzer", description: "Inspect file sizes and basic file details.", category: "archive", icon: "chart", status: "planned" },
  { id: "sha256", name: "SHA-256 Generator", description: "Calculate a file's SHA-256 hash in your browser.", category: "archive", icon: "fingerprint", status: "planned" },
  { id: "audio-trimmer", name: "Audio Trimmer", description: "Cut an audio file to the section you need.", category: "audio", icon: "scissors", status: "planned" },
  { id: "audio-converter", name: "Audio Converter", description: "Convert audio between supported formats.", category: "audio", icon: "audio", status: "planned" },
  { id: "audio-merger", name: "Audio Merger", description: "Join multiple audio clips together.", category: "audio", icon: "combine", status: "planned" },
  { id: "video-trimmer", name: "Video Trimmer", description: "Trim the beginning or end of a video.", category: "video", icon: "scissors", status: "planned" },
  { id: "video-to-mp3", name: "Video to MP3", description: "Extract an audio track from a supported video.", category: "video", icon: "music", status: "planned" },
  { id: "video-compressor", name: "Video Compressor", description: "Reduce video file size with quality controls.", category: "video", icon: "minimize", status: "planned" },
  { id: "qr-generator", name: "QR Code Generator", description: "Create a QR code from text or a link.", category: "qr", icon: "qr", status: "planned" },
  { id: "barcode-generator", name: "Barcode Generator", description: "Generate common barcode formats.", category: "qr", icon: "barcode", status: "planned" },
  { id: "password-generator", name: "Password Generator", description: "Generate a random password with custom rules.", category: "utility", icon: "key", status: "planned" },
  { id: "unit-converter", name: "Unit Converter", description: "Convert common units of measurement.", category: "utility", icon: "ruler", status: "planned" },
  { id: "date-calculator", name: "Date Calculator", description: "Calculate date differences and add or subtract days.", category: "utility", icon: "calendar", status: "planned" }
];