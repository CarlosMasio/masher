Got it! Here’s an updated version of the `README.md` file for your **Masher** repository with the installation steps reflecting Puppeteer installation and script name changes:

---

# Masher - Hash Generator Tool

Masher is a Node.js CLI tool that uses **Puppeteer** to automate the process of generating **MD5** and **SHA1** hashes from a given text input. The tool interacts with an online MD5 hash generator and extracts the resulting hashes.

---

## Features

- **Automated Hash Generation**: Automatically generates MD5 and SHA1 hashes from user-provided text.
- **Puppeteer-based Web Scraping**: Uses Puppeteer to interact with an online MD5 hash generator.
- **Headless Browser**: Runs headlessly, no need for a browser interface.
- **Simple CLI**: Easy-to-use command-line interface.

---

## Requirements

- **Node.js**: Version 12 or later is required.
- **Puppeteer**: To automate the process of generating hashes via a web interface.

---

## Installation

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/masher.git
cd masher
```

### 2. Install Dependencies

Install the necessary dependencies, including Puppeteer:

```bash
npm install puppeteer
```

---

## Usage

### 1. Run the Script

After installing dependencies, run the script using the following command:

```bash
node hash-fetcher.js
```

### 2. Enter the Text to Hash

The script will prompt you to enter the text you want to hash:

```
ENTER TEXT TO HASH:
```

### 3. View the Results

Once you enter the text, the script will output the **MD5** and **SHA1** hashes:

```
--- HASH RESULTS ---
MD5 : <md5-hash>
SHA1: <sha1-hash>
```

---

## Example

```bash
$ node hash-fetcher.js
ENTER TEXT TO HASH: Hello World
--- HASH RESULTS ---
MD5 : b94d27b9934d3e08a52e52d7da7dabf3
SHA1: 2ef7bde608ce5404e97d5f042f95f89f1c232871
```

---

## Troubleshooting

- **Error: Failed to launch the browser process**  
  This error may occur if you're running the script as the root user. Add the `--no-sandbox` flag to Puppeteer by modifying the launch options in the script like this:
  
  ```javascript
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  ```

- **No element found for selector**  
  If the script fails to find the input fields or buttons, the website may have changed. Use browser developer tools to inspect the site and adjust the script accordingly.

---

## Contributing

Feel free to fork this repository, make improvements, and submit pull requests.

1. Fork the repository.
2. Clone your fork: `git clone https://github.com/yourusername/masher.git`
3. Create a new branch: `git checkout -b feature/your-feature`
4. Commit your changes: `git commit -am 'Add new feature'`
5. Push to your fork: `git push origin feature/your-feature`
6. Submit a pull request.

---

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

### Notes:

- Replace `yourusername` with your actual GitHub username.
- Let me know if you need help with any further adjustments or enhancements!
