# Terminux 🖥️

A modern web-based terminal simulator that recreates the authentic Ubuntu terminal experience directly in your browser.

**🚀 [Try Terminux Live](https://terminux.live)**

![Terminux Screenshot](https://github.com/user-attachments/assets/b7e322b3-221b-46c4-99b5-636541f4150b)

## 🎯 About

Terminux is a fully functional terminal simulator built with vanilla web technologies. It provides a realistic Ubuntu terminal environment with a complete file system, built-in text editor, and modern file management capabilities. The project demonstrates advanced web development techniques while delivering a practical and educational tool.

## ✨ Key Features

### 🐧 Authentic Terminal Experience
- Pixel-perfect Ubuntu terminal interface
- Real command prompt with proper syntax highlighting
- Authentic color scheme and typography (Consolas font)
- Responsive window design with macOS-style title bar

### 📁 Complete File System Simulation
- Hierarchical directory structure (/, /home, /etc, /usr, /var)
- Full file and directory operations (create, read, delete)
- Path navigation with relative and absolute paths
- File content management and editing

### ✏️ Built-in Nano Text Editor
- Feature-complete text editor interface
- Standard keyboard shortcuts (Ctrl+S, Ctrl+X, Ctrl+W)
- Real-time file editing and saving
- Editor help system with shortcut documentation

### 🌍 Intelligent Language Support
- Automatic browser language detection
- Complete English/French localization
- Translated command outputs and error messages
- Localized date/time formatting

### 💾 Modern File Management
- Native browser file save dialogs (File System Access API)
- Fallback download functionality for older browsers
- Bulk file export capabilities
- Cross-platform compatibility

### ⌨️ Advanced Terminal Features
- Command history navigation (↑/↓ arrows)
- Tab autocompletion for files and commands
- Keyboard shortcuts (Ctrl+L clear, Ctrl+C cancel)
- Persistent session state

## 🛠️ Technical Implementation

### Core Technologies
- **Pure HTML5/CSS3/JavaScript** - No frameworks or dependencies
- **Flexbox & CSS Grid** - Modern responsive layout
- **File System Access API** - Native file operations
- **Web Storage APIs** - Session persistence
- **Modern ES6+** - Clean, maintainable code

### Architecture Highlights
- Object-oriented file system simulation
- Command pattern for terminal operations
- Modular translation system
- Event-driven UI interactions
- Responsive design patterns

## 📖 Command Reference

| Command | Description | Example |
|---------|-------------|---------|
| `help` | Display all available commands | `help` |
| `ls [path]` | List directory contents | `ls`, `ls /home` |
| `cd [path]` | Change current directory | `cd Documents` |
| `pwd` | Print working directory | `pwd` |
| `mkdir [name]` | Create new directory | `mkdir projects` |
| `touch [name]` | Create empty file | `touch readme.txt` |
| `nano [file]` | Open text editor | `nano welcome.txt` |
| `cat [file]` | Display file contents | `cat readme.txt` |
| `rm [name]` | Remove file or directory | `rm oldfile.txt` |
| `tree` | Show directory structure | `tree` |
| `download [file]` | Download file to device | `download data.txt` |
| `save [file]` | Save with native dialog | `save document.md` |
| `export` | Export all files | `export` |
| `clear` | Clear terminal screen | `clear` |
| `whoami` | Show current user | `whoami` |
| `date` | Display current date/time | `date` |
| `echo [text]` | Print text to terminal | `echo "Hello World"` |

### Fun Commands
| Command | Description | Example |
|---------|-------------|---------|
| `neofetch` | Show system information | `neofetch` |
| `cowsay [text]` | ASCII cow with message | `cowsay Hello` |
| `sl` | Steam locomotive animation | `sl` |

## 🎨 Design Features

### Visual Design
- **Authentic Ubuntu styling** with proper color schemes
- **Customizable backgrounds** via integrated color picker
- **Smooth animations** and micro-interactions
- **Responsive layout** adapting to all screen sizes

### User Experience
- **Intuitive interface** familiar to terminal users
- **Error handling** with helpful error messages
- **Visual feedback** for all user interactions
- **Accessibility considerations** with proper contrast and focus

## 🌐 Browser Compatibility

The application leverages modern web APIs while maintaining broad compatibility:

- **Chrome/Edge 86+**: Full feature support including native file saving
- **Firefox 78+**: Core functionality with download fallback
- **Safari 14+**: Complete compatibility with fallback features
- **Mobile browsers**: Touch-optimized interface with virtual keyboard support

## 💡 Use Cases

- **Educational tool** for learning terminal commands and Linux basics
- **Interactive demonstrations** showcasing modern web development capabilities
- **Portfolio projects** demonstrating advanced technical skills
- **Browser-based terminal** for environments without native terminal access
- **Fun terminal experience** with easter eggs and interactive commands
- **Command-line tutorials** and interactive documentation

## 📊 Project Stats

- **Languages**: HTML, CSS, JavaScript
- **Files**: 3 core files (index.html, style.css, script.js)
- **Dependencies**: Zero external libraries
- **Size**: Lightweight (~50KB total)
- **Performance**: Instant loading, smooth interactions

---

**🔓 Open Source Project** - View source code on [GitHub](https://github.com/RyZenoKelb/Terminux) | **🌐 Live Demo:** [terminux.live](https://terminux.live)

*Terminux demonstrates modern web development capabilities while providing a practical, educational terminal experience accessible to everyone.*

---

# Terminux 🖥️ (Français)

Un simulateur de terminal web moderne qui recrée l'expérience authentique du terminal Ubuntu directement dans votre navigateur.

## 🎯 À Propos

Terminux est un simulateur de terminal entièrement fonctionnel construit avec des technologies web vanilla. Il fournit un environnement de terminal Ubuntu réaliste avec un système de fichiers complet, un éditeur de texte intégré et des capacités modernes de gestion de fichiers. Le projet démontre des techniques avancées de développement web tout en offrant un outil pratique et éducatif.

## ✨ Fonctionnalités Principales

### 🐧 Expérience Terminal Authentique
- Interface terminal Ubuntu fidèle au pixel près
- Invite de commande réelle avec coloration syntaxique appropriée
- Schéma de couleurs et typographie authentiques (police Consolas)
- Design de fenêtre responsive avec barre de titre style macOS

### 📁 Simulation Complète du Système de Fichiers
- Structure de répertoires hiérarchique (/, /home, /etc, /usr, /var)
- Opérations complètes sur fichiers et répertoires (créer, lire, supprimer)
- Navigation de chemin avec chemins relatifs et absolus
- Gestion et édition du contenu des fichiers

### ✏️ Éditeur de Texte Nano Intégré
- Interface d'éditeur de texte complète
- Raccourcis clavier standards (Ctrl+S, Ctrl+X, Ctrl+W)
- Édition et sauvegarde de fichiers en temps réel
- Système d'aide de l'éditeur avec documentation des raccourcis

### 🌍 Support Linguistique Intelligent
- Détection automatique de la langue du navigateur
- Localisation complète anglais/français
- Sorties de commandes et messages d'erreur traduits
- Formatage de date/heure localisé

### 💾 Gestion Moderne des Fichiers
- Dialogues natifs de sauvegarde de fichiers du navigateur (File System Access API)
- Fonctionnalité de téléchargement de secours pour les navigateurs plus anciens
- Capacités d'export de fichiers en masse
- Compatibilité multiplateforme

### ⌨️ Fonctionnalités Avancées du Terminal
- Navigation dans l'historique des commandes (flèches ↑/↓)
- Autocomplétion par tabulation pour fichiers et commandes
- Raccourcis clavier (Ctrl+L effacer, Ctrl+C annuler)
- État de session persistant

## 🛠️ Implémentation Technique

### Technologies Principales
- **HTML5/CSS3/JavaScript pur** - Aucun framework ou dépendance
- **Flexbox & CSS Grid** - Mise en page responsive moderne
- **File System Access API** - Opérations de fichiers natives
- **APIs de stockage web** - Persistance de session
- **ES6+ moderne** - Code propre et maintenable

### Points Forts de l'Architecture
- Simulation de système de fichiers orientée objet
- Modèle de commande pour les opérations du terminal
- Système de traduction modulaire
- Interactions UI pilotées par événements
- Modèles de design responsive

## 📖 Référence des Commandes

| Commande | Description | Exemple |
|----------|-------------|---------|
| `help` | Afficher toutes les commandes disponibles | `help` |
| `ls [chemin]` | Lister le contenu du répertoire | `ls`, `ls /home` |
| `cd [chemin]` | Changer le répertoire courant | `cd Documents` |
| `pwd` | Afficher le répertoire de travail | `pwd` |
| `mkdir [nom]` | Créer un nouveau répertoire | `mkdir projets` |
| `touch [nom]` | Créer un fichier vide | `touch readme.txt` |
| `nano [fichier]` | Ouvrir l'éditeur de texte | `nano welcome.txt` |
| `cat [fichier]` | Afficher le contenu du fichier | `cat readme.txt` |
| `rm [nom]` | Supprimer fichier ou répertoire | `rm ancienfichier.txt` |
| `tree` | Afficher la structure des répertoires | `tree` |
| `download [fichier]` | Télécharger le fichier sur l'appareil | `download data.txt` |
| `save [fichier]` | Sauvegarder avec dialogue natif | `save document.md` |
| `export` | Exporter tous les fichiers | `export` |
| `clear` | Effacer l'écran du terminal | `clear` |
| `whoami` | Afficher l'utilisateur courant | `whoami` |
| `date` | Afficher la date/heure actuelle | `date` |
| `echo [texte]` | Imprimer du texte dans le terminal | `echo "Bonjour Monde"` |

### Commandes Amusantes
| Commande | Description | Exemple |
|----------|-------------|---------|
| `neofetch` | Afficher les informations système | `neofetch` |
| `cowsay [texte]` | Vache ASCII avec message | `cowsay Bonjour` |
| `sl` | Animation de locomotive à vapeur | `sl` |

## 🎨 Fonctionnalités de Design

### Design Visuel
- **Style Ubuntu authentique** avec schémas de couleurs appropriés
- **Arrière-plans personnalisables** via sélecteur de couleurs intégré
- **Animations fluides** et micro-interactions
- **Mise en page responsive** s'adaptant à toutes les tailles d'écran

### Expérience Utilisateur
- **Interface intuitive** familière aux utilisateurs de terminal
- **Gestion d'erreurs** avec messages d'erreur utiles
- **Retour visuel** pour toutes les interactions utilisateur
- **Considérations d'accessibilité** avec contraste et focus appropriés

## 🌐 Compatibilité Navigateur

L'application exploite les APIs web modernes tout en maintenant une large compatibilité :

- **Chrome/Edge 86+** : Support complet incluant la sauvegarde native de fichiers
- **Firefox 78+** : Fonctionnalité principale avec sauvegarde de secours
- **Safari 14+** : Compatibilité complète avec fonctionnalités de secours
- **Navigateurs mobiles** : Interface optimisée tactile avec support clavier virtuel

## 💡 Cas d'Usage

- **Outil éducatif** pour apprendre les commandes terminal et les bases Linux
- **Démonstrations interactives** montrant les capacités modernes de développement web
- **Projets de portfolio** démontrant des compétences techniques avancées
- **Terminal basé navigateur** pour environnements sans accès terminal natif
- **Expérience terminal amusante** avec easter eggs et commandes interactives
- **Tutoriels en ligne de commande** et documentation interactive

## 📊 Statistiques du Projet

- **Langages** : HTML, CSS, JavaScript
- **Fichiers** : 3 fichiers principaux (index.html, style.css, script.js)
- **Dépendances** : Zéro librairie externe
- **Taille** : Léger (~50KB total)
- **Performance** : Chargement instantané, interactions fluides

---

**🔓 Projet Open Source** - Voir le code source sur [GitHub](https://github.com/RyZenoKelb/Terminux) | **🌐 Démo Live:** [terminux.live](https://terminux.live)

*Terminux démontre les capacités modernes de développement web tout en fournissant une expérience de terminal pratique et éducative accessible à tous.*
