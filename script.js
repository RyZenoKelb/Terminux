// Variables globales
let currentPath = '/home/user';
let commandHistory = [];
let historyIndex = -1;
let currentFile = null;
let isEditorOpen = false;
let userLanguage = navigator.language || navigator.userLanguage || 'en';
let isEnglish = !userLanguage.startsWith('fr');

// Traductions
const translations = {
    en: {
        welcome: 'Type <span class="success">help</span> to see available commands.',
        helpTitle: 'Available commands:',
        filesNav: 'Files and navigation:',
        lsDesc: '- List files and directories',
        cdDesc: '- Change directory',
        pwdDesc: '- Show current directory',
        mkdirDesc: '- Create a directory',
        touchDesc: '- Create an empty file',
        rmDesc: '- Remove a file or directory',
        catDesc: '- Display file content',
        textEditor: 'Text editor:',
        nanoDesc: '- Open text editor',
        saving: 'Saving:',
        downloadDesc: '- Download a file to your device',
        saveDesc: '- Save a file (modern API if supported)',
        exportDesc: '- Download all files as ZIP',
        system: 'System:',
        clearDesc: '- Clear screen',
        whoamiDesc: '- Show current user',
        dateDesc: '- Show date and time',
        echoDesc: '- Display text',
        treeDesc: '- Show file tree structure',
        funCommands: 'Fun commands:',
        neofetchDesc: '- Show system information',
        cowsayDesc: '- ASCII cow with message',
        slDesc: '- Steam locomotive animation',
        matrixDesc: '- Matrix digital rain effect',
        fortuneDesc: '- Random coding wisdom',
        lolcatDesc: '- Colorize text output',
        figletDesc: '- ASCII art text generator',
        jokeDesc: '- Random programming joke',
        weatherDesc: '- Simulated weather info',
        shortcuts: 'Shortcuts:',
        arrowKeys: '- Navigate history',
        tabKey: '- Autocompletion',
        ctrlL: '- Clear screen',
        ctrlC: '- Cancel',
        fileNotFound: 'No such file or directory',
        notDirectory: 'Not a directory',
        isDirectory: 'Is a directory',
        fileExists: 'File exists',
        missingOperand: 'missing operand',
        commandNotFound: 'command not found',
        fileSaved: 'File saved in terminal',
        saveToDevice: 'Do you also want to save this file to your device?',
        downloadSuccess: 'File downloaded!',
        saveInProgress: 'Saving file...',
        exportInProgress: 'Exporting all files...',
        apiNotSupported: 'Save API not supported, file downloaded instead',
        noFilesToExport: 'No files to export',
        filesExported: 'files exported successfully!',
        editorShortcuts: 'Editor Shortcuts',
        ctrlS: 'Save file',
        ctrlX: 'Quit editor',
        ctrlW: 'Search in text',
        escKey: 'Close this help',
        openSource: '🔓 Open Source Project - ',
        githubRepo: 'GitHub Repository'
    },
    fr: {
        welcome: 'Tapez <span class="success">help</span> pour voir les commandes disponibles.',
        helpTitle: 'Commandes disponibles:',
        filesNav: 'Fichiers et navigation:',
        lsDesc: '- Lister les fichiers et dossiers',
        cdDesc: '- Changer de répertoire',
        pwdDesc: '- Afficher le répertoire courant',
        mkdirDesc: '- Créer un dossier',
        touchDesc: '- Créer un fichier vide',
        rmDesc: '- Supprimer un fichier ou dossier',
        catDesc: '- Afficher le contenu d\'un fichier',
        textEditor: 'Éditeur de texte:',
        nanoDesc: '- Ouvrir l\'éditeur de texte',
        saving: 'Sauvegarde:',
        downloadDesc: '- Télécharger un fichier sur votre appareil',
        saveDesc: '- Sauvegarder un fichier (API moderne si supportée)',
        exportDesc: '- Télécharger tous les fichiers en ZIP',
        system: 'Système:',
        clearDesc: '- Vider l\'écran',
        whoamiDesc: '- Afficher l\'utilisateur courant',
        dateDesc: '- Afficher la date et l\'heure',
        echoDesc: '- Afficher du texte',
        treeDesc: '- Afficher l\'arborescence des fichiers',
        funCommands: 'Commandes amusantes:',
        neofetchDesc: '- Afficher les informations système',
        cowsayDesc: '- Vache ASCII avec message',
        slDesc: '- Animation de locomotive à vapeur',
        matrixDesc: '- Effet pluie numérique Matrix',
        fortuneDesc: '- Sagesse aléatoire de codeur',
        lolcatDesc: '- Coloriser le texte',
        figletDesc: '- Générateur texte ASCII art',
        jokeDesc: '- Blague de programmation aléatoire',
        weatherDesc: '- Infos météo simulées',
        shortcuts: 'Raccourcis:',
        arrowKeys: '- Naviguer dans l\'historique',
        tabKey: '- Autocomplétion',
        ctrlL: '- Vider l\'écran',
        ctrlC: '- Annuler',
        fileNotFound: 'Aucun fichier ou dossier de ce type',
        notDirectory: 'N\'est pas un répertoire',
        isDirectory: 'Est un répertoire',
        fileExists: 'Le fichier existe',
        missingOperand: 'opérande de fichier manquant',
        commandNotFound: 'commande introuvable',
        fileSaved: 'Fichier sauvegardé dans le terminal',
        saveToDevice: 'Voulez-vous aussi sauvegarder ce fichier sur votre appareil ?',
        downloadSuccess: 'Fichier téléchargé!',
        saveInProgress: 'Sauvegarde en cours...',
        exportInProgress: 'Export de tous les fichiers en cours...',
        apiNotSupported: 'API de sauvegarde non supportée, fichier téléchargé à la place',
        noFilesToExport: 'Aucun fichier à exporter',
        filesExported: 'fichiers exportés avec succès!',
        editorShortcuts: 'Raccourcis Éditeur',
        ctrlS: 'Sauvegarder le fichier',
        ctrlX: 'Quitter l\'éditeur',
        ctrlW: 'Rechercher dans le texte',
        escKey: 'Fermer cette aide',
        openSource: '🔓 Projet Open Source - ',
        githubRepo: 'Dépôt GitHub'
    }
};

