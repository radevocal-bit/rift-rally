import{$ as e,$n as t,An as n,At as r,Bn as i,C as a,Dn as o,Dt as s,E as c,Et as l,F as u,Fn as d,G as f,H as p,I as m,In as h,J as g,Jn as _,Kn as v,L as y,M as b,Mt as x,Nn as S,Ot as C,P as w,Pn as T,Q as E,Qn as D,R as O,Rn as ee,Rt as te,Sn as k,St as ne,T as re,Tt as A,U as ie,Un as j,Vn as M,W as N,Wn as ae,X as oe,Y as P,Z as F,_ as I,_n as se,at as ce,b as le,bn as ue,bt as L,d as de,dt as R,ft as fe,g as pe,h as me,ht as z,it as he,jt as ge,k as _e,kn as ve,l as ye,m as be,mt as B,nr as xe,ot as Se,pt as V,q as H,rt as Ce,tt as we,v as U,vt as Te,w as Ee,x as De,yt as Oe,zn as ke}from"./avatar-DgqfaY_W.js";import{$ as Ae,C as je,Ct as W,D as Me,G as Ne,It as Pe,J as Fe,K as Ie,Lt as Le,Pt as Re,Rt as ze,U as Be,Vt as Ve,W as He,X as Ue,Y as We,_t as Ge,b as Ke,bt as qe,ct as Je,dt as Ye,ht as Xe,i as Ze,it as Qe,k as $e,lt as et,n as tt,ot as nt,pt as rt,q as it,rt as at,st as ot,ut as st,vt as ct,wt as lt,xt as ut,yt as dt,zt as ft}from"./index-h88GJtsg.js";import{n as pt,r as mt,t as ht}from"./three.module-_9mxZuFg.js";import{cpuYuruReady as gt,grandpaReady as _t,loadAllCpuYuru as vt,loadGrandpa as yt,seatLookReady as bt}from"./pudding-B3cj5iNJ.js";import{loadYuruParty as xt,yuruPartyReady as St}from"./yuru-party-BlCh75KG.js";import{loadSamuraiModel as Ct,samuraiModelReady as wt,t as Tt}from"./samurai-C7baBtjA.js";import{a as Et,aimGuns as Dt,animateCharacter as Ot,c as kt,createCharacter as At,i as jt,l as Mt,n as Nt,o as Pt,r as Ft,s as It,t as Lt,u as Rt}from"./characters-DWAT4GIv.js";function zt(e,t){let n=(e,t,n)=>e+Math.max(-1,Math.min(1,e/t))*(n-t);return{x:n(e,17,W.width/2),z:n(t,10.5,W.depth/2)}}var Bt=e=>e.isMesh===!0,Vt=`city-lamp-light`,Ht=e=>e.isMeshStandardMaterial===!0;async function Ut(n){let r=new H;r.name=`blender-harbour-city`;let i=new ye,s=new ee,c=await fetch(`./models/twilight-city-layout.json`);if(!c.ok)throw Error(`City layout unavailable`);let l=await c.json(),u=e=>({...e,...zt(e.x,e.z)}),d={...l,palace:u(l.palace),blocks:l.blocks.map(e=>({...e,placements:e.placements.map(u)}))},[f,p,m,h]=await Promise.all([i.loadAsync(`./models/twilight-infrastructure.glb`),i.loadAsync(`./models/monumental-palace-v3.glb`),Promise.all(d.blocks.map(e=>i.loadAsync(`./models/${e.model}.glb`))),Promise.all([`weathered-limestone-v3`,`aged-oak-v3`,`lime-plaster-v3`].map(e=>s.loadAsync(`./textures/${e}.png`)))]),g=Mt(),_=h.map(e=>(e.colorSpace=o,e.wrapS=e.wrapT=ue,e.anisotropy=8,e)),v=_.map(e=>{let t=e.clone();return t.colorSpace=``,t.needsUpdate=!0,t}),y=new Set;for(let e of[f.scene,p.scene,...m.map(e=>e.scene)])e.traverse(e=>{if(Bt(e)){e.receiveShadow=!0;for(let t of Array.isArray(e.material)?e.material:[e.material]){if(!Ht(t)||y.has(t))continue;y.add(t),t.envMapIntensity=.25;let e=t.name;/WarmGlass/i.test(e)?(t.color.set(`#6b391d`),t.emissive.set(`#ff9b43`),t.emissiveIntensity=1.05,t.roughness=.35):/Recess|Shadow|DarkStone/i.test(e)?(t.normalMap=null,t.map=_[0],t.bumpMap=v[0],t.bumpScale=.055):/Stone|limestone/i.test(e)?(t.normalMap=null,t.map=_[0],t.bumpMap=v[0],t.bumpScale=.095,t.roughness=.88,t.color.lerp(new a(`#c1b9a8`),.48)):/Oak|Wood|walnut/i.test(e)?(t.normalMap=null,t.map=_[1],t.bumpMap=v[1],t.bumpScale=.045,t.roughness=.82,t.color.lerp(new a(`#aea094`),.58)):/Plaster/i.test(e)?(t.normalMap=null,t.map=_[2],t.bumpMap=v[2],t.bumpScale=.035,t.roughness=.94,t.color.lerp(new a(`#d0bbaa`),.44)):/Slate|RoofTile/i.test(e)?(t.normalMap=null,t.map=g.slate,t.bumpMap=g.slate,t.bumpScale=.045,t.roughness=.66,t.color.set(`#3b5266`)):/Linen|Canvas|Teal/i.test(e)&&(t.normalMap=null,t.map=g.cloth,t.bumpMap=g.cloth,t.bumpScale=.012,t.roughness=.94),/Leaves|Flowers/i.test(e)&&(t.side=2,t.roughness=.86),t.onBeforeCompile=e=>{e.fragmentShader=e.fragmentShader.replace(`#include <normal_fragment_maps>`,`
          vec3 stableSurfaceNormal=normal;
          #include <normal_fragment_maps>
          if(!(dot(normal,normal)>0.5))normal=stableSurfaceNormal;
        `)},t.customProgramCacheKey=()=>`city-stable-normal-v1`,t.needsUpdate=!0}}});f.scene.updateMatrixWorld(!0),f.scene.traverse(e=>{if(!Bt(e))return;e.castShadow=!/StoneRecess|Flowers/.test(e.name);let t=e.geometry.clone().applyMatrix4(e.matrixWorld),n=t.getAttribute(`position`);for(let e=0;e<n.count;e++){let t=zt(n.getX(e),n.getZ(e));n.setXYZ(e,t.x,n.getY(e),t.z)}t.computeVertexNormals(),/Stone|Approach/i.test(e.name)&&Rt(t,.25),t.applyMatrix4(e.matrixWorld.clone().invert()),t.computeBoundingBox(),t.computeBoundingSphere(),e.geometry.dispose(),e.geometry=t}),r.add(f.scene);let b=new pe(1,1,1),x=new L({color:`#9d998f`,map:_[0],bumpMap:v[0],bumpScale:.08,roughness:.92}),S=[];function C(n,i,a){n.updateMatrixWorld(!0);let o=new A,s=new V,c=new me().setFromObject(n),l=c.getSize(new t),u=c.getCenter(new t);for(let e of i){let n=new t(u.x*e.scale,0,u.z*e.scale).applyAxisAngle(new t(0,1,0),e.angle),r=e.y-.01,i=-5.35;o.position.set(e.x+n.x,(r+i)/2,e.z+n.z),o.rotation.set(0,e.angle,0),o.scale.set(l.x*e.scale,r-i,l.z*e.scale),o.updateMatrix();let a=b.clone().applyMatrix4(o.matrix);Rt(a,.25),S.push(a)}n.traverse(t=>{if(!Bt(t))return;let n=new e(t.geometry,t.material,i.length);n.name=a,n.castShadow=!0,n.receiveShadow=!0,i.forEach((e,r)=>{o.position.set(e.x,e.y,e.z),o.rotation.set(0,e.angle,0),o.scale.setScalar(e.scale),o.updateMatrix(),s.multiplyMatrices(o.matrix,t.matrixWorld),n.setMatrixAt(r,s)}),n.computeBoundingSphere(),r.add(n)})}d.blocks.forEach((e,t)=>C(m[t].scene,e.placements,e.model)),C(p.scene,[d.palace],`monumental-palace`);let w=new B(de(S,!1),x);w.name=`grounded-building-foundations`,w.receiveShadow=!0,w.castShadow=!0,w.geometry.computeBoundingSphere(),r.add(w),S.forEach(e=>e.dispose()),b.dispose(),r.userData={authoredWith:`Blender 5.2`,ready:!0,version:3,archetypes:d.blocks.length,buildings:d.blocks.reduce((e,t)=>e+t.placements.length,0),palace:d.palace,court:{width:W.width,depth:W.depth}},n.add(r);for(let[e,t,r,i,a]of[[4,5,-19,22,19],[16,5,20,24,22],[-24,4,13,16,18],[39,8,-20,34,32]]){let o=zt(e,r),s=new ge(`#ffad65`,i,a,1.6);s.position.set(o.x,t,o.z),s.name=Vt,n.add(s)}}function Wt(e){let t=new B(new r(780,680),new L({color:`#273c38`,roughness:1}));t.rotation.x=-Math.PI/2,t.position.y=-5.3,t.receiveShadow=!0,t.name=`terraced-valley`,e.add(t);let n=new L({color:`#173b4b`,roughness:.27,metalness:.6,envMapIntensity:.75});n.onBeforeCompile=e=>{e.uniforms.harbourTime={value:0},n.userData.shader=e,e.vertexShader=e.vertexShader.replace(`#include <common>`,`#include <common>
varying vec3 waterPosition;`).replace(`#include <worldpos_vertex>`,`#include <worldpos_vertex>
waterPosition=(modelMatrix*vec4(transformed,1.0)).xyz;`),e.fragmentShader=e.fragmentShader.replace(`#include <common>`,`#include <common>
varying vec3 waterPosition;uniform float harbourTime;`).replace(`#include <normal_fragment_maps>`,`#include <normal_fragment_maps>
        float w1=sin(waterPosition.x*2.2+waterPosition.z*1.7+harbourTime*.7);
        float w2=cos(waterPosition.x*.81-waterPosition.z*3.1-harbourTime*.43);
        normal=normalize(normal+vec3(w1*.10,w2*.075,0.0));`)};let i=new B(new r(134,220),n),a=zt(76,95);i.rotation.x=-Math.PI/2,i.position.set(a.x,-2.6,a.z),i.name=`harbour-water`,e.add(i)}function Gt(e){if(e.getObjectByName(`EpicCity_TwilightSky`))return;let r=(e,n)=>{let r=R.degToRad(e),i=R.degToRad(n);return new t(Math.cos(i)*Math.cos(r),Math.sin(i),Math.cos(i)*Math.sin(r))},i=r(-25,25),o=r(25,20),s=new n({name:`EpicCity_TwilightSkyMaterial`,side:1,depthTest:!1,depthWrite:!1,fog:!1,toneMapped:!0,uniforms:{uZenith:{value:new a(`#142b59`)},uMiddle:{value:new a(`#36648c`)},uHorizon:{value:new a(`#829aaa`)},uBelow:{value:new a(`#566e8a`)},uBlueDirection:{value:i},uAmberDirection:{value:o},uBlueRadius:{value:R.degToRad(5)},uAmberRadius:{value:R.degToRad(6.5)},uBlueTint:{value:new a(`#c3e8f2`)},uAmberTint:{value:new a(`#efb983`)}},vertexShader:`
      varying vec3 vSkyDirection;
      void main() {
        vSkyDirection = normalize(position);
        vec4 clip = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        // Always place the sky just inside the far clip plane, even when the
        // game's far distance is less than the physical 650-metre sky radius.
        gl_Position = vec4(clip.xy, clip.w * 0.999999, clip.w);
      }
    `,fragmentShader:`
      precision highp float;
      varying vec3 vSkyDirection;
      uniform vec3 uZenith;
      uniform vec3 uMiddle;
      uniform vec3 uHorizon;
      uniform vec3 uBelow;
      uniform vec3 uBlueDirection;
      uniform vec3 uAmberDirection;
      uniform vec3 uBlueTint;
      uniform vec3 uAmberTint;
      uniform float uBlueRadius;
      uniform float uAmberRadius;

      float hash13(vec3 p) {
        p = fract(p * 0.1031);
        p += dot(p, p.yzx + 33.33);
        return fract((p.x + p.y) * p.z);
      }

      float noise3(vec3 p) {
        vec3 i = floor(p);
        vec3 f = fract(p);
        f = f * f * (3.0 - 2.0 * f);
        return mix(
          mix(mix(hash13(i), hash13(i + vec3(1,0,0)), f.x),
              mix(hash13(i + vec3(0,1,0)), hash13(i + vec3(1,1,0)), f.x), f.y),
          mix(mix(hash13(i + vec3(0,0,1)), hash13(i + vec3(1,0,1)), f.x),
              mix(hash13(i + vec3(0,1,1)), hash13(i + vec3(1,1,1)), f.x), f.y), f.z
        );
      }

      float fbm(vec3 p) {
        float sum = 0.0;
        float amplitude = 0.52;
        for (int octave = 0; octave < 4; octave++) {
          sum += amplitude * noise3(p);
          p = p * 2.07 + vec3(17.1, 9.2, 3.7);
          amplitude *= 0.49;
        }
        return sum;
      }

      float craterRelief(vec3 normal, float seed) {
        float relief = 0.0;
        // Chord distances on the visible hemisphere make the crater rings
        // foreshorten toward the rim instead of staying flat circular decals.
        for (int crater = 0; crater < 16; crater++) {
          float index = float(crater) + seed;
          vec3 randomValue = vec3(
            hash13(vec3(index, 1.7, 5.2)),
            hash13(vec3(index, 8.3, 2.4)),
            hash13(vec3(index, 3.1, 9.8))
          );
          vec3 center = normalize(vec3(randomValue.xy * 2.0 - 1.0,
                                       0.17 + randomValue.z * 0.83));
          float radius = mix(0.055, 0.24, randomValue.z * randomValue.z);
          float distanceToCrater = length(normal - center) / radius;
          float floorDepression = exp(-pow(distanceToCrater / 0.70, 4.0));
          // GLSL pow() is undefined for negative bases, even with exponent 2.
          // One NaN in a bright moon pixel would spread across bloom's blur.
          float rimDistance = (distanceToCrater - 0.94) / 0.13;
          float rim = exp(-rimDistance * rimDistance);
          relief += rim * 0.052 - floorDepression * 0.078;
        }
        return relief;
      }

      vec4 moon(vec3 ray, vec3 center, float angularRadius, vec3 tint,
                float seed, vec3 atmosphericColor) {
        float facing = dot(ray, center);

        vec3 right = normalize(cross(center, vec3(0.0, 1.0, 0.0)));
        vec3 up = normalize(cross(right, center));
        vec2 p = vec2(dot(ray, right), dot(ray, up)) / sin(angularRadius);
        float radiusSquared = dot(p, p);
        float radius = sqrt(radiusSquared);
        float aa = max(fwidth(radius), 0.0007);
        // Derivatives must run uniformly across each 2x2 pixel group, including
        // neighbours outside the disk. Evaluate before any per-pixel return.
        if (facing < cos(angularRadius * 1.24)) return vec4(0.0);
        float disk = 1.0 - smoothstep(1.0 - aa, 1.0 + aa, radius);

        // A subdued atmospheric aureole, without sparkles or star particles.
        if (radius > 1.0 + aa) {
          float halo = exp(-(radius - 1.0) * 28.0) * 0.045;
          return vec4(mix(atmosphericColor, tint, 0.50), halo);
        }

        vec3 normal = vec3(p, sqrt(max(0.0, 1.0 - radiusSquared)));
        normal = normalize(normal);
        vec3 offset = vec3(seed * 0.73, seed * 0.17, seed * 0.43);
        float maria = smoothstep(0.34, 0.69, fbm(normal * 4.4 + offset));
        float terrain = fbm(normal * 19.0 + offset + 7.5);
        float fineGrain = noise3(normal * 91.0 + offset) - 0.5;
        float craters = craterRelief(normal, seed);
        float albedo = 0.88 - maria * 0.24 + (terrain - 0.48) * 0.16
                       + fineGrain * 0.027 + craters;

        // Softly lit spherical surface. The limb darkens gently, preserving a
        // nearly full moon without a hard black terminator.
        vec3 lightDirection = normalize(vec3(-0.32, 0.35, 0.88));
        float diffuse = max(dot(normal, lightDirection), 0.0);
        float sphereShading = 0.53 + 0.47 * diffuse;
        float limb = mix(0.83, 1.0, pow(max(normal.z, 0.0), 0.34));
        vec3 surface = tint * albedo * sphereShading * limb * 1.34;
        float atmosphere = mix(0.17, 0.08, smoothstep(0.12, 0.65, center.y));
        surface = mix(surface, atmosphericColor, atmosphere);
        return vec4(surface, disk);
      }

      void main() {
        vec3 ray = normalize(vSkyDirection);
        float elevation = clamp(ray.y, 0.0, 1.0);
        vec3 sky = mix(uHorizon, uMiddle, smoothstep(0.0, 0.33, elevation));
        sky = mix(sky, uZenith, smoothstep(0.24, 1.0, elevation));
        sky = mix(sky, uBelow, smoothstep(0.0, 0.35, -ray.y));

        // A broad, bright atmospheric veil and faint stretched wisps. There
        // are no procedural stars, moving particles or dense storm clouds.
        float haze = exp(-abs(ray.y - 0.05) * 5.0);
        sky = mix(sky, uHorizon, haze * 0.12);
        float cloudNoise = fbm(ray * vec3(3.1, 12.0, 3.1) + vec3(5.2, 0.7, 9.4));
        float wisps = smoothstep(0.57, 0.76, cloudNoise);
        float cloudBand = smoothstep(0.03, 0.16, ray.y)
                        * (1.0 - smoothstep(0.43, 0.75, ray.y));
        sky = mix(sky, uHorizon, wisps * cloudBand * 0.15);

        vec4 blue = moon(ray, uBlueDirection, uBlueRadius, uBlueTint, 11.3, sky);
        sky = mix(sky, blue.rgb, blue.a);
        vec4 amber = moon(ray, uAmberDirection, uAmberRadius, uAmberTint, 37.7, sky);
        sky = mix(sky, amber.rgb, amber.a);

        gl_FragColor = vec4(sky, 1.0);
        #include <tonemapping_fragment>
        #include <colorspace_fragment>
      }
    `}),c=new h(650,48,32),l=new B(c,s);l.name=`EpicCity_TwilightSky`,l.renderOrder=-1e4,l.frustumCulled=!1,l.castShadow=!1,l.receiveShadow=!1;let u=new t;l.onBeforeRender=(e,t,n)=>{n.getWorldPosition(u),l.position.copy(u),l.updateMatrixWorld(!0)},l.userData.dispose=()=>{l.removeFromParent(),c.dispose(),s.dispose()},e.add(l)}function Kt(e){let t=new H;t.name=`rift-arena`,e.add(t);let n=W.width/2,a=W.depth/2,s=W.goalWidth/2,c=W.width/34,l=W.depth/21;t.userData={theme:`twilight-royal-approach`,courtWidth:W.width,courtDepth:W.depth,goalWidth:W.goalWidth,area:W.width*W.depth,tallSceneryInnerX:n+10,tallSceneryInnerZ:a+10.5};let u=(e,t={})=>new L({color:e,roughness:.91,metalness:.02,...t}),d=u(14999251),f=u(15853526),m=u(7892576),h=u(6505267),g=u(9725249),_=u(3749691,{metalness:.5}),v=u(12558946,{metalness:.45,roughness:.65}),y=u(3767956,{side:2}),b=u(11029589,{side:2}),x=u(15058812);u(7374940);let S=new z({color:7981525}),C=new z({color:15114373}),w=u(11968633,{metalness:.25,roughness:.8}),T=new z({color:16032847}),E=new z({color:16770976}),O=u(15119979,{emissive:16760166,emissiveIntensity:.8,roughness:.4}),te=Mt(),ne=new ee().load(`./textures/weathered-limestone-v3.png`);ne.colorSpace=o,ne.wrapS=ne.wrapT=ue,ne.anisotropy=8;let A=e=>{let t=e.clone();return t.colorSpace=``,t.needsUpdate=!0,t},ie=(e,t,n,r)=>{e.map=t,e.bumpMap=A(t),e.bumpScale=r,e.userData.worldScale=n};for(let e of[d,f])ie(e,ne,.22,.045);for(let e of[h,g])ie(e,te.wood,.42,.027);for(let e of[y,b])e.map=te.cloth,e.bumpMap=A(te.cloth),e.bumpScale=.012,e.roughness=.83;let j=new pe(1,1,1);new oe(1,1);function M(e,n,r,i,a,o=t){let s=new B(e,n);return s.position.set(r,i,a),s.receiveShadow=!0,s.castShadow=n instanceof L,o.add(s),s}function N(e,n,r,i,a,o,s,c=t){let l=M(j,s,e,n,r,c);return l.scale.set(i,a,o),l}function ae(e,n,r,i,a,o,s,c=20,l=t){return M(new _e(i,a,o,Math.max(12,c)),s,e,n,r,l)}function P(e,t,n,r,i,a=0){let o=N(e,.016,t,n,.018,r,i);return o.rotation.y=a,o}function F(e,t,n,r,i,a=0,o=Math.PI*2){let s=M(new k(n-r/2,n+r/2,80,1,a,o),i,e,.031,t);return s.rotation.x=-Math.PI/2,s}function I(e,n,i,a,o,s,c=0,l=t){let u=new H;u.position.set(e,n,i),u.rotation.y=c,l.add(u);let d=new r(a,o,10,12),f=d.getAttribute(`position`);for(let e=0;e<f.count;e++){let t=(f.getX(e)+a/2)/a,n=(o/2-f.getY(e))/o;f.setXYZ(e,f.getX(e),-n*o+(n>.99?.26*(1-Math.abs(t-.5)*2):0),Math.sin(t*Math.PI*5+n*.8)*.048*n)}d.computeVertexNormals(),M(d,s,0,0,0,u),N(0,-o*.44,.055,a*.065,o*.88,.018,x,u);let p=M(new De(a*.18,6),x,0,-o*.4,.025,u);p.rotation.z=Math.PI/6,N(0,.045,0,a+.22,.09,.1,h,u)}function se(e,n,r,a,o=t){let s=new H;s.position.set(e,n,r),s.scale.setScalar(a),o.add(s);let c=[new D(.36,0),new D(.43,.15),new D(.48,.55),new D(.44,.94),new D(.37,1.07)];M(new we(c,18),g,0,0,0,s),ae(0,1.055,0,.365,.365,.04,h,18,s);for(let e of[.1,.26,.84,1.01]){let t=M(new i(e<.2||e>1?.395:.458,.025,5,20),_,0,e,0,s);t.rotation.x=Math.PI/2}}function le(e,n,r,a=t){let o=new H;o.position.set(e,n,r),a.add(o),N(0,0,0,.27,.4,.27,_,o),N(0,0,0,.225,.3,.285,O,o),N(0,0,0,.285,.3,.225,O,o);for(let e of[-.135,.135])for(let t of[-.135,.135])N(e,0,t,.035,.43,.035,_,o);ae(0,.27,0,.04,.23,.18,_,4,o);let s=M(new i(.1,.018,4,14),_,0,.44,0,o);s.rotation.y=Math.PI/2}function de(e,t){ae(e,.18,t,.47,.55,.38,m,8),ae(e,.75,t,.18,.26,1.1,_,8),ae(e,1.38,t,.43,.22,.3,v,8);let n=M(new re(.28,.75,7),T,e,1.86,t);n.rotation.z=.13;let r=M(new re(.16,.54,6),E,e-.04,1.81,t+.03);r.rotation.z=-.12}Gt(e),Wt(e),N(0,-.95,0,W.width+22,1.5,W.depth+19,m),N(0,-.24,0,W.width+22.5,.24,W.depth+19.5,d),N(0,-.33,0,W.width+3.9,.56,W.depth+3.9,f),N(0,-.135,0,W.width+2.2,.14,W.depth+2.2,m);let R=new ee().load(`./textures/limestone-court-v2.png`);R.wrapS=R.wrapT=ue,R.repeat.set(6*c,4*l),R.colorSpace=o,R.anisotropy=8;let fe=M(new r(W.width,W.depth),u(11778756,{map:R,bumpMap:A(R),bumpScale:.12,roughness:.74,metalness:.04}),0,-.03,0);fe.rotation.x=-Math.PI/2,fe.name=`playable-stone-floor`,fe.castShadow=!1;for(let e of[-a-.6,a+.6])for(let t=0;t<W.width;t++)N(-n+.5+t,-.035,e,.96,.16,1,d);for(let e of[-n-.6,n+.6])for(let t=-a;t<=a;t++)N(e,-.035,t,1,.16,.96,f);for(let e of[-a+.18,a-.18])P(0,e,W.width-.15,.09,w);for(let e of[-6.2*c,6.2*c])P(e,0,W.depth-.4,.035,w,Math.PI/2);for(let e=-a+.8;e<=a-.8;e+=1.6)if(Math.abs(e)>3.8*l){let t=P(0,e,.13,.13,w);t.rotation.y=Math.PI/4}F(0,0,3.2*l,.09,w),F(0,0,2.98*l,.025,w),F(0,0,.93,.065,w);for(let e=0;e<8;e++){let t=e*Math.PI/4,n=3.45*l,r=P(Math.sin(t)*n,Math.cos(t)*n,.31,.31,w);r.rotation.y=t+Math.PI/4,P(Math.sin(t)*2.65*l,Math.cos(t)*2.65*l,.38,.065,w,Math.PI/2-t)}let me=P(0,0,.42,.42,x);me.rotation.y=Math.PI/4;for(let e of[-1,1]){let r=e<0?y:b,i=e<0?S:C;F(e*(n-.25),0,s+1.1,.075,i,e<0?-Math.PI/2:Math.PI/2,Math.PI).scale.x=.74;for(let t of[-a-.22,a+.22]){N(e*(n/2+.2),.2,t,n+.1,.46,.28,d),N(e*(n/2+.2),.43,t,n+.1,.035,.3,v);for(let r=.55;r<n;r+=1.2)N(e*r,.22,t,.025,.32,.287,m);P(e*(n/2-.05),t-Math.sign(t)*.4,n-.15,.1,i)}let o=a-s;for(let t of[-(a+s)/2,(a+s)/2])N(e*(n+.45),.2,t,.3,.46,o,d),N(e*(n+.45),.43,t,.32,.035,o,v);let c=new H;t.add(c),c.name=e<0?`azure-goal`:`ember-goal`,c.userData={goalPlane:e*n,opening:W.goalWidth};for(let t of[-s,s]){N(e*(n+.22),1.14,t,.23,2.35,.23,f,c);for(let r of[.3,.9,1.5,2.1])N(e*(n+.22),r,t,.265,.1,.265,d,c);N(e*(n+.07),1.18,t,.05,2.25,.1,i,c)}N(e*(n+.22),2.33,0,.23,.18,W.goalWidth+.22,f,c),N(e*(n+.08),2.33,0,.055,.07,W.goalWidth+.2,v,c);for(let t of[-s,s])N(e*(n+.22),2.48,t,.31,.18,.35,d,c);N(e*(n+1),-.04,0,1.7,.04,W.goalWidth-.02,r,c),I(e*(n+1.9),3.7,s+1.05,1.2,1.25,r,e<0?Math.PI/2:-Math.PI/2,c),ae(e*(n+1.9),1.84,s+1.05,.06,.08,3.78,_,12,c),ae(e*(n+1.9),.1,s+1.05,.22,.27,.24,m,12,c);let l=[];for(let t=-s;t<=s;t+=.47)l.push(e*(n+1.78),.1,t,e*(n+1.78),2.23,t);for(let t=.2;t<2.3;t+=.35)l.push(e*(n+1.78),t,-s,e*(n+1.78),t,s);let u=new U;u.setAttribute(`position`,new p(l,3)),c.add(new ce(u,new he({color:12167038,transparent:!0,opacity:.4})));for(let t of[-s-1.8,s+1.8])de(e*(n+2.4),t)}for(let e of[-1,1]){for(let t of[-19,-5,17]){let{x:n,z:r}=zt(t,e*17.6);N(n,.2,r,3.4,.55,1.2,m),N(n,.52,r,3.6,.12,1.4,d)}for(let[t,n]of[[-23,.9],[-21,.68],[10,.87],[25,1.1]]){let{x:r,z:i}=zt(t,e*18.2);se(r,-.05,i,n),n>.85&&le(r,n*1.08+.15,i)}for(let t of[-22,22]){let{x:n,z:r}=zt(t,e*16.5);ae(n,1.7,r,.055,.075,3.5,_,10),I(n,3.35,r,1,1.7,n<0?y:b,e<0?0:Math.PI)}}return qt(t),Ut(e)}function qt(t){t.updateWorldMatrix(!0,!0);let n=t.matrixWorld.clone().invert(),r=new Map;t.traverse(t=>{if(!(t instanceof B)||t instanceof e||Array.isArray(t.material)||t.material.transparent)return;let n=`${t.material.uuid}:${t.castShadow}:${t.receiveShadow}:${t.renderOrder}:${t.layers.mask}`,i=r.get(n)||[];i.push(t),r.set(n,i)});let i=new Set;for(let e of r.values()){if(e.length<2)continue;let r=e.map(e=>{let t=e.geometry.index?e.geometry.toNonIndexed():e.geometry.clone();return t.applyMatrix4(new V().multiplyMatrices(n,e.matrixWorld)),e.material.userData.worldScale&&Rt(t,e.material.userData.worldScale),t.clearGroups(),t}),a=de(r,!1);if(r.forEach(e=>e.dispose()),!a)continue;a.computeBoundingBox(),a.computeBoundingSphere();let o=e[0],s=new B(a,o.material);s.name=`arena-batch`,s.castShadow=o.castShadow,s.receiveShadow=o.receiveShadow,s.renderOrder=o.renderOrder,s.layers.mask=o.layers.mask,t.add(s);for(let t of e)i.add(t.geometry),t.removeFromParent()}t.traverse(e=>{e instanceof B&&i.delete(e.geometry)}),i.forEach(e=>e.dispose())}var Jt=lt.colosseum;function Yt(e){return()=>(e=Math.imul(e,1664525)+1013904223>>>0,e/4294967296)}function Xt(){let e=document.createElement(`canvas`);e.width=e.height=1024;let t=e.getContext(`2d`),n=Yt(4815);t.fillStyle=`#8f7456`,t.fillRect(0,0,1024,1024);for(let e=0;e<700;e++){let r=n()*1024,i=n()*1024,a=8+n()*80;for(let n of[-1024,0,1024])for(let o of[-1024,0,1024]){let s=r+n,c=i+o;if(s+a<0||c+a<0||s-a>1024||c-a>1024)continue;let l=t.createRadialGradient(s,c,0,s,c,a);l.addColorStop(0,e%2?`#d4b78e28`:`#392e2928`),l.addColorStop(1,`#00000000`),t.fillStyle=l,t.fillRect(s-a,c-a,a*2,a*2)}}for(let e=0;e<62e3;e++){let r=n()*1024,i=n()*1024,a=.35+n()*1.4;t.fillStyle=e%3==0?`#dfc9a13b`:`#342b292b`,t.fillRect(r,i,a,a*.7)}for(let e=0;e<1600;e++){let e=n()*1024,r=n()*1024,i=.7+n()*2;t.fillStyle=`#4c423d50`,t.beginPath(),t.ellipse(e,r,i*1.5,i,.6,0,Math.PI*2),t.fill(),t.fillStyle=`#b5a18b65`,t.fillRect(e-i,r-i*.4,i*2,.7)}let r=new le(e);return r.colorSpace=o,r.wrapS=r.wrapT=ue,r.repeat.set(6,6),r.anisotropy=8,r.name=`Colosseum packed earth`,r}function Zt(e,t,n,r=.5){let i=new U().setFromPoints(t);e.add(new Ce(i,new he({color:n,transparent:!0,opacity:r,depthWrite:!1})))}function Qt(t){let n=Yt(65123),r=[],i=[4609910,7552059,7823433,10127200,3755078,11182225,5850724,3359059],o=(e,t)=>Math.abs(Math.atan2(Math.sin(e-t),Math.cos(e-t)));for(let e=0;e<8;e++){let t=34.48+e*1.86,a=11+e*1.22+.46,s=Math.floor(2*Math.PI*t/1.05);for(let e=0;e<s;e++){let c=(e+.5)*Math.PI*2/s;o(c,Math.round(c/(Math.PI/6))*Math.PI/6)*t<1.08||t>=39.2&&(o(c,-Math.PI/2)<16*Math.PI/180||o(c,Math.PI/2)<11*Math.PI/180)||t>=44.5&&o(c,59*Math.PI/180)<.075||n()<.14||r.push({x:Math.cos(c)*t,y:a,z:Math.sin(c)*t,angle:-c-Math.PI/2,color:i[Math.floor(n()*i.length)],size:.88+n()*.24})}}let s=new e(new _e(.21,.28,.66,7),new L({roughness:1}),r.length),c=new e(new h(.18,7,5),new L({roughness:1}),r.length),l=new e(new _e(.075,.085,.53,5),new L({roughness:1}),r.length*2),u=new A,d=new a;r.forEach((e,t)=>{u.position.set(e.x,e.y+.32*e.size,e.z),u.rotation.set(0,e.angle,0),u.scale.set(e.size,e.size,e.size),u.updateMatrix(),s.setMatrixAt(t,u.matrix),s.setColorAt(t,d.setHex(e.color)),u.position.y=e.y+.86*e.size,u.updateMatrix(),c.setMatrixAt(t,u.matrix),c.setColorAt(t,d.setHSL(.07+n()*.04,.19+n()*.15,.37+n()*.28));for(let n=0;n<2;n++){let r=n?1:-1,i=t%9==0;u.position.set(e.x+Math.cos(e.angle)*r*.26,e.y+(i?.72:.3),e.z-Math.sin(e.angle)*r*.26),u.rotation.set(i?.4:-.6,e.angle,r*(i?.5:.12)),u.updateMatrix(),l.setMatrixAt(t*2+n,u.matrix),l.setColorAt(t*2+n,d.setHex(e.color))}}),s.name=`Colosseum audience clothing`,c.name=`Colosseum audience faces`,l.name=`Colosseum audience arms`;for(let e of[s,c,l])e.receiveShadow=!0,e.castShadow=!1,e.computeBoundingSphere(),t.add(e);t.userData.spectators=r.length}async function $t(e){Gt(e);let n=new H;n.name=`rift-arena`,n.userData={mapId:`colosseum`,radius:Jt.radius,area:Jt.area},e.add(n);let i=Xt(),a=new B(new De(Jt.radius+2,192),new L({map:i,bumpMap:i,bumpScale:.065,roughness:.98,color:`#c4b4a0`}));a.name=`Colosseum circular soil`,a.rotation.x=-Math.PI/2,a.position.y=-.035,a.receiveShadow=!0,n.add(a);let o=new z({color:`#d9cab1`,transparent:!0,opacity:.29,side:2,depthWrite:!1});for(let[e,t]of[[5,.065],[Jt.radius-1.4,.07]]){let r=new B(new k(e-t,e,192),o);r.rotation.x=-Math.PI/2,r.position.y=.003,n.add(r)}let s=new B(new De(.3,24),o);s.rotation.x=-Math.PI/2,s.position.y=.004,n.add(s),Zt(n,[new t(0,.005,-Jt.radius+1.4),new t(0,.005,Jt.radius-1.4)],`#dac9a8`,.28);let c=[];for(let e of[-1,1]){let t=e<0?`#76caff`:`#ee9565`,i=e*Jt.goalX,a=new H;a.name=e<0?`Azure scoring gate`:`Ember scoring gate`,a.position.x=e*(Jt.radius+5.7),c.push(a);let s=new B(new pe(.3,8.1,15.1),new L({color:`#282b2a`,roughness:.94}));s.position.y=4,a.add(s);let u=new L({color:`#434847`,metalness:.55,roughness:.67});for(let t=-7;t<=7;t+=.7){let n=new B(new pe(.25,7.8,.09),u);n.position.set(-e*.28,3.9,t),a.add(n)}for(let t of[1,3,5,7]){let n=new B(new pe(.32,.13,14.8),u);n.position.set(-e*.3,t,0),a.add(n)}let d=new B(new _e(1.05,1.05,.12,8),new L({color:t,roughness:.72,emissive:t,emissiveIntensity:.12}));d.rotation.z=Math.PI/2,d.position.set(-e*.5,4.1,0),a.add(d),n.add(a);let f=new B(new r(.14,Jt.goalWidth),new z({color:t,transparent:!0,opacity:.65,depthWrite:!1}));f.rotation.x=-Math.PI/2,f.position.set(i,.018,0),n.add(f);for(let r of[-Jt.goalWidth/2,Jt.goalWidth/2]){let a=new B(new l(.24),new L({color:t,emissive:t,emissiveIntensity:1.3,roughness:.32}));a.position.set(i,2.3,r),n.add(a);let o=new ge(t,12,6,2);o.position.set(i-e*.8,2.5,r),n.add(o)}let p=new B(new k(3.9,3.96,64,1,-Math.PI/2,Math.PI),o);p.rotation.x=-Math.PI/2,p.rotation.z=e<0?0:Math.PI,p.position.set(i,.012,0),n.add(p)}for(let e of c)qt(e);let u=await new ye().loadAsync(`./models/maps/royal-colosseum-v1.glb`);u.scene.name=`Blender Colosseum`,u.scene.traverse(e=>{if(e instanceof B){e.castShadow=!0,e.receiveShadow=!0;for(let t of Array.isArray(e.material)?e.material:[e.material])t instanceof L&&t.map&&(t.map.anisotropy=8)}}),n.add(u.scene),Qt(n)}var en={zenith:`#86c6ee`,middle:`#b4def4`,horizon:`#fdf3df`,below:`#e4f0f2`,sun:{azimuth:-126.4,elevation:44.9,color:`#fff2c9`},rainbow:{azimuth:6,elevation:-15,radius:33,width:5.4,strength:.78},clouds:[[-158,12,6.5],[-122,19,5],[-84,11,7],[-46,21,5.5],[-14,9,4.5],[34,20,5.5],[68,11,7.5],[104,17,6],[138,10,7],[172,22,5.5],[-178,30,4],[10,29,4]]},tn=(e,n)=>{let r=R.degToRad(e),i=R.degToRad(n);return new t(Math.cos(i)*Math.cos(r),Math.sin(i),Math.cos(i)*Math.sin(r))};function nn(e){if(e.getObjectByName(`EpicCity_TwilightSky`))return;let r=en,i=r.clouds.length,o=[],s=[],c=[],l=[];r.clouds.forEach(([e,n,r],i)=>{let a=tn(e,n),u=new t().crossVectors(a,new t(0,1,0)).normalize(),d=new t().crossVectors(u,a).normalize();o.push(a),s.push(u),c.push(d),l.push(new D(Math.sin(R.degToRad(r)),i*7.31+1.7))});let u=new n({name:`StorybookSkyMaterial`,side:1,depthTest:!1,depthWrite:!1,fog:!1,toneMapped:!0,defines:{CLOUDS:i},uniforms:{uZenith:{value:new a(r.zenith)},uMiddle:{value:new a(r.middle)},uHorizon:{value:new a(r.horizon)},uBelow:{value:new a(r.below)},uSunDir:{value:tn(r.sun.azimuth,r.sun.elevation)},uSunColor:{value:new a(r.sun.color)},uRainbowDir:{value:tn(r.rainbow.azimuth,r.rainbow.elevation)},uRainbow:{value:new t(R.degToRad(r.rainbow.radius),R.degToRad(r.rainbow.width),r.rainbow.strength)},uCloudC:{value:o},uCloudR:{value:s},uCloudU:{value:c},uCloudS:{value:l}},vertexShader:`
      varying vec3 vSkyDirection;
      void main() {
        vSkyDirection = normalize(position);
        vec4 clip = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        gl_Position = vec4(clip.xy, clip.w * 0.999999, clip.w);   // いつも奥の面のすぐ手前（src/sky.ts と同じ）
      }`,fragmentShader:`
      precision highp float;
      varying vec3 vSkyDirection;
      uniform vec3 uZenith, uMiddle, uHorizon, uBelow, uSunDir, uSunColor, uRainbowDir, uRainbow;
      uniform vec3 uCloudC[CLOUDS], uCloudR[CLOUDS], uCloudU[CLOUDS];
      uniform vec2 uCloudS[CLOUDS];
      float hash(float n) { return fract(sin(n) * 43758.5453); }
      // 虹の色（内側の紫 → 外側の赤）。色えんぴつの仕上げ（紙の色にとける）でも見えるくらいの濃さ。
      vec3 rainbow(float t) {
        vec3 c = mix(vec3(.66, .50, .92), vec3(.44, .70, .96), smoothstep(.0, .2, t));
        c = mix(c, vec3(.50, .84, .52), smoothstep(.2, .4, t));
        c = mix(c, vec3(1.0, .90, .38), smoothstep(.4, .6, t));
        c = mix(c, vec3(1.0, .66, .38), smoothstep(.6, .8, t));
        return mix(c, vec3(.98, .46, .50), smoothstep(.8, 1.0, t));
      }
      // 1 つの雲の形（負＝雲の中）。下は平ら、上はもこもこ（丸 6 つ）。p は雲の大きさを 1 にした座標。
      float cloudShape(vec2 p, float seed) {
        float d = 1e3;
        for (int k = 0; k < 7; k++) {
          float fk = float(k);
          float x = -1.2 + fk * .4 + (hash(seed + fk) - .5) * .16;
          float r = .26 + .36 * sin(3.14159 * (fk + .5) / 7.0) + (hash(seed + fk * 3.1) - .5) * .14;
          float y = -.2 + r * .62;
          d = min(d, length(p - vec2(x, y)) - r);
        }
        return max(d, -(p.y + .2));
      }
      void main() {
        vec3 ray = normalize(vSkyDirection);
        float up = clamp(ray.y, 0.0, 1.0);
        vec3 sky = mix(uHorizon, uMiddle, smoothstep(0.0, 0.26, up));
        sky = mix(sky, uZenith, smoothstep(0.2, 0.95, up));
        sky = mix(sky, uBelow, smoothstep(0.0, 0.2, -ray.y));
        // 太陽：大きくやわらかい光と、白い丸
        float sunCos = dot(ray, uSunDir);
        sky = mix(sky, uSunColor, pow(smoothstep(0.55, 1.0, sunCos), 3.0) * 0.75);
        sky = mix(sky, vec3(1.0, 0.99, 0.93), smoothstep(0.9968, 0.9978, sunCos));
        // 虹（地平線の近くで消える）
        float angle = acos(clamp(dot(ray, uRainbowDir), -1.0, 1.0));
        float t = (angle - (uRainbow.x - uRainbow.y * 0.5)) / uRainbow.y;
        if (t > 0.0 && t < 1.0) {
          float edge = smoothstep(0.0, 0.18, t) * smoothstep(1.0, 0.82, t);
          sky = mix(sky, rainbow(t), edge * smoothstep(0.0, 0.12, ray.y) * uRainbow.z);
        }
        // 雲：白・下のほうは淡い藤色の陰・ふちは少しだけぼかす
        if (ray.y > -0.02) {
          for (int i = 0; i < CLOUDS; i++) {
            float facing = dot(ray, uCloudC[i]);
            if (facing < 0.9) continue;
            vec2 p = vec2(dot(ray, uCloudR[i]), dot(ray, uCloudU[i])) / uCloudS[i].x;
            float d = cloudShape(p, uCloudS[i].y);
            float a = smoothstep(0.035, -0.035, d);
            if (a <= 0.0) continue;
            float shade = smoothstep(-0.22, 0.55, p.y) * 0.6 + smoothstep(-0.25, 0.0, -d) * 0.4;
            vec3 cloud = mix(vec3(0.87, 0.86, 0.95), vec3(1.0, 0.995, 0.975), shade);
            sky = mix(sky, cloud, a);
          }
        }
        gl_FragColor = vec4(sky, 1.0);
        #include <tonemapping_fragment>
        #include <colorspace_fragment>
      }`}),d=new h(650,48,32),f=new B(d,u);f.name=`EpicCity_TwilightSky`,f.renderOrder=-1e4,f.frustumCulled=!1,f.castShadow=!1,f.receiveShadow=!1;let p=new t;f.onBeforeRender=(e,t,n)=>{n.getWorldPosition(p),f.position.copy(p),f.updateMatrixWorld(!0)},f.userData.dispose=()=>{f.removeFromParent(),d.dispose(),u.dispose()},e.add(f)}var G={dirt:{half:28,radius:33},trackLines:[24,25.6,27.2,28.8,30.4],clear:12,building:{front:90,z:-6,length:46,depth:11},open:[{x0:54,x1:116,z0:-44,z1:34},{x0:-42,x1:30,z0:-56,z1:-33},{x0:-36,x1:46,z0:33,z1:52},{x0:-97,x1:-64,z0:-2,z1:32}],rings:[{radius:185},{radius:310},{radius:500}]};function rn(e){return()=>{e=e+1831565813|0;let t=Math.imul(e^e>>>15,1|e);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}var an=(e,t)=>{let n=Math.sin(e*127.1+t*311.7)*43758.5453;return n-Math.floor(n)};function on(e,t){let n=Math.floor(e),r=Math.floor(t),i=e-n,a=t-r,o=i*i*(3-2*i),s=a*a*(3-2*a),c=an(n,r),l=an(n+1,r),u=an(n,r+1),d=an(n+1,r+1);return c+(l-c)*o+(u-c)*s+(c-l-u+d)*o*s}var sn=(e,t,n)=>on(Math.cos(e)*t+n,Math.sin(e)*t+n*1.7),cn=(e,t,n)=>{let r=Math.min(1,Math.max(0,(n-e)/(t-e)));return r*r*(3-2*r)},ln=(e,t)=>Math.hypot(Math.max(Math.abs(e)-G.dirt.half,0),t)-G.dirt.radius,un=(e,t)=>Math.hypot(Math.max(Math.abs(e)-W.width/2,0),Math.max(Math.abs(t)-W.depth/2,0)),dn=(e,t)=>Math.min(...G.open.map(n=>Math.hypot(Math.max(n.x0-e,0,e-n.x1),Math.max(n.z0-t,0,t-n.z1))));function fn(e,t){let n=cn(30,110,ln(e,t))*cn(0,20,dn(e,t));return n<=0?0:n*(5+11*on(e*.011+3.1,t*.011+7.7))+n*n*9}var pn=new a;function K(e,t){e.getAttribute(`uv`)&&e.deleteAttribute(`uv`);let n=e.getAttribute(`position`),r=new Float32Array(n.count*3);for(let e=0;e<n.count;e++){let i=typeof t==`function`?t(n.getX(e),n.getY(e),n.getZ(e)):pn.set(t);r[e*3]=i.r,r[e*3+1]=i.g,r[e*3+2]=i.b}return e.setAttribute(`color`,new p(r,3)),e.index||e.setIndex([...Array(n.count).keys()]),e}var mn=(e,t,n,r)=>{let i=new a(e),o=new a(t);return(e,t)=>pn.copy(i).lerp(o,cn(n,r,t))};function hn(e,t,n=1){let r=e.index?e.toNonIndexed():e,i=t.map(e=>new a(e)),o=r.getAttribute(`position`).count;r.getAttribute(`uv`)&&r.deleteAttribute(`uv`);let s=new Float32Array(o*3);for(let e=0;e<o;e++){let t=i[Math.floor(e/3/n)%i.length];s[e*3]=t.r,s[e*3+1]=t.g,s[e*3+2]=t.b}return r.setAttribute(`color`,new p(s,3)),r.setIndex([...Array(o).keys()]),r}function gn(e,t,n){let r=e.index?e.toNonIndexed():e,i=t.map(e=>new a(e)),o=r.getAttribute(`position`),s=o.count,c=new Float32Array(s*3);r.getAttribute(`uv`)&&r.deleteAttribute(`uv`);for(let e=0;e<s;e+=3){let t=(o.getX(e)+o.getX(e+1)+o.getX(e+2))/3,r=(o.getZ(e)+o.getZ(e+1)+o.getZ(e+2))/3,a=i[Math.floor((Math.atan2(r,t)+Math.PI)/(Math.PI*2)*n)%i.length];for(let t=0;t<3;t++)c[(e+t)*3]=a.r,c[(e+t)*3+1]=a.g,c[(e+t)*3+2]=a.b}return r.setAttribute(`color`,new p(c,3)),r.setIndex([...Array(s).keys()]),r}var q=(e,n,r,i,a=0,o=1,s=0,c=0)=>e.applyMatrix4(new V().compose(new t(n,r,i),new x().setFromEuler(new O(s,a,c,`YXZ`)),Array.isArray(o)?new t(...o):new t(o,o,o))),J=(e,t,n,r)=>K(new pe(e,t,n),r),Y=(e,t,n,r,i=10)=>K(new _e(e,t,n,i,1),r),_n=(e,t,n,r=10)=>K(new re(e,t,r,1),n),X=(e,t,n=10,r=7)=>K(new h(e,n,r),t);function Z(e,n,r,i,a=6){let o=n.clone().sub(e);return Y(r,r,o.length(),i,a).applyMatrix4(new V().compose(e.clone().add(n).multiplyScalar(.5),new x().setFromUnitVectors(new t(0,1,0),o.normalize()),new t(1,1,1)))}function vn(e,t,n){let r=0;e.forEach(([t,n],i)=>{let[a,o]=e[(i+1)%e.length];r+=t*o-a*n}),r<0&&(e=[...e].reverse());let i=[],a=[],o=e.length,s=(t,n)=>{let r=i.length/3;for(let[n,r]of e)i.push(n,r,t);for(let e=1;e<o-1;e++)a.push(...n?[r,r+e+1,r+e]:[r,r+e,r+e+1])};s(t/2,!1),s(-t/2,!0);for(let n=0;n<o;n++){let[r,s]=e[n],[c,l]=e[(n+1)%o],u=i.length/3;i.push(r,s,t/2,c,l,t/2,c,l,-t/2,r,s,-t/2),a.push(u,u+3,u+2,u,u+2,u+1)}let c=new U;return c.setAttribute(`position`,new p(i,3)),c.setIndex(a),c.computeVertexNormals(),K(c,n)}function yn(e,t,n,r,i){let a=[],o=[],s=e.length;for(let r=0;r<s;r++){let o=e[i?(r-1+s)%s:Math.max(0,r-1)],c=e[i?(r+1)%s:Math.min(s-1,r+1)].clone().sub(o).normalize(),l=-c.y*t/2,u=c.x*t/2,d=e[r];a.push(d.x-l,n,d.y-u,d.x+l,n,d.y+u)}for(let e=0;e<(i?s:s-1);e++){let t=e*2,n=(e+1)%s*2;o.push(t,n,t+1,t+1,n,n+1)}let c=new U;c.setAttribute(`position`,new p(a,3)),c.setIndex(o),c.computeVertexNormals();let l=c.getAttribute(`normal`);for(let e=0;e<l.count;e++)l.setXYZ(e,0,1,0);return K(c,r)}var bn={dirt:`#dcbd8f`,dirtDark:`#c9a575`,grass:`#93c66e`,grassLight:`#a9d47e`,grassDark:`#7cb35f`,chalk:`#fbfaf3`,board:`#fbf6ec`,azure:`#8ccdf0`,ember:`#f6a596`,posts:[`#f4a9bd`,`#9ddbc6`,`#f7dc72`,`#c4b2ee`],trunk:`#94653f`,leaves:[`#6fb05d`,`#5d9e55`,`#86c26b`],pine:`#3f8061`,blossom:`#f3b5c8`,autumn:`#eba648`,wall:`#f7edd9`,roof:`#e2705a`,trim:`#4aa3a2`,glass:`#a9daf0`,wood:`#a76a45`,navy:`#3f4b77`,cap:[`#e5574d`,`#9c84d6`,`#f29e4c`],stem:`#f8eedb`,rainbow:[`#ff9aa2`,`#ffc58e`,`#fff09a`,`#a9e8a4`,`#9ccff6`,`#c9a8ef`]};function xn(){let e=rn(20261002),t=[],n=7.5;for(let r=-175;r<=175;r+=n)for(let i=-175;i<=175;i+=n){let a=r+(e()-.5)*n*.9,o=i+(e()-.5)*n*.9,s=e(),c=e(),l=e(),u=e(),d=un(a,o),f=ln(a,o),p=Math.hypot(a,o);if(d<G.clear+2||f<4||dn(a,o)<3||p>175||s>.82*cn(4,10,f)*(1-.8*cn(45,120,f))+.035)continue;let m=c<.58?`round`:c<.8?`pine`:c<.9?`blossom`:`autumn`;t.push({x:a,z:o,y:fn(a,o),scale:.78+l*.62,kind:m,tint:u})}return t}function Sn(e){nn(e);let n=new H;n.name=`rift-arena`,e.add(n);let o=W.width/2,s=W.depth/2,c=W.goalWidth/2;n.userData={mapId:`school`,theme:`storybook-forest-school`,courtWidth:W.width,courtDepth:W.depth,goalWidth:W.goalWidth,area:W.width*W.depth,tallClear:G.clear};let l=[],u=[],d=[],f=[],m=[],g=rn(7),_=bn,v=(e,n,r)=>new t(e,n,r),y=(e,t)=>Math.abs(e)<o+30&&Math.abs(t)<s+30?l:d,b=(e,t)=>{let n=ln(e,t),r=on(e*.06,t*.06),i=on(e*.4+9,t*.4+2),o=pn.set(_.dirt).lerp(new a(_.dirtDark),r*.45+i*.15).clone(),s=new a(_.grass).lerp(new a(r>.5?_.grassLight:_.grassDark),Math.abs(r-.5)*1.2),c=fn(e,t);return c>0&&s.lerp(new a(`#9fc7a0`),cn(4,40,c)*.35),o.lerp(s,cn(-.4,1.1,n))},x=new r(130,84,130,84);x.rotateX(-Math.PI/2);let S=new r(1e3,1e3,100,100);S.rotateX(-Math.PI/2);{let e=S.getAttribute(`position`);for(let t=0;t<e.count;t++)e.setY(t,fn(e.getX(t),e.getZ(t))-.05);S.computeVertexNormals()}for(let e of[x,S]){let t=e.getAttribute(`position`),n=e.getAttribute(`uv`),r=new Float32Array(t.count*3);for(let e=0;e<t.count;e++){let i=t.getX(e),a=t.getZ(e),o=b(i,a);r[e*3]=o.r,r[e*3+1]=o.g,r[e*3+2]=o.b,n.setXY(e,i/5,a/5)}e.setAttribute(`color`,new p(r,3))}let C=new L({name:`School yard ground`,vertexColors:!0,roughness:1,metalness:0,map:Cn()}),w=new B(de([x,S]),C);w.name=`school-yard-ground`,w.receiveShadow=!0,n.add(w),x.dispose(),S.dispose();let T=.12,E=.012,O=(e,t,n,r)=>u.push(q(J(n,.004,r,_.chalk),e,E,t));for(let e of[-s+.1,s-.1])O(0,e,W.width,T);for(let e of[-o+.1,o-.1])O(e,0,T,W.depth);O(0,0,T,W.depth);let ee=(e,t,n,r=0,i=Math.PI*2)=>u.push(q(K(new k(n-T/2,n+T/2,72,1,r,i),_.chalk),e,E,t,0,1,-Math.PI/2));ee(0,0,6.4),u.push(q(K(new De(.28,16),_.chalk),0,E,0,0,1,-Math.PI/2));for(let e of[-1,1]){let t=e*(o-9),n=e*(o-3.5),r=e*(o-7);O(t,0,T,26),O(n,0,T,19);for(let n of[-13,13])O((t+e*o)/2,n,9,T);for(let t of[-9.5,9.5])O((n+e*o)/2,t,3.5,T);u.push(q(K(new De(.22,14),_.chalk),r,E,0,0,1,-Math.PI/2));let i=Math.acos(2/6.4);ee(r,0,6.4,e>0?Math.PI-i:-i,i*2);for(let t of[-1,1])ee(e*o,t*s,1,e>0?t>0?Math.PI/2:Math.PI:t>0?0:-Math.PI/2,Math.PI/2)}let te=e=>{let t=[],n=G.dirt.half;for(let r=0;r<=36;r++){let i=-Math.PI/2+Math.PI*r/36;t.push(new D(n+Math.cos(i)*e,Math.sin(i)*e))}for(let r=0;r<=36;r++){let i=Math.PI/2+Math.PI*r/36;t.push(new D(-n+Math.cos(i)*e,Math.sin(i)*e))}return t};for(let e of G.trackLines)u.push(yn(te(e),.1,.011,_.chalk,!0));O(0,(G.trackLines[0]+G.trackLines.at(-1))/2,.16,G.trackLines.at(-1)-G.trackLines[0]);for(let e of[-s-.22,s+.22]){l.push(q(J(W.width+.6,.42,.16,_.board),0,.21,e));for(let t of[-1,1])l.push(q(J(o+.3,.07,.24,t<0?_.azure:_.ember),t*(o+.3)/2,.45,e))}for(let e of[-1,1])for(let t of[-(s+c)/2,(s+c)/2])l.push(q(J(.16,.42,s-c+.3,_.board),e*(o+.45),.21,t)),l.push(q(J(.24,.07,s-c+.3,e<0?_.azure:_.ember),e*(o+.45),.45,t));let ne=0,A=(e,t)=>{let n=_.posts[ne++%_.posts.length];l.push(q(Y(.08,.09,.5,_.board,8),e,.25,t),q(X(.14,n,9,6),e,.56,t))};for(let e=-o;e<=o+.01;e+=3.4)for(let t of[-s-.22,s+.22])A(e,t);for(let e of[-1,1])for(let t of[-s,-c-.2,c+.2,s])A(e*(o+.45),t);for(let e of[-1,1]){let t=e<0?_.azure:_.ember,r=e*(o+.22),i=e*(o+1.9);for(let e of[-c,c])l.push(q(Y(.12,.12,2.42,`#ffffff`,10),r,1.21,e)),l.push(Z(v(r,2.36,e),v(i,.06,e),.07,`#f4f4f0`)),l.push(Z(v(r,.06,e),v(i,.06,e),.06,`#f4f4f0`));l.push(Z(v(r,2.36,-c-.1),v(r,2.36,c+.1),.11,`#ffffff`,10)),l.push(Z(v(i,.06,-c),v(i,.06,c),.06,`#f4f4f0`)),u.push(q(J(1.66,.02,W.goalWidth-.1,t),(r+i)/2,.012,0));let a=[];for(let e=-c;e<=c+.01;e+=.5)a.push(r,2.36,e,i,.06,e);for(let e=.08;e<1;e+=.12){let t=r+(i-r)*e,n=2.36+-2.3*e;a.push(t,n,-c,t,n,c)}for(let e of[-c,c]){for(let t=.15;t<1;t+=.17){let n=r+(i-r)*t;a.push(n,.06,e,n,2.36+-2.3*t,e)}for(let t=.4;t<2.36;t+=.35)a.push(r,t,e,r+(i-r)*(2.36-t)/2.3,t,e)}let s=new U;s.setAttribute(`position`,new p(a,3));let d=new ce(s,new he({color:t,transparent:!0,opacity:.6}));d.name=e<0?`azure-goal`:`ember-goal`,d.userData={goalPlane:e*o,opening:W.goalWidth},n.add(d);for(let n of[-c-1.2,c+1.2])l.push(q(Y(.05,.05,3.2,`#ffffff`,6),e*(o+1.2),1.6,n)),l.push(q(vn([[0,0],[1.1,-.35],[0,-.7]],.03,t),e*(o+1.2),3.15,n,e<0?0:Math.PI))}for(let e=-27;e<=27;e+=9){l.push(q(J(7.6,.28,1.4,`#d9876a`),e,.14,35)),l.push(q(J(7.2,.1,1,`#8a6a4e`),e,.27,35));for(let t=0;t<9;t++){let n=e-3.2+t*.8,r=35+(t%2?.25:-.25),i=_.rainbow[(t+Math.round(e/9)+3)%6];l.push(q(Y(.025,.025,.45,`#5f9e55`,4),n,.5,r),q(_n(.13,.26,i,6),n,.8,r,0,1,Math.PI))}}l.push(q(J(3.2,1,2,`#ffffff`),0,.5,37.4),q(J(3.4,.08,2.2,`#7fbf8f`),0,1.04,37.4),q(J(1.2,.5,.8,`#7fbf8f`),0,.25,36.1));for(let e of[-17,4]){for(let[t,n]of[[-3.2,-2.2],[3.2,-2.2],[-3.2,2.2],[3.2,2.2]])l.push(q(Y(.06,.06,2.7,`#ffffff`,6),e+t,1.35,42+n));l.push(q(hn(new re(3.9,1.3,4,1).rotateY(Math.PI/4),[`#7ec0ea`,`#ffffff`]),e,3.3,42,0,[1.3,1,1]));for(let t=0;t<12;t++)for(let n of[-2.76,2.76])l.push(q(vn([[-.3,0],[.3,0],[0,-.38]],.02,t%2?`#7ec0ea`:`#ffffff`),e-3.3+t*.6,2.66,42+n));for(let t=0;t<9;t++)for(let n of[-3.58,3.58])l.push(q(vn([[-.3,0],[.3,0],[0,-.38]],.02,t%2?`#7ec0ea`:`#ffffff`),e+n,2.66,39.6+t*.6,Math.PI/2));l.push(q(J(5.2,.08,1,`#ffffff`),e,.78,42),q(J(.08,.74,.9,`#d8d0c0`),e-2.4,.37,42),q(J(.08,.74,.9,`#d8d0c0`),e+2.4,.37,42))}l.push(q(Y(.09,.11,9,`#ffffff`,8),26,4.5,39),q(X(.2,`#f7dc72`),26,9.1,39),q(vn([[0,0],[2.6,-.8],[0,-1.6]],.04,`#f9e27a`),26.1,8.7,39),q(Y(.32,.32,.05,`#e2705a`,14),26.9,8.1,39,0,1,Math.PI/2));let ie=[-34,-10,14,38];for(let e of ie)l.push(q(Y(.07,.09,6.2,`#f3ece0`,6),e,3.1,48));for(let e=0;e<ie.length-1;e++){let t=ie[e],n=ie[e+1],r=[];for(let e=0;e<=1.0001;e+=1/26)r.push(v(t+(n-t)*e,6.1-Math.sin(Math.PI*e)*1.6,48));for(let t=0;t<r.length-1;t++)l.push(Z(r[t],r[t+1],.02,`#7a6a5a`,4)),t%1==0&&l.push(q(vn([[-.3,0],[.3,0],[0,-.62]],.02,_.rainbow[(t+e)%6]),r[t].x+.45,r[t].y-.02,48))}for(let e=0;e<9;e++)l.push(q(K(new i(.48,.2,6,14),_.posts[e%4]),-33+e*1.5,.25,-35.5,0,1,0,0));[.9,1.15,1.4].forEach((e,t)=>{let n=-33+t*1.8;for(let r of[-41,-39])l.push(q(Y(.07,.07,e,_.posts[t],6),n,e/2,r));l.push(Z(v(n,e,-41),v(n,e,-39),.035,`#b9c2cc`,6))});for(let e=0;e<=3;e++)for(let t=0;t<=3;t++){let n=[`#ef7f74`,`#f7d36a`,`#8fd18a`,`#7dbbea`];l.push(Z(v(-24+e,0,-44+t),v(-24+e,3,-44+t),.045,`#f2f2f2`,5));for(let r=1;r<=3;r++)e<3&&l.push(Z(v(-24+e,r,-44+t),v(-23+e,r,-44+t),.04,n[r],5)),t<3&&l.push(Z(v(-24+e,r,-44+t),v(-24+e,r,-43+t),.04,n[r],5))}for(let[e,t]of[[-.8,-.8],[.8,-.8],[-.8,.8],[.8,.8]])l.push(q(Y(.08,.08,3.2,`#7dbbea`,6),-8+e,1.6,-44+t));l.push(q(J(1.8,.12,1.8,`#f7d36a`),-8,2.2,-44),q(_n(1.5,1,`#ef7f74`,4),-8,3.7,-44,Math.PI/4)),l.push(q(J(.9,.1,4.6,`#f7d36a`),-8,1.15,-40.2,0,1,-.5),q(J(.08,.3,4.6,`#ef7f74`),-7.55,1.32,-40.2,0,1,-.5),q(J(.08,.3,4.6,`#ef7f74`),-8.45,1.32,-40.2,0,1,-.5));for(let e=0;e<6;e++)l.push(Z(v(-8.6,.35*e+.2,-45.2),v(-7.4,.35*e+.2,-45.2),.04,`#f2f2f2`,5));for(let e of[-46,-42])l.push(Z(v(6,0,e-1.2),v(6,2.8,e),.08,`#ef7f74`),Z(v(6,0,e+1.2),v(6,2.8,e),.08,`#ef7f74`));l.push(Z(v(6,2.8,-46.3),v(6,2.8,-41.7),.08,`#f7d36a`));for(let e of[-45,-43])l.push(Z(v(5.75,2.8,e),v(5.75,.65,e),.015,`#9aa3ad`,4),Z(v(6.25,2.8,e),v(6.25,.65,e),.015,`#9aa3ad`,4),q(J(.75,.08,.4,`#8fd18a`),6,.62,e));l.push(q(J(5,.2,.25,_.wood),20,.1,-41.5),q(J(5,.2,.25,_.wood),20,.1,-45.5),q(J(.25,.2,4.2,_.wood),17.5,.1,-43.5),q(J(.25,.2,4.2,_.wood),22.5,.1,-43.5)),u.push(q(J(4.8,.06,3.8,`#f0dca9`),20,.04,-43.5)),l.push(q(_n(.6,.7,`#e8cf98`,8),19,.4,-43),q(Y(.22,.17,.32,`#e5574d`,10),21.2,.2,-44.2));for(let e=0;e<4;e++)l.push(q(J(2.2,.45,.5,_.wood),-14+e*9,.45,51.5),q(J(.1,.45,.4,`#7c5338`),-14.9+e*9,.22,51.5),q(J(.1,.45,.4,`#7c5338`),-13.1+e*9,.22,51.5));{let e=G.building,t=e.front,n=(t+(e.front+e.depth))/2,r=8.8;d.push(q(J(e.depth,r,e.length,_.wall),n,r/2,e.z),q(J(e.depth+.3,.5,e.length+.3,`#d9c9ae`),n,.25,e.z));let i=(e,t,n,r,i,a,o,s=!1)=>{let c=s?Math.PI/2:0;d.push(q(vn([[-n/2-.7,0],[n/2+.7,0],[0,r]],e,o),a,i,t,c)),d.push(q(vn([[-n/2,0],[n/2,0],[0,r-.4]],e-.6,_.wall),a,i-.02,t,c))};i(e.length+1.2,e.z,e.depth,4.6,r,n,_.roof);for(let n=e.z-e.length/2+2.6;n<=e.z+e.length/2-2.4;n+=3.7)if(!(Math.abs(n-e.z)<5)){for(let[e,r]of[[2.6,g()<.25],[6.6,g()<.2]])if(d.push(q(J(.12,2.5,2.2,`#ffffff`),t-.06,e,n)),(r?f:d).push(q(J(.14,2.1,1.8,r?`#ffe7b0`:_.glass),t-.09,e,n)),d.push(q(J(.18,.1,1.8,`#ffffff`),t-.1,e,n),q(J(.18,2.1,.1,`#ffffff`),t-.1,e,n)),e<3){d.push(q(J(.5,.3,2,_.wood),t-.3,e-1.35,n));for(let r=0;r<4;r++)d.push(q(X(.17,r%2?`#f08a9b`:`#f7d36a`,7,5),t-.32,e-1.1,n-.7+r*.47))}}let a=t-.4,o=7.2,s=17.5;d.push(q(J(o,s,o,_.wall),a+o/2-1,s/2,e.z),q(J(7.6000000000000005,.5,7.6000000000000005,_.trim),a+o/2-1,s,e.z),q(J(7.6000000000000005,.4,7.6000000000000005,_.trim),a+o/2-1,r,e.z)),d.push(q(_n(o*.78,7.5,_.trim,4),a+o/2-1,21.4,e.z,Math.PI/4),q(X(.35,`#f7d36a`),a+o/2-1,25.3,e.z)),d.push(q(Y(.05,.05,2.2,`#5d5a6b`,5),a+o/2-1,26.3,e.z),q(vn([[0,.25],[1.4,0],[0,-.25]],.05,`#5d5a6b`),a+o/2-1,26.9,e.z,Math.PI/2));let c=a-1.05;d.push(q(Y(2.25,2.25,.2,_.navy,32),c,12,e.z,0,1,0,Math.PI/2),q(Y(2,2,.24,`#fffdf6`,32),c-.02,12,e.z,0,1,0,Math.PI/2));for(let t=0;t<12;t++){let n=t*Math.PI/6;d.push(q(J(.1,t%3?.22:.42,.1,_.navy),c-.16,12+Math.cos(n)*1.65,e.z+Math.sin(n)*1.65,0,1,n))}for(let[t,n,r]of[[1.1,-Math.PI/3,.16],[1.55,Math.PI/3,.11]])d.push(q(J(.1,t,r,_.navy),c-.22,12+Math.cos(n)*t/2,e.z+Math.sin(n)*t/2,0,1,n));d.push(q(vn([[-1.1,0],[1.1,0],[1.1,1.8],[0,2.6],[-1.1,1.8]],.2,`#6b5a78`),a-1.02,14.6,e.z,Math.PI/2)),d.push(q(X(.5,`#f2c75c`,10,7),a-1,15.7,e.z)),d.push(q(vn([[-1.4,0],[1.4,0],[1.4,2.6],[0,3.8],[-1.4,2.6]],.25,_.wood),a-1.05,.5,e.z,Math.PI/2)),d.push(q(J(.12,3,.08,`#7c5338`),a-1.2,2.2,e.z),q(X(.09,`#f7d36a`,6,4),a-1.25,2,e.z+.45));for(let t=0;t<3;t++)d.push(q(J(1.2-t*.3,.2,4.2,`#d9c9ae`),a-1.6-t*.3+.45,.1+t*.2,e.z));i(4.4,e.z,3.2,1.6,4.4,a-2.2,_.roof,!0);for(let t of[e.z-3.4,e.z+3.4])d.push(q(Y(.15,.15,3.9,`#ffffff`,8),a-3.3,2.45,t));for(let t of[e.z-5.5,e.z+5.5])d.push(q(X(1.25,`#6fb05d`,10,7),a-2.4,1,t),q(X(.9,`#86c26b`,9,6),a-2.6,1.9,t));for(let t=G.dirt.half+G.dirt.radius+1.5;t<a-2.6;t+=1.7)d.push(q(Y(.62,.66,.1,`#e9e2d4`,12),t,.05,e.z+Math.sin(t*.7)*.35,t));for(let n of[e.z-e.length/2+.4,e.z+e.length/2-.4])d.push(q(J(.3,6,.5,`#9ccf88`),t-.1,3.6,n),q(X(1.1,`#86c26b`,9,6),t-.3,6.6,n))}for(let e of xn()){let t=e.scale,n=y(e.x,e.z),r=.9+e.tint*.2,i=ln(e.x,e.z)>45,o=i?[8,5,7,4]:[10,7,9,6];if(n.push(q(Y(.24,.38,3.2,_.trunk,i?5:7),e.x,e.y+1.4*t,e.z,0,t)),e.kind===`pine`){let o=new a(_.pine).multiplyScalar(r);[[2.7,3.4,2.6],[2.1,3,4.4],[1.4,2.6,6]].forEach(([r,a,s])=>n.push(q(_n(r,a,mn(`#${o.getHexString()}`,`#7fb48a`,-a/2,a/2),i?7:9),e.x,e.y+s*t,e.z,e.tint*6,t)))}else{let i=e.kind===`blossom`?_.blossom:e.kind===`autumn`?_.autumn:_.leaves[Math.floor(e.tint*3)%3],s=new a(i).lerp(new a(`#fffbe8`),.32),c=mn(`#${new a(i).multiplyScalar(r*.9).getHexString()}`,`#${s.getHexString()}`,-1.6,1.8);n.push(q(X(2.3,c,o[0],o[1]),e.x,e.y+4.6*t,e.z,0,t)),n.push(q(X(1.6,c,o[2],o[3]),e.x+1.2*t,e.y+4*t,e.z+.6*t,0,t),q(X(1.5,c,o[2],o[3]),e.x-1.1*t,e.y+4.2*t,e.z-.5*t,0,t))}}let j=rn(11);for(let e=0;e<46;e++){let t=j()*Math.PI*2,n=G.dirt.radius+3+j()*30,r=Math.cos(t)*(n+G.dirt.half*Math.abs(Math.cos(t))),i=Math.sin(t)*n,a=[`#ffffff`,`#fff1a0`,`#f8c0d0`,`#d6c6f4`][e%4];for(let e=0;e<12;e++){let e=r+(j()-.5)*3.2,t=i+(j()-.5)*3.2;ln(e,t)<1||dn(e,t)<.5||y(e,t).push(q(X(.11,a,6,4),e,fn(e,t)+.07,t,0,[1,.45,1]),q(X(.04,`#f2c94c`,4,3),e,fn(e,t)+.12,t))}}let M=(e,t,n,r,i)=>{let a=fn(e,t);i.push(q(Y(.42,.55,2.2,_.stem,10),e,a+1.1*n,t,0,n));let o=K(new h(1.5,14,7,0,Math.PI*2,0,Math.PI/2),mn(r,r,0,1));i.push(q(o,e,a+2*n,t,0,[n,n*.72,n]),q(K(new De(1.5,14),`#f1dfc2`),e,a+2*n+.01,t,0,n,Math.PI/2));for(let r=0;r<7;r++){let o=r*2.4,s=.55+r%3*.3,c=Math.sqrt(Math.max(0,1.5**2-s*s))*.72;i.push(q(X(.2+r%2*.08,`#fffaf0`,7,5),e+Math.cos(o)*s*n,a+(2+c)*n,t+Math.sin(o)*s*n,0,[n,n*.5,n]))}};for(let[e,t,n]of[[-62,-40,5],[-58,42,4],[52,46,4],[-30,-64,5],[66,-40,3],[-82,-8,4]])for(let r=0;r<n;r++){let n=e+(g()-.5)*9,i=t+(g()-.5)*9;un(n,i)<G.clear+1||ln(n,i)<1||M(n,i,.6+g()*1.8,_.cap[r%3],y(n,i))}{let e=fn(-98,16);d.push(q(Y(2.1,3.2,24,_.trunk,12),-98,e+12,16));for(let t=0;t<6;t++){let n=t*Math.PI/3+.3;d.push(Z(v(-98+Math.cos(n)*1.5,e+2.5,16+Math.sin(n)*1.5),v(-98+Math.cos(n)*4.2,e-.3,16+Math.sin(n)*4.2),.7,_.trunk,7))}for(let[t,n,r]of[[3,15,2],[-3.5,17,-1.5],[1,19,-3.5]])d.push(Z(v(-98,e+n-4,16),v(-98+t*2,e+n,16+r*2),.6,_.trunk,7));for(let[t,n,r,i]of[[0,29,0,9.5],[6,26,5,7],[-7,27,-3,7.5],[3,32,-6,6.5],[-4,33,5,6],[7,30,-6,5.5],[-8,24,6,6]])d.push(q(X(i,mn(`#5d9e55`,`#a6d67d`,-i,i),14,10),-98+t,e+n,16+r));let t=e+13;d.push(Z(v(-96.5,e+10,16.5),v(-90.6,t-.2,17),.6,_.trunk,7),Z(v(-89,t-.2,17),v(-88.7,e+.2,17),.3,_.trunk,6));for(let n of[-.45,.45])d.push(Z(v(-87.1,t,17+n),v(-86.4,e+.05,17+n),.04,`#c9a77a`,4));for(let n=1;n<10;n++){let r=n/10;d.push(Z(v(-87.1+.7*r,t-(t-e)*r,16.55),v(-87.1+.7*r,t-(t-e)*r,17.45),.035,`#a8835a`,4))}d.push(q(J(3.6,.3,3.6,_.wood),-89,t,17),q(J(3,2.6,3,`#fbe9c8`),-89,t+1.45,17),q(vn([[-2,0],[2,0],[0,1.7]],3.6,`#e5574d`),-89,t+2.75,17,Math.PI/2)),d.push(q(Y(.55,.55,.1,`#ffe7b0`,14),-87.48,t+1.6,17,0,1,0,Math.PI/2)),d.push(q(vn([[-.9,0],[.9,0],[.9,1.4],[0,2.2],[-.9,1.4]],.3,`#7c5338`),-95.5,e+.1,16,Math.PI/2+.1));for(let e=0;e<8;e++)f.push(q(X(.16,`#fff1b0`,6,4),-94.5+e*.55,t-.6-Math.sin(e/7*Math.PI)*.7,15.1))}let N=(e,t,n,r)=>{d.push(q(_n(9,15,mn(`#a1849a`,`#dcbcc4`,-7.5,7.5),8),e,t-7.6*r,n,.4,r,Math.PI)),d.push(q(Y(9.4,9.1,1.4,mn(`#7fb35f`,`#a6d67d`,-.7,.7),12),e,t,n,0,r));for(let[i,a,o]of[[-3,2,2.4],[3.5,-2,1.9],[0,-4.5,1.6]])d.push(q(Y(.25,.35,2.4,_.trunk,6),e+i*r,t+1.6*r,n+a*r,0,r),q(X(o,mn(`#5d9e55`,`#a6d67d`,-o,o),9,6),e+i*r,t+(2.9+o*.6)*r,n+a*r,0,r));d.push(q(J(.3,22,2.4,mn(`#e8f6ff`,`#a9daf0`,-11,11)),e+9.1*r,t-11*r,n,0,r))};N(-150,66,118,1),N(165,82,-150,.85),N(-40,104,-235,.7),N(120,58,185,.65),d.push(q(gn(new h(6,16,10),[`#f7d36a`,`#ef7f74`,`#7dbbea`,`#ffffff`],16),46,46,118,0,[1,1.18,1])),d.push(q(J(1.8,1.3,1.8,_.wood),46,35.8,118));for(let[e,t]of[[-.8,-.8],[.8,-.8],[-.8,.8],[.8,.8]])d.push(Z(v(46+e,36.4,118+t),v(46+e*3.4,41.4,118+t*3.4),.04,`#6b5a4a`,4));let ae=[{r:G.rings[0].radius,h:e=>22+12*sn(e,2.2,1)+2.2*Math.abs(Math.sin(e*47)),low:`#5f9f55`,high:`#9fd27a`,snow:999},{r:G.rings[1].radius,h:e=>52+42*sn(e,1.6,5)+26*Math.max(0,Math.sin(e*5+1))**3,low:`#4f8f9c`,high:`#8cc3c0`,snow:999},{r:G.rings[2].radius,h:e=>95+60*sn(e,1.3,9)+90*Math.max(0,Math.sin(e*4+2.2))**6+45*Math.max(0,Math.sin(e*9+.7))**8,low:`#6c7cc4`,high:`#a3afe8`,snow:162}];for(let e of ae){let t=[0,.45,.75,.9,.975,1],n=[],r=[],i=[],o=new a(e.low),s=new a(e.high);for(let i=0;i<=360;i++){let c=i/360*Math.PI*2,l=e.h(c),u=Math.cos(c),d=Math.sin(c);for(let i of t){let t=-6+(l+6)*i,c=o.clone().lerp(s,Math.min(1,i*i/.95));i===1&&c.lerp(new a(`#ffffff`),.22),t>e.snow&&c.lerp(new a(`#fbfdff`),cn(e.snow,e.snow+8,t)),n.push(u*e.r,t,d*e.r),r.push(c.r,c.g,c.b)}}for(let e=0;e<360;e++)for(let n=0;n<t.length-1;n++){let r=e*t.length+n,a=r+t.length;i.push(r,a,r+1,a,a+1,r+1)}let c=new U;c.setAttribute(`position`,new p(n,3)),c.setAttribute(`color`,new p(r,3)),c.setIndex(i),c.computeVertexNormals(),m.push(c)}{let e=R.degToRad(-112),t=G.rings[1].radius-6,n=ae[1].h(e+Math.PI*2)-4,r=Math.cos(e)*t,i=Math.sin(e)*t,a=1.7,o=`#f6cbd6`;m.push(q(K(new pe(16*a,8*a,5*a),o),r,n+4*a,i,-e+Math.PI/2));for(let[t,s,c]of[[-9,16,3.2],[9,15,3.2],[-3,21,3.8],[3.5,12,2.6],[0,26,2.4]]){let l=r-Math.sin(e)*t*a,u=i+Math.cos(e)*t*a;m.push(q(K(new _e(c*a,c*a,s*a,10),o),l,n+s*a/2,u),q(K(new re(c*1.3*a,c*2.2*a,10),`#8094dc`),l,n+(s+c*1.1)*a,u))}}let oe=new L({name:`School scenery`,vertexColors:!0,roughness:.92,metalness:0}),P=new L({name:`School warm lights`,vertexColors:!0,roughness:.6,metalness:0,emissive:`#ffcf7a`,emissiveIntensity:.55}),F=new z({name:`School paper mountains`,vertexColors:!0,fog:!0}),I=(e,t,r,i)=>{if(!e.length)return;let a=de(e,!1);if(e.forEach(e=>e.dispose()),!a)throw Error(`${r} の形をまとめられない`);a.computeBoundingSphere();let o=new B(a,t);o.name=r,o.castShadow=i,o.receiveShadow=!0,n.add(o)};return I(l,oe,`school-near`,!0),I(u,oe,`school-lines`,!1),I(d,oe,`school-far`,!1),I(f,P,`school-lights`,!1),I(m,F,`school-paper-mountains`,!1),Promise.resolve()}function Cn(){if(typeof document>`u`)return null;let e=document.createElement(`canvas`);e.width=e.height=256;let t=e.getContext(`2d`);t.fillStyle=`#ffffff`,t.fillRect(0,0,256,256);let n=rn(42);for(let e=0;e<26;e++)t.fillStyle=`rgba(150,130,110,${.035+n()*.03})`,t.beginPath(),t.arc(n()*256,n()*256,14+n()*30,0,Math.PI*2),t.fill();for(let e=0;e<1500;e++){let e=185+Math.floor(n()*55);t.fillStyle=`rgb(${e},${e-6},${e-14})`,t.beginPath(),t.arc(n()*256,n()*256,.6+n()*1.5,0,Math.PI*2),t.fill()}for(let e=0;e<40;e++){let e=n()*256,r=n()*256,i=1.6+n()*2.2;t.fillStyle=`rgb(205,195,182)`,t.beginPath(),t.arc(e,r,i,0,Math.PI*2),t.fill(),t.fillStyle=`rgb(246,242,234)`,t.beginPath(),t.arc(e-i*.3,r-i*.3,i*.5,0,Math.PI*2),t.fill()}let r=new le(e);return r.colorSpace=o,r.wrapS=r.wrapT=ue,r.anisotropy=8,r.name=`School ground speckles`,r}var wn={royal:{hemisphere:{sky:`#88a8de`,ground:`#323043`,intensity:.65},sun:{color:`#99b9ef`,intensity:1.75},fill:{color:`#e9a775`,intensity:.32},fog:{color:`#48658a`,density:.0034},environment:.22,background:`#203d61`,exposure:.92},colosseum:{hemisphere:{sky:`#c5d4ec`,ground:`#645342`,intensity:.85},sun:{color:`#ffe1b3`,intensity:2.4},fill:{color:`#e9a775`,intensity:.32},fog:{color:`#48658a`,density:.0034},environment:.3,background:`#203d61`,exposure:.92},school:{hemisphere:{sky:`#dcefff`,ground:`#9cc77f`,intensity:1.05},sun:{color:`#fff1d8`,intensity:2.2},fill:{color:`#ffd6b0`,intensity:.35},fog:{color:`#e4f0f2`,density:.0012},environment:.25,background:`#bfe3f7`,exposure:.95}};function Tn(e,t,n,r){let i=(e,t)=>e.role===t.role&&e.team===t.team&&(e.look??``)===(r.look?.(t)??``);for(let a of t){let t=e.get(a.id);t&&!i(t,a)&&r.ready(a)&&(e.delete(a.id),n.push(t),r.park(t))}for(let a of t){if(e.has(a.id)||!r.ready(a))continue;let t=n.findIndex(e=>i(e,a));if(t<0){e.set(a.id,r.create(a));continue}let[o]=n.splice(t,1);r.unpark(o),e.set(a.id,o)}}var En=class extends ve{constructor(){super(),this.name=`RoomEnvironment`,this.position.y=-3.5;let t=new pe;t.deleteAttribute(`uv`);let n=new L({side:1}),r=new L,i=new ge(16777215,900,28,2);i.position.set(.418,16.199,.3),this.add(i);let a=new B(t,n);a.position.set(-.757,13.219,.717),a.scale.set(31.713,28.305,28.591),this.add(a);let o=new e(t,r,6),s=new A;s.position.set(-10.906,2.009,1.846),s.rotation.set(0,-.195,0),s.scale.set(2.328,7.905,4.651),s.updateMatrix(),o.setMatrixAt(0,s.matrix),s.position.set(-5.607,-.754,-.758),s.rotation.set(0,.994,0),s.scale.set(1.97,1.534,3.955),s.updateMatrix(),o.setMatrixAt(1,s.matrix),s.position.set(6.167,.857,7.803),s.rotation.set(0,.561,0),s.scale.set(3.927,6.285,3.687),s.updateMatrix(),o.setMatrixAt(2,s.matrix),s.position.set(-2.017,.018,6.124),s.rotation.set(0,.333,0),s.scale.set(2.002,4.566,2.064),s.updateMatrix(),o.setMatrixAt(3,s.matrix),s.position.set(2.291,-.756,-2.621),s.rotation.set(0,-.286,0),s.scale.set(1.546,1.552,1.496),s.updateMatrix(),o.setMatrixAt(4,s.matrix),s.position.set(-2.193,-.369,-5.547),s.rotation.set(0,.516,0),s.scale.set(3.875,3.487,2.986),s.updateMatrix(),o.setMatrixAt(5,s.matrix),this.add(o);let c=new B(t,Dn(50));c.position.set(-16.116,14.37,8.208),c.scale.set(.1,2.428,2.739),this.add(c);let l=new B(t,Dn(50));l.position.set(-16.109,18.021,-8.207),l.scale.set(.1,2.425,2.751),this.add(l);let u=new B(t,Dn(17));u.position.set(14.904,12.198,-1.832),u.scale.set(.15,4.265,6.331),this.add(u);let d=new B(t,Dn(43));d.position.set(-.462,8.89,14.52),d.scale.set(4.38,5.441,.088),this.add(d);let f=new B(t,Dn(20));f.position.set(3.235,11.486,-12.541),f.scale.set(2.5,2,.1),this.add(f);let p=new B(t,Dn(100));p.position.set(0,20,0),p.scale.set(1,.1,1),this.add(p)}dispose(){let e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(let t of e)t.dispose()}};function Dn(e){return new Te({color:0,emissive:16777215,emissiveIntensity:e})}var On={name:`CopyShader`,uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`},kn=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error(`THREE.Pass: .render() must be implemented in derived pass.`)}dispose(){}},An=new s(-1,1,1,-1,0,1),jn=new class extends U{constructor(){super(),this.setAttribute(`position`,new p([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute(`uv`,new p([0,2,0,0,2,0],2))}},Mn=class{constructor(e){this._mesh=new B(jn,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,An)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}},Nn=class extends kn{constructor(e,t=`tDiffuse`){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof n?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=j.clone(e.uniforms),this.material=new n({name:e.name===void 0?`unspecified`:e.name,defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new Mn(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}},Pn=class extends kn{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){let r=e.getContext(),i=e.state;i.buffers.color.setMask(!1),i.buffers.depth.setMask(!1),i.buffers.color.setLocked(!0),i.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),i.buffers.stencil.setTest(!0),i.buffers.stencil.setOp(r.REPLACE,r.REPLACE,r.REPLACE),i.buffers.stencil.setFunc(r.ALWAYS,a,4294967295),i.buffers.stencil.setClear(o),i.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),i.buffers.color.setLocked(!1),i.buffers.depth.setLocked(!1),i.buffers.color.setMask(!0),i.buffers.depth.setMask(!0),i.buffers.stencil.setLocked(!1),i.buffers.stencil.setFunc(r.EQUAL,1,4294967295),i.buffers.stencil.setOp(r.KEEP,r.KEEP,r.KEEP),i.buffers.stencil.setLocked(!0)}},Fn=class extends kn{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}},In=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let n=e.getSize(new D);this._width=n.width,this._height=n.height,t=new xe(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:g}),t.texture.name=`EffectComposer.rt1`}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name=`EffectComposer.rt2`,this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Nn(On),this.copyPass.material.blending=0,this.timer=new ke}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){this.timer.update(),e===void 0&&(e=this.timer.getDelta());let t=this.renderer.getRenderTarget(),n=!1;for(let t=0,r=this.passes.length;t<r;t++){let r=this.passes[t];if(r.enabled!==!1){if(r.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(t),r.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),r.needsSwap){if(n){let t=this.renderer.getContext(),n=this.renderer.state.buffers.stencil;n.setFunc(t.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),n.setFunc(t.EQUAL,1,4294967295)}this.swapBuffers()}Pn!==void 0&&(r instanceof Pn?n=!0:r instanceof Fn&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new D);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let n=this._width*this._pixelRatio,r=this._height*this._pixelRatio;this.renderTarget1.setSize(n,r),this.renderTarget2.setSize(n,r);for(let e=0;e<this.passes.length;e++)this.passes[e].setSize(n,r)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}},Ln=class extends kn{constructor(e,t,n=null,r=null,i=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=r,this.clearAlpha=i,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new a}render(e,t,n){let r=e.autoClear;e.autoClear=!1;let i,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(i=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==1&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(i),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),e.autoClear=r}},Rn={name:`GTAOShader`,defines:{PERSPECTIVE_CAMERA:1,SAMPLES:16,NORMAL_VECTOR_TYPE:1,DEPTH_SWIZZLING:`x`,SCREEN_SPACE_RADIUS:0,SCREEN_SPACE_RADIUS_SCALE:100,SCENE_CLIP_BOX:0},uniforms:{tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new D},cameraNear:{value:null},cameraFar:{value:null},cameraProjectionMatrix:{value:new V},cameraProjectionMatrixInverse:{value:new V},cameraWorldMatrix:{value:new V},radius:{value:.25},distanceExponent:{value:1},thickness:{value:1},distanceFallOff:{value:1},scale:{value:1},sceneBoxMin:{value:new t(-1,-1,-1)},sceneBoxMax:{value:new t(1,1,1)}},vertexShader:`

		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`
		varying vec2 vUv;
		uniform highp sampler2D tNormal;
		uniform highp sampler2D tDepth;
		uniform sampler2D tNoise;
		uniform vec2 resolution;
		uniform float cameraNear;
		uniform float cameraFar;
		uniform mat4 cameraProjectionMatrix;
		uniform mat4 cameraProjectionMatrixInverse;
		uniform mat4 cameraWorldMatrix;
		uniform float radius;
		uniform float distanceExponent;
		uniform float thickness;
		uniform float distanceFallOff;
		uniform float scale;
		#if SCENE_CLIP_BOX == 1
			uniform vec3 sceneBoxMin;
			uniform vec3 sceneBoxMax;
		#endif

		#include <common>
		#include <packing>

		#ifndef FRAGMENT_OUTPUT
		#define FRAGMENT_OUTPUT vec4(vec3(ao), 1.)
		#endif

		vec3 getViewPosition( const in vec2 screenPosition, const in float depth ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				vec4 clipSpacePosition = vec4( vec2( screenPosition ) * 2.0 - 1.0, depth, 1.0 );
			#else
				vec4 clipSpacePosition = vec4( vec3( screenPosition, depth ) * 2.0 - 1.0, 1.0 );
			#endif
			vec4 viewSpacePosition = cameraProjectionMatrixInverse * clipSpacePosition;
			return viewSpacePosition.xyz / viewSpacePosition.w;
		}

		float getDepth(const vec2 uv) {
			return textureLod(tDepth, uv.xy, 0.0).DEPTH_SWIZZLING;
		}

		float fetchDepth(const ivec2 uv) {
			return texelFetch(tDepth, uv.xy, 0).DEPTH_SWIZZLING;
		}

		float getViewZ(const in float depth) {
			#if PERSPECTIVE_CAMERA == 1
				return perspectiveDepthToViewZ(depth, cameraNear, cameraFar);
			#else
				return orthographicDepthToViewZ(depth, cameraNear, cameraFar);
			#endif
		}

		vec3 computeNormalFromDepth(const vec2 uv) {
			vec2 size = vec2(textureSize(tDepth, 0));
			ivec2 p = ivec2(uv * size);
			float c0 = fetchDepth(p);
			float l2 = fetchDepth(p - ivec2(2, 0));
			float l1 = fetchDepth(p - ivec2(1, 0));
			float r1 = fetchDepth(p + ivec2(1, 0));
			float r2 = fetchDepth(p + ivec2(2, 0));
			float b2 = fetchDepth(p - ivec2(0, 2));
			float b1 = fetchDepth(p - ivec2(0, 1));
			float t1 = fetchDepth(p + ivec2(0, 1));
			float t2 = fetchDepth(p + ivec2(0, 2));
			float dl = abs((2.0 * l1 - l2) - c0);
			float dr = abs((2.0 * r1 - r2) - c0);
			float db = abs((2.0 * b1 - b2) - c0);
			float dt = abs((2.0 * t1 - t2) - c0);
			vec3 ce = getViewPosition(uv, c0).xyz;
			vec3 dpdx = (dl < dr) ? ce - getViewPosition((uv - vec2(1.0 / size.x, 0.0)), l1).xyz : -ce + getViewPosition((uv + vec2(1.0 / size.x, 0.0)), r1).xyz;
			vec3 dpdy = (db < dt) ? ce - getViewPosition((uv - vec2(0.0, 1.0 / size.y)), b1).xyz : -ce + getViewPosition((uv + vec2(0.0, 1.0 / size.y)), t1).xyz;
			return normalize(cross(dpdx, dpdy));
		}

		vec3 getViewNormal(const vec2 uv) {
			#if NORMAL_VECTOR_TYPE == 2
				return normalize(textureLod(tNormal, uv, 0.).rgb);
			#elif NORMAL_VECTOR_TYPE == 1
				return unpackRGBToNormal(textureLod(tNormal, uv, 0.).rgb);
			#else
				return computeNormalFromDepth(uv);
			#endif
		}

		vec3 getSceneUvAndDepth(vec3 sampleViewPos) {
			vec4 sampleClipPos = cameraProjectionMatrix * vec4(sampleViewPos, 1.);
			vec2 sampleUv = sampleClipPos.xy / sampleClipPos.w * 0.5 + 0.5;
			float sampleSceneDepth = getDepth(sampleUv);
			return vec3(sampleUv, sampleSceneDepth);
		}

		void main() {
			float depth = getDepth(vUv.xy);

			#ifdef USE_REVERSED_DEPTH_BUFFER
				if (depth <= 0.0) {
					discard;
					return;
				}
			#else
				if (depth >= 1.0) {
					discard;
					return;
				}
			#endif
			
			vec3 viewPos = getViewPosition(vUv, depth);
			vec3 viewNormal = getViewNormal(vUv);

			float radiusToUse = radius;
			float distanceFalloffToUse = thickness;
			#if SCREEN_SPACE_RADIUS == 1
				float radiusScale = getViewPosition(vec2(0.5 + float(SCREEN_SPACE_RADIUS_SCALE) / resolution.x, 0.0), depth).x;
				radiusToUse *= radiusScale;
				distanceFalloffToUse *= radiusScale;
			#endif

			#if SCENE_CLIP_BOX == 1
				vec3 worldPos = (cameraWorldMatrix * vec4(viewPos, 1.0)).xyz;
				float boxDistance = length(max(vec3(0.0), max(sceneBoxMin - worldPos, worldPos - sceneBoxMax)));
				if (boxDistance > radiusToUse) {
					discard;
					return;
				}
			#endif

			vec2 noiseResolution = vec2(textureSize(tNoise, 0));
			vec2 noiseUv = vUv * resolution / noiseResolution;
			vec4 noiseTexel = textureLod(tNoise, noiseUv, 0.0);
			vec3 randomVec = noiseTexel.xyz * 2.0 - 1.0;
			vec3 tangent = normalize(vec3(randomVec.xy, 0.));
			vec3 bitangent = vec3(-tangent.y, tangent.x, 0.);
			mat3 kernelMatrix = mat3(tangent, bitangent, vec3(0., 0., 1.));

			const int DIRECTIONS = SAMPLES < 30 ? 3 : 5;
			const int STEPS = (SAMPLES + DIRECTIONS - 1) / DIRECTIONS;
			float ao = 0.0;
			for (int i = 0; i < DIRECTIONS; ++i) {

				float angle = float(i) / float(DIRECTIONS) * PI;
				vec4 sampleDir = vec4(cos(angle), sin(angle), 0., 0.5 + 0.5 * noiseTexel.w);
				sampleDir.xyz = normalize(kernelMatrix * sampleDir.xyz);

				vec3 viewDir = normalize(-viewPos.xyz);
				vec3 sliceBitangent = normalize(cross(sampleDir.xyz, viewDir));
				vec3 sliceTangent = cross(sliceBitangent, viewDir);
				vec3 normalInSlice = normalize(viewNormal - sliceBitangent * dot(viewNormal, sliceBitangent));

				vec3 tangentToNormalInSlice = cross(normalInSlice, sliceBitangent);
				vec2 cosHorizons = vec2(dot(viewDir, tangentToNormalInSlice), dot(viewDir, -tangentToNormalInSlice));

				for (int j = 0; j < STEPS; ++j) {
					vec3 sampleViewOffset = sampleDir.xyz * radiusToUse * sampleDir.w * pow(float(j + 1) / float(STEPS), distanceExponent);

					vec3 sampleSceneUvDepth = getSceneUvAndDepth(viewPos + sampleViewOffset);
					vec3 sampleSceneViewPos = getViewPosition(sampleSceneUvDepth.xy, sampleSceneUvDepth.z);
					vec3 viewDelta = sampleSceneViewPos - viewPos;
					if (abs(viewDelta.z) < thickness) {
						float sampleCosHorizon = dot(viewDir, normalize(viewDelta));
						cosHorizons.x += max(0., (sampleCosHorizon - cosHorizons.x) * mix(1., 2. / float(j + 2), distanceFallOff));
					}

					sampleSceneUvDepth = getSceneUvAndDepth(viewPos - sampleViewOffset);
					sampleSceneViewPos = getViewPosition(sampleSceneUvDepth.xy, sampleSceneUvDepth.z);
					viewDelta = sampleSceneViewPos - viewPos;
					if (abs(viewDelta.z) < thickness) {
						float sampleCosHorizon = dot(viewDir, normalize(viewDelta));
						cosHorizons.y += max(0., (sampleCosHorizon - cosHorizons.y) * mix(1., 2. / float(j + 2), distanceFallOff));
					}
				}

				vec2 sinHorizons = sqrt(1. - cosHorizons * cosHorizons);
				float nx = dot(normalInSlice, sliceTangent);
				float ny = dot(normalInSlice, viewDir);
				float nxb = 1. / 2. * (acos(cosHorizons.y) - acos(cosHorizons.x) + sinHorizons.x * cosHorizons.x - sinHorizons.y * cosHorizons.y);
				float nyb = 1. / 2. * (2. - cosHorizons.x * cosHorizons.x - cosHorizons.y * cosHorizons.y);
				float occlusion = nx * nxb + ny * nyb;
				ao += occlusion;
			}

			ao = clamp(ao / float(DIRECTIONS), 0., 1.);
		#if SCENE_CLIP_BOX == 1
			ao = mix(ao, 1., smoothstep(0., radiusToUse, boxDistance));
		#endif
			ao = pow(ao, scale);

			gl_FragColor = FRAGMENT_OUTPUT;
		}`},zn={name:`GTAODepthShader`,defines:{PERSPECTIVE_CAMERA:1},uniforms:{tDepth:{value:null},cameraNear:{value:null},cameraFar:{value:null}},vertexShader:`
		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`
		uniform sampler2D tDepth;
		uniform float cameraNear;
		uniform float cameraFar;
		varying vec2 vUv;

		#include <packing>

		float getLinearDepth( const in vec2 screenPosition ) {
			#if PERSPECTIVE_CAMERA == 1
				float fragCoordZ = texture2D( tDepth, screenPosition ).x;
				float viewZ = perspectiveDepthToViewZ( fragCoordZ, cameraNear, cameraFar );
				return viewZToOrthographicDepth( viewZ, cameraNear, cameraFar );
			#else
				return texture2D( tDepth, screenPosition ).x;
			#endif
		}

		void main() {
			float depth = getLinearDepth( vUv );
			gl_FragColor = vec4( vec3( 1.0 - depth ), 1.0 );

		}`},Bn={name:`GTAOBlendShader`,uniforms:{tDiffuse:{value:null},intensity:{value:1}},vertexShader:`
		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`
		uniform float intensity;
		uniform sampler2D tDiffuse;
		varying vec2 vUv;

		void main() {
			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = vec4(mix(vec3(1.), texel.rgb, intensity), texel.a);
		}`};function Vn(e=5){let n=Math.floor(e)%2==0?Math.floor(e)+1:Math.floor(e),r=Hn(n),i=r.length,a=new Uint8Array(i*4);for(let e=0;e<i;++e){let n=r[e],o=2*Math.PI*n/i,s=new t(Math.cos(o),Math.sin(o),0).normalize();a[e*4]=(s.x*.5+.5)*255,a[e*4+1]=(s.y*.5+.5)*255,a[e*4+2]=127,a[e*4+3]=255}let o=new b(a,n,n);return o.wrapS=ue,o.wrapT=ue,o.needsUpdate=!0,o}function Hn(e){let t=Math.floor(e)%2==0?Math.floor(e)+1:Math.floor(e),n=t*t,r=Array(n).fill(0),i=Math.floor(t/2),a=t-1;for(let e=1;e<=n;){if(i===-1&&a===t?(a=t-2,i=0):(a===t&&(a=0),i<0&&(i=t-1)),r[i*t+a]!==0){a-=2,i++;continue}r[i*t+a]=e++,a++,i--}return r}var Un={name:`PoissonDenoiseShader`,defines:{SAMPLES:16,SAMPLE_VECTORS:Wn(16,2,1),NORMAL_VECTOR_TYPE:1,DEPTH_VALUE_SOURCE:0},uniforms:{tDiffuse:{value:null},tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new D},cameraProjectionMatrixInverse:{value:new V},lumaPhi:{value:5},depthPhi:{value:5},normalPhi:{value:5},radius:{value:4},index:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`

		varying vec2 vUv;

		uniform sampler2D tDiffuse;
		uniform sampler2D tNormal;
		uniform sampler2D tDepth;
		uniform sampler2D tNoise;
		uniform vec2 resolution;
		uniform mat4 cameraProjectionMatrixInverse;
		uniform float lumaPhi;
		uniform float depthPhi;
		uniform float normalPhi;
		uniform float radius;
		uniform int index;

		#include <common>
		#include <packing>

		#ifndef SAMPLE_LUMINANCE
		#define SAMPLE_LUMINANCE dot(vec3(0.2125, 0.7154, 0.0721), a)
		#endif

		#ifndef FRAGMENT_OUTPUT
		#define FRAGMENT_OUTPUT vec4(denoised, 1.)
		#endif

		float getLuminance(const in vec3 a) {
			return SAMPLE_LUMINANCE;
		}

		const vec3 poissonDisk[SAMPLES] = SAMPLE_VECTORS;

		vec3 getViewPosition( const in vec2 screenPosition, const in float depth ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				vec4 clipSpacePosition = vec4( vec2( screenPosition ) * 2.0 - 1.0, depth, 1.0 );
			#else
				vec4 clipSpacePosition = vec4( vec3( screenPosition, depth ) * 2.0 - 1.0, 1.0 );
			#endif
			vec4 viewSpacePosition = cameraProjectionMatrixInverse * clipSpacePosition;
			return viewSpacePosition.xyz / viewSpacePosition.w;
		}

		float getDepth(const vec2 uv) {
		#if DEPTH_VALUE_SOURCE == 1
			return textureLod(tDepth, uv.xy, 0.0).a;
		#else
			return textureLod(tDepth, uv.xy, 0.0).r;
		#endif
		}

		float fetchDepth(const ivec2 uv) {
			#if DEPTH_VALUE_SOURCE == 1
				return texelFetch(tDepth, uv.xy, 0).a;
			#else
				return texelFetch(tDepth, uv.xy, 0).r;
			#endif
		}

		vec3 computeNormalFromDepth(const vec2 uv) {
			vec2 size = vec2(textureSize(tDepth, 0));
			ivec2 p = ivec2(uv * size);
			float c0 = fetchDepth(p);
			float l2 = fetchDepth(p - ivec2(2, 0));
			float l1 = fetchDepth(p - ivec2(1, 0));
			float r1 = fetchDepth(p + ivec2(1, 0));
			float r2 = fetchDepth(p + ivec2(2, 0));
			float b2 = fetchDepth(p - ivec2(0, 2));
			float b1 = fetchDepth(p - ivec2(0, 1));
			float t1 = fetchDepth(p + ivec2(0, 1));
			float t2 = fetchDepth(p + ivec2(0, 2));
			float dl = abs((2.0 * l1 - l2) - c0);
			float dr = abs((2.0 * r1 - r2) - c0);
			float db = abs((2.0 * b1 - b2) - c0);
			float dt = abs((2.0 * t1 - t2) - c0);
			vec3 ce = getViewPosition(uv, c0).xyz;
			vec3 dpdx = (dl < dr) ?  ce - getViewPosition((uv - vec2(1.0 / size.x, 0.0)), l1).xyz
									: -ce + getViewPosition((uv + vec2(1.0 / size.x, 0.0)), r1).xyz;
			vec3 dpdy = (db < dt) ?  ce - getViewPosition((uv - vec2(0.0, 1.0 / size.y)), b1).xyz
									: -ce + getViewPosition((uv + vec2(0.0, 1.0 / size.y)), t1).xyz;
			return normalize(cross(dpdx, dpdy));
		}

		vec3 getViewNormal(const vec2 uv) {
		#if NORMAL_VECTOR_TYPE == 2
			return normalize(textureLod(tNormal, uv, 0.).rgb);
		#elif NORMAL_VECTOR_TYPE == 1
			return unpackRGBToNormal(textureLod(tNormal, uv, 0.).rgb);
		#else
			return computeNormalFromDepth(uv);
		#endif
		}

		void denoiseSample(in vec3 center, in vec3 viewNormal, in vec3 viewPos, in vec2 sampleUv, inout vec3 denoised, inout float totalWeight) {
			vec4 sampleTexel = textureLod(tDiffuse, sampleUv, 0.0);
			float sampleDepth = getDepth(sampleUv);
			vec3 sampleNormal = getViewNormal(sampleUv);
			vec3 neighborColor = sampleTexel.rgb;
			vec3 viewPosSample = getViewPosition(sampleUv, sampleDepth);

			float normalDiff = dot(viewNormal, sampleNormal);
			float normalSimilarity = pow(max(normalDiff, 0.), normalPhi);
			float lumaDiff = abs(getLuminance(neighborColor) - getLuminance(center));
			float lumaSimilarity = max(1.0 - lumaDiff / lumaPhi, 0.0);
			float depthDiff = abs(dot(viewPos - viewPosSample, viewNormal));
			float depthSimilarity = max(1. - depthDiff / depthPhi, 0.);
			float w = lumaSimilarity * depthSimilarity * normalSimilarity;

			denoised += w * neighborColor;
			totalWeight += w;
		}

		void main() {
			float depth = getDepth(vUv.xy);
			vec3 viewNormal = getViewNormal(vUv);
			if (depth == 1. || dot(viewNormal, viewNormal) == 0.) {
				discard;
				return;
			}
			vec4 texel = textureLod(tDiffuse, vUv, 0.0);
			vec3 center = texel.rgb;
			vec3 viewPos = getViewPosition(vUv, depth);

			vec2 noiseResolution = vec2(textureSize(tNoise, 0));
			vec2 noiseUv = vUv * resolution / noiseResolution;
			vec4 noiseTexel = textureLod(tNoise, noiseUv, 0.0);
      		vec2 noiseVec = vec2(sin(noiseTexel[index % 4] * 2. * PI), cos(noiseTexel[index % 4] * 2. * PI));
    		mat2 rotationMatrix = mat2(noiseVec.x, -noiseVec.y, noiseVec.x, noiseVec.y);

			float totalWeight = 1.0;
			vec3 denoised = texel.rgb;
			for (int i = 0; i < SAMPLES; i++) {
				vec3 sampleDir = poissonDisk[i];
				vec2 offset = rotationMatrix * (sampleDir.xy * (1. + sampleDir.z * (radius - 1.)) / resolution);
				vec2 sampleUv = vUv + offset;
				denoiseSample(center, viewNormal, viewPos, sampleUv, denoised, totalWeight);
			}

			if (totalWeight > 0.) {
				denoised /= totalWeight;
			}
			gl_FragColor = FRAGMENT_OUTPUT;
		}`};function Wn(e,t,n){let r=Gn(e,t,n),i=`vec3[SAMPLES](`;for(let t=0;t<e;t++){let n=r[t];i+=`vec3(${n.x}, ${n.y}, ${n.z})${t<e-1?`,`:`)`}`}return i}function Gn(e,n,r){let i=[];for(let a=0;a<e;a++){let o=2*Math.PI*n*a/e,s=(a/(e-1))**r;i.push(new t(Math.cos(o),Math.sin(o),s))}return i}var Kn=class{constructor(e=Math){this.grad3=[[1,1,0],[-1,1,0],[1,-1,0],[-1,-1,0],[1,0,1],[-1,0,1],[1,0,-1],[-1,0,-1],[0,1,1],[0,-1,1],[0,1,-1],[0,-1,-1]],this.grad4=[[0,1,1,1],[0,1,1,-1],[0,1,-1,1],[0,1,-1,-1],[0,-1,1,1],[0,-1,1,-1],[0,-1,-1,1],[0,-1,-1,-1],[1,0,1,1],[1,0,1,-1],[1,0,-1,1],[1,0,-1,-1],[-1,0,1,1],[-1,0,1,-1],[-1,0,-1,1],[-1,0,-1,-1],[1,1,0,1],[1,1,0,-1],[1,-1,0,1],[1,-1,0,-1],[-1,1,0,1],[-1,1,0,-1],[-1,-1,0,1],[-1,-1,0,-1],[1,1,1,0],[1,1,-1,0],[1,-1,1,0],[1,-1,-1,0],[-1,1,1,0],[-1,1,-1,0],[-1,-1,1,0],[-1,-1,-1,0]],this.p=[];for(let t=0;t<256;t++)this.p[t]=Math.floor(e.random()*256);this.perm=[];for(let e=0;e<512;e++)this.perm[e]=this.p[e&255];this.simplex=[[0,1,2,3],[0,1,3,2],[0,0,0,0],[0,2,3,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,3,0],[0,2,1,3],[0,0,0,0],[0,3,1,2],[0,3,2,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,3,2,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,0,3],[0,0,0,0],[1,3,0,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,3,0,1],[2,3,1,0],[1,0,2,3],[1,0,3,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,3,1],[0,0,0,0],[2,1,3,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,1,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,0,1,2],[3,0,2,1],[0,0,0,0],[3,1,2,0],[2,1,0,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,1,0,2],[0,0,0,0],[3,2,0,1],[3,2,1,0]]}noise(e,t){let n,r,i,a=.5*(Math.sqrt(3)-1),o=(e+t)*a,s=Math.floor(e+o),c=Math.floor(t+o),l=(3-Math.sqrt(3))/6,u=(s+c)*l,d=s-u,f=c-u,p=e-d,m=t-f,h,g;p>m?(h=1,g=0):(h=0,g=1);let _=p-h+l,v=m-g+l,y=p-1+2*l,b=m-1+2*l,x=s&255,S=c&255,C=this.perm[x+this.perm[S]]%12,w=this.perm[x+h+this.perm[S+g]]%12,T=this.perm[x+1+this.perm[S+1]]%12,E=.5-p*p-m*m;E<0?n=0:(E*=E,n=E*E*this._dot(this.grad3[C],p,m));let D=.5-_*_-v*v;D<0?r=0:(D*=D,r=D*D*this._dot(this.grad3[w],_,v));let O=.5-y*y-b*b;return O<0?i=0:(O*=O,i=O*O*this._dot(this.grad3[T],y,b)),70*(n+r+i)}noise3d(e,t,n){let r,i,a,o,s=(e+t+n)*(1/3),c=Math.floor(e+s),l=Math.floor(t+s),u=Math.floor(n+s),d=1/6,f=(c+l+u)*d,p=c-f,m=l-f,h=u-f,g=e-p,_=t-m,v=n-h,y,b,x,S,C,w;g>=_?_>=v?(y=1,b=0,x=0,S=1,C=1,w=0):g>=v?(y=1,b=0,x=0,S=1,C=0,w=1):(y=0,b=0,x=1,S=1,C=0,w=1):_<v?(y=0,b=0,x=1,S=0,C=1,w=1):g<v?(y=0,b=1,x=0,S=0,C=1,w=1):(y=0,b=1,x=0,S=1,C=1,w=0);let T=g-y+d,E=_-b+d,D=v-x+d,O=g-S+2*d,ee=_-C+2*d,te=v-w+2*d,k=g-1+3*d,ne=_-1+3*d,re=v-1+3*d,A=c&255,ie=l&255,j=u&255,M=this.perm[A+this.perm[ie+this.perm[j]]]%12,N=this.perm[A+y+this.perm[ie+b+this.perm[j+x]]]%12,ae=this.perm[A+S+this.perm[ie+C+this.perm[j+w]]]%12,oe=this.perm[A+1+this.perm[ie+1+this.perm[j+1]]]%12,P=.6-g*g-_*_-v*v;P<0?r=0:(P*=P,r=P*P*this._dot3(this.grad3[M],g,_,v));let F=.6-T*T-E*E-D*D;F<0?i=0:(F*=F,i=F*F*this._dot3(this.grad3[N],T,E,D));let I=.6-O*O-ee*ee-te*te;I<0?a=0:(I*=I,a=I*I*this._dot3(this.grad3[ae],O,ee,te));let se=.6-k*k-ne*ne-re*re;return se<0?o=0:(se*=se,o=se*se*this._dot3(this.grad3[oe],k,ne,re)),32*(r+i+a+o)}noise4d(e,t,n,r){let i=this.grad4,a=this.simplex,o=this.perm,s=(Math.sqrt(5)-1)/4,c=(5-Math.sqrt(5))/20,l,u,d,f,p,m=(e+t+n+r)*s,h=Math.floor(e+m),g=Math.floor(t+m),_=Math.floor(n+m),v=Math.floor(r+m),y=(h+g+_+v)*c,b=h-y,x=g-y,S=_-y,C=v-y,w=e-b,T=t-x,E=n-S,D=r-C,O=w>T?32:0,ee=w>E?16:0,te=T>E?8:0,k=w>D?4:0,ne=T>D?2:0,re=+(E>D),A=O+ee+te+k+ne+re,ie=+(a[A][0]>=3),j=+(a[A][1]>=3),M=+(a[A][2]>=3),N=+(a[A][3]>=3),ae=+(a[A][0]>=2),oe=+(a[A][1]>=2),P=+(a[A][2]>=2),F=+(a[A][3]>=2),I=+(a[A][0]>=1),se=+(a[A][1]>=1),ce=+(a[A][2]>=1),le=+(a[A][3]>=1),ue=w-ie+c,L=T-j+c,de=E-M+c,R=D-N+c,fe=w-ae+2*c,pe=T-oe+2*c,me=E-P+2*c,z=D-F+2*c,he=w-I+3*c,ge=T-se+3*c,_e=E-ce+3*c,ve=D-le+3*c,ye=w-1+4*c,be=T-1+4*c,B=E-1+4*c,xe=D-1+4*c,Se=h&255,V=g&255,H=_&255,Ce=v&255,we=o[Se+o[V+o[H+o[Ce]]]]%32,U=o[Se+ie+o[V+j+o[H+M+o[Ce+N]]]]%32,Te=o[Se+ae+o[V+oe+o[H+P+o[Ce+F]]]]%32,Ee=o[Se+I+o[V+se+o[H+ce+o[Ce+le]]]]%32,De=o[Se+1+o[V+1+o[H+1+o[Ce+1]]]]%32,Oe=.6-w*w-T*T-E*E-D*D;Oe<0?l=0:(Oe*=Oe,l=Oe*Oe*this._dot4(i[we],w,T,E,D));let ke=.6-ue*ue-L*L-de*de-R*R;ke<0?u=0:(ke*=ke,u=ke*ke*this._dot4(i[U],ue,L,de,R));let Ae=.6-fe*fe-pe*pe-me*me-z*z;Ae<0?d=0:(Ae*=Ae,d=Ae*Ae*this._dot4(i[Te],fe,pe,me,z));let je=.6-he*he-ge*ge-_e*_e-ve*ve;je<0?f=0:(je*=je,f=je*je*this._dot4(i[Ee],he,ge,_e,ve));let W=.6-ye*ye-be*be-B*B-xe*xe;return W<0?p=0:(W*=W,p=W*W*this._dot4(i[De],ye,be,B,xe)),27*(l+u+d+f+p)}_dot(e,t,n){return e[0]*t+e[1]*n}_dot3(e,t,n,r){return e[0]*t+e[1]*n+e[2]*r}_dot4(e,t,n,r,i){return e[0]*t+e[1]*n+e[2]*r+e[3]*i}},qn=class e extends kn{constructor(e,t,r=512,i=512,o,s,c){super(),this.width=r,this.height=i,this.clear=!0,this.camera=t,this.scene=e,this.output=0,this._renderGBuffer=!0,this._visibilityCache=[],this.blendIntensity=1,this.pdRings=2,this.pdRadiusExponent=2,this.pdSamples=16,this.gtaoNoiseTexture=Vn(),this.pdNoiseTexture=this._generateNoise(),this.gtaoRenderTarget=new xe(this.width,this.height,{type:g}),this.pdRenderTarget=this.gtaoRenderTarget.clone(),this.gtaoMaterial=new n({defines:Object.assign({},Rn.defines),uniforms:j.clone(Rn.uniforms),vertexShader:Rn.vertexShader,fragmentShader:Rn.fragmentShader,blending:0,depthTest:!1,depthWrite:!1}),this.gtaoMaterial.defines.PERSPECTIVE_CAMERA=+!!this.camera.isPerspectiveCamera,this.gtaoMaterial.uniforms.tNoise.value=this.gtaoNoiseTexture,this.gtaoMaterial.uniforms.resolution.value.set(this.width,this.height),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.normalMaterial=new Oe,this.normalMaterial.blending=0,this.pdMaterial=new n({defines:Object.assign({},Un.defines),uniforms:j.clone(Un.uniforms),vertexShader:Un.vertexShader,fragmentShader:Un.fragmentShader,depthTest:!1,depthWrite:!1}),this.pdMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.pdMaterial.uniforms.tNoise.value=this.pdNoiseTexture,this.pdMaterial.uniforms.resolution.value.set(this.width,this.height),this.pdMaterial.uniforms.lumaPhi.value=10,this.pdMaterial.uniforms.depthPhi.value=2,this.pdMaterial.uniforms.normalPhi.value=3,this.pdMaterial.uniforms.radius.value=8,this.depthRenderMaterial=new n({defines:Object.assign({},zn.defines),uniforms:j.clone(zn.uniforms),vertexShader:zn.vertexShader,fragmentShader:zn.fragmentShader,blending:0}),this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.copyMaterial=new n({uniforms:j.clone(On.uniforms),vertexShader:On.vertexShader,fragmentShader:On.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blendSrc:208,blendDst:200,blendEquation:100,blendSrcAlpha:206,blendDstAlpha:200,blendEquationAlpha:100}),this.blendMaterial=new n({uniforms:j.clone(Bn.uniforms),vertexShader:Bn.vertexShader,fragmentShader:Bn.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blending:5,blendSrc:208,blendDst:200,blendEquation:100,blendSrcAlpha:206,blendDstAlpha:200,blendEquationAlpha:100}),this._fsQuad=new Mn(null),this._originalClearColor=new a,this.setGBuffer(o?o.depthTexture:void 0,o?o.normalTexture:void 0),s!==void 0&&this.updateGtaoMaterial(s),c!==void 0&&this.updatePdMaterial(c)}setSize(e,t){this.width=e,this.height=t,this.gtaoRenderTarget.setSize(e,t),this.normalRenderTarget.setSize(e,t),this.pdRenderTarget.setSize(e,t),this.gtaoMaterial.uniforms.resolution.value.set(e,t),this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.pdMaterial.uniforms.resolution.value.set(e,t),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse)}dispose(){this.gtaoNoiseTexture.dispose(),this.pdNoiseTexture.dispose(),this.normalRenderTarget.dispose(),this.gtaoRenderTarget.dispose(),this.pdRenderTarget.dispose(),this.normalMaterial.dispose(),this.pdMaterial.dispose(),this.copyMaterial.dispose(),this.depthRenderMaterial.dispose(),this._fsQuad.dispose()}get gtaoMap(){return this.pdRenderTarget.texture}setGBuffer(e,t){e===void 0?(this.depthTexture=new u,this.depthTexture.format=w,this.depthTexture.type=v,this.normalRenderTarget=new xe(this.width,this.height,{minFilter:ne,magFilter:ne,type:g,depthTexture:this.depthTexture}),this.normalTexture=this.normalRenderTarget.texture,this._renderGBuffer=!0):(this.depthTexture=e,this.normalTexture=t,this._renderGBuffer=!1);let n=+!!this.normalTexture,r=this.depthTexture===this.normalTexture?`w`:`x`;this.gtaoMaterial.defines.NORMAL_VECTOR_TYPE=n,this.gtaoMaterial.defines.DEPTH_SWIZZLING=r,this.gtaoMaterial.uniforms.tNormal.value=this.normalTexture,this.gtaoMaterial.uniforms.tDepth.value=this.depthTexture,this.pdMaterial.defines.NORMAL_VECTOR_TYPE=n,this.pdMaterial.defines.DEPTH_SWIZZLING=r,this.pdMaterial.uniforms.tNormal.value=this.normalTexture,this.pdMaterial.uniforms.tDepth.value=this.depthTexture,this.depthRenderMaterial.uniforms.tDepth.value=this.normalRenderTarget.depthTexture}setSceneClipBox(e){e?(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX!==1,this.gtaoMaterial.defines.SCENE_CLIP_BOX=1,this.gtaoMaterial.uniforms.sceneBoxMin.value.copy(e.min),this.gtaoMaterial.uniforms.sceneBoxMax.value.copy(e.max)):(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX===0,this.gtaoMaterial.defines.SCENE_CLIP_BOX=0)}updateGtaoMaterial(e){e.radius!==void 0&&(this.gtaoMaterial.uniforms.radius.value=e.radius),e.distanceExponent!==void 0&&(this.gtaoMaterial.uniforms.distanceExponent.value=e.distanceExponent),e.thickness!==void 0&&(this.gtaoMaterial.uniforms.thickness.value=e.thickness),e.distanceFallOff!==void 0&&(this.gtaoMaterial.uniforms.distanceFallOff.value=e.distanceFallOff,this.gtaoMaterial.needsUpdate=!0),e.scale!==void 0&&(this.gtaoMaterial.uniforms.scale.value=e.scale),e.samples!==void 0&&e.samples!==this.gtaoMaterial.defines.SAMPLES&&(this.gtaoMaterial.defines.SAMPLES=e.samples,this.gtaoMaterial.needsUpdate=!0),e.screenSpaceRadius!==void 0&&+!!e.screenSpaceRadius!==this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS&&(this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS=+!!e.screenSpaceRadius,this.gtaoMaterial.needsUpdate=!0)}updatePdMaterial(e){let t=!1;e.lumaPhi!==void 0&&(this.pdMaterial.uniforms.lumaPhi.value=e.lumaPhi),e.depthPhi!==void 0&&(this.pdMaterial.uniforms.depthPhi.value=e.depthPhi),e.normalPhi!==void 0&&(this.pdMaterial.uniforms.normalPhi.value=e.normalPhi),e.radius!==void 0&&e.radius!==this.radius&&(this.pdMaterial.uniforms.radius.value=e.radius),e.radiusExponent!==void 0&&e.radiusExponent!==this.pdRadiusExponent&&(this.pdRadiusExponent=e.radiusExponent,t=!0),e.rings!==void 0&&e.rings!==this.pdRings&&(this.pdRings=e.rings,t=!0),e.samples!==void 0&&e.samples!==this.pdSamples&&(this.pdSamples=e.samples,t=!0),t&&(this.pdMaterial.defines.SAMPLES=this.pdSamples,this.pdMaterial.defines.SAMPLE_VECTORS=Wn(this.pdSamples,this.pdRings,this.pdRadiusExponent),this.pdMaterial.needsUpdate=!0)}render(t,n,r){switch(this._renderGBuffer&&(this._overrideVisibility(),this._renderOverride(t,this.normalMaterial,this.normalRenderTarget,7829503,1),this._restoreVisibility()),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.gtaoMaterial.uniforms.cameraWorldMatrix.value.copy(this.camera.matrixWorld),this._renderPass(t,this.gtaoMaterial,this.gtaoRenderTarget,16777215,1),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this._renderPass(t,this.pdMaterial,this.pdRenderTarget,16777215,1),this.output){case e.OUTPUT.Off:break;case e.OUTPUT.Diffuse:this.copyMaterial.uniforms.tDiffuse.value=r.texture,this.copyMaterial.blending=0,this._renderPass(t,this.copyMaterial,this.renderToScreen?null:n);break;case e.OUTPUT.AO:this.copyMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.copyMaterial.blending=0,this._renderPass(t,this.copyMaterial,this.renderToScreen?null:n);break;case e.OUTPUT.Denoise:this.copyMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this.copyMaterial.blending=0,this._renderPass(t,this.copyMaterial,this.renderToScreen?null:n);break;case e.OUTPUT.Depth:this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this._renderPass(t,this.depthRenderMaterial,this.renderToScreen?null:n);break;case e.OUTPUT.Normal:this.copyMaterial.uniforms.tDiffuse.value=this.normalRenderTarget.texture,this.copyMaterial.blending=0,this._renderPass(t,this.copyMaterial,this.renderToScreen?null:n);break;case e.OUTPUT.Default:this.copyMaterial.uniforms.tDiffuse.value=r.texture,this.copyMaterial.blending=0,this._renderPass(t,this.copyMaterial,this.renderToScreen?null:n),this.blendMaterial.uniforms.intensity.value=this.blendIntensity,this.blendMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this._renderPass(t,this.blendMaterial,this.renderToScreen?null:n);break;default:console.warn(`THREE.GTAOPass: Unknown output type.`)}}_renderPass(e,t,n,r,i){e.getClearColor(this._originalClearColor);let a=e.getClearAlpha(),o=e.autoClear;e.setRenderTarget(n),e.autoClear=!1,r!=null&&(e.setClearColor(r),e.setClearAlpha(i||0),e.clear()),this._fsQuad.material=t,this._fsQuad.render(e),e.autoClear=o,e.setClearColor(this._originalClearColor),e.setClearAlpha(a)}_renderOverride(e,t,n,r,i){e.getClearColor(this._originalClearColor);let a=e.getClearAlpha(),o=e.autoClear;e.setRenderTarget(n),e.autoClear=!1,r=t.clearColor||r,i=t.clearAlpha||i,r!=null&&(e.setClearColor(r),e.setClearAlpha(i||0),e.clear()),this.scene.overrideMaterial=t,e.render(this.scene,this.camera),this.scene.overrideMaterial=null,e.autoClear=o,e.setClearColor(this._originalClearColor),e.setClearAlpha(a)}_overrideVisibility(){let e=this.scene,t=this._visibilityCache;e.traverse(function(e){(e.isPoints||e.isLine||e.isLine2)&&e.visible&&(e.visible=!1,t.push(e))})}_restoreVisibility(){let e=this._visibilityCache;for(let t=0;t<e.length;t++)e[t].visible=!0;e.length=0}_generateNoise(e=64){let t=new Kn,n=e*e*4,r=new Uint8Array(n);for(let n=0;n<e;n++)for(let i=0;i<e;i++){let a=n,o=i;r[(n*e+i)*4]=(t.noise(a,o)*.5+.5)*255,r[(n*e+i)*4+1]=(t.noise(a+e,o)*.5+.5)*255,r[(n*e+i)*4+2]=(t.noise(a,o+e)*.5+.5)*255,r[(n*e+i)*4+3]=(t.noise(a+e,o+e)*.5+.5)*255}let i=new b(r,e,e,te,ae);return i.wrapS=ue,i.wrapT=ue,i.needsUpdate=!0,i}};qn.OUTPUT={Off:-1,Default:0,Diffuse:1,Depth:2,Normal:3,AO:4,Denoise:5};var Jn={name:`OutputShader`,uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#elif defined( CUSTOM_TONE_MAPPING )

				gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`},Yn=class extends kn{constructor(){super(),this.isOutputPass=!0,this.uniforms=j.clone(Jn.uniforms),this.material=new se({name:Jn.name,uniforms:this.uniforms,vertexShader:Jn.vertexShader,fragmentShader:Jn.fragmentShader}),this._fsQuad=new Mn(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},Ee.getTransfer(this._outputColorSpace)===`srgb`&&(this.material.defines.SRGB_TRANSFER=``),this._toneMapping===1?this.material.defines.LINEAR_TONE_MAPPING=``:this._toneMapping===2?this.material.defines.REINHARD_TONE_MAPPING=``:this._toneMapping===3?this.material.defines.CINEON_TONE_MAPPING=``:this._toneMapping===4?this.material.defines.ACES_FILMIC_TONE_MAPPING=``:this._toneMapping===6?this.material.defines.AGX_TONE_MAPPING=``:this._toneMapping===7?this.material.defines.NEUTRAL_TONE_MAPPING=``:this._toneMapping===5&&(this.material.defines.CUSTOM_TONE_MAPPING=``),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}},Xn={name:`FXAAShader`,uniforms:{tDiffuse:{value:null},resolution:{value:new D(1/1024,1/512)}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec2 resolution;
		varying vec2 vUv;

		#define EDGE_STEP_COUNT 6
		#define EDGE_GUESS 8.0
		#define EDGE_STEPS 1.0, 1.5, 2.0, 2.0, 2.0, 4.0
		const float edgeSteps[EDGE_STEP_COUNT] = float[EDGE_STEP_COUNT]( EDGE_STEPS );

		float _ContrastThreshold = 0.0312;
		float _RelativeThreshold = 0.063;
		float _SubpixelBlending = 1.0;

		vec4 Sample( sampler2D  tex2D, vec2 uv ) {

			return texture( tex2D, uv );

		}

		float SampleLuminance( sampler2D tex2D, vec2 uv ) {

			return dot( Sample( tex2D, uv ).rgb, vec3( 0.3, 0.59, 0.11 ) );

		}

		float SampleLuminance( sampler2D tex2D, vec2 texSize, vec2 uv, float uOffset, float vOffset ) {

			uv += texSize * vec2(uOffset, vOffset);
			return SampleLuminance(tex2D, uv);

		}

		struct LuminanceData {

			float m, n, e, s, w;
			float ne, nw, se, sw;
			float highest, lowest, contrast;

		};

		LuminanceData SampleLuminanceNeighborhood( sampler2D tex2D, vec2 texSize, vec2 uv ) {

			LuminanceData l;
			l.m = SampleLuminance( tex2D, uv );
			l.n = SampleLuminance( tex2D, texSize, uv,  0.0,  1.0 );
			l.e = SampleLuminance( tex2D, texSize, uv,  1.0,  0.0 );
			l.s = SampleLuminance( tex2D, texSize, uv,  0.0, -1.0 );
			l.w = SampleLuminance( tex2D, texSize, uv, -1.0,  0.0 );

			l.ne = SampleLuminance( tex2D, texSize, uv,  1.0,  1.0 );
			l.nw = SampleLuminance( tex2D, texSize, uv, -1.0,  1.0 );
			l.se = SampleLuminance( tex2D, texSize, uv,  1.0, -1.0 );
			l.sw = SampleLuminance( tex2D, texSize, uv, -1.0, -1.0 );

			l.highest = max( max( max( max( l.n, l.e ), l.s ), l.w ), l.m );
			l.lowest = min( min( min( min( l.n, l.e ), l.s ), l.w ), l.m );
			l.contrast = l.highest - l.lowest;
			return l;

		}

		bool ShouldSkipPixel( LuminanceData l ) {

			float threshold = max( _ContrastThreshold, _RelativeThreshold * l.highest );
			return l.contrast < threshold;

		}

		float DeterminePixelBlendFactor( LuminanceData l ) {

			float f = 2.0 * ( l.n + l.e + l.s + l.w );
			f += l.ne + l.nw + l.se + l.sw;
			f *= 1.0 / 12.0;
			f = abs( f - l.m );
			f = clamp( f / l.contrast, 0.0, 1.0 );

			float blendFactor = smoothstep( 0.0, 1.0, f );
			return blendFactor * blendFactor * _SubpixelBlending;

		}

		struct EdgeData {

			bool isHorizontal;
			float pixelStep;
			float oppositeLuminance, gradient;

		};

		EdgeData DetermineEdge( vec2 texSize, LuminanceData l ) {

			EdgeData e;
			float horizontal =
				abs( l.n + l.s - 2.0 * l.m ) * 2.0 +
				abs( l.ne + l.se - 2.0 * l.e ) +
				abs( l.nw + l.sw - 2.0 * l.w );
			float vertical =
				abs( l.e + l.w - 2.0 * l.m ) * 2.0 +
				abs( l.ne + l.nw - 2.0 * l.n ) +
				abs( l.se + l.sw - 2.0 * l.s );
			e.isHorizontal = horizontal >= vertical;

			float pLuminance = e.isHorizontal ? l.n : l.e;
			float nLuminance = e.isHorizontal ? l.s : l.w;
			float pGradient = abs( pLuminance - l.m );
			float nGradient = abs( nLuminance - l.m );

			e.pixelStep = e.isHorizontal ? texSize.y : texSize.x;

			if (pGradient < nGradient) {

				e.pixelStep = -e.pixelStep;
				e.oppositeLuminance = nLuminance;
				e.gradient = nGradient;

			} else {

				e.oppositeLuminance = pLuminance;
				e.gradient = pGradient;

			}

			return e;

		}

		float DetermineEdgeBlendFactor( sampler2D  tex2D, vec2 texSize, LuminanceData l, EdgeData e, vec2 uv ) {

			vec2 uvEdge = uv;
			vec2 edgeStep;
			if (e.isHorizontal) {

				uvEdge.y += e.pixelStep * 0.5;
				edgeStep = vec2( texSize.x, 0.0 );

			} else {

				uvEdge.x += e.pixelStep * 0.5;
				edgeStep = vec2( 0.0, texSize.y );

			}

			float edgeLuminance = ( l.m + e.oppositeLuminance ) * 0.5;
			float gradientThreshold = e.gradient * 0.25;

			vec2 puv = uvEdge + edgeStep * edgeSteps[0];
			float pLuminanceDelta = SampleLuminance( tex2D, puv ) - edgeLuminance;
			bool pAtEnd = abs( pLuminanceDelta ) >= gradientThreshold;

			for ( int i = 1; i < EDGE_STEP_COUNT && !pAtEnd; i++ ) {

				puv += edgeStep * edgeSteps[i];
				pLuminanceDelta = SampleLuminance( tex2D, puv ) - edgeLuminance;
				pAtEnd = abs( pLuminanceDelta ) >= gradientThreshold;

			}

			if ( !pAtEnd ) {

				puv += edgeStep * EDGE_GUESS;

			}

			vec2 nuv = uvEdge - edgeStep * edgeSteps[0];
			float nLuminanceDelta = SampleLuminance( tex2D, nuv ) - edgeLuminance;
			bool nAtEnd = abs( nLuminanceDelta ) >= gradientThreshold;

			for ( int i = 1; i < EDGE_STEP_COUNT && !nAtEnd; i++ ) {

				nuv -= edgeStep * edgeSteps[i];
				nLuminanceDelta = SampleLuminance( tex2D, nuv ) - edgeLuminance;
				nAtEnd = abs( nLuminanceDelta ) >= gradientThreshold;

			}

			if ( !nAtEnd ) {

				nuv -= edgeStep * EDGE_GUESS;

			}

			float pDistance, nDistance;
			if ( e.isHorizontal ) {

				pDistance = puv.x - uv.x;
				nDistance = uv.x - nuv.x;

			} else {

				pDistance = puv.y - uv.y;
				nDistance = uv.y - nuv.y;

			}

			float shortestDistance;
			bool deltaSign;
			if ( pDistance <= nDistance ) {

				shortestDistance = pDistance;
				deltaSign = pLuminanceDelta >= 0.0;

			} else {

				shortestDistance = nDistance;
				deltaSign = nLuminanceDelta >= 0.0;

			}

			if ( deltaSign == ( l.m - edgeLuminance >= 0.0 ) ) {

				return 0.0;

			}

			return 0.5 - shortestDistance / ( pDistance + nDistance );

		}

		vec4 ApplyFXAA( sampler2D  tex2D, vec2 texSize, vec2 uv ) {

			LuminanceData luminance = SampleLuminanceNeighborhood( tex2D, texSize, uv );
			if ( ShouldSkipPixel( luminance ) ) {

				return Sample( tex2D, uv );

			}

			float pixelBlend = DeterminePixelBlendFactor( luminance );
			EdgeData edge = DetermineEdge( texSize, luminance );
			float edgeBlend = DetermineEdgeBlendFactor( tex2D, texSize, luminance, edge, uv );
			float finalBlend = max( pixelBlend, edgeBlend );

			if (edge.isHorizontal) {

				uv.y += edge.pixelStep * finalBlend;

			} else {

				uv.x += edge.pixelStep * finalBlend;

			}

			return Sample( tex2D, uv );

		}

		void main() {

			gl_FragColor = ApplyFXAA( tDiffuse, resolution.xy, vUv );

		}`},Zn={name:`LuminosityHighPassShader`,uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new a(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`},Qn=class e extends kn{constructor(e,r=1,i,o){super(),this.strength=r,this.radius=i,this.threshold=o,this.resolution=e===void 0?new D(256,256):new D(e.x,e.y),this.clearColor=new a(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let s=Math.round(this.resolution.x/2),c=Math.round(this.resolution.y/2);this.renderTargetBright=new xe(s,c,{type:g}),this.renderTargetBright.texture.name=`UnrealBloomPass.bright`,this.renderTargetBright.texture.generateMipmaps=!1;for(let e=0;e<this.nMips;e++){let t=new xe(s,c,{type:g});t.texture.name=`UnrealBloomPass.h`+e,t.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(t);let n=new xe(s,c,{type:g});n.texture.name=`UnrealBloomPass.v`+e,n.texture.generateMipmaps=!1,this.renderTargetsVertical.push(n),s=Math.round(s/2),c=Math.round(c/2)}let l=Zn;this.highPassUniforms=j.clone(l.uniforms),this.highPassUniforms.luminosityThreshold.value=o,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new n({uniforms:this.highPassUniforms,vertexShader:l.vertexShader,fragmentShader:l.fragmentShader}),this.separableBlurMaterials=[];let u=[6,10,14,18,22];s=Math.round(this.resolution.x/2),c=Math.round(this.resolution.y/2);for(let e=0;e<this.nMips;e++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(u[e])),this.separableBlurMaterials[e].uniforms.invSize.value=new D(1/s,1/c),s=Math.round(s/2),c=Math.round(c/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=r,this.compositeMaterial.uniforms.bloomRadius.value=.1;let d=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=d,this.bloomTintColors=[new t(1,1,1),new t(1,1,1),new t(1,1,1),new t(1,1,1),new t(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=j.clone(On.uniforms),this.blendMaterial=new n({uniforms:this.copyUniforms,vertexShader:On.vertexShader,fragmentShader:On.fragmentShader,premultipliedAlpha:!0,blending:2,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new a,this._oldClearAlpha=1,this._basic=new z,this._fsQuad=new Mn(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),r=Math.round(t/2);this.renderTargetBright.setSize(n,r);for(let e=0;e<this.nMips;e++)this.renderTargetsHorizontal[e].setSize(n,r),this.renderTargetsVertical[e].setSize(n,r),this.separableBlurMaterials[e].uniforms.invSize.value=new D(1/n,1/r),n=Math.round(n/2),r=Math.round(r/2)}render(t,n,r,i,a){t.getClearColor(this._oldClearColor),this._oldClearAlpha=t.getClearAlpha();let o=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),a&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=r.texture,t.setRenderTarget(null),t.clear(),this._fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=r.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this._fsQuad.render(t);let s=this.renderTargetBright;for(let n=0;n<this.nMips;n++)this._fsQuad.material=this.separableBlurMaterials[n],this.separableBlurMaterials[n].uniforms.colorTexture.value=s.texture,this.separableBlurMaterials[n].uniforms.direction.value=e.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[n]),t.clear(),this._fsQuad.render(t),this.separableBlurMaterials[n].uniforms.colorTexture.value=this.renderTargetsHorizontal[n].texture,this.separableBlurMaterials[n].uniforms.direction.value=e.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[n]),t.clear(),this._fsQuad.render(t),s=this.renderTargetsVertical[n];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this._fsQuad.render(t),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,a&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(r),this._fsQuad.render(t)),t.setClearColor(this._oldClearColor,this._oldClearAlpha),t.autoClear=o}_getSeparableBlurMaterial(e){let t=[],r=e/3;for(let n=0;n<e;n++)t.push(.39894*Math.exp(-.5*n*n/(r*r))/r);return new n({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new D(.5,.5)},direction:{value:new D(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				#include <common>

				varying vec2 vUv;

				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {

					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;

					for ( int i = 1; i < KERNEL_RADIUS; i ++ ) {

						float x = float( i );
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += ( sample1 + sample2 ) * w;

					}

					gl_FragColor = vec4( diffuseSum, 1.0 );

				}`})}_getCompositeMaterial(e){return new n({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				varying vec2 vUv;

				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor( const in float factor ) {

					float mirrorFactor = 1.2 - factor;
					return mix( factor, mirrorFactor, bloomRadius );

				}

				void main() {

					// 3.0 for backwards compatibility with previous alpha-based intensity
					vec3 bloom = 3.0 * bloomStrength * (
						lerpBloomFactor( bloomFactors[ 0 ] ) * bloomTintColors[ 0 ] * texture2D( blurTexture1, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 1 ] ) * bloomTintColors[ 1 ] * texture2D( blurTexture2, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 2 ] ) * bloomTintColors[ 2 ] * texture2D( blurTexture3, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 3 ] ) * bloomTintColors[ 3 ] * texture2D( blurTexture4, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 4 ] ) * bloomTintColors[ 4 ] * texture2D( blurTexture5, vUv ).rgb
					);

					float bloomAlpha = max( bloom.r, max( bloom.g, bloom.b ) );
					gl_FragColor = vec4( bloom, bloomAlpha );

				}`})}};Qn.BlurDirectionX=new D(1,0),Qn.BlurDirectionY=new D(0,1);var $n={watercolor:{name:`水彩`,paper:`#fffaf0`,ink:`#4a3326`,paint:3,shade:.84,exposure:1.06,saturation:1.12,contrast:.92,warmth:.35,levels:0,bleed:.6,edge:.18,grain:.13,fine:.03,wash:.14,granulate:.22,hatch:0,wobble:.8,vignette:.06,stripes:!1,lines:[.08,.35]},pencil:{name:`色えんぴつ`,paper:`#fffcf4`,ink:`#3d3530`,paint:0,shade:.85,exposure:1.06,saturation:1,contrast:.92,warmth:.25,levels:0,bleed:.1,edge:.45,grain:.12,fine:.04,wash:0,granulate:0,hatch:.24,wobble:0,vignette:.05,stripes:!1,lines:[.1,.38]},pencil1:{name:`色えんぴつ（直す前）`,paper:`#fffcf4`,ink:`#3d3530`,paint:2,shade:.82,exposure:1.08,saturation:.95,contrast:.9,warmth:.25,levels:0,bleed:.1,edge:.5,grain:.16,fine:.08,wash:.03,granulate:0,hatch:.34,wobble:.5,vignette:.05,stripes:!0,lines:[.08,.35]},gouache:{name:`絵の具`,paper:`#fff8ec`,ink:`#2e2420`,paint:3.5,shade:.86,exposure:1.04,saturation:1.2,contrast:1,warmth:.3,levels:7,bleed:.2,edge:.45,grain:.08,fine:.02,wash:.05,granulate:.06,hatch:0,wobble:.4,vignette:.05,stripes:!1,lines:[.08,.35]}},er=e=>new a(e);function tr(e){let n=e=>{let n=er(e);return new t(n.r,n.g,n.b)};return{tDiffuse:{value:null},resolution:{value:new D(1/1024,1/512)},paper:{value:n(e.paper)},ink:{value:n(e.ink)},paint:{value:e.paint},shade:{value:e.shade},exposure:{value:e.exposure},saturation:{value:e.saturation},contrast:{value:e.contrast},warmth:{value:e.warmth},levels:{value:e.levels},bleed:{value:e.bleed},edge:{value:e.edge},grain:{value:e.grain},fine:{value:e.fine},wash:{value:e.wash},granulate:{value:e.granulate},hatch:{value:e.hatch},stripes:{value:+!!e.stripes},lines:{value:new D(...e.lines)},wobble:{value:e.wobble},vignette:{value:e.vignette},tMask:{value:null},maskOn:{value:0}}}var nr={name:`PictureBookShader`,uniforms:tr($n.watercolor),vertexShader:`varying vec2 vUv;
