/* Shared SmartECM document primitives and compositions. */
(()=>{
"use strict";
const e=v=>String(v??"").replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
const menus=[["portrait","세로형"],["landscape","가로형"],["cover01","표지 01"],["cover02","표지 02"],["proposal","제안서"],["plan","계획서"],["components","공통 컴포넌트"]];
const C={
title:({title,deck="",label="DESIGN SAMPLE"})=>'<header class="cover" data-component="title"><p class="document-kind">'+e(label)+' · 디자인 샘플</p><h1 class="document-title">'+e(title)+'</h1><p class="document-deck">'+e(deck)+'</p></header>',
overview:({text})=>'<p class="doc-body" data-component="overview">'+e(text)+'</p>',
kpi:({items})=>'<div class="metrics" data-component="kpi">'+items.map(([l,v,u])=>'<div class="metric"><span>'+e(l)+'</span><strong>'+e(v)+'<small>'+e(u)+'</small></strong></div>').join('')+'</div>',
facts:({rows})=>'<dl class="fact-list" data-component="facts">'+rows.map(([l,v])=>'<div class="fact"><dt>'+e(l)+'</dt><dd>'+e(v)+'</dd></div>').join('')+'</dl>',
table:({caption,headers,rows,columnWidths})=>{
 const proportional=Array.isArray(columnWidths);
 if(proportional&&(
   columnWidths.length!==headers.length||
   columnWidths.some(v=>typeof v!=='number'||!Number.isFinite(v)||v<12||v>70)||
   Math.abs(columnWidths.reduce((sum,v)=>sum+v,0)-100)>0.01
 ))throw new Error('table columnWidths must match headers and sum to 100; each column 12–70%');
 const cols=proportional?'<colgroup>'+columnWidths.map(value=>'<col style="width:'+value+'%">').join('')+'</colgroup>':'';
 return '<table class="table'+(proportional?' table-proportional':'')+'" data-component="table"><caption>'+e(caption)+'</caption>'+cols+'<thead><tr>'+headers.map(x=>'<th scope="col">'+e(x)+'</th>').join('')+'</tr></thead><tbody>'+rows.map(row=>'<tr>'+row.map(x=>'<td>'+e(x)+'</td>').join('')+'</tr>').join('')+'</tbody></table>';
},
recommendedTable:({caption,headers,rows,recommendedColumn=1})=>{
 const index=Number(recommendedColumn);
 if(!Array.isArray(headers)||headers.length!==3||!Array.isArray(rows)||rows.some(r=>!Array.isArray(r)||r.length!==3)||![1,2].includes(index))
   throw new Error('recommendedTable requires 3 columns and a recommended option at index 1 or 2');
 const start=index===1?'30%':'65%';
 const head=headers.map((x,i)=>'<th scope="col"'+(i===index?' class="recommended-heading"':'')+'>'+(i===index?'<span class="rec-star" aria-hidden="true">★</span>':'')+e(x)+(i===index?'<span class="rec-badge">추천</span>':'')+'</th>').join('');
 const body=rows.map(row=>'<tr>'+row.map((value,i)=>'<td'+(i===index?' class="recommended-cell"':'')+'>'+e(value)+'</td>').join('')+'</tr>').join('');
 return '<div class="doc-recommended-table" data-component="recommendedTable"><p class="doc-recommended-caption">'+e(caption)+'</p><div class="doc-recommended-shell" style="--rec-start:'+start+'"><table class="table doc-recommended-grid"><caption class="doc-visually-hidden">'+e(caption)+'</caption><colgroup><col style="width:30%"><col style="width:35%"><col style="width:35%"></colgroup><thead><tr>'+head+'</tr></thead><tbody>'+body+'</tbody></table></div></div>';
},
cards:({items})=>'<div class="doc-cards" data-component="cards">'+items.map(([t,d])=>'<section class="doc-card"><h3>'+e(t)+'</h3><p>'+e(d)+'</p></section>').join('')+'</div>',

/* Reusable document layouts. Keep descriptive content separate from presentation. */
multiCards:({items,columns=3,style='line'})=>{
 const count=Number(columns);
 if(![2,3,4].includes(count))throw new Error('multiCards columns must be 2, 3, or 4');
 if(!['line','tint','open'].includes(style))throw new Error('multiCards style must be line, tint, or open');
 return '<div class="doc-multi-cards cols-'+count+' style-'+style+'" data-component="multiCards" data-columns="'+count+'" data-style="'+style+'">'+items.map(([heading,description],i)=>'<section class="doc-multi-card"><span class="doc-item-index">'+String(i+1).padStart(2,'0')+'</span><h3>'+e(heading)+'</h3><p>'+e(description)+'</p></section>').join('')+'</div>';
},
/* Nested heading entries: numbering has a dedicated gutter; content never shares the number column. */
subsections:({items})=>'<div class="doc-subsections" data-component="subsections">'+items.map(({title,body,detail='',source=''},i)=>
 '<section class="doc-subsection"><span class="doc-subsection-no">'+String(i+1).padStart(2,'0')+'</span>'+
 '<div class="doc-subsection-content"><div class="doc-subsection-heading"><h3>'+e(title)+'</h3>'+
 (source?'<span class="doc-subsection-source">'+e(source)+'</span>':'')+'</div>'+
 '<p>'+e(body)+'</p>'+(detail?'<p class="doc-subsection-detail">'+e(detail)+'</p>':'')+
 '</div></section>').join('')+'</div>',
summaryGrid:({items})=>'<div class="doc-summary-grid" data-component="summaryGrid">'+items.map(([value,label])=>'<div class="doc-summary-item"><strong>'+e(value)+'</strong><span>'+e(label)+'</span></div>').join('')+'</div>',
optionCompare:({options})=>'<div class="doc-option-compare" data-component="optionCompare">'+options.map(({label,title,points})=>'<section class="doc-option"><span class="doc-option-label">'+e(label)+'</span><h3>'+e(title)+'</h3><ul>'+points.map(x=>'<li>'+e(x)+'</li>').join('')+'</ul></section>').join('')+'</div>',
checklist:({items,columns=2})=>{
 const count=Number(columns);
 if(![1,2].includes(count))throw new Error('checklist columns must be 1 or 2');
 return '<ul class="doc-checklist cols-'+count+'" data-component="checklist">'+items.map(x=>'<li><span class="doc-check-square" aria-hidden="true"></span><span>'+e(x)+'</span></li>').join('')+'</ul>';
},
numberedBlocks:({items,columns=3})=>{
 const count=Number(columns);
 if(![1,2,3,4].includes(count))throw new Error('numberedBlocks columns must be 1..4');
 return '<ol class="doc-numbered-blocks cols-'+count+'" data-component="numberedBlocks">'+items.map(([heading,description],i)=>'<li><span class="doc-item-index">'+String(i+1).padStart(2,'0')+'</span><div><h3>'+e(heading)+'</h3><p>'+e(description)+'</p></div></li>').join('')+'</ol>';
},
highlight:({title,text})=>'<aside class="doc-highlight" data-component="highlight"><strong>'+e(title)+'</strong><p>'+e(text)+'</p></aside>',
steps:({items})=>'<ol class="steps" data-component="steps">'+items.map(([t,d],i)=>'<li><span>STEP '+String(i+1).padStart(2,'0')+'</span><strong>'+e(t)+'</strong><p>'+e(d)+'</p></li>').join('')+'</ol>',
timeline:({items})=>'<ol class="timeline" aria-label="단계별 흐름" data-component="timeline">'+items.map(([t,d])=>'<li><span class="timeline-dot" aria-hidden="true"></span><strong>'+e(t)+'</strong><small>'+e(d)+'</small></li>').join('')+'</ol>',
quote:({text})=>'<blockquote class="question question-quote" data-component="quote"><span class="quote-mark" aria-hidden="true">“</span><span class="quote-text">'+e(text)+'</span></blockquote>',
note:({text})=>'<aside class="note" data-component="note">'+e(text)+'</aside>',
image:({src,alt,caption})=>'<figure class="doc-image" data-component="image"><img src="'+e(src)+'" alt="'+e(alt)+'"><figcaption>'+e(caption)+'</figcaption></figure>',
questions:({items})=>'<aside class="verification-questions" data-component="questions"><div class="verification-content"><h3 class="subhead">확인 질문</h3><ul class="checks">'+items.map(x=>'<li>'+e(x)+'</li>').join('')+'</ul></div></aside>',
scheduleGrid:({caption,months,groups})=>{
 const total=months.reduce((n,m)=>n+m.weeks,0);
 const monthHead=months.map(m=>'<th scope="colgroup" colspan="'+m.weeks+'">'+e(m.label)+'</th>').join('');
 const weeks=months.flatMap(m=>Array.from({length:m.weeks},(_,i)=>'<th scope="col">'+(i+1)+'주</th>')).join('');
 const rows=groups.map(g=>'<tbody>'+g.tasks.map(t=>{
  if(!Number.isInteger(t.start)||!Number.isInteger(t.duration)||t.start<0||t.duration<1||t.start+t.duration>total)throw new Error('Invalid schedule interval');
  const start=100*t.start/total,width=100*t.duration/total;
  const range=(t.start+1)+'번째 주부터 '+(t.start+t.duration)+'번째 주까지';
  return '<tr><th scope="row">'+e(t.name)+'</th><td colspan="'+total+'" class="schedule-track-cell"><div class="schedule-track" style="--weeks:'+total+'"><span class="schedule-bar" style="left:calc('+start+'% + 4px);width:calc('+width+'% - 8px)" aria-label="'+e(t.label+' · '+range)+'">'+e(t.label)+'</span></div></td></tr>';

 }).join('')+'</tbody>').join('');
 return '<table class="schedule-grid" data-component="scheduleGrid">'+(caption?'<caption>'+e(caption)+'</caption>':'')+'<colgroup><col class="schedule-name"><col span="'+total+'"></colgroup><thead><tr><th scope="col" rowspan="2">작업</th>'+monthHead+'</tr><tr>'+weeks+'</tr></thead>'+rows+'</table>';
},
architecture:({items})=>'<ol class="doc-architecture-diagram" aria-label="연결된 개념 아키텍처 · 샘플" data-component="architecture">'+items.map(([t,d],i)=>'<li class="arch-step"><div class="arch-node"><span class="arch-step-number">0'+(i+1)+'</span><strong>'+e(t)+'</strong><span class="arch-description">'+e(d)+'</span></div></li>').join('')+'</ol>'
};
const block=(type,data)=>({type,...data});
const render=b=>{if(!C[b.type])throw new Error('Unknown component: '+b.type);return C[b.type](b)};
const all=blocks=>blocks.map(render).join('');
const section=(n,title,blocks)=>'<section class="part"><div class="part-head"><span>'+String(n).padStart(2,'0')+'</span><h2>'+e(title)+'</h2></div>'+all(blocks)+'</section>';
const overview=text=>block('overview',{text}),note=text=>block('note',{text});
const title=(title,deck,label)=>block('title',{title,deck,label});
const facts=block('facts',{rows:[['문서 상태','디자인 샘플 · 검토용'],['적용 범위','가상의 운영환경 개선 과제'],['일정·담당','협의 후 확정 · 미정']]});
const kpi=block('kpi',{items:[['전체 대상 · 예시','08','개'],['검토 대상 · 예시','06','개'],['검토 단계','04','단계']]});
const timeline=block('timeline',{items:[['현황 조사','범위·일정 협의'],['설계·검증','대안 비교'],['단계별 적용','승인 후 진행'],['완료 검토','증적·인수 확인']]});
const steps=block('steps',{items:[['현황 점검','구성·연동 범위 확인 및 백업'],['호환성 검증','별도 환경에서 주요 기능 검증'],['전환·안정화','승인된 일정에 따라 순차 적용']]});
const comparison=block('table',{caption:'대안 비교 · 모든 판단은 예시이며 검증 전입니다.',headers:['비교 기준','대안 A · 현행 개선','대안 B · 단계적 전환'],rows:[['접근 방식','현재 구성의 개선 범위 검토','대상별 전환 가능성 검토'],['검증 범위','기존 연동·호환성 확인','데이터 이전·복구 경로 확인'],['의사결정 조건','개선 효과와 제약 확인 후 판단','검증 증적과 영향도 확인 후 판단']]});
const recommendedComparison=block('recommendedTable',{caption:'추천안 강조 표 · 디자인 예시이며 실제 평가·선정 결과가 아닙니다.',headers:['비교 기준','대안 A · 현행 개선','대안 B · 단계적 전환'],rows:[['구축 방향','기존 자원 활용 중심','대상별 단계적 전환'],['검증 관점','현행 구성과 연동 확인','전환·복구 경로 확인'],['검토 기준','운영 영향 및 제약 점검','변경 범위 및 일정 점검']],recommendedColumn:1});
// The content is fictional and intended only to show clear hierarchy and column sizing.
const subsectionSample=block('subsections',{items:[
 {title:'다중 운영 환경의 통합 관리',source:'검토 항목',body:'다수의 운영 환경에서 관리 대상과 정책 적용 범위를 하나의 절차로 정리합니다.',detail:'검증 범위: 접근 경로와 실제 관리 가능한 기능을 확인합니다.'},
 {title:'통합 자원 현황 점검',source:'검토 항목',body:'여러 환경의 자원 상태를 비교해 관측 지표와 경보 기준을 검토합니다.',detail:'검증 범위: 자원 수집 주기와 조회 권한을 확인합니다.'}
]});
const proportionalTableSample=block('table',{
 caption:'검증 우선 항목 · 열 너비는 문장 길이에 맞춘 예시입니다.',
 headers:['기능','차별화 검토 내용','확보할 증적'],
 rows:[
  ['01 · 멀티 클러스터 통합 운영 관리','여러 운영 환경의 상태와 연결 범위를 함께 확인','관리 화면 캡처'],
  ['02 · 가상머신 고가용성 검증','장애 상황에서 재기동 및 복구 절차를 검토','복구 시험 결과'],
  ['03 · 백업 무결성 점검 및 자동화','예약 검증 수행 가능 여부와 기록 보존 정책을 확인','검증 작업 이력']
 ],
 columnWidths:[36,38,26]
});
const hierarchySample=()=>section(3,'통합 운영·도입·하드웨어',[overview('아래 01·02는 03의 하위 항목이며, 번호·제목·본문은 서로 다른 영역에 배치합니다.'),subsectionSample]);
const schedule=block('table',{caption:'예시 일정 · 실제 날짜와 담당자는 미정입니다.',headers:['단계','예상 구간','주요 작업','확인 산출물'],rows:[['준비','1주차 · 예시','현황 조사·범위 협의','인벤토리'],['검증','2주차 · 예시','호환성·복구 시험','검증 기록'],['적용','3주차 · 예시','승인 후 단계별 전환','작업 기록'],['인수','4주차 · 예시','결과 확인·후속 협의','인수 체크리스트']]});
const scheduleGrid=block('scheduleGrid',{months:[{label:'2월',weeks:4},{label:'3월',weeks:4}],groups:[{tasks:[{name:'현황 조사',start:0,duration:2,label:'현황 분석'},{name:'요구사항 정리',start:1,duration:2,label:'범위 협의'},{name:'설계 및 구성',start:2,duration:3,label:'설계·구성'},{name:'기능 검증',start:4,duration:2,label:'검증'},{name:'단계별 적용',start:5,duration:2,label:'적용'},{name:'결과 검토',start:7,duration:1,label:'검토'}]}]});
const architecture=block('architecture',{items:[['사용자·업무','요구사항과 접근 경로'],['운영·관리','정책·관측·작업 흐름'],['인프라 자원','컴퓨트·스토리지·네트워크']]});
const questions=block('questions',{items:['기존 장비가 정상적으로 인식되는가?','관리·데이터 경로가 구분되는가?','연동과 접근 제어가 유지되는가?','변경 전 상태로 복구할 수 있는가?']});
const product=block('image',{src:'./assets/패키지이미지_배경없음.png',alt:'SmartECM 제품 패키지',caption:'제공된 제품 이미지 · 배치 예시'});
const quote=block('quote',{text:'무엇을 그대로 사용할 수 있고, 무엇을 변경해야 하는가?'});
const cards=block('cards',{items:[['대안 A','기존 환경의 개선 가능성을 확인합니다.'],['대안 B','단계적 전환의 영향과 제약을 확인합니다.']]});

const featureItems=[['고가용성','서비스 연속성을 고려한 운영 구성'],['통합 관리','자원과 운영 상태를 한곳에서 확인'],['데이터 보호','백업 및 복구 정책 수립'],['유연한 구성','운영 요구에 맞는 적용 범위 검토']];
const multiCardSample=block('multiCards',{items:featureItems.slice(0,3),columns:3,style:'line'});
const infoPair=block('multiCards',{items:[['추진 배경','현재 운영 환경과 개선 요구사항을 정리합니다.'],['기대 효과','개선 목표와 확인할 지표를 함께 정의합니다.']],columns:2,style:'open'});
const summarySample=block('summaryGrid',{items:[['03','서버 노드'],['48','CPU 코어'],['512','GB 메모리'],['10G','네트워크']]});
const optionSample=block('optionCompare',{options:[
 {label:'OPTION A',title:'클러스터 구성',points:['자원 통합 관리','고가용성 구성 검토','운영 정책 통합']},
 {label:'OPTION B',title:'독립형 구성',points:['서버별 독립 운영','간결한 구성 방식','서버별 개별 관리']}
]});
const checklistSample=block('checklist',{columns:2,items:['대상 장비와 현재 구성 확인','백업 및 복구 경로 점검','서비스별 영향 범위 검토','작업 승인·담당자 확인','검증 결과 기록 계획','원상복구 절차 준비']});
const numberedSample=block('numberedBlocks',{columns:3,items:[['현황 분석','운영 환경과 제약 사항 확인'],['적용 설계','요구사항별 구성안 수립'],['검증 수행','기능·복구 경로 점검']]});
const highlightSample=block('highlight',{title:'핵심 검토 사항',text:'적용 여부는 실제 환경의 검증 결과와 제약사항을 확인한 뒤 결정합니다.'});
function multiCardPlayground(){
 return '<div class="doc-layout-demo" data-layout-demo>'+
  '<div class="doc-layout-controls" aria-label="다단 카드 스타일 선택">'+
  '<div class="doc-layout-control"><span>열 개수</span><div role="group" aria-label="카드 열 수">'+
  [2,3,4].map(n=>'<button type="button" data-layout-columns="'+n+'" aria-pressed="'+(n===3)+'">'+n+'단</button>').join('')+'</div></div>'+
  '<div class="doc-layout-control"><span>표현 방식</span><div role="group" aria-label="카드 표현 방식">'+
  [['line','라인형'],['tint','배경형'],['open','오픈형']].map(([v,label])=>'<button type="button" data-layout-style="'+v+'" aria-pressed="'+(v==='line')+'">'+label+'</button>').join('')+'</div></div></div>'+
  '<div class="doc-layout-live" data-layout-live aria-live="polite">'+render(multiCardSample)+'</div>'+
  '</div>';
}
function paper(content,extra=''){return '<article class="paper continuous-document '+extra+'">'+content+'</article>'}
const portrait=()=>paper(render(title('세로형 기본 레이아웃','A4 210 × 297mm · 상단 20mm / 좌우 21mm / 하단 19mm. 문서 제목은 첫 페이지에 한 번만 표시합니다.','BASE / PORTRAIT'))+section(1,'개요와 본문',[overview('제목, 짧은 도입문, 번호가 있는 섹션 순으로 정보를 구성합니다. 본문은 10pt와 1.72 행간을 사용하고, 장문은 A4 페이지를 따라 자연스럽게 이어집니다.')])+section(2,'문서 현황',[facts])+section(3,'정보의 위계',[kpi])+section(4,'표와 안내',[comparison,note('본문을 임의로 줄여 한 페이지에 맞추지 않습니다. 제목과 다음 문단, 표의 각 행은 가능한 함께 유지합니다.')]));
const landscape=()=>paper(render(title('가로형 기본 레이아웃','A4 297 × 210mm · 폭이 넓은 비교표와 도식을 위한 구성입니다. 아래 구성은 가상의 설계 예시입니다.','BASE / LANDSCAPE'))+section(1,'아키텍처 배치',[architecture])+section(2,'대안 비교',[comparison]) ,'landscape-paper');
const proposal=()=>paper(render(title('운영환경 개선 제안서','검토용 샘플 · 고객 요구사항과 대안을 비교하기 위한 템플릿입니다. 실제 제품 지원 범위와 성능을 보장하는 자료가 아닙니다.','TEMPLATE / PROPOSAL'))+section(1,'제안 개요',[overview('운영환경의 현황을 파악하고 변경 영향을 최소화할 수 있는 개선 방향을 제안합니다. 대안별 검증 범위와 의사결정 조건을 먼저 정의합니다.'),quote])+section(2,'고객 요구사항 · 가상 예시',[block('table',{caption:'요구사항은 예시이며 고객 확인이 필요합니다.',headers:['요구사항','검토 관점','확인 방법'],rows:[['업무 연속성','서비스 영향 최소화','전환·복구 시나리오 검토'],['운영 가시성','상태와 작업 이력 확인','관측 항목·증적 협의'],['확장 가능성','향후 자원 변화 대응','지원 범위·제약 검증']]})])+section(3,'제안 아키텍처',[overview('아래 도식은 설명용 개념 구성입니다. 실제 연결 방식과 자원 배치는 요구사항 확인 후 작성합니다.'),architecture])+section(4,'대안 비교',[comparison,cards])+section(5,'도입 접근 방식',[timeline])+section(6,'검증 및 의사결정',[questions,note('산출물 · 요구사항 매핑, 대안 비교, 검증 기록, 미확인 항목 목록. 검증 전 항목을 완료 또는 지원 가능으로 표시하지 않습니다.')]));
const plan=()=>paper(render(title('운영환경 개선 수행계획서','검토용 샘플 · 목적, 범위, 일정, 작업 단계와 검증 항목을 연결한 실행 계획입니다.','TEMPLATE / PLAN'))+section(1,'추진 목적',[overview('변경 전 현황을 기록하고 호환성 검증을 거쳐 단계적으로 개선 작업을 수행하는 절차를 수립합니다.'),kpi])+section(2,'범위와 전제',[facts,note('서비스 중단 시간과 작업 담당자는 실제 대상별로 산정하고 사전 협의합니다.')])+section(3,'추진 일정',[schedule,timeline])+section(4,'단계별 작업',[steps])+section(5,'검증 항목',[questions,block('table',{caption:'검증 계획 · 수행 결과가 아닌 예정 항목입니다.',headers:['영역','검증 방법','예정 증적'],rows:[['스토리지','장치 인식·용량·복구 경로 점검','구성 기록'],['네트워크','역할 분리·연동·접근 제어 점검','통신 시험 기록'],['업무 서비스','기능·데이터·사용자 동선 점검','체크리스트']]})])+section(6,'완료 조건 및 후속 조치',[overview('합의한 검증 항목의 증적을 확인하고 미해결 항목, 원상복구 절차, 운영 인수 항목을 함께 검토합니다.'),note('완료 조건 · 승인된 체크리스트 확인 및 담당자 인수. 현재 예시는 실제 완료 상태를 나타내지 않습니다.')]));
const specimens=[
['제목','첫 페이지에서 한 번 사용하고 제목·도입문 위계를 유지합니다.',title('문서 제목과 도입문','문서의 목적과 범위를 간결하게 소개합니다.','COMPONENT')],
['대제목·하위 항목','큰 03 제목과 같은 내용 아래의 01·02 세부 항목을 번호 전용 칸으로 명확히 나눕니다.',subsectionSample],
['개요','사실·계획·미확인 항목을 구분하고 본문 행간을 유지합니다.',overview('운영환경을 조사하고 확인 가능한 증적을 바탕으로 개선 범위를 정리합니다. 문서 서식 설명을 위한 샘플입니다.')],
['KPI','예시 수치에는 예시 표시와 단위를 함께 씁니다.',kpi],
['현황표','레이블·값 2열, 흰 배경과 짧은 세로 구분선을 유지합니다.',facts],
['일반 표','가는 상단선·슬레이트 헤더선·본문 구분선을 사용합니다.',comparison],
['열 너비 조절 표','긴 기능 이름을 우선 확보하도록 36/38/26 비율로 구성한 3열 예시입니다.',proportionalTableSample],
['추천안 강조 표','대안 A 열의 제목에 별과 포인트 컬러를 사용하고, 열 전체를 굵은 테두리로 강조합니다. 실제 추천 결과는 아닙니다.',recommendedComparison],
['카드형','비교 선택지처럼 의미가 있는 묶음에만 경계를 사용합니다.',cards],

['다단 카드','2·3·4열과 라인형·배경형·오픈형을 선택합니다. 4열은 짧은 텍스트 중심으로 사용합니다.',multiCardSample],
['2단 정보 블록','추진 배경과 기대 효과처럼 서로 연결된 정보를 오픈형으로 배치합니다.',infoPair],
['4단 요약 카드','핵심 수치와 짧은 항목명을 한 줄에 배치합니다. 값은 디자인 샘플입니다.',summarySample],
['A/B 비교 카드','대안별 특성이나 고려사항을 좌우에서 비교합니다. 평가 우열은 임의로 표시하지 않습니다.',optionSample],
['2열 체크리스트','검증 전 항목은 미체크 사각형으로 표시하여 완료로 오해하지 않도록 합니다.',checklistSample],
['번호형 설명 블록','01·02·03의 순서를 보여주는 간결한 설명형 레이아웃입니다.',numberedSample],
['강조 정보 블록','결론이나 중요한 제한 사항을 전체 너비의 절제된 강조 영역으로 표현합니다.',highlightSample],
['일정','단계·기간·작업·산출물을 연결합니다. 날짜를 임의 확정하지 않습니다.',schedule],
['일정2','월·주차와 작업 구간을 막대로 연결합니다. 기간과 상태는 샘플입니다.',scheduleGrid],
['타임라인','4단계 흐름을 표현합니다. 실제 진행률을 의미하지 않습니다.',timeline],
['인용문','큰 여는 따옴표와 얇은 위아래 선으로 분리합니다.',quote],
['안내','주의·산출물·제약을 얇은 왼쪽 강조선으로 표현합니다.',note('산출물 · 검증 기록과 미확인 항목 목록을 함께 관리합니다.')],
['이미지','원본 비율, 대체 텍스트와 캡션을 유지합니다.',product],
['작업 단계','작업 순서를 제목과 설명으로 구성합니다.',steps],
['검증 질문','쿨그레이 영역으로 묶고 모바일에서 1열로 표시합니다.',questions],
['아키텍처','독립된 노드를 연결선으로 연결하는 다이어그램 예시입니다. 실제 시스템 관계는 별도 검증이 필요합니다.',architecture]
];
const components=()=>paper(render(title('공통 컴포넌트','제안서·계획서에서 함께 사용하는 디자인 요소입니다. 각 요소의 사용 기준과 샘플을 확인하세요.','LIBRARY'))+specimens.map(([name,rule,b],i)=>'<section class="specimen" aria-label="'+e(name)+' 컴포넌트"><div class="specimen-label"><span>'+String(i+1).padStart(2,'0')+'</span><h2>'+e(name)+'</h2></div><p class="specimen-rule">'+e(rule)+'</p>'+(name==='다단 카드'?multiCardPlayground():name==='대제목·하위 항목'?hierarchySample():render(b))+'</section>').join(''));
// Current Korean calendar date for the cover's authoring date.
const coverToday=()=>{
 const parts=new Intl.DateTimeFormat('ko-KR',{timeZone:'Asia/Seoul',year:'numeric',month:'2-digit',day:'2-digit'}).formatToParts(new Date());
 const value=type=>parts.find(part=>part.type===type)?.value||'';
 return [value('year'),value('month'),value('day')].join('.');
};
// Cover 01 adopts the centered style, with a larger top-right logo and author/date.
const cover01=()=>paper(
  '<div class="cover-sheet cover-centered cover-one"><div class="cover-brand cover-brand-right">'+
  '<img src="./assets/로고_smartecm.png" alt="SmartECM"></div>'+
  '<header class="cover-center-content"><h1 class="document-title">SmartECM 도입 검토 제안서</h1>'+
  '<p class="document-deck">가상화 인프라 전환을 위한 기술 검토 및 적용 방향</p></header>'+
  '<dl class="cover-byline"><div><dt>작성자:</dt><dd>(주)위앤아이티 홍길동 차장</dd></div>'+
  '<div><dt>작성일:</dt><dd>'+e(coverToday())+'</dd></div></dl></div>',
  'cover-paper'
);
// Cover 02 uses a stronger typography-led editorial composition.
const cover02=()=>paper(
  '<div class="cover-sheet cover-editorial">'+
  '<div class="cover-editorial-top"><img src="./assets/로고_smartecm.png" alt="SmartECM">'+
  '<span>DOCUMENT SERIES / 02</span></div>'+
  '<div class="cover-editorial-main"><span class="cover-editorial-kicker">SMART INFRASTRUCTURE / PROPOSAL</span>'+
  '<h1 class="document-title">운영환경 개선 제안서</h1>'+
  '<p class="document-deck">가상화 인프라의 안정적인 운영을 위한 현황 분석과 단계별 개선 방향</p>'+
  '<div class="cover-editorial-accent" aria-hidden="true"></div></div>'+
  '<div class="cover-editorial-bottom"><div><span>PREPARED BY</span><strong>(주)위앤아이티</strong></div>'+
  '<div><span>DOCUMENT TYPE</span><strong>기술 제안서 · 디자인 샘플</strong></div></div></div>',
  'cover-paper'
);
const compositions={portrait,landscape,cover01,cover02,proposal,plan,components};
function tabs(attribute='doc'){return menus.map(([id,label],i)=>'<button type="button" role="tab" id="tab-'+id+'" data-'+attribute+'="'+id+'" aria-selected="'+(i===0)+'" tabindex="'+(i===0?0:-1)+'"'+(attribute==='doc'?' aria-controls="sample-'+id+'"':'')+'>'+label+'</button>').join('')}
window.SmartECMDocuments={menus,components:C,compositions,render,block,tabs};
if(!document.querySelector('[data-document-library]'))return;
const nav=document.querySelector('.tabs');nav.innerHTML=tabs();
document.querySelector('.preview').innerHTML=menus.map(([id],i)=>'<section class="example" role="tabpanel" id="sample-'+id+'" aria-labelledby="tab-'+id+'" '+(i?'hidden':'')+'>'+compositions[id]()+'</section>').join('');
const pageStyle=document.createElement('style');
// Named A4 page rules preserve page dimensions and margins without default footer labels, rules, or counters.
pageStyle.textContent=menus.map(([id])=>'@page doc-'+id+'{size:A4 '+(id==='landscape'?'landscape':'portrait')+';margin:20mm 21mm 19mm}@media print{#sample-'+id+' .paper{page:doc-'+id+'}}').join('');
document.head.append(pageStyle);
// Only the library preview has interactive controls; templates reuse the same renderer.
document.querySelectorAll('[data-layout-demo]').forEach(demo=>{
 const live=demo.querySelector('[data-layout-live]');
 const state={columns:3,style:'line'};
 function apply(){
   const items=featureItems.slice(0,state.columns);
   live.innerHTML=render(block('multiCards',{items,columns:state.columns,style:state.style}));
   demo.querySelectorAll('[data-layout-columns]').forEach(btn=>btn.setAttribute('aria-pressed',String(Number(btn.dataset.layoutColumns)===state.columns)));
   demo.querySelectorAll('[data-layout-style]').forEach(btn=>btn.setAttribute('aria-pressed',String(btn.dataset.layoutStyle===state.style)));
 }
 demo.addEventListener('click',event=>{
   const btn=event.target.closest('button');
   if(!btn||!demo.contains(btn))return;
   if(btn.hasAttribute('data-layout-columns'))state.columns=Number(btn.dataset.layoutColumns);
   else if(btn.hasAttribute('data-layout-style'))state.style=btn.dataset.layoutStyle;
   else return;
   apply();
 });
});
const buttons=[...nav.querySelectorAll('button')];
function select(tab,focus=false){buttons.forEach(b=>{const on=b===tab;b.setAttribute('aria-selected',String(on));b.tabIndex=on?0:-1;document.getElementById('sample-'+b.dataset.doc).hidden=!on});if(focus)tab.focus();window.scrollTo(0,0)}
buttons.forEach((b,i)=>{b.addEventListener('click',()=>select(b));b.addEventListener('keydown',ev=>{if(!['Home','End','ArrowLeft','ArrowRight'].includes(ev.key))return;ev.preventDefault();select(buttons[ev.key==='Home'?0:ev.key==='End'?buttons.length-1:(i+(ev.key==='ArrowRight'?1:buttons.length-1))%buttons.length],true)})});
document.getElementById('print').addEventListener('click',()=>window.print());
})();