function t(key) {
    return translations[isEnglish ? 'en' : 'fr'][key] || key;
}
let fileSystem = {
    '/': {
        type: 'directory',
        children: {
            'home': {
                type: 'directory',
                children: {
                    'user': {
                        type: 'directory',
                        children: {
                            'Documents': { type: 'directory', children: {} },
                            'Desktop': { type: 'directory', children: {} },
                            'Downloads': { type: 'directory', children: {} },
                            'welcome.txt': { 
                                type: 'file', 
                                content: 'Bienvenue dans votre terminal Ubuntu!\n\nCommandes disponibles:\n- help : Afficher l\'aide\n- ls : Lister les fichiers\n- cd : Changer de répertoire\n- nano : Ouvrir l\'éditeur de texte\n- clear : Vider l\'écran\n\nBonne exploration! 🐧'
                            },
                            'readme.md': {
                                type: 'file',
                                content: '# Terminal Simulator\n\n## Fonctionnalités\n\n- Système de fichiers complet\n- Éditeur de texte intégré\n- Historique des commandes\n- Interface Ubuntu authentique\n\n## Raccourcis\n\n- ↑/↓ : Naviguer dans l\'historique\n- Tab : Autocomplétion\n- Ctrl+L : Vider l\'écran\n- Ctrl+C : Annuler la commande courante'
                            }
                        }
                    }
                }
            },
            'etc': { type: 'directory', children: {} },
            'usr': { type: 'directory', children: {} },
            'var': { type: 'directory', children: {} }
        }
    }
};

// Éléments DOM
const terminal = document.getElementById('terminal');
const output = document.getElementById('output');
const commandInput = document.getElementById('commandInput');
const prompt = document.getElementById('prompt');
const editor = document.getElementById('editor');
const editorContent = document.getElementById('editorContent');
const editorFilename = document.getElementById('editorFilename');
const helpModal = document.getElementById('helpModal');
const paletteBtn = document.getElementById('paletteBtn');
const colorInput = document.getElementById('colorInput');

