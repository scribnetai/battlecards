/* Battlecard data. Each card = 3 pages:
   p1: neutral head-to-head feature comparison
   p2: the case for vendor A vs B
   p3: the case for vendor B vs A
   edge: "a" | "b" | "tie" — who wins the row on page 1.
   Keep claims vendor-neutral on p1; vendor claims live on p2/p3. */

const CARDS = [
  {
    id: "dell-powerstore-vs-everpure-flasharray",
    category: "Primary Storage",
    title: "Dell PowerStore vs Everpure FlashArray",
    subtitle: "Midrange all-flash arrays: Dell's efficiency guarantee against Everpure's Evergreen simplicity.",
    updated: "2026-09-27",
    a: { vendor: "Dell", product: "PowerStore", color: "#2f9be8", tag: "Efficiency in writing, VMware-native, aggressive pricing." },
    b: { vendor: "Everpure", product: "FlashArray", color: "#f26a21", tag: "Evergreen upgrades, Pure1 simplicity, top-rated support. (Pure Storage rebranded Everpure.)" },
    features: [
      {
        label: "Data reduction",
        a: "Always-on, hardware-assisted (Intel QuickAssist) on every model. 5:1 reduction guaranteed in writing for up to 6 years — no assessment required (Dell's claim).",
        b: "Always-on inline dedupe + compression; ~5:1 typical. RightSize Guarantee is optional, typically requires an assessment, applies to //X & //XL, and runs 1 year (Dell's claim).",
        edge: "a",
        note: "Dell's loudest talking point. Ask for the guarantee language in the quote — if it's in writing, it's real leverage."
      },
      {
        label: "Non-disruptive upgrades",
        a: "Non-disruptive controller and software upgrades; Future-Proof program with Anytime Upgrades.",
        b: "Evergreen subscription: controllers and software refresh non-disruptively, no forklift upgrades — the industry's gold standard for this motion.",
        edge: "b",
        note: "Don't fight Evergreen head-on. Counter with Future-Proof + price: same outcome narrative, lower entry cost."
      },
      {
        label: "Consumption model",
        a: "Capex purchase + Future-Proof loyalty program; APEX as-a-service available for opex buyers.",
        b: "Evergreen//One (storage-as-a-service) and Evergreen//Flex; flat fee with all software and data services included.",
        edge: "b",
        note: "Everpure's subscription story is more mature. If the customer wants opex, make them say why Dell APEX doesn't qualify."
      },
      {
        label: "Management",
        a: "PowerStore Manager with ML-driven automation, auto-tiering and workload placement; Ansible, Kubernetes, REST API.",
        b: "Pure1 cloud console: entire fleet in one pane, proactive call-home, ~1 year of usage predictions for capacity planning.",
        edge: "tie",
        note: "Both are genuinely easy. The differentiator is fleet scale: Pure1 shines managing many arrays."
      },
      {
        label: "VMware integration",
        a: "Deep: VAAI/VASA/vVols plus AppsON — run vSphere VMs directly on the array for edge, ROBO, and storage-dense workloads.",
        b: "Solid: VAAI, vVols, vSphere integrations — but no on-array compute story.",
        edge: "a",
        note: "In VMware shops this is a closer, not an opener. AppsON collapses a server tier at edge sites."
      },
      {
        label: "Data services & security",
        a: "Snapshots, replication, encryption, file + block + vVols; built-in ransomware detection.",
        b: "Snapshots, ActiveDR replication, SafeMode immutable snapshots that even admins can't delete — a strong ransomware story.",
        edge: "tie",
        note: "SafeMode is the feature to respect here. Ask how Dell's immutability story compares, don't dismiss it."
      },
      {
        label: "Entry pricing",
        a: "Midrange-friendly; Dell gets aggressive on competitive bids and bundles with server/network.",
        b: "Premium positioning; typically higher upfront cost for equivalent usable capacity.",
        edge: "a",
        note: "Total-platform bundling is the VAR superpower: servers + storage + services in one Dell quote."
      },
      {
        label: "Scalability",
        a: "Scale-up pairs, clusterable up to 4 appliances; NVMe end-to-end.",
        b: "Scale-up with per-model capacity ceilings — Dell claims growth past a ceiling forces a controller upgrade.",
        edge: "a",
        note: "Validate against current //X R4 specs before repeating the ceiling claim in a customer room."
      },
      {
        label: "Support reputation",
        a: "ProSupport: broad global reach, quality varies by region and tier.",
        b: "Consistently top-rated in customer surveys; proactive support via Pure1 telemetry.",
        edge: "b",
        note: "Acknowledge it. Then pivot: your VAR support wraps either array — that's the differentiator you control."
      }
    ],
    takeaway: "Sell Dell on economics and VMware depth: guaranteed efficiency in writing, AppsON, and bundle pricing. Sell Everpure on operational simplicity: Evergreen, Pure1, and support. The customer profile decides — capex VMware shops lean Dell, simplicity-first lean Everpure.",
    caseA: {
      label: "The case for Dell",
      pitch: "PowerStore gives you enterprise flash without the premium tax: data reduction guaranteed in writing — not claimed — scale that doesn't punish growth, VMware integration Everpure can't match, and pricing your CFO will actually sign.",
      wins: [
        "5:1 data reduction <strong>guaranteed in the contract</strong> for up to 6 years, no assessment — Everpure's is optional, 1 year, and needs an assessment.",
        "Always-on hardware-assisted reduction on <strong>every</strong> model; no throttling under load on lower-tier arrays.",
        "<strong>AppsON</strong>: run vSphere VMs directly on the array — collapses server tiers at edge and ROBO sites.",
        "Aggressive competitive pricing plus full Dell platform bundling (servers, network, services, financing) in one quote.",
        "No per-model capacity trap: scale-up clustering without the forced controller upgrade cycle."
      ],
      discover: [
        "How much headroom do you need over the next 3 years — and what happens if you outgrow the model you're quoted?",
        "Is your 5:1 data reduction in the contract, or is it a claim? What did the assessment cost you?",
        "How much of your environment is VMware — and would on-array VMs simplify your edge sites?",
        "When was your last forklift upgrade, and what did the downtime cost the business?"
      ],
      traps: [
        "Is the 5:1 reduction guaranteed in writing — or only if you buy the optional RightSize add-on?",
        "What happens to compression performance on this model when the array is full and busy?",
        "Walk me through the upgrade at year 4: new controllers, new purchase, or included?",
        "How many distinct Dell… sorry, Everpure… software licenses are in this quote vs. one flat fee?"
      ],
      objections: [
        { q: "Everpure is simpler to manage.", a: "PowerStore Manager plus ML-driven automation closed that gap — and you get the VMware integration Everpure doesn't have. Ask for a live demo of provisioning before deciding on reputation." },
        { q: "Evergreen means we never do forklift upgrades.", a: "Future-Proof plus Anytime Upgrades plus non-disruptive upgrades gets you the same outcome — and you're not paying the Everpure premium for the privilege." },
        { q: "Their support is rated higher.", a: "Fair — and that's exactly why our VAR wrap matters: you get our engineers on top of Dell ProSupport, which neither vendor gives you alone." }
      ]
    },
    caseB: {
      label: "The case for Everpure",
      pitch: "FlashArray is the array you stop thinking about: Evergreen means it improves without forklifts or rebuys, Pure1 runs your whole fleet from one cloud console, and support that calls you before things break.",
      wins: [
        "<strong>Evergreen</strong>: the subscription that killed the forklift — controllers refresh non-disruptively, forever.",
        "<strong>Pure1</strong>: every array in one cloud pane with predictive analytics — capacity planning a year out, automated.",
        "Consistently the <strong>highest-rated support</strong> in enterprise storage, with proactive call-home.",
        "<strong>SafeMode</strong> immutable snapshots: ransomware can't encrypt or delete what it can't touch.",
        "Radical simplicity: set it, forget it, let your team work on something else."
      ],
      discover: [
        "How many hours a month does your team spend tuning, patching, or babysitting storage?",
        "What's your ransomware recovery story — do you have truly immutable copies, and have you tested restore?",
        "Do you want storage as capex you rebuy every 4 years, or an opex subscription that improves itself?",
        "How many arrays are you managing — and from how many consoles?"
      ],
      traps: [
        "How many different Dell storage product lines have you been migrated across in the last 5 years?",
        "Is data reduction guaranteed in writing on the model quoted — or only on paper in a blog post?",
        "What does your Dell upgrade look like at year 4 — and who pays for the controllers?",
        "If it's always-on, why does only some of the lineup get hardware acceleration?"
      ],
      objections: [
        { q: "Everpure costs more upfront.", a: "Compare 5-year TCO, not day-one price: no rebuys, all software included flat, no assessments. The premium evaporates by year 3." },
        { q: "We want one throat to choke with Dell.", a: "Pure1 plus a single support queue is one throat — and it's rated higher. Single-vendor lock-in is a risk, not a feature." },
        { q: "Dell integrates better with our VMware.", a: "vVols, VAAI, and vSphere integrations are all certified — and Pure1 manages the array so your VMware admins never have to learn storage." }
      ]
    }
  },
  {
    id: "nutanix-vs-broadcom-vmware",
    category: "HCI & Virtualization",
    title: "Nutanix vs Broadcom VMware",
    subtitle: "The 2026 virtualization reset: per-node simplicity against the entrenched per-core incumbent.",
    updated: "2026-09-27",
    a: { vendor: "Nutanix", product: "Cloud Platform", color: "#2f7de8", tag: "AHV included free, per-node pricing, Prism simplicity." },
    b: { vendor: "Broadcom", product: "VMware VCF", color: "#e03a3a", tag: "The full private-cloud stack — if you use all of it." },
    features: [
      {
        label: "Licensing model",
        a: "Subscription per node (Starter / Pro / Ultimate tiers). Hypervisor (AHV) included at no charge.",
        b: "Subscription per core: VCF ~$350/core/yr list (realized ~$185–275 after negotiation); VVF ~$135–190. 16-core minimum per CPU, 72-core minimum order. Perpetual licenses are gone.",
        edge: "a",
        note: "The 72-core minimum order is the conversation starter in every midmarket VMware shop in 2026."
      },
      {
        label: "Hypervisor cost",
        a: "AHV (KVM-based) included free with the platform.",
        b: "ESXi bundled inside VCF/VVF subscription; standalone vSphere Standard discontinued with no renewal path.",
        edge: "a",
        note: "Customers who only ever used vSphere Standard got the worst of the transition — start there."
      },
      {
        label: "Management",
        a: "Prism Central: one console for VMs, storage, and networking. No vCenter required.",
        b: "vCenter plus Aria suite: deeper, but multi-console and heavier to operate.",
        edge: "tie",
        note: "Simplicity vs. depth. Generalist IT teams feel the Prism difference immediately."
      },
      {
        label: "Storage",
        a: "Distributed storage built in (block, Files, Objects) — no additional license.",
        b: "vSAN included in VCF; a separate line item outside the full bundle.",
        edge: "a",
        note: "On HCI specifically, Nutanix's storage story is more turnkey. vSAN outside VCF is a harder sell."
      },
      {
        label: "Networking",
        a: "Flow microsegmentation included; solid but not NSX.",
        b: "NSX full stack inside VCF — previously ~$1,200/CPU/yr standalone. The deepest virtual networking on the market.",
        edge: "b",
        note: "If the customer actually runs NSX, the VCF bundle math improves dramatically. Ask before assuming waste."
      },
      {
        label: "Migration",
        a: "Nutanix Move: automated bulk VM migration; 2,700+ VMware customers moved in FY25, 640 more in FQ1'26.",
        b: "Zero migration: you're already here, everything keeps working Monday morning.",
        edge: "tie",
        note: "Nutanix's best weapon vs. VMware's best defense. Migration cost — licenses are only half — decides it."
      },
      {
        label: "Ecosystem",
        a: "Broad and growing, but thinner third-party integrations than vSphere.",
        b: "The deepest ecosystem in virtualization: every backup, monitoring, and security vendor builds for vSphere first.",
        edge: "b",
        note: "Audit the customer's third-party stack for AHV certification before promising a smooth move."
      },
      {
        label: "Hybrid cloud",
        a: "NC2: run the Nutanix stack on AWS/Azure/GCP bare metal with license portability.",
        b: "VMware Cloud on hyperscalers: consistent SDDC across on-prem and cloud.",
        edge: "tie",
        note: "Both do hybrid. NC2's license portability is the cleaner story for burst and DR."
      },
      {
        label: "Staff skills",
        a: "Retraining required: AHV and Prism are simpler, but they're still new to a vSphere team.",
        b: "The team already knows it. The 'human debt' of switching — retraining an entire ops staff — is real money.",
        edge: "b",
        note: "Never hand-wave retraining. Put a number on it in the TCO or the customer will."
      },
      {
        label: "Vendor trajectory",
        a: "Winning VMware refugees quarter after quarter; roadmap focused on the disgruntled midmarket.",
        b: "Broadcom retains the vast majority of its largest customers; openly less interested in chasing small accounts.",
        edge: "tie",
        note: "Enterprise incumbency vs. midmarket momentum — match the story to the account size in front of you."
      }
    ],
    takeaway: "Lead with the customer's renewal date and real per-core cost. If they're a full-stack VCF shop using NSX and Aria, defend VMware and negotiate the rate. If they're a vSphere-Standard-style shop paying for bundle they don't use, Nutanix's per-node math and free AHV usually win the 3-year TCO — but only after honest migration costing.",
    caseA: {
      label: "The case for Nutanix",
      pitch: "Same VMs, sane bill: Nutanix gives you the hypervisor free, storage and networking built in, and one console — priced per node, not per core with minimums stacked on minimums.",
      wins: [
        "<strong>AHV hypervisor included free</strong> — the vSphere license line item goes to zero.",
        "Per-<strong>node</strong> pricing vs. per-<strong>core</strong> with 16-core minimums per CPU and a 72-core minimum order.",
        "<strong>Prism Central</strong>: one console, no vCenter, built for generalist teams.",
        "<strong>Nutanix Move</strong> automates migration — 2,700+ VMware customers moved in FY25.",
        "<strong>NC2</strong>: take your licenses to AWS/Azure/GCP bare metal for DR and burst."
      ],
      discover: [
        "What are you actually paying per core under VCF — list or negotiated?",
        "Are you running NSX and Aria, or paying for them inside the bundle unused?",
        "How many licensed cores are dev, test, or idle — you're paying for all of them?",
        "When is your renewal? What happens at true-up under the 72-core minimum?"
      ],
      traps: [
        "Which parts of the VCF bundle do you actually deploy — and what did those cost standalone before?",
        "How many cores are you licensing that run nothing most of the week?",
        "What's the plan when your next renewal lands entirely on subscription with no perpetual fallback?",
        "Who on your team configures NSX today — and what would that skill cost to hire?"
      ],
      objections: [
        { q: "Nobody gets fired for buying VMware.", a: "2,700+ customers moved last fiscal year alone — reference calls with shops your size are available. The riskier career move in 2026 is signing a 3-year VCF renewal without competitive bids." },
        { q: "Retraining will kill us.", a: "Put it in the TCO honestly — then compare against 3 years of per-core minimums. Prism was designed for generalists; most teams are productive in weeks, and Move automates the migration itself." },
        { q: "Our backup/monitoring tools are built for vSphere.", a: "Audit which ones certify AHV — the list grows every quarter. For the gaps, we scope it in the migration plan rather than discovering it in production." }
      ]
    },
    caseB: {
      label: "The case for Broadcom VMware",
      pitch: "The platform your team, your tools, and your auditors already know: VCF is the complete private-cloud stack with the deepest ecosystem on earth — and staying put costs zero migration and zero retraining.",
      wins: [
        "<strong>Zero migration</strong>: everything works Monday morning. No Move project, no dual-running, no cutover risk.",
        "The <strong>deepest ecosystem</strong> in virtualization — backup, DR, monitoring, and security vendors build for vSphere first.",
        "<strong>NSX + Aria</strong>: full-stack networking and operations that alternatives approximate, not match.",
        "Your team's <strong>existing skills</strong> — no human debt, no hiring, no productivity dip.",
        "Broadcom's enterprise focus: top accounts get <strong>real attention and negotiated rates</strong> (~$185–275/core realized)."
      ],
      discover: [
        "What's your honest all-in migration budget — licenses are only half the cost?",
        "Which third-party tools are certified on your alternative hypervisor today?",
        "Who on your team knows AHV or Prism right now — and what's the retraining timeline?",
        "Are you actually using NSX and Aria? If yes, price the bundle against what those cost standalone."
      ],
      traps: [
        "What's the 5-year TCO including retraining, dual-running during migration, and professional services?",
        "Which of your compliance and security tools are certified on the alternative — and who signs off on the gaps?",
        "What happens to your VMware-embedded backup, DR, and automation integrations on day one?",
        "Who owns the migration when the timeline slips — and what does month 7 of dual-running cost?"
      ],
      objections: [
        { q: "Broadcom pricing is brutal.", a: "List is not street: disciplined negotiation lands ~$185–275/core. And if you're a full-stack shop actually running NSX and Aria, the bundle is cheaper than the sum of its old parts." },
        { q: "We're being forced into bundles we don't need.", a: "Then let's talk VVF instead of VCF — hypervisor plus management without the full network stack. And let's make sure the alternative quote includes everything VCF was covering." },
        { q: "Broadcom doesn't care about smaller customers.", a: "That's exactly why the VAR relationship matters — you get our advocacy, our engineers, and our volume pricing leverage on top of whatever Broadcom offers direct." }
      ]
    }
  },
  {
    id: "cohesity-vs-rubrik",
    category: "Data Protection",
    title: "Cohesity vs Rubrik",
    subtitle: "Cyber-resilient backup at enterprise scale: efficiency and breadth against simplicity and RTO.",
    updated: "2026-09-27",
    a: { vendor: "Cohesity", product: "DataProtect", color: "#14b8a6", tag: "One platform: backup, DR, cyber recovery — with global efficiency." },
    b: { vendor: "Rubrik", product: "Security Cloud", color: "#8b7cf6", tag: "Security-first backup with the simplest day-one experience." },
    features: [
      {
        label: "Architecture",
        a: "SpanFS web-scale file system; single platform spanning backup, DR, file/object, and dev/test.",
        b: "Atlas distributed file system; cluster-based scale-out purpose-built for backup.",
        edge: "tie",
        note: "Both are web-scale. The real split is global vs. per-cluster deduplication — that's the next row."
      },
      {
        label: "Storage efficiency",
        a: "Global variable-length dedupe + compression across the platform; Cohesity claims 30%+ less infrastructure for the same data.",
        b: "Dedupe scoped per cluster — no global dedupe, which Cohesity claims inflates capacity, cloud storage, and egress.",
        edge: "a",
        note: "Cohesity's favorite math. Make Rubrik show the capacity model — if dedupe is per-cluster, big estates pay more."
      },
      {
        label: "Recovery at scale",
        a: "Instant mass restore: hundreds of VMs and massive datasets recovered in parallel, fully orchestrated.",
        b: "Near-zero RTO for VMs; strong single-workload recovery, but large restores are more serial (per Cohesity/HPE comparisons).",
        edge: "a",
        note: "RTO is where deals are won. Ask both vendors to demo a 200-VM recovery, not a single VM."
      },
      {
        label: "Cyber vault",
        a: "FortKnox: SaaS-delivered air-gapped vault, isolated and immutable.",
        b: "Rubrik Cloud Vault: isolated, immutable copies with anomaly scanning.",
        edge: "tie",
        note: "Both check the air-gap box auditors ask about. Differentiate on recovery testing, not the vault's existence."
      },
      {
        label: "Threat detection",
        a: "DataHawk: ML anomaly detection and data classification integrated into the platform.",
        b: "Radar: ML anomaly detection on backup data; sensitive-data monitoring included.",
        edge: "tie",
        note: "Feature parity is close enough that the demo matters more than the datasheet here."
      },
      {
        label: "Kubernetes protection",
        a: "Kasten K10 — the market-leading K8s data management product — natively integrated.",
        b: "Native Kubernetes support built into Security Cloud.",
        edge: "a",
        note: "In K8s-heavy shops this is a genuine edge: Kasten is the name container teams already know."
      },
      {
        label: "Deployment flexibility",
        a: "Appliance, VM, cloud-native, or SaaS — appliance-free software deployment available.",
        b: "Appliance, VM, or SaaS — appliance heritage, less flexible for software-only estates.",
        edge: "a",
        note: "Matters most in cloud-first or hardware-averse shops. Appliance shops won't care."
      },
      {
        label: "Ease of deployment",
        a: "Single pane of glass; some users report a learning curve on first deployment.",
        b: "G2 ease-of-setup 9.0/10; consistently praised for fast, simple deployment and responsive support.",
        edge: "b",
        note: "Rubrik's best first impression in the industry. Don't concede it — scope a tight Cohesity pilot instead."
      },
      {
        label: "Analyst standing",
        a: "7x Leader in the Gartner Magic Quadrant for Backup and Data Protection Platforms (2026); 8x Customers' Choice.",
        b: "Leader with dominant cyber-resilience mindshare; the name boards ask for by name.",
        edge: "a",
        note: "Analyst ink favors Cohesity; brand heat favors Rubrik. Know which one your buyer's boss reads."
      },
      {
        label: "Pricing",
        a: "Slightly less costly in peer comparisons; valued for long-term retention economics.",
        b: "Premium pricing with high minimums — justified by users for cyber-resilience outcomes, but a barrier for smaller shops.",
        edge: "a",
        note: "Both are enterprise-priced. Cohesity wins on paper; Rubrik wins when the buyer prices outcomes over licenses."
      }
    ],
    takeaway: "Cohesity wins the architecture argument: global efficiency, mass restore, Kasten, and deployment choice. Rubrik wins the experience argument: simplest deployment, near-zero RTO reputation, and board-level brand. In ransomware-driven deals, make both vendors demo recovery at the customer's actual scale — that's where the decision happens.",
    caseA: {
      label: "The case for Cohesity",
      pitch: "One platform for backup, DR, and cyber recovery that stores less, restores faster, and runs anywhere — with the efficiency to make the economics work at enterprise scale.",
      wins: [
        "<strong>Global dedupe</strong>: 30%+ less infrastructure for the same data — the savings compound in cloud egress and footprint.",
        "<strong>Instant mass restore</strong>: parallel recovery of hundreds of VMs, orchestrated — not serial, not scripted.",
        "<strong>FortKnox</strong> air-gapped SaaS vault plus <strong>DataHawk</strong> ML anomaly detection, integrated not bolted on.",
        "<strong>Kasten K10</strong> for Kubernetes — the container backup your platform team already trusts.",
        "Deploy <strong>your way</strong>: appliance, VM, cloud, or SaaS. 7x Gartner MQ Leader."
      ],
      discover: [
        "If ransomware hit tonight, how long until you're fully back — hours, or days?",
        "What percentage of your backup infrastructure is storing duplicate data?",
        "Do you have a truly air-gapped copy — and when did you last test a full restore from it?",
        "How are you protecting Kubernetes today — and who owns that?"
      ],
      traps: [
        "Is deduplication global or per-cluster — and what does that cost you in cloud storage and egress?",
        "Can you restore 200 VMs in parallel right now, or does recovery queue up serially?",
        "Do you need an appliance to get started, or can this run as software on your infrastructure?",
        "When your data doubles, does performance scale linearly — or do you buy compute you don't need?"
      ],
      objections: [
        { q: "Rubrik is simpler to deploy.", a: "The G2 gap is a tenth of a point — and Cohesity support scores higher. We'll scope a tight pilot so you feel the day-two simplicity, not just day-one." },
        { q: "We're already a Rubrik shop.", a: "Cohesity manages heterogeneous environments — this doesn't have to be rip-and-replace. Start with the workload Rubrik handles worst: K8s, or the estate where dedupe economics hurt." },
        { q: "Rubrik's RTO story is stronger.", a: "Single-VM RTO, sure. Ask both vendors to demo 200 VMs at once — that's the recovery that matters after ransomware, and it's where mass restore wins." }
      ]
    },
    caseB: {
      label: "The case for Rubrik",
      pitch: "The cyber-resilience platform with the simplest day-one experience: API-first, near-zero RTO, and a security-first architecture your board already knows by name.",
      wins: [
        "<strong>Simplest deployment</strong> in the category (G2 9.0 ease-of-setup) with highly rated support.",
        "<strong>Near-zero RTO</strong> for VMs — the recovery metric boards actually ask about.",
        "<strong>API-first</strong> architecture: automation and integration without professional services.",
        "<strong>Security-first brand</strong>: the cyber-resilience name executives recognize.",
        "Purpose-built for backup — no sprawling platform complexity to navigate."
      ],
      discover: [
        "How fast could you be fully deployed — days, or a quarter-long project?",
        "Who automates against your backup platform via API today?",
        "What's your board's confidence level in your ransomware recovery story?",
        "Are you using your current platform's full breadth — or paying for modules you never touch?"
      ],
      traps: [
        "How long did your last enterprise backup deployment actually take, start to finish?",
        "Are you paying for backup, DR, file services, and data management breadth you don't use?",
        "Who's accountable when a large-scale recovery runs serially and the RTO slips?",
        "What's your cloud egress bill for backup data — and how much of it is duplicate?"
      ],
      objections: [
        { q: "Cohesity stores less data with global dedupe.", a: "Efficiency only matters if recovery meets the RTO. Rubrik's near-zero RTO is the number your board asks about — and it's delivered without a complex platform to learn." },
        { q: "Rubrik costs more.", a: "It's priced for outcomes: days-to-deploy, API-first automation with less professional services, and a recovery story executives trust. Price the project, not just the license." },
        { q: "Cohesity has better analyst placement.", a: "Analysts score breadth; customers score outcomes. G2's 289 Rubrik reviews at 4.5/5 are the voice that matters — especially on deployment and support." }
      ]
    }
  }
];
