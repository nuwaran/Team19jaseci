# 🎮 RockBlitz - Premium Rock Paper Scissors Game

A modern, premium Rock Paper Scissors game with AI opponent powered by Jaclang backend and beautiful glassmorphism UI.

![Game Screenshot](screenshot.png)

## ✨ Features

- **🎨 Premium Glassmorphism UI** - Modern, sleek design with blur effects
- **🤖 Smart AI Opponent** - Powered by Groq LLaMA 3.3 70B model
- **🎯 Advanced Scoring System** - Start with 10 points, +5 for wins, -5 for losses
- **📊 Real-time Statistics** - Track wins, losses, and game history
- **📱 Fully Responsive** - Works perfectly on desktop, tablet, and mobile
- **⚡ Smooth Animations** - Engaging hover effects and transitions
- **🎪 Visual Battle Display** - See your choice vs AI in real-time
- **🏆 Game Over System** - Automatic restart when score reaches 0

## 🚀 Quick Start

### Prerequisites
- Python 3.8+
- Jaclang installed
- Groq API key

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/rockblitz.git
   cd rockblitz
   ```

2. **Install Jaclang**
   ```bash
   pip install jaclang
   ```

3. **Set up environment variables**
   ```bash
   export GROQ_API_KEY="your_groq_api_key_here"
   ```

4. **Run the backend**
   ```bash
   jac serve main.jac
   ```

5. **Open the game**
   - Open `index.html` in your browser
   - Or serve it with a local server:
   ```bash
   python -m http.server 8080
   ```

## 🎯 How to Play

1. **Start with 10 points**
2. **Choose** Rock 🪨, Paper 📄, or Scissors ✂️
3. **Battle** against the smart AI opponent
4. **Win**: +5 points | **Lose**: -5 points | **Tie**: No change
5. **Game Over** when your score reaches 0
6. **Restart** and try to beat your record!

## 🏗️ Architecture

### Frontend
- **HTML5** with semantic markup
- **CSS3** with modern features (glassmorphism, animations)
- **Vanilla JavaScript** for game logic and API calls

### Backend
- **Jaclang** for API endpoints
- **Groq LLaMA 3.3 70B** for intelligent AI moves
- **RESTful API** design

## 🛠️ API Endpoints

- `POST /walker/echo` - Get AI move based on game history
- `POST /walker/check_env` - Check API key configuration

## 🎨 Design Features

- **Glassmorphism UI** with backdrop blur effects
- **Gradient backgrounds** and smooth color transitions
- **Responsive grid layout** for all screen sizes
- **Micro-animations** for enhanced user experience
- **Loading states** and visual feedback

## 🔧 Configuration

Create a `.env` file in the root directory:
```
GROQ_API_KEY=your_api_key_here
```

## 📱 Browser Support

- Chrome 88+
- Firefox 84+
- Safari 14+
- Edge 88+

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Groq** for the powerful LLaMA 3.3 70B model
- **Jaclang** for the elegant backend framework
- **CSS-Tricks** for glassmorphism inspiration

## 📞 Support

If you encounter any issues or have questions:
- Open an issue on GitHub
- Email: your-email@example.com

---

⭐ **Star this repository if you found it helpful!**