void main(){vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0);}`,fragmentShader:`uniform sampler2D tDiffuse;
uniform sampler2D tMask;
uniform float maskOn;
uniform vec2 resolution;
uniform vec3 paper,ink;
uniform float paint,shade,exposure,saturation,contrast,warmth,levels,bleed,edge,grain,fine,wash,granulate,hatch,wobble,vignette,stripes;
uniform vec2 lines;
varying vec2 vUv;
// 雑音（sin を使わない形。スマホの精度でも模様が崩れない）
float hash(vec2 p){vec3 q=fract(vec3(p.xyx)*.1031);q+=dot(q,q.yzx+33.33);return fract((q.x+q.y)*q.z);}
float noise(vec2 p){vec2 i=floor(p),f=fract(p);f=f*f*(3.0-2.0*f);
	return mix(mix(hash(i),hash(i+vec2(1.0,0.0)),f.x),mix(hash(i+vec2(0.0,1.0)),hash(i+vec2(1.0,1.0)),f.x),f.y);}
float fbm(vec2 p){return .55*noise(p)+.3*noise(p*2.07+3.1)+.15*noise(p*4.13+7.7);}
float luma(vec3 c){return dot(c,vec3(.299,.587,.114));}
// 4 つの向き（左上・右上・左下・右下）の、それぞれ 4 か所（線形の補間で 4 画素ずつの平均）の平均と、明るさのばらつき
vec4 quadrant(vec2 uv,vec2 dir){
	vec2 s=resolution*paint;
	vec3 a=texture2D(tDiffuse,uv+dir*s*vec2(.5,.5)).rgb,b=texture2D(tDiffuse,uv+dir*s*vec2(1.5,.5)).rgb;
	vec3 c=texture2D(tDiffuse,uv+dir*s*vec2(.5,1.5)).rgb,d=texture2D(tDiffuse,uv+dir*s*vec2(1.5,1.5)).rgb;
	vec3 m=(a+b+c+d)*.25;float la=luma(a),lb=luma(b),lc=luma(c),ld=luma(d),lm=(la+lb+lc+ld)*.25;
	float v=(la-lm)*(la-lm)+(lb-lm)*(lb-lm)+(lc-lm)*(lc-lm)+(ld-lm)*(ld-lm);
	return vec4(m,v);
}
void main(){
	vec2 px=gl_FragCoord.xy;
	// 手描きのゆれ（ゆっくり変わる雑音で、読む所を少しずらす）
	vec2 uv=vUv;
	if(wobble>.001)uv+=(vec2(noise(px*.012),noise(px*.012+17.3))-.5)*2.0*wobble*resolution;
	vec4 src=texture2D(tDiffuse,uv);
	vec3 c=src.rgb;
	// キャラの形の型（2026-10-02 利用者「色鉛筆のフィールドでキャラは色鉛筆なしでやってみて」）：m＝キャラ（1）。
	// near＝キャラから 3 画素の内（境目の線は 2 画素はなれた明るさの差で引くので、キャラのまわりに太い線がにじんでいた → キャラの近くでは引かない）
	float m=0.0,near=0.0;
	if(maskOn>.5){
		vec2 r3=3.0*resolution;
		m=texture2D(tMask,vUv).r;
		near=max(m,max(max(texture2D(tMask,vUv+vec2(r3.x,0.0)).r,texture2D(tMask,vUv-vec2(r3.x,0.0)).r),max(texture2D(tMask,vUv+vec2(0.0,r3.y)).r,texture2D(tMask,vUv-vec2(0.0,r3.y)).r)));
	}
	// 色を同じ色のかたまりへ（4 つの向きのうち、ばらつきの小さい側ほど重く。輪郭はまたがない）
	if(paint>.01){
		vec4 q0=quadrant(uv,vec2(-1.0,-1.0)),q1=quadrant(uv,vec2(1.0,-1.0)),q2=quadrant(uv,vec2(-1.0,1.0)),q3=quadrant(uv,vec2(1.0,1.0));
		vec4 k=1.0/(vec4(q0.w,q1.w,q2.w,q3.w)*400.0+1e-3);k=k*k;
		c=(q0.rgb*k.x+q1.rgb*k.y+q2.rgb*k.z+q3.rgb*k.w)/(k.x+k.y+k.z+k.w);
	}
	// 色の境目（ならした色の、2 画素はなれた明るさの差。細かい模様では反応しにくい）
	vec2 o=2.0*resolution;
	float gx=luma(texture2D(tDiffuse,uv+vec2(o.x,0.0)).rgb)-luma(texture2D(tDiffuse,uv-vec2(o.x,0.0)).rgb);
	float gy=luma(texture2D(tDiffuse,uv+vec2(0.0,o.y)).rgb)-luma(texture2D(tDiffuse,uv-vec2(0.0,o.y)).rgb);
	float e=smoothstep(lines.x,lines.y,length(vec2(gx,gy)))*(1.0-near);
	// 色の調子：明るく・影を浅く・鮮やかに
	c=pow(clamp(c*exposure,0.0,1.0),vec3(shade));
	float l=luma(c);
	c=mix(vec3(l),c,saturation);
	c=(c-.5)*contrast+.5;
	c*=vec3(1.0+warmth*.05,1.0+warmth*.015,1.0-warmth*.06);
	if(levels>.5){vec3 q=floor(clamp(c,0.0,1.0)*levels+.5)/levels;c=mix(c,q,.55);}
	c=clamp(c,0.0,1.0);
	// 境目：絵の具のたまり（濃く・鮮やかに）と線
	c=mix(c,c*c*1.2,e*bleed);
	c=mix(c,ink,e*edge);
	// 紙：白を紙の色へ、紙の目・細かいざらつき・水彩のむら・色えんぴつの斜めの線（暗い所ほど）
	c*=paper;
	float n=fbm(px*.03);
	c*=1.0-grain*(n-.5)-fine*(hash(px)-.5);
	if(granulate>.001)c*=1.0-granulate*4.0*l*(1.0-l)*(noise(px*.4)-.5);
	if(wash>.001)c*=1.0-wash*(fbm(px*.0065+5.0)-.5);
	if(hatch>.001){
		if(stripes>.5){
			float strokes=.5+.5*sin((px.x+px.y)*.95+noise(px*.06)*5.0);   // きれいな縞（直す前の色えんぴつ）
			c*=1.0-hatch*(1.0-l)*smoothstep(.35,.8,strokes);
		}else{
			vec2 dpx=vec2(px.x+px.y,px.x-px.y)*.7071;   // 斜めの座標（線の向き・線を横切る向き）
			float strokes=noise(vec2(dpx.x*.13,dpx.y*.75));   // 線の向きには 8 画素ほど、横切る向きには細かい（えんぴつで軽く塗った跡。長くすると雨に見えた）
			c*=1.0-hatch*(1.0-l)*smoothstep(.55,.9,strokes);
		}
	}
	// 四すみを少し暗く
	float d=length(vUv-.5)*1.4;
	c*=1.0-vignette*smoothstep(.45,1.0,d);
	// キャラは仕上げをかけない（元の色のまま。ゆれも無し）
	vec3 plain=wobble>.001?texture2D(tDiffuse,vUv).rgb:src.rgb;
	gl_FragColor=vec4(clamp(mix(c,plain,m),0.0,1.0),src.a);
}`},rr=class extends qn{setSize(e,t){let n=Math.min(.5,960/e);super.setSize(Math.max(1,Math.round(e*n)),Math.max(1,Math.round(t*n)))}render(e,t,n,r,i){this.setGBuffer(n.depthTexture,void 0),this.depthRenderMaterial.uniforms.tDepth.value=n.depthTexture,super.render(e,t,n,r,i)}},ir={name:`SharpenShader`,uniforms:{tDiffuse:{value:null},resolution:{value:new D(1/1024,1/512)},sharpness:{value:{sharpness:.5}.sharpness}},vertexShader:`varying vec2 vUv;
void main(){vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0);}`,fragmentShader:`uniform sampler2D tDiffuse;
uniform vec2 resolution;
uniform float sharpness;
varying vec2 vUv;
void main(){
	vec4 center=texture2D(tDiffuse,vUv);
	vec3 e=center.rgb;
	vec3 b=texture2D(tDiffuse,vUv+vec2(0.0,-resolution.y)).rgb;
	vec3 d=texture2D(tDiffuse,vUv+vec2(-resolution.x,0.0)).rgb;
	vec3 f=texture2D(tDiffuse,vUv+vec2(resolution.x,0.0)).rgb;
	vec3 h=texture2D(tDiffuse,vUv+vec2(0.0,resolution.y)).rgb;
	vec3 low=min(min(min(d,e),min(f,b)),h);
	vec3 high=max(max(max(d,e),max(f,b)),h);
	vec3 amount=sqrt(clamp(min(low,1.0-high)/max(high,vec3(1e-4)),0.0,1.0));
	vec3 weight=amount*(-1.0/mix(8.0,5.0,sharpness));
	vec3 color=(b*weight+d*weight+f*weight+h*weight+e)/(1.0+4.0*weight);
	gl_FragColor=vec4(clamp(color,0.0,1.0),center.a);
}`};function ar(e,t,n){let r=new rr(e,t,16,16);return r.blendIntensity=1,r.updateGtaoMaterial({radius:1.15,thickness:1,distanceExponent:1.5,distanceFallOff:1,scale:1.4,samples:n?4:8,screenSpaceRadius:!1}),r.updatePdMaterial({samples:n?4:8,rings:2,radius:4,depthPhi:1,normalPhi:3}),r}function or(){let e=new Qn(new D(16,16),.2,.45,1.25);return e.materialHighPassFilter.fragmentShader=e.materialHighPassFilter.fragmentShader.replace(`vec4 texel = texture2D( tDiffuse, vUv );`,`vec4 texel = texture2D( tDiffuse, vUv );
     texel.rgb=vec3(texel.r>=0.0?min(texel.r,16.0):0.0,
                    texel.g>=0.0?min(texel.g,16.0):0.0,
                    texel.b>=0.0?min(texel.b,16.0):0.0);`),e}function sr(e){let t=e;return t.isMesh?[t.material].flat().some(e=>!e.transparent&&!e.isShaderMaterial):!1}var cr=e=>e.isMesh&&(/Line/.test(e.name)||[e.material].flat().some(e=>/Line/.test(e.name))),lr=e=>!!(e.isMesh||e.isLine||e.isPoints||e.isSprite),ur=class{renderer;scene;camera;mobile;composer;ao;bloom;sharpen;book;bookStyle=`off`;maskRoots=()=>[];mask;maskScene=Object.assign(new ve,{overrideMaterial:new z({color:16777215,name:`Fighter mask`})});antialias;render3d;output=new Yn;constructor(e,t,n,r=!1,i={}){this.renderer=e,this.scene=t,this.camera=n,this.mobile=r;let a=i.ambientOcclusion!==!1,o=i.bloom!==!1;this.composer=new In(e);for(let e of[this.composer.renderTarget1,this.composer.renderTarget2])e.depthTexture=new u(1,1,_);this.antialias=new Nn(Xn),this.render3d=new Ln(t,n),this.composer.addPass(this.render3d),a&&(this.ao=ar(t,n,r),this.composer.addPass(this.ao)),o&&(this.bloom=or(),this.composer.addPass(this.bloom)),this.composer.addPass(this.output),this.composer.addPass(this.antialias),e.info.autoReset=!1}setAmbientOcclusion(e){e&&!this.ao&&(this.ao=ar(this.scene,this.camera,this.mobile),this.composer.insertPass(this.ao,this.composer.passes.indexOf(this.render3d)+1),this.sizePasses()),this.ao&&(this.ao.enabled=e)}setBloom(e){e!==!!this.bloom&&(e?(this.bloom=or(),this.composer.insertPass(this.bloom,this.composer.passes.indexOf(this.output)),this.sizePasses()):this.bloom&&=(this.composer.removePass(this.bloom),this.bloom.dispose(),void 0))}setSharpen(e){e!==!!this.sharpen&&(e?(this.sharpen=new Nn(ir),this.book?this.composer.insertPass(this.sharpen,this.composer.passes.indexOf(this.book)):this.composer.addPass(this.sharpen),this.sizePasses()):this.sharpen&&=(this.composer.removePass(this.sharpen),this.sharpen.dispose(),void 0))}setBook(e){if(this.bookStyle=e,e===`off`){this.book&&=(this.composer.removePass(this.book),this.book.dispose(),void 0),this.mask?.dispose(),this.mask=void 0;return}if(!this.book)this.book=new Nn({...nr,uniforms:tr($n[e])}),this.composer.addPass(this.book);else for(let[t,n]of Object.entries(tr($n[e])))[`tDiffuse`,`resolution`,`tMask`,`maskOn`].includes(t)||(this.book.uniforms[t].value=n.value);this.sizePasses()}setAntialias(e){this.antialias.enabled=e}width=1;height=1;resize(e,t){this.width=e,this.height=t,this.composer.setSize(e,t),this.sizePasses()}sizePasses(){let e=this.renderer.getPixelRatio(),t=1/(this.width*e),n=1/(this.height*e);this.antialias.uniforms.resolution.value.set(t,n),this.sharpen?.uniforms.resolution.value.set(t,n),this.book?.uniforms.resolution.value.set(t,n)}render(e){this.renderer.info.reset(),this.renderMask(),this.composer.render(e)}renderMask(){let e=this.book;if(!e)return;let t=this.maskRoots().filter(e=>e.visible&&e.parent);if(!t.length){e.uniforms.maskOn.value=0;return}let n=this.renderer.getPixelRatio(),r=Math.max(1,Math.floor(this.width*n)),i=Math.max(1,Math.floor(this.height*n));this.mask?(this.mask.width!==r||this.mask.height!==i)&&this.mask.setSize(r,i):this.mask=new xe(r,i,{depthBuffer:!1,stencilBuffer:!1});let o=[],s=[];for(let e of t){let t=!1;e.traverse(e=>{e.visible&&cr(e)&&sr(e)&&(t=!0)}),e.traverse(e=>{lr(e)&&(!sr(e)||t&&!cr(e))&&(o.push(e),s.push(e.layers.mask),e.layers.mask=0)})}let c=t.map(e=>e.parent),l=this.renderer.getRenderTarget(),u=this.renderer.getClearColor(new a),d=this.renderer.getClearAlpha();for(let e of t)this.maskScene.add(e);try{this.renderer.setRenderTarget(this.mask),this.renderer.setClearColor(0,0),this.renderer.clear(!0,!1,!1),this.renderer.render(this.maskScene,this.camera)}finally{t.forEach((e,t)=>c[t].add(e)),o.forEach((e,t)=>{e.layers.mask=s[t]}),this.renderer.setRenderTarget(l),this.renderer.setClearColor(u,d)}e.uniforms.tMask.value=this.mask.texture,e.uniforms.maskOn.value=1}warmMask(){if(!this.book)return;let e=[];for(let t of this.maskRoots())t.traverse(t=>{e.push(t)});let t=e.map(e=>e.visible),n=e.map(e=>e.frustumCulled);e.forEach(e=>{e.visible=!0,e.frustumCulled=!1});try{this.renderMask()}finally{e.forEach((e,r)=>{e.visible=t[r],e.frustumCulled=n[r]})}}},dr={colosseum:{pc:{pixelRatio:1.5,shadow:`every`,ambientOcclusion:!1,bloom:!1,lampLights:!0,movingShadows:!1,mapLight:!1,mapPointLights:!1,cullBuildings:!1,skyCube:0,bakeMapLight:!1,shadowSamples:5,fighterLight:!1,fighterKeepMetal:!1,fadeWhenNeeded:!1,sharpen:!1,antialias:!0},mobile:{pixelRatio:1.275,shadow:`once`,ambientOcclusion:!1,bloom:!1,lampLights:!0,movingShadows:!1,mapLight:!0,mapPointLights:!0,cullBuildings:!1,skyCube:512,bakeMapLight:!0,shadowSamples:1,fighterLight:!0,fighterKeepMetal:!0,fadeWhenNeeded:!0,sharpen:!0,antialias:!0}},royal:{pc:{pixelRatio:1.5,shadow:`every`,ambientOcclusion:!0,bloom:!0,lampLights:!0,movingShadows:!0,mapLight:!1,mapPointLights:!1,cullBuildings:!1,skyCube:0,bakeMapLight:!1,shadowSamples:5,fighterLight:!1,fighterKeepMetal:!1,fadeWhenNeeded:!1,sharpen:!1,antialias:!0},mobile:{pixelRatio:1.275,shadow:`once`,ambientOcclusion:!1,bloom:!1,lampLights:!1,movingShadows:!1,mapLight:!0,mapPointLights:!1,cullBuildings:!0,skyCube:512,bakeMapLight:!0,shadowSamples:1,fighterLight:!0,fighterKeepMetal:!0,fadeWhenNeeded:!0,sharpen:!0,antialias:!0},mobileBefore:{pixelRatio:1.275,shadow:`hz30`,ambientOcclusion:!0,bloom:!0,lampLights:!0,movingShadows:!0,mapLight:!1,mapPointLights:!1,cullBuildings:!1,skyCube:0,bakeMapLight:!1,shadowSamples:5,fighterLight:!1,fighterKeepMetal:!1,fadeWhenNeeded:!1,sharpen:!1,antialias:!0}},school:{pc:{pixelRatio:1.5,shadow:`every`,ambientOcclusion:!0,bloom:!1,lampLights:!0,movingShadows:!0,mapLight:!1,mapPointLights:!1,cullBuildings:!1,skyCube:0,bakeMapLight:!1,shadowSamples:5,fighterLight:!1,fighterKeepMetal:!1,fadeWhenNeeded:!1,sharpen:!1,antialias:!0},mobile:{pixelRatio:1.275,shadow:`once`,ambientOcclusion:!1,bloom:!1,lampLights:!1,movingShadows:!1,mapLight:!0,mapPointLights:!1,cullBuildings:!1,skyCube:512,bakeMapLight:!0,shadowSamples:1,fighterLight:!0,fighterKeepMetal:!0,fadeWhenNeeded:!0,sharpen:!0,antialias:!0}}};function fr(e,t){return dr[e][t?`mobile`:`pc`]}function pr(e,t){return t?dr[e].mobileBefore:void 0}var mr={environment:1.25,sun:1.25,probe:[3.8135,1.763,1.6363,.279,.2171,1.0862,1.2137,-.3469,-.6344],pixelPoints:[`05_Mortar_and_recesses`,`03_Pale_arch_and_coping`]},hr={mapLightProbe:{value:mr.probe.map(e=>new t(e,e,e))},mapLightSun:{value:mr.sun}};function gr(e){return e.isMeshStandardMaterial===!0&&!e.transparent}function _r(e,t,n){Object.assign(e.uniforms,hr,t);let r=[n.points===`vertex`?`MAP_LIGHT_POINTS`:``,n.shadowOnce?`MAP_LIGHT_SHADOW_ONCE`:``,n.metalMap?`MAP_LIGHT_METAL_MAP`:``,n.sheen?`MAP_LIGHT_SHEEN`:``,n.baked?`MAP_LIGHT_BAKED\n#define MAP_LIGHT_BAKED_TEXELS ${n.baked.texels}`:``].filter(Boolean).map(e=>`#define ${e}\n`).join(``);e.vertexShader=r+e.vertexShader.replace(`#include <common>`,`#include <common>
