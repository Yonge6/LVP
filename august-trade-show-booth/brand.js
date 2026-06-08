const sharedRequirements = {
  machines: [
    ["Hydra 9 Gen2", "1900 × 1045 × 1035 mm", '74.8" × 41.1" × 40.7"', "独立落地旗舰平台", "Freestanding flagship platform"],
    ["Cobra 10", "1680 × 1090 × 940 mm", '66" × 43" × 37"', "独立落地工作室平台", "Freestanding workshop platform"],
    ["XRF", "1085 × 725 × 268 mm", '43.2" × 28.5" × 10.5"', "桌面机 / 综合工作台最大", "Largest unit on desktop bench"],
    ["VertiGo", "630 × 550 × 710 mm", '24.8" × 21.65" × 27.95"', "桌面机 / 杯壶与旋转雕刻", "Desktop tumbler and rotary engraving"],
    ["Y Series", "桌面机 / Desktop Machine", "体量小于 XRF / Smaller than XRF", "综合工作台", "Desktop Innovation Bench"],
    ["Viper", "桌面机 / Desktop Machine", "体量小于 XRF / Smaller than XRF", "综合工作台", "Desktop Innovation Bench"],
    ["GALVO FLEX", "桌面机 / Desktop Machine", "体量小于 XRF / Smaller than XRF", "综合工作台", "Desktop Innovation Bench"]
  ],
  samples: {
    large: ["36–48 英寸木雕地图", "多层木质艺术墙板", "大型企业 Logo", "亚克力灯牌", "商业标识牌"],
    largeEn: ["36–48 in engraved wood map", "Layered wood art panel", "Large corporate logo", "Illuminated acrylic sign", "Commercial signage"],
    small: ["皮革钱包", "帽牌 / 皮革补丁", "金属铭牌", "工业标签", "奖杯 / 奖牌", "玻璃杯", "保温杯", "钥匙扣", "礼品牌"],
    smallEn: ["Leather wallet", "Hat badge / leather patch", "Metal nameplate", "Industrial tag", "Trophy / medal", "Glassware", "Tumbler", "Keychain", "Gift tag"]
  },
  materials: ["WOOD", "LEATHER", "METAL", "ACRYLIC", "GLASS", "TUMBLERS"],
  story: ["机器", "加工过程", "成品", "商业价值"]
};