// Commandes disponibles
const commands = {
    help: () => `${t('helpTitle')}

    ${t('filesNav')}
    ls [path]       ${t('lsDesc')}
    cd [path]       ${t('cdDesc')}
    pwd             ${t('pwdDesc')}
    mkdir [name]    ${t('mkdirDesc')}
    touch [name]    ${t('touchDesc')}
    rm [name]       ${t('rmDesc')}
    cat [file]      ${t('catDesc')}
    
    ${t('textEditor')}
    nano [file]     ${t('nanoDesc')}
    
    ${t('saving')}
    download [file] ${t('downloadDesc')}
    save [file]     ${t('saveDesc')}
    export          ${t('exportDesc')}
    
    ${t('system')}
    clear           ${t('clearDesc')}
    whoami          ${t('whoamiDesc')}
    date            ${t('dateDesc')}
    echo [text]     ${t('echoDesc')}
    tree            ${t('treeDesc')}
    
    ${t('funCommands')}
    neofetch        ${t('neofetchDesc')}
    cowsay [text]   ${t('cowsayDesc')}
    sl              ${t('slDesc')}
    matrix          ${t('matrixDesc')}
    fortune         ${t('fortuneDesc')}
    lolcat [text]   ${t('lolcatDesc')}
    figlet [text]   ${t('figletDesc')}
    joke            ${t('jokeDesc')}
    weather         ${t('weatherDesc')}
    
    ${t('shortcuts')}
    ↑/↓            ${t('arrowKeys')}
    Tab            ${t('tabKey')}
    Ctrl+L         ${t('ctrlL')}
    Ctrl+C         ${t('ctrlC')}`,

    ls: (args = '') => {
        const targetPath = resolveRelativePath(args.trim() || currentPath);
        const dir = getDirectoryAtPath(targetPath);
        
        if (!dir) return `ls: ${targetPath}: ${t('fileNotFound')}`;
        if (dir.type !== 'directory') return `ls: ${targetPath}: ${t('notDirectory')}`;
        
        const items = Object.entries(dir.children).map(([name, item]) => {
            if (item.type === 'directory') {
                return `<span class="info">${name}/</span>`;
            } else {
                return `<span class="success">${name}</span>`;
            }
        });
        
        return items.length > 0 ? items.join('  ') : '';
    },

    cd: (args) => {
        if (!args.trim()) {
            currentPath = '/home/user';
            updatePrompt();
            return '';
        }
        
        const targetPath = resolveRelativePath(args.trim());
        const dir = getDirectoryAtPath(targetPath);
        
        if (!dir) return `cd: ${targetPath}: ${t('fileNotFound')}`;
        if (dir.type !== 'directory') return `cd: ${targetPath}: ${t('notDirectory')}`;
        
        currentPath = targetPath;
        updatePrompt();
        return '';
    },

    pwd: () => currentPath,

    mkdir: (args) => {
        if (!args.trim()) return `mkdir: ${t('missingOperand')}`;
        
        const name = args.trim();
        if (name.includes('/')) return `mkdir: ${isEnglish ? 'invalid directory name' : 'nom de répertoire invalide'}`;
        
        const currentDir = getDirectoryAtPath(currentPath);
        if (currentDir.children[name]) return `mkdir: ${isEnglish ? 'cannot create directory' : 'impossible de créer le répertoire'} '${name}': ${t('fileExists')}`;
        
        currentDir.children[name] = { type: 'directory', children: {} };
        return '';
    },

    touch: (args) => {
        if (!args.trim()) return `touch: ${t('missingOperand')}`;
        
        const name = args.trim();
        if (name.includes('/')) return `touch: ${isEnglish ? 'invalid filename' : 'nom de fichier invalide'}`;
        
        const currentDir = getDirectoryAtPath(currentPath);
        if (!currentDir.children[name]) {
            currentDir.children[name] = { type: 'file', content: '' };
        }
        return '';
    },

    rm: (args) => {
        if (!args.trim()) return `rm: ${t('missingOperand')}`;
        
        const name = args.trim();
        if (name.includes('/')) return `rm: ${isEnglish ? 'invalid name' : 'nom invalide'}`;
        
        const currentDir = getDirectoryAtPath(currentPath);
        if (!currentDir.children[name]) return `rm: ${isEnglish ? 'cannot remove' : 'impossible de supprimer'} '${name}': ${t('fileNotFound')}`;
        
        delete currentDir.children[name];
        return '';
    },

    cat: (args) => {
        if (!args.trim()) return `cat: ${t('missingOperand')}`;
        
        const targetPath = resolveRelativePath(args.trim());
        const file = getDirectoryAtPath(targetPath);
        
        if (!file) return `cat: ${targetPath}: ${t('fileNotFound')}`;
        if (file.type !== 'file') return `cat: ${targetPath}: ${t('isDirectory')}`;
        
        return file.content || '';
    },

    nano: (args) => {
        if (!args.trim()) return `nano: ${isEnglish ? 'filename missing' : 'nom de fichier manquant'}`;
        
        const filename = args.trim();
        if (filename.includes('/')) return `nano: ${isEnglish ? 'invalid filename' : 'nom de fichier invalide'}`;
        
        const currentDir = getDirectoryAtPath(currentPath);
        
        if (!currentDir.children[filename]) {
            currentDir.children[filename] = { type: 'file', content: '' };
        }
        
        if (currentDir.children[filename].type !== 'file') {
            return `nano: ${filename}: ${t('isDirectory')}`;
        }
        
        openEditor(filename, currentDir.children[filename].content);
        return '';
    },

    clear: () => {
        output.innerHTML = '';
        return '';
    },

    whoami: () => 'user',

    date: () => new Date().toLocaleString(isEnglish ? 'en-US' : 'fr-FR'),

    echo: (args) => args || '',

    tree: (args = '') => {
        const targetPath = resolveRelativePath(args.trim() || currentPath);
        const dir = getDirectoryAtPath(targetPath);
        
        if (!dir) return `tree: ${targetPath}: ${t('fileNotFound')}`;
        if (dir.type !== 'directory') return `tree: ${targetPath}: ${t('notDirectory')}`;
        
        return generateTree(dir, '', true);
    },

    download: (args) => {
        if (!args.trim()) return `download: ${isEnglish ? 'filename missing' : 'nom de fichier manquant'}`;
        
        const filename = args.trim();
        const targetPath = resolveRelativePath(filename);
        const file = getDirectoryAtPath(targetPath);
        
        if (!file) return `download: ${filename}: ${t('fileNotFound')}`;
        if (file.type !== 'file') return `download: ${filename}: ${t('isDirectory')}`;
        
        downloadFile(filename, file.content);
        return `<span class="success">${t('downloadSuccess').replace('!', '')} "${filename}"!</span>`;
    },

    save: (args) => {
        if (!args.trim()) return `save: ${isEnglish ? 'filename missing' : 'nom de fichier manquant'}`;
        
        const filename = args.trim();
        const targetPath = resolveRelativePath(filename);
        const file = getDirectoryAtPath(targetPath);
        
        if (!file) return `save: ${filename}: ${t('fileNotFound')}`;
        if (file.type !== 'file') return `save: ${filename}: ${t('isDirectory')}`;
        
        saveFileToDevice(filename, file.content);
        return `<span class="success">${t('saveInProgress').replace('...', '')} "${filename}"...</span>`;
    },

    export: () => {
        exportAllFiles();
        return `<span class="success">${t('exportInProgress')}</span>`;
    },

    // Easter Eggs
    neofetch: () => {
        const ascii = `
    <span class="info">╭─────────────────────────╮</span>
    <span class="info">│</span>  <span class="success">Terminux 1.0</span>          <span class="info"> │</span>
    <span class="info">│</span>  <span class="info">────────────────────</span>   <span class="info">│</span>
    <span class="info">│</span>  <span class="warning">OS:</span> Ubuntu (Web)      <span class="info"> │</span>
    <span class="info">│</span>  <span class="warning">Shell:</span> terminux       <span class="info"> │</span>
    <span class="info">│</span>  <span class="warning">Resolution:</span> ${window.innerWidth}x${window.innerHeight} <span class="info">  │</span>
    <span class="info">│</span>  <span class="warning">Terminal:</span> terminux.live<span class="info">│</span>
    <span class="info">│</span>  <span class="warning">Language:</span> ${isEnglish ? 'English' : 'Français'}    <span class="info"> │</span>
    <span class="info">╰─────────────────────────╯</span>`;
        return ascii;
    },

    cowsay: (args) => {
        const message = args || (isEnglish ? 'Moo!' : 'Meuh!');
        const topLine = '─'.repeat(message.length + 2);
        return `
     <span class="warning">╭─${topLine}─╮</span>
     <span class="warning">│</span>  ${message} <span class="warning"> │</span>
     <span class="warning">╰─${topLine}─╯</span>
        <span class="success">\\   ^__^</span>
         <span class="success">\\  (oo)\\_______</span>
            <span class="success">(__) \\       )\\/\\</span>
                <span class="success">||----w |</span>
                <span class="success">||     ||</span>`;
    },

    sl: () => {
        return `<span class="warning">
      ====        ________                ___________
  _D _|  |_______/        \\__I_I_____===__|_________|
   |(_)---  |   H\\________/ |   |        =|___ ___|      
   /     |  |   H  |  |     |   |         ||_| |_||     
  |      |  |   H  |__--------------------| [___] |     
  | ________|___H__/__|_____/[][]~\\_______|       |     
  |/ |   |-----------I_____I [][] []  D   |=======|__
__/ =| o |=-~~\\  /~~\\  /~~\\  /~~\\ ____Y___________|__
 |/-=|___|=O=====O=====O=====O   |_____/~\\___/      
  \\_/      \\__/  \\__/  \\__/  \\__/      \\_/
</span>
<span class="info">${isEnglish ? 'You have been expecting a train, haven\'t you? This is SL (Steam Locomotive)!' : 'Vous vous attendiez à un train, n\'est-ce pas? Voici SL (Locomotive à Vapeur)!'}</span>`;
    },

    // Nouveaux Easter Eggs
    matrix: () => {
        const chars = ['0', '1', ' ', ' ', ' '];
        let output = '<span class="success">';
        for (let i = 0; i < 10; i++) {
            for (let j = 0; j < 60; j++) {
                output += chars[Math.floor(Math.random() * chars.length)];
            }
            output += '\n';
        }
        output += '</span>';
        return output + `\n<span class="info">${isEnglish ? 'Welcome to the Matrix...' : 'Bienvenue dans la Matrice...'}</span>`;
    },

    fortune: () => {
        const fortunes = isEnglish ? [
            "Today is a good day to code! 💻",
            "The best way to predict the future is to implement it.",
            "Code is poetry written for machines to understand.",
            "Every expert was once a beginner. Keep coding! 🚀",
            "Debugging is twice as hard as writing code in the first place.",
            "Talk is cheap. Show me the code. - Linus Torvalds",
            "Programs must be written for people to read. - Harold Abelson"
        ] : [
            "Aujourd'hui est un bon jour pour coder! 💻",
            "La meilleure façon de prédire l'avenir est de l'implémenter.",
            "Le code est de la poésie écrite pour que les machines comprennent.",
            "Chaque expert était autrefois débutant. Continuez à coder! 🚀",
            "Déboguer est deux fois plus difficile qu'écrire du code.",
            "Les paroles sont gratuites. Montrez-moi le code. - Linus Torvalds",
            "Les programmes doivent être écrits pour que les gens les lisent."
        ];
        return `<span class="warning">💫 ${fortunes[Math.floor(Math.random() * fortunes.length)]}</span>`;
    },

    lolcat: (args) => {
        const text = args || 'Terminux';
        const colors = ['error', 'warning', 'success', 'info'];
        let output = '';
        for (let i = 0; i < text.length; i++) {
            const color = colors[i % colors.length];
            output += `<span class="${color}">${text[i]}</span>`;
        }
        return output;
    },

    figlet: (args) => {
        const text = (args || 'TERMINUX').toUpperCase().slice(0, 8);
        if (text === 'TERMINUX') {
            return `<span class="success">
████████ ████████ ██████   ███    ███ ██ ███    ██ ██    ██ ██   ██ 
   ██    ██       ██   ██  ████  ████ ██ ████   ██ ██    ██  ██ ██  
   ██    █████    ██████   ██ ████ ██ ██ ██ ██  ██ ██    ██   ███   
   ██    ██       ██   ██  ██  ██  ██ ██ ██  ██ ██ ██    ██  ██ ██  
   ██    ████████ ██   ██  ██      ██ ██ ██   ████  ██████  ██   ██ 
</span>`;
        } else {
            let output = '<span class="success">\n';
            output += `${text}\n`;
            output += '█'.repeat(text.length) + '\n';
            output += '</span>';
            return output;
        }
    },

    joke: () => {
        const jokes = isEnglish ? [
            "Why do programmers prefer dark mode?\nBecause light attracts bugs! 🐛",
            "How many programmers does it take to change a light bulb?\nNone. That's a hardware problem. 💡",
            "Why do Java developers wear glasses?\nBecause they can't C# 👓",
            "What's the object-oriented way to become wealthy?\nInheritance! 💰",
            "Why don't programmers like nature?\nIt has too many bugs! 🌿🐛"
        ] : [
            "Pourquoi les programmeurs préfèrent le mode sombre?\nParce que la lumière attire les bugs! 🐛",
            "Combien faut-il de programmeurs pour changer une ampoule?\nAucun. C'est un problème hardware. 💡",
            "Pourquoi les développeurs Java portent des lunettes?\nParce qu'ils ne peuvent pas C# 👓",
            "Quelle est la façon orientée objet de devenir riche?\nL'héritage! 💰",
            "Pourquoi les programmeurs n'aiment pas la nature?\nElle a trop de bugs! 🌿🐛"
        ];
        return `<span class="warning">${jokes[Math.floor(Math.random() * jokes.length)]}</span>`;
    },

    weather: () => {
        const weathers = [
            { icon: '☀️', desc: isEnglish ? 'Sunny' : 'Ensoleillé' },
            { icon: '⛅', desc: isEnglish ? 'Partly Cloudy' : 'Partiellement nuageux' },
            { icon: '🌧️', desc: isEnglish ? 'Rainy' : 'Pluvieux' },
            { icon: '❄️', desc: isEnglish ? 'Snowy' : 'Neigeux' },
            { icon: '⛈️', desc: isEnglish ? 'Stormy' : 'Orageux' }
        ];
        const weather = weathers[Math.floor(Math.random() * weathers.length)];
        const temp = Math.floor(Math.random() * 30) + 5;
        
        return `<span class="info">
${weather.icon} ${weather.desc}
🌡️  ${temp}°C
📍 Terminux City
${isEnglish ? '(Simulated weather data)' : '(Données météo simulées)'}
</span>`;
    },

    // Easter Eggs Bonus
    uptime: () => {
        const startTime = Date.now() - (Math.random() * 1000000);
        const uptime = Math.floor((Date.now() - startTime) / 1000);
        const days = Math.floor(uptime / 86400);
        const hours = Math.floor((uptime % 86400) / 3600);
        const minutes = Math.floor((uptime % 3600) / 60);
        
        return `<span class="info">${isEnglish ? 'System uptime' : 'Temps de fonctionnement'}: ${days}d ${hours}h ${minutes}m</span>`;
    },

    ping: (args) => {
        const host = args || 'terminux.live';
        const time = Math.floor(Math.random() * 50) + 10;
        return `<span class="success">PING ${host}: 64 bytes, time=${time}ms ✓</span>`;
    }
};

