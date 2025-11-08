import json, os, requests

with open("theme.har", "r", encoding="utf-8") as f:
    har = json.load(f)

entries = har["log"]["entries"]
os.makedirs("downloaded_chunks", exist_ok=True)

for i, entry in enumerate(entries):
    url = entry["request"]["url"]
    if "_next/static/chunks/" in url and url.endswith(".js"):
        filename = f"{i:03d}_" + url.split("/")[-1]
        print(f"Downloading {filename}")
        r = requests.get(url)
        with open(os.path.join("downloaded_chunks", filename), "wb") as f2:
            f2.write(r.content)