#include <lights_pars_begin>
uniform float mapLightEnvironment;
uniform vec3 mapLightProbe[ 9 ];
varying vec3 vMapLights;
varying vec3 vMapEnv;
varying vec3 vMapKey;
#ifdef MAP_LIGHT_BAKED
	uniform highp sampler2D mapLightBaked;
	uniform int mapLightBakedWidth;
	uniform int mapLightBakedVertices;
	#ifdef USE_INSTANCING
		attribute float mapLightInstance;
	#endif
#endif`).replace(`#include <fog_vertex>`,`#include <fog_vertex>
	#ifdef MAP_LIGHT_BAKED
	#ifdef USE_INSTANCING
		int mapBakedIndex = ( int( mapLightInstance + 0.5 ) * mapLightBakedVertices + gl_VertexID ) * MAP_LIGHT_BAKED_TEXELS;
	#else
		int mapBakedIndex = gl_VertexID * MAP_LIGHT_BAKED_TEXELS;
	#endif
	#ifdef DOUBLE_SIDED
		if ( dot( normalize( transformedNormal ), mvPosition.xyz ) > 0.0 ) mapBakedIndex += 1;
	#endif
	vec4 mapBaked = texelFetch( mapLightBaked, ivec2( mapBakedIndex % mapLightBakedWidth, mapBakedIndex / mapLightBakedWidth ), 0 );
	vMapLights = mapBaked.rgb;
	vMapEnv = vec3( 0.0 );
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
		vMapKey = max( mapBaked.a, 0.0 ) * directionalLights[ 0 ].color;
	#else
		vMapKey = vec3( 0.0 );
	#endif
	#else
	vec3 mapNormal = normalize( transformedNormal );
	#ifdef DOUBLE_SIDED
		if ( dot( mapNormal, mvPosition.xyz ) > 0.0 ) mapNormal = - mapNormal;
	#endif
	vMapLights = getAmbientLightIrradiance( ambientLightColor );
	vMapKey = vec3( 0.0 );
	#if NUM_HEMI_LIGHTS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			vMapLights += getHemisphereLightIrradiance( hemisphereLights[ i ], mapNormal );
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHTS > 0
		IncidentLight mapDirect;
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
			getDirectionalLightInfo( directionalLights[ i ], mapDirect );
			#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
				vMapKey += saturate( dot( mapNormal, mapDirect.direction ) ) * mapDirect.color;
			#else
				vMapLights += saturate( dot( mapNormal, mapDirect.direction ) ) * mapDirect.color;
			#endif
		}
		#pragma unroll_loop_end
	#endif
	#if defined( MAP_LIGHT_POINTS ) && NUM_POINT_LIGHTS > 0
		IncidentLight mapPoint;
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
			getPointLightInfo( pointLights[ i ], mvPosition.xyz, mapPoint );
			vMapLights += saturate( dot( mapNormal, mapPoint.direction ) ) * mapPoint.color;
		}
		#pragma unroll_loop_end
	#endif
	vMapEnv = mapLightEnvironment * getLightProbeIrradiance( mapLightProbe, mapNormal );
	#endif`).replace(`#include <envmap_vertex>`,``),e.fragmentShader=r+(n.points===`pixel`?`#define MAP_LIGHT_PIXEL_POINTS