// Utilitaires système de fichiers
function resolveRelativePath(path) {
    if (path.startsWith('/')) return path;
    if (path === '..') {
        const parts = currentPath.split('/').filter(p => p);
        parts.pop();
        return '/' + parts.join('/');
    }
    if (path === '.') return currentPath;
    return currentPath === '/' ? `/${path}` : `${currentPath}/${path}`;
}

function getDirectoryAtPath(path) {
    if (path === '/') return fileSystem['/'];
    
    const parts = path.split('/').filter(p => p);
    let current = fileSystem['/'];
    
    for (const part of parts) {
        if (!current.children || !current.children[part]) return null;
        current = current.children[part];
    }
    
    return current;
}

function generateTree(dir, prefix = '', isLast = true) {
    let result = '';
    const entries = Object.entries(dir.children);
    
    entries.forEach(([name, item], index) => {
        const isLastItem = index === entries.length - 1;
        const connector = isLastItem ? '└── ' : '├── ';
        const icon = item.type === 'directory' ? '📁' : '📄';
        
        result += prefix + connector + icon + ' ' + name + '\n';
        
        if (item.type === 'directory' && Object.keys(item.children).length > 0) {
            const newPrefix = prefix + (isLastItem ? '    ' : '│   ');
            result += generateTree(item, newPrefix, false);
        }
    });
    
    return result;
}

