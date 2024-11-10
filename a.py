import os
import zipfile

def is_zipfile(path):
    return zipfile.is_zipfile(path)

def zipdir(path, ziph):
    # ziph is zipfile handle
    for root, dirs, files in os.walk(path):
        # Exclude .vscode and .git directories
        dirs[:] = [d for d in dirs if d not in ['.vscode', '.git'] and not is_zipfile(os.path.join(root, d))]
        for file in files:
            file_path = os.path.join(root, file)
            if not is_zipfile(file_path):
                ziph.write(file_path, os.path.relpath(file_path, path))
import time
with zipfile.ZipFile(f'{time.time()}.zip', 'w', zipfile.ZIP_DEFLATED) as zipf:
    zipdir('.', zipf)