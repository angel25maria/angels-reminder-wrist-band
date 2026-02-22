<p align="center">
  <img src="./img.png" alt="Project Banner" width="100%">
</p>

#smart medicine reminder system 🎯

## Basic Details

### Team Name: Angels

### Team Members
- Member 1: Angel Maria Saju - TocH Institute of science and technology
- Member 2: Angelin P Baby - TocH Institute of science and technology

### Hosted Project Link
http://127.0.0.1:5500/index.html

### Project Description
The Medicine Reminder system is a web-based application that helps users schedule and manage their medication timings efficiently. It allows users to select dates from an interactive calendar, set reminder times, and receive notifications at the exact allotted time. The system ensures users never miss their medicines through timely alerts and a user-friendly interface.

### The Problem statement
Many people forget to take their medicines on time, leading to health complications and poor treatment outcomes. There is a need for a simple and reliable system that provides timely reminders to ensure proper medication adherence.

### The Solution
Develop a user-friendly web-based medicine reminder system that allows users to select dates and set specific times for medication, providing timely notifications to ensure medicines are taken as prescribed.

---

## Technical Details

### Technologies/Components Used

**For Software:**
- Languages used: JavaScript, CSS, HTML 
- Frameworks used:None
- Libraries used:FullCalendar, Flatpickr
- Tools used: VS Code, Arduino IDE, Git

**For Hardware:**
- Main components: ESP32 development board, Buzzer, Vibrator Motor, Breadboard, Jumper Wires
- Specifications:ESP32 operating voltage: 3.3V, Input voltage (via USB): 5V, Buzzer: 3.3V / 5V compatible,Vibration Motor: 3V–5V DC,Wi-Fi & Bluetooth enabled (ESP32 built-in)
- Tools required: Arduino IDE (for programming ESP32), USB cable, Laptop/PC, Breadboard, Jumper wires

---

## Features

List the key features of your project:
Feature 1: Interactive Calendar Scheduling – Users can select specific dates using an integrated calendar to schedule medicine reminders.
Feature 2: Time-Based Reminder System – Allows users to set exact medication times with automatic alerts at the allotted time.
Feature 3: Repeat Everyday Option – Enables recurring daily reminders for continuous medication schedules.
Feature 4: Hardware Alert Mechanism – Uses ESP32 with buzzer and vibration motor to provide both sound and vibration notifications for better reliability. 

---

## Implementation

### For Hardware:

#### Components Required
ESP32 Development Board
Buzzer
Vibration Motor (DC Motor)
Breadboard
Jumper Wires
USB Cable (for programming & power supply)


#### Circuit Setup
1.Place the ESP32 on the breadboard.
2.Connect the buzzer positive pin to a digital GPIO pin of ESP32 (e.g., GPIO 23) and the negative pin to GND.
3.Connect the vibration motor positive terminal to another GPIO pin (e.g., GPIO 22) and the negative terminal to GND.
4.Ensure all GND connections are common.
5.Power the ESP32 using a USB cable connected to a laptop or 5V supply.
6.Upload the program using Arduino IDE and test the buzzer and vibration alert when the reminder time is triggered.

---

## Project Documentation


### For Hardware:

#### Schematic & Circuit


*Add caption explaining connections*

![Schematic](Add your schematic diagram here)
*Add caption explaining the schematic*

#### Build Photos

![Team](Add photo of your team here)

![Components](Add photo of your components here)
*List out all components shown*

![Build](Add photos of build process here)
*Explain the build steps*

![Final](Add photo of final product here)
*Explain the final build*

---

## Additional Documentation

### For Hardware Projects:

#### Bill of Materials (BOM)

| Component | Quantity | Specifications | Price |
|-----------|----------|----------------|-------|
| ESP 32 | 1 | 3.3V logic, Wi-Fi & Bluetooth| ₹350 |
| Buzzer | 1 | R3.3V–5V Active Buzzer | rs 20 |
|Vibration Motor| 1 | 3V–5V DC Micro Motor | ₹70|
| Breadboard | 1 | 400 points | ₹100 | 
| Jumper Wires | 4 | Male-to-Male | ₹50 |
| USB Cable (Type-C/Micro USB) | 1 | Compatible with ESP32 Board | 90 |

**Total Estimated Cost:** ₹680

#### Assembly Instructions