// Fonctions de sauvegarde
function downloadFile(filename, content) {
    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
}

async function saveFileToDevice(filename, content) {
    if ('showSaveFilePicker' in window) {
        try {
            const fileHandle = await window.showSaveFilePicker({
                suggestedName: filename,
                types: [{
                    description: isEnglish ? 'Text files' : 'Fichiers texte',
                    accept: {
                        'text/plain': ['.txt', '.md', '.js', '.css', '.html', '.json'],
                    },
                }],
            });
            
            const writable = await fileHandle.createWritable();
            await writable.write(content);
            await writable.close();
            
            showNotification(`${isEnglish ? 'File' : 'Fichier'} "${filename}" ${isEnglish ? 'saved successfully!' : 'sauvegardé avec succès!'}`, 'success');
        } catch (err) {
            if (err.name !== 'AbortError') {
                showNotification(isEnglish ? 'Error while saving' : 'Erreur lors de la sauvegarde', 'error');
                console.error('Erreur de sauvegarde:', err);
            }
        }
    } else {
        downloadFile(filename, content);
        showNotification(t('apiNotSupported'), 'warning');
    }
}

function getAllFiles(dir = fileSystem['/'], path = '') {
    let files = [];
    
    Object.entries(dir.children).forEach(([name, item]) => {
        const fullPath = path ? `${path}/${name}` : name;
        
        if (item.type === 'file') {
            files.push({
                name: name,
                path: fullPath,
                content: item.content
            });
        } else if (item.type === 'directory') {
            files = files.concat(getAllFiles(item, fullPath));
        }
    });
    
    return files;
}