const proposalData = [
  {
    name: "Budget Booth",
    title: "基础成本展位",
    budget: "低预算 / 快速落地 / 首次参展",
    visual: 2,
    renderShare: "效果图 ≥ 70%",
    concept: "用挂布背墙、喷绘展板和可运输展具建立整洁可信的美国工业品牌形象。控制成本，但完整展示 7 款机器、应用成品和销售动线。",
    style: ["挂布背墙", "喷绘展板", "易拉宝", "黑色样品桌", "折叠接待台", "电视机"],
    message: ["ONELASER", "Make Better With One", "U.S. Machine Company", "Real Machines. Real Results."],
    zones: [
      ["品牌区", "US Machine Company"],
      ["Hydra 9 Gen2", "最大独立展台 / 主视觉"],
      ["Cobra 10", "第二大独立展台"],
      ["桌面机综合展示台", "XRF + VertiGo + Y Series + Viper + GALVO FLEX"],
      ["桌面应用区", "杯壶、礼品、铭牌和小型成品"]
    ],
    machineDisplay: "Hydra 9 Gen2 与 Cobra 10 使用两个独立黑色落地展示平台。XRF、VertiGo、Y Series、Viper、GALVO FLEX 统一放在一张连续桌面机展示台上；桌面离开背墙，台下整合储物、电源和细红色灯带。",
    video: "背墙或接待台旁设置电视机，循环播放切割、雕刻火花、客户案例和真实成品。",
    salesArea: "左前方设置接待台，配置二维码、宣传册、名片和小样品盒；大样品与小样品同时出现。",
    floorPlan: ["40 ft 宽 × 10 ft 深", "接待台", "电视机", "Hydra 9 Gen2 独立平台", "Cobra 10 独立平台", "5 款桌面机连续工作台", "样品桌", "开放客户动线"],
    strengths: ["采购与运输成本最低", "搭建速度快，常规展具容易获得", "适合首次测试展会效果"],
    risks: ["视觉质感相对基础", "需用连续大画面避免零散感", "大型样品需要提前规划运输"],
    en: {
      budget: "Low budget / Fast deployment / First-time exhibitor",
      concept: "A clean, credible U.S. industrial brand presentation built with fabric backwalls, printed graphics and portable fixtures. It controls cost while presenting all seven machines, applications and a clear sales journey.",
      zones: ["U.S. Machine Company", "Largest freestanding hero display", "Second-largest freestanding display", "XRF + VertiGo + Y Series + Viper + GALVO FLEX", "Drinkware, gifts, nameplates and compact samples"],
      machineDisplay: "Hydra 9 Gen2 and Cobra 10 use two freestanding floor platforms. XRF, VertiGo, Y Series, Viper and GALVO FLEX share one continuous desktop-machine bench with integrated storage, power management and a slim red light strip.",
      video: "A TV beside the backwall or reception counter loops cutting, engraving sparks, customer cases and finished products.",
      salesArea: "A front-left reception counter includes QR codes, brochures, business cards and sample boxes, supported by both large and small finished samples.",
      floorPlan: ["40 ft W × 10 ft D", "Reception counter", "TV", "Hydra 9 Gen2 platform", "Cobra 10 platform", "Five-machine desktop bench", "Sample table", "Open visitor flow"],
      strengths: ["Lowest purchasing and shipping cost", "Fast setup with readily available fixtures", "Ideal for testing a first exhibition"],
      risks: ["More basic visual finish", "Requires continuous graphics to avoid fragmentation", "Large samples require advance shipping planning"]
      ,reuse: "Medium"
    },
    reuse: "中"
  },
  {
    name: "Performance Lab",
    title: "模块化灯箱实验室",
    budget: "中等预算 / 推荐方案 / 正式进入美国展会",
    visual: 4,
    renderShare: "效果图 ≥ 70%",
    concept: "以 SEG 灯箱背墙和产品岛台构成清晰的高性能实验室。像 Apple Store 一样易懂，像 Tesla Gallery 一样克制，兼顾品牌升级和重复参展。",
    style: ["SEG 灯箱背墙", "发光 Logo", "产品岛台", "样品墙", "Lead Capture Bar", "视频屏"],
    message: ["ONELASER Performance Lab", "Innovation-Driven Performance", "Outcome Guarantee", "Real Machines. Real Results."],
    zones: [
      ["品牌灯箱区", "ONELASER Performance Lab"],
      ["Hydra 9 Gen2", "中心最大旗舰岛台"],
      ["Cobra 10", "第二大工作室岛台"],
      ["桌面机 Performance Bench", "XRF + VertiGo + Y Series + Viper + GALVO FLEX"],
      ["Materials & Applications", "六类材质样品墙"],
      ["桌面产品陈列", "Y Series、Viper、GALVO FLEX 与应用样品"]
    ],
    machineDisplay: "Hydra 9 Gen2 与 Cobra 10 保留独立产品岛台。XRF、VertiGo、Y Series、Viper、GALVO FLEX 合并为一张 Performance Bench 连续桌面；XRF 为桌面组最大机型，其余按实际体量陈列，统一配置参数牌、应用样品、隐藏走线和红色 LED 底边。",
    video: "品牌区或样品墙旁设置明显视频屏，播放机器加工细节、美国工坊、客户案例与成品商业应用。",
    salesArea: "左前方设置 Lead Capture Bar，配置高脚椅、iPad、二维码、资料架和小样品盒；样品墙按材质分类。",
    floorPlan: ["40 ft 宽 × 10 ft 深", "SEG 灯箱背墙", "Hydra 9 Gen2 独立岛台", "Cobra 10 独立岛台", "5 款桌面机 Performance Bench", "电视机", "样品墙", "Lead Capture Bar", "开放客户动线"],
    strengths: ["品牌感与销售转化平衡最好", "模块化结构可反复使用", "机器、材料和商业结果关系清晰"],
    risks: ["需提前确认电力与灯箱功率", "搭建成本高于基础方案", "岛台尺寸必须按真机核算"],
    en: {
      budget: "Mid-range budget / Recommended / Formal U.S. market entry",
      concept: "SEG lightbox walls and product islands create a clear performance laboratory: easy to understand like an Apple Store, restrained like a Tesla Gallery, and reusable across multiple exhibitions.",
      zones: ["ONELASER Performance Lab", "Largest central flagship island", "Second-largest workshop island", "XRF + VertiGo + Y Series + Viper + GALVO FLEX", "Six-category material sample wall", "Y Series, Viper and GALVO FLEX with application samples"],
      machineDisplay: "Hydra 9 Gen2 and Cobra 10 retain individual product islands. The five desktop machines share one Performance Bench; XRF is the largest desktop unit, while every machine receives its own specification card, application samples and concealed wiring.",
      video: "A prominent screen near the brand zone or sample wall shows machining details, U.S. workshops, customer cases and commercial applications.",
      salesArea: "A front-left Lead Capture Bar includes stools, iPad, QR codes, literature and sample boxes. The sample wall is organized by material.",
      floorPlan: ["40 ft W × 10 ft D", "SEG lightbox backwall", "Hydra 9 Gen2 island", "Cobra 10 island", "Five-machine Performance Bench", "TV", "Sample wall", "Lead Capture Bar", "Open visitor flow"],
      strengths: ["Best balance of brand impact and conversion", "Reusable modular structure", "Clear machine-to-material-to-business-result story"],
      risks: ["Power and lightbox loads must be confirmed", "Higher setup cost than Budget Booth", "Island dimensions must use actual machine measurements"]
      ,reuse: "High"
    },
    reuse: "高"
  },
  {
    name: "Performance Garage",
    title: "高端定制旗舰展位",
    budget: "高预算 / 全产品阵容 / 经销商招商",
    visual: 5,
    renderShare: "效果图 75–80%",
    concept: "把 10×40 ft 展位打造为真实的高性能车库实验室。通过巨型门头、英雄机台、材料图书馆与视频墙，让客户直接看到从工作室到规模化生产的路径。",
    style: ["巨型立体门头", "3D 品牌背墙", "红色线性灯带", "英雄机器平台", "材料图书馆", "咨询吧台"],
    message: ["ONELASER Performance Garage", "From Workshop To Production", "Real Machines. Real Output. Real Support.", "Outcome Guarantee"],
    zones: [
      ["巨型门头", "ONELASER / U.S. Machine Company"],
      ["Hydra 9 Gen2", "核心最大英雄平台"],
      ["Cobra 10", "第二大英雄平台"],
      ["Desktop Innovation Bench", "XRF + VertiGo + Y Series + Viper + GALVO FLEX"],
      ["Material Library", "抽屉式材料与成品系统"],
      ["桌面产品发布区", "Y Series、Viper、GALVO FLEX 独立发光铭牌与应用演示"]
    ],
    machineDisplay: "Hydra 9 Gen2 与 Cobra 10 使用两个独立英雄平台。XRF、VertiGo、Y Series、Viper、GALVO FLEX 整合进一张 Desktop Innovation Bench；工作台采用整块深色台面、红色悬浮灯带、抽屉储物和隐藏电源，每台桌面机保留独立发光铭牌与应用样品。",
    video: "设置 75 或 85 英寸大屏 / 视频墙，播放加工近景、火花、客户交付、美国工坊、售后支持和真实成品。",
    salesArea: "左侧设置 Consultation Bar，配置高脚椅、咖啡、iPad、样品盒和销售顾问区；右侧设置抽屉式 Material Library。",
    floorPlan: ["40 ft 宽 × 10 ft 深", "巨型门头", "Hydra 9 Gen2 英雄平台", "Cobra 10 英雄平台", "5 款桌面机 Innovation Bench", "75/85 英寸视频墙", "Material Library", "Consultation Bar", "开放客户动线"],
    strengths: ["品牌冲击力和媒体传播力最强", "适合全产品展示与经销商洽谈", "完整呈现机器到商业结果"],
    risks: ["成本、运输和电力要求最高", "需严格遵守 inline booth 高度与遮挡规定", "定制结构复用灵活性较低"],
    en: {
      budget: "High budget / Full product lineup / Dealer recruitment",
      concept: "A true high-performance garage laboratory built inside a 10×40 ft inline booth. A monumental header, hero platforms, material library and video wall communicate the path from workshop production to scalable business.",
      zones: ["ONELASER / U.S. Machine Company", "Largest central hero platform", "Second hero platform", "XRF + VertiGo + Y Series + Viper + GALVO FLEX", "Drawer-based materials and finished products", "Dedicated illuminated nameplates and applications for Y Series, Viper and GALVO FLEX"],
      machineDisplay: "Hydra 9 Gen2 and Cobra 10 occupy two freestanding hero platforms. The five desktop machines are integrated into a Desktop Innovation Bench with a solid dark countertop, floating red light, drawer storage, concealed power and an individual illuminated nameplate for each machine.",
      video: "A 75- or 85-inch screen shows close-up processing, sparks, deliveries, U.S. workshops, support services and real finished products.",
      salesArea: "A Consultation Bar on the left includes stools, coffee, iPad, samples and advisor workspace. A drawer-based Material Library sits on the right.",
      floorPlan: ["40 ft W × 10 ft D", "Monumental header", "Hydra 9 Gen2 hero platform", "Cobra 10 hero platform", "Five-machine Innovation Bench", "75/85-inch video wall", "Material Library", "Consultation Bar", "Open visitor flow"],
      strengths: ["Strongest brand and media impact", "Ideal for full-line presentation and dealer meetings", "Complete machine-to-business-result narrative"],
      risks: ["Highest cost, freight and power requirements", "Must comply with inline-booth height and sightline rules", "Custom structures offer less reuse flexibility"]
      ,reuse: "Medium"
    },
    reuse: "中"
  }
];

