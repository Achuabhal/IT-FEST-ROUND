const data = {

    team1: {
        1: {
            "question": "What is the name of the first computer virus?",
            "answer": "Brain",
        },
        2: {
            "question": "What was the first search engine?",
            "answer": "Archie",
        },
        3: {
            "question": "What is the name of the first web browser?",
            "answer": "World Wide Web",
        },
        4: {
            "question": "What is the name of the first computer mouse?",
            "answer": "The Mouse",
        },
        5: {
            "question": "What is the name of the first smartphone?",
            "answer": "IBM Simon",
        },
        6: {
            "question": "What is the name of the first commercial web server?",
            "answer": "NCSA HTTPd",
        },
        7: {
            "question": "What is the name of the first  high-level programing language?",
            "answer": "FORTRAN",
        },
        8: {
            "question": "What is the name of the first microprocessor?",
            "answer": "Intel 4004",
        },
        9: {
            "question": "What is the name of the first computer to win a chess match against a world champion?",
            "answer": "Deep Blue",
        },
        10: {
            "question": "What is the name of the first computer to win a game show against human contestants?",
            "answer": "Watson",
        },
        11: {
            "question": "Which operating system uses the 'NTFS' file system by default?",
            "answer": "Windows",
        },
        12: {
            "question": "What type of attack floods a network with traffic to disrupt services?",
            "answer": "DDoS",
        },
        13: {
            "question": "Which protocol is used to assign IP addresses automatically?",
            "answer": "DHCP",
        },
        14: {
            "question": "Which algorithm is commonly used in data compression?",
            "answer": "Huffman",
        },
        15: {
            "question": "Which type of malware demands payment to restore access to data?",
            "answer": "Ransomware",
        },
        16: {
            "question": "What unit is used to measure the speed of a processor?",
            "answer": "Hertz",
        },
        17: {
            "question": "Which company developed the Swift programming language?",
            "answer": "Apple",
        },
        18: {
            "question": "What does XML stand for?",
            "answer": "Extensible Markup Language",
        },
        19: {
            "question": "What protocol does email use to retrieve messages from a mail server?",
            "answer": "IMAP",
        },
        20: {
            "question": "What technology does an SSD use to store data?",
            "answer": "Flash",
        },
        21: {
            "question": "Which company developed the TensorFlow framework?",
            "answer": "Google",
        },
        22: {
            "question": "Which programming language is considered the foundation for Android development?",
            "answer": "Java",
        },
        23: {
            "question": "What method secures sensitive data by replacing it with an equivalent, non-sensitive value?",
            "answer": "Tokenization",
        },
        24: {
            "question": "What protocol translates human-readable domain names into IP addresses?",
            "answer": "DNS",
        },
        25: {
            "question": "What system is used to track and verify the origin and ownership of digital assets using cryptography?",
            "answer": "Blockchain",
        },
        26: {
            "question": "What term refers to small, independent services that work together as part of a larger application?",
            "answer": "Microservices",
        },
        27: {
            "question": "What term describes a tool or platform that automates the management of multiple software applications?",
            "answer": "Orchestration",
        },
        28: {
            "question": "What is the name for a system that uses multiple servers to distribute the load and improve performance?",
            "answer": "Load balancer",
        },
        29: {
            "question": "What system is used for managing and tracking the different versions of software code?",
            "answer": "Version control system",
        },
        30: {
            "question": "What term describes a network that provides a secure, encrypted connection over a less secure network?",
            "answer": "VPN",
        },
        31: {
            "question": "What hardware component provides power to all the other components in a computer?",
            "answer": "PSU",
        },
        32: {
            "question": "What component provides the physical interface for attaching RAM modules to the motherboard?",
            "answer": "DIMM",
        },
        33: {
            "question": "What is the term for a high-capacity, high-speed storage interface used in servers and high-performance computing?",
            "answer": "SAS",
        },
        34: {
            "question": "What type of memory chip provides non-volatile storage and is commonly used in embedded systems?",
            "answer": "EEPROM",
        },
        35: {
            "question": "What interface standard is designed for high-speed data transfer between a motherboard and expansion cards, often used for SSDs?",
            "answer": "M.2",
        },
        36: {
            "question": "What is the term for a hardware security module used to manage encryption keys and provide cryptographic functions?",
            "answer": "TPM",
        },

        37: {
            "question": "Name one popular cloud computing service.",
            "answer": "Amazon Web Services (AWS)"
        },
        38: {
            "question": "THINK was the company motto for more than 40 years, for the company often referred to as 'Big Blue.' What is this frequently-acronymed company?",
            "answer": "IBM"
        },
        39: {
            "question": "Since 2013, what technology company focused on payments has owned the popular smartphone cash transfer app Venmo?",
            "answer": "Paypal"
        },
        40: {
            "question": "PDF is, unsurprisingly, an acronym. Name any of the three words represented by PDF.",
            "answer": "Portable Document Format"
        },
        41: {
            "question": "Linux uses all the letters of what operating system family that it was designed to imitate?",
            "answer": "Unix"
        },
        42: {
            "question": "Used in electronic messages and web pages, they are similar to emoticons but are actual pictures instead of typographics. What are they?",
            "answer": "Emojis"
        },
        43: {
            "question": "What company providing hosting for software development and distributed version control familiar to computer programmers is known for its iconic Octocat (part cat, part octopus) logo?",
            "answer": "Github"
        },
        44: {
            "question": "How many bits would you have if you added two nibbles and one crumb?",
            "answer": "10 bits (nibble = 4 bits, crumb = 2 bits)"
        },
        45: {
            "question": "What is the name of World’s first digital Computer?",
            "answer": "ENIAC"
        },
        46: {
            "question": "Expand HDMI",
            "answer": "High Definition Multimedia Interface"
        },
        47: {
            "question": "What type of memory is Pendrive?",
            "answer": "Flash Memory"
        },
        48: {
            "question": "MS/DOS is written in which language?",
            "answer": "Assembly Language"
        },
        49: {
            "question": "Who is the new CEO of Flipkart.com?",
            "answer": "Kalyan Krishnamurthy"
        },
        50: {
            "question": "What company operates the popular social networking site LinkedIn?",
            "answer": "Microsoft"
        },
        51: {
            "question": "Which company pioneered the use of the USB interface?",
            "answer": "Compaq"
        },
        52: {
            "question": "What company developed the first personal computer, the Altair 8800?",
            "answer": "MITS"
        },
        53: {
            "question": "What is the name of the bus that connects the CPU to the RAM?",
            "answer": "Front Side Bus (FSB)"
        },
        54: {
            "question": "Which language is known for its use in the development of artificial intelligence applications?",
            "answer": "Prolog"
        },
        55: {
            "question": "Which programming language is known for its 'write once, run anywhere' capability?",
            "answer": "Java"
        },
        56: {
            "question": "What programming language is specifically designed for system-level programming and includes a rich type system?",
            "answer": "Rust"
        },
        57: {
            "question": "What software development model is based on a linear sequential design process?",
            "answer": "Waterfall model"
        },
        58: {
            "question": "What is the default port number for HTTPS?",
            "answer": "443"
        },
        59: {
            "question": "What language is primarily used for creating Android applications?",
            "answer": "Kotlin"
        },
        60: {
            "question": "What is the maximum length of a standard IPv6 address?",
            "answer": "128 bits"
        },
    }
};

export default data;