async function exportAllFiles() {
    const files = getAllFiles();
    
    if (files.length === 0) {
        showNotification(t('noFilesToExport'), 'warning');
        return;
    }

    if ('showSaveFilePicker' in window) {
        try {
            for (const file of files) {
                const fileHandle = await window.showSaveFilePicker({
                    suggestedName: `export_${file.name}`,
                    types: [{
                        description: isEnglish ? 'Text files' : 'Fichiers texte',
                        accept: { 'text/plain': ['.txt'] },
                    }],
                });
                
                const writable = await fileHandle.createWritable();
                await writable.write(`# ${isEnglish ? 'File' : 'Fichier'}: ${file.path}\n\n${file.content}`);
                await writable.close();
            }
            showNotification(`${files.length} ${t('filesExported')}`, 'success');
        } catch (err) {
            if (err.name !== 'AbortError') {
                downloadAllFilesAsZip(files);
            }
        }
    } else {
        let exportContent = `# ${isEnglish ? 'File system export' : 'Export du système de fichiers'}\n`;
        exportContent += `# ${isEnglish ? 'Generated on' : 'Généré le'}: ${new Date().toLocaleString(isEnglish ? 'en-US' : 'fr-FR')}\n\n`;
        
        files.forEach(file => {
            exportContent += `\n${'='.repeat(50)}\n`;
            exportContent += `# ${isEnglish ? 'File' : 'Fichier'}: ${file.path}\n`;
            exportContent += `${'='.repeat(50)}\n\n`;
            exportContent += file.content;
            exportContent += '\n\n';
        });
        
        downloadFile('export_files.txt', exportContent);
        showNotification(isEnglish ? 'All files exported to export_files.txt' : 'Tous les fichiers exportés dans export_files.txt', 'success');
    }
}