const card = (label, title, copy = "") => `
  <div class="proposal-card">
    <div class="proposal-eyebrow">${label}</div>
    <div class="proposal-card-title">${title}</div>
    ${copy ? `<p>${copy}</p>` : ""}
  </div>`;

const listPanel = (title, items, accent = false, englishItems = []) => `
  <div class="proposal-panel">
    <h4 class="${accent ? "proposal-red" : ""}">${title}</h4>
    <ul>${items.map((item, index) => `<li>${item}${englishItems[index] ? `<span class="en-copy">${englishItems[index]}</span>` : ""}</li>`).join("")}</ul>
  </div>`;

const renderMachineScale = () => `
  <div class="placement-system" aria-label="机器体量与展示方式">
    <div class="standalone-platform hydra-platform">
      <div class="machine-silhouette hydra-machine">Hydra 9 Gen2</div>
      <strong>独立旗舰平台</strong>
      <small>1900 × 1045 × 1035 mm</small>
    </div>
    <div class="standalone-platform cobra-platform">
      <div class="machine-silhouette cobra-machine">Cobra 10</div>
      <strong>独立工作室平台</strong>
      <small>1680 × 1090 × 940 mm</small>
    </div>
    <div class="desktop-bench">
      <div class="bench-label">DESKTOP INNOVATION BENCH</div>
      <div class="bench-machines">
        <div class="desktop-machine xrf-machine"><span>XRF</span><small>其次</small></div>
        <div class="desktop-machine vertigo-machine"><span>VertiGo</span><small>630 mm 宽</small></div>
        <div class="desktop-machine compact-machine"><span>Y Series</span><small>&lt; XRF</small></div>
        <div class="desktop-machine compact-machine"><span>Viper</span><small>&lt; XRF</small></div>
        <div class="desktop-machine compact-machine"><span>GALVO FLEX</span><small>&lt; XRF</small></div>
      </div>
      <div class="bench-top"></div>
      <div class="bench-base"><span>隐藏电源</span><span>储物抽屉</span><span>红色 LED 底边</span></div>
    </div>
  </div>`;