**Step 1: Prepare Components**
1. Gather all components listed in the BOM
2. Check component specifications
3. Prepare your workspace
![Step 1](images/assembly-step1.jpg)
*Caption: All components laid out*

**Step 2: Build the Power Supply**
1. Connect the power rails on the breadboard
2. Connect Arduino 5V to breadboard positive rail
3. Connect Arduino GND to breadboard negative rail
![Step 2](images/assembly-step2.jpg)
*Caption: Power connections completed*

**Step 3: Add Components**
1. Place LEDs on breadboard
2. Connect resistors in series with LEDs
3. Connect LED cathodes to GND
4. Connect LED anodes to Arduino digital pins (2-6)
![Step 3](images/assembly-step3.jpg)
*Caption: LED circuit assembled*

**Step 4: [Continue for all steps...]**

**Final Assembly:**
![Final Build](images/final-build.jpg)
*Caption: Completed project ready for testing*

---

### For Scripts/CLI Tools:

#### Command Reference

**Basic Usage:**
```bash
python script.py [options] [arguments]
```

**Available Commands:**
- `command1 [args]` - Description of what command1 does
- `command2 [args]` - Description of what command2 does
- `command3 [args]` - Description of what command3 does

**Options:**
- `-h, --help` - Show help message and exit
- `-v, --verbose` - Enable verbose output
- `-o, --output FILE` - Specify output file path
- `-c, --config FILE` - Specify configuration file
- `--version` - Show version information

**Examples:**

```bash
# Example 1: Basic usage
python script.py input.txt

# Example 2: With verbose output
python script.py -v input.txt

# Example 3: Specify output file
python script.py -o output.txt input.txt

# Example 4: Using configuration
python script.py -c config.json --verbose input.txt
```

#### Demo Output

**Example 1: Basic Processing**

**Input:**
```
This is a sample input file
with multiple lines of text
for demonstration purposes
```

**Command:**
```bash
python script.py sample.txt
```

**Output:**
```
Processing: sample.txt
Lines processed: 3
Characters counted: 86
Status: Success
Output saved to: output.txt
```

**Example 2: Advanced Usage**

**Input:**
```json
{
  "name": "test",
  "value": 123
}
```

**Command:**
```bash
python script.py -v --format json data.json
```

**Output:**
```
[VERBOSE] Loading configuration...
[VERBOSE] Parsing JSON input...
[VERBOSE] Processing data...
{
  "status": "success",
  "processed": true,
  "result": {
    "name": "test",
    "value": 123,
    "timestamp": "2024-02-07T10:30:00"
  }
}
[VERBOSE] Operation completed in 0.23s
```

---

## Project Demo

### Video
[Add your demo video link here - YouTube, Google Drive, etc.]

*Explain what the video demonstrates - key features, user flow, technical highlights*

### Additional Demos
[Add any extra demo materials/links - Live site, APK download, online demo, etc.]

---

## AI Tools Used (Optional - For Transparency Bonus)

If you used AI tools during development, document them here for transparency:

**Tool Used:** [e.g., GitHub Copilot, v0.dev, Cursor, ChatGPT, Claude]

**Purpose:** [What you used it for]
- Example: "Generated boilerplate React components"
- Example: "Debugging assistance for async functions"
- Example: "Code review and optimization suggestions"

**Key Prompts Used:**
- "Create a REST API endpoint for user authentication"
- "Debug this async function that's causing race conditions"
- "Optimize this database query for better performance"

**Percentage of AI-generated code:** [Approximately X%]

**Human Contributions:**
- Architecture design and planning
- Custom business logic implementation
- Integration and testing
- UI/UX design decisions

*Note: Proper documentation of AI usage demonstrates transparency and earns bonus points in evaluation!*

---

## Team Contributions

- [Name 1]: [Specific contributions - e.g., Frontend development, API integration, etc.]
- [Name 2]: [Specific contributions - e.g., Backend development, Database design, etc.]
- [Name 3]: [Specific contributions - e.g., UI/UX design, Testing, Documentation, etc.]

---

## License

This project is licensed under the [LICENSE_NAME] License - see the [LICENSE](LICENSE) file for details.

**Common License Options:**
- MIT License (Permissive, widely used)
- Apache 2.0 (Permissive with patent grant)
- GPL v3 (Copyleft, requires derivative works to be open source)

---

Made with ❤️ at TinkerHub