`:``)+e.fragmentShader.replace(`#include <common>`,`#include <common>
uniform float mapLightMetal;
uniform float mapLightSun;
#ifdef MAP_LIGHT_SHEEN
	uniform float mapLightSheen;
#endif
#if defined( MAP_LIGHT_METAL_MAP ) && defined( USE_MAP )
	uniform sampler2D mapLightMetalMap;
#endif
varying vec3 vMapLights;
varying vec3 vMapEnv;
varying vec3 vMapKey;`).replace(`#include <shadowmap_pars_fragment>`,`#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
#if defined( MAP_LIGHT_SHADOW_ONCE ) && defined( USE_SHADOWMAP ) && defined( SHADOWMAP_TYPE_PCF ) && NUM_DIR_LIGHT_SHADOWS > 0
	float mapLightShadow() {
		float shadow = 1.0;
		DirectionalLightShadow mapShadowLight;
		vec4 mapShadowCoord;
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			mapShadowLight = directionalLightShadows[ i ];
			mapShadowCoord = vDirectionalShadowCoord[ i ];
			mapShadowCoord.xyz /= mapShadowCoord.w;
			mapShadowCoord.z += mapShadowLight.shadowBias;
			if ( receiveShadow && mapShadowCoord.x >= 0.0 && mapShadowCoord.x <= 1.0 && mapShadowCoord.y >= 0.0 && mapShadowCoord.y <= 1.0 && mapShadowCoord.z <= 1.0 ) shadow *= mix( 1.0, texture( directionalShadowMap[ i ], mapShadowCoord.xyz ), mapShadowLight.shadowIntensity );
		}
		#pragma unroll_loop_end
		return shadow;
	}