const renderMachineSpecs = () => `
  <div class="machine-spec-grid">
    ${sharedRequirements.machines.map(([name, metric, imperial, placement, placementEn]) => `
      <div class="machine-spec-card">
        <div class="proposal-eyebrow">${placement}<span class="en-copy">${placementEn}</span></div>
        <strong>${name}</strong>
        <p>${metric}</p>
        <small>${imperial}</small>
      </div>`).join("")}
  </div>`;

const renderStory = () => `
  <div class="value-flow">
    ${sharedRequirements.story.map((item, index) => `
      <div class="value-step"><span>0${index + 1}</span><strong>${item}</strong></div>
    `).join("")}
  </div>`;

const renderProposal = (proposal) => `
  <div class="proposal-detail proposal-enter">
    <div class="proposal-heading">
      <div>
        <div class="proposal-kicker">${proposal.name}</div>
        <h3>${proposal.title}</h3>
        <p>${proposal.budget}<span class="en-inline">${proposal.en.budget}</span></p>
      </div>
      <div class="proposal-impact">
        <span>${proposal.renderShare}</span>
        <div>${Array.from({ length: 5 }, (_, index) => `<i class="${index < proposal.visual ? "on" : ""}"></i>`).join("")}</div>
      </div>
    </div>

    <div class="proposal-concept">
      <div><span>CONCEPT / 方案理念</span><p>${proposal.concept}<span class="en-copy">${proposal.en.concept}</span></p></div>
      ${renderStory()}
    </div>

    <section class="proposal-section">
      <div class="proposal-section-title"><span>01</span><h4>空间与视觉构成 / Spatial & Visual System</h4></div>
      <div class="proposal-chip-row">${proposal.style.map((item) => `<span>${item}</span>`).join("")}</div>
      <div class="proposal-grid proposal-grid-4">${proposal.message.map((item, index) => card(`MESSAGE 0${index + 1}`, item)).join("")}</div>
    </section>

    <section class="proposal-section">
      <div class="proposal-section-title"><span>02</span><h4>大机独立平台 + 桌面机综合工作台 / Floor Platforms + Desktop Bench</h4></div>
      ${renderMachineScale()}
      <p class="proposal-note">${proposal.machineDisplay}<span class="en-copy">${proposal.en.machineDisplay}</span></p>
      ${renderMachineSpecs()}
    </section>

    <section class="proposal-section">
      <div class="proposal-section-title"><span>03</span><h4>展位分区 / Booth Zoning</h4></div>
      <div class="proposal-grid proposal-grid-3">${proposal.zones.map(([title, copy], index) => card(`ZONE ${String(index + 1).padStart(2, "0")}`, title, `${copy}<span class="en-copy">${proposal.en.zones[index]}</span>`)).join("")}</div>
    </section>

    <section class="proposal-section proposal-two-col">
      <div class="proposal-panel proposal-media-panel">
        <h4>VIDEO / SALES AREA</h4>
        <p><b>视频 / Video：</b>${proposal.video}<span class="en-copy">${proposal.en.video}</span></p>
        <p><b>销售区 / Sales Area：</b>${proposal.salesArea}<span class="en-copy">${proposal.en.salesArea}</span></p>
      </div>
      <div class="proposal-panel">
        <h4>TOP VIEW FLOOR PLAN</h4>
        <div class="floor-plan-tags">${proposal.floorPlan.map((item, index) => `<span>${item}<small>${proposal.en.floorPlan[index]}</small></span>`).join("")}</div>
      </div>
    </section>

    <section class="proposal-section">
      <div class="proposal-section-title"><span>04</span><h4>成品与材料矩阵 / Outcomes & Materials</h4></div>
      <div class="material-strip">${sharedRequirements.materials.map((item) => `<span>${item}</span>`).join("")}</div>
      <div class="proposal-two-col">
        ${listPanel("大型视觉样品 / LARGE HERO SAMPLES", sharedRequirements.samples.large, false, sharedRequirements.samples.largeEn)}
        ${listPanel("中小型成交样品 / SALES SAMPLES", sharedRequirements.samples.small, false, sharedRequirements.samples.smallEn)}
      </div>
    </section>

    <section class="proposal-section proposal-two-col">
      ${listPanel("优势 / STRENGTHS", proposal.strengths, false, proposal.en.strengths)}
      ${listPanel("风险检查 / RISKS & CHECKS", proposal.risks, true, proposal.en.risks)}
    </section>

    <div class="proposal-footer">
      <span>复用性 / REUSABILITY</span><strong>${proposal.reuse} / ${proposal.en.reuse}</strong>
      <p>统一要求：Hydra 9 Gen2 与 Cobra 10 独立落地展示；XRF、VertiGo、Y Series、Viper、GALVO FLEX 统一放在连续桌面机工作台；不贴墙，不缺少电视和平面图，Logo 与 Slogan 必须准确。<span class="en-copy">Hydra 9 Gen2 and Cobra 10 are displayed independently. The five desktop machines share one continuous bench. Keep all machines away from the wall and ensure the TV, floor plan, Logo and Slogan are accurate.</span></p>
    </div>
  </div>`;

