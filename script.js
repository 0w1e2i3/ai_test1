const myData = {
    timeline: [
        { date: "2025 - Present", title: "國立臺北大學 數位 IC 設計實驗室", desc: "宋啟嘉教授指導。研究方向：高效能數位硬體加速架構優化與驗證。" },
        { date: "2024 - Present", title: "國立臺北大學 電機工程學系", desc: "轉學錄取。深化數位電路、SoC 與積體電路設計領域。" },
        { date: "2023 - 2024", title: "國立高雄大學 電機工程學系", desc: "入學基礎培養，掌握電子學、電路學與程式基礎邏輯。" }
    ],
    courses: [
        { name: "數位系統設計", sem: "114-1", cat: "核心", desc: "精通 Verilog RTL 撰寫、FSM 優化及 FPGA 整合。" },
        { name: "積體電路設計導論", sem: "114-2", cat: "專業", desc: "學習 CMOS 佈局觀念與利用 HSPICE 進行模擬優化。" },
        { name: "訊號與系統", sem: "113-2", cat: "基礎", desc: "具備系統頻率分析與 MATLAB 演算法模擬實務。" }
    ],
    projects: [
        { name: "FPGA 硬體加速器", status: "Research", tech: "Verilog / Vivado", desc: "利用 Pipeline 架構優化關鍵路徑，成功提升系統吞吐量。" },
        { name: "電機系網遷移計畫", status: "Done", tech: "HTML / FTP", desc: "主導系所官網數據遷移與介面優化，確保 99.9% 資料完整性。" }
    ],
    skills: {
        "Hardware": ["Verilog / SV", "FPGA 實作", "SoC 架構", "RTL Debug"],
        "EDA Tools": ["Xilinx Vivado", "Synopsys HSPICE", "ModelSim", "Git"],
        "Programming": ["C / C++", "Python", "MATLAB", "HTML/CSS"]
    },
    honors: [
        { icon: "🏆", title: "圍棋五段 (5th Dan)", desc: "具備高壓環境下的全局思維與邏輯佈局能力。" },
        { icon: "🔢", title: "數理競賽獎項", desc: "具備 AMC 與數學奧林匹亞競賽背景，數理邏輯紮實。" }
    ]
};

document.addEventListener('DOMContentLoaded', () => {
    // 渲染各區塊
    document.getElementById('timeline-container').innerHTML = myData.timeline.map(t => `<div class="timeline-item"><div class="timeline-date">${t.date}</div><div class="timeline-content"><h3>${t.title}</h3><p>${t.desc}</p></div></div>`).join('');
    document.getElementById('courses-grid').innerHTML = myData.courses.map(c => `<div class="card"><span class="tag">${c.sem} | ${c.cat}</span><h3 style="margin:10px 0">${c.name}</h3><p>${c.desc}</p></div>`).join('');
    document.getElementById('projects-grid').innerHTML = myData.projects.map(p => `<div class="card"><span class="status">${p.status}</span><span class="tag">${p.tech}</span><h3 style="margin:10px 0">${p.name}</h3><p>${p.desc}</p></div>`).join('');
    document.getElementById('skills-container').innerHTML = Object.entries(myData.skills).map(([cat, list]) => `<div class="skill-group"><h3>${cat}</h3><ul class="skill-list">${list.map(s => `<li>${s}</li>`).join('')}</ul></div>`).join('');
    document.getElementById('honors-grid').innerHTML = myData.honors.map(h => `<div class="card" style="display:flex; gap:20px; align-items:center;"><div style="font-size:1.8rem">${h.icon}</div><div><h3>${h.title}</h3><p style="font-size:0.85rem">${h.desc}</p></div></div>`).join('');

    // 動態效果與滾動
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => { if (entry.isIntersecting) entry.target.style.opacity = "1"; });
    }, { threshold: 0.1 });

    document.querySelectorAll('.section, .card').forEach(el => {
        el.style.opacity = "0"; el.style.transition = "all 0.8s ease-out"; observer.observe(el);
    });

    window.addEventListener('scroll', () => {
        const scrolled = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
        document.getElementById("myBar").style.width = scrolled + "%";
    });

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) window.scrollTo({ top: target.offsetTop - 75, behavior: 'smooth' });
        });
    });
});