import { uploadFile } from '../actions';

export default function UploadPage() {
  return (
    <div className="max-w-md mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Upload File</h1>
      <form action={uploadFile} className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">Choose File</label>
          <input type="file" name="file" className="w-full border rounded-lg px-4 py-2" />
        </div>
        <button type="submit" className="w-full bg-blue-500 text-white px-6 py-2 rounded-lg">
          Upload
        </button>
      </form>
    </div>
  );
}