document.addEventListener("DOMContentLoaded", () => {
  document.body.innerHTML = document.body.innerHTML
    .replaceAll("Hydra Gen2", "Hydra 9 Gen2")
    .replaceAll("HYDRA GEN2", "HYDRA 9 GEN2")
    .replaceAll("Cobra", "Cobra 10")
    .replaceAll("COBRA", "COBRA 10")
    .replaceAll(">NEW<", ">Y / VIPER / GALVO<")
    .replaceAll("新品", "Y Series / Viper / GALVO FLEX")
    .replaceAll("X Series", "XRF")
    .replaceAll("X SERIES", "XRF");

  const sections = document.querySelectorAll(".reveal");
  const layoutSection = Array.from(sections).find((section) => section.textContent.includes("SPATIAL LAYOUT"));

  if (layoutSection) {
    const layoutSvg = layoutSection.querySelector('svg[viewBox="0 0 820 240"]');
    const controls = Array.from(layoutSection.querySelectorAll("button")).slice(0, 5);
    const zones = layoutSvg ? Array.from(layoutSvg.querySelectorAll("g")).slice(0, 5) : [];

    if (controls.length === 5 && zones.length === 5) {
      const selectZone = (selectedIndex) => {
        controls.forEach((button, index) => {
          const isSelected = index === selectedIndex;
          button.classList.toggle("layout-control-active", isSelected);
          button.setAttribute("aria-pressed", String(isSelected));
        });
        zones.forEach((zone, index) => {
          zone.classList.toggle("layout-zone-active", index === selectedIndex);
          zone.classList.toggle("layout-zone-muted", index !== selectedIndex);
        });
      };
      controls.forEach((button, index) => {
        button.type = "button";
        button.dataset.zoneIndex = String(index);
        button.addEventListener("click", () => selectZone(index));
      });
      selectZone(0);
    }
  }

  const proposalSection = Array.from(sections).find((section) => section.textContent.includes("DESIGN PROPOSALS"));
  if (proposalSection) {
    const proposalControls = Array.from(proposalSection.querySelectorAll("button")).slice(0, 3);
    const controlBar = proposalControls[0]?.parentElement;
    if (controlBar && proposalControls.length === 3) {
      controlBar.classList.add("proposal-sticky-control");

      Array.from(proposalSection.children)
        .slice(Array.from(proposalSection.children).indexOf(controlBar) + 1)
        .forEach((node) => node.remove());

      const detailHost = document.createElement("div");
      detailHost.className = "proposal-host";
      proposalSection.appendChild(detailHost);

      const selectProposal = (selectedIndex) => {
        proposalControls.forEach((button, index) => {
          const isSelected = index === selectedIndex;
          button.classList.toggle("proposal-control-active", isSelected);
          button.setAttribute("aria-pressed", String(isSelected));
          button.style.backgroundColor = isSelected ? "#E7310E" : "transparent";
          button.style.color = isSelected ? "#fff" : "#666";
        });
        detailHost.innerHTML = renderProposal(proposalData[selectedIndex]);
      };

      proposalControls.forEach((button, index) => {
        button.type = "button";
        button.dataset.proposalIndex = String(index);
        button.addEventListener("click", () => selectProposal(index));
      });
      selectProposal(1);
    }
  }

  if (!("IntersectionObserver" in window)) {
    sections.forEach((section) => section.classList.add("visible"));
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08 });

  sections.forEach((section) => observer.observe(section));
});
