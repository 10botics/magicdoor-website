---
published: true
title: 有 Google Workspace for Education 都用唔到 NotebookLM？原來係咁解
date: 2026-03-05
excerpt: 不少學校 IT 管理員和老師都以為：學校有 Google Workspace for Education，就可以使用 NotebookLM。但事實並非如此。本文拆解兩者的關係，以及香港學校的實際解法。
---

香港不少學校已採用 **Google Workspace for Education**——老師用 Google 帳號登入、學生用學校電郵交功課、IT 部門透過管理員控制台管理裝置。

然後，老師聽說 NotebookLM 是備課神器，登入一試——

**「此功能在您所在地區不適用。」**

明明學校有 Google Workspace，為什麼還是用不到？

---

## 常見誤解：有 Workspace 就有 NotebookLM？

這是香港學校最普遍的誤解之一。

**Google Workspace for Education** 和 **NotebookLM** 是兩個獨立的產品，地區限制規則亦各自獨立：

- Google Workspace for Education 的地區覆蓋極廣，香港學校可以正常使用
- NotebookLM 的地區限制由 Gemini 應用程式的覆蓋範圍決定，**香港目前不在支援名單內**

簡單說：你的 Workspace 帳號能用 Google Meet、Google Classroom、Gemini for Workspace——但 **NotebookLM 是獨立服務，地區限制另計**。

---

## NotebookLM 和 Google Workspace 係兩碼事

**Google Workspace for Education** 是學校的協作套件——電郵、Google Meet、Classroom 等工具都在這裡。**NotebookLM** 是一個獨立的 AI 研究工具，由 Google 另行管理，地區限制各自獨立。

簡單說：你的 Workspace 帳號能用 Google Meet、Classroom、甚至 Gemini——但 **NotebookLM 有自己的地區限制，香港目前被排除在外，與你的帳號類型或訂閱層級無關**。

即使學校訂購了最高規格的 **Google Workspace for Education Plus**，這個訂閱**不包含、亦不解除** NotebookLM 的地區限制。

---

## 香港學校目前有三個選擇

既然 Google Workspace 帳號無法解決問題，學校通常面對以下三個方向：

**選項一：購買 NotebookLM Enterprise（Google Cloud）**

NotebookLM 有企業版，透過 Google Cloud 獨立採購，使用獨立網址存取，不受同樣的地區限制。但這是一個完全獨立的產品，部署需要 Google Cloud 環境，由 IT 部門管理，而且企業版的 Studio 輸出功能比消費者版少。適合對資料合規有高要求的大型機構，對一般中小學而言門檻較高。詳細比較可參考[這篇文章](/blog/2026-03-06-notebooklm-enterprise-vs-consumer-hk)。

**選項二：使用 VPN**

技術上可行，但在學校環境有不少隱患——可能違反學校 IT 政策、連線不穩定、資料經第三方伺服器，且難以在全班裝置上統一部署。詳細分析可參考[這篇文章](/blog/2026-03-04-notebooklm-hk-without-vpn)。

**選項三：Magic Door**

Magic Door 以非 VPN 方式接通 NotebookLM 等主流 AI 工具，讓師生使用消費者版的完整功能。Chrome 擴充功能版本可透過 Google Workspace Admin Console 一次部署至全校帳號；iPhone / iPad App 版本亦已推出，學生可在平板上直接使用。不修改學校防火牆，不截取網絡流量。
