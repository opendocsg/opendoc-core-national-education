(function() {
    // Data Blob
    // =============================================================================
    // The main "blob" of site data constructed by liquid
    // We cherry pick to minimize size
    // Also because jsonify doesn't work quite right and collapses the page objects
    // into just strings when we jsonify the whole site
    var pages = [
        
        {
                name: "01.md",
                title: "Our Fundamentals",
                url: "/opendoc-core-national-education/01_defence_and_security/01.html",
                escapedPath: "01_defence_and_security/01.md",
                dir: "/01_defence_and_security/",
                tocId: "toc_/01_defence_and_security/",
                documentInfo: ["Defence and Security","",["01.md","02.md"]]
            },
            
        {
                name: "02.md",
                title: "Coming Soon!",
                url: "/opendoc-core-national-education/01_defence_and_security/02.html",
                escapedPath: "01_defence_and_security/02.md",
                dir: "/01_defence_and_security/",
                tocId: "toc_/01_defence_and_security/",
                documentInfo: ["Defence and Security","",["01.md","02.md"]]
            },
            
        {
                name: "02.md",
                title: "Our Fundamentals",
                url: "/opendoc-core-national-education/02_economy/02.html",
                escapedPath: "02_economy/02.md",
                dir: "/02_economy/",
                tocId: "toc_/02_economy/",
                documentInfo: ["Economy","",["01.md","02.md","03.md","04.md","05.md","06.md","07.md"]]
            },
            
        {
                name: "03.md",
                title: "Surviving Our Independence",
                url: "/opendoc-core-national-education/02_economy/03.html",
                escapedPath: "02_economy/03.md",
                dir: "/02_economy/",
                tocId: "toc_/02_economy/",
                documentInfo: ["Economy","",["01.md","02.md","03.md","04.md","05.md","06.md","07.md"]]
            },
            
        {
                name: "04.md",
                title: "Growing Our Economy",
                url: "/opendoc-core-national-education/02_economy/04.html",
                escapedPath: "02_economy/04.md",
                dir: "/02_economy/",
                tocId: "toc_/02_economy/",
                documentInfo: ["Economy","",["01.md","02.md","03.md","04.md","05.md","06.md","07.md"]]
            },
            
        {
                name: "05.md",
                title: "Staying Exceptional",
                url: "/opendoc-core-national-education/02_economy/05.html",
                escapedPath: "02_economy/05.md",
                dir: "/02_economy/",
                tocId: "toc_/02_economy/",
                documentInfo: ["Economy","",["01.md","02.md","03.md","04.md","05.md","06.md","07.md"]]
            },
            
        {
                name: "06.md",
                title: "Digging Deeper: Case Studies",
                url: "/opendoc-core-national-education/02_economy/06.html",
                escapedPath: "02_economy/06.md",
                dir: "/02_economy/",
                tocId: "toc_/02_economy/",
                documentInfo: ["Economy","",["01.md","02.md","03.md","04.md","05.md","06.md","07.md"]]
            },
            
        {
                name: "07.md",
                title: "Bibliography",
                url: "/opendoc-core-national-education/02_economy/07.html",
                escapedPath: "02_economy/07.md",
                dir: "/02_economy/",
                tocId: "toc_/02_economy/",
                documentInfo: ["Economy","",["01.md","02.md","03.md","04.md","05.md","06.md","07.md"]]
            },
            
        {
                name: "01.md",
                title: "Our Fundamentals",
                url: "/opendoc-core-national-education/03_infrastructure/01.html",
                escapedPath: "03_infrastructure/01.md",
                dir: "/03_infrastructure/",
                tocId: "toc_/03_infrastructure/",
                documentInfo: ["Infrastructure","",["01.md","02.md","03.md","04.md","05.md"]]
            },
            
        {
                name: "02.md",
                title: "Resource Constraints and Challenges",
                url: "/opendoc-core-national-education/03_infrastructure/02.html",
                escapedPath: "03_infrastructure/02.md",
                dir: "/03_infrastructure/",
                tocId: "toc_/03_infrastructure/",
                documentInfo: ["Infrastructure","",["01.md","02.md","03.md","04.md","05.md"]]
            },
            
        {
                name: "03.md",
                title: "Urban Planning",
                url: "/opendoc-core-national-education/03_infrastructure/03.html",
                escapedPath: "03_infrastructure/03.md",
                dir: "/03_infrastructure/",
                tocId: "toc_/03_infrastructure/",
                documentInfo: ["Infrastructure","",["01.md","02.md","03.md","04.md","05.md"]]
            },
            
        {
                name: "04.md",
                title: "Digging Deeper: Case Studies (Resources)",
                url: "/opendoc-core-national-education/03_infrastructure/04.html",
                escapedPath: "03_infrastructure/04.md",
                dir: "/03_infrastructure/",
                tocId: "toc_/03_infrastructure/",
                documentInfo: ["Infrastructure","",["01.md","02.md","03.md","04.md","05.md"]]
            },
            
        {
                name: "05.md",
                title: "Digging Deeper: Case Studies (Urban Planning)",
                url: "/opendoc-core-national-education/03_infrastructure/05.html",
                escapedPath: "03_infrastructure/05.md",
                dir: "/03_infrastructure/",
                tocId: "toc_/03_infrastructure/",
                documentInfo: ["Infrastructure","",["01.md","02.md","03.md","04.md","05.md"]]
            },
            
        {
                name: "01.md",
                title: "Our Fundamentals",
                url: "/opendoc-core-national-education/04_society/01.html",
                escapedPath: "04_society/01.md",
                dir: "/04_society/",
                tocId: "toc_/04_society/",
                documentInfo: ["Society","",["01.md","02.md","03.md","04.md","05.md","06.md","07.md"]]
            },
            
        {
                name: "02.md",
                title: "Building a Multicultural Singapore",
                url: "/opendoc-core-national-education/04_society/02.html",
                escapedPath: "04_society/02.md",
                dir: "/04_society/",
                tocId: "toc_/04_society/",
                documentInfo: ["Society","",["01.md","02.md","03.md","04.md","05.md","06.md","07.md"]]
            },
            
        {
                name: "03.md",
                title: "Creating a Shared Identity as Singaporeans",
                url: "/opendoc-core-national-education/04_society/03.html",
                escapedPath: "04_society/03.md",
                dir: "/04_society/",
                tocId: "toc_/04_society/",
                documentInfo: ["Society","",["01.md","02.md","03.md","04.md","05.md","06.md","07.md"]]
            },
            
        {
                name: "04.md",
                title: "Building and Maintaining a Caring Society",
                url: "/opendoc-core-national-education/04_society/04.html",
                escapedPath: "04_society/04.md",
                dir: "/04_society/",
                tocId: "toc_/04_society/",
                documentInfo: ["Society","",["01.md","02.md","03.md","04.md","05.md","06.md","07.md"]]
            },
            
        {
                name: "05.md",
                title: "Examples",
                url: "/opendoc-core-national-education/04_society/05.html",
                escapedPath: "04_society/05.md",
                dir: "/04_society/",
                tocId: "toc_/04_society/",
                documentInfo: ["Society","",["01.md","02.md","03.md","04.md","05.md","06.md","07.md"]]
            },
            
        {
                name: "06.md",
                title: "Digging Deeper: Case Studies",
                url: "/opendoc-core-national-education/04_society/06.html",
                escapedPath: "04_society/06.md",
                dir: "/04_society/",
                tocId: "toc_/04_society/",
                documentInfo: ["Society","",["01.md","02.md","03.md","04.md","05.md","06.md","07.md"]]
            },
            
        {
                name: "07.md",
                title: "Bibliography",
                url: "/opendoc-core-national-education/04_society/07.html",
                escapedPath: "04_society/07.md",
                dir: "/04_society/",
                tocId: "toc_/04_society/",
                documentInfo: ["Society","",["01.md","02.md","03.md","04.md","05.md","06.md","07.md"]]
            },
            
        {
                name: "main.md",
                title: "What is SG101?",
                url: "/opendoc-core-national-education/main.html",
                escapedPath: "main.md",
                dir: "/",
                tocId: "toc_/",
                documentInfo: ["Introduction",null,["main.md"]]
            },
            
        
    ]

    var pageIndex = {}
    var documentList = {}

    pages.forEach(function(page) {
        pageIndex[page.url] = page
        var documentTitle = page.documentInfo ? page.documentInfo[0] : 'root'
        if (documentList[documentTitle]) {
            documentList[documentTitle].push(page)
        } else {
            documentList[documentTitle] = [page]
        }
    })

    // Expose as global var
    root = typeof exports !== 'undefined' && exports !== null ? exports : this

    root.pageIndex = pageIndex;
    root.documentList = documentList;
})()