// Autocomplétion
function getCompletions(input) {
    const parts = input.trim().split(' ');
    const command = parts[0];
    const arg = parts[parts.length - 1] || '';
    
    if (parts.length === 1) {
        return Object.keys(commands).filter(cmd => cmd.startsWith(command));
    }
    
    if (['ls', 'cd', 'cat', 'rm', 'nano', 'download', 'save'].includes(command)) {
        const currentDir = getDirectoryAtPath(currentPath);
        return Object.keys(currentDir.children).filter(name => name.startsWith(arg));
    }
    
    if (['cowsay', 'lolcat', 'figlet'].includes(command)) {
        // Suggestions pour commandes avec texte
        const suggestions = isEnglish ? 
            ['Hello World', 'Terminux', 'Welcome', 'Code is Art', 'Open Source'] :
            ['Bonjour Monde', 'Terminux', 'Bienvenue', 'Le Code est Art', 'Open Source'];
        return suggestions.filter(s => s.toLowerCase().startsWith(arg.toLowerCase()));
    }
    
    return [];
}

// Gestion de l'éditeur
function openEditor(filename, content) {
    currentFile = filename;
    isEditorOpen = true;
    
    editorFilename.textContent = filename;
    editorContent.value = content;
    editor.classList.remove('hidden');
    editorContent.focus();
}

function closeEditor() {
    isEditorOpen = false;
    currentFile = null;
    editor.classList.add('hidden');
    commandInput.focus();
}

function saveFile() {
    if (!currentFile) return;
    
    const currentDir = getDirectoryAtPath(currentPath);
    if (currentDir.children[currentFile]) {
        currentDir.children[currentFile].content = editorContent.value;
        showNotification(t('fileSaved'), 'success');
        
        // Proposer aussi de sauvegarder sur l'appareil
        setTimeout(() => {
            const saveToDevice = confirm(t('saveToDevice'));
            if (saveToDevice) {
                saveFileToDevice(currentFile, editorContent.value);
            }
        }, 1000);
    }
}

// Exécution des commandes
function executeCommand(commandLine) {
    if (!commandLine.trim()) return;

    const [command, ...args] = commandLine.trim().split(' ');
    const argString = args.join(' ');

    commandHistory.push(commandLine);
    historyIndex = -1;

    // Afficher la commande
    const commandDiv = document.createElement('div');
    commandDiv.className = 'command-line';
    commandDiv.innerHTML = `<span class="prompt">${getPromptText()}</span>${commandLine}`;
    output.appendChild(commandDiv);

    // Exécuter et afficher le résultat
    let result;
    if (commands[command]) {
        result = commands[command](argString);
    } else {
        result = `<span class="error">${isEnglish ? 'bash' : 'bash'}: ${command}: ${t('commandNotFound')}</span>`;
    }

    if (result && command !== 'clear') {
        const outputDiv = document.createElement('div');
        outputDiv.className = 'command-output';
        outputDiv.innerHTML = result;
        output.appendChild(outputDiv);
    }

    // Auto-scroll si nécessaire
    const terminalContent = document.querySelector('.terminal-content');
    setTimeout(() => {
        terminalContent.scrollTop = terminalContent.scrollHeight;
    }, 50);
}

// Mise à jour du prompt
function updatePrompt() {
    prompt.textContent = getPromptText();
}

function getPromptText() {
    const pathDisplay = currentPath.replace('/home/user', '~');
    return `user@ubuntu:${pathDisplay}$ `;
}

// Notifications
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `command-output ${type}`;
    notification.textContent = message;
    output.appendChild(notification);
    output.scrollTop = output.scrollHeight;
}