#else
	float mapLightShadow() { return getShadowMask(); }
#endif`).replace(`#include <normal_fragment_begin>`,``).replace(`#include <normal_fragment_maps>`,``).replace(`#include <lights_fragment_begin>`,`float mapDiffuse = mapLightMetal;
	#if defined( MAP_LIGHT_METAL_MAP ) && defined( USE_MAP )
		mapDiffuse *= texture2D( mapLightMetalMap, vMapUv ).b;
	#endif
	mapDiffuse = 1.0 - mapDiffuse;
	float mapShadow = mapLightShadow();
	#ifdef MAP_LIGHT_BAKED
		reflectedLight.indirectDiffuse += vMapLights * BRDF_Lambert( material.diffuseColor );
	#else
		reflectedLight.indirectDiffuse += ( vMapLights * mapDiffuse + vMapEnv ) * BRDF_Lambert( material.diffuseColor );
	#endif
	reflectedLight.directDiffuse += vMapKey * ( mapLightSun * mapDiffuse * mapShadow ) * BRDF_Lambert( material.diffuseColor );
	#ifdef MAP_LIGHT_SHEEN
		reflectedLight.indirectDiffuse += ( vMapEnv + vMapKey * ( mapLightSun * mapShadow ) ) * ( mapLightSheen * RECIPROCAL_PI );
	#endif
	#if defined( MAP_LIGHT_PIXEL_POINTS ) && NUM_POINT_LIGHTS > 0
		vec3 mapPixelNormal = normalize( vNormal );
		#ifdef DOUBLE_SIDED
			mapPixelNormal *= gl_FrontFacing ? 1.0 : - 1.0;
		#endif
		IncidentLight mapPixelPoint;
		vec3 mapPixelLights = vec3( 0.0 );
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
			getPointLightInfo( pointLights[ i ], - vViewPosition, mapPixelPoint );
			mapPixelLights += saturate( dot( mapPixelNormal, mapPixelPoint.direction ) ) * mapPixelPoint.color;
		}
		#pragma unroll_loop_end
		reflectedLight.directDiffuse += mapPixelLights * mapDiffuse * BRDF_Lambert( material.diffuseColor );
	#endif`).replace(`#include <lights_fragment_maps>`,``).replace(`#include <lights_fragment_end>`,``).replace(`#include <envmap_fragment>`,``)}var vr=e=>`map-light-v3:${e.points}:${e.shadowOnce?1:5}:${e.metalMap?`metal-map`:`metal`}:${e.sheen?`sheen`:``}:${e.baked?`baked${e.baked.texels}`:``}`,yr=(e,t)=>mr.environment*(e.envMap?e.envMapIntensity:t);function br(e,t,n,r){let i=new Te({name:e.name,color:e.color,map:e.map,vertexColors:e.vertexColors,emissive:e.emissive,emissiveIntensity:e.emissiveIntensity,emissiveMap:e.emissiveMap,alphaMap:e.alphaMap,alphaTest:e.alphaTest,side:e.side,fog:e.fog,flatShading:e.flatShading,depthWrite:e.depthWrite,depthTest:e.depthTest}),a={mapLightEnvironment:{value:yr(e,t)},mapLightMetal:{value:e.metalness},...r?{mapLightBaked:{value:r.texture},mapLightBakedWidth:{value:r.width},mapLightBakedVertices:{value:r.vertices}}:{}},o={...n,metalMap:!1,...r?{baked:{texels:r.texels}}:{}};return i.onBeforeCompile=e=>_r(e,a,o),i.customProgramCacheKey=()=>vr(o),i.userData.mapLight=!0,r&&(i.userData.baked=!0),i.userData.environment=a.mapLightEnvironment,i.userData.sun=hr.mapLightSun,i}function xr(e,t,n){let r=new Te({name:e.name,map:e.map,vertexColors:e.vertexColors,emissiveMap:e.emissiveMap,alphaMap:e.alphaMap,alphaTest:e.alphaTest,side:e.side,fog:e.fog,flatShading:e.flatShading,transparent:e.transparent,opacity:e.opacity,alphaHash:e.alphaHash,depthWrite:e.depthWrite,depthTest:e.depthTest});r.color=e.color,r.emissive=e.emissive,Object.defineProperty(r,"emissiveIntensity",{configurable:!0,get:()=>e.emissiveIntensity,set:t=>{e.emissiveIntensity=t}});let i=!!(e.map&&e.metalnessMap),a={mapLightEnvironment:{value:Sr.environment*(e.envMap?e.envMapIntensity:t)},mapLightMetal:{value:e.metalness},...i?{mapLightMetalMap:{value:e.metalnessMap}}:{},mapLightSun:Cr.sun,mapLightSheen:Cr.sheen},o={...n,metalMap:i,sheen:!0};return r.onBeforeCompile=e=>_r(e,a,o),r.customProgramCacheKey=()=>vr(o),r.userData.fighterLight=!0,r.userData.source=e,r.userData.environment=a.mapLightEnvironment,r.userData.sun=Cr.sun,r.userData.sheen=Cr.sheen,r}var Sr={keepRoles:[`paladin`],keepMetalness:.5,environment:.95,sun:.85,sheen:.03},Cr={sun:{value:Sr.sun},sheen:{value:Sr.sheen}};function wr(e,t){return Sr.keepRoles.includes(t)||e.metalness>=Sr.keepMetalness&&!e.metalnessMap}function Tr(e,t,n){return!n||e.transparent||t<1}function Er(e,t,n){return t?n&&mr.pixelPoints.includes(e.name)?`pixel`:`vertex`:`none`}var Dr={width:2048};function Or(e,n){let r={ambient:new a(0,0,0),hemispheres:[],fills:[],points:[]},i=0;return e.updateMatrixWorld(),e.traverseVisible(e=>{let a=e;if(!a.isLight)return;let o=a.color.clone().multiplyScalar(a.intensity);if(a.isAmbientLight)r.ambient.add(o);else if(a.isHemisphereLight){let e=a;r.hemispheres.push({sky:o,ground:e.groundColor.clone().multiplyScalar(e.intensity),direction:new t().setFromMatrixPosition(e.matrixWorld).normalize()})}else if(a.isDirectionalLight){let e=a,s=new t().setFromMatrixPosition(e.target.matrixWorld),c=new t().setFromMatrixPosition(e.matrixWorld).sub(s).normalize();n&&e.castShadow?(r.sun={color:o,direction:c},i++):r.fills.push({color:o,direction:c})}else if(a.isPointLight){let e=a;r.points.push({color:o,position:new t().setFromMatrixPosition(e.matrixWorld),distance:e.distance,decay:e.decay})}}),i>1?void 0:r}var kr=mr.probe;function Ar(e,t,n,r,i,a,o,s,c,l){let u=e.ambient.r,d=e.ambient.g,f=e.ambient.b;for(let t of e.hemispheres){let e=.5*(n*t.direction.x+r*t.direction.y+i*t.direction.z)+.5;u+=t.ground.r+(t.sky.r-t.ground.r)*e,d+=t.ground.g+(t.sky.g-t.ground.g)*e,f+=t.ground.b+(t.sky.b-t.ground.b)*e}for(let t of e.fills){let e=Math.min(1,Math.max(0,n*t.direction.x+r*t.direction.y+i*t.direction.z));u+=t.color.r*e,d+=t.color.g*e,f+=t.color.b*e}if(t.points)for(let t of e.points){let e=t.position.x-a,c=t.position.y-o,l=t.position.z-s,p=Math.hypot(e,c,l);if(p===0)continue;let m=1/Math.max(p**+t.decay,.01);if(t.distance>0){let e=Math.min(1,Math.max(0,1-(p/t.distance)**4));m*=e*e}let h=Math.min(1,Math.max(0,(n*e+r*c+i*l)/p))*m;u+=t.color.r*h,d+=t.color.g*h,f+=t.color.b*h}let p=t.environment*(kr[0]*.886227+kr[1]*2*.511664*r+kr[2]*2*.511664*i+kr[3]*2*.511664*n+kr[4]*2*.429043*n*r+kr[5]*2*.429043*r*i+kr[6]*(.743125*i*i-.247708)+kr[7]*2*.429043*n*i+kr[8]*.429043*(n*n-r*r)),m=1-t.metal;c[l]=u*m+p,c[l+1]=d*m+p,c[l+2]=f*m+p,c[l+3]=e.sun?n*e.sun.direction.x+r*e.sun.direction.y+i*e.sun.direction.z:0}function jr(e,t,n,r,i=!1,a){let o=e.geometry,s=o.getAttribute(`position`),c=o.getAttribute(`normal`),l=e.isInstancedMesh===!0,u=a??(l?e.instanceMatrix.array:void 0),d=l?a?a.length/16:e.count:1,f=s.count,p=r?2:1,m=new Float32Array(f*d*p*4);e.updateWorldMatrix(!0,!1);let h=new V,g=new V,_=new fe,v=h.elements,y=_.elements,b=i?-1:1;for(let i=0;i<d;i++){l?(g.fromArray(u,i*16),h.multiplyMatrices(e.matrixWorld,g)):h.copy(e.matrixWorld),_.getNormalMatrix(h);for(let e=0;e<f;e++){let a=s.getX(e),o=s.getY(e),l=s.getZ(e),u=c.getX(e),d=c.getY(e),h=c.getZ(e),g=v[0]*a+v[4]*o+v[8]*l+v[12],_=v[1]*a+v[5]*o+v[9]*l+v[13],x=v[2]*a+v[6]*o+v[10]*l+v[14],S=y[0]*u+y[3]*d+y[6]*h,C=y[1]*u+y[4]*d+y[7]*h,w=y[2]*u+y[5]*d+y[8]*h,T=Math.hypot(S,C,w)||1;S*=b/T,C*=b/T,w*=b/T;let E=(i*f+e)*p*4;Ar(t,n,S,C,w,g,_,x,m,E),r&&Ar(t,n,-S,-C,-w,g,_,x,m,E+4)}}return{data:m,texels:p,vertices:f,count:d}}function Mr(e,t=Dr.width){let n=e.vertices*e.count*e.texels,r=Math.max(1,Math.ceil(n/t)),i=new Float32Array(t*r*4);return i.set(e.data),{data:i,height:r}}function Nr(e,t=Dr.width){let{data:n,height:r}=Mr(e,t),i=new b(n,t,r,te,ie);return i.internalFormat=`RGBA16F`,i.minFilter=i.magFilter=ne,i.generateMipmaps=!1,i.needsUpdate=!0,i.onUpdate=()=>{i.image.data=null},i}var Pr={margin:2},Fr=new f,Ir=new V;function Lr(e){return Fr.setFromProjectionMatrix(Ir.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse))}var Rr=class{mesh;total;spheres;original;shown;constructor(e,t=Pr.margin){this.mesh=e,this.total=e.count,this.original=e.instanceMatrix.array.slice(0,this.total*16),this.shown=[...Array(this.total).keys()],e.geometry.boundingSphere||e.geometry.computeBoundingSphere();let n=e.geometry.boundingSphere,r=new V,i=new V;e.updateWorldMatrix(!0,!1),this.spheres=this.shown.map(a=>{i.multiplyMatrices(e.matrixWorld,r.fromArray(this.original,a*16));let o=n.clone().applyMatrix4(i);return o.radius+=t,o})}pick(e,t){let n=[];for(let r=0;r<this.total;r++)(!t||t(r))&&(!e||e.intersectsSphere(this.spheres[r]))&&n.push(r);return n}show(e){if(e.length===this.shown.length&&e.every((e,t)=>e===this.shown[t]))return!1;let t=this.mesh.instanceMatrix.array;e.forEach((e,n)=>t.set(this.original.subarray(e*16,e*16+16),n*16)),this.mesh.count=e.length,this.mesh.instanceMatrix.clearUpdateRanges(),this.mesh.instanceMatrix.addUpdateRange(0,e.length*16),this.mesh.instanceMatrix.needsUpdate=!0;let n=this.mesh.geometry.getAttribute(`mapLightInstance`);return n&&(e.forEach((e,t)=>{n.array[t]=e}),n.clearUpdateRanges(),n.addUpdateRange(0,e.length),n.needsUpdate=!0),this.shown=[...e],!0}showAll(){return this.show([...Array(this.total).keys()])}get count(){return this.shown.length}},zr={height:2.8,base:`#ffc12e`,top:`#ffffff`,sheets:[-.1,.1],groundWidth:1.2,rise:.22,fade:.45,gain:.8},Br=`
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}`,Vr=`
uniform vec3 uBase;
uniform vec3 uTop;
uniform float uTime;
uniform float uSeed;
uniform float uFade;
uniform float uGain;
uniform float uGround;
varying vec2 vUv;
void main() {
  float u = vUv.x, v = vUv.y;
  if (uGround > .5) {
    // 床の帯：真ん中の線が明るく、厚み方向へ柔らかく消える。長さ方向の両端も消す。
    float across = 1.0 - abs(u * 2.0 - 1.0);
    float along = smoothstep(0.0, .1, v) * smoothstep(1.0, .9, v);
    float glow = pow(across, 3.0) * .55 + pow(across, 14.0) * .9;
    gl_FragColor = vec4(uBase, glow * along * uFade);
    return;
  }
  // 足元の黄色から、上へ行くほど白へ。
  vec3 colour = mix(uBase, uTop, smoothstep(.02, .8, v));
  // 縦の光の柱。太い揺らぎ（column）と、細く明るい筋（fine）をゆっくり動かす。
  float column = .5 + .5 * sin(u * 31.0 + uSeed + uTime * 1.1) * sin(u * 13.0 + uSeed * .5 - uTime * .7);
  float fine = pow(max(0.0, sin(u * 57.0 + uSeed * 1.7 + uTime * 1.9)), 8.0);
  // 上の端は柱ごとに届く高さが違う（炎のように揃わない）。平らな板に見せないため。
  float reach = .55 + .4 * column + .1 * fine;
  float top = 1.0 - smoothstep(reach * .55, reach, v);
  // 左右の端は柔らかく消す。
  float ends = smoothstep(0.0, .18, u) * smoothstep(1.0, .82, u);
  // 下から上へ昇る光の帯。
  float lift = fract(v * 1.5 - uTime * .45 + uSeed * .13 + column * .2);
  float wave = smoothstep(0.0, .06, lift) * (1.0 - smoothstep(.06, .35, lift));
  // 足元ほど濃い。地面に接する線はいちばん明るくして、立っている場所を見せる。
  float body = mix(.85, .25, v);
  float rim = exp(-v * v * 500.0);
  float a = (body * (.45 + .55 * column) + fine * .5 * (1.0 - v) + wave * .25 + rim * 1.1) * ends * top;
  gl_FragColor = vec4(colour, a * uFade * uGain);
}`;function Hr(e=!1,t=0){let r=zr;return new n({vertexShader:Br,fragmentShader:Vr,uniforms:{uBase:{value:new a(r.base)},uTop:{value:new a(r.top)},uTime:{value:0},uSeed:{value:t},uFade:{value:0},uGain:{value:r.gain},uGround:{value:+!!e}},transparent:!0,depthWrite:!1,side:2,blending:2})}function Ur(e,t,n){let i=zr,a=new H,o=t%17*1.37;for(let t of i.sheets){let n=new B(new r(e,i.height).translate(0,i.height/2,0).rotateY(Math.PI/2),Hr(!1,o+t*9));n.position.x=t,a.add(n)}let s=new B(new r(i.groundWidth,e).rotateX(-Math.PI/2),Hr(!0,o));return s.position.y=.03,a.add(s),a.userData.born=n,a}var Wr=e=>{let t=Math.max(0,Math.min(1,e));return t*t*(3-2*t)};function Gr(e,t,n){let r=zr,i=ut(t),a=Wr((n-e.userData.born)/r.rise),o=Math.max(0,Math.min(1,t.life/r.fade));e.position.set(t.pos.x,0,t.pos.z),e.rotation.y=Math.atan2(-i.z,i.x);for(let t of e.children){let e=t,r=e.material,i=r.uniforms.uGround.value>.5;i||(e.scale.y=Math.max(.001,a)),r.uniforms.uTime.value=n,r.uniforms.uFade.value=i?o*a:o}}var Kr={flare:`#ffffff`,glow:`#fff0c2`,cross:`#fff6d8`,streak:`#ffe39a`,ember:`#ffc44f`,ring:`#fff0c4`,streaks:9,embers:14},qr=e=>{let t=Math.min(1,Math.max(0,e));return t*t*(3-2*t)};function Jr(e){let t=Math.abs(Math.floor(e))%233280+1;return()=>(t=(t*9301+49297)%233280,t/233280)}function Yr(e){return new z({color:e,transparent:!0,opacity:0,depthWrite:!1,depthTest:!1,side:2})}function Xr(e){let t=new H,n=Jr(e);t.name=`clash-spark`;let r=new De(1,4),i=new De(1,28),a=new k(.9,1,48),o=(e,n,r,i)=>{let a=new B(e,Yr(n));a.renderOrder=r,a.userData.clash=i,t.add(a)};o(a,Kr.ring,20,{kind:`ring`,angle:0,length:1,speed:1});let s=(n()-.5)*.5;for(let e=0;e<Kr.streaks;e++)o(r,Kr.streak,21,{kind:`streak`,angle:(e+n()*.8)/Kr.streaks*Math.PI*2,length:.45+n()*.6,speed:1});for(let e=0;e<Kr.embers;e++)o(r,Kr.ember,22,{kind:`ember`,angle:n()*Math.PI*2,length:1,speed:.75+n()*.7});return o(i,Kr.glow,22,{kind:`glow`,angle:0,length:1,speed:1}),o(i,Kr.flare,23,{kind:`flare`,angle:0,length:1,speed:1}),o(r,Kr.cross,24,{kind:`cross`,angle:s,length:1.3,speed:1}),o(r,Kr.cross,24,{kind:`cross`,angle:s+Math.PI/2,length:.95,speed:1}),t}function Zr(e,t,n,r,i=0){e.rotation.z=t-Math.PI/2,e.scale.set(r,n/2,1),e.position.set(Math.cos(t)*(i+n/2),Math.sin(t)*(i+n/2),0)}function Qr(e,t,n,r){let i=Math.min(1,Math.max(0,t)),a=n;e.quaternion.copy(r.quaternion);let o=.7+.3*qr(i/.25),s=1-.65*i;for(let t of e.children){let e=t,n=e.userData.clash;if(n.kind===`flare`)e.scale.setScalar(a*.26*(1-.5*qr(i/.35))),e.material.opacity=1-qr(i/.35);else if(n.kind===`glow`)e.scale.setScalar(a*.55*(1-.4*qr(i/.5))),e.material.opacity=.5*(1-qr(i/.5));else if(n.kind===`cross`)e.rotation.z=n.angle,e.position.set(0,0,0),e.scale.set(a*n.length*(1-.35*i),a*.055*s,1),e.material.opacity=1-qr(i/.65);else if(n.kind===`streak`)Zr(e,n.angle,a*n.length*o,a*.035*s,a*.08),e.material.opacity=(1-i)**1.3;else if(n.kind===`ember`){let t=a*1.2*n.speed*(1-(1-i)*(1-i)),r=a*.6*i*i,o=Math.cos(n.angle)*t,s=Math.sin(n.angle)*t-r;e.rotation.z=n.angle-Math.PI/2,e.position.set(o,s,0),e.scale.set(a*.022*(1-.5*i),a*.09*(1-.4*i),1),e.material.opacity=i<.1?i/.1:1-(i-.1)/.9}else e.scale.setScalar(a*(.3+1.05*qr(i/.4))),e.material.opacity=.45*(1-qr(i/.4))}}var Q={meditation:{color:`#a86cff`,light:`#dcc2ff`,circle:{radius:1.35,spin:.32,lift:.05,strength:1},sparks:{count:30,radius:[.42,.9],height:[.08,2.2],life:[1.7,2.6],size:[.11,.2],twinkle:7,glow:2.1},fadeIn:.3,fadeOut:.3},stance:{samurai:{color:`#dfe6ff`,light:`#ffffff`},swordsman:{color:`#ff3326`,light:`#ffae96`},ninja:{color:`#8ccc80`,light:`#b4f0a6`,shadow:!0,rim:{color:`#4f2790`,light:`#8a5fd4`,strength:.75}},paladin:{color:`#ffc31a`,light:`#fff09a`},mage:{color:`#a86cff`,light:`#dcc2ff`},healer:{color:`#ff5aad`,light:`#ffc4e1`},gunner:{color:`#9c5a24`,light:`#e0a868`}},heal:{color:`#5cff86`,light:`#c8ffd6`,pluses:{count:10,radius:[.34,.72],height:[.3,2.2],life:[.9,1.3],size:[.15,.21],width:.045,glow:1.9},sparks:{count:12,radius:[.3,.75],height:[.2,2],life:[.8,1.2],size:[.08,.13],twinkle:9,glow:1.9},fadeIn:.12,fadeOut:.35}};function $r(e=!1){return new z({vertexColors:!0,transparent:!0,depthWrite:!1,side:2,blending:e?3:2,premultipliedAlpha:e})}var ei=(e,t)=>{let n=Math.sin(e*127.1+t*311.7)*43758.5453;return n-Math.floor(n)},ti=(e,t)=>e[0]+(e[1]-e[0])*t;function ni(e,t,n,r,i,a,o,s,c){let l=r-t,u=i-n,d=Math.hypot(l,u)||1,f=-u/d*a,p=l/d*a,m=e.position.length/3;for(let[a,l,u]of[[t-f,n-p,0],[t,n,o],[t+f,n+p,0],[r-f,i-p,0],[r,i,o],[r+f,i+p,0]])e.position.push(a,s,l),e.colour.push(c.r*u,c.g*u,c.b*u);e.index.push(m,m+3,m+1,m+1,m+3,m+4,m+1,m+4,m+2,m+2,m+4,m+5)}function ri(e,t,n,r,i,a,o=72){let s=e.position.length/3;for(let s=0;s<=o;s++){let c=s/o*Math.PI*2,l=Math.cos(c),u=Math.sin(c);for(let[o,s]of[[-1,0],[0,r],[1,0]])e.position.push(l*(t+o*n),i,u*(t+o*n)),e.colour.push(a.r*s,a.g*s,a.b*s)}for(let t=0;t<o;t++)for(let n=0;n<2;n++){let r=s+t*3+n,i=r+3;e.index.push(r,i,r+1,r+1,i,i+1)}}function ii(e,t,n,r,i,a=36){let o=e.position.length/3;e.position.push(0,r,0),e.colour.push(i.r*n,i.g*n,i.b*n);for(let n=0;n<=a;n++){let i=n/a*Math.PI*2;e.position.push(Math.cos(i)*t,r,Math.sin(i)*t),e.colour.push(0,0,0)}for(let t=0;t<a;t++)e.index.push(o,o+1+t,o+2+t)}function ai(e){let t=new U;return t.setAttribute(`position`,new p(e.position,3)),t.setAttribute(`color`,new p(e.colour,3)),t.setIndex(e.index),t}function oi(e){let t={position:[],colour:[],index:[]},n=new a(e.color),r=new a(e.light);ii(t,1,.1,0,n),ri(t,.97,.028,1,0,r),ri(t,.86,.016,.85,0,n);for(let e=0;e<18;e++){let n=e/18*Math.PI*2,i=Math.cos(n),a=Math.sin(n),o=.915;if(e%2)ni(t,i*.885,a*.885,i*.9450000000000001,a*.9450000000000001,.012,.9,0,r);else{let e=.022,n=-a,s=i;ni(t,i*.893,a*.893,i*o+n*e,a*o+s*e,.008,.8,0,r),ni(t,i*o+n*e,a*o+s*e,i*.937,a*.937,.008,.8,0,r),ni(t,i*.937,a*.937,i*o-n*e,a*o-s*e,.008,.8,0,r),ni(t,i*o-n*e,a*o-s*e,i*.893,a*.893,.008,.8,0,r)}}ri(t,.6,.016,.85,0,n);for(let e of[0,Math.PI/3])for(let r=0;r<3;r++){let i=e+r/3*Math.PI*2+Math.PI/2,a=i+Math.PI*2/3;ni(t,Math.cos(i)*.6,Math.sin(i)*.6,Math.cos(a)*.6,Math.sin(a)*.6,.014,.75,0,n)}return ri(t,.25,.012,.7,0,r,48),ii(t,.16,.45,0,r,24),ai(t)}var si=9;function ci(e,t){for(let n=0;n<4;n++){let r=t+1+n*2,i=t+2+n*2,a=t+1+(n+1)%4*2;e.push(t,r,i,t,i,a)}}var li=12;function ui(e,t){for(let n of[0,6]){let r=t+n;e.push(r,r+3,r+1,r+1,r+3,r+4,r+1,r+4,r+2,r+2,r+4,r+5)}}function di(e,n,r=!1){let i=e*si+n*li,a=[];for(let t=0;t<e;t++)ci(a,t*si);for(let t=0;t<n;t++)ui(a,e*si+t*li);let o=new U;o.setAttribute(`position`,new I(new Float32Array(i*3),3)),o.setAttribute(`color`,new I(new Float32Array(i*3),3)),o.setIndex(a),o.boundingSphere=new d(new t(0,1.15,0),1.9);let s=new B(o,$r(r));return s.renderOrder=7,{mesh:s,stars:e,pluses:n}}var fi=new t,pi=new t,mi=new t,hi=new t,gi=new a,_i=new Map,vi=e=>_i.get(e)??_i.set(e,new a(e)).get(e);function yi(e,t,n,r,i,a){e.setXYZ(n,r.x,r.y,r.z),t.setXYZ(n,a.r,a.g,a.b);for(let o=0;o<4;o++){let s=o*Math.PI/2,c=Math.cos(s),l=Math.sin(s);mi.copy(r).addScaledVector(fi,c*i).addScaledVector(pi,l*i),e.setXYZ(n+1+o*2,mi.x,mi.y,mi.z),t.setXYZ(n+1+o*2,0,0,0);let u=s+Math.PI/4,d=i*.2;mi.copy(r).addScaledVector(fi,Math.cos(u)*d).addScaledVector(pi,Math.sin(u)*d),e.setXYZ(n+2+o*2,mi.x,mi.y,mi.z),t.setXYZ(n+2+o*2,a.r*.25,a.g*.25,a.b*.25)}}function bi(e,t,n,r,i,a,o){for(let[s,c,l]of[[0,fi,pi],[6,pi,fi]]){let u=0;for(let d of[-1,1])for(let f of[-1,0,1]){mi.copy(r).addScaledVector(c,d*i).addScaledVector(l,f*a*(f?1.6:0));let p=+!f;e.setXYZ(n+s+u,mi.x,mi.y,mi.z),t.setXYZ(n+s+u,o.r*p,o.g*p,o.b*p),u++}}}function xi(e,t,n,r,i,a){let o=e.mesh.geometry.getAttribute(`position`),s=e.mesh.geometry.getAttribute(`color`);fi.set(1,0,0).applyQuaternion(i.quaternion),pi.set(0,1,0).applyQuaternion(i.quaternion);let c=vi(t.color),l=vi(t.light),u=(e,t,n)=>{let i=((r/ti(t.life,ei(e,n+1))+ei(e,n+2))%1+1)%1,a=ei(e,n+3)*Math.PI*2+i*.9,o=ti(t.radius,ei(e,n+4));return hi.set(Math.cos(a)*o,ti(t.height,i),Math.sin(a)*o),Math.sin(Math.PI*i)**1.2};for(let i=0;i<e.stars;i++){let e=u(i+a*97,t.sparks,0),d=.5+.5*Math.sin(r*t.sparks.twinkle+ei(i,9)*20)**2;gi.copy(c).lerp(l,ei(i,7)).multiplyScalar(n*e*d*t.sparks.glow),yi(o,s,i*si,hi,ti(t.sparks.size,ei(i,5))*(.8+.4*d),gi)}let d=t.pluses;for(let t=0;d&&t<e.pluses;t++){let r=u(t+a*53,d,20);gi.copy(c).lerp(l,ei(t,27)*.5).multiplyScalar(n*r*d.glow),bi(o,s,e.stars*si+t*li,hi,ti(d.size,ei(t,25)),d.width,gi)}o.needsUpdate=!0,s.needsUpdate=!0}function Si(e=Q.stance.samurai){let t=new H;t.name=`meditation-aura`,t.userData.spec={...Q.meditation,color:e.color,light:e.light};let n=new B(oi(e),$r(e.shadow));if(n.scale.setScalar(Q.meditation.circle.radius),n.position.y=Q.meditation.circle.lift,n.renderOrder=6,t.add(n,di(Q.meditation.sparks.count,0,e.shadow).mesh),e.rim){let n=new B(oi(e.rim),$r());n.scale.setScalar(Q.meditation.circle.radius),n.position.y=Q.meditation.circle.lift+.002,n.renderOrder=6,n.userData.strength=e.rim.strength,t.add(n)}return t.visible=!1,t}function Ci(e,t,n,r,i){if(e.visible=t>.005,!e.visible)return;let[a,o,s]=e.children;a.rotation.y=n*Q.meditation.circle.spin,a.scale.setScalar(Q.meditation.circle.radius*(.82+.18*t));let c=Q.meditation.circle.strength*t*(.86+.14*Math.sin(n*2.2));a.material.color.setScalar(c),s&&(s.rotation.y=a.rotation.y,s.scale.copy(a.scale),s.material.color.setScalar(c*s.userData.strength)),xi({mesh:o,stars:Q.meditation.sparks.count,pluses:0},e.userData.spec??Q.meditation,t,n,r,i)}function wi(){let e=new H;return e.name=`heal-aura`,e.add(di(Q.heal.sparks.count,Q.heal.pluses.count).mesh),e.visible=!1,e}function Ti(e,t,n,r,i){if(e.visible=t>.005,!e.visible)return;let a=e.children[0];xi({mesh:a,stars:Q.heal.sparks.count,pluses:Q.heal.pluses.count},Q.heal,t,n,r,i)}var $={emit:.6,leash:1.2,facing:.5,release:.15,rate:90,mobile:.7,ahead:.12,fallback:.45,height:.9,puff:{size:[.3,1.5],grow:.55,alpha:.42,young:.9,spread:.35,pull:.1,rise:.55,pace:[.94,1],buoy:1.5,stretch:.9},cool:.72,coolTime:1.25,burn:.32,drag:.06,splash:{puffs:14,embers:14,smoke:5,speed:[1.5,4.5],stop:.26},ember:{rate:32,life:[.3,.75],gravity:6,size:[.035,.06],spread:2.2},smoke:{after:.3,chance:.6,size:[.45,1.6],life:[.8,1.25],rise:1,alpha:.4},flare:{size:.55,alpha:.9},ignite:{puffs:7,size:[.25,.75],life:.2,speed:3},glow:{scale:2.8,min:1.6,alpha:.9,y:.08},cover:.85,max:640};function Ei(e){let t=e*2654435761+2654435769>>>0;return()=>{t=t+1831565813>>>0;let e=t;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}}var Di=(e,t)=>t[0]+(t[1]-t[0])*e(),Oi=e=>(e()+e()+e()-1.5)/1.5,ki=e=>{let t=Math.min(1,Math.max(0,e));return t*t*(3-2*t)},Ai=(e,t,n,r)=>(e.size=t,e.alpha=n,e.heat=r,e);function ji(e,t={size:0,alpha:0,heat:0}){let n=e.age;if(e.kind===0){let r=e.life>e.fade?1-Math.min(1,Math.max(0,(n-e.fade)/(e.life-e.fade))):1,i=e.stream?1+$.puff.young*(1-ki(n/.15)):1;return Ai(t,e.s0+(e.s1-e.s0)*ki(n/$.puff.grow),Math.min(1,e.alpha*i)*Math.min(1,n/.04+.25)*r,e.heat*(1-$.cool*ki(n/$.coolTime))*(1-.45*(1-r))*(1+.3*(i-1)/$.puff.young))}if(e.kind===1)return Ai(t,e.s0,e.alpha*(1-n/e.life),e.heat*(1-.5*n/e.life));if(e.kind===2)return Ai(t,e.s0,e.alpha,1);let r=n/e.life;return Ai(t,e.s0+(e.s1-e.s0)*ki(r),e.alpha*ki(r/.15)*(1-ki((r-.35)/.65)),e.heat*Math.max(0,1-n/.35))}var Mi=class{particles=[];streams=new Map;starts=[];density;constructor(e=1){this.density=e}track(e,t){let n=new Set;for(let t of e){if(t.kind!==`fire`)continue;let e=Math.hypot(t.velocity.x,t.velocity.z),r=this.streams.get(t.id);if(r){let e=(t.pos.x-r.ox)*r.dx+(t.pos.z-r.oz)*r.dz;e>r.head&&(r.advance+=e-r.head,r.head=e),r.life=t.life}else{if(e<1e-6)continue;let n=t.velocity.x/e,i=t.velocity.z/e,a=Math.max(0,ot.thrownLife-t.life);r={id:t.id,caster:t.owner,ox:t.pos.x-n*e*a,oz:t.pos.z-i*e*a,dx:n,dz:i,nx:-i,nz:n,speed:e,y:$.height,head:e*a,advance:0,life:t.life,time:a,dt:0,emitting:!0,started:!1,carry:0,emberCarry:0,alive:!0,hold:1,rng:Ei(t.id)},this.streams.set(t.id,r)}n.add(t.id)}for(let e of this.streams.values())e.alive&&!n.has(e.id)&&this.finish(e,t)}hold(e){let t=0;for(let n of this.streams.values())n.caster===e&&(t=Math.max(t,n.hold));return t}update(e,t){if(!(e>0))return;for(let n of this.streams.values())n.dt=n.alive?Math.min(n.advance/n.speed,e*2):e,n.advance=0,n.time+=n.dt,n.emitting&&this.emit(n,t(n.caster)),n.hold=n.emitting?1:Math.max(0,n.hold-e/$.release);this.step(e);let n=new Set;for(let e of this.particles)e.stream&&n.add(e.stream);for(let[e,t]of this.streams)!t.alive&&t.hold<=0&&!n.has(t)&&this.streams.delete(e)}add(e){this.particles.length<$.max&&this.particles.push(e)}puff(e,t,n,r,i){let a=e.rng,o=$.puff;this.add({kind:0,x:t,y:n,z:r,vx:0,vy:0,vz:0,age:i,life:1/0,fade:1/0,s0:o.size[0]*(.8+.4*a()),s1:o.size[1]*(.8+.4*a()),heat:.92+.08*a(),alpha:o.alpha*(.75+.5*a()),seed:a(),rot:a()*Math.PI*2,spin:(a()-.5)*4,stream:e,lane:Oi(a),lift:Oi(a),pace:Di(a,o.pace),smoked:!1})}free(e,t,n,r,i,a,o,s,c,l,u,d,f){this.add({kind:e,x:n,y:r,z:i,vx:a,vy:o,vz:s,age:0,life:c,fade:e===0?0:c,s0:l,s1:u,heat:d,alpha:f,seed:t(),rot:t()*Math.PI*2,spin:(t()-.5)*(e===3?1.2:5),lane:0,lift:0,pace:0,smoked:!0})}smoke(e,t,n,r,i=.6){let a=$.smoke;this.free(3,e,t,n,r,(e()-.5)*.6,a.rise*.5,(e()-.5)*.6,Di(e,a.life),a.size[0],a.size[1]*(.8+.4*e()),i,a.alpha*(.7+.6*e()))}ember(e,t,n,r,i,a){let o=e.rng,s=$.ember,c=(o()-.5)*2*a;this.free(1,o,t,n,r,e.dx*i+e.nx*c,(o()-.25)*a,e.dz*i+e.nz*c,Di(o,s.life),Di(o,s.size),0,.85+.15*o(),1)}emit(e,t){let n=e.rng,r=t?t.x+e.dx*$.ahead:e.ox-e.dx*$.fallback,i=t?t.z+e.dz*$.ahead:e.oz-e.dz*$.fallback,a=t?t.y:$.height;if(!e.started){e.started=!0,e.y=a,this.starts.push({caster:e.caster,x:r,z:i}),this.starts.length>16&&this.starts.shift();let t=(r-e.ox)*e.dx+(i-e.oz)*e.dz,o=(r-e.ox)*e.nx+(i-e.oz)*e.nz;for(let n=e.head;n>t;n-=.18){let r=(n-t)/Math.max(1e-6,e.head-t);this.puff(e,e.ox+e.dx*n+e.nx*o*(1-r),a,e.oz+e.dz*n+e.nz*o*(1-r),(n-t)/e.speed)}let s=$.ignite;for(let t=0;t<s.puffs;t++){let t=n()*Math.PI*2,o=s.speed*(.4+.6*n());this.free(0,n,r,a,i,e.dx*o+e.nx*Math.cos(t)*o*.5,Math.sin(t)*o*.5,e.dz*o+e.nz*Math.cos(t)*o*.5,s.life*(.7+.6*n()),s.size[0],s.size[1],1,$.puff.alpha)}}if(t){let n=Math.abs((r-e.ox)*e.nx+(i-e.oz)*e.nz),a=t.fx*e.dx+t.fz*e.dz;if(n>$.leash||a<$.facing){e.emitting=!1;return}}if(e.time-e.dt>=$.emit){e.emitting=!1;return}let o=Math.max(0,Math.min(e.dt,$.emit-(e.time-e.dt)));e.carry+=$.rate*this.density*o;let s=Math.floor(e.carry);e.carry-=s;for(let t=0;t<s;t++){let c=(t+n())/s*o,l=e.speed*c;this.puff(e,r+e.dx*l,a,i+e.dz*l,c)}for(e.emberCarry+=$.ember.rate*this.density*o;e.emberCarry>=1;e.emberCarry--)this.ember(e,r,a,i,e.speed*(.55+.4*n()),$.ember.spread);e.dt>0&&this.free(2,n,r,a,i,0,0,0,Math.max(e.dt,1/30)*1.01,$.flare.size*(.85+.3*n()),0,1,$.flare.alpha)}finish(e,t){if(e.alive=!1,e.emitting=!1,!(t&&e.life>.1)){for(let t of this.particles)t.stream===e&&(t.fade=t.age,t.life=t.age+$.burn*(.6+.4*e.rng()));return}e.end=e.head+e.speed/60;let n=e.rng,r=$.splash,i=e.ox+e.dx*e.end,a=e.oz+e.dz*e.end,o=e.y+.1;for(let t=0;t<r.puffs;t++){let t=n()*Math.PI*2,s=Di(n,r.speed);this.free(0,n,i,o,a,e.nx*Math.cos(t)*s-e.dx*n()*2,Math.abs(Math.sin(t))*s*.8+.4,e.nz*Math.cos(t)*s-e.dz*n()*2,.3+.25*n(),.35,1.15*(.8+.4*n()),.85+.15*n(),$.puff.alpha)}for(let t=0;t<r.embers;t++){let t=n()*Math.PI*2,s=Di(n,r.speed)*1.4;this.free(1,n,i,o,a,e.nx*Math.cos(t)*s-e.dx*n()*3,Math.abs(Math.sin(t))*s+1,e.nz*Math.cos(t)*s-e.dz*n()*3,Di(n,$.ember.life),Di(n,$.ember.size),0,.9,1)}for(let e=0;e<r.smoke;e++)this.smoke(n,i+(n()-.5)*.6,o+.2,a+(n()-.5)*.6,.8)}step(e){let t=this.particles;for(let n=t.length-1;n>=0;n--){let r=t[n],i=r.stream,a=i&&i.alive?i.dt:e;if(r.age+=a,r.age>=r.life){t[n]=t[t.length-1],t.pop();continue}i?this.ride(r,i,a):this.fly(r,a)}}ride(e,t,n){let r=(e.x-t.ox)*t.dx+(e.z-t.oz)*t.dz,i=(e.x-t.ox)*t.nx+(e.z-t.oz)*t.nz;t.alive?r=Math.min(r+t.speed*e.pace*n,t.head):t.end===void 0?(e.pace*=Math.exp(-n/$.drag),r+=t.speed*e.pace*n):(r+=t.speed*e.pace*n,r>=t.end&&(r=t.end,this.scatter(e,t)));let a=$.puff,o=a.spread*Math.min(e.age,a.grow)+.02,s=1-Math.exp(-n/a.pull);i+=(e.lane*o-i)*s,e.y+=(t.y+e.lift*o*.6+a.rise*e.age*e.age-e.y)*s,e.x=t.ox+t.dx*r+t.nx*i,e.z=t.oz+t.dz*r+t.nz*i,!e.smoked&&e.age>$.smoke.after&&(e.smoked=!0,t.rng()<$.smoke.chance&&this.smoke(t.rng,e.x,e.y+.15,e.z))}scatter(e,t){let n=t.rng,r=n()*Math.PI*2,i=1+2.5*n();e.stream=void 0,e.vx=t.nx*Math.cos(r)*i-t.dx*n()*1.5,e.vz=t.nz*Math.cos(r)*i-t.dz*n()*1.5,e.vy=Math.abs(Math.sin(r))*i*.7+.5,e.fade=e.age,e.life=e.age+$.splash.stop*(.6+.4*n()),e.s1*=1.3}fly(e,t){if(e.kind===2)return;e.kind===1?e.vy-=$.ember.gravity*t:e.kind===3?e.vy+=($.smoke.rise-e.vy)*(1-Math.exp(-t/.4)):e.vy+=$.puff.buoy*t;let n=Math.exp(-t*(e.kind===1?.6:e.kind===3?1.6:3.5));e.vx*=n,e.vz*=n,e.x+=e.vx*t,e.y+=e.vy*t,e.z+=e.vz*t,e.kind===1&&e.y<.02&&(e.y=.02,e.vy*=-.3,e.vx*=.5,e.vz*=.5)}};function Ni(e=64){let t=Ei(7),n=new Uint8Array(e*e*4),r=new Float32Array(e*e);for(let[n,i]of[[4,.5],[8,.25],[16,.15],[32,.1]]){let a=Float32Array.from({length:n*n},()=>t()),o=(e,t)=>a[(t+n)%n*n+(e+n)%n];for(let t=0;t<e;t++)for(let a=0;a<e;a++){let s=a/e*n,c=t/e*n,l=Math.floor(s),u=Math.floor(c),d=ki(s-l),f=ki(c-u),p=o(l,u)+(o(l+1,u)-o(l,u))*d,m=o(l,u+1)+(o(l+1,u+1)-o(l,u+1))*d;r[t*e+a]+=(p+(m-p)*f)*i}}let i=1/0,a=-1/0;for(let e of r)i=Math.min(i,e),a=Math.max(a,e);for(let t=0;t<e*e;t++){let e=Math.round((r[t]-i)/(a-i)*255);n.set([e,e,e,255],t*4)}let o=new b(n,e,e,te);return o.wrapS=o.wrapT=ue,o.magFilter=o.minFilter=Se,o.needsUpdate=!0,o}var Pi=`
attribute vec3 iPos;
attribute vec4 iA;
attribute vec2 iB;
attribute vec4 iC;
varying vec2 vUv;
varying vec4 vA;
varying float vKind;
varying float vY;
void main() {
  vUv = position.xy * 2.0;
  vA = iA; vKind = iB.y;
  // 向き iC.xyz（筋の向き・飛ぶ向き）が画面の上で見える長さだけ、その向きへ伸ばす（正面から見ると丸いまま）。向きが無ければ iB.x で回す。
  vec3 dv = mat3(viewMatrix) * iC.xyz;
  float k = iC.w * length(dv.xy);
  float angle = k > 0.001 ? atan(dv.y, dv.x) + 0.2 * sin(iB.x) : iB.x;
  float c = cos(angle), s = sin(angle);
  vec2 p = position.xy * vec2(1.0 + k, 1.0);
  vec2 q = vec2(c * p.x - s * p.y, s * p.x + c * p.y) * iA.x;
#ifdef FLAT
  vec4 mv = viewMatrix * vec4(iPos.x + q.x, iPos.y, iPos.z - q.y, 1.0);   // z は逆向き（表を上へ向ける。裏は描かない）
  vY = 1.0;
#else
  vec4 mv = viewMatrix * vec4(iPos, 1.0);
  mv.xy += q;
  // 板の角の高さ（カメラの右と上の向きの高さの成分から）。床の近くを薄くして、床で板が切れて見えないように。
  vY = iPos.y + q.x * viewMatrix[1][0] + q.y * viewMatrix[1][1];
#endif
  gl_Position = projectionMatrix * mv;
}`,Fi=`
uniform sampler2D uNoise;
uniform float uTime;
uniform float uCover;
varying vec2 vUv;
varying vec4 vA;
varying float vKind;
varying float vY;

