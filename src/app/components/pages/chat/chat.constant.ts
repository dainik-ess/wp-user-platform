export const CHAT = [
  {
    id: 1,
    name: 'John Doe',
    src: 'assets/images/faces/1.jpg',
    status: 'online',
    time: '10:30 AM',
    messages: [
      { text: 'Hello! How are you doing today?', time: '10:30 AM', sent: 'double-line' },
      { text: 'I’ve been working on the new project.', time: '10:32 AM', sent: 'double-line' },
      { text: 'Are you available for a call later?', time: '10:35 AM', sent: 'single-line' },
    ],
    pendingMessage: 1, // Number of unread messages
  },
  {
    id: 2,
    name: 'Jane Smith',
    src: 'assets/images/faces/2.jpg',
    status: 'offline',
    time: '09:15 AM',
    messages: [
      { text: 'Can we meet tomorrow?', time: '09:15 AM', sent: 'single-line' },
      { text: 'Let me know what time works for you.', time: '09:17 AM', sent: 'double-line' },
    ],
    isMessageRead:true
  },
  {
    id: 3,
    name: 'Alice Johnson',
    src: 'assets/images/faces/3.jpg',
    status: 'away',
    time: '11:00 AM',
    messages: [
      { text: 'Did you get the documents?', time: '11:00 AM', sent: 'double-line' },
      { text: 'Please review them when you have a chance.', time: '11:05 AM', sent: 'single-line' },
    ],
    pendingMessage: 2, // Number of unread messages
  },
  {
    id: 4,
    name: 'Michael Brown',
    src: 'assets/images/faces/4.jpg',
    status: 'online',
    time: 'Yesterday',
    messages: [
      { text: 'Hey, are we still on for the meeting?', time: 'Yesterday 4:00 PM', sent: 'double-line' },
      { text: 'I’ll be in the office around 3 PM.', time: 'Yesterday 4:05 PM', sent: 'single-line' },
    ],
  },
  {
    id: 5,
    name: 'Emily White',
    src: 'assets/images/faces/5.jpg',
    status: 'offline',
    time: '08:45 AM',
    messages: [
      { text: 'Good morning! I just sent over the files.', time: '08:45 AM', sent: 'double-line' },
    ],
    isMessageRead:false
  },
  {
    id: 6,
    name: 'David Wilson',
    src: 'assets/images/faces/6.jpg',
    status: 'busy',
    time: 'Today',
    messages: [
      { text: 'Let’s catch up later today.', time: 'Today 1:15 PM', sent: 'single-line' },
      { text: 'I have some updates on the project.', time: 'Today 1:20 PM', sent: 'single-line' },
    ],
  },
  {
    id: 7,
    name: 'Sophia Lee',
    src: 'assets/images/faces/7.jpg',
    status: 'online',
    time: 'Yesterday',
    messages: [
      { text: 'Hey! Are you coming to the event tonight?', time: 'Yesterday 6:30 PM', sent: 'double-line' },
    ],
  },
  {
    id: 8,
    name: 'Chris Evans',
    src: 'assets/images/faces/8.jpg',
    status: 'online',
    time: '10:00 AM',
    messages: [
      { text: 'Do you have time to discuss the new contract?', time: '10:00 AM', sent: 'double-line' },
      { text: 'Let me know when you’re free.', time: '10:05 AM', sent: 'single-line' },
    ],
  },
  {
    id: 9,
    name: 'Olivia Davis',
    src: 'assets/images/faces/9.jpg',
    status: 'away',
    time: 'Yesterday',
    messages: [
      { text: 'I’ll send the draft by the end of the day.', time: 'Yesterday 5:00 PM', sent: 'single-line' },
    ],
    pendingMessage: 0, // No unread messages
  },
  {
    id: 10,
    name: 'Liam Miller',
    src: 'assets/images/faces/10.jpg',
    status: 'offline',
    time: '07:30 AM',
    messages: [
      { text: 'Can you review the attached document?', time: '07:30 AM', sent: 'double-line' },
    ],
  },
];