// Gestion des événements
function setupEventListeners() {
    // Terminal input
    commandInput.addEventListener('keydown', (e) => {
        if (isEditorOpen) return;

        if (e.key === 'Enter') {
            e.preventDefault();
            executeCommand(commandInput.value);
            commandInput.value = '';
        } else if (e.key === 'ArrowUp') {
            e.preventDefault();
            if (commandHistory.length > 0) {
                if (historyIndex === -1) historyIndex = commandHistory.length - 1;
                else historyIndex = Math.max(0, historyIndex - 1);
                commandInput.value = commandHistory[historyIndex];
            }
        } else if (e.key === 'ArrowDown') {
            e.preventDefault();
            if (historyIndex !== -1) {
                historyIndex++;
                if (historyIndex >= commandHistory.length) {
                    historyIndex = -1;
                    commandInput.value = '';
                } else {
                    commandInput.value = commandHistory[historyIndex];
                }
            }
        } else if (e.key === 'Tab') {
            e.preventDefault();
            const completions = getCompletions(commandInput.value);
            if (completions.length === 1) {
                const parts = commandInput.value.trim().split(' ');
                if (parts.length === 1) {
                    commandInput.value = completions[0] + ' ';
                } else {
                    parts[parts.length - 1] = completions[0];
                    commandInput.value = parts.join(' ') + ' ';
                }
            }
        }
    });

    // Raccourcis globaux
    document.addEventListener('keydown', (e) => {
        if (e.ctrlKey && e.key === 'l' && !isEditorOpen) {
            e.preventDefault();
            output.innerHTML = '';
        }
        
        if (e.ctrlKey && e.key === 'c' && !isEditorOpen) {
            e.preventDefault();
            commandInput.value = '';
        }
    });

    // Éditeur
    editorContent.addEventListener('keydown', (e) => {
        if (e.ctrlKey && e.key === 's') {
            e.preventDefault();
            saveFile();
        } else if (e.ctrlKey && e.key === 'x') {
            e.preventDefault();
            closeEditor();
        } else if (e.ctrlKey && e.key === 'w') {
            e.preventDefault();
            helpModal.classList.remove('hidden');
        }
    });

    // Fermer l'aide
    helpModal.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            helpModal.classList.add('hidden');
        }
    });

    helpModal.addEventListener('click', (e) => {
        if (e.target === helpModal) {
            helpModal.classList.add('hidden');
        }
    });

    // Palette de couleurs
    paletteBtn.addEventListener('click', () => {
        colorInput.click();
    });

    colorInput.addEventListener('change', (e) => {
        document.body.style.backgroundColor = e.target.value;
        document.querySelector('.terminal-content').style.backgroundColor = e.target.value;
    });

    colorInput.addEventListener('input', (e) => {
        document.body.style.backgroundColor = e.target.value;
        document.querySelector('.terminal-content').style.backgroundColor = e.target.value;
    });

    // Focus automatique
    document.addEventListener('click', (e) => {
        if (!isEditorOpen && e.target !== commandInput) {
            commandInput.focus();
        }
    });
}

// Initialisation
function init() {
    setupEventListeners();
    updatePrompt();
    
    // Message de bienvenue simple
    const welcomeDiv = document.createElement('div');
    welcomeDiv.className = 'command-output info';
    welcomeDiv.innerHTML = t('welcome');
    output.appendChild(welcomeDiv);
    
    // Mettre à jour le footer avec la langue
    const footer = document.querySelector('.footer');
    if (footer) {
        footer.innerHTML = `<span>${t('openSource')}</span><a href="https://github.com/RyZenoKelb/Terminux" target="_blank" rel="noopener noreferrer">${t('githubRepo')}</a>`;
    }
    
    // Mettre à jour la modal d'aide
    const helpModalTitle = document.getElementById('helpModalTitle');
    const helpCtrlS = document.getElementById('helpCtrlS');
    const helpCtrlX = document.getElementById('helpCtrlX');
    const helpCtrlW = document.getElementById('helpCtrlW');
    const helpEsc = document.getElementById('helpEsc');
    
    if (helpModalTitle) helpModalTitle.textContent = t('editorShortcuts');
    if (helpCtrlS) helpCtrlS.textContent = t('ctrlS');
    if (helpCtrlX) helpCtrlX.textContent = t('ctrlX');
    if (helpCtrlW) helpCtrlW.textContent = t('ctrlW');
    if (helpEsc) helpEsc.textContent = t('escKey');
    
    commandInput.focus();
}

// Démarrer l'application
document.addEventListener('DOMContentLoaded', init);