vec3 heatRamp(float h) {
  h = clamp(h, 0.0, 1.25) * 4.0;
  vec3 c0 = vec3(0.03, 0.003, 0.0), c1 = vec3(0.3, 0.04, 0.0), c2 = vec3(0.5, 0.1, 0.005), c3 = vec3(0.7, 0.24, 0.02), c4 = vec3(1.05, 0.5, 0.08), c5 = vec3(1.7, 1.05, 0.38);
  return h < 1.0 ? mix(c0, c1, h) : h < 2.0 ? mix(c1, c2, h - 1.0) : h < 3.0 ? mix(c2, c3, h - 2.0) : h < 4.0 ? mix(c3, c4, h - 3.0) : mix(c4, c5, h - 4.0);
}
void main() {
  float r = length(vUv);
  if (r > 1.0) discard;
  float heat = vA.y, alpha = vA.z * smoothstep(0.0, 0.3, vY), seed = vA.w;
  vec3 col; float a;
  if (vKind > 1.5) {            // 手のひらの光
    a = exp(-r * r * 4.0) * alpha; col = heatRamp(1.25) * 1.2;
  } else if (vKind > 0.5) {     // 火の粉
    a = (1.0 - smoothstep(0.15, 1.0, r)) * alpha; col = heatRamp(0.75 + 0.25 * heat) * 1.6;
  } else {                      // 炎の粒：まん中ほど濃く、まだらで ふちが舌のように欠ける。濃い所ほど熱い色
    vec2 q = vUv * 0.5 + vec2(seed * 3.7, seed * 1.9);
    float n = texture2D(uNoise, q + vec2(0.0, -uTime * 1.3)).r * 0.6 + texture2D(uNoise, q * 2.2 + vec2(uTime * 0.7, seed)).r * 0.4;
    float d = (1.0 - r) * 1.5 + (n - 0.5) * 1.3;
    col = heatRamp(heat * (0.35 + 0.9 * clamp(d, 0.0, 1.2)));
    a = smoothstep(0.05, 0.55, d) * alpha;
  }
  // 色は足し、炎の粒は うしろを uCover の割合で隠す（足すだけだと 昼の明るい床の上で白っぽく薄まる）。火の粉と手のひらの光は足すだけ。
  gl_FragColor = vec4(col * a, vKind < 0.5 ? a * uCover : 0.0);
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
}`,Ii=`
uniform sampler2D uNoise;
uniform float uTime;
varying vec2 vUv;
varying vec4 vA;
varying float vY;
void main() {
  float r = length(vUv);
  if (r > 1.0) discard;
  vec2 q = vUv * 0.35 + vec2(vA.w * 5.1, vA.w * 2.3);
  float n = texture2D(uNoise, q + vec2(uTime * 0.12, -uTime * 0.25)).r * 0.6 + texture2D(uNoise, q * 2.0 - vec2(0.0, uTime * 0.4)).r * 0.4;
  float body = 1.0 - smoothstep(0.3, 1.0, r * (0.7 + 0.6 * n));
  vec3 col = mix(vec3(0.05, 0.045, 0.04), vec3(0.18, 0.16, 0.15), n) + vA.y * vec3(0.6, 0.18, 0.04);
  gl_FragColor = vec4(col, body * vA.z * smoothstep(0.0, 0.3, vY));
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
}`,Li=`
varying vec2 vUv;
varying vec4 vA;
void main() {
  float r = length(vUv);
  if (r > 1.0) discard;
  // 床の色 × (1 ＋ 明かり)（材質の blendSrc＝床の色）。明るい砂は橙に、暗い床は少しだけ照らされる。
  gl_FragColor = vec4(vec3(1.0, 0.45, 0.12) * (0.6 + 0.4 * vA.y) * exp(-r * r * 3.0) * (1.0 - smoothstep(0.8, 1.0, r)) * vA.z, 1.0);
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
}`,Ri=class{mesh;at;a;b;c;count=0;max;constructor(e,t,n){this.max=e;let r=new E;r.setIndex([0,1,2,0,2,3]),r.setAttribute(`position`,new I(new Float32Array([-.5,-.5,0,.5,-.5,0,.5,.5,0,-.5,.5,0]),3));let i=t=>new F(new Float32Array(e*t),t).setUsage(y);r.setAttribute(`iPos`,this.at=i(3)),r.setAttribute(`iA`,this.a=i(4)),r.setAttribute(`iB`,this.b=i(2)),r.setAttribute(`iC`,this.c=i(4)),r.instanceCount=0,this.mesh=new B(r,t),this.mesh.frustumCulled=!1,this.mesh.renderOrder=n,this.mesh.matrixAutoUpdate=!1,this.mesh.visible=!1}put(e,t,n,r,i,a,o,s,c,l=0,u=0,d=0,f=0){if(this.count>=this.max)return;let p=this.count++,m=this.at.array,h=this.a.array,g=this.b.array,_=this.c.array;m[p*3]=e,m[p*3+1]=t,m[p*3+2]=n,h[p*4]=r,h[p*4+1]=i,h[p*4+2]=a,h[p*4+3]=o,g[p*2]=s,g[p*2+1]=c,_[p*4]=l,_[p*4+1]=u,_[p*4+2]=d,_[p*4+3]=f}commit(){this.mesh.geometry.instanceCount=this.count,this.mesh.visible=this.count>0;for(let e of[this.at,this.a,this.b,this.c])e.clearUpdateRanges(),e.addUpdateRange(0,Math.max(1,this.count)*e.itemSize),e.needsUpdate=!0}},zi=class{root=new H;fire;smoke;glow;timed;look={size:0,alpha:0,heat:0};constructor(){let e=Ni(),t=(t,r,i=!1)=>new n({uniforms:{uNoise:{value:e},uTime:{value:0},uCover:{value:$.cover}},vertexShader:Pi,fragmentShader:t,defines:i?{FLAT:``}:{},transparent:!0,depthWrite:!1,blending:r}),r=t(Fi,5),i=t(Ii,1),a=t(Li,5,!0);r.blendSrc=201,r.blendDst=205,a.blendSrc=208,a.blendDst=201,this.timed=[r,i],this.smoke=new Ri($.max/2,i,30),this.glow=new Ri($.max/2,a,31),this.fire=new Ri($.max,r,32),this.root.name=`flame-vfx`,this.root.matrixAutoUpdate=!1,this.root.add(this.smoke.mesh,this.glow.mesh,this.fire.mesh)}warmup(){return[this.smoke,this.glow,this.fire].map(e=>{let t=new B(e.mesh.geometry,e.mesh.material);return t.frustumCulled=!1,t})}write(e,t){for(let e of this.timed)e.uniforms.uTime.value=t;this.fire.count=this.smoke.count=this.glow.count=0;let n=$.glow,r=this.look;for(let t of e.particles){let{size:e,alpha:i,heat:a}=ji(t,r);if(i<=.002)continue;let o=t.rot+t.spin*t.age;if(t.kind===3){this.smoke.put(t.x,t.y,t.z,e,a,i,t.seed,o,3);continue}let s=t.stream,c=Math.hypot(t.vx,t.vy,t.vz);s?this.fire.put(t.x,t.y,t.z,e,a,i,t.seed,o,0,s.dx,0,s.dz,$.puff.stretch):c>.01?this.fire.put(t.x,t.y,t.z,e,a,i,t.seed,o,t.kind,t.vx/c,t.vy/c,t.vz/c,t.kind===1?Math.min(3,c*.35):Math.min(.8,c*.12)):this.fire.put(t.x,t.y,t.z,e,a,i,t.seed,o,t.kind),(t.kind===2||t.kind===0&&t.seed<.5)&&this.glow.put(t.x,n.y,t.z,Math.max(n.min,e*n.scale),a,i*n.alpha*Math.min(1,a*1.4),0,0,0)}this.fire.commit(),this.smoke.commit(),this.glow.commit()}},Bi={radius:.82,width:.1,glowOut:.16,glowIn:.07,wall:{height:.38,alpha:.8},ally:`#3b9dff`,enemy:`#ff3b3b`,opacity:.95,pulse:{speed:.7,depth:.22},lift:.035,capacity:16};function Vi(e,t,n){return n?null:e===t?`ally`:`enemy`}function Hi(e){let{opacity:t,pulse:n}=Bi;return t*(1-n.depth*.5*(1+Math.sin(e*Math.PI*2*n.speed)))}function Ui(){let{radius:e,width:t,glowOut:n,glowIn:r}=Bi;return[[e-t/2-r,0],[e-t/2,.8],[e,1],[e+t/2,.8],[e+t/2+n*.35,.32],[e+t/2+n,0]]}var Wi;function Gi(){let{height:e,alpha:t}=Bi.wall;return[[0,t],[e*.35,t*.45],[e,0]]}function Ki(){if(Wi)return Wi;let e=Ui(),t=Gi(),n=[],r=[],i=[],a=[],o=[],s=e[e.length-1][0],c=(e,t)=>{let c=n.length/3;for(let o=0;o<=64;o++){let c=o/64*Math.PI*2,l=Math.cos(c),u=Math.sin(c);for(let o=0;o<e;o++){let e=t(l,u,o);n.push(...e.at),r.push(...e.normal),i.push(.5+e.at[0]/s/2,.5+e.at[1]/s/2),a.push(1,1,1,e.alpha)}}for(let t=0;t<64;t++)for(let n=0;n<e-1;n++){let r=c+t*e+n,i=r+e;o.push(r,i,r+1,r+1,i,i+1)}};return c(e.length,(t,n,r)=>({at:[t*e[r][0],n*e[r][0],0],normal:[0,0,1],alpha:e[r][1]})),c(t.length,(e,n,r)=>({at:[e*Bi.radius,n*Bi.radius,t[r][0]],normal:[e,n,0],alpha:t[r][1]})),Wi=new U,Wi.setAttribute(`position`,new p(n,3)),Wi.setAttribute(`normal`,new p(r,3)),Wi.setAttribute(`uv`,new p(i,2)),Wi.setAttribute(`color`,new p(a,4)),Wi.setIndex(o),Wi}var qi={ally:new a(Bi.ally),enemy:new a(Bi.enemy)};function Ji(t=Bi.capacity){let n=new z({vertexColors:!0,transparent:!0,depthWrite:!1,side:2,opacity:Bi.opacity}),r=new e(Ki(),n,t);return r.name=`team-rings`,r.instanceColor=new F(new Float32Array(t*3).fill(1),3),r.count=0,r.frustumCulled=!1,r}var Yi=new V;function Xi(e,t,n){let r=Math.min(t.length,e.instanceMatrix.count);for(let n=0;n<r;n++){let r=t[n];e.setMatrixAt(n,Yi.makeRotationX(-Math.PI/2).setPosition(r.x,Bi.lift,r.z)),e.setColorAt(n,qi[r.kind])}e.count=r,e.instanceMatrix.needsUpdate=!0,e.instanceColor&&(e.instanceColor.needsUpdate=!0),e.material.opacity=Hi(n)}var Zi={fan:.15,bandIdle:.28,bandArmed:.62,bandPulse:.3,body:.12,bandLight:.45,bodyColor:`#e8eef6`},Qi={royal:{vivid:0,lightness:.5,bandVivid:0,fan:1,band:1,body:1,flash:`light`},colosseum:{vivid:0,lightness:.5,bandVivid:0,fan:1,band:1,body:1,flash:`light`},school:{vivid:.6,lightness:.64,bandVivid:.2,fan:5,band:1.8,body:3.5,flash:`deep`}},$i=new a(`#ffffff`);function ea(e,t,n=.5){let r=e.getHSL({h:0,s:0,l:0},o);return e.clone().setHSL(r.h,r.s+(1-r.s)*t,r.l+(n-r.l)*t,o)}function ta(e,t){let n=new a(e);if(t.vivid<=0)return{fan:n,band:n.clone().lerp($i,Zi.bandLight),body:new a(Zi.bodyColor)};let r=ea(n,t.vivid,t.lightness);return{fan:r,band:ea(n,t.bandVivid,t.lightness),body:r.clone()}}function na(e,t,n,r){let i=Zi.bandIdle*e.band;return{fan:Math.min(1,Zi.fan*e.fan)*t,band:Math.min(1,n?Math.max(i,Zi.bandArmed+Zi.bandPulse*r):i)*t,body:Math.min(1,Zi.body*e.body)*t}}var ra={pad:.9,peak:1,decay:.22,hold:.7,pulse:.25,fadeOut:.35,lightWidth:1.35,bandHide:.3,burst:{time:.45,grow:2.6,width:.45},fanOpacity:.85,colors:{light:`#ffffff`,haloDark:`#ffcf4a`,haloBright:`#ff8c00`,ringDark:`#fff1b8`,ringBright:`#ff7a00`,fanDark:`#fff3c4`}};function ia(e){let t=ra.colors,n=e===`light`;return{light:new a(t.light),halo:new a(n?t.haloDark:t.haloBright),ring:new a(n?t.ringDark:t.ringBright),fan:new a(n?t.fanDark:t.haloBright),additive:n}}var aa={fan:1,glow:2,light:3,burst:4};function oa(e,t){let{peak:n,decay:r,hold:i,pulse:a}=ra,o=i*(1-a+a*t);return Math.min(1,o+(n-o)*Math.exp(-Math.max(0,e)/r))}function sa(e){return Math.min(1,Math.max(0,1-e/ra.bandHide))}function ca(e,t,n,r){e.burst>=0&&(e.burst=e.burst+n>ra.burst.time?-1:e.burst+n),t?(e.since=e.level>0&&e.since>=0?e.since+n:0,e.since===0&&(e.burst=0),e.level=oa(e.since,r)):(e.since=-1,e.level=Math.max(0,e.level-n/ra.fadeOut))}function la(e,t){let n=Math.min(1,Math.max(0,e/ra.burst.time)),r=1-(1-n)**2;return{scale:(t+ra.burst.grow*r)/t,opacity:(1-n)**1.5}}function ua(e,t,n,r=ra.pad){return pa([[Math.max(.05,e-r),0],[e-r*.4,.45],[e,.9],[(e+t)/2,1],[t,.9],[t+r*.4,.45],[t+r,0]],n)}function da(e,t,n){let r=(e+t)/2,i=(t-e)*ra.lightWidth/2,a=(t-e)/2;return pa([[r-i,0],[r-a,1],[r+a,1],[r+i,0]],n)}function fa(e,t){let n=ra.burst.width/2;return pa([[e-n,0],[e-n*.3,1],[e+n*.3,1],[e+n,0]],t)}function pa(e,t){let n=[],r=[],i=[],a=[],o=[],s=e[e.length-1][0];for(let o=0;o<=48;o++){let c=-t+2*t*o/48,l=Math.cos(c),u=Math.sin(c),d=Math.min(1,Math.min(o,48-o)/(48*.1));for(let[t,o]of e)n.push(l*t,u*t,0),r.push(0,0,1),i.push(.5+l*t/s/2,.5+u*t/s/2),a.push(1,1,1,o*d)}let c=e.length;for(let e=0;e<48;e++)for(let t=0;t<c-1;t++){let n=e*c+t,r=n+c;o.push(n,r,n+1,n+1,r,r+1)}let l=new U;return l.setAttribute(`position`,new p(n,3)),l.setAttribute(`normal`,new p(r,3)),l.setAttribute(`uv`,new p(i,2)),l.setAttribute(`color`,new p(a,4)),l.setIndex(o),l}function ma(){return new z({vertexColors:!0,transparent:!0,depthWrite:!1,side:2,blending:2,opacity:0})}var ha=.6+W.puckRadius,ga={ally:new a(`#a9f878`),enemy:new a(`#ff7869`)},_a={radius:1.45,spread:72*Math.PI/180,thickness:.15,lateral:.065,centreY:1.05,rootFade:.03},va=[0,Math.PI/2,Math.PI/4,-Math.PI/4],ya=[ze,Re,Le,Pe],ba=[new a(`#ffc66e`),new a(`#ff7762`)];function xa(e){let t=[],n=[],r=(e,r)=>{t.push(e.x,e.y,e.z),n.push(r,r,r)};for(let t=0;t<e.length-1;t++){let n=e[t],i=e[t+1],a=n.centre.clone().addScaledVector(n.across,-n.half),o=n.centre.clone().addScaledVector(n.across,n.half),s=i.centre.clone().addScaledVector(i.across,-i.half),c=i.centre.clone().addScaledVector(i.across,i.half);r(a,0),r(n.centre,n.glow),r(i.centre,i.glow),r(a,0),r(i.centre,i.glow),r(s,0),r(o,0),r(i.centre,i.glow),r(n.centre,n.glow),r(o,0),r(c,0),r(i.centre,i.glow)}let i=new U;return i.setAttribute(`position`,new p(t,3)),i.setAttribute(`color`,new p(n,3)),i}var Sa=[[-.95,0],[-.34,.5],[.08,1],[.5,.8],[1.05,0]];function Ca(e,t,n,r,i,a){let o=[],s=[],c=e=>{o.push(e.point.x,e.point.y,e.point.z),s.push(e.glow,e.glow,e.glow)};for(let o of[1,-1]){let s=[];for(let c=0;c<=40;c++){let l=c/40*2-1,u=l*t,d=Math.max(0,1-l*l),f=n*d**.55,p=.62+.38*d**.35,m=r*d**.5;s.push(Sa.map(([t,n])=>{let r=e+t*f,s=i(r*Math.sin(u),r*Math.cos(u),o*m*n);return{point:s,glow:n*p*a(s)}}))}for(let e=0;e<40;e++)for(let t=0;t<Sa.length-1;t++)c(s[e][t]),c(s[e][t+1]),c(s[e+1][t+1]),c(s[e][t]),c(s[e+1][t+1]),c(s[e+1][t])}let l=new U;return l.setAttribute(`position`,new p(o,3)),l.setAttribute(`color`,new p(s,3)),l}var wa=e=>new z({color:`#ffffff`,vertexColors:!0,transparent:!0,opacity:e,depthWrite:!1,side:2,blending:2}),Ta=.62;function Ea(){let e=_a,n=new H,r=e=>Math.max(0,Math.min(1,e)),i=e=>{let t=r(e);return t*t*(3-2*t)};for(let r of va){let a=Math.cos(r),o=Math.sin(r);n.add(new B(Ca(e.radius,e.spread,e.thickness,e.lateral,(n,r,i)=>new t(n*a-i*o,e.centreY+n*o+i*a,r),t=>i(t.y/e.rootFade)),wa(Ta)))}let a=new B(new h(.1,10,8),new z({color:`#ffffff`,transparent:!0,opacity:.55,depthWrite:!1,blending:2}));a.position.set(0,e.centreY,0),n.add(a);let o=[];for(let e=0;e<=10;e++){let n=1.1-e/10*3.4,a=i(r((1-Math.abs(n+.6)/2)/.5))*.6;o.push({centre:new t(0,.04,n),across:new t(1,0,0),half:.19*(.5+.5*a),glow:a})}return n.add(new B(xa(o),wa(.8))),n}var Da=new a(`#ffffff`),Oa={taper:.935,height:.4583,floorGap:.085,coreRadius:.59,coreThickness:.035,coreLift:.0015,bandRadius:.957,bandThickness:.075,bandAt:.648,glowInner:1.18,glowOuter:1.31,glowLift:.025,trailRadius:.59,trailCount:14,trailLift:.06},ka=e=>e.isMesh===!0&&[e.material].flat().some(e=>e.name.startsWith(`Yuru_Line`)),Aa=[`rift-arena`,`blender-harbour-city`,`terraced-valley`,`harbour-water`],ja=`EpicCity_TwilightSky`,Ma=class{canvas;mapId;renderer;ready;scene=new ve;camera=new C(60,1,.1,850);yaw=Math.PI/2;pitch=.58;gunPitch=.12;fighters=new Map;bench=[];viewing=0;avatar;setAvatar(e){this.avatar=e&&{id:e.id,look:{...e.look}}}footsteps=new Ue;steps=[];takeSteps(){let e=this.steps;return this.steps=[],e}takeFlames(){return this.flameSim.starts.splice(0)}get bookStyle(){return this.effects.bookStyle}setBook(e){this.effects.setBook(e)}avatarOf(e){return this.avatar&&e.id===this.avatar.id&&tt()===`human`?this.avatar.look:void 0}seatActions={ready:e=>!(e.role===`samurai`&&!wt())&&!(tt()===`human`&&!St(e.role))&&!(e.role===`samurai`&&Me(this.avatarOf(e),tt())===`grandpa`&&!_t())&&!(Ke(e.role,this.avatarOf(e),tt())&&!gt(e.role))&&!(t=>t&&!bt(t,e.role))(this.avatarOf(e)),look:e=>{let t=this.avatarOf(e);return t?$e(t):``},create:e=>this.createFighter(e),park:e=>{this.scene.remove(e.mesh,e.ring,e.shadow,e.heal,e.barrier),e.calm&&this.scene.remove(e.calm)},unpark:e=>{Object.assign(e,{healLevel:0,calmLevel:0,opacity:1}),this.scene.add(e.mesh,e.ring,e.shadow,e.heal,e.barrier),e.calm&&this.scene.add(e.calm)}};transient=new Map;puck=new H;puckTint=new a(He[0].color);puckParts=[];threatRing;teamRings=Ji();ringSpots=[];threatDisplay=Ne();reachFan;coreBand;bodyRing;coreGlow;coreLight;coreBurst;coreFlash={since:-1,level:0,burst:-1};coreOut=1;reachFanFlash;reachFanLevel=0;reachFanRole;reachLook=Qi.royal;corePulse=0;trail=[];target=new t;shake=new t;lastPhase=``;projection=new t;effects;effectShaders=new H;shadowElapsed=0;benchmarkMode=null;benchmarkSaved;setBenchmark(e){let t=this.benchmarkSaved,n=this.programKey();if(t){for(let e of t.hidden)e.visible=!0;this.benchmarkSaved=void 0}if(this.benchmarkMode=e,this.applyQuality(e?.quality?{...this.baseQuality,...e.quality}:this.baseQuality),e){let t={hidden:[]};if(e.hideScenery)for(let e of Aa){let n=this.scene.getObjectByName(e);n?.visible&&(n.visible=!1,t.hidden.push(n))}if(e.hideOutlines)for(let e of[...this.fighters.values(),...this.bench])e.mesh.traverse(e=>{ka(e)&&e.visible&&(e.visible=!1,t.hidden.push(e))});this.benchmarkSaved=t}else{for(let e of this.plainMaterials.values())e.dispose();this.plainMaterials.clear()}if(n!==this.programKey()){let t=this.renderer.getRenderTarget();this.renderer.setRenderTarget(e?.direct?null:this.effects.composer.readBuffer),this.renderer.compile(this.scene,this.camera),this.renderer.setRenderTarget(t)}}benchmarkOptions(){let e=this.baseQuality;return{baked:e.bakeMapLight&&this.bakes.size>0,mobile:this.mobileDevice,pixelRatio:e.pixelRatio,outlines:[...this.fighters.values()].some(e=>{let t=!1;return e.mesh.traverse(e=>{ka(e)&&(t=!0)}),t}),gtao:dr[this.mapId].pc.ambientOcclusion&&!e.ambientOcclusion,before:pr(this.mapId,this.mobileDevice)}}programKey(){return`${!!this.benchmarkMode?.direct}:${this.lamps.filter(e=>e.visible).length}:${this.mapMaterialKey()}:${this.skyMesh?.visible}:${this.fighterMaterialKey()}`}mapMeshes=[];lightMaterials=new Map;plainMaterials=new Map;mapMaterialKey(){let e=this.benchmarkMode;if(e?.plainMaterials)return`plain`;if(!this.quality.mapLight||e?.standardMaterials)return`standard`;let t=e?.mapPointLights??this.quality.mapPointLights,n=e?.mapPixelPoints??!0,r=this.quality.bakeMapLight&&this.bakes.size>0&&t===this.baseQuality.mapPointLights&&n;return`light:${t}:${n}:${this.quality.shadowSamples}:${r}`}applyMapMaterials(){let e=this.mapMaterialKey(),[,t,n,r,i]=e.split(`:`),a=r===`1`;for(let{mesh:r,original:o}of this.mapMeshes){let s=o=>e===`plain`?this.plainOf(o):e!==`standard`&&r!==this.water&&gr(o)?this.lightOf(o,Er(o,t===`true`,n===`true`),a,i===`true`?r:void 0):o;r.material=Array.isArray(o)?o.map(s):s(o)}}lightOf(e,t,n,r){let i=r&&this.bakes.get(r),a=`${e.uuid}:${t}:${n}${i?`:${r.uuid}`:``}`,o=this.lightMaterials.get(a);return o||this.lightMaterials.set(a,o=br(e,this.scene.environmentIntensity,{points:t,shadowOnce:n},i)),o}makeEnvironment(){let e=new En,t=new ht(this.renderer);this.scene.environment=t.fromScene(e,.06).texture,e.dispose(),t.dispose()}bakes=new Map;bakeMs=0;bakeMap(){let e=this.quality;if(!e.mapLight||!e.bakeMapLight)return;let t=performance.now(),n=Or(this.scene,this.renderer.shadowMap.enabled);if(!n)return;let r=new Map(this.culls.map(e=>[e.mesh,e])),i=new Map;for(let{mesh:e}of this.mapMeshes)i.set(e.geometry,(i.get(e.geometry)??0)+1);for(let{mesh:t,original:a}of this.mapMeshes){if(t===this.water||Array.isArray(a)||!gr(a)||this.bakes.has(t))continue;let o=a,s=t.isInstancedMesh===!0,c=r.get(t)?.original,l=s?c?c.length/16:t.count:1,u=t.geometry.getAttribute(`position`).count*l*(o.side===2?2:1);if(Math.ceil(u/Dr.width)>this.renderer.capabilities.maxTextureSize)continue;let d={environment:yr(o,this.scene.environmentIntensity),metal:o.metalness,points:Er(o,e.mapPointLights,!0)===`vertex`},f=()=>jr(t,n,d,o.side===2,o.side===1,c),p=f();if(s){if((i.get(t.geometry)??0)>1){let e=new U,n=t.geometry;for(let[t,r]of Object.entries(n.attributes))e.setAttribute(t,r);e.setIndex(n.index);for(let t of n.groups)e.addGroup(t.start,t.count,t.materialIndex);e.boundingSphere=n.boundingSphere,e.boundingBox=n.boundingBox,t.geometry=e}let e=new F(Float32Array.from({length:p.count},(e,t)=>t),1);e.setUsage(y),t.geometry.setAttribute(`mapLightInstance`,e)}this.bakes.set(t,{texture:Nr(p),width:Dr.width,vertices:p.vertices,texels:p.texels,redo:f})}this.bakeMs=performance.now()-t}rebake(){for(let e of this.bakes.values())e.texture.image.data=Mr(e.redo(),e.width).data,e.texture.needsUpdate=!0}bakeReport(){let e=0,t=0,n=0;for(let[r,i]of this.bakes)e+=i.texture.image.width*i.texture.image.height,r.isInstancedMesh&&t++,i.texels===2&&n++;return{meshes:this.bakes.size,instanced:t,doubleSided:n,texels:e,megabytes:+(e*8/1e6).toFixed(1),milliseconds:Math.round(this.bakeMs)}}fighterLightMaterials=new Map;fighterMaterialKey(){let e=this.quality;return`${e.fighterLight?`light:${e.mapPointLights}:${e.shadowSamples}:${e.fighterKeepMetal}`:`standard`}:${e.fadeWhenNeeded}`}applyFighterMaterials(){for(let e of[...this.fighters.values(),...this.bench])this.dressFighter(e)}dressFighter(e){let t=this.quality,n=new Set;for(let r of e.parts){let i=e=>e.isMeshStandardMaterial===!0,a=n=>t.fighterLight&&i(n)&&!(t.fighterKeepMetal&&wr(n,e.role))?this.fighterLightOf(n,t.mapPointLights,t.shadowSamples===1):n;r.mesh.material=Array.isArray(r.original)?r.original.map(a):a(r.original);for(let e of[r.mesh.material].flat())n.add(e)}e.fadeMaterials=[...n]}fighterLightOf(e,t,n){let r=`${e.uuid}:${t}:${n}`,i=this.fighterLightMaterials.get(r);return i||this.fighterLightMaterials.set(r,i=xr(e,this.scene.environmentIntensity,{points:t?`vertex`:`none`,shadowOnce:n})),i}plainOf(e){let t=e;if(!t.isMeshStandardMaterial)return e;let n=this.plainMaterials.get(e);if(!n){let r=t.color.clone();t.emissive&&t.emissiveIntensity>0&&r.add(t.emissive.clone().multiplyScalar(t.emissiveIntensity)),n=new z({color:r,map:t.map,vertexColors:t.vertexColors,side:t.side,transparent:t.transparent,opacity:t.opacity,alphaTest:t.alphaTest,alphaMap:t.alphaMap,depthWrite:t.depthWrite,depthTest:t.depthTest,fog:t.fog}),this.plainMaterials.set(e,n)}return n}async prepareMapShaders(){let e=this.renderer.getRenderTarget();this.renderer.setRenderTarget(this.effects.composer.readBuffer);let t;try{t=Promise.all(Aa.map(e=>this.scene.getObjectByName(e)).filter(e=>!!e).map(e=>this.renderer.compileAsync(e,this.camera,this.scene)))}finally{this.renderer.setRenderTarget(e)}await t}skyMesh;skyCube;skyColor=new a(`#203d61`);cacheSky(e){this.skyMesh&&e&&!this.skyCube&&(this.skyCube=new pt(e,{type:g,generateMipmaps:!1,minFilter:Se,magFilter:Se,depthBuffer:!1}),this.drawSkyCube())}drawSkyCube(){let e=this.skyMesh,t=this.skyCube;if(!e||!t)return;let n=e.parent,r=new ve,i=e.visible;r.add(e),e.visible=!0,new c(1,1e3,t).update(this.renderer,r),e.visible=i,n.add(e)}applySky(){let e=this.skyMesh;if(!e)return;let t=this.benchmarkMode,n=!!t?.hideSky,r=!!this.skyCube&&this.quality.skyCube>0&&!t?.liveSky;e.visible=!n&&!r,this.scene.background=r&&!n?this.skyCube.texture:this.skyColor}culls=[];cullShapes(e){if(!this.culls.length)return;let t=this.renderer.shadowMap.autoUpdate||this.renderer.shadowMap.needsUpdate,n=this.quality.cullBuildings&&this.quality.shadow===`once`&&!this.benchmarkMode?.drawAllBuildings&&!t,r=this.benchmarkMode?.halfShapes?e=>e%2==0:void 0,i=n?Lr(e):void 0;if(!i&&!r){if(!this.cullsFull){for(let e of this.culls)e.showAll();this.cullsFull=!0}return}this.cullsFull=!1;for(let e of this.culls)e.show(e.pick(i,r))}cullsFull=!0;quality;baseQuality;applyQuality(e){if(e!==this.quality){this.quality=e;let t=Math.min(devicePixelRatio,e.pixelRatio);this.renderer.getPixelRatio()!==t&&(this.renderer.setPixelRatio(t),this.resize()),this.renderer.shadowMap.autoUpdate=e.shadow===`every`,this.shadowBaked=!1,this.shadowElapsed=0,this.renderer.shadowMap.needsUpdate=!0,this.puckDisc.castShadow=e.movingShadows,this.effects.setBloom(e.bloom);for(let t of this.lamps)t.visible=e.lampLights;this.effects.setAmbientOcclusion(e.ambientOcclusion),this.effects.setSharpen(e.sharpen),this.effects.setAntialias(e.antialias)}this.applyMapMaterials(),this.applySky(),this.applyFighterMaterials()}lamps=[];puckDisc;shadowBaked=!1;sceneryReady=!1;viewportWidth=1;viewportHeight=1;water;mobileDevice=/Android|iPhone|iPad|iPod/i.test(navigator.userAgent)||navigator.platform===`MacIntel`&&navigator.maxTouchPoints>1;flameSim=new Mi(this.mobileDevice?$.mobile:1);flameView=new zi;flameAt=new t;constructor(e,t=`royal`){this.canvas=e,this.mapId=t,this.reachLook=Qi[t];let n=ft(t),r=n.shape===`circle`;this.renderer=new mt({canvas:e,antialias:!this.mobileDevice,alpha:!1,powerPreference:`high-performance`}),e.addEventListener(`webglcontextrestored`,()=>{this.makeEnvironment(),this.drawSkyCube(),this.rebake()}),this.baseQuality=this.quality=fr(t,this.mobileDevice),this.renderer.setPixelRatio(Math.min(devicePixelRatio,this.quality.pixelRatio)),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.autoUpdate=this.quality.shadow===`every`,this.renderer.shadowMap.needsUpdate=!0,this.renderer.shadowMap.type=1,this.renderer.outputColorSpace=o,this.renderer.toneMapping=4,this.scene.add(this.flameView.root);let a=wn[t];this.renderer.toneMappingExposure=a.exposure,this.skyColor.set(a.background),this.scene.background=this.skyColor,this.scene.fog=new N(a.fog.color,a.fog.density),this.scene.add(new P(a.hemisphere.sky,a.hemisphere.ground,a.hemisphere.intensity));let s=new m(a.sun.color,a.sun.intensity);s.position.set(-28,47,-38),s.castShadow=!0,s.shadow.mapSize.set(2048,2048),Object.assign(s.shadow.camera,{left:-n.width/2-24,right:n.width/2+24,top:n.depth/2+24.5,bottom:-n.depth/2-24.5,near:1,far:160}),r||Object.assign(s.shadow.camera,{left:-W.width/2-31,right:W.width/2+31,top:W.depth/2+31.5,bottom:-W.depth/2-31.5}),s.shadow.bias=-3e-4,s.shadow.normalBias=.025,s.shadow.radius=2,this.scene.add(s);let c=new m(a.fill.color,a.fill.intensity);c.position.set(-15,15,35),this.scene.add(c),this.makeEnvironment(),this.scene.environmentIntensity=a.environment,this.ready=Promise.all([t===`school`?Sn(this.scene):r?$t(this.scene):Kt(this.scene),Ct(),tt()===`human`?xt():void 0,tt()===`human`?yt():void 0,tt()===`human`?vt():void 0]).then(()=>{this.water=this.scene.getObjectByName(`harbour-water`);for(let e of Aa){let t=this.scene.getObjectByName(e);t&&(t.updateWorldMatrix(!0,!0),t.traverse(e=>{e.matrixAutoUpdate=!1,e.matrixWorldAutoUpdate=!1}))}this.scene.traverse(e=>{e.name===`city-lamp-light`&&e.isPointLight&&this.lamps.push(e)});for(let e of this.lamps)e.visible=this.quality.lampLights;for(let e of Aa)this.scene.getObjectByName(e)?.traverse(e=>{let t=e;t.isMesh&&[t.material].flat().some(e=>e.isMeshStandardMaterial)&&this.mapMeshes.push({mesh:t,original:t.material})});for(let e of[`blender-harbour-city`,`rift-arena`])this.scene.getObjectByName(e)?.traverse(e=>{e.isInstancedMesh&&this.culls.push(new Rr(e))});return this.skyMesh=this.scene.getObjectByName(ja),this.cacheSky(this.quality.skyCube),this.bakeMap(),this.applyMapMaterials(),this.applySky(),this.prepareMapShaders().then(()=>this.prepareEffectShaders())}).then(()=>{this.sceneryReady=!0}),this.scene.onBeforeRender=(e,t,n)=>this.cullShapes(n),this.ready.catch(e=>{console.error(`ゲームの素材の読み込みに失敗しました`,e)});let l=W.puckRadius,u=Oa,d=l*u.height,f=u.floorGap+d,p=new B(new _e(l*u.taper,l,d,32),new L({color:`#101923`,metalness:.75,roughness:.26}));p.position.y=u.floorGap+d/2,p.castShadow=this.quality.movingShadows,this.puck.add(p),this.puckDisc=p;let h=new B(new _e(l*u.coreRadius,l*u.coreRadius,u.coreThickness,24),new z({color:`#e4ffc0`}));h.position.y=f+u.coreLift+u.coreThickness/2,this.puck.add(h);let g=new B(new i(l*u.bandRadius,l*u.bandThickness,6,32),new z({color:`#d0ff82`}));g.rotation.x=Math.PI/2,g.position.y=u.floorGap+d*u.bandAt,this.puck.add(g);let _=new B(new k(l*u.glowInner,l*u.glowOuter,32),new z({color:`#d0ff82`,transparent:!0,opacity:.55,side:2,depthWrite:!1}));_.rotation.x=-Math.PI/2,_.position.y=u.glowLift,this.puck.add(_),this.scene.add(this.puck),this.puckParts=[h.material,g.material,_.material];let v=new B(new k(Be.ringRadius*Be.ringInner,Be.ringRadius,40),new z({color:`#ff5a5a`,transparent:!0,opacity:0,side:2,depthWrite:!1}));v.rotation.x=-Math.PI/2,v.visible=!1,this.threatRing=v,this.scene.add(v),this.scene.add(this.teamRings);let y=Math.acos(Ae.showAngle),b=new B(new De(1,48,-y,y*2),new z({color:`#ffffff`,transparent:!0,opacity:0,side:2,depthWrite:!1}));b.rotation.x=-Math.PI/2,b.visible=!1,this.reachFan=b,this.scene.add(b);let x=new B(b.geometry,new z({color:`#ffffff`,transparent:!0,opacity:0,side:2,depthWrite:!1}));x.rotation.x=-Math.PI/2,x.visible=!1,x.renderOrder=aa.fan,this.reachFanFlash=x,this.scene.add(x);let S=new B(new k(.9,1,48,1,-y,y*2),new z({color:`#ffffff`,transparent:!0,opacity:0,side:2,depthWrite:!1}));S.rotation.x=-Math.PI/2,S.visible=!1,this.coreBand=S,this.scene.add(S);let C=new B(ua(.9,1,y),ma());C.rotation.x=-Math.PI/2,C.visible=!1,C.renderOrder=aa.glow,this.coreGlow=C,this.scene.add(C);let w=new B(da(.9,1,y),ma());w.material.blending=1,w.rotation.x=-Math.PI/2,w.visible=!1,w.renderOrder=aa.light,this.coreLight=w,this.scene.add(w);let T=new B(fa(1,y),ma());T.rotation.x=-Math.PI/2,T.visible=!1,T.renderOrder=aa.burst,this.coreBurst=T,this.scene.add(T);let E=ha,D=new B(new k(E-.06,E,48),new z({color:`#e8eef6`,transparent:!0,opacity:0,side:2,depthWrite:!1}));D.rotation.x=-Math.PI/2,D.visible=!1,this.bodyRing=D,this.scene.add(D);for(let e=0;e<u.trailCount;e++){let t=new B(new De(l*u.trailRadius*(1-e/18),12),new z({color:`#c7ff7b`,transparent:!0,opacity:.3*(1-e/u.trailCount),depthWrite:!1}));t.rotation.x=-Math.PI/2,t.position.y=u.trailLift,t.visible=!1,this.scene.add(t),this.trail.push(t)}this.effects=new ur(this.renderer,this.scene,this.camera,this.mobileDevice,{ambientOcclusion:this.quality.ambientOcclusion,bloom:this.quality.bloom}),this.effects.setSharpen(this.quality.sharpen),this.effects.setAntialias(this.quality.antialias),this.effects.setBook(We()),this.effects.maskRoots=()=>[...this.fighters.values()].map(e=>e.mesh),this.resize()}async prepareEffectShaders(){let e=new r(1,1),t=[new z,new z({transparent:!0,depthWrite:!1}),new z({transparent:!0,depthWrite:!1,side:2}),new L({color:`#87e5ff`,emissive:`#1a809b`,emissiveIntensity:.3,metalness:.2,roughness:.18,transparent:!0,opacity:.84}),Hr()];for(let n of t){let t=new B(e,n);t.castShadow=!0,this.effectShaders.add(t)}for(let e of this.flameView.warmup())this.effectShaders.add(e);this.effectShaders.add(new B(ua(.9,1,Math.PI/2),ma()));let n=Ji(1);n.count=1,this.effectShaders.add(n);let i=new U;i.setAttribute(`position`,new I(new Float32Array(9),3)),i.setAttribute(`color`,new I(new Float32Array(9),3)),this.effectShaders.add(new B(i,new z({vertexColors:!0,transparent:!0,depthWrite:!1,side:2,blending:2})));let a=new k(.5,1,4);a.setAttribute(`color`,new I(new Float32Array(a.getAttribute(`position`).count*3),3)),this.effectShaders.add(new B(a,new z({vertexColors:!0,transparent:!0,side:2,depthWrite:!1})));let o=new U;o.setAttribute(`position`,new I(new Float32Array(9),3)),this.effectShaders.add(new B(o,Tt()));let s=new U;s.setAttribute(`position`,new I(new Float32Array(9),3)),s.setAttribute(`normal`,new I(new Float32Array([0,1,0,0,1,0,0,1,0]),3)),s.setAttribute(`skinIndex`,new M(new Uint16Array(12),4)),s.setAttribute(`skinWeight`,new I(new Float32Array([1,0,0,0,1,0,0,0,1,0,0,0]),4));let c=new T(s,new z({transparent:!0,depthWrite:!1})),l=new be;c.add(l),c.bind(new S([l])),c.frustumCulled=!1,this.effectShaders.add(c);let u=this.renderer.getRenderTarget();this.renderer.setRenderTarget(this.effects.composer.readBuffer);let d;try{d=this.renderer.compileAsync(this.effectShaders,this.camera,this.scene)}finally{this.renderer.setRenderTarget(u)}await d}async prepareFighterShaders(){let e=[...this.fighters.values()],t=e.flatMap(e=>[e.mesh,e.heal,e.barrier,...e.calm?[e.calm]:[]]),n=this.quality.fadeWhenNeeded?e.flatMap(e=>e.fadeMaterials).filter(e=>!e.transparent):[],r=n.map(e=>e.alphaHash),i=this.renderer.getRenderTarget();this.renderer.setRenderTarget(this.effects.composer.readBuffer);let a=[];try{for(let e of n.length?[!1,!0]:[void 0]){if(e!==void 0)for(let t of n)t.alphaHash!==e&&(t.alphaHash=e,t.needsUpdate=!0);a.push(...Ze(t).map(e=>this.renderer.compileAsync(e,this.camera,this.scene)))}}finally{n.forEach((e,t)=>{e.alphaHash!==r[t]&&(e.alphaHash=r[t],e.needsUpdate=!0)}),this.renderer.setRenderTarget(i)}await Promise.all(a),this.effects.warmMask()}sizeStale(){let e=this.canvas.clientWidth,t=this.canvas.clientHeight;return e>0&&t>0&&(e!==this.viewportWidth||t!==this.viewportHeight)}resize(){let e=this.canvas.clientWidth,t=this.canvas.clientHeight;this.viewportWidth=e,this.viewportHeight=t,this.renderer.setSize(e,t,!1),this.camera.aspect=e/t,this.camera.updateProjectionMatrix(),this.effects?.resize(e,t)}resetCamera(e=0){this.yaw=Ye(e)*Math.PI/2,this.pitch=.58,this.gunPitch=.12,this.lastPhase=``}project(e,t,n){return this.projection.set(e,t,n).project(this.camera),{x:(this.projection.x*.5+.5)*this.viewportWidth,y:(-.5*this.projection.y+.5)*this.viewportHeight,visible:this.projection.z>-1&&this.projection.z<1&&Math.abs(this.projection.x)<1.08&&Math.abs(this.projection.y)<1.1}}groundAxes(e,t){this.camera.updateMatrixWorld();let n={x:Math.sin(this.yaw),z:Math.cos(this.yaw)},r={x:-n.z,z:n.x},i=.5,a=this.project(e.x,t,e.z);if(!a.visible)return;let o=this.project(e.x+r.x*i,t,e.z+r.z*i),s=this.project(e.x+n.x*i,t,e.z+n.z*i);return{right:r,forward:n,onRight:{x:(o.x-a.x)/i,y:(o.y-a.y)/i},onForward:{x:(s.x-a.x)/i,y:(s.y-a.y)/i}}}drawPuckState(e,t){let n=Fe(Math.hypot(e.puck.velocity.x,e.puck.velocity.z));this.puckTint.lerp(this.tierColor(n),t>0?Math.min(1,t/Be.blend):0);for(let e of this.puckParts)e.color.copy(this.puckTint).multiplyScalar(n.glow);let r=Ge(e);if(r>0){this.puckTint.lerp(Da,Math.min(1,r*1.1));for(let e of this.puckParts)e.color.copy(this.puckTint).multiplyScalar(1+r*1.6)}let i=.8+n.glow*.2,a=Math.min(1,n.glow),o=r>0?this.trail.length:n.trail;this.trail.forEach((t,n)=>{let r=e.puck.trail[e.puck.trail.length-1-n];if(t.visible=!!r&&n<o,!t.visible)return;t.position.set(r.x,Oa.trailLift,r.z),t.scale.setScalar(i);let s=t.material;s.color.copy(this.puckTint),s.opacity=.3*(1-n/Oa.trailCount)*a});let s=this.threatRing;if(!s)return;let c=e.fighters.find(t=>t.id===e.controlledId),l=c&&e.phase===`playing`?Ie(e.puck,c,Xe(e,c.id)):null,u=it(this.threatDisplay,l,t);s.visible=u.visible,u.visible&&c&&(s.position.set(c.pos.x,.055,c.pos.z),s.material.opacity=u.opacity)}drawReachFan(e,t){let n=this.reachFan,r=this.coreBand,i=this.bodyRing,a=this.coreGlow,o=this.coreLight,s=this.coreBurst,c=this.reachFanFlash;if(!n||!r||!i||!a||!o||!s||!c)return;let l=e.fighters.find(t=>t.id===e.controlledId),u=l&&e.phase===`playing`&&l.role!==`gunner`&&l.stun<=0&&!l.meditating&&!l.sprinting?!Ae.showWhenReady||l.cooldowns[0]<=0?1:.25:0,d=t>0?t/Ae.fadeIn:0;this.reachFanLevel+=R.clamp(u-this.reachFanLevel,-d,d);let f=this.reachFanLevel;if(n.visible=r.visible=i.visible=f>.01,!n.visible||!l){a.visible=o.visible=s.visible=c.visible=!1,Object.assign(this.coreFlash,{since:-1,level:0,burst:-1});return}let p=st(l.role)+W.puckRadius;if(this.reachFanRole!==l.role){this.reachFanRole=l.role;let e=ta(nt[l.role].color,this.reachLook);n.material.color.copy(e.fan),r.material.color.copy(e.band),i.material.color.copy(e.body);let t=ia(this.reachLook.flash);o.material.color.copy(t.light),a.material.color.copy(t.halo),s.material.color.copy(t.ring),c.material.color.copy(t.fan),a.material.blending=s.material.blending=t.additive?2:1;let u=p-ha,d=Math.acos(Ae.showAngle),f=ha+u*(Je.core-Je.criticalBand),m=ha+u*(Je.core+Je.criticalBand);r.geometry.dispose(),r.geometry=new k(f,m,48,1,-d,d*2),this.coreOut=m,a.geometry.dispose(),a.geometry=ua(f,m,d),o.geometry.dispose(),o.geometry=da(f,m,d),s.geometry.dispose(),s.geometry=fa(m,d)}let m=Math.atan2(-l.facing.z,l.facing.x);n.position.set(l.pos.x,.035,l.pos.z),n.scale.setScalar(p),n.rotation.set(-Math.PI/2,0,m);let h=ct(e,l);this.corePulse=h?this.corePulse+t:0;let g=h?.78+.22*Math.sin(this.corePulse/.12*Math.PI*2):0,_=na(this.reachLook,f,h,g);n.material.opacity=_.fan,r.position.set(l.pos.x,.04,l.pos.z),r.rotation.set(-Math.PI/2,0,m),ca(this.coreFlash,h&&f>.2,t,h?.5+.5*Math.sin(this.corePulse/.12*Math.PI*2):0);let v=this.coreFlash.level;if(r.material.opacity=_.band*sa(v),n.material.opacity=_.fan*sa(v),a.visible=o.visible=c.visible=v>.001,a.visible&&(c.position.copy(n.position),c.rotation.copy(n.rotation),c.scale.copy(n.scale),c.material.opacity=ra.fanOpacity*v,a.position.set(l.pos.x,.045,l.pos.z),a.rotation.set(-Math.PI/2,0,m),a.material.opacity=v,o.position.set(l.pos.x,.05,l.pos.z),o.rotation.set(-Math.PI/2,0,m),o.material.opacity=v),s.visible=this.coreFlash.burst>=0,s.visible){let e=la(this.coreFlash.burst,this.coreOut);s.position.set(l.pos.x,.055,l.pos.z),s.rotation.set(-Math.PI/2,0,m),s.scale.set(e.scale,e.scale,1),s.material.opacity=e.opacity}i.position.set(l.pos.x,.03,l.pos.z),i.material.opacity=_.body}tierColor(e){return this.tierColors.get(e.color)??this.tierColors.set(e.color,new a(e.color)).get(e.color)}tierColors=new Map;dodgeGhost(e,t){let n=e.fighters.find(e=>e.dash?.presentation===`dodge-afterimage`&&Math.hypot(e.pos.x-t.pos.x,e.pos.z-t.pos.z)<1.5),r=n&&this.fighters.get(n.id)?.mesh.userData.samurai;if(!n||!r)return;let i=Lt(r.model);return i.position.x+=t.pos.x-n.pos.x,i.position.z+=t.pos.z-n.pos.z,i}disposeObject(e){e.traverse(e=>{if(e instanceof B){if(e instanceof T&&e.skeleton.dispose(),e.userData.ghost)return;e.geometry.dispose(),(Array.isArray(e.material)?e.material:[e.material]).forEach(e=>e.dispose())}}),e.userData.ghostMaterial?.dispose(),this.scene.remove(e)}dropStaleAvatars(){let e=this.avatar?$e(this.avatar.look):``;this.bench.some(t=>t.look&&t.look!==e)&&(this.bench=this.bench.filter(t=>{if(!t.look||t.look===e)return!0;for(let e of[t.mesh,t.ring,t.shadow,t.heal,t.barrier,t.calm])e?.traverse(e=>{e instanceof B&&(e instanceof T&&e.skeleton.dispose(),(Array.isArray(e.material)?e.material:[e.material]).forEach(e=>e.dispose()))});return!1}))}createFighter(e){let t=this.avatarOf(e),n=At(e.role,e.team,t),r=new B(new k(.77,.86,40),new z({color:e.team===this.viewing?ga.ally:ga.enemy,side:2,transparent:!0,opacity:.95,depthWrite:!1}));r.rotation.x=-Math.PI/2;let i=new B(new De(.68,20),new z({color:`#010611`,transparent:!0,opacity:.14,depthWrite:!1}));i.rotation.x=-Math.PI/2;let a=[];n.traverse(e=>{!(e instanceof B)||e.userData.samuraiVfx||e.userData.noFade||a.push({mesh:e,original:e.material})});let o=wi(),s=Si(Q.stance[e.role]),c=Nt();this.scene.add(n,r,i,o,c),s&&this.scene.add(s);let l={mesh:n,role:e.role,team:e.team,look:t?$e(t):``,ring:r,shadow:i,parts:a,fadeMaterials:[],heal:o,calm:s,healLevel:0,calmLevel:0,opacity:1,barrier:c};return this.dressFighter(l),l}flameNozzle=e=>{let t=e===void 0?void 0:this.fighters.get(e);if(!t)return;let n=t.mesh.getObjectByName(`PudHand_L`)??t.mesh.getObjectByName(`wrist_L`);if(!n)return;n.updateWorldMatrix(!0,!1);let r=n.getWorldPosition(this.flameAt),i=t.mesh.rotation.y;return{x:r.x,y:r.y,z:r.z,fx:Math.sin(i),fz:Math.cos(i)}};draw(e,n,r){if(this.benchmarkMode?.skipRender)return;let i=this.water;i?.material.userData.shader&&(i.material.userData.shader.uniforms.harbourTime.value=r);let a=this.viewing=dt(e);Tn(this.fighters,e.fighters,this.bench,this.seatActions),this.dropStaleAvatars(),this.flameSim.track(e.projectiles,e.phase===`playing`);let o=this.ringSpots;o.length=0;for(let t of e.fighters){let i=this.fighters.get(t.id);if(!i||!this.seatActions.ready(t))continue;i.mesh.position.set(t.pos.x,0,t.pos.z),i.mesh.rotation.y=Math.atan2(t.facing.x,t.facing.z),i.mesh.userData.flameHold=t.role===`mage`?this.flameSim.hold(t.id):0,Ot(i.mesh,t,t.role===`samurai`&&e.phase!==`lobby`?e.elapsed:r,n);let s=i.mesh.userData.gait,c=this.footsteps.step(t.id,s);c>=0&&this.steps.length<32&&this.steps.push({id:t.id,foot:c,moving:s.moving,x:t.pos.x,z:t.pos.z,pudding:je(t.role,this.avatarOf(t),tt())}),i.ring.position.set(t.pos.x,.045,t.pos.z),i.ring.visible=t.id===e.controlledId;let l=Vi(t.team,a,t.id===e.controlledId);l&&o.push({x:t.pos.x,z:t.pos.z,kind:l}),i.ring.material.color.copy(t.team===a?ga.ally:ga.enemy),i.shadow.position.set(t.pos.x,.025,t.pos.z);let u=0;for(let n of e.effects)n.presentation===`guard-hit`&&Math.hypot(n.pos.x-t.pos.x,n.pos.z-t.pos.z)<.8&&(u=Math.max(u,n.life/n.maxLife));Pt(i.barrier,!!t.blocking,t.pos.x,t.pos.z,Math.atan2(t.facing.x,t.facing.z),u,t.guardGauge/at.gauge,i.opacity,r);let d=(e,t,r)=>n>0?R.clamp(e+(t?n/r.fadeIn:-n/r.fadeOut),0,1):e;i.healLevel=d(i.healLevel,(t.healed??0)>0&&t.stun<=0,Q.heal),i.calmLevel=d(i.calmLevel,(!!t.meditating||!!t.sprinting||(t.boost??0)>0)&&t.stun<=0,Q.meditation),i.heal.position.set(t.pos.x,0,t.pos.z),Ti(i.heal,i.healLevel*i.opacity,r,this.camera,t.id),i.calm&&(i.calm.position.set(t.pos.x,0,t.pos.z),Ci(i.calm,i.calmLevel*i.opacity,r,this.camera,t.id))}Xi(this.teamRings,o,r),this.puck.position.set(e.puck.pos.x,0,e.puck.pos.z),this.puck.rotation.y=r*1.2,this.drawPuckState(e,n),this.drawReachFan(e,n),this.flameSim.update(n,this.flameNozzle),this.flameView.write(this.flameSim,r);let s=new Set;for(let r of e.projectiles){if(r.kind===`fire`)continue;let e=`p`+r.id;s.add(e);let i=this.transient.get(e);if(!i){if(r.kind===`bullet`){i=new H;let e=new B(new h(.12,8,6),new z({color:`#fff5ce`}));i.add(e);let t=new B(new _e(.055,.015,1.15,6),new z({color:r.team===0?`#ffc66e`:`#ff7762`,transparent:!0,opacity:.85,depthWrite:!1}));t.rotation.x=Math.PI/2,t.position.z=-.57,i.add(t)}else i=r.kind===`kamaitachi`?Ea():new B(new l(.2),new z({color:`#b7afff`}));this.transient.set(e,i),this.scene.add(i)}i.position.set(r.pos.x,r.kind===`kamaitachi`?0:r.height??1.1,r.pos.z),r.kind===`bullet`?(i.quaternion.setFromUnitVectors(new t(0,0,1),new t(r.velocity.x,r.verticalVelocity??0,r.velocity.z).normalize()),i.children[1].material.color.copy(ba[r.team])):r.kind===`kamaitachi`?(i.quaternion.setFromUnitVectors(new t(0,0,1),new t(r.velocity.x,0,r.velocity.z).normalize()),i.scale.setScalar(1+.22*(1-Math.max(0,Math.min(1,r.life/Qe.life))))):i.rotation.y+=n*10}for(let t of e.walls){let e=`w`+t.id;s.add(e);let n=this.transient.get(e);if(t.kind===`light`){n||(n=Ur(t.width,t.id,r),this.transient.set(e,n),this.scene.add(n)),Gr(n,t,r);continue}if(!n){n=new H;for(let e=0;e<6;e++){let r=1.6+e%3*.35,i=new B(new _e(.3,.53,r,5),new L({color:`#87e5ff`,emissive:`#1a809b`,emissiveIntensity:.3,metalness:.2,roughness:.18,transparent:!0,opacity:.84}));i.position.set(0,r/2,(e-2.5)*t.width/6),i.rotation.y=e,i.castShadow=this.quality.movingShadows,n.add(i)}this.transient.set(e,n),this.scene.add(n)}n.position.set(t.pos.x,0,t.pos.z),n.scale.y=Math.min(1,t.life*2);let i=ut(t);n.rotation.y=Math.atan2(-i.z,i.x)}for(let n of e.effects){if(n.presentation===`samurai-iai`)continue;let r=`e`+n.id;s.add(r);let i=this.transient.get(r);if(n.presentation===`guard-hit`)continue;if(n.presentation===`guard-break`){i||(i=Ft(n.id),this.transient.set(r,i),this.scene.add(i)),It(i,n.pos.x,n.pos.z,Math.atan2(n.direction?.x??0,n.direction?.z??1),1-n.life/n.maxLife,n.maxLife);continue}if(n.presentation===`dodge-afterimage`){i||(i=this.dodgeGhost(e,n)??new H,this.transient.set(r,i),this.scene.add(i)),i.userData.ghostMaterial&&Et(i,1-n.life/n.maxLife);continue}if(n.presentation===`dodge-vanish`||n.presentation===`dodge-smoke`||n.presentation===`dodge-roll`||n.presentation===`dodge-step`){let e=n.presentation===`dodge-vanish`||n.presentation===`dodge-smoke`?`smoke`:`dust`;i||(i=jt(e,n.id),this.transient.set(r,i),this.scene.add(i)),kt(i,e,n.pos.x,n.pos.z,Math.min(1,(1-n.life/n.maxLife)*1.4),this.camera);continue}if(n.presentation===`kamaitachi-hold`){i||(i=Ea(),this.transient.set(r,i),this.scene.add(i)),i.position.set(n.pos.x,0,n.pos.z),i.quaternion.setFromUnitVectors(new t(0,0,1),new t(n.direction?.x??1,0,n.direction?.z??0).normalize());let e=ze+(n.maxLife-n.life);ya.forEach((t,n)=>{let r=i.children[n],a=e-t;r.visible=a>=0,r.material.opacity=Ta*(1+.9*Math.max(0,1-a/.09))}),i.children[ya.length+1].visible=!1;continue}if(n.presentation===`wind`){if(!i){i=new H;let e=new B(new k(.9,1,40,1,0,Math.PI),new z({color:`#eaf6ff`,side:2,transparent:!0,opacity:.5,depthWrite:!1}));e.rotation.x=-Math.PI/2,i.add(e),this.transient.set(r,i),this.scene.add(i)}let e=1-n.life/n.maxLife,t=n.radius*(et.start+(1-et.start)*Math.min(1,e));i.position.set(n.pos.x,.45,n.pos.z),i.scale.set(t,1,t),i.rotation.y=Math.atan2(-(n.direction?.x??0),-(n.direction?.z??1)),i.children[0].material.opacity=.55*(1-e)*(1-e*.5);continue}if(n.presentation===`weapon-slash`||n.presentation===`staff-hit`){if(!i){let e=n.presentation===`staff-hit`;i=new H;let t=new B(new k(n.radius*(e?.92:.84),n.radius,28,1,.45,2.25),new z({color:e?`#ffe6b0`:n.team===0?`#c8edff`:`#ffb8a4`,side:2,transparent:!0,opacity:.7,depthWrite:!1}));t.rotation.x=Math.PI/2,t.position.y=e?.55:.8,i.add(t),this.transient.set(r,i),this.scene.add(i)}let e=1-n.life/n.maxLife;i.position.set(n.pos.x,0,n.pos.z),i.rotation.y=Math.atan2(n.direction?.x??0,n.direction?.z??1)+(e-.5)*.6;let t=i.children[0];t.material.opacity=Math.sin(Math.PI*e)*.72;continue}if(n.presentation===`clash-spark`){i||(i=Xr(n.id),this.transient.set(r,i),this.scene.add(i)),i.position.set(n.pos.x,n.height??1.2,n.pos.z),Qr(i,1-n.life/n.maxLife,n.radius,this.camera);continue}if(n.presentation===`shockwave`){i||(i=new B(new k(.86,1,64),new z({color:`#fff6d0`,side:2,transparent:!0,opacity:.95,depthWrite:!1})),i.rotation.x=-Math.PI/2,this.transient.set(r,i),this.scene.add(i));let e=1-n.life/n.maxLife,t=.6+(n.radius-.6)*e;i.position.set(n.pos.x,.09,n.pos.z),i.scale.setScalar(t),i.material.opacity=.95*(1-e)*(1-e);continue}let a=1-n.life/n.maxLife;if(!i){let e=(n.presentation===`crit-spark`?`#fff3c4`:n.presentation===`mid-spark`?`#8ff0ff`:n.presentation===`tip-spark`?`#8f9fb4`:``)||(n.kind===`heal`?`#a7ff91`:n.kind===`hit`?`#ffb089`:n.kind===`ice`?`#8ff0ff`:n.kind===`light`?`#ffe27a`:n.team===0?`#a6ecff`:`#ffc298`);i=new H;let t=[`slash`,`charge`].includes(n.kind),a=new B(new k(n.radius*.83,n.radius,t?28:48,1,0,t?Math.PI*1.3:Math.PI*2),new z({color:e,side:2,transparent:!0,opacity:.9,depthWrite:!1}));a.rotation.x=-Math.PI/2,a.position.y=n.kind===`heal`?.12:.65,i.add(a);for(let t=0;t<7;t++){let r=new B(new l(.095),new z({color:e,transparent:!0,opacity:1}));r.position.set(Math.cos(t*6.28/7)*n.radius,.4,Math.sin(t*6.28/7)*n.radius),i.add(r)}this.transient.set(r,i),this.scene.add(i)}i.position.set(n.pos.x,0,n.pos.z),i.scale.setScalar(.7+a*.5),i.rotation.y=a*2,i.children.forEach((e,t)=>{let n=e;n.material.opacity=1-a,t>0&&(e.position.y=.35+a*1.5)})}for(let[e,t]of this.transient)s.has(e)||(this.disposeObject(t),this.transient.delete(e));let c=e.fighters.find(t=>t.id===e.controlledId),u=e.phase===`lobby`;if(this.camera.position.sub(this.shake),this.shake.set(0,0,0),u){let e=this.camera.aspect;if(this.mapId===`colosseum`){let t=ft(this.mapId).radius;this.target.set(10,7,-6),this.camera.position.set(-t*.62,e<1.6?11:9.5,t*.54)}else this.target.set(35,8,-3),this.camera.position.set(-W.width/2-9+Math.sin(r*.06)*.5,e<1.6?13:11,12);this.camera.lookAt(this.target)}else{let e=new t(Math.sin(this.yaw),0,Math.cos(this.yaw)),r=new t(c.pos.x,0,c.pos.z),i=r.clone().addScaledVector(e,-8);i.y=1.56+this.pitch*3;let a=7;if(this.mapId===`colosseum`){let e=ft(this.mapId).radius-.9,t=Math.hypot(i.x,i.z);t>e&&(i.x*=e/t,i.z*=e/t);let n=Math.hypot(i.x-r.x,i.z-r.z);i.y+=Math.max(0,4-n)*.7,a=R.lerp(.65,7,R.smoothstep(n,.4,4))}let o=r.clone().addScaledVector(e,a);o.y=1.8;let s=this.lastPhase===`lobby`||this.lastPhase===``?1:1-Math.exp(-n*10);this.camera.position.lerp(i,s),this.target.lerp(o,s),this.camera.lookAt(this.target)}if(!u){let t=Ve(c),n=Math.max(t.f>0?(.05+.07*t.s)*t.f:c.hitStop>0?.03:0,rt(e));n>0&&(this.shake.set(Math.sin(r*80)*n,Math.cos(r*63)*n,0),this.camera.position.add(this.shake),this.camera.lookAt(this.target))}this.lastPhase=e.phase;let d=new Set(e.fighters.filter(e=>e.dash?.presentation===`dodge-vanish`).map(e=>e.id));for(let[t,n]of this.fighters){let r=n.mesh.position.distanceTo(this.camera.position),i=u||t===e.controlledId?1:R.smoothstep(r,4.5,6.5);for(let e of n.fadeMaterials){let t=Tr(e,i,this.quality.fadeWhenNeeded);e.alphaHash!==t&&(e.alphaHash=t,e.needsUpdate=!0),e.opacity=i}n.mesh.visible=i>.015&&!d.has(t)&&!this.benchmarkMode?.hideFighters,n.opacity=i}for(let n of e.fighters)if(n.role===`gunner`&&n.stun<=0){let r=this.fighters.get(n.id)?.mesh;if(!r)continue;n.id===e.controlledId&&!u?Dt(r,new t(n.pos.x+n.facing.x*12,1.2,n.pos.z+n.facing.z*12)):Dt(r,new t(e.puck.pos.x,.25,e.puck.pos.z))}this.quality.shadow===`once`?this.sceneryReady&&!this.shadowBaked&&(this.renderer.shadowMap.needsUpdate=!0,this.shadowBaked=!0):this.quality.shadow===`hz30`&&(this.shadowElapsed+=n,this.shadowElapsed>=1/30&&(this.renderer.shadowMap.needsUpdate=!0,this.shadowElapsed%=1/30)),this.benchmarkMode?.direct?(this.renderer.info.reset(),this.renderer.setRenderTarget(null),this.renderer.render(this.scene,this.camera)):this.effects.render(n)}gunAim(e){let n=e.fighters.find(t=>t.id===e.controlledId);this.camera.updateMatrixWorld(!0);let r=this.camera.position.clone(),i=this.camera.getWorldDirection(new t).multiplyScalar(100),a=qe(e,r,i,n.team,0),o=r.clone().addScaledVector(i,a?.t??1),s=this.fighters.get(n.id)?.mesh;return s&&(s.position.set(n.pos.x,0,n.pos.z),s.rotation.y=Math.atan2(n.facing.x,n.facing.z)),{origin:(s?Dt(s,o):void 0)??{x:n.pos.x,y:1.2,z:n.pos.z},target:o}}minimap(e,t){let n=e.getContext(`2d`),r=e.width,i=e.height,a=ft(t.mapId),o=a.shape===`circle`;n.clearRect(0,0,r,i);let s=Math.min(r-20,i-20)/(a.radius*2),c=o?s:(r-20)/a.width,l=o?s:(i-20)/a.depth,u=e=>r/2+e*c,d=e=>i/2+e*l;n.strokeStyle=`#ffffff35`,n.lineWidth=1,n.fillStyle=`#b28b5720`,n.beginPath(),o?n.arc(r/2,i/2,a.radius*c,0,Math.PI*2):n.rect(10,10,r-20,i-20),n.fill(),n.stroke(),n.beginPath(),n.moveTo(r/2,d(-a.depth/2)),n.lineTo(r/2,d(a.depth/2)),n.stroke(),n.beginPath(),n.arc(r/2,i/2,o?5*c:12,0,Math.PI*2),n.stroke();for(let e of[0,1])n.strokeStyle=e===0?`#83dbff`:`#ff907d`,n.lineWidth=3,n.beginPath(),n.moveTo(u((e?1:-1)*a.goalX),d(-a.goalWidth/2)),n.lineTo(u((e?1:-1)*a.goalX),d(a.goalWidth/2)),n.stroke();for(let e of t.walls){let t=ut(e),r=-t.z*e.width/2,i=t.x*e.width/2;n.strokeStyle=e.kind===`light`?`#ffe27a`:`#b1f1ff`,n.lineWidth=3,n.beginPath(),n.moveTo(u(e.pos.x-r),d(e.pos.z-i)),n.lineTo(u(e.pos.x+r),d(e.pos.z+i)),n.stroke()}for(let e of t.fighters){let r=e.id===t.controlledId;n.fillStyle=e.stun>0?`#7b8194`:r?`#c6ff8b`:e.team===0?`#85dcff`:`#ff897d`,n.beginPath(),n.arc(u(e.pos.x),d(e.pos.z),r?4:3,0,Math.PI*2),n.fill(),r&&(n.strokeStyle=`#c6ff8b77`,n.lineWidth=1,n.beginPath(),n.arc(u(e.pos.x),d(e.pos.z),7,0,Math.PI*2),n.stroke())}let f=Fe(Math.hypot(t.puck.velocity.x,t.puck.velocity.z));n.globalAlpha=!f.blink||Math.floor(t.elapsed/(Be.blinkPeriod/2))%2==0?1:.35,n.fillStyle=f.color,n.beginPath(),n.arc(u(t.puck.pos.x),d(t.puck.pos.z),f.dot,0,Math.PI*2),n.fill(),n.globalAlpha=1}};export{Ma as GameView};