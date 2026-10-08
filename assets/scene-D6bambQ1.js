import{$ as e,An as t,Bn as n,C as r,Cn as i,Dt as a,E as o,Et as s,F as c,Fn as l,G as u,Gn as d,H as f,Hn as p,I as m,In as h,J as g,Jn as _,Kn as v,L as y,Ln as b,M as x,Mn as S,Mt as C,Nn as w,Nt as T,On as E,Ot as D,P as O,Q as ee,R as te,Rn as k,St as A,T as j,Tt as M,U as N,Un as P,V as ne,Vn as re,W as ie,X as ae,Xn as oe,Y as se,Z as ce,_ as F,at as le,b as ue,bt as I,d as de,dt as L,er as R,ft as fe,g as pe,gt as me,h as he,ht as z,ir as ge,it as _e,jn as ve,jt as ye,k as be,kn as xe,kt as Se,l as Ce,m as we,mt as B,ot as Te,pt as Ee,q as V,rt as De,tr as H,tt as Oe,v as U,vn as ke,vt as Ae,w as je,x as Me,xn as Ne,yt as Pe,zt as Fe}from"./avatar-B9sHkRv-.js";import{A as Ie,At as W,Ct as Le,Dt as Re,Et as ze,Gt as Be,Jt as Ve,Kt as He,L as Ue,N as We,Ot as Ge,St as Ke,Tt as qe,Ut as Je,Vt as Ye,Wt as Xe,X as Ze,Z as Qe,at as $e,bt as et,c as tt,ct as nt,d as rt,dt as it,et as at,f as ot,ft as st,gt as ct,i as lt,it as ut,jt as dt,l as ft,lt as pt,m as mt,mt as ht,n as gt,ot as _t,p as vt,pt as yt,u as bt,ut as xt,vt as St,xt as Ct,z as wt}from"./index-jHtgBwJO.js";import{i as Tt,n as Et,r as Dt,t as Ot}from"./three.module-j-aFw4_i.js";import{cpuYuruReady as kt,grandpaReady as At,loadAllCpuYuru as jt,loadGrandpa as Mt,seatLookReady as Nt}from"./pudding-BCITEPbK.js";import{loadYuruParty as Pt,yuruPartyReady as Ft}from"./yuru-party-BWKZ0RWh.js";import{loadSamuraiModel as It,samuraiModelReady as Lt,t as Rt}from"./samurai-NjD_JB_0.js";import{a as zt,aimGuns as Bt,animateCharacter as Vt,c as Ht,createCharacter as Ut,i as Wt,l as Gt,n as Kt,o as qt,r as Jt,s as Yt,t as Xt,u as Zt}from"./characters-BMP-1PT2.js";function Qt(e,t){let n=(e,t,n)=>e+Math.max(-1,Math.min(1,e/t))*(n-t);return{x:n(e,17,W.width/2),z:n(t,10.5,W.depth/2)}}var $t=e=>e.isMesh===!0,en=`city-lamp-light`,tn=e=>e.isMeshStandardMaterial===!0;async function nn(t){let i=new V;i.name=`blender-harbour-city`;let a=new Ce,o=new n,s=await fetch(`./models/twilight-city-layout.json`);if(!s.ok)throw Error(`City layout unavailable`);let c=await s.json(),l=e=>({...e,...Qt(e.x,e.z)}),u={...c,palace:l(c.palace),blocks:c.blocks.map(e=>({...e,placements:e.placements.map(l)}))},[d,f,p,m]=await Promise.all([a.loadAsync(`./models/twilight-infrastructure.glb`),a.loadAsync(`./models/monumental-palace-v3.glb`),Promise.all(u.blocks.map(e=>a.loadAsync(`./models/${e.model}.glb`))),Promise.all([`weathered-limestone-v3`,`aged-oak-v3`,`lime-plaster-v3`].map(e=>o.loadAsync(`./textures/${e}.png`)))]),h=Gt(),g=m.map(e=>(e.colorSpace=E,e.wrapS=e.wrapT=Ne,e.anisotropy=8,e)),_=g.map(e=>{let t=e.clone();return t.colorSpace=``,t.needsUpdate=!0,t}),v=new Set;for(let e of[d.scene,f.scene,...p.map(e=>e.scene)])e.traverse(e=>{if($t(e)){e.receiveShadow=!0;for(let t of Array.isArray(e.material)?e.material:[e.material]){if(!tn(t)||v.has(t))continue;v.add(t),t.envMapIntensity=.25;let e=t.name;/WarmGlass/i.test(e)?(t.color.set(`#6b391d`),t.emissive.set(`#ff9b43`),t.emissiveIntensity=1.05,t.roughness=.35):/Recess|Shadow|DarkStone/i.test(e)?(t.normalMap=null,t.map=g[0],t.bumpMap=_[0],t.bumpScale=.055):/Stone|limestone/i.test(e)?(t.normalMap=null,t.map=g[0],t.bumpMap=_[0],t.bumpScale=.095,t.roughness=.88,t.color.lerp(new r(`#c1b9a8`),.48)):/Oak|Wood|walnut/i.test(e)?(t.normalMap=null,t.map=g[1],t.bumpMap=_[1],t.bumpScale=.045,t.roughness=.82,t.color.lerp(new r(`#aea094`),.58)):/Plaster/i.test(e)?(t.normalMap=null,t.map=g[2],t.bumpMap=_[2],t.bumpScale=.035,t.roughness=.94,t.color.lerp(new r(`#d0bbaa`),.44)):/Slate|RoofTile/i.test(e)?(t.normalMap=null,t.map=h.slate,t.bumpMap=h.slate,t.bumpScale=.045,t.roughness=.66,t.color.set(`#3b5266`)):/Linen|Canvas|Teal/i.test(e)&&(t.normalMap=null,t.map=h.cloth,t.bumpMap=h.cloth,t.bumpScale=.012,t.roughness=.94),/Leaves|Flowers/i.test(e)&&(t.side=2,t.roughness=.86),t.onBeforeCompile=e=>{e.fragmentShader=e.fragmentShader.replace(`#include <normal_fragment_maps>`,`
          vec3 stableSurfaceNormal=normal;
          #include <normal_fragment_maps>
          if(!(dot(normal,normal)>0.5))normal=stableSurfaceNormal;
        `)},t.customProgramCacheKey=()=>`city-stable-normal-v1`,t.needsUpdate=!0}}});d.scene.updateMatrixWorld(!0),d.scene.traverse(e=>{if(!$t(e))return;e.castShadow=!/StoneRecess|Flowers/.test(e.name);let t=e.geometry.clone().applyMatrix4(e.matrixWorld),n=t.getAttribute(`position`);for(let e=0;e<n.count;e++){let t=Qt(n.getX(e),n.getZ(e));n.setXYZ(e,t.x,n.getY(e),t.z)}t.computeVertexNormals(),/Stone|Approach/i.test(e.name)&&Zt(t,.25),t.applyMatrix4(e.matrixWorld.clone().invert()),t.computeBoundingBox(),t.computeBoundingSphere(),e.geometry.dispose(),e.geometry=t}),i.add(d.scene);let y=new pe(1,1,1),b=new I({color:`#9d998f`,map:g[0],bumpMap:_[0],bumpScale:.08,roughness:.92}),x=[];function S(t,n,r){t.updateMatrixWorld(!0);let a=new M,o=new Ee,s=new he().setFromObject(t),c=s.getSize(new H),l=s.getCenter(new H);for(let e of n){let t=new H(l.x*e.scale,0,l.z*e.scale).applyAxisAngle(new H(0,1,0),e.angle),n=e.y-.01,r=-5.35;a.position.set(e.x+t.x,(n+r)/2,e.z+t.z),a.rotation.set(0,e.angle,0),a.scale.set(c.x*e.scale,n-r,c.z*e.scale),a.updateMatrix();let i=y.clone().applyMatrix4(a.matrix);Zt(i,.25),x.push(i)}t.traverse(t=>{if(!$t(t))return;let s=new e(t.geometry,t.material,n.length);s.name=r,s.castShadow=!0,s.receiveShadow=!0,n.forEach((e,n)=>{a.position.set(e.x,e.y,e.z),a.rotation.set(0,e.angle,0),a.scale.setScalar(e.scale),a.updateMatrix(),o.multiplyMatrices(a.matrix,t.matrixWorld),s.setMatrixAt(n,o)}),s.computeBoundingSphere(),i.add(s)})}u.blocks.forEach((e,t)=>S(p[t].scene,e.placements,e.model)),S(f.scene,[u.palace],`monumental-palace`);let w=new B(de(x,!1),b);w.name=`grounded-building-foundations`,w.receiveShadow=!0,w.castShadow=!0,w.geometry.computeBoundingSphere(),i.add(w),x.forEach(e=>e.dispose()),y.dispose(),i.userData={authoredWith:`Blender 5.2`,ready:!0,version:3,archetypes:u.blocks.length,buildings:u.blocks.reduce((e,t)=>e+t.placements.length,0),palace:u.palace,court:{width:W.width,depth:W.depth}},t.add(i);for(let[e,n,r,i,a]of[[4,5,-19,22,19],[16,5,20,24,22],[-24,4,13,16,18],[39,8,-20,34,32]]){let o=Qt(e,r),s=new C(`#ffad65`,i,a,1.6);s.position.set(o.x,n,o.z),s.name=en,t.add(s)}}function rn(e){let t=new B(new ye(780,680),new I({color:`#273c38`,roughness:1}));t.rotation.x=-Math.PI/2,t.position.y=-5.3,t.receiveShadow=!0,t.name=`terraced-valley`,e.add(t);let n=new I({color:`#173b4b`,roughness:.27,metalness:.6,envMapIntensity:.75});n.onBeforeCompile=e=>{e.uniforms.harbourTime={value:0},n.userData.shader=e,e.vertexShader=e.vertexShader.replace(`#include <common>`,`#include <common>
varying vec3 waterPosition;`).replace(`#include <worldpos_vertex>`,`#include <worldpos_vertex>
waterPosition=(modelMatrix*vec4(transformed,1.0)).xyz;`),e.fragmentShader=e.fragmentShader.replace(`#include <common>`,`#include <common>
varying vec3 waterPosition;uniform float harbourTime;`).replace(`#include <normal_fragment_maps>`,`#include <normal_fragment_maps>
        float w1=sin(waterPosition.x*2.2+waterPosition.z*1.7+harbourTime*.7);
        float w2=cos(waterPosition.x*.81-waterPosition.z*3.1-harbourTime*.43);
        normal=normalize(normal+vec3(w1*.10,w2*.075,0.0));`)};let r=new B(new ye(134,220),n),i=Qt(76,95);r.rotation.x=-Math.PI/2,r.position.set(i.x,-2.6,i.z),r.name=`harbour-water`,e.add(r)}function an(e){if(e.getObjectByName(`EpicCity_TwilightSky`))return;let t=(e,t)=>{let n=L.degToRad(e),r=L.degToRad(t);return new H(Math.cos(r)*Math.cos(n),Math.sin(r),Math.cos(r)*Math.sin(n))},n=t(-25,25),i=t(25,20),a=new ve({name:`EpicCity_TwilightSkyMaterial`,side:1,depthTest:!1,depthWrite:!1,fog:!1,toneMapped:!0,uniforms:{uZenith:{value:new r(`#142b59`)},uMiddle:{value:new r(`#36648c`)},uHorizon:{value:new r(`#829aaa`)},uBelow:{value:new r(`#566e8a`)},uBlueDirection:{value:n},uAmberDirection:{value:i},uBlueRadius:{value:L.degToRad(5)},uAmberRadius:{value:L.degToRad(6.5)},uBlueTint:{value:new r(`#c3e8f2`)},uAmberTint:{value:new r(`#efb983`)}},vertexShader:`
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
    `}),o=new k(650,48,32),s=new B(o,a);s.name=`EpicCity_TwilightSky`,s.renderOrder=-1e4,s.frustumCulled=!1,s.castShadow=!1,s.receiveShadow=!1;let c=new H;s.onBeforeRender=(e,t,n)=>{n.getWorldPosition(c),s.position.copy(c),s.updateMatrixWorld(!0)},s.userData.dispose=()=>{s.removeFromParent(),o.dispose(),a.dispose()},e.add(s)}function on(e){let t=new V;t.name=`rift-arena`,e.add(t);let r=W.width/2,a=W.depth/2,o=W.goalWidth/2,s=W.width/34,c=W.depth/21;t.userData={theme:`twilight-royal-approach`,courtWidth:W.width,courtDepth:W.depth,goalWidth:W.goalWidth,area:W.width*W.depth,tallSceneryInnerX:r+10,tallSceneryInnerZ:a+10.5};let l=(e,t={})=>new I({color:e,roughness:.91,metalness:.02,...t}),u=l(14999251),d=l(15853526),m=l(7892576),h=l(6505267),g=l(9725249),_=l(3749691,{metalness:.5}),v=l(12558946,{metalness:.45,roughness:.65}),y=l(3767956,{side:2}),b=l(11029589,{side:2}),x=l(15058812);l(7374940);let S=new z({color:7981525}),C=new z({color:15114373}),w=l(11968633,{metalness:.25,roughness:.8}),T=new z({color:16032847}),D=new z({color:16770976}),O=l(15119979,{emissive:16760166,emissiveIntensity:.8,roughness:.4}),ee=Gt(),te=new n().load(`./textures/weathered-limestone-v3.png`);te.colorSpace=E,te.wrapS=te.wrapT=Ne,te.anisotropy=8;let k=e=>{let t=e.clone();return t.colorSpace=``,t.needsUpdate=!0,t},A=(e,t,n,r)=>{e.map=t,e.bumpMap=k(t),e.bumpScale=r,e.userData.worldScale=n};for(let e of[u,d])A(e,te,.22,.045);for(let e of[h,g])A(e,ee.wood,.42,.027);for(let e of[y,b])e.map=ee.cloth,e.bumpMap=k(ee.cloth),e.bumpScale=.012,e.roughness=.83;let M=new pe(1,1,1);new ae(1,1);function N(e,n,r,i,a,o=t){let s=new B(e,n);return s.position.set(r,i,a),s.receiveShadow=!0,s.castShadow=n instanceof I,o.add(s),s}function P(e,n,r,i,a,o,s,c=t){let l=N(M,s,e,n,r,c);return l.scale.set(i,a,o),l}function ne(e,n,r,i,a,o,s,c=20,l=t){return N(new be(i,a,o,Math.max(12,c)),s,e,n,r,l)}function re(e,t,n,r,i,a=0){let o=P(e,.016,t,n,.018,r,i);return o.rotation.y=a,o}function ie(e,t,n,r,a,o=0,s=Math.PI*2){let c=N(new i(n-r/2,n+r/2,80,1,o,s),a,e,.031,t);return c.rotation.x=-Math.PI/2,c}function oe(e,n,r,i,a,o,s=0,c=t){let l=new V;l.position.set(e,n,r),l.rotation.y=s,c.add(l);let u=new ye(i,a,10,12),d=u.getAttribute(`position`);for(let e=0;e<d.count;e++){let t=(d.getX(e)+i/2)/i,n=(a/2-d.getY(e))/a;d.setXYZ(e,d.getX(e),-n*a+(n>.99?.26*(1-Math.abs(t-.5)*2):0),Math.sin(t*Math.PI*5+n*.8)*.048*n)}u.computeVertexNormals(),N(u,o,0,0,0,l),P(0,-a*.44,.055,i*.065,a*.88,.018,x,l);let f=N(new Me(i*.18,6),x,0,-a*.4,.025,l);f.rotation.z=Math.PI/6,P(0,.045,0,i+.22,.09,.1,h,l)}function se(e,n,r,i,a=t){let o=new V;o.position.set(e,n,r),o.scale.setScalar(i),a.add(o);let s=[new R(.36,0),new R(.43,.15),new R(.48,.55),new R(.44,.94),new R(.37,1.07)];N(new Oe(s,18),g,0,0,0,o),ne(0,1.055,0,.365,.365,.04,h,18,o);for(let e of[.1,.26,.84,1.01]){let t=N(new p(e<.2||e>1?.395:.458,.025,5,20),_,0,e,0,o);t.rotation.x=Math.PI/2}}function ce(e,n,r,i=t){let a=new V;a.position.set(e,n,r),i.add(a),P(0,0,0,.27,.4,.27,_,a),P(0,0,0,.225,.3,.285,O,a),P(0,0,0,.285,.3,.225,O,a);for(let e of[-.135,.135])for(let t of[-.135,.135])P(e,0,t,.035,.43,.035,_,a);ne(0,.27,0,.04,.23,.18,_,4,a);let o=N(new p(.1,.018,4,14),_,0,.44,0,a);o.rotation.y=Math.PI/2}function F(e,t){ne(e,.18,t,.47,.55,.38,m,8),ne(e,.75,t,.18,.26,1.1,_,8),ne(e,1.38,t,.43,.22,.3,v,8);let n=N(new j(.28,.75,7),T,e,1.86,t);n.rotation.z=.13;let r=N(new j(.16,.54,6),D,e-.04,1.81,t+.03);r.rotation.z=-.12}an(e),rn(e),P(0,-.95,0,W.width+22,1.5,W.depth+19,m),P(0,-.24,0,W.width+22.5,.24,W.depth+19.5,u),P(0,-.33,0,W.width+3.9,.56,W.depth+3.9,d),P(0,-.135,0,W.width+2.2,.14,W.depth+2.2,m);let ue=new n().load(`./textures/limestone-court-v2.png`);ue.wrapS=ue.wrapT=Ne,ue.repeat.set(6*s,4*c),ue.colorSpace=E,ue.anisotropy=8;let de=N(new ye(W.width,W.depth),l(11778756,{map:ue,bumpMap:k(ue),bumpScale:.12,roughness:.74,metalness:.04}),0,-.03,0);de.rotation.x=-Math.PI/2,de.name=`playable-stone-floor`,de.castShadow=!1;for(let e of[-a-.6,a+.6])for(let t=0;t<W.width;t++)P(-r+.5+t,-.035,e,.96,.16,1,u);for(let e of[-r-.6,r+.6])for(let t=-a;t<=a;t++)P(e,-.035,t,1,.16,.96,d);for(let e of[-a+.18,a-.18])re(0,e,W.width-.15,.09,w);for(let e of[-6.2*s,6.2*s])re(e,0,W.depth-.4,.035,w,Math.PI/2);for(let e=-a+.8;e<=a-.8;e+=1.6)if(Math.abs(e)>3.8*c){let t=re(0,e,.13,.13,w);t.rotation.y=Math.PI/4}ie(0,0,3.2*c,.09,w),ie(0,0,2.98*c,.025,w),ie(0,0,.93,.065,w);for(let e=0;e<8;e++){let t=e*Math.PI/4,n=3.45*c,r=re(Math.sin(t)*n,Math.cos(t)*n,.31,.31,w);r.rotation.y=t+Math.PI/4,re(Math.sin(t)*2.65*c,Math.cos(t)*2.65*c,.38,.065,w,Math.PI/2-t)}let L=re(0,0,.42,.42,x);L.rotation.y=Math.PI/4;for(let e of[-1,1]){let n=e<0?y:b,i=e<0?S:C;ie(e*(r-.25),0,o+1.1,.075,i,e<0?-Math.PI/2:Math.PI/2,Math.PI).scale.x=.74;for(let t of[-a-.22,a+.22]){P(e*(r/2+.2),.2,t,r+.1,.46,.28,u),P(e*(r/2+.2),.43,t,r+.1,.035,.3,v);for(let n=.55;n<r;n+=1.2)P(e*n,.22,t,.025,.32,.287,m);re(e*(r/2-.05),t-Math.sign(t)*.4,r-.15,.1,i)}let s=a-o;for(let t of[-(a+o)/2,(a+o)/2])P(e*(r+.45),.2,t,.3,.46,s,u),P(e*(r+.45),.43,t,.32,.035,s,v);let c=new V;t.add(c),c.name=e<0?`azure-goal`:`ember-goal`,c.userData={goalPlane:e*r,opening:W.goalWidth};for(let t of[-o,o]){P(e*(r+.22),1.14,t,.23,2.35,.23,d,c);for(let n of[.3,.9,1.5,2.1])P(e*(r+.22),n,t,.265,.1,.265,u,c);P(e*(r+.07),1.18,t,.05,2.25,.1,i,c)}P(e*(r+.22),2.33,0,.23,.18,W.goalWidth+.22,d,c),P(e*(r+.08),2.33,0,.055,.07,W.goalWidth+.2,v,c);for(let t of[-o,o])P(e*(r+.22),2.48,t,.31,.18,.35,u,c);P(e*(r+1),-.04,0,1.7,.04,W.goalWidth-.02,n,c),oe(e*(r+1.9),3.7,o+1.05,1.2,1.25,n,e<0?Math.PI/2:-Math.PI/2,c),ne(e*(r+1.9),1.84,o+1.05,.06,.08,3.78,_,12,c),ne(e*(r+1.9),.1,o+1.05,.22,.27,.24,m,12,c);let l=[];for(let t=-o;t<=o;t+=.47)l.push(e*(r+1.78),.1,t,e*(r+1.78),2.23,t);for(let t=.2;t<2.3;t+=.35)l.push(e*(r+1.78),t,-o,e*(r+1.78),t,o);let p=new U;p.setAttribute(`position`,new f(l,3)),c.add(new le(p,new _e({color:12167038,transparent:!0,opacity:.4})));for(let t of[-o-1.8,o+1.8])F(e*(r+2.4),t)}for(let e of[-1,1]){for(let t of[-19,-5,17]){let{x:n,z:r}=Qt(t,e*17.6);P(n,.2,r,3.4,.55,1.2,m),P(n,.52,r,3.6,.12,1.4,u)}for(let[t,n]of[[-23,.9],[-21,.68],[10,.87],[25,1.1]]){let{x:r,z:i}=Qt(t,e*18.2);se(r,-.05,i,n),n>.85&&ce(r,n*1.08+.15,i)}for(let t of[-22,22]){let{x:n,z:r}=Qt(t,e*16.5);ne(n,1.7,r,.055,.075,3.5,_,10),oe(n,3.35,r,1,1.7,n<0?y:b,e<0?0:Math.PI)}}return sn(t),nn(e)}function sn(t){t.updateWorldMatrix(!0,!0);let n=t.matrixWorld.clone().invert(),r=new Map;t.traverse(t=>{if(!(t instanceof B)||t instanceof e||Array.isArray(t.material)||t.material.transparent)return;let n=`${t.material.uuid}:${t.castShadow}:${t.receiveShadow}:${t.renderOrder}:${t.layers.mask}`,i=r.get(n)||[];i.push(t),r.set(n,i)});let i=new Set;for(let e of r.values()){if(e.length<2)continue;let r=e.map(e=>{let t=e.geometry.index?e.geometry.toNonIndexed():e.geometry.clone();return t.applyMatrix4(new Ee().multiplyMatrices(n,e.matrixWorld)),e.material.userData.worldScale&&Zt(t,e.material.userData.worldScale),t.clearGroups(),t}),a=de(r,!1);if(r.forEach(e=>e.dispose()),!a)continue;a.computeBoundingBox(),a.computeBoundingSphere();let o=e[0],s=new B(a,o.material);s.name=`arena-batch`,s.castShadow=o.castShadow,s.receiveShadow=o.receiveShadow,s.renderOrder=o.renderOrder,s.layers.mask=o.layers.mask,t.add(s);for(let t of e)i.add(t.geometry),t.removeFromParent()}t.traverse(e=>{e instanceof B&&i.delete(e.geometry)}),i.forEach(e=>e.dispose())}var cn=dt.colosseum;function ln(e){return()=>(e=Math.imul(e,1664525)+1013904223>>>0,e/4294967296)}function un(){let e=document.createElement(`canvas`);e.width=e.height=1024;let t=e.getContext(`2d`),n=ln(4815);t.fillStyle=`#8f7456`,t.fillRect(0,0,1024,1024);for(let e=0;e<700;e++){let r=n()*1024,i=n()*1024,a=8+n()*80;for(let n of[-1024,0,1024])for(let o of[-1024,0,1024]){let s=r+n,c=i+o;if(s+a<0||c+a<0||s-a>1024||c-a>1024)continue;let l=t.createRadialGradient(s,c,0,s,c,a);l.addColorStop(0,e%2?`#d4b78e28`:`#392e2928`),l.addColorStop(1,`#00000000`),t.fillStyle=l,t.fillRect(s-a,c-a,a*2,a*2)}}for(let e=0;e<62e3;e++){let r=n()*1024,i=n()*1024,a=.35+n()*1.4;t.fillStyle=e%3==0?`#dfc9a13b`:`#342b292b`,t.fillRect(r,i,a,a*.7)}for(let e=0;e<1600;e++){let e=n()*1024,r=n()*1024,i=.7+n()*2;t.fillStyle=`#4c423d50`,t.beginPath(),t.ellipse(e,r,i*1.5,i,.6,0,Math.PI*2),t.fill(),t.fillStyle=`#b5a18b65`,t.fillRect(e-i,r-i*.4,i*2,.7)}let r=new ue(e);return r.colorSpace=E,r.wrapS=r.wrapT=Ne,r.repeat.set(6,6),r.anisotropy=8,r.name=`Colosseum packed earth`,r}function dn(e,t,n,r=.5){let i=new U().setFromPoints(t);e.add(new De(i,new _e({color:n,transparent:!0,opacity:r,depthWrite:!1})))}function fn(t){let n=ln(65123),i=[],a=[4609910,7552059,7823433,10127200,3755078,11182225,5850724,3359059],o=(e,t)=>Math.abs(Math.atan2(Math.sin(e-t),Math.cos(e-t)));for(let e=0;e<8;e++){let t=34.48+e*1.86,r=11+e*1.22+.46,s=Math.floor(2*Math.PI*t/1.05);for(let e=0;e<s;e++){let c=(e+.5)*Math.PI*2/s;o(c,Math.round(c/(Math.PI/6))*Math.PI/6)*t<1.08||t>=39.2&&(o(c,-Math.PI/2)<16*Math.PI/180||o(c,Math.PI/2)<11*Math.PI/180)||t>=44.5&&o(c,59*Math.PI/180)<.075||n()<.14||i.push({x:Math.cos(c)*t,y:r,z:Math.sin(c)*t,angle:-c-Math.PI/2,color:a[Math.floor(n()*a.length)],size:.88+n()*.24})}}let s=new e(new be(.21,.28,.66,7),new I({roughness:1}),i.length),c=new e(new k(.18,7,5),new I({roughness:1}),i.length),l=new e(new be(.075,.085,.53,5),new I({roughness:1}),i.length*2),u=new M,d=new r;i.forEach((e,t)=>{u.position.set(e.x,e.y+.32*e.size,e.z),u.rotation.set(0,e.angle,0),u.scale.set(e.size,e.size,e.size),u.updateMatrix(),s.setMatrixAt(t,u.matrix),s.setColorAt(t,d.setHex(e.color)),u.position.y=e.y+.86*e.size,u.updateMatrix(),c.setMatrixAt(t,u.matrix),c.setColorAt(t,d.setHSL(.07+n()*.04,.19+n()*.15,.37+n()*.28));for(let n=0;n<2;n++){let r=n?1:-1,i=t%9==0;u.position.set(e.x+Math.cos(e.angle)*r*.26,e.y+(i?.72:.3),e.z-Math.sin(e.angle)*r*.26),u.rotation.set(i?.4:-.6,e.angle,r*(i?.5:.12)),u.updateMatrix(),l.setMatrixAt(t*2+n,u.matrix),l.setColorAt(t*2+n,d.setHex(e.color))}}),s.name=`Colosseum audience clothing`,c.name=`Colosseum audience faces`,l.name=`Colosseum audience arms`;for(let e of[s,c,l])e.receiveShadow=!0,e.castShadow=!1,e.computeBoundingSphere(),t.add(e);t.userData.spectators=i.length}async function pn(e){an(e);let t=new V;t.name=`rift-arena`,t.userData={mapId:`colosseum`,radius:cn.radius,area:cn.area},e.add(t);let n=un(),r=new B(new Me(cn.radius+2,192),new I({map:n,bumpMap:n,bumpScale:.065,roughness:.98,color:`#c4b4a0`}));r.name=`Colosseum circular soil`,r.rotation.x=-Math.PI/2,r.position.y=-.035,r.receiveShadow=!0,t.add(r);let a=new z({color:`#d9cab1`,transparent:!0,opacity:.29,side:2,depthWrite:!1});for(let[e,n]of[[5,.065],[cn.radius-1.4,.07]]){let r=new B(new i(e-n,e,192),a);r.rotation.x=-Math.PI/2,r.position.y=.003,t.add(r)}let o=new B(new Me(.3,24),a);o.rotation.x=-Math.PI/2,o.position.y=.004,t.add(o),dn(t,[new H(0,.005,-cn.radius+1.4),new H(0,.005,cn.radius-1.4)],`#dac9a8`,.28);let c=[];for(let e of[-1,1]){let n=e<0?`#76caff`:`#ee9565`,r=e*cn.goalX,o=new V;o.name=e<0?`Azure scoring gate`:`Ember scoring gate`,o.position.x=e*(cn.radius+5.7),c.push(o);let l=new B(new pe(.3,8.1,15.1),new I({color:`#282b2a`,roughness:.94}));l.position.y=4,o.add(l);let u=new I({color:`#434847`,metalness:.55,roughness:.67});for(let t=-7;t<=7;t+=.7){let n=new B(new pe(.25,7.8,.09),u);n.position.set(-e*.28,3.9,t),o.add(n)}for(let t of[1,3,5,7]){let n=new B(new pe(.32,.13,14.8),u);n.position.set(-e*.3,t,0),o.add(n)}let d=new B(new be(1.05,1.05,.12,8),new I({color:n,roughness:.72,emissive:n,emissiveIntensity:.12}));d.rotation.z=Math.PI/2,d.position.set(-e*.5,4.1,0),o.add(d),t.add(o);let f=new B(new ye(.14,cn.goalWidth),new z({color:n,transparent:!0,opacity:.65,depthWrite:!1}));f.rotation.x=-Math.PI/2,f.position.set(r,.018,0),t.add(f);for(let i of[-cn.goalWidth/2,cn.goalWidth/2]){let a=new B(new s(.24),new I({color:n,emissive:n,emissiveIntensity:1.3,roughness:.32}));a.position.set(r,2.3,i),t.add(a);let o=new C(n,12,6,2);o.position.set(r-e*.8,2.5,i),t.add(o)}let p=new B(new i(3.9,3.96,64,1,-Math.PI/2,Math.PI),a);p.rotation.x=-Math.PI/2,p.rotation.z=e<0?0:Math.PI,p.position.set(r,.012,0),t.add(p)}for(let e of c)sn(e);let l=await new Ce().loadAsync(`./models/maps/royal-colosseum-v1.glb`);l.scene.name=`Blender Colosseum`,l.scene.traverse(e=>{if(e instanceof B){e.castShadow=!0,e.receiveShadow=!0;for(let t of Array.isArray(e.material)?e.material:[e.material])t instanceof I&&t.map&&(t.map.anisotropy=8)}}),t.add(l.scene),fn(t)}var mn={zenith:`#86c6ee`,middle:`#b4def4`,horizon:`#fdf3df`,below:`#e4f0f2`,sun:{azimuth:-126.4,elevation:44.9,color:`#fff2c9`},rainbow:{azimuth:6,elevation:-15,radius:33,width:5.4,strength:.78},clouds:[[-158,12,6.5],[-122,19,5],[-84,11,7],[-46,21,5.5],[-14,9,4.5],[34,20,5.5],[68,11,7.5],[104,17,6],[138,10,7],[172,22,5.5],[-178,30,4],[10,29,4]]},hn=(e,t)=>{let n=L.degToRad(e),r=L.degToRad(t);return new H(Math.cos(r)*Math.cos(n),Math.sin(r),Math.cos(r)*Math.sin(n))};function gn(e){if(e.getObjectByName(`EpicCity_TwilightSky`))return;let t=mn,n=t.clouds.length,i=[],a=[],o=[],s=[];t.clouds.forEach(([e,t,n],r)=>{let c=hn(e,t),l=new H().crossVectors(c,new H(0,1,0)).normalize(),u=new H().crossVectors(l,c).normalize();i.push(c),a.push(l),o.push(u),s.push(new R(Math.sin(L.degToRad(n)),r*7.31+1.7))});let c=new ve({name:`StorybookSkyMaterial`,side:1,depthTest:!1,depthWrite:!1,fog:!1,toneMapped:!0,defines:{CLOUDS:n},uniforms:{uZenith:{value:new r(t.zenith)},uMiddle:{value:new r(t.middle)},uHorizon:{value:new r(t.horizon)},uBelow:{value:new r(t.below)},uSunDir:{value:hn(t.sun.azimuth,t.sun.elevation)},uSunColor:{value:new r(t.sun.color)},uRainbowDir:{value:hn(t.rainbow.azimuth,t.rainbow.elevation)},uRainbow:{value:new H(L.degToRad(t.rainbow.radius),L.degToRad(t.rainbow.width),t.rainbow.strength)},uCloudC:{value:i},uCloudR:{value:a},uCloudU:{value:o},uCloudS:{value:s}},vertexShader:`
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
      }`}),l=new k(650,48,32),u=new B(l,c);u.name=`EpicCity_TwilightSky`,u.renderOrder=-1e4,u.frustumCulled=!1,u.castShadow=!1,u.receiveShadow=!1;let d=new H;u.onBeforeRender=(e,t,n)=>{n.getWorldPosition(d),u.position.copy(d),u.updateMatrixWorld(!0)},u.userData.dispose=()=>{u.removeFromParent(),l.dispose(),c.dispose()},e.add(u)}var _n={dirt:{half:28,radius:33},trackLines:[24,25.6,27.2,28.8,30.4],clear:12,building:{front:90,z:-6,length:46,depth:11},open:[{x0:54,x1:116,z0:-44,z1:34},{x0:-42,x1:30,z0:-56,z1:-33},{x0:-36,x1:46,z0:33,z1:52},{x0:-97,x1:-64,z0:-2,z1:32}],rings:[{radius:185},{radius:310},{radius:500}]};function vn(e){return()=>{e=e+1831565813|0;let t=Math.imul(e^e>>>15,1|e);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}var yn=(e,t)=>{let n=Math.sin(e*127.1+t*311.7)*43758.5453;return n-Math.floor(n)};function bn(e,t){let n=Math.floor(e),r=Math.floor(t),i=e-n,a=t-r,o=i*i*(3-2*i),s=a*a*(3-2*a),c=yn(n,r),l=yn(n+1,r),u=yn(n,r+1),d=yn(n+1,r+1);return c+(l-c)*o+(u-c)*s+(c-l-u+d)*o*s}var xn=(e,t,n)=>bn(Math.cos(e)*t+n,Math.sin(e)*t+n*1.7),Sn=(e,t,n)=>{let r=Math.min(1,Math.max(0,(n-e)/(t-e)));return r*r*(3-2*r)},Cn=(e,t)=>Math.hypot(Math.max(Math.abs(e)-_n.dirt.half,0),t)-_n.dirt.radius,wn=(e,t)=>Math.hypot(Math.max(Math.abs(e)-W.width/2,0),Math.max(Math.abs(t)-W.depth/2,0)),Tn=(e,t)=>Math.min(..._n.open.map(n=>Math.hypot(Math.max(n.x0-e,0,e-n.x1),Math.max(n.z0-t,0,t-n.z1))));function En(e,t){let n=Sn(30,110,Cn(e,t))*Sn(0,20,Tn(e,t));return n<=0?0:n*(5+11*bn(e*.011+3.1,t*.011+7.7))+n*n*9}var Dn=new r;function G(e,t){e.getAttribute(`uv`)&&e.deleteAttribute(`uv`);let n=e.getAttribute(`position`),r=new Float32Array(n.count*3);for(let e=0;e<n.count;e++){let i=typeof t==`function`?t(n.getX(e),n.getY(e),n.getZ(e)):Dn.set(t);r[e*3]=i.r,r[e*3+1]=i.g,r[e*3+2]=i.b}return e.setAttribute(`color`,new f(r,3)),e.index||e.setIndex([...Array(n.count).keys()]),e}var On=(e,t,n,i)=>{let a=new r(e),o=new r(t);return(e,t)=>Dn.copy(a).lerp(o,Sn(n,i,t))};function kn(e,t,n=1){let i=e.index?e.toNonIndexed():e,a=t.map(e=>new r(e)),o=i.getAttribute(`position`).count;i.getAttribute(`uv`)&&i.deleteAttribute(`uv`);let s=new Float32Array(o*3);for(let e=0;e<o;e++){let t=a[Math.floor(e/3/n)%a.length];s[e*3]=t.r,s[e*3+1]=t.g,s[e*3+2]=t.b}return i.setAttribute(`color`,new f(s,3)),i.setIndex([...Array(o).keys()]),i}function An(e,t,n){let i=e.index?e.toNonIndexed():e,a=t.map(e=>new r(e)),o=i.getAttribute(`position`),s=o.count,c=new Float32Array(s*3);i.getAttribute(`uv`)&&i.deleteAttribute(`uv`);for(let e=0;e<s;e+=3){let t=(o.getX(e)+o.getX(e+1)+o.getX(e+2))/3,r=(o.getZ(e)+o.getZ(e+1)+o.getZ(e+2))/3,i=a[Math.floor((Math.atan2(r,t)+Math.PI)/(Math.PI*2)*n)%a.length];for(let t=0;t<3;t++)c[(e+t)*3]=i.r,c[(e+t)*3+1]=i.g,c[(e+t)*3+2]=i.b}return i.setAttribute(`color`,new f(c,3)),i.setIndex([...Array(s).keys()]),i}var K=(e,t,n,r,i=0,a=1,o=0,s=0)=>e.applyMatrix4(new Ee().compose(new H(t,n,r),new T().setFromEuler(new te(o,i,s,`YXZ`)),Array.isArray(a)?new H(...a):new H(a,a,a))),q=(e,t,n,r)=>G(new pe(e,t,n),r),J=(e,t,n,r,i=10)=>G(new be(e,t,n,i,1),r),jn=(e,t,n,r=10)=>G(new j(e,t,r,1),n),Y=(e,t,n=10,r=7)=>G(new k(e,n,r),t);function X(e,t,n,r,i=6){let a=t.clone().sub(e);return J(n,n,a.length(),r,i).applyMatrix4(new Ee().compose(e.clone().add(t).multiplyScalar(.5),new T().setFromUnitVectors(new H(0,1,0),a.normalize()),new H(1,1,1)))}function Mn(e,t,n){let r=0;e.forEach(([t,n],i)=>{let[a,o]=e[(i+1)%e.length];r+=t*o-a*n}),r<0&&(e=[...e].reverse());let i=[],a=[],o=e.length,s=(t,n)=>{let r=i.length/3;for(let[n,r]of e)i.push(n,r,t);for(let e=1;e<o-1;e++)a.push(...n?[r,r+e+1,r+e]:[r,r+e,r+e+1])};s(t/2,!1),s(-t/2,!0);for(let n=0;n<o;n++){let[r,s]=e[n],[c,l]=e[(n+1)%o],u=i.length/3;i.push(r,s,t/2,c,l,t/2,c,l,-t/2,r,s,-t/2),a.push(u,u+3,u+2,u,u+2,u+1)}let c=new U;return c.setAttribute(`position`,new f(i,3)),c.setIndex(a),c.computeVertexNormals(),G(c,n)}function Nn(e,t,n,r,i){let a=[],o=[],s=e.length;for(let r=0;r<s;r++){let o=e[i?(r-1+s)%s:Math.max(0,r-1)],c=e[i?(r+1)%s:Math.min(s-1,r+1)].clone().sub(o).normalize(),l=-c.y*t/2,u=c.x*t/2,d=e[r];a.push(d.x-l,n,d.y-u,d.x+l,n,d.y+u)}for(let e=0;e<(i?s:s-1);e++){let t=e*2,n=(e+1)%s*2;o.push(t,n,t+1,t+1,n,n+1)}let c=new U;c.setAttribute(`position`,new f(a,3)),c.setIndex(o),c.computeVertexNormals();let l=c.getAttribute(`normal`);for(let e=0;e<l.count;e++)l.setXYZ(e,0,1,0);return G(c,r)}var Pn={dirt:`#dcbd8f`,dirtDark:`#c9a575`,grass:`#93c66e`,grassLight:`#a9d47e`,grassDark:`#7cb35f`,chalk:`#fbfaf3`,board:`#fbf6ec`,azure:`#8ccdf0`,ember:`#f6a596`,posts:[`#f4a9bd`,`#9ddbc6`,`#f7dc72`,`#c4b2ee`],trunk:`#94653f`,leaves:[`#6fb05d`,`#5d9e55`,`#86c26b`],pine:`#3f8061`,blossom:`#f3b5c8`,autumn:`#eba648`,wall:`#f7edd9`,roof:`#e2705a`,trim:`#4aa3a2`,glass:`#a9daf0`,wood:`#a76a45`,navy:`#3f4b77`,cap:[`#e5574d`,`#9c84d6`,`#f29e4c`],stem:`#f8eedb`,rainbow:[`#ff9aa2`,`#ffc58e`,`#fff09a`,`#a9e8a4`,`#9ccff6`,`#c9a8ef`]};function Fn(){let e=vn(20261002),t=[],n=7.5;for(let r=-175;r<=175;r+=n)for(let i=-175;i<=175;i+=n){let a=r+(e()-.5)*n*.9,o=i+(e()-.5)*n*.9,s=e(),c=e(),l=e(),u=e(),d=wn(a,o),f=Cn(a,o),p=Math.hypot(a,o);if(d<_n.clear+2||f<4||Tn(a,o)<3||p>175||s>.82*Sn(4,10,f)*(1-.8*Sn(45,120,f))+.035)continue;let m=c<.58?`round`:c<.8?`pine`:c<.9?`blossom`:`autumn`;t.push({x:a,z:o,y:En(a,o),scale:.78+l*.62,kind:m,tint:u})}return t}function In(e){gn(e);let t=new V;t.name=`rift-arena`,e.add(t);let n=W.width/2,a=W.depth/2,o=W.goalWidth/2;t.userData={mapId:`school`,theme:`storybook-forest-school`,courtWidth:W.width,courtDepth:W.depth,goalWidth:W.goalWidth,area:W.width*W.depth,tallClear:_n.clear};let s=[],c=[],l=[],u=[],d=[],m=vn(7),h=Pn,g=(e,t,n)=>new H(e,t,n),_=(e,t)=>Math.abs(e)<n+30&&Math.abs(t)<a+30?s:l,v=(e,t)=>{let n=Cn(e,t),i=bn(e*.06,t*.06),a=bn(e*.4+9,t*.4+2),o=Dn.set(h.dirt).lerp(new r(h.dirtDark),i*.45+a*.15).clone(),s=new r(h.grass).lerp(new r(i>.5?h.grassLight:h.grassDark),Math.abs(i-.5)*1.2),c=En(e,t);return c>0&&s.lerp(new r(`#9fc7a0`),Sn(4,40,c)*.35),o.lerp(s,Sn(-.4,1.1,n))},y=new ye(130,84,130,84);y.rotateX(-Math.PI/2);let b=new ye(1e3,1e3,100,100);b.rotateX(-Math.PI/2);{let e=b.getAttribute(`position`);for(let t=0;t<e.count;t++)e.setY(t,En(e.getX(t),e.getZ(t))-.05);b.computeVertexNormals()}for(let e of[y,b]){let t=e.getAttribute(`position`),n=e.getAttribute(`uv`),r=new Float32Array(t.count*3);for(let e=0;e<t.count;e++){let i=t.getX(e),a=t.getZ(e),o=v(i,a);r[e*3]=o.r,r[e*3+1]=o.g,r[e*3+2]=o.b,n.setXY(e,i/5,a/5)}e.setAttribute(`color`,new f(r,3))}let x=new I({name:`School yard ground`,vertexColors:!0,roughness:1,metalness:0,map:Ln()}),S=new B(de([y,b]),x);S.name=`school-yard-ground`,S.receiveShadow=!0,t.add(S),y.dispose(),b.dispose();let C=.12,w=.012,T=(e,t,n,r)=>c.push(K(q(n,.004,r,h.chalk),e,w,t));for(let e of[-a+.1,a-.1])T(0,e,W.width,C);for(let e of[-n+.1,n-.1])T(e,0,C,W.depth);T(0,0,C,W.depth);let E=(e,t,n,r=0,a=Math.PI*2)=>c.push(K(G(new i(n-C/2,n+C/2,72,1,r,a),h.chalk),e,w,t,0,1,-Math.PI/2));E(0,0,6.4),c.push(K(G(new Me(.28,16),h.chalk),0,w,0,0,1,-Math.PI/2));for(let e of[-1,1]){let t=e*(n-9),r=e*(n-3.5),i=e*(n-7);T(t,0,C,26),T(r,0,C,19);for(let r of[-13,13])T((t+e*n)/2,r,9,C);for(let t of[-9.5,9.5])T((r+e*n)/2,t,3.5,C);c.push(K(G(new Me(.22,14),h.chalk),i,w,0,0,1,-Math.PI/2));let o=Math.acos(2/6.4);E(i,0,6.4,e>0?Math.PI-o:-o,o*2);for(let t of[-1,1])E(e*n,t*a,1,e>0?t>0?Math.PI/2:Math.PI:t>0?0:-Math.PI/2,Math.PI/2)}let D=e=>{let t=[],n=_n.dirt.half;for(let r=0;r<=36;r++){let i=-Math.PI/2+Math.PI*r/36;t.push(new R(n+Math.cos(i)*e,Math.sin(i)*e))}for(let r=0;r<=36;r++){let i=Math.PI/2+Math.PI*r/36;t.push(new R(-n+Math.cos(i)*e,Math.sin(i)*e))}return t};for(let e of _n.trackLines)c.push(Nn(D(e),.1,.011,h.chalk,!0));T(0,(_n.trackLines[0]+_n.trackLines.at(-1))/2,.16,_n.trackLines.at(-1)-_n.trackLines[0]);for(let e of[-a-.22,a+.22]){s.push(K(q(W.width+.6,.42,.16,h.board),0,.21,e));for(let t of[-1,1])s.push(K(q(n+.3,.07,.24,t<0?h.azure:h.ember),t*(n+.3)/2,.45,e))}for(let e of[-1,1])for(let t of[-(a+o)/2,(a+o)/2])s.push(K(q(.16,.42,a-o+.3,h.board),e*(n+.45),.21,t)),s.push(K(q(.24,.07,a-o+.3,e<0?h.azure:h.ember),e*(n+.45),.45,t));let O=0,ee=(e,t)=>{let n=h.posts[O++%h.posts.length];s.push(K(J(.08,.09,.5,h.board,8),e,.25,t),K(Y(.14,n,9,6),e,.56,t))};for(let e=-n;e<=n+.01;e+=3.4)for(let t of[-a-.22,a+.22])ee(e,t);for(let e of[-1,1])for(let t of[-a,-o-.2,o+.2,a])ee(e*(n+.45),t);for(let e of[-1,1]){let r=e<0?h.azure:h.ember,i=e*(n+.22),a=e*(n+1.9);for(let e of[-o,o])s.push(K(J(.12,.12,2.42,`#ffffff`,10),i,1.21,e)),s.push(X(g(i,2.36,e),g(a,.06,e),.07,`#f4f4f0`)),s.push(X(g(i,.06,e),g(a,.06,e),.06,`#f4f4f0`));s.push(X(g(i,2.36,-o-.1),g(i,2.36,o+.1),.11,`#ffffff`,10)),s.push(X(g(a,.06,-o),g(a,.06,o),.06,`#f4f4f0`)),c.push(K(q(1.66,.02,W.goalWidth-.1,r),(i+a)/2,.012,0));let l=[];for(let e=-o;e<=o+.01;e+=.5)l.push(i,2.36,e,a,.06,e);for(let e=.08;e<1;e+=.12){let t=i+(a-i)*e,n=2.36+-2.3*e;l.push(t,n,-o,t,n,o)}for(let e of[-o,o]){for(let t=.15;t<1;t+=.17){let n=i+(a-i)*t;l.push(n,.06,e,n,2.36+-2.3*t,e)}for(let t=.4;t<2.36;t+=.35)l.push(i,t,e,i+(a-i)*(2.36-t)/2.3,t,e)}let u=new U;u.setAttribute(`position`,new f(l,3));let d=new le(u,new _e({color:r,transparent:!0,opacity:.6}));d.name=e<0?`azure-goal`:`ember-goal`,d.userData={goalPlane:e*n,opening:W.goalWidth},t.add(d);for(let t of[-o-1.2,o+1.2])s.push(K(J(.05,.05,3.2,`#ffffff`,6),e*(n+1.2),1.6,t)),s.push(K(Mn([[0,0],[1.1,-.35],[0,-.7]],.03,r),e*(n+1.2),3.15,t,e<0?0:Math.PI))}for(let e=-27;e<=27;e+=9){s.push(K(q(7.6,.28,1.4,`#d9876a`),e,.14,35)),s.push(K(q(7.2,.1,1,`#8a6a4e`),e,.27,35));for(let t=0;t<9;t++){let n=e-3.2+t*.8,r=35+(t%2?.25:-.25),i=h.rainbow[(t+Math.round(e/9)+3)%6];s.push(K(J(.025,.025,.45,`#5f9e55`,4),n,.5,r),K(jn(.13,.26,i,6),n,.8,r,0,1,Math.PI))}}s.push(K(q(3.2,1,2,`#ffffff`),0,.5,37.4),K(q(3.4,.08,2.2,`#7fbf8f`),0,1.04,37.4),K(q(1.2,.5,.8,`#7fbf8f`),0,.25,36.1));for(let e of[-17,4]){for(let[t,n]of[[-3.2,-2.2],[3.2,-2.2],[-3.2,2.2],[3.2,2.2]])s.push(K(J(.06,.06,2.7,`#ffffff`,6),e+t,1.35,42+n));s.push(K(kn(new j(3.9,1.3,4,1).rotateY(Math.PI/4),[`#7ec0ea`,`#ffffff`]),e,3.3,42,0,[1.3,1,1]));for(let t=0;t<12;t++)for(let n of[-2.76,2.76])s.push(K(Mn([[-.3,0],[.3,0],[0,-.38]],.02,t%2?`#7ec0ea`:`#ffffff`),e-3.3+t*.6,2.66,42+n));for(let t=0;t<9;t++)for(let n of[-3.58,3.58])s.push(K(Mn([[-.3,0],[.3,0],[0,-.38]],.02,t%2?`#7ec0ea`:`#ffffff`),e+n,2.66,39.6+t*.6,Math.PI/2));s.push(K(q(5.2,.08,1,`#ffffff`),e,.78,42),K(q(.08,.74,.9,`#d8d0c0`),e-2.4,.37,42),K(q(.08,.74,.9,`#d8d0c0`),e+2.4,.37,42))}s.push(K(J(.09,.11,9,`#ffffff`,8),26,4.5,39),K(Y(.2,`#f7dc72`),26,9.1,39),K(Mn([[0,0],[2.6,-.8],[0,-1.6]],.04,`#f9e27a`),26.1,8.7,39),K(J(.32,.32,.05,`#e2705a`,14),26.9,8.1,39,0,1,Math.PI/2));let te=[-34,-10,14,38];for(let e of te)s.push(K(J(.07,.09,6.2,`#f3ece0`,6),e,3.1,48));for(let e=0;e<te.length-1;e++){let t=te[e],n=te[e+1],r=[];for(let e=0;e<=1.0001;e+=1/26)r.push(g(t+(n-t)*e,6.1-Math.sin(Math.PI*e)*1.6,48));for(let t=0;t<r.length-1;t++)s.push(X(r[t],r[t+1],.02,`#7a6a5a`,4)),t%1==0&&s.push(K(Mn([[-.3,0],[.3,0],[0,-.62]],.02,h.rainbow[(t+e)%6]),r[t].x+.45,r[t].y-.02,48))}for(let e=0;e<9;e++)s.push(K(G(new p(.48,.2,6,14),h.posts[e%4]),-33+e*1.5,.25,-35.5,0,1,0,0));[.9,1.15,1.4].forEach((e,t)=>{let n=-33+t*1.8;for(let r of[-41,-39])s.push(K(J(.07,.07,e,h.posts[t],6),n,e/2,r));s.push(X(g(n,e,-41),g(n,e,-39),.035,`#b9c2cc`,6))});for(let e=0;e<=3;e++)for(let t=0;t<=3;t++){let n=[`#ef7f74`,`#f7d36a`,`#8fd18a`,`#7dbbea`];s.push(X(g(-24+e,0,-44+t),g(-24+e,3,-44+t),.045,`#f2f2f2`,5));for(let r=1;r<=3;r++)e<3&&s.push(X(g(-24+e,r,-44+t),g(-23+e,r,-44+t),.04,n[r],5)),t<3&&s.push(X(g(-24+e,r,-44+t),g(-24+e,r,-43+t),.04,n[r],5))}for(let[e,t]of[[-.8,-.8],[.8,-.8],[-.8,.8],[.8,.8]])s.push(K(J(.08,.08,3.2,`#7dbbea`,6),-8+e,1.6,-44+t));s.push(K(q(1.8,.12,1.8,`#f7d36a`),-8,2.2,-44),K(jn(1.5,1,`#ef7f74`,4),-8,3.7,-44,Math.PI/4)),s.push(K(q(.9,.1,4.6,`#f7d36a`),-8,1.15,-40.2,0,1,-.5),K(q(.08,.3,4.6,`#ef7f74`),-7.55,1.32,-40.2,0,1,-.5),K(q(.08,.3,4.6,`#ef7f74`),-8.45,1.32,-40.2,0,1,-.5));for(let e=0;e<6;e++)s.push(X(g(-8.6,.35*e+.2,-45.2),g(-7.4,.35*e+.2,-45.2),.04,`#f2f2f2`,5));for(let e of[-46,-42])s.push(X(g(6,0,e-1.2),g(6,2.8,e),.08,`#ef7f74`),X(g(6,0,e+1.2),g(6,2.8,e),.08,`#ef7f74`));s.push(X(g(6,2.8,-46.3),g(6,2.8,-41.7),.08,`#f7d36a`));for(let e of[-45,-43])s.push(X(g(5.75,2.8,e),g(5.75,.65,e),.015,`#9aa3ad`,4),X(g(6.25,2.8,e),g(6.25,.65,e),.015,`#9aa3ad`,4),K(q(.75,.08,.4,`#8fd18a`),6,.62,e));s.push(K(q(5,.2,.25,h.wood),20,.1,-41.5),K(q(5,.2,.25,h.wood),20,.1,-45.5),K(q(.25,.2,4.2,h.wood),17.5,.1,-43.5),K(q(.25,.2,4.2,h.wood),22.5,.1,-43.5)),c.push(K(q(4.8,.06,3.8,`#f0dca9`),20,.04,-43.5)),s.push(K(jn(.6,.7,`#e8cf98`,8),19,.4,-43),K(J(.22,.17,.32,`#e5574d`,10),21.2,.2,-44.2));for(let e=0;e<4;e++)s.push(K(q(2.2,.45,.5,h.wood),-14+e*9,.45,51.5),K(q(.1,.45,.4,`#7c5338`),-14.9+e*9,.22,51.5),K(q(.1,.45,.4,`#7c5338`),-13.1+e*9,.22,51.5));{let e=_n.building,t=e.front,n=(t+(e.front+e.depth))/2,r=8.8;l.push(K(q(e.depth,r,e.length,h.wall),n,r/2,e.z),K(q(e.depth+.3,.5,e.length+.3,`#d9c9ae`),n,.25,e.z));let i=(e,t,n,r,i,a,o,s=!1)=>{let c=s?Math.PI/2:0;l.push(K(Mn([[-n/2-.7,0],[n/2+.7,0],[0,r]],e,o),a,i,t,c)),l.push(K(Mn([[-n/2,0],[n/2,0],[0,r-.4]],e-.6,h.wall),a,i-.02,t,c))};i(e.length+1.2,e.z,e.depth,4.6,r,n,h.roof);for(let n=e.z-e.length/2+2.6;n<=e.z+e.length/2-2.4;n+=3.7)if(!(Math.abs(n-e.z)<5)){for(let[e,r]of[[2.6,m()<.25],[6.6,m()<.2]])if(l.push(K(q(.12,2.5,2.2,`#ffffff`),t-.06,e,n)),(r?u:l).push(K(q(.14,2.1,1.8,r?`#ffe7b0`:h.glass),t-.09,e,n)),l.push(K(q(.18,.1,1.8,`#ffffff`),t-.1,e,n),K(q(.18,2.1,.1,`#ffffff`),t-.1,e,n)),e<3){l.push(K(q(.5,.3,2,h.wood),t-.3,e-1.35,n));for(let r=0;r<4;r++)l.push(K(Y(.17,r%2?`#f08a9b`:`#f7d36a`,7,5),t-.32,e-1.1,n-.7+r*.47))}}let a=t-.4,o=7.2,s=17.5;l.push(K(q(o,s,o,h.wall),a+o/2-1,s/2,e.z),K(q(7.6000000000000005,.5,7.6000000000000005,h.trim),a+o/2-1,s,e.z),K(q(7.6000000000000005,.4,7.6000000000000005,h.trim),a+o/2-1,r,e.z)),l.push(K(jn(o*.78,7.5,h.trim,4),a+o/2-1,21.4,e.z,Math.PI/4),K(Y(.35,`#f7d36a`),a+o/2-1,25.3,e.z)),l.push(K(J(.05,.05,2.2,`#5d5a6b`,5),a+o/2-1,26.3,e.z),K(Mn([[0,.25],[1.4,0],[0,-.25]],.05,`#5d5a6b`),a+o/2-1,26.9,e.z,Math.PI/2));let c=a-1.05;l.push(K(J(2.25,2.25,.2,h.navy,32),c,12,e.z,0,1,0,Math.PI/2),K(J(2,2,.24,`#fffdf6`,32),c-.02,12,e.z,0,1,0,Math.PI/2));for(let t=0;t<12;t++){let n=t*Math.PI/6;l.push(K(q(.1,t%3?.22:.42,.1,h.navy),c-.16,12+Math.cos(n)*1.65,e.z+Math.sin(n)*1.65,0,1,n))}for(let[t,n,r]of[[1.1,-Math.PI/3,.16],[1.55,Math.PI/3,.11]])l.push(K(q(.1,t,r,h.navy),c-.22,12+Math.cos(n)*t/2,e.z+Math.sin(n)*t/2,0,1,n));l.push(K(Mn([[-1.1,0],[1.1,0],[1.1,1.8],[0,2.6],[-1.1,1.8]],.2,`#6b5a78`),a-1.02,14.6,e.z,Math.PI/2)),l.push(K(Y(.5,`#f2c75c`,10,7),a-1,15.7,e.z)),l.push(K(Mn([[-1.4,0],[1.4,0],[1.4,2.6],[0,3.8],[-1.4,2.6]],.25,h.wood),a-1.05,.5,e.z,Math.PI/2)),l.push(K(q(.12,3,.08,`#7c5338`),a-1.2,2.2,e.z),K(Y(.09,`#f7d36a`,6,4),a-1.25,2,e.z+.45));for(let t=0;t<3;t++)l.push(K(q(1.2-t*.3,.2,4.2,`#d9c9ae`),a-1.6-t*.3+.45,.1+t*.2,e.z));i(4.4,e.z,3.2,1.6,4.4,a-2.2,h.roof,!0);for(let t of[e.z-3.4,e.z+3.4])l.push(K(J(.15,.15,3.9,`#ffffff`,8),a-3.3,2.45,t));for(let t of[e.z-5.5,e.z+5.5])l.push(K(Y(1.25,`#6fb05d`,10,7),a-2.4,1,t),K(Y(.9,`#86c26b`,9,6),a-2.6,1.9,t));for(let t=_n.dirt.half+_n.dirt.radius+1.5;t<a-2.6;t+=1.7)l.push(K(J(.62,.66,.1,`#e9e2d4`,12),t,.05,e.z+Math.sin(t*.7)*.35,t));for(let n of[e.z-e.length/2+.4,e.z+e.length/2-.4])l.push(K(q(.3,6,.5,`#9ccf88`),t-.1,3.6,n),K(Y(1.1,`#86c26b`,9,6),t-.3,6.6,n))}for(let e of Fn()){let t=e.scale,n=_(e.x,e.z),i=.9+e.tint*.2,a=Cn(e.x,e.z)>45,o=a?[8,5,7,4]:[10,7,9,6];if(n.push(K(J(.24,.38,3.2,h.trunk,a?5:7),e.x,e.y+1.4*t,e.z,0,t)),e.kind===`pine`){let o=new r(h.pine).multiplyScalar(i);[[2.7,3.4,2.6],[2.1,3,4.4],[1.4,2.6,6]].forEach(([r,i,s])=>n.push(K(jn(r,i,On(`#${o.getHexString()}`,`#7fb48a`,-i/2,i/2),a?7:9),e.x,e.y+s*t,e.z,e.tint*6,t)))}else{let a=e.kind===`blossom`?h.blossom:e.kind===`autumn`?h.autumn:h.leaves[Math.floor(e.tint*3)%3],s=new r(a).lerp(new r(`#fffbe8`),.32),c=On(`#${new r(a).multiplyScalar(i*.9).getHexString()}`,`#${s.getHexString()}`,-1.6,1.8);n.push(K(Y(2.3,c,o[0],o[1]),e.x,e.y+4.6*t,e.z,0,t)),n.push(K(Y(1.6,c,o[2],o[3]),e.x+1.2*t,e.y+4*t,e.z+.6*t,0,t),K(Y(1.5,c,o[2],o[3]),e.x-1.1*t,e.y+4.2*t,e.z-.5*t,0,t))}}let A=vn(11);for(let e=0;e<46;e++){let t=A()*Math.PI*2,n=_n.dirt.radius+3+A()*30,r=Math.cos(t)*(n+_n.dirt.half*Math.abs(Math.cos(t))),i=Math.sin(t)*n,a=[`#ffffff`,`#fff1a0`,`#f8c0d0`,`#d6c6f4`][e%4];for(let e=0;e<12;e++){let e=r+(A()-.5)*3.2,t=i+(A()-.5)*3.2;Cn(e,t)<1||Tn(e,t)<.5||_(e,t).push(K(Y(.11,a,6,4),e,En(e,t)+.07,t,0,[1,.45,1]),K(Y(.04,`#f2c94c`,4,3),e,En(e,t)+.12,t))}}let M=(e,t,n,r,i)=>{let a=En(e,t);i.push(K(J(.42,.55,2.2,h.stem,10),e,a+1.1*n,t,0,n));let o=G(new k(1.5,14,7,0,Math.PI*2,0,Math.PI/2),On(r,r,0,1));i.push(K(o,e,a+2*n,t,0,[n,n*.72,n]),K(G(new Me(1.5,14),`#f1dfc2`),e,a+2*n+.01,t,0,n,Math.PI/2));for(let r=0;r<7;r++){let o=r*2.4,s=.55+r%3*.3,c=Math.sqrt(Math.max(0,1.5**2-s*s))*.72;i.push(K(Y(.2+r%2*.08,`#fffaf0`,7,5),e+Math.cos(o)*s*n,a+(2+c)*n,t+Math.sin(o)*s*n,0,[n,n*.5,n]))}};for(let[e,t,n]of[[-62,-40,5],[-58,42,4],[52,46,4],[-30,-64,5],[66,-40,3],[-82,-8,4]])for(let r=0;r<n;r++){let n=e+(m()-.5)*9,i=t+(m()-.5)*9;wn(n,i)<_n.clear+1||Cn(n,i)<1||M(n,i,.6+m()*1.8,h.cap[r%3],_(n,i))}{let e=En(-98,16);l.push(K(J(2.1,3.2,24,h.trunk,12),-98,e+12,16));for(let t=0;t<6;t++){let n=t*Math.PI/3+.3;l.push(X(g(-98+Math.cos(n)*1.5,e+2.5,16+Math.sin(n)*1.5),g(-98+Math.cos(n)*4.2,e-.3,16+Math.sin(n)*4.2),.7,h.trunk,7))}for(let[t,n,r]of[[3,15,2],[-3.5,17,-1.5],[1,19,-3.5]])l.push(X(g(-98,e+n-4,16),g(-98+t*2,e+n,16+r*2),.6,h.trunk,7));for(let[t,n,r,i]of[[0,29,0,9.5],[6,26,5,7],[-7,27,-3,7.5],[3,32,-6,6.5],[-4,33,5,6],[7,30,-6,5.5],[-8,24,6,6]])l.push(K(Y(i,On(`#5d9e55`,`#a6d67d`,-i,i),14,10),-98+t,e+n,16+r));let t=e+13;l.push(X(g(-96.5,e+10,16.5),g(-90.6,t-.2,17),.6,h.trunk,7),X(g(-89,t-.2,17),g(-88.7,e+.2,17),.3,h.trunk,6));for(let n of[-.45,.45])l.push(X(g(-87.1,t,17+n),g(-86.4,e+.05,17+n),.04,`#c9a77a`,4));for(let n=1;n<10;n++){let r=n/10;l.push(X(g(-87.1+.7*r,t-(t-e)*r,16.55),g(-87.1+.7*r,t-(t-e)*r,17.45),.035,`#a8835a`,4))}l.push(K(q(3.6,.3,3.6,h.wood),-89,t,17),K(q(3,2.6,3,`#fbe9c8`),-89,t+1.45,17),K(Mn([[-2,0],[2,0],[0,1.7]],3.6,`#e5574d`),-89,t+2.75,17,Math.PI/2)),l.push(K(J(.55,.55,.1,`#ffe7b0`,14),-87.48,t+1.6,17,0,1,0,Math.PI/2)),l.push(K(Mn([[-.9,0],[.9,0],[.9,1.4],[0,2.2],[-.9,1.4]],.3,`#7c5338`),-95.5,e+.1,16,Math.PI/2+.1));for(let e=0;e<8;e++)u.push(K(Y(.16,`#fff1b0`,6,4),-94.5+e*.55,t-.6-Math.sin(e/7*Math.PI)*.7,15.1))}let N=(e,t,n,r)=>{l.push(K(jn(9,15,On(`#a1849a`,`#dcbcc4`,-7.5,7.5),8),e,t-7.6*r,n,.4,r,Math.PI)),l.push(K(J(9.4,9.1,1.4,On(`#7fb35f`,`#a6d67d`,-.7,.7),12),e,t,n,0,r));for(let[i,a,o]of[[-3,2,2.4],[3.5,-2,1.9],[0,-4.5,1.6]])l.push(K(J(.25,.35,2.4,h.trunk,6),e+i*r,t+1.6*r,n+a*r,0,r),K(Y(o,On(`#5d9e55`,`#a6d67d`,-o,o),9,6),e+i*r,t+(2.9+o*.6)*r,n+a*r,0,r));l.push(K(q(.3,22,2.4,On(`#e8f6ff`,`#a9daf0`,-11,11)),e+9.1*r,t-11*r,n,0,r))};N(-150,66,118,1),N(165,82,-150,.85),N(-40,104,-235,.7),N(120,58,185,.65),l.push(K(An(new k(6,16,10),[`#f7d36a`,`#ef7f74`,`#7dbbea`,`#ffffff`],16),46,46,118,0,[1,1.18,1])),l.push(K(q(1.8,1.3,1.8,h.wood),46,35.8,118));for(let[e,t]of[[-.8,-.8],[.8,-.8],[-.8,.8],[.8,.8]])l.push(X(g(46+e,36.4,118+t),g(46+e*3.4,41.4,118+t*3.4),.04,`#6b5a4a`,4));let P=[{r:_n.rings[0].radius,h:e=>22+12*xn(e,2.2,1)+2.2*Math.abs(Math.sin(e*47)),low:`#5f9f55`,high:`#9fd27a`,snow:999},{r:_n.rings[1].radius,h:e=>52+42*xn(e,1.6,5)+26*Math.max(0,Math.sin(e*5+1))**3,low:`#4f8f9c`,high:`#8cc3c0`,snow:999},{r:_n.rings[2].radius,h:e=>95+60*xn(e,1.3,9)+90*Math.max(0,Math.sin(e*4+2.2))**6+45*Math.max(0,Math.sin(e*9+.7))**8,low:`#6c7cc4`,high:`#a3afe8`,snow:162}];for(let e of P){let t=[0,.45,.75,.9,.975,1],n=[],i=[],a=[],o=new r(e.low),s=new r(e.high);for(let a=0;a<=360;a++){let c=a/360*Math.PI*2,l=e.h(c),u=Math.cos(c),d=Math.sin(c);for(let a of t){let t=-6+(l+6)*a,c=o.clone().lerp(s,Math.min(1,a*a/.95));a===1&&c.lerp(new r(`#ffffff`),.22),t>e.snow&&c.lerp(new r(`#fbfdff`),Sn(e.snow,e.snow+8,t)),n.push(u*e.r,t,d*e.r),i.push(c.r,c.g,c.b)}}for(let e=0;e<360;e++)for(let n=0;n<t.length-1;n++){let r=e*t.length+n,i=r+t.length;a.push(r,i,r+1,i,i+1,r+1)}let c=new U;c.setAttribute(`position`,new f(n,3)),c.setAttribute(`color`,new f(i,3)),c.setIndex(a),c.computeVertexNormals(),d.push(c)}{let e=L.degToRad(-112),t=_n.rings[1].radius-6,n=P[1].h(e+Math.PI*2)-4,r=Math.cos(e)*t,i=Math.sin(e)*t,a=1.7,o=`#f6cbd6`;d.push(K(G(new pe(16*a,8*a,5*a),o),r,n+4*a,i,-e+Math.PI/2));for(let[t,s,c]of[[-9,16,3.2],[9,15,3.2],[-3,21,3.8],[3.5,12,2.6],[0,26,2.4]]){let l=r-Math.sin(e)*t*a,u=i+Math.cos(e)*t*a;d.push(K(G(new be(c*a,c*a,s*a,10),o),l,n+s*a/2,u),K(G(new j(c*1.3*a,c*2.2*a,10),`#8094dc`),l,n+(s+c*1.1)*a,u))}}let ne=new I({name:`School scenery`,vertexColors:!0,roughness:.92,metalness:0}),re=new I({name:`School warm lights`,vertexColors:!0,roughness:.6,metalness:0,emissive:`#ffcf7a`,emissiveIntensity:.55}),ie=new z({name:`School paper mountains`,vertexColors:!0,fog:!0}),ae=(e,n,r,i)=>{if(!e.length)return;let a=de(e,!1);if(e.forEach(e=>e.dispose()),!a)throw Error(`${r} の形をまとめられない`);a.computeBoundingSphere();let o=new B(a,n);o.name=r,o.castShadow=i,o.receiveShadow=!0,t.add(o)};return ae(s,ne,`school-near`,!0),ae(c,ne,`school-lines`,!1),ae(l,ne,`school-far`,!1),ae(u,re,`school-lights`,!1),ae(d,ie,`school-paper-mountains`,!1),Promise.resolve()}function Ln(){if(typeof document>`u`)return null;let e=document.createElement(`canvas`);e.width=e.height=256;let t=e.getContext(`2d`);t.fillStyle=`#ffffff`,t.fillRect(0,0,256,256);let n=vn(42);for(let e=0;e<26;e++)t.fillStyle=`rgba(150,130,110,${.035+n()*.03})`,t.beginPath(),t.arc(n()*256,n()*256,14+n()*30,0,Math.PI*2),t.fill();for(let e=0;e<1500;e++){let e=185+Math.floor(n()*55);t.fillStyle=`rgb(${e},${e-6},${e-14})`,t.beginPath(),t.arc(n()*256,n()*256,.6+n()*1.5,0,Math.PI*2),t.fill()}for(let e=0;e<40;e++){let e=n()*256,r=n()*256,i=1.6+n()*2.2;t.fillStyle=`rgb(205,195,182)`,t.beginPath(),t.arc(e,r,i,0,Math.PI*2),t.fill(),t.fillStyle=`rgb(246,242,234)`,t.beginPath(),t.arc(e-i*.3,r-i*.3,i*.5,0,Math.PI*2),t.fill()}let r=new ue(e);return r.colorSpace=E,r.wrapS=r.wrapT=Ne,r.anisotropy=8,r.name=`School ground speckles`,r}var Rn=()=>new Promise(e=>{let t=new MessageChannel;t.port1.onmessage=()=>{t.port1.close(),e()},t.port2.postMessage(void 0)});function zn(e=16){let t=performance.now();return async()=>{performance.now()-t<e||(await Rn(),t=performance.now())}}var Z={margin:6.5,wall:7.2,ridge:12.5,garden:-.6,bays:14,open:{south:[2,6,9,12],north:[3,7,11]},low:1.5,hang:6.8,rings:[{radius:185},{radius:310},{radius:500}]},Bn=dt.dojo,Vn=Bn.width/2,Hn=Bn.depth/2,Un=Bn.goalWidth/2,Wn={x:Vn+Z.margin,z:Hn+Z.margin},Gn={x:Wn.x-1,z:Wn.z-1},Kn=(e,t)=>{let n=Math.abs(e)-Wn.x,r=Math.abs(t)-Wn.z;return n>0||r>0?Math.hypot(Math.max(n,0),Math.max(r,0)):Math.max(n,r)};function qn(e,t){let n=Sn(40,120,Kn(e,t));return Z.garden+(n<=0?0:n*(5+11*bn(e*.011+1.3,t*.011+4.1))+n*n*9)}var Jn=e=>Z.wall+(Z.ridge-Z.wall)*(1-Math.min(1,Math.abs(e)/Wn.z)),Q={wood:`#e3bf8a`,woodLight:`#efd3a4`,woodDark:`#a8774a`,beam:`#7a5638`,plaster:`#fbf4e4`,dado:`#b98a5a`,azure:`#8ccdf0`,ember:`#f6a596`,posts:[`#f4a9bd`,`#9ddbc6`,`#f7dc72`,`#c4b2ee`],thatch:`#dcb46c`,thatchDark:`#a98444`,stone:`#c8c3bb`,gravel:`#ede3c9`,grass:`#93c66e`,grassDark:`#7cb35f`,leaves:[`#6fb05d`,`#5d9e55`,`#86c26b`],pine:`#3f8061`,blossom:`#f6bfd0`,trunk:`#94653f`,paper:`#fff4dc`,rainbow:[`#ff9aa2`,`#ffc58e`,`#fff09a`,`#a9e8a4`,`#9ccff6`,`#c9a8ef`]};function Yn(e,t,n){let[r,i,a,o]=e;new H().subVectors(i,r).cross(new H().subVectors(a,r)).dot(t)<0&&([i,o]=[o,i]);let s=new U;return s.setAttribute(`position`,new f([r,i,a,r,a,o].flatMap(e=>[e.x,e.y,e.z]),3)),s.computeVertexNormals(),G(s,n)}function Xn(e,t,n=[1,1]){let[r,i,a,o]=e,s=[[0,0],[n[0],0],[n[0],n[1]],[0,n[1]]];new H().subVectors(i,r).cross(new H().subVectors(a,r)).dot(t)<0&&([i,o]=[o,i],s=[s[0],s[3],s[2],s[1]]);let c=new U,l=[0,1,2,0,2,3],u=[r,i,a,o];return c.setAttribute(`position`,new f(l.flatMap(e=>[u[e].x,u[e].y,u[e].z]),3)),c.setAttribute(`uv`,new f(l.flatMap(e=>s[e]),2)),c.setAttribute(`color`,new f(Array(18).fill(1),3)),c.computeVertexNormals(),c.setIndex([0,1,2,3,4,5]),c}function Zn(e,t,n,r,i){let a=t.clone().sub(e);return q(n,r,a.length(),i).applyMatrix4(new Ee().compose(e.clone().add(t).multiplyScalar(.5),new T().setFromUnitVectors(new H(0,0,1),a.normalize()),new H(1,1,1)))}function Qn(e,t,n,r,i){let a=[-e/2,0,-t/2],o=[e/2,0,-t/2],s=[e/2,0,t/2],c=[-e/2,0,t/2],l=[0,n,-r/2],u=[0,n,r/2],d=[a,u,l,a,c,u,s,l,u,s,o,l,o,a,l,c,s,u],p=new U;return p.setAttribute(`position`,new f(d.flat(),3)),p.computeVertexNormals(),G(p,i)}var $n={x0:-Wn.x-32,x1:-Wn.x,z:16};function er(){let e=vn(20261006),t=[],n=$n;for(let r=-150;r<=150;r+=9)for(let i=-150;i<=150;i+=9){let a=r+(e()-.5)*9*.9,o=i+(e()-.5)*9*.9,s=e(),c=e(),l=e(),u=e(),d=Kn(a,o);if(d<7||Math.hypot(a,o)>150||a>n.x0&&a<n.x1&&Math.abs(o)<n.z||s>.7*Sn(7,12,d)*(1-.75*Sn(40,110,d))+.03)continue;let f=c<.45?`round`:c<.62?`pine`:c<.86?`blossom`:`autumn`;t.push({x:a,z:o,y:qn(a,o),scale:.8+l*.6,kind:f,tint:u})}return t}async function tr(e){await Rn(),gn(e);let t=new V;t.name=`rift-arena`,e.add(t),t.userData={mapId:`dojo`,theme:`storybook-grandpa-dojo-hall`,courtWidth:Bn.width,courtDepth:Bn.depth,goalWidth:Bn.goalWidth,area:Bn.area,hall:{...Wn},camera:{...Gn}};let n=[],a=[],o=[],s=[],c=[],l=[],u=[],d=[],m=(e,t,n)=>new H(e,t,n),h=Wn.x,g=Wn.z,_=Z.wall,v=Z.garden,y=new ye(h*2,g*2,1,1);y.rotateX(-Math.PI/2);{let e=y.getAttribute(`position`),t=y.getAttribute(`uv`);for(let n=0;n<e.count;n++)t.setXY(n,e.getX(n)/8,e.getZ(n)/8)}let b=new B(y,new I({name:`Dojo wooden floor`,color:`#ffffff`,roughness:.58,metalness:0,map:sr()}));b.name=`dojo-floor`,b.receiveShadow=!0,t.add(b);let x=2.7,C=[];for(let e of[-1,1]){let t=new ye(h*2-1.2,x,1,1);t.rotateX(-Math.PI/2),t.translate(0,.004,e*(g-x/2-.15));let n=t.getAttribute(`position`),r=t.getAttribute(`uv`);for(let e=0;e<n.count;e++)r.setXY(e,n.getX(e)/1.8,(Math.abs(n.getZ(e))-(g-x-.15))/1.8);C.push(t)}let w=new B(de(C),new I({name:`Dojo tatami`,color:`#ffffff`,roughness:.95,metalness:0,map:cr()}));C.forEach(e=>e.dispose()),w.name=`dojo-tatami`,w.receiveShadow=!0,t.add(w);for(let e of[-1,1])a.push(K(q(h*2-1.2,.03,.12,Q.woodDark),0,.015,e*(g-x-.15)));let T=.1,E=.006,O=(e,t,n,r)=>a.push(K(q(n,.004,r,`#fdfbf4`),e,E,t));for(let e of[-Hn+.08,Hn-.08])O(0,e,Bn.width,T);for(let e of[-Vn+.08,Vn-.08])O(e,0,T,Bn.depth);O(0,0,T,Bn.depth),a.push(K(G(new i(4.5-T/2,4.55,64,1),`#fdfbf4`),0,E,0,0,1,-Math.PI/2));for(let e of[-1,1])a.push(K(q(.12,.004,1.2,`#e8705f`),e*3.6,.007,0));let ee=(e,t,n,r,o)=>a.push(K(G(new i(e-T/(2*t),e+T/(2*t),36,1),`#fdfbf4`),r,E,o,0,[t,1,n],-Math.PI/2));ee(1,1.1,.95,0,0);for(let[e,t,n]of[[1.5,-1.15,.36],[1.85,-.4,.38],[1.85,.4,.38],[1.5,1.15,.36]])ee(n,1,1.1,e,t);for(let e of[-Hn-.22,Hn+.22]){n.push(K(q(Bn.width+.6,.4,.14,Q.wood),0,.2,e));for(let t of[-1,1])n.push(K(q(Vn+.3,.08,.22,t<0?Q.azure:Q.ember),t*(Vn+.3)/2,.44,e))}for(let e of[-1,1])for(let t of[-(Hn+Un)/2,(Hn+Un)/2])n.push(K(q(.14,.4,Hn-Un+.3,Q.wood),e*(Vn+.4),.2,t)),n.push(K(q(.22,.08,Hn-Un+.3,e<0?Q.azure:Q.ember),e*(Vn+.4),.44,t));let te=0,k=(e,t)=>{let r=Q.posts[te++%Q.posts.length];n.push(K(J(.08,.09,.5,Q.woodLight,8),e,.25,t),K(Y(.14,r,9,6),e,.56,t))};for(let e=-Vn;e<=Vn+.01;e+=Bn.width/14)for(let t of[-Hn-.22,Hn+.22])k(e,t);for(let e of[-1,1])for(let t of[-Hn,-Un-.2,Un+.2,Hn])k(e*(Vn+.4),t);for(let e of[-1,1]){let r=e<0?Q.azure:Q.ember,i=e*(Vn+.22),o=e*(Vn+1.9);for(let e of[-Un,Un])n.push(K(J(.12,.12,2.42,Q.woodLight,10),i,1.21,e)),n.push(X(m(i,2.36,e),m(o,.06,e),.07,Q.wood)),n.push(X(m(i,.06,e),m(o,.06,e),.06,Q.woodDark));n.push(X(m(i,2.36,-Un-.1),m(i,2.36,Un+.1),.11,Q.woodLight,10),K(q(.24,.12,Bn.goalWidth-.3,r),i,2.36,0)),n.push(X(m(o,.06,-Un),m(o,.06,Un),.06,Q.woodDark)),a.push(K(q(1.66,.02,Bn.goalWidth-.1,r),(i+o)/2,.012,0));let s=[];for(let e=-Un;e<=Un+.01;e+=.5)s.push(i,2.36,e,o,.06,e);for(let e=.08;e<1;e+=.12){let t=i+(o-i)*e,n=2.36+-2.3*e;s.push(t,n,-Un,t,n,Un)}for(let e of[-Un,Un]){for(let t=.15;t<1;t+=.17){let n=i+(o-i)*t;s.push(n,.06,e,n,2.36+-2.3*t,e)}for(let t=.4;t<2.36;t+=.35)s.push(i,t,e,i+(o-i)*(2.36-t)/2.3,t,e)}let c=new U;c.setAttribute(`position`,new f(s,3));let l=new le(c,new _e({color:r,transparent:!0,opacity:.6}));l.name=e<0?`azure-goal`:`ember-goal`,l.userData={goalPlane:e*Vn,opening:Bn.goalWidth},t.add(l)}let A=4.4,j=.9,M=(e,t,r,i,a,o)=>{let s=a.clone().multiplyScalar(t/2),c=(t,n)=>e.clone().add(s.clone().multiplyScalar(t)).setY(n);l.push(Xn([c(-1,r),c(1,r),c(1,i),c(-1,i)],o,[1,Math.max(1,Math.round((i-r)/t))])),n.push(Zn(c(-1,r+.04),c(1,r+.04),.08,.08,Q.beam),Zn(c(-1,i-.04),c(1,i-.04),.08,.08,Q.beam));for(let e of[-1,1]){let t=c(e,(r+i)/2).sub(a.clone().multiplyScalar(e*.04));n.push(K(q(.08,i-r,.08,Q.beam),t.x,t.y,t.z))}};await Rn();let N=h*2/Z.bays;for(let e of[-1,1]){let t=e*g,r=m(0,0,-e),i=m(1,0,0),a=e<0?Z.open.south:Z.open.north;for(let r=0;r<=Z.bays;r++)n.push(K(q(.36,_,.36,Q.beam),-h+r*N,_/2,t+e*.05));for(let o=0;o<Z.bays;o++){let s=-h+(o+.5)*N;if(n.push(K(q(N-.36,j,.14,Q.dado),s,j/2,t+e*.02)),a.includes(o))M(m(s-N/4,0,t-e*.08),N/2-.2,j,A,i,r),M(m(s-N/4+.12,0,t-e*.2),N/2-.2,j,A,i,r);else for(let n of[-1,1])M(m(s+n*N/4,0,t-e*.08),N/2-.12,j,A,i,r);let c=6.5,l=N-1.6,u=N-.36;if(o%2==1){n.push(K(q(u,.5999999999999996,.3,Q.plaster),s,9.4/2,t+e*.15),K(q(u,_-c,.3,Q.plaster),s,(c+_)/2,t+e*.15));for(let r of[-1,1])n.push(K(q((u-l)/2,1.5,.3,Q.plaster),s+r*(l/2+(u-l)/4),11.5/2,t+e*.15));for(let r=1;r<4;r++)n.push(K(q(.07,1.5,.07,Q.beam),s-l/2+r*l/4,11.5/2,t+e*.1));n.push(K(q(l+.1,.1,.14,Q.beam),s,5,t),K(q(l+.1,.1,.14,Q.beam),s,c,t))}else{n.push(K(q(u,_-A,.3,Q.plaster),s,(A+_)/2,t+e*.15));let r=Q.posts[(o/2+ +(e>0))%Q.posts.length],i=t-e*.03;n.push(K(q(1.5,1.9,.04,r),s,5.75,i),K(J(.035,.035,1.8,Q.beam,6),s,6.72,i-e*.02,0,1,0,Math.PI/2));let a=(t,r,a)=>n.push(K(G(new Me(a,16),`#ffffff`),s+t,5.7+r,i-e*.03,e>0?Math.PI:0));a(0,-.15,.32);for(let[e,t]of[[-.36,.22],[-.13,.4],[.13,.4],[.36,.22]])a(e,t,.12)}}n.push(K(q(h*2,.26,.3,Q.beam),0,4.53,t-e*.05),K(q(h*2,.34,.4,Q.beam),0,_-.17,t),K(q(h*2,.08,.14,Q.beam),0,j,t-e*.02))}{let e=h,t=3.6,r=1.7;o.push(K(q(.3,A,t*2,Q.plaster),e+r+.15,A/2,0),K(q(r,.45,t*2,Q.woodDark),e+r/2,.225,0),K(q(1.5999999999999999,.02,t*2-.2,`#c9dca0`),e+r/2,.46,0));for(let t of[-1,1])o.push(K(q(r,A,.3,Q.plaster),e+r/2,A/2,t*3.75));o.push(K(q(2,.3,7.5,Q.woodLight),e+r/2,4.550000000000001,0)),n.push(K(q(.16,.5,t*2,Q.beam),e-.02,.25,0)),u.push(rr(nr.scroll,1.25,3,e+r-.02,2.55,0,-1)),o.push(K(J(.04,.04,1.45,Q.beam,6),e+r-.06,4.08,0,0,1,Math.PI/2),K(J(.05,.05,1.5,Q.beam,6),e+r-.06,1.03,0,0,1,Math.PI/2)),o.push(K(J(.32,.24,.62,`#6f88b8`,12),e+.9,.78,-2.2));for(let t=0;t<7;t++){let n=t*.9;o.push(K(J(.02,.02,1+t%3*.25,`#5f9e55`,4),e+.9+Math.cos(n)*.12,1.5,-2.2+Math.sin(n)*.12,0,1,Math.cos(n)*.25,Math.sin(n)*.25),K(Y(.17,Q.rainbow[t%6],7,5),e+.9+Math.cos(n)*.35,2.05+t%3*.22,-2.2+Math.sin(n)*.35))}o.push(K(q(.9,.22,.55,`#7a8fbf`),e+.9,.58,2.3),K(J(.06,.08,.55,Q.trunk,5),e+.9,.9,2.3,0,1,0,.3));for(let[t,n]of[[-.25,1.25],[.22,1.15],[0,1.4]])o.push(K(Y(.3,Q.pine,8,5),e+.9,n,2.3+t,0,[1,.55,1]));n.push(K(q(.3,_-A,7.5600000000000005,Q.plaster),e+.15,(A+_)/2,0)),n.push(K(q(.12,1.7,6,Q.beam),e-.06,5.85,0)),u.push(rr(nr.plaque,5.6,1.45,e-.13,5.85,0,-1));let i=g-t,a=-(t+i/2),s=a-1.5,c=3.1,l=1.65;n.push(K(q(.14,j,i,Q.dado),e-.02,j/2,a));let d=new S;d.moveTo(-i/2,j),d.lineTo(i/2,j),d.lineTo(i/2,_),d.lineTo(-i/2,_),d.lineTo(-i/2,j);let f=new D;f.absarc(-(s-a),c,l,0,Math.PI*2,!0),d.holes.push(f);let m=new ne(d,{depth:.3,bevelEnabled:!1,curveSegments:36});m.deleteAttribute(`uv`),m.rotateY(Math.PI/2),m.translate(e,0,a),n.push(G(m,Q.plaster)),n.push(K(G(new p(l,.1,8,40),Q.beam),e-.02,c,s,Math.PI/2));for(let t of[-1,0,1]){let r=t*.55,i=Math.sqrt(l**2-r**2);n.push(K(q(.05,i*2,.05,Q.beam),e+.15,c,s+r),K(q(.05,.05,i*2,Q.beam),e+.15,c+r,s))}let v=t+i/2;n.push(K(q(.14,j,i,Q.dado),e-.02,j/2,v),K(q(.3,_-j,i,Q.plaster),e+.15,(j+_)/2,v)),n.push(K(q(.1,1.6,5.4,Q.woodLight),e-.06,2.9,v-2),K(q(.12,1.7,.12,Q.beam),e-.1,2.9,v-4.75),K(q(.12,1.7,.12,Q.beam),e-.1,2.9,v+.75));for(let t=0;t<3;t++)for(let r=0;r<14;r++){let i=v-4.4+r*.37,a=3.4-t*.5;n.push(K(q(.04,.38,.26,`#f5e2bd`),e-.13,a,i),K(q(.045,.22,.05,`#3b2a20`),e-.15,a-.02,i))}n.push(K(q(.1,.08,3.2,Q.beam),e-.15,1.6,v+3.2),K(q(.1,.08,3.2,Q.beam),e-.15,2.5,v+3.2));for(let t=0;t<6;t++)n.push(K(q(.06,1.05,.06,`#d9b98a`),e-.2,2.05,v+1.9+t*.52,0,1,0,.05));for(let r of[-g,-3.6,t,g])n.push(K(q(.36,_,.36,Q.beam),e+.05,_/2,r));n.push(K(q(.3,.26,g*2,Q.beam),e-.05,4.53,0),K(q(.4,.34,g*2,Q.beam),e,_-.17,0))}{let e=-h,t=g-5;for(let r of[-1,1]){let i=r*(5+t/2);n.push(K(q(.14,j,t,Q.dado),e-.02,j/2,i));for(let n=0;n<4;n++)M(m(e+.08,0,r*(5.2+(n+.5)*(t-.4)/4)),(t-.4)/4-.06,j,A,m(0,0,1),m(1,0,0));n.push(K(q(.3,_-A,t,Q.plaster),e-.15,(A+_)/2,i));for(let t=0;t<2;t++)n.push(K(q(.08,4.300000000000001,2.4,`#b88a5c`),e+.22+t*.1,4.300000000000001/2,r*3.7),K(q(.1,.1,2.4,Q.beam),e+.27+t*.1,A*.55,r*3.7))}n.push(K(q(.3,_-A,10,Q.plaster),e-.15,(A+_)/2,0)),n.push(K(q(.4,.4,g*2,Q.beam),e+.05,4.6000000000000005,0),K(q(.4,.34,g*2,Q.beam),e,_-.17,0),K(q(.5,.12,10,Q.woodDark),e,.06,0));for(let t of[-g,-5,5,g])n.push(K(q(.36,_,.36,Q.beam),e-.05,_/2,t));n.push(K(J(.95,.95,.14,Q.beam,32),e+.08,5.8,0,0,1,0,Math.PI/2)),u.push(ir(nr.clock,.85,e+.17,5.8,0,1))}await Rn();for(let e of[-1,1]){let t=m(0,Z.ridge-_,-e*g),n=m(0,-1,-e*.25);for(let r=0;r<44;r++){let i=m(-h-.3+(h*2+.6)*r/44,_,e*g),a=m(-h-.3+(h*2+.6)*(r+1)/44,_,e*g);o.push(Yn([i,a,a.clone().add(t),i.clone().add(t)],n,r%2?`#e2c08e`:`#d8b27c`))}}for(let e=0;e<=10;e++){let t=-h+e*h*2/10;o.push(K(q(.36,.42,g*2,Q.beam),t,_-.1,0),K(q(.3,Z.ridge-_-.3,.3,Q.beam),t,(_+Z.ridge)/2-.15,0));for(let e of[-1,1])o.push(Zn(m(t,_,e*g),m(t,Z.ridge-.1,0),.26,.3,Q.beam))}o.push(K(q(h*2+.6,.4,.4,Q.beam),0,Z.ridge-.2,0));for(let e of[-1,1])o.push(K(q(h*2+.6,.26,.26,Q.beam),0,Jn(g/2)-.25,e*g/2));for(let e of[-1,1])o.push(K(Mn([[-g,0],[g,0],[0,Z.ridge-_]],.3,Q.plaster),e*(h+.15),_,0,Math.PI/2));for(let e of[-7.5,7.5])for(let t=0;t<10;t++){let n=-h+(t+.5)*h*2/10,r=Jn(e)-.1;o.push(X(m(n,r,e),m(n,8.15,e),.015,`#6b5a4a`,4),K(J(.16,.2,.14,Q.beam,10),n,8.12,e)),s.push(K(Y(.5,Q.paper,14,10),n,7.6,e,0,[1,1.08,1]))}for(let e of[-1,1]){let t=e*(g-.45),n=[-h+2,-h/2,0,h/2,h-2];for(let e=0;e<n.length-1;e++){let r=n[e],i=n[e+1],a=[];for(let e=0;e<=1.0001;e+=1/14)a.push(m(r+(i-r)*e,7-Math.sin(Math.PI*e)*.2,t));for(let n=0;n<a.length-1;n++)o.push(X(a[n],a[n+1],.015,`#7a6a5a`,3)),o.push(K(Mn([[-.22,0],[.22,0],[0,-.42]],.02,Q.rainbow[(n+e)%6]),a[n].x+.3,a[n].y-.02,t))}}{let e=new H(28,-47,38),t=t=>t.clone().add(e.clone().multiplyScalar(-t.y/e.y));for(let e=1;e<Z.bays;e+=2){let n=-h+(e+.5)*N,i=N-1.6,a=-g+.2;for(let e of[5,6.5]){let o=m(n-i/2,e,a),s=m(n+i/2,e,a);d.push(Yn([o,s,t(s),t(o)],m(0,1,0),(e,t)=>new r(`#fff1c4`).multiplyScalar(.25+.75*Math.min(1,t/5))))}}}{let e=h-1.4,t=g-1.7;n.push(K(J(.5,.5,.7,`#c46a43`,18),e,.82,t,0,1,Math.PI/2),K(J(.48,.48,.72,Q.paper,18),e,.82,t,0,1,Math.PI/2));for(let r of[-.4,.4])n.push(X(m(e-.45,0,t+r),m(e,.55,t+r*.6),.045,Q.beam),X(m(e+.45,0,t+r),m(e,.55,t+r*.6),.045,Q.beam));for(let[e,t,r]of[[-14,g-1.4,Q.azure],[-12.8,g-1.4,Q.azure],[12.8,g-1.4,Q.ember],[14,g-1.4,Q.ember],[-4,-g+1.4,`#c4b2ee`],[4,-g+1.4,`#f7dc72`],[-20,-g+1.4,Q.posts[1]],[20,-g+1.4,Q.posts[0]]])n.push(K(q(.9,.12,.9,r),e,.06,t,.1),K(q(.86,.1,.86,r),e,.17,t,-.15));let r=g-1.5;n.push(K(J(.8,.8,.08,Q.woodDark,20),-22,.38,r));for(let[e,t]of[[-.4,-.4],[.4,-.4],[-.4,.4],[.4,.4]])n.push(K(q(.08,.34,.08,Q.beam),-22+e,.17,r+t));n.push(K(Y(.16,`#7fb5a8`,10,7),-22,.5,r,0,[1,.85,1]),K(J(.03,.03,.2,`#7fb5a8`,5),-21.82,.55,r,0,1,0,-.9));for(let[e,t]of[[.35,.2],[-.3,.3],[.1,-.4]])n.push(K(J(.06,.05,.1,`#fbf4e4`,8),-22+e,.47,r+t));for(let[e,t]of[[-h+1.1,-g+1.1],[-h+1.1,g-1.1],[h-1.1,-g+1.1]])n.push(K(J(.32,.26,.5,`#d9876a`,10),e,.25,t),K(Y(.55,On(`#5d9e55`,`#a6d67d`,-.5,.5),9,6),e,.95,t))}await Rn();let P=new ye(700,700,70,70);P.rotateX(-Math.PI/2);{let e=P.getAttribute(`position`),t=new Float32Array(e.count*3);for(let n=0;n<e.count;n++){let i=e.getX(n),a=e.getZ(n);e.setY(n,qn(i,a)-.02);let o=bn(i*.07,a*.07),s=new r(Q.grass).lerp(new r(o>.5?`#a9d47e`:Q.grassDark),Math.abs(o-.5)*1.1);s.lerp(new r(Q.gravel),1-Sn(2,4,Kn(i,a))),t.set([s.r,s.g,s.b],n*3)}P.deleteAttribute(`uv`),P.setAttribute(`color`,new f(t,3)),P.computeVertexNormals()}let re=new B(P,new I({name:`Dojo garden ground`,vertexColors:!0,roughness:1,metalness:0}));re.name=`dojo-garden-ground`,re.receiveShadow=!0,t.add(re),o.push(K(q(h*2+1.4,-v,g*2+1.4,Q.stone),0,v/2-.01,0));for(let e of[-1,1]){o.push(K(q(h*2,.12,2,Q.wood),0,-.07,e*(g+1.35)));for(let t=-h;t<=h+.01;t+=4.4)o.push(K(q(.18,-v,.18,Q.beam),t,v/2,e*(g+2.2)))}o.push(K(q(1.6,.3,3,Q.stone),-h-1.1,-.16,0));for(let e=0;e<9;e++)o.push(K(J(.6,.65,.14,e%2?Q.stone:`#d6d1c8`,9),-h-3-e*1.6,qn(-h-3-e*1.6,0)+.05,Math.sin(e*1.3)*.4,e));{let e=-h-18,t=(e-12+e)/2,n=4.2,r=.7,i=v;o.push(K(q(12.4,r,20.4,Q.stone),t,i+r/2,0),K(q(12,n,20,`#fbf1dc`),t,i+r+n/2,0));for(let t=-10;t<=10.01;t+=20/6)o.push(K(q(.32,n,.32,Q.beam),e+.05,i+r+n/2,t));for(let t=-8.333333333333334;t<10;t+=20/6){s.push(K(q(.1,2.2,2.6,`#ffe9b8`),e+.1,i+r+2.3,t));for(let n=1;n<4;n++)o.push(K(q(.12,2.2,.05,Q.beam),e+.12,i+r+2.3,t-1.3+n*.65))}o.push(K(q(2.2,.25,21.4,Q.woodDark),e+1.1,i+r-.05,0));let a=7.6,c=i+r+n-.4;o.push(K(Qn(17,24.6,a,9,On(Q.thatch,Q.thatchDark,0,a)),t,c,0),K(q(.9,.7,10.2,`#7a5d3a`),t,c+a+.1,0));for(let e of[-1,1])o.push(K(q(.6,.45,24.6,Q.thatchDark),t+e*(17/2-.2),c+.05,0),K(q(17,.45,.6,Q.thatchDark),t,c+.05,e*(24.6/2-.2)));u.push(rr(nr.house,3.6,.9,e+2.65,i+r+n-.75,0,1));let l=e-2,d=qn(l,16);o.push(K(J(.3,.45,3.6,Q.trunk,7),l,d+1.8,16));for(let[e,t,n,r]of[[0,5,0,2.6],[1.6,4.3,1,1.8],[-1.5,4.5,-.8,1.9]])o.push(K(Y(r,On(`#5f9a4c`,`#9bcf6d`,-r,r),10,7),l+e,d+t,16+n));for(let e=0;e<14;e++){let t=e*2.4,n=2+e%3*.5;o.push(K(Y(.22,`#f39a3a`,7,5),l+Math.cos(t)*n,d+3.8+e%4*.6,16+Math.sin(t)*n))}}for(let[e,t,n]of[[-h-6,-9,`#f48fb1`],[-h-6,9,`#f7a8c4`],[-h-9,-14,`#e98ab4`],[-h-9,14,`#f48fb1`]]){let r=qn(e,t);o.push(K(Y(1.2,n,10,6),e,r+.6,t,0,[1.3,.75,1]),K(Y(.9,`#86c26b`,9,5),e+.9,r+.45,t+.4,0,[1.2,.7,1]))}for(let e of er()){let t=e.scale,n=Kn(e.x,e.z)>45,i=n?[8,5,7,4]:[10,7,9,6];if(o.push(K(J(.24,.38,3.2,Q.trunk,n?5:7),e.x,e.y+1.4*t,e.z,0,t)),e.kind===`pine`)[[2.7,3.4,2.6],[2.1,3,4.4],[1.4,2.6,6]].forEach(([r,i,a])=>o.push(K(jn(r,i,On(Q.pine,`#7fb48a`,-i/2,i/2),n?7:9),e.x,e.y+a*t,e.z,e.tint*6,t)));else{let n=e.kind===`blossom`?Q.blossom:e.kind===`autumn`?`#eba648`:Q.leaves[Math.floor(e.tint*3)%3],a=new r(n).lerp(new r(`#fffbe8`),.32),s=On(`#${new r(n).multiplyScalar(.9).getHexString()}`,`#${a.getHexString()}`,-1.6,1.8);o.push(K(Y(2.3,s,i[0],i[1]),e.x,e.y+4.6*t,e.z,0,t)),o.push(K(Y(1.6,s,i[2],i[3]),e.x+1.2*t,e.y+4*t,e.z+.6*t,0,t),K(Y(1.5,s,i[2],i[3]),e.x-1.1*t,e.y+4.2*t,e.z-.5*t,0,t))}}let ie=[{r:Z.rings[0].radius,h:e=>22+12*xn(e,2.2,3)+2.2*Math.abs(Math.sin(e*47)),low:`#5f9f55`,high:`#9fd27a`,snow:999},{r:Z.rings[1].radius,h:e=>52+42*xn(e,1.6,7)+26*Math.max(0,Math.sin(e*5+2))**3,low:`#4f8f9c`,high:`#8cc3c0`,snow:999},{r:Z.rings[2].radius,h:e=>95+60*xn(e,1.3,11)+90*Math.max(0,Math.sin(e*4+1.2))**6+45*Math.max(0,Math.sin(e*9+.2))**8,low:`#6c7cc4`,high:`#a3afe8`,snow:162}];for(let e of ie){let t=[0,.45,.75,.9,.975,1],n=[],i=[],a=[],o=new r(e.low),s=new r(e.high);for(let a=0;a<=240;a++){let c=a/240*Math.PI*2,l=e.h(c),u=Math.cos(c),d=Math.sin(c);for(let a of t){let t=-6+(l+6)*a,c=o.clone().lerp(s,Math.min(1,a*a/.95));a===1&&c.lerp(new r(`#ffffff`),.22),t>e.snow&&c.lerp(new r(`#fbfdff`),Sn(e.snow,e.snow+8,t)),n.push(u*e.r,t,d*e.r),i.push(c.r,c.g,c.b)}}for(let e=0;e<240;e++)for(let n=0;n<t.length-1;n++){let r=e*t.length+n,i=r+t.length;a.push(r,i,r+1,i,i+1,r+1)}let l=new U;l.setAttribute(`position`,new f(n,3)),l.setAttribute(`color`,new f(i,3)),l.setIndex(a),l.computeVertexNormals(),c.push(l)}await Rn();let ae=new I({name:`Dojo hall`,vertexColors:!0,roughness:.88,metalness:0}),oe=new I({name:`Dojo warm lights`,vertexColors:!0,roughness:.6,metalness:0,emissive:`#ffd89a`,emissiveIntensity:.7}),se=new z({name:`Dojo paper mountains`,vertexColors:!0,fog:!0}),ce=(e,n,r,i)=>{if(!e.length)return;let a=de(e,!1);if(e.forEach(e=>e.dispose()),!a)throw Error(`${r} の形をまとめられない`);a.computeBoundingSphere();let o=new B(a,n);return o.name=r,o.castShadow=i,o.receiveShadow=!0,t.add(o),o};ce(n,ae,`dojo-near`,!0),ce(a,ae,`dojo-lines`,!1),ce(o,ae,`dojo-far`,!1),ce(s,oe,`dojo-lights`,!1),ce(c,se,`dojo-paper-mountains`,!1);let F=or();ce(l,new I({name:`Dojo shoji`,vertexColors:!0,roughness:.9,metalness:0,map:F,emissive:`#fff1d6`,emissiveIntensity:.35,emissiveMap:F,side:2}),`dojo-shoji`,!1),ce(u,new I({name:`Dojo signs`,color:`#ffffff`,roughness:.8,metalness:0,map:ar()}),`dojo-signs`,!1);let ue=ce(d,new z({name:`Dojo sunbeams`,vertexColors:!0,transparent:!0,opacity:.22,blending:2,depthWrite:!1,side:2,fog:!1}),`dojo-sunbeams`,!1);ue&&(ue.receiveShadow=!1,ue.renderOrder=3)}var nr={plaque:[0,0,768,256],house:[0,256,768,512],clock:[0,512,384,896],scroll:[768,0,1024,1024]};function rr(e,t,n,r,i,a,o){let s=new ye(t,n,1,1),c=s.getAttribute(`uv`),[l,u,d,f]=e;for(let e=0;e<c.count;e++)c.setXY(e,(l+(d-l)*c.getX(e))/1024,1-(f-(f-u)*c.getY(e))/1024);return s.translate(0,0,.02),s.rotateY(o<0?-Math.PI/2:Math.PI/2),s.translate(r,i,a),s}function ir(e,t,n,r,i,a){let o=new Me(t,32),s=o.getAttribute(`uv`),[c,l,u,d]=e;for(let e=0;e<s.count;e++)s.setXY(e,(c+(u-c)*s.getX(e))/1024,1-(d-(d-l)*s.getY(e))/1024);return o.translate(0,0,.02),o.rotateY(a<0?-Math.PI/2:Math.PI/2),o.translate(n,r,i),o}function ar(){if(typeof document>`u`)return null;let e=document.createElement(`canvas`);e.width=e.height=1024;let t=e.getContext(`2d`),n=`"Hiragino Mincho ProN","Yu Mincho","YuMincho","MS Mincho","Noto Serif JP",serif`;t.fillStyle=`#4a3324`,t.fillRect(0,0,768,256),t.strokeStyle=`#c9a24f`,t.lineWidth=12,t.strokeRect(10,10,748,236),t.fillStyle=`#f6e3b0`,t.font=`bold 104px ${n}`,t.textAlign=`center`,t.textBaseline=`middle`,t.fillText(`おじいちゃんの道場`,384,132,700),t.fillStyle=`#f3dfb8`,t.fillRect(0,256,768,256),t.strokeStyle=`#8a5a3a`,t.lineWidth=12,t.strokeRect(10,266,748,236),t.fillStyle=`#4a3020`,t.font=`bold 110px ${n}`,t.fillText(`おじいちゃんの家`,384,388,700),t.fillStyle=`#fffdf6`,t.beginPath(),t.arc(192,704,180,0,Math.PI*2),t.fill(),t.strokeStyle=`#3f4b77`,t.lineWidth=14,t.stroke();for(let e=0;e<12;e++){let n=e*Math.PI/6,r=e%3?140:120;t.lineWidth=e%3?6:12,t.beginPath(),t.moveTo(192+Math.sin(n)*r,704-Math.cos(n)*r),t.lineTo(192+Math.sin(n)*160,704-Math.cos(n)*160),t.stroke()}t.lineCap=`round`,t.lineWidth=14,t.beginPath(),t.moveTo(192,704),t.lineTo(192+Math.sin(-Math.PI/3)*85,704-Math.cos(-Math.PI/3)*85),t.stroke(),t.lineWidth=9,t.beginPath(),t.moveTo(192,704),t.lineTo(192+Math.sin(Math.PI/3)*125,704-Math.cos(Math.PI/3)*125),t.stroke(),t.fillStyle=`#e8705f`,t.beginPath(),t.arc(192,704,14,0,Math.PI*2),t.fill(),t.fillStyle=`#7f93b8`,t.fillRect(768,0,256,1024),t.fillStyle=`#fbf6e8`,t.fillRect(790,120,212,800),t.fillStyle=`#2a211c`,t.font=`bold 170px ${n}`,t.textAlign=`center`,[`心`,`技`,`体`].forEach((e,n)=>t.fillText(e,896,260+n*250,200)),t.fillStyle=`#c0392b`,t.fillRect(930,830,46,46);let r=new ue(e);return r.colorSpace=E,r.anisotropy=8,r.name=`Dojo signs`,r}function or(){if(typeof document>`u`)return null;let e=document.createElement(`canvas`);e.width=128,e.height=128;let t=e.getContext(`2d`);t.fillStyle=`#fffaf0`,t.fillRect(0,0,128,128);let n=vn(5);for(let e=0;e<60;e++)t.fillStyle=`rgba(230,215,185,${.08+n()*.08})`,t.fillRect(n()*128,n()*128,6+n()*20,2);t.fillStyle=`#7a5a3c`;for(let e=1;e<3;e++)t.fillRect(e*128/3-3,0,6,128);for(let e=1;e<4;e++)t.fillRect(0,e*128/4-3,128,6);t.fillRect(0,0,128,3),t.fillRect(0,125,128,3),t.fillRect(0,0,3,128),t.fillRect(125,0,3,128);let r=new ue(e);return r.colorSpace=E,r.wrapS=r.wrapT=Ne,r.anisotropy=4,r.name=`Dojo shoji`,r}function sr(){if(typeof document>`u`)return null;let e=1024,t=document.createElement(`canvas`);t.width=t.height=e;let n=t.getContext(`2d`),r=vn(606);for(let t=0;t<16;t++){let i=[],a=r()*e;for(;i.length<3;)i.push(a%e),a+=e*(.28+r()*.2);i.sort((e,t)=>e-t);for(let a=0;a<i.length;a++){let o=i[a],s=a+1<i.length?i[a+1]:i[0]+e,c=.93+r()*.12,l=r(),u=`rgb(${Math.round(236*c-l*6)},${Math.round(202*c-l*4)},${Math.round(150*c)})`;for(let e of[0,-1024]){n.fillStyle=u,n.fillRect(o+e,t*64,s-o,64);for(let i=0;i<7;i++){n.strokeStyle=`rgba(160,110,62,${.05+r()*.07})`,n.lineWidth=.8+r()*1.4,n.beginPath();let i=t*64+3+r()*58,a=r()*6,c=1+r()*2.2;for(let t=0;t<=s-o;t+=16)n.lineTo(o+e+t,i+Math.sin(t/70+a)*c);n.stroke()}n.fillStyle=`rgba(120,78,42,.55)`,n.fillRect(o+e-1,t*64,2.5,64)}}n.fillStyle=`rgba(120,78,42,.6)`,n.fillRect(0,t*64-1,e,2.5)}let i=new ue(t);return i.colorSpace=E,i.wrapS=i.wrapT=Ne,i.anisotropy=8,i.name=`Dojo wooden floor`,i}function cr(){if(typeof document>`u`)return null;let e=document.createElement(`canvas`);e.width=e.height=512;let t=e.getContext(`2d`),n=vn(77);for(let e=0;e<2;e++){let r=e*512/2;t.fillStyle=e?`#cbdda2`:`#c4d89b`,t.fillRect(0,r,512,256);for(let e=r+2;e<r+256;e+=4)t.fillStyle=`rgba(120,150,80,${.1+n()*.08})`,t.fillRect(0,e,512,1.4);for(let e=0;e<40;e++)t.fillStyle=`rgba(255,255,230,${.05+n()*.05})`,t.fillRect(n()*512,r+n()*512/2,30+n()*80,2);t.fillStyle=`#3f5c4c`,t.fillRect(0,r,512,9),t.fillRect(0,r+256-9,512,9),t.fillStyle=`rgba(255,255,255,.25)`;for(let e=0;e<512;e+=12)t.fillRect(e,r+3,5,2),t.fillRect(e+6,r+256-6,5,2)}t.fillStyle=`rgba(90,110,60,.5)`,t.fillRect(510,0,2,512);let r=new ue(e);return r.colorSpace=E,r.wrapS=r.wrapT=Ne,r.anisotropy=8,r.name=`Dojo tatami`,r}var lr={royal:{hemisphere:{sky:`#88a8de`,ground:`#323043`,intensity:.65},sun:{color:`#99b9ef`,intensity:1.75},fill:{color:`#e9a775`,intensity:.32},fog:{color:`#48658a`,density:.0034},environment:.22,background:`#203d61`,exposure:.92},colosseum:{hemisphere:{sky:`#c5d4ec`,ground:`#645342`,intensity:.85},sun:{color:`#ffe1b3`,intensity:2.4},fill:{color:`#e9a775`,intensity:.32},fog:{color:`#48658a`,density:.0034},environment:.3,background:`#203d61`,exposure:.92},school:{hemisphere:{sky:`#dcefff`,ground:`#9cc77f`,intensity:1.05},sun:{color:`#fff1d8`,intensity:2.2},fill:{color:`#ffd6b0`,intensity:.35},fog:{color:`#e4f0f2`,density:.0012},environment:.25,background:`#bfe3f7`,exposure:.95},dojo:{hemisphere:{sky:`#fff1dc`,ground:`#c9a77a`,intensity:1.05},sun:{color:`#ffecd0`,intensity:2.2},fill:{color:`#ffd6b0`,intensity:.35},fog:{color:`#e4f0f2`,density:.0012},environment:.25,background:`#bfe3f7`,exposure:.95}};function ur(e,t,n,r){let i=(e,t)=>e.role===t.role&&e.team===t.team&&(e.look??``)===(r.look?.(t)??``);for(let[i,a]of[...e])t.some(e=>e.id===i)||(e.delete(i),n.push(a),r.park(a));for(let a of t){let t=e.get(a.id);t&&!i(t,a)&&r.ready(a)&&(e.delete(a.id),n.push(t),r.park(t))}for(let a of t){if(e.has(a.id)||!r.ready(a))continue;let t=n.findIndex(e=>i(e,a));if(t<0){e.set(a.id,r.create(a));continue}let[o]=n.splice(t,1);r.unpark(o),e.set(a.id,o)}}var dr=class extends t{constructor(){super(),this.name=`RoomEnvironment`,this.position.y=-3.5;let t=new pe;t.deleteAttribute(`uv`);let n=new I({side:1}),r=new I,i=new C(16777215,900,28,2);i.position.set(.418,16.199,.3),this.add(i);let a=new B(t,n);a.position.set(-.757,13.219,.717),a.scale.set(31.713,28.305,28.591),this.add(a);let o=new e(t,r,6),s=new M;s.position.set(-10.906,2.009,1.846),s.rotation.set(0,-.195,0),s.scale.set(2.328,7.905,4.651),s.updateMatrix(),o.setMatrixAt(0,s.matrix),s.position.set(-5.607,-.754,-.758),s.rotation.set(0,.994,0),s.scale.set(1.97,1.534,3.955),s.updateMatrix(),o.setMatrixAt(1,s.matrix),s.position.set(6.167,.857,7.803),s.rotation.set(0,.561,0),s.scale.set(3.927,6.285,3.687),s.updateMatrix(),o.setMatrixAt(2,s.matrix),s.position.set(-2.017,.018,6.124),s.rotation.set(0,.333,0),s.scale.set(2.002,4.566,2.064),s.updateMatrix(),o.setMatrixAt(3,s.matrix),s.position.set(2.291,-.756,-2.621),s.rotation.set(0,-.286,0),s.scale.set(1.546,1.552,1.496),s.updateMatrix(),o.setMatrixAt(4,s.matrix),s.position.set(-2.193,-.369,-5.547),s.rotation.set(0,.516,0),s.scale.set(3.875,3.487,2.986),s.updateMatrix(),o.setMatrixAt(5,s.matrix),this.add(o);let c=new B(t,fr(50));c.position.set(-16.116,14.37,8.208),c.scale.set(.1,2.428,2.739),this.add(c);let l=new B(t,fr(50));l.position.set(-16.109,18.021,-8.207),l.scale.set(.1,2.425,2.751),this.add(l);let u=new B(t,fr(17));u.position.set(14.904,12.198,-1.832),u.scale.set(.15,4.265,6.331),this.add(u);let d=new B(t,fr(43));d.position.set(-.462,8.89,14.52),d.scale.set(4.38,5.441,.088),this.add(d);let f=new B(t,fr(20));f.position.set(3.235,11.486,-12.541),f.scale.set(2.5,2,.1),this.add(f);let p=new B(t,fr(100));p.position.set(0,20,0),p.scale.set(1,.1,1),this.add(p)}dispose(){let e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(let t of e)t.dispose()}};function fr(e){return new Ae({color:0,emissive:16777215,emissiveIntensity:e})}var pr={name:`CopyShader`,uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`},mr=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error(`THREE.Pass: .render() must be implemented in derived pass.`)}dispose(){}},hr=new a(-1,1,1,-1,0,1),gr=new class extends U{constructor(){super(),this.setAttribute(`position`,new f([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute(`uv`,new f([0,2,0,0,2,0],2))}},_r=class{constructor(e){this._mesh=new B(gr,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,hr)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}},vr=class extends mr{constructor(e,t=`tDiffuse`){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof ve?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=d.clone(e.uniforms),this.material=new ve({name:e.name===void 0?`unspecified`:e.name,defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new _r(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}},yr=class extends mr{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){let r=e.getContext(),i=e.state;i.buffers.color.setMask(!1),i.buffers.depth.setMask(!1),i.buffers.color.setLocked(!0),i.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),i.buffers.stencil.setTest(!0),i.buffers.stencil.setOp(r.REPLACE,r.REPLACE,r.REPLACE),i.buffers.stencil.setFunc(r.ALWAYS,a,4294967295),i.buffers.stencil.setClear(o),i.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),i.buffers.color.setLocked(!1),i.buffers.depth.setLocked(!1),i.buffers.color.setMask(!0),i.buffers.depth.setMask(!0),i.buffers.stencil.setLocked(!1),i.buffers.stencil.setFunc(r.EQUAL,1,4294967295),i.buffers.stencil.setOp(r.KEEP,r.KEEP,r.KEEP),i.buffers.stencil.setLocked(!0)}},br=class extends mr{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}},xr=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let n=e.getSize(new R);this._width=n.width,this._height=n.height,t=new ge(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:g}),t.texture.name=`EffectComposer.rt1`}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name=`EffectComposer.rt2`,this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new vr(pr),this.copyPass.material.blending=0,this.timer=new re}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){this.timer.update(),e===void 0&&(e=this.timer.getDelta());let t=this.renderer.getRenderTarget(),n=!1;for(let t=0,r=this.passes.length;t<r;t++){let r=this.passes[t];if(r.enabled!==!1){if(r.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(t),r.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),r.needsSwap){if(n){let t=this.renderer.getContext(),n=this.renderer.state.buffers.stencil;n.setFunc(t.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),n.setFunc(t.EQUAL,1,4294967295)}this.swapBuffers()}yr!==void 0&&(r instanceof yr?n=!0:r instanceof br&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new R);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let n=this._width*this._pixelRatio,r=this._height*this._pixelRatio;this.renderTarget1.setSize(n,r),this.renderTarget2.setSize(n,r);for(let e=0;e<this.passes.length;e++)this.passes[e].setSize(n,r)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}},Sr=class extends mr{constructor(e,t,n=null,i=null,a=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=i,this.clearAlpha=a,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new r}render(e,t,n){let r=e.autoClear;e.autoClear=!1;let i,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(i=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==1&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(i),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),e.autoClear=r}},Cr={name:`GTAOShader`,defines:{PERSPECTIVE_CAMERA:1,SAMPLES:16,NORMAL_VECTOR_TYPE:1,DEPTH_SWIZZLING:`x`,SCREEN_SPACE_RADIUS:0,SCREEN_SPACE_RADIUS_SCALE:100,SCENE_CLIP_BOX:0},uniforms:{tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new R},cameraNear:{value:null},cameraFar:{value:null},cameraProjectionMatrix:{value:new Ee},cameraProjectionMatrixInverse:{value:new Ee},cameraWorldMatrix:{value:new Ee},radius:{value:.25},distanceExponent:{value:1},thickness:{value:1},distanceFallOff:{value:1},scale:{value:1},sceneBoxMin:{value:new H(-1,-1,-1)},sceneBoxMax:{value:new H(1,1,1)}},vertexShader:`

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
		}`},wr={name:`GTAODepthShader`,defines:{PERSPECTIVE_CAMERA:1},uniforms:{tDepth:{value:null},cameraNear:{value:null},cameraFar:{value:null}},vertexShader:`
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

		}`},Tr={name:`GTAOBlendShader`,uniforms:{tDiffuse:{value:null},intensity:{value:1}},vertexShader:`
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
		}`};function Er(e=5){let t=Math.floor(e)%2==0?Math.floor(e)+1:Math.floor(e),n=Dr(t),r=n.length,i=new Uint8Array(r*4);for(let e=0;e<r;++e){let t=n[e],a=2*Math.PI*t/r,o=new H(Math.cos(a),Math.sin(a),0).normalize();i[e*4]=(o.x*.5+.5)*255,i[e*4+1]=(o.y*.5+.5)*255,i[e*4+2]=127,i[e*4+3]=255}let a=new x(i,t,t);return a.wrapS=Ne,a.wrapT=Ne,a.needsUpdate=!0,a}function Dr(e){let t=Math.floor(e)%2==0?Math.floor(e)+1:Math.floor(e),n=t*t,r=Array(n).fill(0),i=Math.floor(t/2),a=t-1;for(let e=1;e<=n;){if(i===-1&&a===t?(a=t-2,i=0):(a===t&&(a=0),i<0&&(i=t-1)),r[i*t+a]!==0){a-=2,i++;continue}r[i*t+a]=e++,a++,i--}return r}var Or={name:`PoissonDenoiseShader`,defines:{SAMPLES:16,SAMPLE_VECTORS:kr(16,2,1),NORMAL_VECTOR_TYPE:1,DEPTH_VALUE_SOURCE:0},uniforms:{tDiffuse:{value:null},tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new R},cameraProjectionMatrixInverse:{value:new Ee},lumaPhi:{value:5},depthPhi:{value:5},normalPhi:{value:5},radius:{value:4},index:{value:0}},vertexShader:`

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
		}`};function kr(e,t,n){let r=Ar(e,t,n),i=`vec3[SAMPLES](`;for(let t=0;t<e;t++){let n=r[t];i+=`vec3(${n.x}, ${n.y}, ${n.z})${t<e-1?`,`:`)`}`}return i}function Ar(e,t,n){let r=[];for(let i=0;i<e;i++){let a=2*Math.PI*t*i/e,o=(i/(e-1))**n;r.push(new H(Math.cos(a),Math.sin(a),o))}return r}var jr=class{constructor(e=Math){this.grad3=[[1,1,0],[-1,1,0],[1,-1,0],[-1,-1,0],[1,0,1],[-1,0,1],[1,0,-1],[-1,0,-1],[0,1,1],[0,-1,1],[0,1,-1],[0,-1,-1]],this.grad4=[[0,1,1,1],[0,1,1,-1],[0,1,-1,1],[0,1,-1,-1],[0,-1,1,1],[0,-1,1,-1],[0,-1,-1,1],[0,-1,-1,-1],[1,0,1,1],[1,0,1,-1],[1,0,-1,1],[1,0,-1,-1],[-1,0,1,1],[-1,0,1,-1],[-1,0,-1,1],[-1,0,-1,-1],[1,1,0,1],[1,1,0,-1],[1,-1,0,1],[1,-1,0,-1],[-1,1,0,1],[-1,1,0,-1],[-1,-1,0,1],[-1,-1,0,-1],[1,1,1,0],[1,1,-1,0],[1,-1,1,0],[1,-1,-1,0],[-1,1,1,0],[-1,1,-1,0],[-1,-1,1,0],[-1,-1,-1,0]],this.p=[];for(let t=0;t<256;t++)this.p[t]=Math.floor(e.random()*256);this.perm=[];for(let e=0;e<512;e++)this.perm[e]=this.p[e&255];this.simplex=[[0,1,2,3],[0,1,3,2],[0,0,0,0],[0,2,3,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,3,0],[0,2,1,3],[0,0,0,0],[0,3,1,2],[0,3,2,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,3,2,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,0,3],[0,0,0,0],[1,3,0,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,3,0,1],[2,3,1,0],[1,0,2,3],[1,0,3,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,3,1],[0,0,0,0],[2,1,3,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,1,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,0,1,2],[3,0,2,1],[0,0,0,0],[3,1,2,0],[2,1,0,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,1,0,2],[0,0,0,0],[3,2,0,1],[3,2,1,0]]}noise(e,t){let n,r,i,a=.5*(Math.sqrt(3)-1),o=(e+t)*a,s=Math.floor(e+o),c=Math.floor(t+o),l=(3-Math.sqrt(3))/6,u=(s+c)*l,d=s-u,f=c-u,p=e-d,m=t-f,h,g;p>m?(h=1,g=0):(h=0,g=1);let _=p-h+l,v=m-g+l,y=p-1+2*l,b=m-1+2*l,x=s&255,S=c&255,C=this.perm[x+this.perm[S]]%12,w=this.perm[x+h+this.perm[S+g]]%12,T=this.perm[x+1+this.perm[S+1]]%12,E=.5-p*p-m*m;E<0?n=0:(E*=E,n=E*E*this._dot(this.grad3[C],p,m));let D=.5-_*_-v*v;D<0?r=0:(D*=D,r=D*D*this._dot(this.grad3[w],_,v));let O=.5-y*y-b*b;return O<0?i=0:(O*=O,i=O*O*this._dot(this.grad3[T],y,b)),70*(n+r+i)}noise3d(e,t,n){let r,i,a,o,s=(e+t+n)*(1/3),c=Math.floor(e+s),l=Math.floor(t+s),u=Math.floor(n+s),d=1/6,f=(c+l+u)*d,p=c-f,m=l-f,h=u-f,g=e-p,_=t-m,v=n-h,y,b,x,S,C,w;g>=_?_>=v?(y=1,b=0,x=0,S=1,C=1,w=0):g>=v?(y=1,b=0,x=0,S=1,C=0,w=1):(y=0,b=0,x=1,S=1,C=0,w=1):_<v?(y=0,b=0,x=1,S=0,C=1,w=1):g<v?(y=0,b=1,x=0,S=0,C=1,w=1):(y=0,b=1,x=0,S=1,C=1,w=0);let T=g-y+d,E=_-b+d,D=v-x+d,O=g-S+2*d,ee=_-C+2*d,te=v-w+2*d,k=g-1+3*d,A=_-1+3*d,j=v-1+3*d,M=c&255,N=l&255,P=u&255,ne=this.perm[M+this.perm[N+this.perm[P]]]%12,re=this.perm[M+y+this.perm[N+b+this.perm[P+x]]]%12,ie=this.perm[M+S+this.perm[N+C+this.perm[P+w]]]%12,ae=this.perm[M+1+this.perm[N+1+this.perm[P+1]]]%12,oe=.6-g*g-_*_-v*v;oe<0?r=0:(oe*=oe,r=oe*oe*this._dot3(this.grad3[ne],g,_,v));let se=.6-T*T-E*E-D*D;se<0?i=0:(se*=se,i=se*se*this._dot3(this.grad3[re],T,E,D));let ce=.6-O*O-ee*ee-te*te;ce<0?a=0:(ce*=ce,a=ce*ce*this._dot3(this.grad3[ie],O,ee,te));let F=.6-k*k-A*A-j*j;return F<0?o=0:(F*=F,o=F*F*this._dot3(this.grad3[ae],k,A,j)),32*(r+i+a+o)}noise4d(e,t,n,r){let i=this.grad4,a=this.simplex,o=this.perm,s=(Math.sqrt(5)-1)/4,c=(5-Math.sqrt(5))/20,l,u,d,f,p,m=(e+t+n+r)*s,h=Math.floor(e+m),g=Math.floor(t+m),_=Math.floor(n+m),v=Math.floor(r+m),y=(h+g+_+v)*c,b=h-y,x=g-y,S=_-y,C=v-y,w=e-b,T=t-x,E=n-S,D=r-C,O=w>T?32:0,ee=w>E?16:0,te=T>E?8:0,k=w>D?4:0,A=T>D?2:0,j=+(E>D),M=O+ee+te+k+A+j,N=+(a[M][0]>=3),P=+(a[M][1]>=3),ne=+(a[M][2]>=3),re=+(a[M][3]>=3),ie=+(a[M][0]>=2),ae=+(a[M][1]>=2),oe=+(a[M][2]>=2),se=+(a[M][3]>=2),ce=+(a[M][0]>=1),F=+(a[M][1]>=1),le=+(a[M][2]>=1),ue=+(a[M][3]>=1),I=w-N+c,de=T-P+c,L=E-ne+c,R=D-re+c,fe=w-ie+2*c,pe=T-ae+2*c,me=E-oe+2*c,he=D-se+2*c,z=w-ce+3*c,ge=T-F+3*c,_e=E-le+3*c,ve=D-ue+3*c,ye=w-1+4*c,be=T-1+4*c,xe=E-1+4*c,Se=D-1+4*c,Ce=h&255,we=g&255,B=_&255,Te=v&255,Ee=o[Ce+o[we+o[B+o[Te]]]]%32,V=o[Ce+N+o[we+P+o[B+ne+o[Te+re]]]]%32,De=o[Ce+ie+o[we+ae+o[B+oe+o[Te+se]]]]%32,H=o[Ce+ce+o[we+F+o[B+le+o[Te+ue]]]]%32,Oe=o[Ce+1+o[we+1+o[B+1+o[Te+1]]]]%32,U=.6-w*w-T*T-E*E-D*D;U<0?l=0:(U*=U,l=U*U*this._dot4(i[Ee],w,T,E,D));let ke=.6-I*I-de*de-L*L-R*R;ke<0?u=0:(ke*=ke,u=ke*ke*this._dot4(i[V],I,de,L,R));let Ae=.6-fe*fe-pe*pe-me*me-he*he;Ae<0?d=0:(Ae*=Ae,d=Ae*Ae*this._dot4(i[De],fe,pe,me,he));let je=.6-z*z-ge*ge-_e*_e-ve*ve;je<0?f=0:(je*=je,f=je*je*this._dot4(i[H],z,ge,_e,ve));let Me=.6-ye*ye-be*be-xe*xe-Se*Se;return Me<0?p=0:(Me*=Me,p=Me*Me*this._dot4(i[Oe],ye,be,xe,Se)),27*(l+u+d+f+p)}_dot(e,t,n){return e[0]*t+e[1]*n}_dot3(e,t,n,r){return e[0]*t+e[1]*n+e[2]*r}_dot4(e,t,n,r,i){return e[0]*t+e[1]*n+e[2]*r+e[3]*i}},Mr=class e extends mr{constructor(e,t,n=512,i=512,a,o,s){super(),this.width=n,this.height=i,this.clear=!0,this.camera=t,this.scene=e,this.output=0,this._renderGBuffer=!0,this._visibilityCache=[],this.blendIntensity=1,this.pdRings=2,this.pdRadiusExponent=2,this.pdSamples=16,this.gtaoNoiseTexture=Er(),this.pdNoiseTexture=this._generateNoise(),this.gtaoRenderTarget=new ge(this.width,this.height,{type:g}),this.pdRenderTarget=this.gtaoRenderTarget.clone(),this.gtaoMaterial=new ve({defines:Object.assign({},Cr.defines),uniforms:d.clone(Cr.uniforms),vertexShader:Cr.vertexShader,fragmentShader:Cr.fragmentShader,blending:0,depthTest:!1,depthWrite:!1}),this.gtaoMaterial.defines.PERSPECTIVE_CAMERA=+!!this.camera.isPerspectiveCamera,this.gtaoMaterial.uniforms.tNoise.value=this.gtaoNoiseTexture,this.gtaoMaterial.uniforms.resolution.value.set(this.width,this.height),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.normalMaterial=new Pe,this.normalMaterial.blending=0,this.pdMaterial=new ve({defines:Object.assign({},Or.defines),uniforms:d.clone(Or.uniforms),vertexShader:Or.vertexShader,fragmentShader:Or.fragmentShader,depthTest:!1,depthWrite:!1}),this.pdMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.pdMaterial.uniforms.tNoise.value=this.pdNoiseTexture,this.pdMaterial.uniforms.resolution.value.set(this.width,this.height),this.pdMaterial.uniforms.lumaPhi.value=10,this.pdMaterial.uniforms.depthPhi.value=2,this.pdMaterial.uniforms.normalPhi.value=3,this.pdMaterial.uniforms.radius.value=8,this.depthRenderMaterial=new ve({defines:Object.assign({},wr.defines),uniforms:d.clone(wr.uniforms),vertexShader:wr.vertexShader,fragmentShader:wr.fragmentShader,blending:0}),this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.copyMaterial=new ve({uniforms:d.clone(pr.uniforms),vertexShader:pr.vertexShader,fragmentShader:pr.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blendSrc:208,blendDst:200,blendEquation:100,blendSrcAlpha:206,blendDstAlpha:200,blendEquationAlpha:100}),this.blendMaterial=new ve({uniforms:d.clone(Tr.uniforms),vertexShader:Tr.vertexShader,fragmentShader:Tr.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blending:5,blendSrc:208,blendDst:200,blendEquation:100,blendSrcAlpha:206,blendDstAlpha:200,blendEquationAlpha:100}),this._fsQuad=new _r(null),this._originalClearColor=new r,this.setGBuffer(a?a.depthTexture:void 0,a?a.normalTexture:void 0),o!==void 0&&this.updateGtaoMaterial(o),s!==void 0&&this.updatePdMaterial(s)}setSize(e,t){this.width=e,this.height=t,this.gtaoRenderTarget.setSize(e,t),this.normalRenderTarget.setSize(e,t),this.pdRenderTarget.setSize(e,t),this.gtaoMaterial.uniforms.resolution.value.set(e,t),this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.pdMaterial.uniforms.resolution.value.set(e,t),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse)}dispose(){this.gtaoNoiseTexture.dispose(),this.pdNoiseTexture.dispose(),this.normalRenderTarget.dispose(),this.gtaoRenderTarget.dispose(),this.pdRenderTarget.dispose(),this.normalMaterial.dispose(),this.pdMaterial.dispose(),this.copyMaterial.dispose(),this.depthRenderMaterial.dispose(),this._fsQuad.dispose()}get gtaoMap(){return this.pdRenderTarget.texture}setGBuffer(e,t){e===void 0?(this.depthTexture=new c,this.depthTexture.format=O,this.depthTexture.type=_,this.normalRenderTarget=new ge(this.width,this.height,{minFilter:A,magFilter:A,type:g,depthTexture:this.depthTexture}),this.normalTexture=this.normalRenderTarget.texture,this._renderGBuffer=!0):(this.depthTexture=e,this.normalTexture=t,this._renderGBuffer=!1);let n=+!!this.normalTexture,r=this.depthTexture===this.normalTexture?`w`:`x`;this.gtaoMaterial.defines.NORMAL_VECTOR_TYPE=n,this.gtaoMaterial.defines.DEPTH_SWIZZLING=r,this.gtaoMaterial.uniforms.tNormal.value=this.normalTexture,this.gtaoMaterial.uniforms.tDepth.value=this.depthTexture,this.pdMaterial.defines.NORMAL_VECTOR_TYPE=n,this.pdMaterial.defines.DEPTH_SWIZZLING=r,this.pdMaterial.uniforms.tNormal.value=this.normalTexture,this.pdMaterial.uniforms.tDepth.value=this.depthTexture,this.depthRenderMaterial.uniforms.tDepth.value=this.normalRenderTarget.depthTexture}setSceneClipBox(e){e?(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX!==1,this.gtaoMaterial.defines.SCENE_CLIP_BOX=1,this.gtaoMaterial.uniforms.sceneBoxMin.value.copy(e.min),this.gtaoMaterial.uniforms.sceneBoxMax.value.copy(e.max)):(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX===0,this.gtaoMaterial.defines.SCENE_CLIP_BOX=0)}updateGtaoMaterial(e){e.radius!==void 0&&(this.gtaoMaterial.uniforms.radius.value=e.radius),e.distanceExponent!==void 0&&(this.gtaoMaterial.uniforms.distanceExponent.value=e.distanceExponent),e.thickness!==void 0&&(this.gtaoMaterial.uniforms.thickness.value=e.thickness),e.distanceFallOff!==void 0&&(this.gtaoMaterial.uniforms.distanceFallOff.value=e.distanceFallOff,this.gtaoMaterial.needsUpdate=!0),e.scale!==void 0&&(this.gtaoMaterial.uniforms.scale.value=e.scale),e.samples!==void 0&&e.samples!==this.gtaoMaterial.defines.SAMPLES&&(this.gtaoMaterial.defines.SAMPLES=e.samples,this.gtaoMaterial.needsUpdate=!0),e.screenSpaceRadius!==void 0&&+!!e.screenSpaceRadius!==this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS&&(this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS=+!!e.screenSpaceRadius,this.gtaoMaterial.needsUpdate=!0)}updatePdMaterial(e){let t=!1;e.lumaPhi!==void 0&&(this.pdMaterial.uniforms.lumaPhi.value=e.lumaPhi),e.depthPhi!==void 0&&(this.pdMaterial.uniforms.depthPhi.value=e.depthPhi),e.normalPhi!==void 0&&(this.pdMaterial.uniforms.normalPhi.value=e.normalPhi),e.radius!==void 0&&e.radius!==this.radius&&(this.pdMaterial.uniforms.radius.value=e.radius),e.radiusExponent!==void 0&&e.radiusExponent!==this.pdRadiusExponent&&(this.pdRadiusExponent=e.radiusExponent,t=!0),e.rings!==void 0&&e.rings!==this.pdRings&&(this.pdRings=e.rings,t=!0),e.samples!==void 0&&e.samples!==this.pdSamples&&(this.pdSamples=e.samples,t=!0),t&&(this.pdMaterial.defines.SAMPLES=this.pdSamples,this.pdMaterial.defines.SAMPLE_VECTORS=kr(this.pdSamples,this.pdRings,this.pdRadiusExponent),this.pdMaterial.needsUpdate=!0)}render(t,n,r){switch(this._renderGBuffer&&(this._overrideVisibility(),this._renderOverride(t,this.normalMaterial,this.normalRenderTarget,7829503,1),this._restoreVisibility()),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.gtaoMaterial.uniforms.cameraWorldMatrix.value.copy(this.camera.matrixWorld),this._renderPass(t,this.gtaoMaterial,this.gtaoRenderTarget,16777215,1),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this._renderPass(t,this.pdMaterial,this.pdRenderTarget,16777215,1),this.output){case e.OUTPUT.Off:break;case e.OUTPUT.Diffuse:this.copyMaterial.uniforms.tDiffuse.value=r.texture,this.copyMaterial.blending=0,this._renderPass(t,this.copyMaterial,this.renderToScreen?null:n);break;case e.OUTPUT.AO:this.copyMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.copyMaterial.blending=0,this._renderPass(t,this.copyMaterial,this.renderToScreen?null:n);break;case e.OUTPUT.Denoise:this.copyMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this.copyMaterial.blending=0,this._renderPass(t,this.copyMaterial,this.renderToScreen?null:n);break;case e.OUTPUT.Depth:this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this._renderPass(t,this.depthRenderMaterial,this.renderToScreen?null:n);break;case e.OUTPUT.Normal:this.copyMaterial.uniforms.tDiffuse.value=this.normalRenderTarget.texture,this.copyMaterial.blending=0,this._renderPass(t,this.copyMaterial,this.renderToScreen?null:n);break;case e.OUTPUT.Default:this.copyMaterial.uniforms.tDiffuse.value=r.texture,this.copyMaterial.blending=0,this._renderPass(t,this.copyMaterial,this.renderToScreen?null:n),this.blendMaterial.uniforms.intensity.value=this.blendIntensity,this.blendMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this._renderPass(t,this.blendMaterial,this.renderToScreen?null:n);break;default:console.warn(`THREE.GTAOPass: Unknown output type.`)}}_renderPass(e,t,n,r,i){e.getClearColor(this._originalClearColor);let a=e.getClearAlpha(),o=e.autoClear;e.setRenderTarget(n),e.autoClear=!1,r!=null&&(e.setClearColor(r),e.setClearAlpha(i||0),e.clear()),this._fsQuad.material=t,this._fsQuad.render(e),e.autoClear=o,e.setClearColor(this._originalClearColor),e.setClearAlpha(a)}_renderOverride(e,t,n,r,i){e.getClearColor(this._originalClearColor);let a=e.getClearAlpha(),o=e.autoClear;e.setRenderTarget(n),e.autoClear=!1,r=t.clearColor||r,i=t.clearAlpha||i,r!=null&&(e.setClearColor(r),e.setClearAlpha(i||0),e.clear()),this.scene.overrideMaterial=t,e.render(this.scene,this.camera),this.scene.overrideMaterial=null,e.autoClear=o,e.setClearColor(this._originalClearColor),e.setClearAlpha(a)}_overrideVisibility(){let e=this.scene,t=this._visibilityCache;e.traverse(function(e){(e.isPoints||e.isLine||e.isLine2)&&e.visible&&(e.visible=!1,t.push(e))})}_restoreVisibility(){let e=this._visibilityCache;for(let t=0;t<e.length;t++)e[t].visible=!0;e.length=0}_generateNoise(e=64){let t=new jr,n=e*e*4,r=new Uint8Array(n);for(let n=0;n<e;n++)for(let i=0;i<e;i++){let a=n,o=i;r[(n*e+i)*4]=(t.noise(a,o)*.5+.5)*255,r[(n*e+i)*4+1]=(t.noise(a+e,o)*.5+.5)*255,r[(n*e+i)*4+2]=(t.noise(a,o+e)*.5+.5)*255,r[(n*e+i)*4+3]=(t.noise(a+e,o+e)*.5+.5)*255}let i=new x(r,e,e,Fe,v);return i.wrapS=Ne,i.wrapT=Ne,i.needsUpdate=!0,i}};Mr.OUTPUT={Off:-1,Default:0,Diffuse:1,Depth:2,Normal:3,AO:4,Denoise:5};var Nr={name:`OutputShader`,uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`},Pr=class extends mr{constructor(){super(),this.isOutputPass=!0,this.uniforms=d.clone(Nr.uniforms),this.material=new ke({name:Nr.name,uniforms:this.uniforms,vertexShader:Nr.vertexShader,fragmentShader:Nr.fragmentShader}),this._fsQuad=new _r(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},je.getTransfer(this._outputColorSpace)===`srgb`&&(this.material.defines.SRGB_TRANSFER=``),this._toneMapping===1?this.material.defines.LINEAR_TONE_MAPPING=``:this._toneMapping===2?this.material.defines.REINHARD_TONE_MAPPING=``:this._toneMapping===3?this.material.defines.CINEON_TONE_MAPPING=``:this._toneMapping===4?this.material.defines.ACES_FILMIC_TONE_MAPPING=``:this._toneMapping===6?this.material.defines.AGX_TONE_MAPPING=``:this._toneMapping===7?this.material.defines.NEUTRAL_TONE_MAPPING=``:this._toneMapping===5&&(this.material.defines.CUSTOM_TONE_MAPPING=``),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}},Fr={name:`FXAAShader`,uniforms:{tDiffuse:{value:null},resolution:{value:new R(1/1024,1/512)}},vertexShader:`

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

		}`},Ir={name:`LuminosityHighPassShader`,uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new r(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`},Lr=class e extends mr{constructor(e,t=1,n,i){super(),this.strength=t,this.radius=n,this.threshold=i,this.resolution=e===void 0?new R(256,256):new R(e.x,e.y),this.clearColor=new r(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let a=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new ge(a,o,{type:g}),this.renderTargetBright.texture.name=`UnrealBloomPass.bright`,this.renderTargetBright.texture.generateMipmaps=!1;for(let e=0;e<this.nMips;e++){let t=new ge(a,o,{type:g});t.texture.name=`UnrealBloomPass.h`+e,t.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(t);let n=new ge(a,o,{type:g});n.texture.name=`UnrealBloomPass.v`+e,n.texture.generateMipmaps=!1,this.renderTargetsVertical.push(n),a=Math.round(a/2),o=Math.round(o/2)}let s=Ir;this.highPassUniforms=d.clone(s.uniforms),this.highPassUniforms.luminosityThreshold.value=i,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new ve({uniforms:this.highPassUniforms,vertexShader:s.vertexShader,fragmentShader:s.fragmentShader}),this.separableBlurMaterials=[];let c=[6,10,14,18,22];a=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let e=0;e<this.nMips;e++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(c[e])),this.separableBlurMaterials[e].uniforms.invSize.value=new R(1/a,1/o),a=Math.round(a/2),o=Math.round(o/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let l=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=l,this.bloomTintColors=[new H(1,1,1),new H(1,1,1),new H(1,1,1),new H(1,1,1),new H(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=d.clone(pr.uniforms),this.blendMaterial=new ve({uniforms:this.copyUniforms,vertexShader:pr.vertexShader,fragmentShader:pr.fragmentShader,premultipliedAlpha:!0,blending:2,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new r,this._oldClearAlpha=1,this._basic=new z,this._fsQuad=new _r(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),r=Math.round(t/2);this.renderTargetBright.setSize(n,r);for(let e=0;e<this.nMips;e++)this.renderTargetsHorizontal[e].setSize(n,r),this.renderTargetsVertical[e].setSize(n,r),this.separableBlurMaterials[e].uniforms.invSize.value=new R(1/n,1/r),n=Math.round(n/2),r=Math.round(r/2)}render(t,n,r,i,a){t.getClearColor(this._oldClearColor),this._oldClearAlpha=t.getClearAlpha();let o=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),a&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=r.texture,t.setRenderTarget(null),t.clear(),this._fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=r.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this._fsQuad.render(t);let s=this.renderTargetBright;for(let n=0;n<this.nMips;n++)this._fsQuad.material=this.separableBlurMaterials[n],this.separableBlurMaterials[n].uniforms.colorTexture.value=s.texture,this.separableBlurMaterials[n].uniforms.direction.value=e.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[n]),t.clear(),this._fsQuad.render(t),this.separableBlurMaterials[n].uniforms.colorTexture.value=this.renderTargetsHorizontal[n].texture,this.separableBlurMaterials[n].uniforms.direction.value=e.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[n]),t.clear(),this._fsQuad.render(t),s=this.renderTargetsVertical[n];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this._fsQuad.render(t),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,a&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(r),this._fsQuad.render(t)),t.setClearColor(this._oldClearColor,this._oldClearAlpha),t.autoClear=o}_getSeparableBlurMaterial(e){let t=[],n=e/3;for(let r=0;r<e;r++)t.push(.39894*Math.exp(-.5*r*r/(n*n))/n);return new ve({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new R(.5,.5)},direction:{value:new R(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`

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

				}`})}_getCompositeMaterial(e){return new ve({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

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

				}`})}};Lr.BlurDirectionX=new R(1,0),Lr.BlurDirectionY=new R(0,1);var Rr={watercolor:{name:`水彩`,paper:`#fffaf0`,ink:`#4a3326`,paint:3,shade:.84,exposure:1.06,saturation:1.12,contrast:.92,warmth:.35,levels:0,bleed:.6,edge:.18,grain:.13,fine:.03,wash:.14,granulate:.22,hatch:0,wobble:.8,vignette:.06,stripes:!1,lines:[.08,.35]},pencil:{name:`色えんぴつ`,paper:`#fffcf4`,ink:`#3d3530`,paint:0,shade:.85,exposure:1.06,saturation:1,contrast:.92,warmth:.25,levels:0,bleed:.1,edge:.45,grain:.12,fine:.04,wash:0,granulate:0,hatch:.24,wobble:0,vignette:.05,stripes:!1,lines:[.1,.38]},pencil1:{name:`色えんぴつ（直す前）`,paper:`#fffcf4`,ink:`#3d3530`,paint:2,shade:.82,exposure:1.08,saturation:.95,contrast:.9,warmth:.25,levels:0,bleed:.1,edge:.5,grain:.16,fine:.08,wash:.03,granulate:0,hatch:.34,wobble:.5,vignette:.05,stripes:!0,lines:[.08,.35]},gouache:{name:`絵の具`,paper:`#fff8ec`,ink:`#2e2420`,paint:3.5,shade:.86,exposure:1.04,saturation:1.2,contrast:1,warmth:.3,levels:7,bleed:.2,edge:.45,grain:.08,fine:.02,wash:.05,granulate:.06,hatch:0,wobble:.4,vignette:.05,stripes:!1,lines:[.08,.35]}},zr=e=>new r(e);function Br(e){let t=e=>{let t=zr(e);return new H(t.r,t.g,t.b)};return{tDiffuse:{value:null},resolution:{value:new R(1/1024,1/512)},paper:{value:t(e.paper)},ink:{value:t(e.ink)},paint:{value:e.paint},shade:{value:e.shade},exposure:{value:e.exposure},saturation:{value:e.saturation},contrast:{value:e.contrast},warmth:{value:e.warmth},levels:{value:e.levels},bleed:{value:e.bleed},edge:{value:e.edge},grain:{value:e.grain},fine:{value:e.fine},wash:{value:e.wash},granulate:{value:e.granulate},hatch:{value:e.hatch},stripes:{value:+!!e.stripes},lines:{value:new R(...e.lines)},wobble:{value:e.wobble},vignette:{value:e.vignette},tMask:{value:null},maskOn:{value:0}}}var Vr={name:`PictureBookShader`,uniforms:Br(Rr.watercolor),vertexShader:`varying vec2 vUv;
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
}`};async function Hr(e,n){let r=new dr,i=new Ot(e),o=i;o._setSize(256);let s=o._allocateTargets(),c=new t,l=new pe,u=new z({side:1,depthWrite:!1,depthTest:!1});for(let e of[o._blurMaterial,o._ggxMaterial])c.add(new B(o._lodMeshes[0].geometry,e));c.add(new B(l,u));let d=e.getRenderTarget(),f=e.toneMapping,p;e.setRenderTarget(s),e.toneMapping=0;try{p=Promise.all([e.compileAsync(r,new Se(90,1,.1,100)),e.compileAsync(c,new a)])}finally{e.setRenderTarget(d),e.toneMapping=f}await p;let m=i.fromScene(r,n).texture;return s.dispose(),l.dispose(),u.dispose(),r.dispose(),i.dispose(),m}var Ur={0:1,1:0,2:2};function Wr(e){let t=e,n=new me;return n.side=e.shadowSide??Ur[e.side],n.alphaMap=t.alphaMap??null,n.alphaTest=e.alphaToCoverage===!0?.5:e.alphaTest,n.map=t.map??null,n.clipShadows=e.clipShadows,n.clippingPlanes=e.clippingPlanes??null,n.clipIntersection=e.clipIntersection,n.displacementMap=t.displacementMap??null,n.displacementScale=t.displacementScale??1,n.displacementBias=t.displacementBias??0,n.wireframe=t.wireframe??!1,n}function Gr(t,n){let r;if(t.isSkinnedMesh){let e=t,i=new h(t.geometry,n);i.bind(e.skeleton,e.bindMatrix),i.bindMode=e.bindMode,r=i}else if(t.isInstancedMesh){let i=t,a=new e(t.geometry,n,1);i.instanceColor&&(a.instanceColor=new ce(new Float32Array(3),3)),a.morphTexture=i.morphTexture,r=a}else r=new B(t.geometry,n);return r.morphTargetInfluences=t.morphTargetInfluences,r.castShadow=t.castShadow,r.receiveShadow=t.receiveShadow,r.frustumCulled=!1,r}function Kr(e){let t=new V,n=new Set;return e.traverseVisible(e=>{let r=e;if(!r.isMesh||!e.castShadow)return;let i=Array.isArray(r.material)?r.geometry.groups.map(e=>r.material[e.materialIndex??0]):[r.material];for(let e of i){if(!e||!e.visible)continue;let i=Wr(e),a=r.geometry,o=[r.isSkinnedMesh,r.isInstancedMesh,!!r.instanceColor,!!r.morphTexture,i.side,i.alphaTest>0,!!i.map,!!i.alphaMap,!!i.displacementMap,i.wireframe,Object.keys(a.attributes).sort().join(`+`),Object.keys(a.morphAttributes).sort().join(`+`),a.morphTargetsRelative].join(`|`);if(n.has(o)){i.dispose();continue}n.add(o),t.add(Gr(r,i))}}),t}function qr(e){let t=e;if(!t||!t.isTexture||!(t.isCubeTexture||t.mapping===306))return;let n=Et.backgroundCube,r=new ve({name:`BackgroundCubeMaterial`,uniforms:d.clone(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:1,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1});r.uniforms.envMap.value=t,Object.defineProperty(r,"envMap",{get(){return this.uniforms.envMap.value}}),r.toneMapped=je.getTransfer(t.colorSpace)!==xe;let i=new pe(1,1,1);i.deleteAttribute(`normal`),i.deleteAttribute(`uv`);let a=new B(i,r);return a.frustumCulled=!1,a}var Jr={1:`LINEAR_TONE_MAPPING`,2:`REINHARD_TONE_MAPPING`,3:`CINEON_TONE_MAPPING`,4:`ACES_FILMIC_TONE_MAPPING`,6:`AGX_TONE_MAPPING`,7:`NEUTRAL_TONE_MAPPING`,5:`CUSTOM_TONE_MAPPING`};function Yr(e,t){let n=e;if(n._outputColorSpace===t.outputColorSpace&&n._toneMapping===t.toneMapping)return;n._outputColorSpace=t.outputColorSpace,n._toneMapping=t.toneMapping;let r={};je.getTransfer(t.outputColorSpace)===`srgb`&&(r.SRGB_TRANSFER=``);let i=Jr[t.toneMapping];i&&(r[i]=``),e.material.defines=r,e.material.needsUpdate=!0}var Xr=new a(-1,1,1,-1,0,1),Zr=class extends Mr{setSize(e,t){let n=Math.min(.5,960/e);super.setSize(Math.max(1,Math.round(e*n)),Math.max(1,Math.round(t*n)))}render(e,t,n,r,i){this.setGBuffer(n.depthTexture,void 0),this.depthRenderMaterial.uniforms.tDepth.value=n.depthTexture,super.render(e,t,n,r,i)}},Qr={name:`SharpenShader`,uniforms:{tDiffuse:{value:null},resolution:{value:new R(1/1024,1/512)},sharpness:{value:{sharpness:.5}.sharpness}},vertexShader:`varying vec2 vUv;
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
}`};function $r(e,t,n){let r=new Zr(e,t,16,16);return r.blendIntensity=1,r.updateGtaoMaterial({radius:1.15,thickness:1,distanceExponent:1.5,distanceFallOff:1,scale:1.4,samples:n?4:8,screenSpaceRadius:!1}),r.updatePdMaterial({samples:n?4:8,rings:2,radius:4,depthPhi:1,normalPhi:3}),r}function ei(){let e=new Lr(new R(16,16),.2,.45,1.25);return e.materialHighPassFilter.fragmentShader=e.materialHighPassFilter.fragmentShader.replace(`vec4 texel = texture2D( tDiffuse, vUv );`,`vec4 texel = texture2D( tDiffuse, vUv );
     texel.rgb=vec3(texel.r>=0.0?min(texel.r,16.0):0.0,
                    texel.g>=0.0?min(texel.g,16.0):0.0,
                    texel.b>=0.0?min(texel.b,16.0):0.0);`),e}function ti(e){let t=e;return t.isMesh?[t.material].flat().some(e=>!e.transparent&&!e.isShaderMaterial):!1}var ni=e=>e.isMesh&&(/Line/.test(e.name)||[e.material].flat().some(e=>/Line/.test(e.name))),ri=e=>!!(e.isMesh||e.isLine||e.isPoints||e.isSprite),ii=class{renderer;scene;camera;mobile;composer;ao;bloom;sharpen;book;bookStyle=`off`;maskRoots=()=>[];mask;maskScene=Object.assign(new t,{overrideMaterial:new z({color:16777215,name:`Fighter mask`})});antialias;render3d;output=new Pr;constructor(e,t,n,r=!1,i={}){this.renderer=e,this.scene=t,this.camera=n,this.mobile=r;let a=i.ambientOcclusion!==!1,o=i.bloom!==!1;this.composer=new xr(e);for(let e of[this.composer.renderTarget1,this.composer.renderTarget2])e.depthTexture=new c(1,1,oe);this.antialias=new vr(Fr),this.render3d=new Sr(t,n),this.composer.addPass(this.render3d),a&&(this.ao=$r(t,n,r),this.composer.addPass(this.ao)),o&&(this.bloom=ei(),this.composer.addPass(this.bloom)),this.composer.addPass(this.output),this.composer.addPass(this.antialias),e.info.autoReset=!1}setAmbientOcclusion(e){e&&!this.ao&&(this.ao=$r(this.scene,this.camera,this.mobile),this.composer.insertPass(this.ao,this.composer.passes.indexOf(this.render3d)+1),this.sizePasses()),this.ao&&(this.ao.enabled=e)}setBloom(e){e!==!!this.bloom&&(e?(this.bloom=ei(),this.composer.insertPass(this.bloom,this.composer.passes.indexOf(this.output)),this.sizePasses()):this.bloom&&=(this.composer.removePass(this.bloom),this.bloom.dispose(),void 0))}setSharpen(e){e!==!!this.sharpen&&(e?(this.sharpen=new vr(Qr),this.book?this.composer.insertPass(this.sharpen,this.composer.passes.indexOf(this.book)):this.composer.addPass(this.sharpen),this.sizePasses()):this.sharpen&&=(this.composer.removePass(this.sharpen),this.sharpen.dispose(),void 0))}setBook(e){if(this.bookStyle=e,e===`off`){this.book&&=(this.composer.removePass(this.book),this.book.dispose(),void 0),this.mask?.dispose(),this.mask=void 0;return}if(!this.book)this.book=new vr({...Vr,uniforms:Br(Rr[e])}),this.composer.addPass(this.book);else for(let[t,n]of Object.entries(Br(Rr[e])))[`tDiffuse`,`resolution`,`tMask`,`maskOn`].includes(t)||(this.book.uniforms[t].value=n.value);this.sizePasses()}setAntialias(e){this.antialias.enabled=e}width=1;height=1;resize(e,t){this.width=e,this.height=t,this.composer.setSize(e,t),this.sizePasses()}sizePasses(){let e=this.renderer.getPixelRatio(),t=1/(this.width*e),n=1/(this.height*e);this.antialias.uniforms.resolution.value.set(t,n),this.sharpen?.uniforms.resolution.value.set(t,n),this.book?.uniforms.resolution.value.set(t,n)}render(e){this.renderer.info.reset(),this.renderMask(),this.composer.render(e)}screenQuads(){let e=this.composer.passes.filter(e=>e.enabled),t=e[e.length-1],n=[];for(let r of e){if(r===this.ao&&this.ao){let e=this.composer.readBuffer,t=this.output._fsQuad._mesh.geometry;this.ao.setGBuffer(e.depthTexture,void 0),this.ao.depthRenderMaterial.uniforms.tDepth.value=e.depthTexture;for(let e of[this.ao.gtaoMaterial,this.ao.pdMaterial,this.ao.copyMaterial,this.ao.blendMaterial])n.push({mesh:new B(t,e),toScreen:!1});continue}if(r!==this.output&&!(r instanceof vr))continue;r===this.output&&Yr(this.output,this.renderer);let e=r._fsQuad?._mesh;e&&n.push({mesh:e,toScreen:this.composer.renderToScreen&&r===t})}return n}renderMask(){let e=this.book;if(!e)return;let t=this.maskRoots().filter(e=>e.visible&&e.parent);if(!t.length){e.uniforms.maskOn.value=0;return}let n=this.renderer.getPixelRatio(),i=Math.max(1,Math.floor(this.width*n)),a=Math.max(1,Math.floor(this.height*n));this.mask?(this.mask.width!==i||this.mask.height!==a)&&this.mask.setSize(i,a):this.mask=new ge(i,a,{depthBuffer:!1,stencilBuffer:!1});let o=[],s=[];for(let e of t){let t=!1;e.traverse(e=>{e.visible&&ni(e)&&ti(e)&&(t=!0)}),e.traverse(e=>{ri(e)&&(!ti(e)||t&&!ni(e))&&(o.push(e),s.push(e.layers.mask),e.layers.mask=0)})}let c=t.map(e=>e.parent),l=this.renderer.getRenderTarget(),u=this.renderer.getClearColor(new r),d=this.renderer.getClearAlpha();for(let e of t)this.maskScene.add(e);try{this.renderer.setRenderTarget(this.mask),this.renderer.setClearColor(0,0),this.renderer.clear(!0,!1,!1),this.renderer.render(this.maskScene,this.camera)}finally{t.forEach((e,t)=>c[t].add(e)),o.forEach((e,t)=>{e.layers.mask=s[t]}),this.renderer.setRenderTarget(l),this.renderer.setClearColor(u,d)}e.uniforms.tMask.value=this.mask.texture,e.uniforms.maskOn.value=1}warmMask(){if(!this.book)return;let e=[];for(let t of this.maskRoots())t.traverse(t=>{e.push(t)});let t=e.map(e=>e.visible),n=e.map(e=>e.frustumCulled);e.forEach(e=>{e.visible=!0,e.frustumCulled=!1});try{this.renderMask()}finally{e.forEach((e,r)=>{e.visible=t[r],e.frustumCulled=n[r]})}}},ai={colosseum:{pc:{pixelRatio:1.5,shadow:`every`,ambientOcclusion:!1,bloom:!1,lampLights:!0,movingShadows:!1,mapLight:!1,mapPointLights:!1,cullBuildings:!1,skyCube:0,bakeMapLight:!1,shadowSamples:5,fighterLight:!1,fighterKeepMetal:!1,fadeWhenNeeded:!1,sharpen:!1,antialias:!0},mobile:{pixelRatio:1.275,shadow:`once`,ambientOcclusion:!1,bloom:!1,lampLights:!0,movingShadows:!1,mapLight:!0,mapPointLights:!0,cullBuildings:!1,skyCube:512,bakeMapLight:!0,shadowSamples:1,fighterLight:!0,fighterKeepMetal:!0,fadeWhenNeeded:!0,sharpen:!0,antialias:!0}},royal:{pc:{pixelRatio:1.5,shadow:`every`,ambientOcclusion:!0,bloom:!0,lampLights:!0,movingShadows:!0,mapLight:!1,mapPointLights:!1,cullBuildings:!1,skyCube:0,bakeMapLight:!1,shadowSamples:5,fighterLight:!1,fighterKeepMetal:!1,fadeWhenNeeded:!1,sharpen:!1,antialias:!0},mobile:{pixelRatio:1.275,shadow:`once`,ambientOcclusion:!1,bloom:!1,lampLights:!1,movingShadows:!1,mapLight:!0,mapPointLights:!1,cullBuildings:!0,skyCube:512,bakeMapLight:!0,shadowSamples:1,fighterLight:!0,fighterKeepMetal:!0,fadeWhenNeeded:!0,sharpen:!0,antialias:!0},mobileBefore:{pixelRatio:1.275,shadow:`hz30`,ambientOcclusion:!0,bloom:!0,lampLights:!0,movingShadows:!0,mapLight:!1,mapPointLights:!1,cullBuildings:!1,skyCube:0,bakeMapLight:!1,shadowSamples:5,fighterLight:!1,fighterKeepMetal:!1,fadeWhenNeeded:!1,sharpen:!1,antialias:!0}},school:{pc:{pixelRatio:1.5,shadow:`every`,ambientOcclusion:!0,bloom:!1,lampLights:!0,movingShadows:!0,mapLight:!1,mapPointLights:!1,cullBuildings:!1,skyCube:0,bakeMapLight:!1,shadowSamples:5,fighterLight:!1,fighterKeepMetal:!1,fadeWhenNeeded:!1,sharpen:!1,antialias:!0},mobile:{pixelRatio:1.275,shadow:`once`,ambientOcclusion:!1,bloom:!1,lampLights:!1,movingShadows:!1,mapLight:!0,mapPointLights:!1,cullBuildings:!1,skyCube:512,bakeMapLight:!0,shadowSamples:1,fighterLight:!0,fighterKeepMetal:!0,fadeWhenNeeded:!0,sharpen:!0,antialias:!0}},dojo:{pc:{pixelRatio:1.5,shadow:`every`,ambientOcclusion:!0,bloom:!1,lampLights:!0,movingShadows:!0,mapLight:!1,mapPointLights:!1,cullBuildings:!1,skyCube:0,bakeMapLight:!1,shadowSamples:5,fighterLight:!1,fighterKeepMetal:!1,fadeWhenNeeded:!1,sharpen:!1,antialias:!0},mobile:{pixelRatio:1.275,shadow:`once`,ambientOcclusion:!1,bloom:!1,lampLights:!1,movingShadows:!1,mapLight:!0,mapPointLights:!1,cullBuildings:!1,skyCube:512,bakeMapLight:!0,shadowSamples:1,fighterLight:!0,fighterKeepMetal:!0,fadeWhenNeeded:!0,sharpen:!0,antialias:!0}}};function oi(e,t){return ai[e][t?`mobile`:`pc`]}function si(e,t){return t?ai[e].mobileBefore:void 0}var ci={environment:1.25,sun:1.25,probe:[3.8135,1.763,1.6363,.279,.2171,1.0862,1.2137,-.3469,-.6344],pixelPoints:[`05_Mortar_and_recesses`,`03_Pale_arch_and_coping`]},li={mapLightProbe:{value:ci.probe.map(e=>new H(e,e,e))},mapLightSun:{value:ci.sun}};function ui(e){return e.isMeshStandardMaterial===!0&&!e.transparent}function di(e,t,n){Object.assign(e.uniforms,li,t);let r=[n.points===`vertex`?`MAP_LIGHT_POINTS`:``,n.shadowOnce?`MAP_LIGHT_SHADOW_ONCE`:``,n.metalMap?`MAP_LIGHT_METAL_MAP`:``,n.sheen?`MAP_LIGHT_SHEEN`:``,n.baked?`MAP_LIGHT_BAKED\n#define MAP_LIGHT_BAKED_TEXELS ${n.baked.texels}`:``].filter(Boolean).map(e=>`#define ${e}\n`).join(``);e.vertexShader=r+e.vertexShader.replace(`#include <common>`,`#include <common>
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
	#endif`).replace(`#include <lights_fragment_maps>`,``).replace(`#include <lights_fragment_end>`,``).replace(`#include <envmap_fragment>`,``)}var fi=e=>`map-light-v3:${e.points}:${e.shadowOnce?1:5}:${e.metalMap?`metal-map`:`metal`}:${e.sheen?`sheen`:``}:${e.baked?`baked${e.baked.texels}`:``}`,pi=(e,t)=>ci.environment*(e.envMap?e.envMapIntensity:t);function mi(e,t,n,r){let i=new Ae({name:e.name,color:e.color,map:e.map,vertexColors:e.vertexColors,emissive:e.emissive,emissiveIntensity:e.emissiveIntensity,emissiveMap:e.emissiveMap,alphaMap:e.alphaMap,alphaTest:e.alphaTest,side:e.side,fog:e.fog,flatShading:e.flatShading,depthWrite:e.depthWrite,depthTest:e.depthTest}),a={mapLightEnvironment:{value:pi(e,t)},mapLightMetal:{value:e.metalness},...r?{mapLightBaked:{value:r.texture},mapLightBakedWidth:{value:r.width},mapLightBakedVertices:{value:r.vertices}}:{}},o={...n,metalMap:!1,...r?{baked:{texels:r.texels}}:{}};return i.onBeforeCompile=e=>di(e,a,o),i.customProgramCacheKey=()=>fi(o),i.userData.mapLight=!0,r&&(i.userData.baked=!0),i.userData.environment=a.mapLightEnvironment,i.userData.sun=li.mapLightSun,i}function hi(e,t,n){let r=new Ae({name:e.name,map:e.map,vertexColors:e.vertexColors,emissiveMap:e.emissiveMap,alphaMap:e.alphaMap,alphaTest:e.alphaTest,side:e.side,fog:e.fog,flatShading:e.flatShading,transparent:e.transparent,opacity:e.opacity,alphaHash:e.alphaHash,depthWrite:e.depthWrite,depthTest:e.depthTest});r.color=e.color,r.emissive=e.emissive,Object.defineProperty(r,"emissiveIntensity",{configurable:!0,get:()=>e.emissiveIntensity,set:t=>{e.emissiveIntensity=t}});let i=!!(e.map&&e.metalnessMap),a={mapLightEnvironment:{value:gi.environment*(e.envMap?e.envMapIntensity:t)},mapLightMetal:{value:e.metalness},...i?{mapLightMetalMap:{value:e.metalnessMap}}:{},mapLightSun:_i.sun,mapLightSheen:_i.sheen},o={...n,metalMap:i,sheen:!0};return r.onBeforeCompile=e=>di(e,a,o),r.customProgramCacheKey=()=>fi(o),r.userData.fighterLight=!0,r.userData.source=e,r.userData.environment=a.mapLightEnvironment,r.userData.sun=_i.sun,r.userData.sheen=_i.sheen,r}var gi={keepRoles:[`paladin`],keepMetalness:.5,environment:.95,sun:.85,sheen:.03},_i={sun:{value:gi.sun},sheen:{value:gi.sheen}};function vi(e,t){return gi.keepRoles.includes(t)||e.metalness>=gi.keepMetalness&&!e.metalnessMap}function yi(e,t,n){return!n||e.transparent||t<1}function bi(e,t,n){return t?n&&ci.pixelPoints.includes(e.name)?`pixel`:`vertex`:`none`}var xi={width:2048};function Si(e,t){let n={ambient:new r(0,0,0),hemispheres:[],fills:[],points:[]},i=0;return e.updateMatrixWorld(),e.traverseVisible(e=>{let r=e;if(!r.isLight)return;let a=r.color.clone().multiplyScalar(r.intensity);if(r.isAmbientLight)n.ambient.add(a);else if(r.isHemisphereLight){let e=r;n.hemispheres.push({sky:a,ground:e.groundColor.clone().multiplyScalar(e.intensity),direction:new H().setFromMatrixPosition(e.matrixWorld).normalize()})}else if(r.isDirectionalLight){let e=r,o=new H().setFromMatrixPosition(e.target.matrixWorld),s=new H().setFromMatrixPosition(e.matrixWorld).sub(o).normalize();t&&e.castShadow?(n.sun={color:a,direction:s},i++):n.fills.push({color:a,direction:s})}else if(r.isPointLight){let e=r;n.points.push({color:a,position:new H().setFromMatrixPosition(e.matrixWorld),distance:e.distance,decay:e.decay})}}),i>1?void 0:n}var Ci=ci.probe;function wi(e,t,n,r,i,a,o,s,c,l){let u=e.ambient.r,d=e.ambient.g,f=e.ambient.b;for(let t of e.hemispheres){let e=.5*(n*t.direction.x+r*t.direction.y+i*t.direction.z)+.5;u+=t.ground.r+(t.sky.r-t.ground.r)*e,d+=t.ground.g+(t.sky.g-t.ground.g)*e,f+=t.ground.b+(t.sky.b-t.ground.b)*e}for(let t of e.fills){let e=Math.min(1,Math.max(0,n*t.direction.x+r*t.direction.y+i*t.direction.z));u+=t.color.r*e,d+=t.color.g*e,f+=t.color.b*e}if(t.points)for(let t of e.points){let e=t.position.x-a,c=t.position.y-o,l=t.position.z-s,p=Math.hypot(e,c,l);if(p===0)continue;let m=1/Math.max(p**+t.decay,.01);if(t.distance>0){let e=Math.min(1,Math.max(0,1-(p/t.distance)**4));m*=e*e}let h=Math.min(1,Math.max(0,(n*e+r*c+i*l)/p))*m;u+=t.color.r*h,d+=t.color.g*h,f+=t.color.b*h}let p=t.environment*(Ci[0]*.886227+Ci[1]*2*.511664*r+Ci[2]*2*.511664*i+Ci[3]*2*.511664*n+Ci[4]*2*.429043*n*r+Ci[5]*2*.429043*r*i+Ci[6]*(.743125*i*i-.247708)+Ci[7]*2*.429043*n*i+Ci[8]*.429043*(n*n-r*r)),m=1-t.metal;c[l]=u*m+p,c[l+1]=d*m+p,c[l+2]=f*m+p,c[l+3]=e.sun?n*e.sun.direction.x+r*e.sun.direction.y+i*e.sun.direction.z:0}function Ti(e,t,n,r,i=!1,a){let o=e.geometry,s=o.getAttribute(`position`),c=o.getAttribute(`normal`),l=e.isInstancedMesh===!0,u=a??(l?e.instanceMatrix.array:void 0),d=l?a?a.length/16:e.count:1,f=s.count,p=r?2:1,m=new Float32Array(f*d*p*4);e.updateWorldMatrix(!0,!1);let h=new Ee,g=new Ee,_=new fe,v=h.elements,y=_.elements,b=i?-1:1;for(let i=0;i<d;i++){l?(g.fromArray(u,i*16),h.multiplyMatrices(e.matrixWorld,g)):h.copy(e.matrixWorld),_.getNormalMatrix(h);for(let e=0;e<f;e++){let a=s.getX(e),o=s.getY(e),l=s.getZ(e),u=c.getX(e),d=c.getY(e),h=c.getZ(e),g=v[0]*a+v[4]*o+v[8]*l+v[12],_=v[1]*a+v[5]*o+v[9]*l+v[13],x=v[2]*a+v[6]*o+v[10]*l+v[14],S=y[0]*u+y[3]*d+y[6]*h,C=y[1]*u+y[4]*d+y[7]*h,w=y[2]*u+y[5]*d+y[8]*h,T=Math.hypot(S,C,w)||1;S*=b/T,C*=b/T,w*=b/T;let E=(i*f+e)*p*4;wi(t,n,S,C,w,g,_,x,m,E),r&&wi(t,n,-S,-C,-w,g,_,x,m,E+4)}}return{data:m,texels:p,vertices:f,count:d}}function Ei(e,t=xi.width){let n=e.vertices*e.count*e.texels,r=Math.max(1,Math.ceil(n/t)),i=new Float32Array(t*r*4);return i.set(e.data),{data:i,height:r}}function Di(e,t=xi.width){let{data:n,height:r}=Ei(e,t),i=new x(n,t,r,Fe,N);return i.internalFormat=`RGBA16F`,i.minFilter=i.magFilter=A,i.generateMipmaps=!1,i.needsUpdate=!0,i.onUpdate=()=>{i.image.data=null},i}var Oi={margin:2},ki=new u,Ai=new Ee;function ji(e){return ki.setFromProjectionMatrix(Ai.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse))}var Mi=class{mesh;total;spheres;original;shown;constructor(e,t=Oi.margin){this.mesh=e,this.total=e.count,this.original=e.instanceMatrix.array.slice(0,this.total*16),this.shown=[...Array(this.total).keys()],e.geometry.boundingSphere||e.geometry.computeBoundingSphere();let n=e.geometry.boundingSphere,r=new Ee,i=new Ee;e.updateWorldMatrix(!0,!1),this.spheres=this.shown.map(a=>{i.multiplyMatrices(e.matrixWorld,r.fromArray(this.original,a*16));let o=n.clone().applyMatrix4(i);return o.radius+=t,o})}pick(e,t){let n=[];for(let r=0;r<this.total;r++)(!t||t(r))&&(!e||e.intersectsSphere(this.spheres[r]))&&n.push(r);return n}show(e){if(e.length===this.shown.length&&e.every((e,t)=>e===this.shown[t]))return!1;let t=this.mesh.instanceMatrix.array;e.forEach((e,n)=>t.set(this.original.subarray(e*16,e*16+16),n*16)),this.mesh.count=e.length,this.mesh.instanceMatrix.clearUpdateRanges(),this.mesh.instanceMatrix.addUpdateRange(0,e.length*16),this.mesh.instanceMatrix.needsUpdate=!0;let n=this.mesh.geometry.getAttribute(`mapLightInstance`);return n&&(e.forEach((e,t)=>{n.array[t]=e}),n.clearUpdateRanges(),n.addUpdateRange(0,e.length),n.needsUpdate=!0),this.shown=[...e],!0}showAll(){return this.show([...Array(this.total).keys()])}get count(){return this.shown.length}},Ni={height:2.8,base:`#ffc12e`,top:`#ffffff`,sheets:[-.1,.1],groundWidth:1.2,rise:.22,fade:.45,gain:.8},Pi=`
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}`,Fi=`
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
}`;function Ii(e=!1,t=0){let n=Ni;return new ve({vertexShader:Pi,fragmentShader:Fi,uniforms:{uBase:{value:new r(n.base)},uTop:{value:new r(n.top)},uTime:{value:0},uSeed:{value:t},uFade:{value:0},uGain:{value:n.gain},uGround:{value:+!!e}},transparent:!0,depthWrite:!1,side:2,blending:2})}function Li(e,t,n){let r=Ni,i=new V,a=t%17*1.37;for(let t of r.sheets){let n=new B(new ye(e,r.height).translate(0,r.height/2,0).rotateY(Math.PI/2),Ii(!1,a+t*9));n.position.x=t,i.add(n)}let o=new B(new ye(r.groundWidth,e).rotateX(-Math.PI/2),Ii(!0,a));return o.position.y=.03,i.add(o),i.userData.born=n,i}var Ri=e=>{let t=Math.max(0,Math.min(1,e));return t*t*(3-2*t)};function zi(e,t,n){let r=Ni,i=Ge(t),a=Ri((n-e.userData.born)/r.rise),o=Math.max(0,Math.min(1,t.life/r.fade));e.position.set(t.pos.x,0,t.pos.z),e.rotation.y=Math.atan2(-i.z,i.x);for(let t of e.children){let e=t,r=e.material,i=r.uniforms.uGround.value>.5;i||(e.scale.y=Math.max(.001,a)),r.uniforms.uTime.value=n,r.uniforms.uFade.value=i?o*a:o}}var Bi={flare:`#ffffff`,glow:`#fff0c2`,cross:`#fff6d8`,streak:`#ffe39a`,ember:`#ffc44f`,ring:`#fff0c4`,streaks:9,embers:14},Vi=e=>{let t=Math.min(1,Math.max(0,e));return t*t*(3-2*t)};function Hi(e){let t=Math.abs(Math.floor(e))%233280+1;return()=>(t=(t*9301+49297)%233280,t/233280)}function Ui(e){return new z({color:e,transparent:!0,opacity:0,depthWrite:!1,depthTest:!1,side:2})}function Wi(e){let t=new V,n=Hi(e);t.name=`clash-spark`;let r=new Me(1,4),a=new Me(1,28),o=new i(.9,1,48),s=(e,n,r,i)=>{let a=new B(e,Ui(n));a.renderOrder=r,a.userData.clash=i,t.add(a)};s(o,Bi.ring,20,{kind:`ring`,angle:0,length:1,speed:1});let c=(n()-.5)*.5;for(let e=0;e<Bi.streaks;e++)s(r,Bi.streak,21,{kind:`streak`,angle:(e+n()*.8)/Bi.streaks*Math.PI*2,length:.45+n()*.6,speed:1});for(let e=0;e<Bi.embers;e++)s(r,Bi.ember,22,{kind:`ember`,angle:n()*Math.PI*2,length:1,speed:.75+n()*.7});return s(a,Bi.glow,22,{kind:`glow`,angle:0,length:1,speed:1}),s(a,Bi.flare,23,{kind:`flare`,angle:0,length:1,speed:1}),s(r,Bi.cross,24,{kind:`cross`,angle:c,length:1.3,speed:1}),s(r,Bi.cross,24,{kind:`cross`,angle:c+Math.PI/2,length:.95,speed:1}),t}function Gi(e,t,n,r,i=0){e.rotation.z=t-Math.PI/2,e.scale.set(r,n/2,1),e.position.set(Math.cos(t)*(i+n/2),Math.sin(t)*(i+n/2),0)}function Ki(e,t,n,r){let i=Math.min(1,Math.max(0,t)),a=n;e.quaternion.copy(r.quaternion);let o=.7+.3*Vi(i/.25),s=1-.65*i;for(let t of e.children){let e=t,n=e.userData.clash;if(n.kind===`flare`)e.scale.setScalar(a*.26*(1-.5*Vi(i/.35))),e.material.opacity=1-Vi(i/.35);else if(n.kind===`glow`)e.scale.setScalar(a*.55*(1-.4*Vi(i/.5))),e.material.opacity=.5*(1-Vi(i/.5));else if(n.kind===`cross`)e.rotation.z=n.angle,e.position.set(0,0,0),e.scale.set(a*n.length*(1-.35*i),a*.055*s,1),e.material.opacity=1-Vi(i/.65);else if(n.kind===`streak`)Gi(e,n.angle,a*n.length*o,a*.035*s,a*.08),e.material.opacity=(1-i)**1.3;else if(n.kind===`ember`){let t=a*1.2*n.speed*(1-(1-i)*(1-i)),r=a*.6*i*i,o=Math.cos(n.angle)*t,s=Math.sin(n.angle)*t-r;e.rotation.z=n.angle-Math.PI/2,e.position.set(o,s,0),e.scale.set(a*.022*(1-.5*i),a*.09*(1-.4*i),1),e.material.opacity=i<.1?i/.1:1-(i-.1)/.9}else e.scale.setScalar(a*(.3+1.05*Vi(i/.4))),e.material.opacity=.45*(1-Vi(i/.4))}}var qi={meditation:{color:`#a86cff`,light:`#dcc2ff`,circle:{radius:1.35,spin:.32,lift:.05,strength:1},sparks:{count:30,radius:[.42,.9],height:[.08,2.2],life:[1.7,2.6],size:[.11,.2],twinkle:7,glow:2.1},fadeIn:.3,fadeOut:.3},stance:{samurai:{color:`#dfe6ff`,light:`#ffffff`},swordsman:{color:`#ff3326`,light:`#ffae96`},ninja:{color:`#8ccc80`,light:`#b4f0a6`,shadow:!0,rim:{color:`#4f2790`,light:`#8a5fd4`,strength:.75}},paladin:{color:`#ffc31a`,light:`#fff09a`},mage:{color:`#a86cff`,light:`#dcc2ff`},healer:{color:`#ff5aad`,light:`#ffc4e1`},gunner:{color:`#9c5a24`,light:`#e0a868`}},heal:{color:`#5cff86`,light:`#c8ffd6`,pluses:{count:10,radius:[.34,.72],height:[.3,2.2],life:[.9,1.3],size:[.15,.21],width:.045,glow:1.9},sparks:{count:12,radius:[.3,.75],height:[.2,2],life:[.8,1.2],size:[.08,.13],twinkle:9,glow:1.9},fadeIn:.12,fadeOut:.35}};function Ji(e=!1){return new z({vertexColors:!0,transparent:!0,depthWrite:!1,side:2,blending:e?3:2,premultipliedAlpha:e})}var Yi=(e,t)=>{let n=Math.sin(e*127.1+t*311.7)*43758.5453;return n-Math.floor(n)},Xi=(e,t)=>e[0]+(e[1]-e[0])*t;function Zi(e,t,n,r,i,a,o,s,c){let l=r-t,u=i-n,d=Math.hypot(l,u)||1,f=-u/d*a,p=l/d*a,m=e.position.length/3;for(let[a,l,u]of[[t-f,n-p,0],[t,n,o],[t+f,n+p,0],[r-f,i-p,0],[r,i,o],[r+f,i+p,0]])e.position.push(a,s,l),e.colour.push(c.r*u,c.g*u,c.b*u);e.index.push(m,m+3,m+1,m+1,m+3,m+4,m+1,m+4,m+2,m+2,m+4,m+5)}function Qi(e,t,n,r,i,a,o=72){let s=e.position.length/3;for(let s=0;s<=o;s++){let c=s/o*Math.PI*2,l=Math.cos(c),u=Math.sin(c);for(let[o,s]of[[-1,0],[0,r],[1,0]])e.position.push(l*(t+o*n),i,u*(t+o*n)),e.colour.push(a.r*s,a.g*s,a.b*s)}for(let t=0;t<o;t++)for(let n=0;n<2;n++){let r=s+t*3+n,i=r+3;e.index.push(r,i,r+1,r+1,i,i+1)}}function $i(e,t,n,r,i,a=36){let o=e.position.length/3;e.position.push(0,r,0),e.colour.push(i.r*n,i.g*n,i.b*n);for(let n=0;n<=a;n++){let i=n/a*Math.PI*2;e.position.push(Math.cos(i)*t,r,Math.sin(i)*t),e.colour.push(0,0,0)}for(let t=0;t<a;t++)e.index.push(o,o+1+t,o+2+t)}function ea(e){let t=new U;return t.setAttribute(`position`,new f(e.position,3)),t.setAttribute(`color`,new f(e.colour,3)),t.setIndex(e.index),t}function ta(e){let t={position:[],colour:[],index:[]},n=new r(e.color),i=new r(e.light);$i(t,1,.1,0,n),Qi(t,.97,.028,1,0,i),Qi(t,.86,.016,.85,0,n);for(let e=0;e<18;e++){let n=e/18*Math.PI*2,r=Math.cos(n),a=Math.sin(n),o=.915;if(e%2)Zi(t,r*.885,a*.885,r*.9450000000000001,a*.9450000000000001,.012,.9,0,i);else{let e=.022,n=-a,s=r;Zi(t,r*.893,a*.893,r*o+n*e,a*o+s*e,.008,.8,0,i),Zi(t,r*o+n*e,a*o+s*e,r*.937,a*.937,.008,.8,0,i),Zi(t,r*.937,a*.937,r*o-n*e,a*o-s*e,.008,.8,0,i),Zi(t,r*o-n*e,a*o-s*e,r*.893,a*.893,.008,.8,0,i)}}Qi(t,.6,.016,.85,0,n);for(let e of[0,Math.PI/3])for(let r=0;r<3;r++){let i=e+r/3*Math.PI*2+Math.PI/2,a=i+Math.PI*2/3;Zi(t,Math.cos(i)*.6,Math.sin(i)*.6,Math.cos(a)*.6,Math.sin(a)*.6,.014,.75,0,n)}return Qi(t,.25,.012,.7,0,i,48),$i(t,.16,.45,0,i,24),ea(t)}var na=9;function ra(e,t){for(let n=0;n<4;n++){let r=t+1+n*2,i=t+2+n*2,a=t+1+(n+1)%4*2;e.push(t,r,i,t,i,a)}}var ia=12;function aa(e,t){for(let n of[0,6]){let r=t+n;e.push(r,r+3,r+1,r+1,r+3,r+4,r+1,r+4,r+2,r+2,r+4,r+5)}}function oa(e,t,n=!1){let r=e*na+t*ia,i=[];for(let t=0;t<e;t++)ra(i,t*na);for(let n=0;n<t;n++)aa(i,e*na+n*ia);let a=new U;a.setAttribute(`position`,new F(new Float32Array(r*3),3)),a.setAttribute(`color`,new F(new Float32Array(r*3),3)),a.setIndex(i),a.boundingSphere=new b(new H(0,1.15,0),1.9);let o=new B(a,Ji(n));return o.renderOrder=7,{mesh:o,stars:e,pluses:t}}var sa=new H,ca=new H,la=new H,ua=new H,da=new r,fa=new Map,pa=e=>fa.get(e)??fa.set(e,new r(e)).get(e);function ma(e,t,n,r,i,a){e.setXYZ(n,r.x,r.y,r.z),t.setXYZ(n,a.r,a.g,a.b);for(let o=0;o<4;o++){let s=o*Math.PI/2,c=Math.cos(s),l=Math.sin(s);la.copy(r).addScaledVector(sa,c*i).addScaledVector(ca,l*i),e.setXYZ(n+1+o*2,la.x,la.y,la.z),t.setXYZ(n+1+o*2,0,0,0);let u=s+Math.PI/4,d=i*.2;la.copy(r).addScaledVector(sa,Math.cos(u)*d).addScaledVector(ca,Math.sin(u)*d),e.setXYZ(n+2+o*2,la.x,la.y,la.z),t.setXYZ(n+2+o*2,a.r*.25,a.g*.25,a.b*.25)}}function ha(e,t,n,r,i,a,o){for(let[s,c,l]of[[0,sa,ca],[6,ca,sa]]){let u=0;for(let d of[-1,1])for(let f of[-1,0,1]){la.copy(r).addScaledVector(c,d*i).addScaledVector(l,f*a*(f?1.6:0));let p=+!f;e.setXYZ(n+s+u,la.x,la.y,la.z),t.setXYZ(n+s+u,o.r*p,o.g*p,o.b*p),u++}}}function ga(e,t,n,r,i,a){let o=e.mesh.geometry.getAttribute(`position`),s=e.mesh.geometry.getAttribute(`color`);sa.set(1,0,0).applyQuaternion(i.quaternion),ca.set(0,1,0).applyQuaternion(i.quaternion);let c=pa(t.color),l=pa(t.light),u=(e,t,n)=>{let i=((r/Xi(t.life,Yi(e,n+1))+Yi(e,n+2))%1+1)%1,a=Yi(e,n+3)*Math.PI*2+i*.9,o=Xi(t.radius,Yi(e,n+4));return ua.set(Math.cos(a)*o,Xi(t.height,i),Math.sin(a)*o),Math.sin(Math.PI*i)**1.2};for(let i=0;i<e.stars;i++){let e=u(i+a*97,t.sparks,0),d=.5+.5*Math.sin(r*t.sparks.twinkle+Yi(i,9)*20)**2;da.copy(c).lerp(l,Yi(i,7)).multiplyScalar(n*e*d*t.sparks.glow),ma(o,s,i*na,ua,Xi(t.sparks.size,Yi(i,5))*(.8+.4*d),da)}let d=t.pluses;for(let t=0;d&&t<e.pluses;t++){let r=u(t+a*53,d,20);da.copy(c).lerp(l,Yi(t,27)*.5).multiplyScalar(n*r*d.glow),ha(o,s,e.stars*na+t*ia,ua,Xi(d.size,Yi(t,25)),d.width,da)}o.needsUpdate=!0,s.needsUpdate=!0}function _a(e=qi.stance.samurai){let t=new V;t.name=`meditation-aura`,t.userData.spec={...qi.meditation,color:e.color,light:e.light};let n=new B(ta(e),Ji(e.shadow));if(n.scale.setScalar(qi.meditation.circle.radius),n.position.y=qi.meditation.circle.lift,n.renderOrder=6,t.add(n,oa(qi.meditation.sparks.count,0,e.shadow).mesh),e.rim){let n=new B(ta(e.rim),Ji());n.scale.setScalar(qi.meditation.circle.radius),n.position.y=qi.meditation.circle.lift+.002,n.renderOrder=6,n.userData.strength=e.rim.strength,t.add(n)}return t.visible=!1,t}function va(e,t,n,r,i){if(e.visible=t>.005,!e.visible)return;let[a,o,s]=e.children;a.rotation.y=n*qi.meditation.circle.spin,a.scale.setScalar(qi.meditation.circle.radius*(.82+.18*t));let c=qi.meditation.circle.strength*t*(.86+.14*Math.sin(n*2.2));a.material.color.setScalar(c),s&&(s.rotation.y=a.rotation.y,s.scale.copy(a.scale),s.material.color.setScalar(c*s.userData.strength)),ga({mesh:o,stars:qi.meditation.sparks.count,pluses:0},e.userData.spec??qi.meditation,t,n,r,i)}function ya(){let e=new V;return e.name=`heal-aura`,e.add(oa(qi.heal.sparks.count,qi.heal.pluses.count).mesh),e.visible=!1,e}function ba(e,t,n,r,i){if(e.visible=t>.005,!e.visible)return;let a=e.children[0];ga({mesh:a,stars:qi.heal.sparks.count,pluses:qi.heal.pluses.count},qi.heal,t,n,r,i)}var $={emit:.6,leash:1.2,facing:.5,release:.15,rate:90,mobile:.7,ahead:.12,fallback:.45,height:.9,puff:{size:[.3,1.5],grow:.55,alpha:.42,young:.9,spread:.35,pull:.1,rise:.55,pace:[.94,1],buoy:1.5,stretch:.9},cool:.72,coolTime:1.25,burn:.32,drag:.06,splash:{puffs:14,embers:14,smoke:5,speed:[1.5,4.5],stop:.26},ember:{rate:32,life:[.3,.75],gravity:6,size:[.035,.06],spread:2.2},smoke:{after:.3,chance:.6,size:[.45,1.6],life:[.8,1.25],rise:1,alpha:.4},flare:{size:.55,alpha:.9},ignite:{puffs:7,size:[.25,.75],life:.2,speed:3},glow:{scale:2.8,min:1.6,alpha:.9,y:.08},cover:.85,max:640};function xa(e){let t=e*2654435761+2654435769>>>0;return()=>{t=t+1831565813>>>0;let e=t;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}}var Sa=(e,t)=>t[0]+(t[1]-t[0])*e(),Ca=e=>(e()+e()+e()-1.5)/1.5,wa=e=>{let t=Math.min(1,Math.max(0,e));return t*t*(3-2*t)},Ta=(e,t,n,r)=>(e.size=t,e.alpha=n,e.heat=r,e);function Ea(e,t={size:0,alpha:0,heat:0}){let n=e.age;if(e.kind===0){let r=e.life>e.fade?1-Math.min(1,Math.max(0,(n-e.fade)/(e.life-e.fade))):1,i=e.stream?1+$.puff.young*(1-wa(n/.15)):1;return Ta(t,e.s0+(e.s1-e.s0)*wa(n/$.puff.grow),Math.min(1,e.alpha*i)*Math.min(1,n/.04+.25)*r,e.heat*(1-$.cool*wa(n/$.coolTime))*(1-.45*(1-r))*(1+.3*(i-1)/$.puff.young))}if(e.kind===1)return Ta(t,e.s0,e.alpha*(1-n/e.life),e.heat*(1-.5*n/e.life));if(e.kind===2)return Ta(t,e.s0,e.alpha,1);let r=n/e.life;return Ta(t,e.s0+(e.s1-e.s0)*wa(r),e.alpha*wa(r/.15)*(1-wa((r-.35)/.65)),e.heat*Math.max(0,1-n/.35))}var Da=class{particles=[];streams=new Map;starts=[];density;constructor(e=1){this.density=e}track(e,t){let n=new Set;for(let t of e){if(t.kind!==`fire`)continue;let e=Math.hypot(t.velocity.x,t.velocity.z),r=this.streams.get(t.id);if(r){let e=(t.pos.x-r.ox)*r.dx+(t.pos.z-r.oz)*r.dz;e>r.head&&(r.advance+=e-r.head,r.head=e),r.life=t.life}else{if(e<1e-6)continue;let n=t.velocity.x/e,i=t.velocity.z/e,a=Math.max(0,xt.thrownLife-t.life);r={id:t.id,caster:t.owner,ox:t.pos.x-n*e*a,oz:t.pos.z-i*e*a,dx:n,dz:i,nx:-i,nz:n,speed:e,y:$.height,head:e*a,advance:0,life:t.life,time:a,dt:0,emitting:!0,started:!1,carry:0,emberCarry:0,alive:!0,hold:1,rng:xa(t.id)},this.streams.set(t.id,r)}n.add(t.id)}for(let e of this.streams.values())e.alive&&!n.has(e.id)&&this.finish(e,t)}hold(e){let t=0;for(let n of this.streams.values())n.caster===e&&(t=Math.max(t,n.hold));return t}update(e,t){if(!(e>0))return;for(let n of this.streams.values())n.dt=n.alive?Math.min(n.advance/n.speed,e*2):e,n.advance=0,n.time+=n.dt,n.emitting&&this.emit(n,t(n.caster)),n.hold=n.emitting?1:Math.max(0,n.hold-e/$.release);this.step(e);let n=new Set;for(let e of this.particles)e.stream&&n.add(e.stream);for(let[e,t]of this.streams)!t.alive&&t.hold<=0&&!n.has(t)&&this.streams.delete(e)}add(e){this.particles.length<$.max&&this.particles.push(e)}puff(e,t,n,r,i){let a=e.rng,o=$.puff;this.add({kind:0,x:t,y:n,z:r,vx:0,vy:0,vz:0,age:i,life:1/0,fade:1/0,s0:o.size[0]*(.8+.4*a()),s1:o.size[1]*(.8+.4*a()),heat:.92+.08*a(),alpha:o.alpha*(.75+.5*a()),seed:a(),rot:a()*Math.PI*2,spin:(a()-.5)*4,stream:e,lane:Ca(a),lift:Ca(a),pace:Sa(a,o.pace),smoked:!1})}free(e,t,n,r,i,a,o,s,c,l,u,d,f){this.add({kind:e,x:n,y:r,z:i,vx:a,vy:o,vz:s,age:0,life:c,fade:e===0?0:c,s0:l,s1:u,heat:d,alpha:f,seed:t(),rot:t()*Math.PI*2,spin:(t()-.5)*(e===3?1.2:5),lane:0,lift:0,pace:0,smoked:!0})}smoke(e,t,n,r,i=.6){let a=$.smoke;this.free(3,e,t,n,r,(e()-.5)*.6,a.rise*.5,(e()-.5)*.6,Sa(e,a.life),a.size[0],a.size[1]*(.8+.4*e()),i,a.alpha*(.7+.6*e()))}ember(e,t,n,r,i,a){let o=e.rng,s=$.ember,c=(o()-.5)*2*a;this.free(1,o,t,n,r,e.dx*i+e.nx*c,(o()-.25)*a,e.dz*i+e.nz*c,Sa(o,s.life),Sa(o,s.size),0,.85+.15*o(),1)}emit(e,t){let n=e.rng,r=t?t.x+e.dx*$.ahead:e.ox-e.dx*$.fallback,i=t?t.z+e.dz*$.ahead:e.oz-e.dz*$.fallback,a=t?t.y:$.height;if(!e.started){e.started=!0,e.y=a,this.starts.push({caster:e.caster,x:r,z:i}),this.starts.length>16&&this.starts.shift();let t=(r-e.ox)*e.dx+(i-e.oz)*e.dz,o=(r-e.ox)*e.nx+(i-e.oz)*e.nz;for(let n=e.head;n>t;n-=.18){let r=(n-t)/Math.max(1e-6,e.head-t);this.puff(e,e.ox+e.dx*n+e.nx*o*(1-r),a,e.oz+e.dz*n+e.nz*o*(1-r),(n-t)/e.speed)}let s=$.ignite;for(let t=0;t<s.puffs;t++){let t=n()*Math.PI*2,o=s.speed*(.4+.6*n());this.free(0,n,r,a,i,e.dx*o+e.nx*Math.cos(t)*o*.5,Math.sin(t)*o*.5,e.dz*o+e.nz*Math.cos(t)*o*.5,s.life*(.7+.6*n()),s.size[0],s.size[1],1,$.puff.alpha)}}if(t){let n=Math.abs((r-e.ox)*e.nx+(i-e.oz)*e.nz),a=t.fx*e.dx+t.fz*e.dz;if(n>$.leash||a<$.facing){e.emitting=!1;return}}if(e.time-e.dt>=$.emit){e.emitting=!1;return}let o=Math.max(0,Math.min(e.dt,$.emit-(e.time-e.dt)));e.carry+=$.rate*this.density*o;let s=Math.floor(e.carry);e.carry-=s;for(let t=0;t<s;t++){let c=(t+n())/s*o,l=e.speed*c;this.puff(e,r+e.dx*l,a,i+e.dz*l,c)}for(e.emberCarry+=$.ember.rate*this.density*o;e.emberCarry>=1;e.emberCarry--)this.ember(e,r,a,i,e.speed*(.55+.4*n()),$.ember.spread);e.dt>0&&this.free(2,n,r,a,i,0,0,0,Math.max(e.dt,1/30)*1.01,$.flare.size*(.85+.3*n()),0,1,$.flare.alpha)}finish(e,t){if(e.alive=!1,e.emitting=!1,!(t&&e.life>.1)){for(let t of this.particles)t.stream===e&&(t.fade=t.age,t.life=t.age+$.burn*(.6+.4*e.rng()));return}e.end=e.head+e.speed/60;let n=e.rng,r=$.splash,i=e.ox+e.dx*e.end,a=e.oz+e.dz*e.end,o=e.y+.1;for(let t=0;t<r.puffs;t++){let t=n()*Math.PI*2,s=Sa(n,r.speed);this.free(0,n,i,o,a,e.nx*Math.cos(t)*s-e.dx*n()*2,Math.abs(Math.sin(t))*s*.8+.4,e.nz*Math.cos(t)*s-e.dz*n()*2,.3+.25*n(),.35,1.15*(.8+.4*n()),.85+.15*n(),$.puff.alpha)}for(let t=0;t<r.embers;t++){let t=n()*Math.PI*2,s=Sa(n,r.speed)*1.4;this.free(1,n,i,o,a,e.nx*Math.cos(t)*s-e.dx*n()*3,Math.abs(Math.sin(t))*s+1,e.nz*Math.cos(t)*s-e.dz*n()*3,Sa(n,$.ember.life),Sa(n,$.ember.size),0,.9,1)}for(let e=0;e<r.smoke;e++)this.smoke(n,i+(n()-.5)*.6,o+.2,a+(n()-.5)*.6,.8)}step(e){let t=this.particles;for(let n=t.length-1;n>=0;n--){let r=t[n],i=r.stream,a=i&&i.alive?i.dt:e;if(r.age+=a,r.age>=r.life){t[n]=t[t.length-1],t.pop();continue}i?this.ride(r,i,a):this.fly(r,a)}}ride(e,t,n){let r=(e.x-t.ox)*t.dx+(e.z-t.oz)*t.dz,i=(e.x-t.ox)*t.nx+(e.z-t.oz)*t.nz;t.alive?r=Math.min(r+t.speed*e.pace*n,t.head):t.end===void 0?(e.pace*=Math.exp(-n/$.drag),r+=t.speed*e.pace*n):(r+=t.speed*e.pace*n,r>=t.end&&(r=t.end,this.scatter(e,t)));let a=$.puff,o=a.spread*Math.min(e.age,a.grow)+.02,s=1-Math.exp(-n/a.pull);i+=(e.lane*o-i)*s,e.y+=(t.y+e.lift*o*.6+a.rise*e.age*e.age-e.y)*s,e.x=t.ox+t.dx*r+t.nx*i,e.z=t.oz+t.dz*r+t.nz*i,!e.smoked&&e.age>$.smoke.after&&(e.smoked=!0,t.rng()<$.smoke.chance&&this.smoke(t.rng,e.x,e.y+.15,e.z))}scatter(e,t){let n=t.rng,r=n()*Math.PI*2,i=1+2.5*n();e.stream=void 0,e.vx=t.nx*Math.cos(r)*i-t.dx*n()*1.5,e.vz=t.nz*Math.cos(r)*i-t.dz*n()*1.5,e.vy=Math.abs(Math.sin(r))*i*.7+.5,e.fade=e.age,e.life=e.age+$.splash.stop*(.6+.4*n()),e.s1*=1.3}fly(e,t){if(e.kind===2)return;e.kind===1?e.vy-=$.ember.gravity*t:e.kind===3?e.vy+=($.smoke.rise-e.vy)*(1-Math.exp(-t/.4)):e.vy+=$.puff.buoy*t;let n=Math.exp(-t*(e.kind===1?.6:e.kind===3?1.6:3.5));e.vx*=n,e.vz*=n,e.x+=e.vx*t,e.y+=e.vy*t,e.z+=e.vz*t,e.kind===1&&e.y<.02&&(e.y=.02,e.vy*=-.3,e.vx*=.5,e.vz*=.5)}};function Oa(e=64){let t=xa(7),n=new Uint8Array(e*e*4),r=new Float32Array(e*e);for(let[n,i]of[[4,.5],[8,.25],[16,.15],[32,.1]]){let a=Float32Array.from({length:n*n},()=>t()),o=(e,t)=>a[(t+n)%n*n+(e+n)%n];for(let t=0;t<e;t++)for(let a=0;a<e;a++){let s=a/e*n,c=t/e*n,l=Math.floor(s),u=Math.floor(c),d=wa(s-l),f=wa(c-u),p=o(l,u)+(o(l+1,u)-o(l,u))*d,m=o(l,u+1)+(o(l+1,u+1)-o(l,u+1))*d;r[t*e+a]+=(p+(m-p)*f)*i}}let i=1/0,a=-1/0;for(let e of r)i=Math.min(i,e),a=Math.max(a,e);for(let t=0;t<e*e;t++){let e=Math.round((r[t]-i)/(a-i)*255);n.set([e,e,e,255],t*4)}let o=new x(n,e,e,Fe);return o.wrapS=o.wrapT=Ne,o.magFilter=o.minFilter=Te,o.needsUpdate=!0,o}var ka=`
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
}`,Aa=`
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
}`,ja=`
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
}`,Ma=`
varying vec2 vUv;
varying vec4 vA;
void main() {
  float r = length(vUv);
  if (r > 1.0) discard;
  // 床の色 × (1 ＋ 明かり)（材質の blendSrc＝床の色）。明るい砂は橙に、暗い床は少しだけ照らされる。
  gl_FragColor = vec4(vec3(1.0, 0.45, 0.12) * (0.6 + 0.4 * vA.y) * exp(-r * r * 3.0) * (1.0 - smoothstep(0.8, 1.0, r)) * vA.z, 1.0);
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
}`,Na=class{mesh;at;a;b;c;count=0;max;constructor(e,t,n){this.max=e;let r=new ee;r.setIndex([0,1,2,0,2,3]),r.setAttribute(`position`,new F(new Float32Array([-.5,-.5,0,.5,-.5,0,.5,.5,0,-.5,.5,0]),3));let i=t=>new ce(new Float32Array(e*t),t).setUsage(y);r.setAttribute(`iPos`,this.at=i(3)),r.setAttribute(`iA`,this.a=i(4)),r.setAttribute(`iB`,this.b=i(2)),r.setAttribute(`iC`,this.c=i(4)),r.instanceCount=0,this.mesh=new B(r,t),this.mesh.frustumCulled=!1,this.mesh.renderOrder=n,this.mesh.matrixAutoUpdate=!1,this.mesh.visible=!1}put(e,t,n,r,i,a,o,s,c,l=0,u=0,d=0,f=0){if(this.count>=this.max)return;let p=this.count++,m=this.at.array,h=this.a.array,g=this.b.array,_=this.c.array;m[p*3]=e,m[p*3+1]=t,m[p*3+2]=n,h[p*4]=r,h[p*4+1]=i,h[p*4+2]=a,h[p*4+3]=o,g[p*2]=s,g[p*2+1]=c,_[p*4]=l,_[p*4+1]=u,_[p*4+2]=d,_[p*4+3]=f}commit(){this.mesh.geometry.instanceCount=this.count,this.mesh.visible=this.count>0;for(let e of[this.at,this.a,this.b,this.c])e.clearUpdateRanges(),e.addUpdateRange(0,Math.max(1,this.count)*e.itemSize),e.needsUpdate=!0}},Pa=class{root=new V;fire;smoke;glow;timed;look={size:0,alpha:0,heat:0};constructor(){let e=Oa(),t=(t,n,r=!1)=>new ve({uniforms:{uNoise:{value:e},uTime:{value:0},uCover:{value:$.cover}},vertexShader:ka,fragmentShader:t,defines:r?{FLAT:``}:{},transparent:!0,depthWrite:!1,blending:n}),n=t(Aa,5),r=t(ja,1),i=t(Ma,5,!0);n.blendSrc=201,n.blendDst=205,i.blendSrc=208,i.blendDst=201,this.timed=[n,r],this.smoke=new Na($.max/2,r,30),this.glow=new Na($.max/2,i,31),this.fire=new Na($.max,n,32),this.root.name=`flame-vfx`,this.root.matrixAutoUpdate=!1,this.root.add(this.smoke.mesh,this.glow.mesh,this.fire.mesh)}warmup(){return[this.smoke,this.glow,this.fire].map(e=>{let t=new B(e.mesh.geometry,e.mesh.material);return t.frustumCulled=!1,t})}write(e,t){for(let e of this.timed)e.uniforms.uTime.value=t;this.fire.count=this.smoke.count=this.glow.count=0;let n=$.glow,r=this.look;for(let t of e.particles){let{size:e,alpha:i,heat:a}=Ea(t,r);if(i<=.002)continue;let o=t.rot+t.spin*t.age;if(t.kind===3){this.smoke.put(t.x,t.y,t.z,e,a,i,t.seed,o,3);continue}let s=t.stream,c=Math.hypot(t.vx,t.vy,t.vz);s?this.fire.put(t.x,t.y,t.z,e,a,i,t.seed,o,0,s.dx,0,s.dz,$.puff.stretch):c>.01?this.fire.put(t.x,t.y,t.z,e,a,i,t.seed,o,t.kind,t.vx/c,t.vy/c,t.vz/c,t.kind===1?Math.min(3,c*.35):Math.min(.8,c*.12)):this.fire.put(t.x,t.y,t.z,e,a,i,t.seed,o,t.kind),(t.kind===2||t.kind===0&&t.seed<.5)&&this.glow.put(t.x,n.y,t.z,Math.max(n.min,e*n.scale),a,i*n.alpha*Math.min(1,a*1.4),0,0,0)}this.fire.commit(),this.smoke.commit(),this.glow.commit()}},Fa={ring:`#ffd75e`,edge:`#ffffff`,floor:`#fff1b8`,wall:`#ffe28a`,flash:`#ffffff`,glow:`#fff0c2`,ground:`#fff6d8`,stars:[`#fff3c4`,`#ffd34d`,`#ffb3d9`,`#bfe8ff`],ringWidth:.2,edgeWidth:.035,floorOpacity:.2,wallHeight:[1.8,.6],wallBands:[{from:0,to:.45,opacity:.42},{from:.45,to:.75,opacity:.26},{from:.75,to:1,opacity:.12}],wallFrom:[1.2,2.4],burst:{core:.42,glow:.95,time:.12,height:.35},spikes:{count:8,length:1.6,width:.07,time:.2},groundRadius:1.8,starCount:14,starSize:.34,starRise:2.2},Ia=e=>{let t=Math.min(1,Math.max(0,e));return t*t*(3-2*t)};function La(e){let t=Math.abs(Math.floor(e))%233280+1;return()=>(t=(t*9301+49297)%233280,t/233280)}function Ra(e,t=!0){return new z({color:e,transparent:!0,opacity:0,depthWrite:!1,depthTest:t,side:2})}function za(){let e=new S;for(let t=0;t<10;t++){let n=t%2?.45:1,r=Math.PI/2+t*Math.PI/5;t?e.lineTo(Math.cos(r)*n,Math.sin(r)*n):e.moveTo(Math.cos(r)*n,Math.sin(r)*n)}return new w(e)}function Ba(e){let t=new V,n=La(e),r=Fa;t.name=`bomber-wave`;let a=(e,n,r,i,a=!0,o=t)=>{let s=new B(e,Ra(n,a));s.renderOrder=r,s.userData.bomber={band:0,angle:0,speed:1,lift:0,spin:0,...i},o.add(s)},o=new Me(1,64).rotateX(-Math.PI/2),s=new Me(1,28),c=new Me(1,4);a(o,r.floor,10,{kind:`floor`}),a(o,r.ground,11,{kind:`ground`}),a(new i(1-r.ringWidth,1,96).rotateX(-Math.PI/2),r.ring,12,{kind:`ring`}),a(new i(1-r.edgeWidth,1,96).rotateX(-Math.PI/2),r.edge,13,{kind:`edge`});let l=new be(1,1,1,64,1,!0).translate(0,.5,0);r.wallBands.forEach((e,t)=>a(l,r.wall,14,{kind:`wall`,band:t}));let u=za();for(let e=0;e<r.starCount;e++)a(u,r.stars[e%r.stars.length],15,{kind:`star`,angle:(e+n()*.7)/r.starCount*Math.PI*2,speed:.35+n()*.45,lift:r.starRise*(.55+.6*n()),spin:(n()-.5)*16});let d=new V;d.name=`bomber-burst`,t.add(d),a(s,r.glow,22,{kind:`glow`},!0,d);for(let e=0;e<r.spikes.count;e++)a(c,r.flash,23,{kind:`spike`,angle:(e+.5*n())/r.spikes.count*Math.PI*2,speed:.7+.5*n()},!0,d);return a(s,r.flash,24,{kind:`flash`},!0,d),t}function Va(e,t,n,r,i,a,o){let s=Fa,c=a/nt.waveSpeed,l=Math.max(.3,Math.min(a,nt.waveSpeed*r)),u=1-Ia((r-c)/Math.max(.05,i-c)),d=Math.min(1,r/Math.max(.05,i)),f=l/a,p=s.wallHeight[0]+(s.wallHeight[1]-s.wallHeight[0])*f;e.position.set(t,0,n);let m=Ia((l-s.wallFrom[0])/(s.wallFrom[1]-s.wallFrom[0]));for(let t of e.children){if(t.name===`bomber-burst`){Ha(t,r,o);continue}let e=t,n=e.userData.bomber;if(n.kind===`floor`)e.position.y=.05,e.scale.setScalar(l*(1-s.ringWidth*.5)),e.material.opacity=s.floorOpacity*u;else if(n.kind===`ground`)e.position.y=.06,e.scale.setScalar(s.groundRadius*(.55+.45*Ia(r/s.burst.time))),e.material.opacity=.9*(1-Ia(r/(s.burst.time*2)));else if(n.kind===`ring`||n.kind===`edge`)e.position.y=n.kind===`ring`?.07:.08,e.scale.setScalar(l),e.material.opacity=(n.kind===`ring`?.95:1)*(1-.25*f)*u;else if(n.kind===`wall`){let t=s.wallBands[n.band];e.position.y=t.from*p,e.scale.set(l,(t.to-t.from)*p,l),e.material.opacity=t.opacity*(1-.35*f)*u*m}else if(n.kind===`star`){let t=1-(1-d)*(1-d),i=a*n.speed*t;e.position.set(Math.cos(n.angle)*i,.35+n.lift*Math.sin(Math.PI*Math.min(1,d*1.15)),Math.sin(n.angle)*i),e.quaternion.copy(o.quaternion),e.rotateZ(n.spin*r),e.scale.setScalar(s.starSize*(1-.35*d)*Ia(r/.04)),e.material.opacity=1-Ia((d-.55)/.45)}}}function Ha(e,t,n){let r=Fa;e.position.set(0,r.burst.height,0),e.quaternion.copy(n.quaternion);for(let n of e.children){let e=n,i=e.userData.bomber;if(i.kind===`spike`){let n=Math.min(1,t/r.spikes.time),a=r.spikes.length*i.speed*(.45+.55*Ia(n/.5)),o=r.burst.core*.6;e.rotation.z=i.angle-Math.PI/2,e.scale.set(r.spikes.width*(1-.6*n),a/2,1),e.position.set(Math.cos(i.angle)*(o+a/2),Math.sin(i.angle)*(o+a/2),0),e.material.opacity=1-Ia(n)}else{let n=i.kind===`glow`,a=r.burst.time*(n?1.4:1);e.position.set(0,0,0),e.scale.setScalar((n?r.burst.glow:r.burst.core)*(1-.35*Ia(t/a))),e.material.opacity=(n?.5:1)*(1-Ia(t/a))}}}var Ua={radius:.82,width:.1,glowOut:.16,glowIn:.07,wall:{height:.38,alpha:.8},ally:`#3b9dff`,enemy:`#ff3b3b`,opacity:.95,pulse:{speed:.7,depth:.22},lift:.035,capacity:16};function Wa(e,t,n){return n?null:e===t?`ally`:`enemy`}function Ga(e){let{opacity:t,pulse:n}=Ua;return t*(1-n.depth*.5*(1+Math.sin(e*Math.PI*2*n.speed)))}function Ka(){let{radius:e,width:t,glowOut:n,glowIn:r}=Ua;return[[e-t/2-r,0],[e-t/2,.8],[e,1],[e+t/2,.8],[e+t/2+n*.35,.32],[e+t/2+n,0]]}var qa;function Ja(){let{height:e,alpha:t}=Ua.wall;return[[0,t],[e*.35,t*.45],[e,0]]}function Ya(){if(qa)return qa;let e=Ka(),t=Ja(),n=[],r=[],i=[],a=[],o=[],s=e[e.length-1][0],c=(e,t)=>{let c=n.length/3;for(let o=0;o<=64;o++){let c=o/64*Math.PI*2,l=Math.cos(c),u=Math.sin(c);for(let o=0;o<e;o++){let e=t(l,u,o);n.push(...e.at),r.push(...e.normal),i.push(.5+e.at[0]/s/2,.5+e.at[1]/s/2),a.push(1,1,1,e.alpha)}}for(let t=0;t<64;t++)for(let n=0;n<e-1;n++){let r=c+t*e+n,i=r+e;o.push(r,i,r+1,r+1,i,i+1)}};return c(e.length,(t,n,r)=>({at:[t*e[r][0],n*e[r][0],0],normal:[0,0,1],alpha:e[r][1]})),c(t.length,(e,n,r)=>({at:[e*Ua.radius,n*Ua.radius,t[r][0]],normal:[e,n,0],alpha:t[r][1]})),qa=new U,qa.setAttribute(`position`,new f(n,3)),qa.setAttribute(`normal`,new f(r,3)),qa.setAttribute(`uv`,new f(i,2)),qa.setAttribute(`color`,new f(a,4)),qa.setIndex(o),qa}var Xa={ally:new r(Ua.ally),enemy:new r(Ua.enemy)};function Za(t=Ua.capacity){let n=new z({vertexColors:!0,transparent:!0,depthWrite:!1,side:2,opacity:Ua.opacity}),r=new e(Ya(),n,t);return r.name=`team-rings`,r.instanceColor=new ce(new Float32Array(t*3).fill(1),3),r.count=0,r.frustumCulled=!1,r}var Qa=new Ee;function $a(e,t,n){let r=Math.min(t.length,e.instanceMatrix.count);for(let n=0;n<r;n++){let r=t[n];e.setMatrixAt(n,Qa.makeRotationX(-Math.PI/2).setPosition(r.x,Ua.lift,r.z)),e.setColorAt(n,Xa[r.kind])}e.count=r,e.instanceMatrix.needsUpdate=!0,e.instanceColor&&(e.instanceColor.needsUpdate=!0),e.material.opacity=Ga(n)}var eo={fan:.15,bandIdle:.28,bandArmed:.62,bandPulse:.3,body:.12,bandLight:.45,bodyColor:`#e8eef6`},to={royal:{vivid:0,lightness:.5,bandVivid:0,fan:1,band:1,body:1,flash:`light`},colosseum:{vivid:0,lightness:.5,bandVivid:0,fan:1,band:1,body:1,flash:`light`},school:{vivid:.6,lightness:.64,bandVivid:.2,fan:5,band:1.8,body:3.5,flash:`deep`},dojo:{vivid:.6,lightness:.64,bandVivid:.2,fan:5,band:1.8,body:3.5,flash:`deep`}},no=new r(`#ffffff`);function ro(e,t,n=.5){let r=e.getHSL({h:0,s:0,l:0},E);return e.clone().setHSL(r.h,r.s+(1-r.s)*t,r.l+(n-r.l)*t,E)}function io(e,t){let n=new r(e);if(t.vivid<=0)return{fan:n,band:n.clone().lerp(no,eo.bandLight),body:new r(eo.bodyColor)};let i=ro(n,t.vivid,t.lightness);return{fan:i,band:ro(n,t.bandVivid,t.lightness),body:i.clone()}}function ao(e,t,n,r){let i=eo.bandIdle*e.band;return{fan:Math.min(1,eo.fan*e.fan)*t,band:Math.min(1,n?Math.max(i,eo.bandArmed+eo.bandPulse*r):i)*t,body:Math.min(1,eo.body*e.body)*t}}var oo={pad:.9,peak:1,decay:.22,hold:.7,pulse:.25,fadeOut:.35,lightWidth:1.35,bandHide:.3,burst:{time:.45,grow:2.6,width:.45},fanOpacity:.85,colors:{light:`#ffffff`,haloDark:`#ffcf4a`,haloBright:`#ff8c00`,ringDark:`#fff1b8`,ringBright:`#ff7a00`,fanDark:`#fff3c4`}};function so(e){let t=oo.colors,n=e===`light`;return{light:new r(t.light),halo:new r(n?t.haloDark:t.haloBright),ring:new r(n?t.ringDark:t.ringBright),fan:new r(n?t.fanDark:t.haloBright),additive:n}}var co={fan:1,glow:2,light:3,burst:4};function lo(e,t){let{peak:n,decay:r,hold:i,pulse:a}=oo,o=i*(1-a+a*t);return Math.min(1,o+(n-o)*Math.exp(-Math.max(0,e)/r))}function uo(e){return Math.min(1,Math.max(0,1-e/oo.bandHide))}function fo(e,t,n,r){e.burst>=0&&(e.burst=e.burst+n>oo.burst.time?-1:e.burst+n),t?(e.since=e.level>0&&e.since>=0?e.since+n:0,e.since===0&&(e.burst=0),e.level=lo(e.since,r)):(e.since=-1,e.level=Math.max(0,e.level-n/oo.fadeOut))}function po(e,t){let n=Math.min(1,Math.max(0,e/oo.burst.time)),r=1-(1-n)**2;return{scale:(t+oo.burst.grow*r)/t,opacity:(1-n)**1.5}}function mo(e,t,n,r=oo.pad){return _o([[Math.max(.05,e-r),0],[e-r*.4,.45],[e,.9],[(e+t)/2,1],[t,.9],[t+r*.4,.45],[t+r,0]],n)}function ho(e,t,n){let r=(e+t)/2,i=(t-e)*oo.lightWidth/2,a=(t-e)/2;return _o([[r-i,0],[r-a,1],[r+a,1],[r+i,0]],n)}function go(e,t){let n=oo.burst.width/2;return _o([[e-n,0],[e-n*.3,1],[e+n*.3,1],[e+n,0]],t)}function _o(e,t){let n=[],r=[],i=[],a=[],o=[],s=e[e.length-1][0];for(let o=0;o<=48;o++){let c=-t+2*t*o/48,l=Math.cos(c),u=Math.sin(c),d=Math.min(1,Math.min(o,48-o)/(48*.1));for(let[t,o]of e)n.push(l*t,u*t,0),r.push(0,0,1),i.push(.5+l*t/s/2,.5+u*t/s/2),a.push(1,1,1,o*d)}let c=e.length;for(let e=0;e<48;e++)for(let t=0;t<c-1;t++){let n=e*c+t,r=n+c;o.push(n,r,n+1,n+1,r,r+1)}let l=new U;return l.setAttribute(`position`,new f(n,3)),l.setAttribute(`normal`,new f(r,3)),l.setAttribute(`uv`,new f(i,2)),l.setAttribute(`color`,new f(a,4)),l.setIndex(o),l}function vo(){return new z({vertexColors:!0,transparent:!0,depthWrite:!1,side:2,blending:2,opacity:0})}var yo={shrink:.09,fade:.07,opacity:.84,shake:{size:.12,time:.22},glow:{base:.55,hit:1.6},form:{time:.62,gather:.36,grow:[.14,.22,.3],growTime:.22,overshoot:.12,flash:.46},color:{ice:`#9fe9ff`,emissive:`#2aa7d6`,glowLow:`#1f8fd8`,glowHigh:`#e8fbff`,mist:`#cfefff`,sparkle:`#ffffff`,frost:`#7fdcff`},mist:{count:10,period:2.6,size:[.7,2],travel:2.2,strength:.72},veil:{count:8,period:3.2,size:[.5,1.1],strength:.42,top:2.3},halo:{count:4,radius:[1.25,1.7],height:[1,1.6],strength:.42},sparkle:{count:26,size:[.14,.3],rate:[1.2,2.6]},dust:{count:24,fall:[.35,.7],size:[.06,.11],strength:.9},frost:{extra:.9,across:1.35,strength:.5,spikes:30,length:[.45,1.4],spikeWidth:.1,spikeStrength:.75},shards:{count:26,size:[.12,.34],speed:[2.5,7],up:[2.5,6.5],gravity:16,spin:9,fadeFrom:.55},burst:{mist:7,radius:2.6,sparkles:30,speed:[3,8],flash:{count:3,size:1.5,strength:.9,time:.2}}};function bo(){let e=yo.color;return new I({color:e.ice,emissive:e.emissive,emissiveIntensity:yo.glow.base,metalness:.2,roughness:.18,transparent:!0,opacity:yo.opacity})}var xo=e=>Object.assign(new z({vertexColors:!0,transparent:!0,depthWrite:!1,side:2,blending:2}),{name:e});function So(e,t,n,r,i){let a=yo,o=e===void 0?0:Math.max(0,t-e),s=n===void 0?1/0:r-n,c=s>=0&&s<a.shake.time?1-s/a.shake.time:0;return{height:1-a.shrink*o,opacity:a.opacity-a.fade*o,glow:a.glow.base+(a.glow.hit-a.glow.base)*c,shakeX:a.shake.size*c*Math.sin(r*95+i),shakeZ:a.shake.size*c*Math.cos(r*83+i*1.7)}}var Co=e=>{let t=Math.max(1,Math.floor(Math.abs(e))%2147483646+1);return()=>(t=t*16807%2147483647,t/2147483647)},wo=(e,t,n)=>e+(t-e)*n,To=e=>{let t=Math.max(0,Math.min(1,e));return t*t*(3-2*t)},Eo=(e,t)=>e<=0?0:e>=1?1:1-(1-e)**3+t*Math.sin(Math.PI*e)*(1-e)*2.2;function Do(e,t){let n=new be(e*.82,e,t*.74,6).translate(0,t*.37,0),r=new j(e*.82,t*.26,6).translate(0,t*.74+t*.13,0),i=de([n.toNonIndexed(),r.toNonIndexed()],!1);return n.dispose(),r.dispose(),i}function Oo(e,t,n,i){let a=e.getAttribute(`position`),o=new Float32Array(a.count*3),s=new Float32Array(a.count*3),c=new r;for(let e=0;e<a.count;e++)o[e*3]=a.getX(e)*1.06,o[e*3+1]=a.getY(e),o[e*3+2]=a.getZ(e)*1.06,c.copy(t).lerp(n,Math.min(1,a.getY(e)/i)),s[e*3]=c.r,s[e*3+1]=c.g,s[e*3+2]=c.b;let l=new U;return l.setAttribute(`position`,new F(o,3)),l.setAttribute(`color`,new F(s,3)),l}function ko(e,t){let n=yo,i=Co(t*7919+13),a=new V;a.name=`ice-wall`,a.userData.noFade=!0;let o=[];for(let t=0;t<11;t++){let n=(t+.5)/11,r=(n-.5)*(e-.2)+(i()-.5)*.22,a=1-Math.abs(n-.5)*2;o.push({group:a>.62?0:a>.25?1:2,along:r,across:(i()-.5)*.3,height:1.35+a*1.05+i()*.35,radius:.24+a*.14+i()*.06,tilt:new te((i()-.5)*.22,i()*Math.PI,(i()-.5)*.3)})}for(let t=0;t<4;t++){let n=t%2?1:-1,r=(i()-.5)*(e-.8);o.push({group:2,along:r,across:n*(.3+i()*.15),height:.5+i()*.35,radius:.12+i()*.06,tilt:new te(0,i()*Math.PI,n*(.5+i()*.3))})}let s=bo(),c=new r(n.color.glowLow),l=new r(n.color.glowHigh),u=new V;u.name=`ice-crystals`;let d=new V;d.name=`ice-shells`;let f=xo(`ice-shell`);for(let e=0;e<3;e++){let t=o.filter(t=>t.group===e).map(e=>Do(e.radius,e.height).applyMatrix4(new Ee().makeRotationFromEuler(e.tilt)).translate(e.across,0,e.along)),n=de(t,!1);t.forEach(e=>e.dispose());let r=new B(n,s);r.name=`ice-crystals-${e}`,r.castShadow=!1,u.add(r);let i=new B(Oo(n,c,l,2.6),f);i.name=`ice-shell-${e}`,i.frustumCulled=!1,d.add(i)}a.add(u,d);let p={mist:[],sparkle:[],dust:[],halo:[],spike:[],veil:[]};for(let t=0;t<n.veil.count;t++)p.veil.push({along:((t+i()*.8)/n.veil.count-.5)*(e-.6),across:0,height:0,size:1,rate:1,phase:t/n.veil.count*2.3%1,side:t%2?1:-1,fall:0,sway:i()*Math.PI*2});for(let t=0;t<n.halo.count;t++)p.halo.push({along:((t+.5)/n.halo.count-.5)*(e-1),across:0,height:wo(n.halo.height[0],n.halo.height[1],i()),size:wo(n.halo.radius[0],n.halo.radius[1],i()),rate:.8+i()*.8,phase:i()*Math.PI*2,side:1,fall:0,sway:0});for(let t=0;t<n.mist.count;t++)p.mist.push({along:(i()-.5)*(e-.4),across:0,height:.15+i()*.35,size:1,rate:1,phase:t/n.mist.count+i()*.08,side:t%2?1:-1,fall:0,sway:i()*Math.PI*2});for(let e=0;e<n.sparkle.count;e++){let e=o[Math.floor(i()*11)],t=e.height*(.15+i()*.8);p.sparkle.push({along:e.along+(i()-.5)*e.radius*1.6,across:e.across+(i()<.5?-1:1)*e.radius*(.7+i()*.3),height:t,size:wo(n.sparkle.size[0],n.sparkle.size[1],i()),rate:wo(n.sparkle.rate[0],n.sparkle.rate[1],i()),phase:i()*Math.PI*2,side:1,fall:0,sway:i()*Math.PI*2})}for(let t=0;t<n.dust.count;t++)p.dust.push({along:(i()-.5)*(e+.6),across:(i()-.5)*1.4,height:i()*2.6,size:wo(n.dust.size[0],n.dust.size[1],i()),rate:1,phase:i(),side:1,fall:wo(n.dust.fall[0],n.dust.fall[1],i()),sway:i()*Math.PI*2});for(let t=0;t<n.frost.spikes;t++){let r=(i()-.5)*(e+.3),a=Math.abs(r)>e/2-.5;p.spike.push({along:r,side:t%2?1:-1,angle:(i()-.5)*(a?2.7:1.7),length:wo(n.frost.length[0],n.frost.length[1],i()),delay:n.form.grow[0]+Math.min(1,Math.abs(r)/(e/2))*(n.form.grow[2]-n.form.grow[0]),phase:i()*Math.PI*2})}let m=72+n.frost.spikes*2+n.halo.count*12*3+n.mist.count*10*3+n.veil.count*10*3+n.sparkle.count*8+n.dust.count*4,h=new U;h.setAttribute(`position`,new F(new Float32Array(m*9),3).setUsage(y)),h.setAttribute(`color`,new F(new Float32Array(m*9),3).setUsage(y));let g=new B(h,xo(`ice-aura`));return g.name=`ice-aura`,g.frustumCulled=!1,g.renderOrder=3,a.add(g),a.userData.ice={width:e,crystals:o.map(e=>({along:e.along,across:e.across,height:e.height})),motes:p,material:s,shellMaterial:f},a}var Ao=class{i=0;p;c;constructor(e,t){this.p=e,this.c=t}tri(e,t,n,r,i,a){let{p:o,c:s}=this,c=this.i*9;for(let[l,u]of[[e,t],[n,r],[i,a]])o[c]=l.x,o[c+1]=l.y,o[c+2]=l.z,s[c]=u.r,s[c+1]=u.g,s[c+2]=u.b,c+=3;this.i++}finish(e){this.p.fill(0,this.i*9,e*9),this.c.fill(0,this.i*9,e*9)}},jo=new r(0,0,0),Mo=new H,No=new H,Po=new H,Fo=new r,Io=new H,Lo=new r,Ro=new H,zo=new H;function Bo(e,t,n,r,i,a,o){Lo.copy(a).multiplyScalar(.45);for(let s=0;s<o;s++){let c=s/o*Math.PI*2,l=(s+1)/o*Math.PI*2,u=Math.cos(c),d=Math.sin(c),f=Math.cos(l),p=Math.sin(l);Mo.copy(t).addScaledVector(n,u*i*.5).addScaledVector(r,d*i*.5),No.copy(t).addScaledVector(n,f*i*.5).addScaledVector(r,p*i*.5),Ro.copy(t).addScaledVector(n,u*i).addScaledVector(r,d*i),zo.copy(t).addScaledVector(n,f*i).addScaledVector(r,p*i),e.tri(t,a,Mo,Lo,No,Lo),e.tri(Mo,Lo,Ro,jo,zo,jo),e.tri(Mo,Lo,zo,jo,No,Lo)}}function Vo(e,t,n,r,i,a){let o=[Mo.copy(t).addScaledVector(r,i*1.6).clone(),No.copy(t).addScaledVector(n,i*.55).clone(),Po.copy(t).addScaledVector(r,-i*1.6).clone(),Mo.copy(t).addScaledVector(n,-i*.55).clone()];for(let n=0;n<4;n++)e.tri(t,a,o[n],jo,o[(n+1)%4],jo)}var Ho=new H,Uo=new H,Wo=new H,Go=new r;function Ko(e,t,n,r,i,a){for(let[o,s,c]of[[r,n,2],[n,r,1.35]])for(let n of[1,-1])Ho.copy(t).addScaledVector(s,i*.13),Uo.copy(t).addScaledVector(s,-i*.13),Wo.copy(t).addScaledVector(o,n*i*c),e.tri(Ho,a,Uo,a,Wo,jo);for(let o=0;o<4;o++){let s=o*Math.PI/2,c=s+Math.PI/2;Ho.copy(t).addScaledVector(n,Math.cos(s)*i*.45).addScaledVector(r,Math.sin(s)*i*.45),Uo.copy(t).addScaledVector(n,Math.cos(c)*i*.45).addScaledVector(r,Math.sin(c)*i*.45),e.tri(t,a,Ho,jo,Uo,jo)}}function qo(e,t,n,r,i,a,o){Go.copy(o).multiplyScalar(.6),Ho.copy(t).addScaledVector(n,i*.3).addScaledVector(r,a),Uo.copy(t).addScaledVector(n,i*.3).addScaledVector(r,-a),Wo.copy(t).addScaledVector(n,i),e.tri(t,o,Ho,Go,Wo,jo),e.tri(t,o,Wo,jo,Uo,Go)}function Jo(e,t){let n=new H(1,0,0),r=new H(0,1,0);if(!t)return{right:new H(0,0,1),up:r};n.applyQuaternion(t.quaternion),r.applyQuaternion(t.quaternion);let i=-e.rotation.y;return n.applyAxisAngle(new H(0,1,0),i),r.applyAxisAngle(new H(0,1,0),i),{right:n,up:r}}function Yo(e,t){let n=yo,i=n.form,a=e.userData.ice,o=e.getObjectByName(`ice-crystals`),s=e.getObjectByName(`ice-shells`),c=e.getObjectByName(`ice-aura`),l=Math.min(1,Math.max(0,t.left*2)),u=t.age>=i.time,d=[0,1,2].map(e=>Eo((t.age-i.grow[e])/i.growTime,i.overshoot));o.children.forEach((e,t)=>{e.scale.y=Math.max(.001,d[t]),e.visible=d[t]>.001}),s.children.forEach((e,t)=>{e.scale.y=Math.max(.001,d[t]),e.visible=d[t]>.001}),o.scale.set(1,t.look.height*l,1),s.scale.copy(o.scale),o.position.set(t.look.shakeX,0,t.look.shakeZ),s.position.copy(o.position),a.material.opacity=t.look.opacity*Math.min(1,l*1.2);let f=Math.max(0,1-Math.abs(t.age-i.flash)/.16),p=.5+.1*Math.sin(t.time*2.2);a.shellMaterial.opacity=Math.min(1,(p+f*1.1+(t.look.glow-n.glow.base)*.4)*l),a.material.emissiveIntensity=t.look.glow+f*1.2;let m=c.geometry,h=m.getAttribute(`position`),g=m.getAttribute(`color`),_=new Ao(h.array,g.array),v=h.count/3,{right:y,up:b}=Jo(e,t.camera),x=new r(n.color.mist),S=new r(n.color.sparkle),C=new r(n.color.frost),w=To(t.age/i.gather),T=To(t.age/(i.gather+.1)),E=a.width/2+n.frost.extra,D=new H(0,.03,0),O=new H(0,0,E*T),ee=new H(n.frost.across*T,0,0);Fo.copy(C).multiplyScalar(n.frost.strength*l*(1+f*.8)),Bo(_,D,O,ee,1,Fo,24);let te=new H,k=new H,A=new H,j=new r(n.color.glowHigh);for(let e of a.motes.spike){let r=e.length*To((t.age-e.delay)/.28);r<.01||(k.set(e.side*Math.cos(e.angle),0,Math.sin(e.angle)),A.set(-k.z,0,k.x),te.set(e.side*.16,.025,e.along),Fo.copy(C).lerp(j,.4).multiplyScalar(n.frost.spikeStrength*(.8+.2*Math.sin(t.time*1.7+e.phase))*l*(1+f*.6)),qo(_,te,k,A,r,n.frost.spikeWidth,Fo))}for(let e of a.motes.halo){let r=n.halo.strength*w*(.75+.25*Math.sin(t.time*e.rate+e.phase))*(1+f*1.2),i=e.size*(.6+.4*w),a=Math.max(e.height*Math.max(.3,d[0]),i*.8+.03);Fo.copy(x).lerp(C,.35).multiplyScalar(r*l),Bo(_,Po.set(0,a,e.along).clone(),y,Io.copy(b).multiplyScalar(.8),i,Fo,12)}for(let e of a.motes.mist){let r,a,o,s,c;if(u){let l=((t.time/n.mist.period+e.phase)%1+1)%1;r=e.side*(.25+n.mist.travel*l),o=e.along+Math.sin(e.sway+t.time*.4)*.25,a=e.height*(1-.6*l)+.05,s=wo(n.mist.size[0],n.mist.size[1],l),c=n.mist.strength*Math.sin(Math.PI*l)*Math.min(1,(t.age-i.time)/.4+.3)}else{let i=e.sway+(1-w)*2.2,l=wo(3.2,.25,w);r=Math.cos(i)*l*e.side,o=e.along*w+Math.sin(i)*l*(1-w),a=wo(1.4,e.height,w),s=wo(.9,.55,w),c=n.mist.strength*To(t.age/.12)*(1.15-.4*w)}Fo.copy(x).multiplyScalar(c*l),Bo(_,Po.set(r,Math.max(a,s*.45+.03),o).clone(),y,Io.copy(b).multiplyScalar(.45),s,Fo,10)}for(let e of a.motes.veil){let r=((t.time/n.veil.period+e.phase)%1+1)%1,a=wo(n.veil.size[0],n.veil.size[1],r),s=Math.max(wo(n.veil.top,.35,r)*o.scale.y,a*.7+.03),c=(u?n.veil.strength:0)*Math.sin(Math.PI*r)*Math.min(1,(t.age-i.time)/.4+.2);Fo.copy(x).lerp(C,.2).multiplyScalar(c*l),Bo(_,Po.set(e.side*(.38+r*.25),s,e.along+Math.sin(e.sway+t.time*.5)*.2).clone(),y,Io.copy(b).multiplyScalar(.7),a,Fo,10)}for(let e of a.motes.sparkle){let n,r;if(!u&&w<1){let t=e.sway+(1-w)*3,i=wo(2.8,0,w);n=new H(e.across+Math.cos(t)*i,wo(e.height+1,e.height,w),e.along+Math.sin(t)*i),r=.6+.4*w}else n=new H(e.across,e.height*o.scale.y*d[0],e.along),r=Math.max(0,Math.sin(t.time*e.rate*Math.PI*2+e.phase))**6+f*.8;Fo.copy(S).multiplyScalar(r*l),Ko(_,n,y,b,e.size*(1+f*.6),Fo)}for(let e of a.motes.dust){let r=((e.height-t.time*e.fall)%2.6+2.6)%2.6,i=Math.sin(t.time*1.3+e.sway)*.2,a=(u?n.dust.strength:0)*Math.min(1,r/.4)*l;Fo.copy(S).multiplyScalar(a),Vo(_,Po.set(e.across+i,r+.05,e.along).clone(),y,b,e.size,Fo)}_.finish(v),h.needsUpdate=!0,g.needsUpdate=!0,e.userData.state={grow:d.map(e=>+e.toFixed(3)),height:+(t.look.height*l).toFixed(3),opacity:+a.material.opacity.toFixed(3),glow:+a.material.emissiveIntensity.toFixed(3),shell:+a.shellMaterial.opacity.toFixed(3),gather:+w.toFixed(3),formed:u}}function Xo(e,t){let n=yo.shards,r=yo.burst,i=new V,a=Co(e),o=bo();o.emissiveIntensity=1.1;for(let e=0;e<n.count;e++){let r=wo(n.size[0],n.size[1],a()),c=new B(e%3?new s(r,0):new j(r*.6,r*2.2,6),o);c.scale.y=1.2+a()*.9;let l=(a()-.5)*t,u=.2+a()*2,d=a()<.5?-1:1;c.userData.start=new H(d*.1,u,l),c.userData.velocity=new H(d*wo(n.speed[0],n.speed[1],a()),wo(n.up[0],n.up[1],a()),(a()-.5)*3),c.userData.spin=new H(a()*n.spin,a()*n.spin,a()*n.spin),c.castShadow=!1,c.frustumCulled=!1,i.add(c)}let c=r.flash.count*12*3+r.mist*12*3+r.sparkles*8,l=new U;l.setAttribute(`position`,new F(new Float32Array(c*9),3).setUsage(y)),l.setAttribute(`color`,new F(new Float32Array(c*9),3).setUsage(y));let u=new B(l,xo(`ice-burst`));return u.name=`ice-burst`,u.frustumCulled=!1,u.renderOrder=3,u.userData.mist=Array.from({length:r.mist},(e,n)=>({along:(n/(r.mist-1)-.5)*t,side:n%2?1:-1})),u.userData.width=t,u.userData.sparkles=Array.from({length:r.sparkles},()=>{let e=a()*Math.PI*2,n=a()*.9;return{along:(a()-.5)*t,height:.3+a()*1.8,dir:new H(Math.cos(e)*Math.cos(n),Math.sin(n)+.2,Math.sin(e)*Math.cos(n)),speed:wo(r.speed[0],r.speed[1],a()),size:.08+a()*.1}}),i.add(u),i.name=`ice-shatter`,i.userData.noFade=!0,i.userData.material=o,i}function Zo(e,t,n,i,a,o,s){let c=yo.shards,l=yo.burst,u=a*o,d=i??{x:1,z:0};e.position.set(t,0,n),e.rotation.y=Math.atan2(-d.z,d.x);let f=a<c.fadeFrom?1:Math.max(0,1-(a-c.fadeFrom)/(1-c.fadeFrom));for(let t of e.children){if(!(t instanceof B)||t.name===`ice-burst`)continue;let{start:e,velocity:n,spin:r}=t.userData;t.position.set(e.x+n.x*u,Math.max(.05,e.y+n.y*u-c.gravity*u*u/2),e.z+n.z*u),t.rotation.set(r.x*u,r.y*u,r.z*u)}e.userData.material.opacity=yo.opacity*f;let p=e.getObjectByName(`ice-burst`),m=p.geometry.getAttribute(`position`),h=p.geometry.getAttribute(`color`),g=new Ao(m.array,h.array),{right:_,up:v}=Jo(e,s),y=new r(yo.color.mist),b=new r(yo.color.sparkle),x=new r(yo.color.glowHigh),S=p.userData.width;for(let e=0;e<l.flash.count;e++){let t=l.flash.strength*Math.max(0,1-u/l.flash.time)**2,n=l.flash.size*(1+u*3);Fo.copy(x).multiplyScalar(t),Bo(g,Po.set(0,Math.max(1.1,n*.75+.05),(e/Math.max(1,l.flash.count-1)-.5)*S*.7).clone(),_,Io.copy(v).multiplyScalar(.75),n,Fo,12)}for(let e of p.userData.mist){let t=l.radius*To(a*1.6),n=.55*(1-a)**1.5,r=.6+t*.5;Fo.copy(y).multiplyScalar(n),Bo(g,Po.set(e.side*t*.5,Math.max(.4+a*.6,r*.55+.03),e.along).clone(),_,Io.copy(v).multiplyScalar(.55),r,Fo,12)}for(let e of p.userData.sparkles){let t=e.speed*u*(1-a*.4),n=(1-a)**2*(.6+.4*Math.abs(Math.sin(u*40+e.along)));Fo.copy(b).multiplyScalar(n),Ko(g,Po.set(e.dir.x*t,Math.max(.05,e.height+e.dir.y*t-4*u*u),e.along+e.dir.z*t).clone(),_,v,e.size*1.3,Fo)}g.finish(m.count/3),m.needsUpdate=!0,h.needsUpdate=!0}var Qo=.6+W.puckRadius,$o={ally:new r(`#a9f878`),enemy:new r(`#ff7869`)},es={radius:1.45,spread:72*Math.PI/180,thickness:.15,lateral:.065,centreY:1.05,rootFade:.03},ts=[0,Math.PI/2,Math.PI/4,-Math.PI/4],ns=[Be,Ye,Xe,Je],rs=[new r(`#ffc66e`),new r(`#ff7762`)];function is(e){let t=[],n=[],r=(e,r)=>{t.push(e.x,e.y,e.z),n.push(r,r,r)};for(let t=0;t<e.length-1;t++){let n=e[t],i=e[t+1],a=n.centre.clone().addScaledVector(n.across,-n.half),o=n.centre.clone().addScaledVector(n.across,n.half),s=i.centre.clone().addScaledVector(i.across,-i.half),c=i.centre.clone().addScaledVector(i.across,i.half);r(a,0),r(n.centre,n.glow),r(i.centre,i.glow),r(a,0),r(i.centre,i.glow),r(s,0),r(o,0),r(i.centre,i.glow),r(n.centre,n.glow),r(o,0),r(c,0),r(i.centre,i.glow)}let i=new U;return i.setAttribute(`position`,new f(t,3)),i.setAttribute(`color`,new f(n,3)),i}var as=[[-.95,0],[-.34,.5],[.08,1],[.5,.8],[1.05,0]];function os(e,t,n,r,i,a){let o=[],s=[],c=e=>{o.push(e.point.x,e.point.y,e.point.z),s.push(e.glow,e.glow,e.glow)};for(let o of[1,-1]){let s=[];for(let c=0;c<=40;c++){let l=c/40*2-1,u=l*t,d=Math.max(0,1-l*l),f=n*d**.55,p=.62+.38*d**.35,m=r*d**.5;s.push(as.map(([t,n])=>{let r=e+t*f,s=i(r*Math.sin(u),r*Math.cos(u),o*m*n);return{point:s,glow:n*p*a(s)}}))}for(let e=0;e<40;e++)for(let t=0;t<as.length-1;t++)c(s[e][t]),c(s[e][t+1]),c(s[e+1][t+1]),c(s[e][t]),c(s[e+1][t+1]),c(s[e+1][t])}let l=new U;return l.setAttribute(`position`,new f(o,3)),l.setAttribute(`color`,new f(s,3)),l}var ss=e=>new z({color:`#ffffff`,vertexColors:!0,transparent:!0,opacity:e,depthWrite:!1,side:2,blending:2}),cs=.62;function ls(){let e=es,t=new V,n=e=>Math.max(0,Math.min(1,e)),r=e=>{let t=n(e);return t*t*(3-2*t)};for(let n of ts){let i=Math.cos(n),a=Math.sin(n);t.add(new B(os(e.radius,e.spread,e.thickness,e.lateral,(t,n,r)=>new H(t*i-r*a,e.centreY+t*a+r*i,n),t=>r(t.y/e.rootFade)),ss(cs)))}let i=new B(new k(.1,10,8),new z({color:`#ffffff`,transparent:!0,opacity:.55,depthWrite:!1,blending:2}));i.position.set(0,e.centreY,0),t.add(i);let a=[];for(let e=0;e<=10;e++){let t=1.1-e/10*3.4,i=r(n((1-Math.abs(t+.6)/2)/.5))*.6;a.push({centre:new H(0,.04,t),across:new H(1,0,0),half:.19*(.5+.5*i),glow:i})}return t.add(new B(is(a),ss(.8))),t}var us=new r(`#ffffff`),ds=new r(ze.hot),fs=new r(ze.ally.hot),ps=new r(tt.color),ms={taper:.935,height:.4583,floorGap:.085,coreRadius:.59,coreThickness:.035,coreLift:.0015,bandRadius:.957,bandThickness:.075,bandAt:.648,glowInner:1.18,glowOuter:1.31,glowLift:.025,trailRadius:.59,trailCount:14,trailLift:.06},hs=e=>e.isMesh===!0&&[e.material].flat().some(e=>e.name.startsWith(`Yuru_Line`)),gs=[`rift-arena`,`blender-harbour-city`,`terraced-valley`,`harbour-water`],_s=.06,vs=`EpicCity_TwilightSky`,ys=class{canvas;mapId;renderer;ready;scene=new t;camera=new Se(60,1,.1,850);yaw=Math.PI/2;pitch=.58;gunPitch=.12;fighters=new Map;bench=[];viewing=0;avatars=[];setAvatars(e){this.avatars=e.map(e=>({id:e.id,look:{...e.look}}))}setAvatar(e){this.setAvatars(e?[e]:[])}footsteps=new Qe;steps=[];takeSteps(){let e=this.steps;return this.steps=[],e}takeFlames(){return this.flameSim.starts.splice(0)}get bookStyle(){return this.effects.bookStyle}setBook(e){this.effects.setBook(e)}avatarOf(e){if(gt()===`human`)return this.avatars.find(t=>t.id===e.id)?.look}seatActions={ready:e=>!(e.role===`samurai`&&!Lt())&&!(gt()===`human`&&e.role!==`samurai`&&!Ft(e.role))&&!(e.role===`samurai`&&Ue(this.avatarOf(e),gt())===`grandpa`&&!At())&&!(Ie(e.role,this.avatarOf(e),gt())&&!kt(e.role))&&!(t=>t&&!Nt(t,e.role))(this.avatarOf(e)),look:e=>{let t=this.avatarOf(e);return t?wt(t):``},create:e=>this.createFighter(e),park:e=>{this.scene.remove(e.mesh,e.ring,e.shadow,e.heal,e.barrier),e.calm&&this.scene.remove(e.calm)},unpark:e=>{Object.assign(e,{healLevel:0,calmLevel:0,opacity:1}),this.scene.add(e.mesh,e.ring,e.shadow,e.heal,e.barrier),e.calm&&this.scene.add(e.calm)}};transient=new Map;puck=new V;puckTint=new r(bt[0].color);puckParts=[];puckSpotOn=!1;threatRing;teamRings=Za();ringSpots=[];threatDisplay=rt();reachFan;coreBand;bodyRing;coreGlow;coreLight;coreBurst;coreFlash={since:-1,level:0,burst:-1};coreOut=1;reachFanFlash;reachFanLevel=0;reachFanRole;reachLook=to.royal;corePulse=0;trail=[];target=new H;shake=new H;lastPhase=``;projection=new H;effects;effectShaders=new V;shadowElapsed=0;benchmarkMode=null;benchmarkSaved;setBenchmark(e){let t=this.benchmarkSaved,n=this.programKey();if(t){for(let e of t.hidden)e.visible=!0;this.benchmarkSaved=void 0}if(this.benchmarkMode=e,this.applyQuality(e?.quality?{...this.baseQuality,...e.quality}:this.baseQuality),e){let t={hidden:[]};if(e.hideScenery)for(let e of gs){let n=this.scene.getObjectByName(e);n?.visible&&(n.visible=!1,t.hidden.push(n))}if(e.hideOutlines)for(let e of[...this.fighters.values(),...this.bench])e.mesh.traverse(e=>{hs(e)&&e.visible&&(e.visible=!1,t.hidden.push(e))});this.benchmarkSaved=t}else{for(let e of this.plainMaterials.values())e.dispose();this.plainMaterials.clear()}if(n!==this.programKey()){let t=this.renderer.getRenderTarget();this.renderer.setRenderTarget(e?.direct?null:this.effects.composer.readBuffer),this.renderer.compile(this.scene,this.camera),this.renderer.setRenderTarget(t)}}benchmarkOptions(){let e=this.baseQuality;return{baked:e.bakeMapLight&&this.bakes.size>0,mobile:this.mobileDevice,pixelRatio:e.pixelRatio,outlines:[...this.fighters.values()].some(e=>{let t=!1;return e.mesh.traverse(e=>{hs(e)&&(t=!0)}),t}),gtao:ai[this.mapId].pc.ambientOcclusion&&!e.ambientOcclusion,before:si(this.mapId,this.mobileDevice)}}programKey(){return`${!!this.benchmarkMode?.direct}:${this.lamps.filter(e=>e.visible).length}:${this.mapMaterialKey()}:${this.skyMesh?.visible}:${this.fighterMaterialKey()}`}mapMeshes=[];lightMaterials=new Map;plainMaterials=new Map;mapMaterialKey(){let e=this.benchmarkMode;if(e?.plainMaterials)return`plain`;if(!this.quality.mapLight||e?.standardMaterials)return`standard`;let t=e?.mapPointLights??this.quality.mapPointLights,n=e?.mapPixelPoints??!0,r=this.quality.bakeMapLight&&this.bakes.size>0&&t===this.baseQuality.mapPointLights&&n;return`light:${t}:${n}:${this.quality.shadowSamples}:${r}`}applyMapMaterials(){let e=this.mapMaterialKey(),[,t,n,r,i]=e.split(`:`),a=r===`1`;for(let{mesh:r,original:o}of this.mapMeshes){let s=o=>e===`plain`?this.plainOf(o):e!==`standard`&&r!==this.water&&ui(o)?this.lightOf(o,bi(o,t===`true`,n===`true`),a,i===`true`?r:void 0):o;r.material=Array.isArray(o)?o.map(s):s(o)}}lightOf(e,t,n,r){let i=r&&this.bakes.get(r),a=`${e.uuid}:${t}:${n}${i?`:${r.uuid}`:``}`,o=this.lightMaterials.get(a);return o||this.lightMaterials.set(a,o=mi(e,this.scene.environmentIntensity,{points:t,shadowOnce:n},i)),o}makeEnvironment(){let e=new dr,t=new Ot(this.renderer);this.scene.environment=t.fromScene(e,_s).texture,e.dispose(),t.dispose()}bakes=new Map;bakeMs=0;bakeMap(){let e=this.quality;if(!e.mapLight||!e.bakeMapLight)return;let t=performance.now(),n=Si(this.scene,this.renderer.shadowMap.enabled);if(!n)return;let r=new Map(this.culls.map(e=>[e.mesh,e])),i=new Map;for(let{mesh:e}of this.mapMeshes)i.set(e.geometry,(i.get(e.geometry)??0)+1);for(let{mesh:t,original:a}of this.mapMeshes){if(t===this.water||Array.isArray(a)||!ui(a)||this.bakes.has(t))continue;let o=a,s=t.isInstancedMesh===!0,c=r.get(t)?.original,l=s?c?c.length/16:t.count:1,u=t.geometry.getAttribute(`position`).count*l*(o.side===2?2:1);if(Math.ceil(u/xi.width)>this.renderer.capabilities.maxTextureSize)continue;let d={environment:pi(o,this.scene.environmentIntensity),metal:o.metalness,points:bi(o,e.mapPointLights,!0)===`vertex`},f=()=>Ti(t,n,d,o.side===2,o.side===1,c),p=f();if(s){if((i.get(t.geometry)??0)>1){let e=new U,n=t.geometry;for(let[t,r]of Object.entries(n.attributes))e.setAttribute(t,r);e.setIndex(n.index);for(let t of n.groups)e.addGroup(t.start,t.count,t.materialIndex);e.boundingSphere=n.boundingSphere,e.boundingBox=n.boundingBox,t.geometry=e}let e=new ce(Float32Array.from({length:p.count},(e,t)=>t),1);e.setUsage(y),t.geometry.setAttribute(`mapLightInstance`,e)}this.bakes.set(t,{texture:Di(p),width:xi.width,vertices:p.vertices,texels:p.texels,redo:f})}this.bakeMs=performance.now()-t}rebake(){for(let e of this.bakes.values())e.texture.image.data=Ei(e.redo(),e.width).data,e.texture.needsUpdate=!0}bakeReport(){let e=0,t=0,n=0;for(let[r,i]of this.bakes)e+=i.texture.image.width*i.texture.image.height,r.isInstancedMesh&&t++,i.texels===2&&n++;return{meshes:this.bakes.size,instanced:t,doubleSided:n,texels:e,megabytes:+(e*8/1e6).toFixed(1),milliseconds:Math.round(this.bakeMs)}}fighterLightMaterials=new Map;fighterMaterialKey(){let e=this.quality;return`${e.fighterLight?`light:${e.mapPointLights}:${e.shadowSamples}:${e.fighterKeepMetal}`:`standard`}:${e.fadeWhenNeeded}`}applyFighterMaterials(){for(let e of[...this.fighters.values(),...this.bench])this.dressFighter(e)}dressFighter(e){let t=this.quality,n=new Set;for(let r of e.parts){let i=e=>e.isMeshStandardMaterial===!0,a=n=>t.fighterLight&&i(n)&&!(t.fighterKeepMetal&&vi(n,e.role))?this.fighterLightOf(n,t.mapPointLights,t.shadowSamples===1):n;r.mesh.material=Array.isArray(r.original)?r.original.map(a):a(r.original);for(let e of[r.mesh.material].flat())n.add(e)}e.fadeMaterials=[...n]}fighterLightOf(e,t,n){let r=`${e.uuid}:${t}:${n}`,i=this.fighterLightMaterials.get(r);return i||this.fighterLightMaterials.set(r,i=hi(e,this.scene.environmentIntensity,{points:t?`vertex`:`none`,shadowOnce:n})),i}plainOf(e){let t=e;if(!t.isMeshStandardMaterial)return e;let n=this.plainMaterials.get(e);if(!n){let r=t.color.clone();t.emissive&&t.emissiveIntensity>0&&r.add(t.emissive.clone().multiplyScalar(t.emissiveIntensity)),n=new z({color:r,map:t.map,vertexColors:t.vertexColors,side:t.side,transparent:t.transparent,opacity:t.opacity,alphaTest:t.alphaTest,alphaMap:t.alphaMap,depthWrite:t.depthWrite,depthTest:t.depthTest,fog:t.fog}),this.plainMaterials.set(e,n)}return n}async prepareMapShaders(){let e=this.renderer.getRenderTarget();this.renderer.setRenderTarget(this.effects.composer.readBuffer);let t;try{t=Promise.all(gs.map(e=>this.scene.getObjectByName(e)).filter(e=>!!e).map(e=>this.renderer.compileAsync(e,this.camera,this.scene)))}finally{this.renderer.setRenderTarget(e)}await t}skyMesh;skyCube;skyColor=new r(`#203d61`);async cacheSky(e){this.skyMesh&&e&&!this.skyCube&&(this.skyCube=new Dt(e,{type:g,generateMipmaps:!1,minFilter:Te,magFilter:Te,depthBuffer:!1}),await this.prepareSkyCube(),this.drawSkyCube())}async prepareSkyCube(){let e=this.skyMesh,n=this.skyCube;if(!e||!n)return;let r=e.parent,i=new t,a=this.renderer,o=a.getRenderTarget(),s;i.add(e),a.setRenderTarget(n);try{s=a.compileAsync(i,new Se(90,1,1,1e3))}finally{a.setRenderTarget(o),r.add(e)}await s}drawSkyCube(){let e=this.skyMesh,n=this.skyCube;if(!e||!n)return;let r=e.parent,i=new t,a=e.visible;i.add(e),e.visible=!0,new o(1,1e3,n).update(this.renderer,i),e.visible=a,r.add(e)}applySky(){let e=this.skyMesh;if(!e)return;let t=this.benchmarkMode,n=!!t?.hideSky,r=!!this.skyCube&&this.quality.skyCube>0&&!t?.liveSky;e.visible=!n&&!r,this.scene.background=r&&!n?this.skyCube.texture:this.skyColor}culls=[];cullShapes(e){if(!this.culls.length)return;let t=this.renderer.shadowMap.autoUpdate||this.renderer.shadowMap.needsUpdate,n=this.quality.cullBuildings&&this.quality.shadow===`once`&&!this.benchmarkMode?.drawAllBuildings&&!t,r=this.benchmarkMode?.halfShapes?e=>e%2==0:void 0,i=n?ji(e):void 0;if(!i&&!r){if(!this.cullsFull){for(let e of this.culls)e.showAll();this.cullsFull=!0}return}this.cullsFull=!1;for(let e of this.culls)e.show(e.pick(i,r))}cullsFull=!0;quality;baseQuality;applyQuality(e){if(e!==this.quality){this.quality=e;let t=Math.min(devicePixelRatio,e.pixelRatio);this.renderer.getPixelRatio()!==t&&(this.renderer.setPixelRatio(t),this.resize()),this.renderer.shadowMap.autoUpdate=e.shadow===`every`,this.shadowBaked=!1,this.shadowElapsed=0,this.renderer.shadowMap.needsUpdate=!0,this.puckDisc.castShadow=e.movingShadows,this.effects.setBloom(e.bloom);for(let t of this.lamps)t.visible=e.lampLights;this.effects.setAmbientOcclusion(e.ambientOcclusion),this.effects.setSharpen(e.sharpen),this.effects.setAntialias(e.antialias)}this.applyMapMaterials(),this.applySky(),this.applyFighterMaterials()}lamps=[];puckDisc;shadowBaked=!1;sceneryReady=!1;viewportWidth=1;viewportHeight=1;water;mobileDevice=/Android|iPhone|iPad|iPod/i.test(navigator.userAgent)||navigator.platform===`MacIntel`&&navigator.maxTouchPoints>1;flameSim=new Da(this.mobileDevice?$.mobile:1);flameView=new Pa;flameAt=new H;constructor(e,t=`royal`,n){this.canvas=e,this.mapId=t,this.reachLook=to[t];let r=He(t),a=r.shape===`circle`;this.renderer=new Tt({canvas:e,antialias:!this.mobileDevice,alpha:!1,powerPreference:`high-performance`}),e.addEventListener(`webglcontextrestored`,()=>{this.makeEnvironment(),this.drawSkyCube(),this.rebake()}),this.baseQuality=this.quality=oi(t,this.mobileDevice),this.renderer.setPixelRatio(Math.min(devicePixelRatio,this.quality.pixelRatio)),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.autoUpdate=this.quality.shadow===`every`,this.renderer.shadowMap.needsUpdate=!0,this.renderer.shadowMap.type=1,this.renderer.outputColorSpace=E,this.renderer.toneMapping=4,this.scene.add(this.flameView.root);let o=lr[t];this.renderer.toneMappingExposure=o.exposure,this.skyColor.set(o.background),this.scene.background=this.skyColor,this.scene.fog=new ie(o.fog.color,o.fog.density),this.scene.add(new se(o.hemisphere.sky,o.hemisphere.ground,o.hemisphere.intensity));let s=new m(o.sun.color,o.sun.intensity);s.position.set(-28,47,-38),s.castShadow=!0,s.shadow.mapSize.set(2048,2048),Object.assign(s.shadow.camera,{left:-r.width/2-24,right:r.width/2+24,top:r.depth/2+24.5,bottom:-r.depth/2-24.5,near:1,far:160}),a||Object.assign(s.shadow.camera,{left:-r.width/2-31,right:r.width/2+31,top:r.depth/2+31.5,bottom:-r.depth/2-31.5}),s.shadow.bias=-3e-4,s.shadow.normalBias=.025,s.shadow.radius=2,this.scene.add(s);let c=new m(o.fill.color,o.fill.intensity);c.position.set(-15,15,35),this.scene.add(c);let l=Hr(this.renderer,_s).then(e=>{this.scene.environment=e});this.scene.environmentIntensity=o.environment;let u=(e,t)=>t?.then(t=>(performance.mark(`scene:${e}`),t));this.ready=Promise.all([u(`map`,t===`school`?In(this.scene):t===`dojo`?tr(this.scene):a?pn(this.scene):on(this.scene)),u(`samurai`,It()),u(`yuru-party`,gt()===`human`?Pt(n?.filter(e=>e!==`samurai`)):void 0),u(`grandpa`,gt()===`human`&&(!n||n.includes(`samurai`))?Mt():void 0),u(`cpu-yuru`,gt()===`human`?jt(n):void 0),u(`environment`,l)]).then(async()=>{this.water=this.scene.getObjectByName(`harbour-water`);for(let e of gs){let t=this.scene.getObjectByName(e);t&&(t.updateWorldMatrix(!0,!0),t.traverse(e=>{e.matrixAutoUpdate=!1,e.matrixWorldAutoUpdate=!1}))}this.scene.traverse(e=>{e.name===`city-lamp-light`&&e.isPointLight&&this.lamps.push(e)});for(let e of this.lamps)e.visible=this.quality.lampLights;for(let e of gs)this.scene.getObjectByName(e)?.traverse(e=>{let t=e;t.isMesh&&[t.material].flat().some(e=>e.isMeshStandardMaterial)&&this.mapMeshes.push({mesh:t,original:t.material})});for(let e of[`blender-harbour-city`,`rift-arena`])this.scene.getObjectByName(e)?.traverse(e=>{e.isInstancedMesh&&this.culls.push(new Mi(e))});return this.skyMesh=this.scene.getObjectByName(vs),await this.cacheSky(this.quality.skyCube),this.bakeMap(),this.applyMapMaterials(),this.applySky(),performance.mark(`scene:map-ready`),this.prepareMapShaders().then(()=>this.prepareEffectShaders())}).then(()=>{this.sceneryReady=!0,performance.mark(`scene:shaders`)}),this.scene.onBeforeRender=(e,t,n)=>this.cullShapes(n),this.ready.catch(e=>{console.error(`ゲームの素材の読み込みに失敗しました`,e)});let d=W.puckRadius,f=ms,h=d*f.height,g=f.floorGap+h,_=new B(new be(d*f.taper,d,h,32),new I({color:`#101923`,metalness:.75,roughness:.26}));_.position.y=f.floorGap+h/2,_.castShadow=this.quality.movingShadows,this.puck.add(_),this.puckDisc=_;let v=new B(new be(d*f.coreRadius,d*f.coreRadius,f.coreThickness,24),new z({color:`#e4ffc0`}));v.position.y=g+f.coreLift+f.coreThickness/2,this.puck.add(v);let y=new B(new p(d*f.bandRadius,d*f.bandThickness,6,32),new z({color:`#d0ff82`}));y.rotation.x=Math.PI/2,y.position.y=f.floorGap+h*f.bandAt,this.puck.add(y);let b=new B(new i(d*f.glowInner,d*f.glowOuter,32),new z({color:`#d0ff82`,transparent:!0,opacity:.55,side:2,depthWrite:!1}));b.rotation.x=-Math.PI/2,b.position.y=f.glowLift,this.puck.add(b),this.scene.add(this.puck),this.puckParts=[v.material,y.material,b.material];let x=new B(new i(ft.ringRadius*ft.ringInner,ft.ringRadius,40),new z({color:`#ff5a5a`,transparent:!0,opacity:0,side:2,depthWrite:!1}));x.rotation.x=-Math.PI/2,x.visible=!1,this.threatRing=x,this.scene.add(x),this.scene.add(this.teamRings);let S=Math.acos(at.showAngle),C=new B(new Me(1,48,-S,S*2),new z({color:`#ffffff`,transparent:!0,opacity:0,side:2,depthWrite:!1}));C.rotation.x=-Math.PI/2,C.visible=!1,this.reachFan=C,this.scene.add(C);let w=new B(C.geometry,new z({color:`#ffffff`,transparent:!0,opacity:0,side:2,depthWrite:!1}));w.rotation.x=-Math.PI/2,w.visible=!1,w.renderOrder=co.fan,this.reachFanFlash=w,this.scene.add(w);let T=new B(new i(.9,1,48,1,-S,S*2),new z({color:`#ffffff`,transparent:!0,opacity:0,side:2,depthWrite:!1}));T.rotation.x=-Math.PI/2,T.visible=!1,this.coreBand=T,this.scene.add(T);let D=new B(mo(.9,1,S),vo());D.rotation.x=-Math.PI/2,D.visible=!1,D.renderOrder=co.glow,this.coreGlow=D,this.scene.add(D);let O=new B(ho(.9,1,S),vo());O.material.blending=1,O.rotation.x=-Math.PI/2,O.visible=!1,O.renderOrder=co.light,this.coreLight=O,this.scene.add(O);let ee=new B(go(1,S),vo());ee.rotation.x=-Math.PI/2,ee.visible=!1,ee.renderOrder=co.burst,this.coreBurst=ee,this.scene.add(ee);let te=Qo,k=new B(new i(te-.06,te,48),new z({color:`#e8eef6`,transparent:!0,opacity:0,side:2,depthWrite:!1}));k.rotation.x=-Math.PI/2,k.visible=!1,this.bodyRing=k,this.scene.add(k);for(let e=0;e<f.trailCount;e++){let t=new B(new Me(d*f.trailRadius*(1-e/18),12),new z({color:`#c7ff7b`,transparent:!0,opacity:.3*(1-e/f.trailCount),depthWrite:!1}));t.rotation.x=-Math.PI/2,t.position.y=f.trailLift,t.visible=!1,this.scene.add(t),this.trail.push(t)}this.effects=new ii(this.renderer,this.scene,this.camera,this.mobileDevice,{ambientOcclusion:this.quality.ambientOcclusion,bloom:this.quality.bloom}),this.effects.setSharpen(this.quality.sharpen),this.effects.setAntialias(this.quality.antialias),this.effects.setBook(Ze()),this.effects.maskRoots=()=>[...this.fighters.values()].map(e=>e.mesh),this.resize()}async prepareEffectShaders(){let e=new ye(1,1),t=[new z,new z({transparent:!0,depthWrite:!1}),new z({transparent:!0,depthWrite:!1,side:2}),new I({color:`#87e5ff`,emissive:`#1a809b`,emissiveIntensity:.3,metalness:.2,roughness:.18,transparent:!0,opacity:.84}),Ii()];for(let n of t){let t=new B(e,n);t.castShadow=!0,this.effectShaders.add(t)}for(let e of this.flameView.warmup())this.effectShaders.add(e);this.effectShaders.add(new B(mo(.9,1,Math.PI/2),vo()));let n=Za(1);n.count=1,this.effectShaders.add(n);let r=new U;r.setAttribute(`position`,new F(new Float32Array(9),3)),r.setAttribute(`color`,new F(new Float32Array(9),3)),this.effectShaders.add(new B(r,new z({vertexColors:!0,transparent:!0,depthWrite:!1,side:2,blending:2})));let a=new i(.5,1,4);a.setAttribute(`color`,new F(new Float32Array(a.getAttribute(`position`).count*3),3)),this.effectShaders.add(new B(a,new z({vertexColors:!0,transparent:!0,side:2,depthWrite:!1})));let o=new U;o.setAttribute(`position`,new F(new Float32Array(9),3)),this.effectShaders.add(new B(o,Rt()));let s=new U;s.setAttribute(`position`,new F(new Float32Array(9),3)),s.setAttribute(`normal`,new F(new Float32Array([0,1,0,0,1,0,0,1,0]),3)),s.setAttribute(`skinIndex`,new P(new Uint16Array(12),4)),s.setAttribute(`skinWeight`,new F(new Float32Array([1,0,0,0,1,0,0,0,1,0,0,0]),4));let c=new h(s,new z({transparent:!0,depthWrite:!1})),u=new we;c.add(u),c.bind(new l([u])),c.frustumCulled=!1,this.effectShaders.add(c);let d=this.renderer.getRenderTarget();this.renderer.setRenderTarget(this.effects.composer.readBuffer);let f;try{f=this.renderer.compileAsync(this.effectShaders,this.camera,this.scene)}finally{this.renderer.setRenderTarget(d)}await f}async prepareFirstDraw(){let e=this.renderer,t=this.effects.composer,n=e.getRenderTarget(),r=[];try{e.setRenderTarget(t.readBuffer);for(let t of[this.puck,this.skyMesh?.visible?this.skyMesh:void 0])t&&r.push(e.compileAsync(t,this.camera,this.scene));let n=qr(this.scene.background);n&&(this.standIns.push(n),r.push(e.compileAsync(n,this.camera,this.scene)));let i=Kr(this.scene);if(i.children.length){this.standIns.push(i);let t=this.scene.fog;this.scene.fog=null;try{r.push(e.compileAsync(i,this.camera,this.scene))}finally{this.scene.fog=t}}for(let{mesh:n,toScreen:i}of this.effects.screenQuads())e.setRenderTarget(i?null:t.writeBuffer),r.push(e.compileAsync(n,Xr))}finally{e.setRenderTarget(n)}await Promise.all(r)}checkPrograms(){for(let e of this.renderer.info.programs??[])e.getUniforms()}standIns=[];async seatGently(e){this.viewing=qe(e);for(let t=1;t<e.fighters.length;t++)ur(this.fighters,e.fighters.slice(0,t),this.bench,this.seatActions),await Rn();this.seat(e)}seat(e){this.viewing=qe(e),ur(this.fighters,e.fighters,this.bench,this.seatActions),this.dropStaleAvatars();for(let e of this.fighters.values())for(let t of e.fadeMaterials){let e=yi(t,1,this.quality.fadeWhenNeeded);t.alphaHash!==e&&(t.alphaHash=e,t.needsUpdate=!0)}}async prepareFighterShaders(){let e=[...this.fighters.values()],t=e.flatMap(e=>[e.mesh,e.heal,e.barrier,...e.calm?[e.calm]:[]]),n=this.quality.fadeWhenNeeded?e.flatMap(e=>e.fadeMaterials).filter(e=>!e.transparent):[],r=n.map(e=>e.alphaHash),i=[],a=zn();try{for(let e of n.length?[!1,!0]:[void 0]){if(e!==void 0)for(let t of n)t.alphaHash!==e&&(t.alphaHash=e,t.needsUpdate=!0);for(let e of lt(t)){let t=this.renderer.getRenderTarget();this.renderer.setRenderTarget(this.effects.composer.readBuffer);try{i.push(this.renderer.compileAsync(e,this.camera,this.scene))}finally{this.renderer.setRenderTarget(t)}await a()}}}finally{n.forEach((e,t)=>{e.alphaHash!==r[t]&&(e.alphaHash=r[t],e.needsUpdate=!0)})}await Promise.all(i),this.effects.warmMask()}sizeStale(){let e=this.canvas.clientWidth,t=this.canvas.clientHeight;return e>0&&t>0&&(e!==this.viewportWidth||t!==this.viewportHeight)}resize(){let e=this.canvas.clientWidth,t=this.canvas.clientHeight;this.viewportWidth=e,this.viewportHeight=t,this.renderer.setSize(e,t,!1),this.camera.aspect=e/t,this.camera.updateProjectionMatrix(),this.effects?.resize(e,t)}dispose(){this.renderer.dispose(),this.renderer.forceContextLoss()}resetCamera(e=0){this.yaw=ht(e)*Math.PI/2,this.pitch=.58,this.gunPitch=.12,this.lastPhase=``}project(e,t,n){return this.projection.set(e,t,n).project(this.camera),{x:(this.projection.x*.5+.5)*this.viewportWidth,y:(-.5*this.projection.y+.5)*this.viewportHeight,visible:this.projection.z>-1&&this.projection.z<1&&Math.abs(this.projection.x)<1.08&&Math.abs(this.projection.y)<1.1}}groundAxes(e,t){this.camera.updateMatrixWorld();let n={x:Math.sin(this.yaw),z:Math.cos(this.yaw)},r={x:-n.z,z:n.x},i=.5,a=this.project(e.x,t,e.z);if(!a.visible)return;let o=this.project(e.x+r.x*i,t,e.z+r.z*i),s=this.project(e.x+n.x*i,t,e.z+n.z*i);return{right:r,forward:n,onRight:{x:(o.x-a.x)/i,y:(o.y-a.y)/i},onForward:{x:(s.x-a.x)/i,y:(s.y-a.y)/i}}}setPuckSpot(e){this.puckSpotOn=e}drawPuckState(e,t){let n=mt(Math.hypot(e.puck.velocity.x,e.puck.velocity.z));this.puckTint.lerp(this.tierColor(n),t>0?Math.min(1,t/ft.blend):0);for(let e of this.puckParts)e.color.copy(this.puckTint).multiplyScalar(n.glow);let r=et(e);if(r>0){let t=Ke(e),n=qe(e),i=t!==null&&t!==n,a=t===n&&Le(e)!==e.controlledId;this.puckTint.lerp(i?ds:a?fs:us,Math.min(1,r*1.1));for(let e of this.puckParts)e.color.copy(this.puckTint).multiplyScalar(1+r*1.6)}if(this.puckSpotOn&&e.phase===`playing`)for(let e of this.puckParts)e.color.copy(this.puckTint).lerp(ps,tt.tint).multiplyScalar(tt.bright);let i=.8+n.glow*.2,a=Math.min(1,n.glow),o=r>0?this.trail.length:n.trail;this.trail.forEach((t,n)=>{let r=e.puck.trail[e.puck.trail.length-1-n];if(t.visible=!!r&&n<o,!t.visible)return;t.position.set(r.x,ms.trailLift,r.z),t.scale.setScalar(i);let s=t.material;s.color.copy(this.puckTint),s.opacity=.3*(1-n/ms.trailCount)*a});let s=this.threatRing;if(!s)return;let c=e.fighters.find(t=>t.id===e.controlledId),l=c&&e.phase===`playing`?ot(e.puck,c,St(e,c.id)):null,u=vt(this.threatDisplay,l,t);s.visible=u.visible,u.visible&&c&&(s.position.set(c.pos.x,.055,c.pos.z),s.material.opacity=u.opacity)}drawReachFan(e,t){let n=this.reachFan,r=this.coreBand,a=this.bodyRing,o=this.coreGlow,s=this.coreLight,c=this.coreBurst,l=this.reachFanFlash;if(!n||!r||!a||!o||!s||!c||!l)return;let u=e.fighters.find(t=>t.id===e.controlledId),d=u&&e.phase===`playing`&&u.role!==`gunner`&&u.stun<=0&&!u.meditating&&!u.sprinting?!at.showWhenReady||u.cooldowns[0]<=0?1:.25:0,f=t>0?t/at.fadeIn:0;this.reachFanLevel+=L.clamp(d-this.reachFanLevel,-f,f);let p=this.reachFanLevel;if(n.visible=r.visible=a.visible=p>.01,!n.visible||!u){o.visible=s.visible=c.visible=l.visible=!1,Object.assign(this.coreFlash,{since:-1,level:0,burst:-1});return}let m=yt(u.role)+W.puckRadius;if(this.reachFanRole!==u.role){this.reachFanRole=u.role;let e=io(pt[u.role].color,this.reachLook);n.material.color.copy(e.fan),r.material.color.copy(e.band),a.material.color.copy(e.body);let t=so(this.reachLook.flash);s.material.color.copy(t.light),o.material.color.copy(t.halo),c.material.color.copy(t.ring),l.material.color.copy(t.fan),o.material.blending=c.material.blending=t.additive?2:1;let d=m-Qo,f=Math.acos(at.showAngle),p=Qo+d*(it.core-it.criticalBand),h=Qo+d*(it.core+it.criticalBand);r.geometry.dispose(),r.geometry=new i(p,h,48,1,-f,f*2),this.coreOut=h,o.geometry.dispose(),o.geometry=mo(p,h,f),s.geometry.dispose(),s.geometry=ho(p,h,f),c.geometry.dispose(),c.geometry=go(h,f)}let h=Math.atan2(-u.facing.z,u.facing.x);n.position.set(u.pos.x,.035,u.pos.z),n.scale.setScalar(m),n.rotation.set(-Math.PI/2,0,h);let g=Ct(e,u);this.corePulse=g?this.corePulse+t:0;let _=g?.78+.22*Math.sin(this.corePulse/.12*Math.PI*2):0,v=ao(this.reachLook,p,g,_);n.material.opacity=v.fan,r.position.set(u.pos.x,.04,u.pos.z),r.rotation.set(-Math.PI/2,0,h),fo(this.coreFlash,g&&p>.2,t,g?.5+.5*Math.sin(this.corePulse/.12*Math.PI*2):0);let y=this.coreFlash.level;if(r.material.opacity=v.band*uo(y),n.material.opacity=v.fan*uo(y),o.visible=s.visible=l.visible=y>.001,o.visible&&(l.position.copy(n.position),l.rotation.copy(n.rotation),l.scale.copy(n.scale),l.material.opacity=oo.fanOpacity*y,o.position.set(u.pos.x,.045,u.pos.z),o.rotation.set(-Math.PI/2,0,h),o.material.opacity=y,s.position.set(u.pos.x,.05,u.pos.z),s.rotation.set(-Math.PI/2,0,h),s.material.opacity=y),c.visible=this.coreFlash.burst>=0,c.visible){let e=po(this.coreFlash.burst,this.coreOut);c.position.set(u.pos.x,.055,u.pos.z),c.rotation.set(-Math.PI/2,0,h),c.scale.set(e.scale,e.scale,1),c.material.opacity=e.opacity}a.position.set(u.pos.x,.03,u.pos.z),a.material.opacity=v.body}tierColor(e){return this.tierColors.get(e.color)??this.tierColors.set(e.color,new r(e.color)).get(e.color)}tierColors=new Map;dodgeGhost(e,t){let n=e.fighters.find(e=>e.dash?.presentation===`dodge-afterimage`&&Math.hypot(e.pos.x-t.pos.x,e.pos.z-t.pos.z)<1.5),r=n&&this.fighters.get(n.id)?.mesh.userData.samurai;if(!n||!r)return;let i=Xt(r.model);return i.position.x+=t.pos.x-n.pos.x,i.position.z+=t.pos.z-n.pos.z,i}disposeObject(e){e.traverse(e=>{if(e instanceof B){if(e instanceof h&&e.skeleton.dispose(),e.userData.ghost)return;e.geometry.dispose(),(Array.isArray(e.material)?e.material:[e.material]).forEach(e=>e.dispose())}}),e.userData.ghostMaterial?.dispose(),this.scene.remove(e)}dropStaleAvatars(){let e=new Set(this.avatars.map(e=>wt(e.look)));this.bench.some(t=>t.look&&!e.has(t.look))&&(this.bench=this.bench.filter(t=>{if(!t.look||e.has(t.look))return!0;for(let e of[t.mesh,t.ring,t.shadow,t.heal,t.barrier,t.calm])e?.traverse(e=>{e instanceof B&&(e instanceof h&&e.skeleton.dispose(),(Array.isArray(e.material)?e.material:[e.material]).forEach(e=>e.dispose()))});return!1}))}createFighter(e){let t=this.avatarOf(e),n=Ut(e.role,e.team,t),r=new B(new i(.77,.86,40),new z({color:e.team===this.viewing?$o.ally:$o.enemy,side:2,transparent:!0,opacity:.95,depthWrite:!1}));r.rotation.x=-Math.PI/2;let a=new B(new Me(.68,20),new z({color:`#010611`,transparent:!0,opacity:.14,depthWrite:!1}));a.rotation.x=-Math.PI/2;let o=[];n.traverse(e=>{!(e instanceof B)||e.userData.samuraiVfx||e.userData.noFade||o.push({mesh:e,original:e.material})});let s=ya(),c=_a(qi.stance[e.role]),l=Kt();this.scene.add(n,r,a,s,l),c&&this.scene.add(c);let u={mesh:n,role:e.role,team:e.team,look:t?wt(t):``,ring:r,shadow:a,parts:o,fadeMaterials:[],heal:s,calm:c,healLevel:0,calmLevel:0,opacity:1,barrier:l};return this.dressFighter(u),u}flameNozzle=e=>{let t=e===void 0?void 0:this.fighters.get(e);if(!t)return;let n=t.mesh.getObjectByName(`PudHand_L`)??t.mesh.getObjectByName(`wrist_L`);if(!n)return;n.updateWorldMatrix(!0,!1);let r=n.getWorldPosition(this.flameAt),i=t.mesh.rotation.y;return{x:r.x,y:r.y,z:r.z,fx:Math.sin(i),fz:Math.cos(i)}};draw(e,t,n){if(this.benchmarkMode?.skipRender)return;let r=this.water;r?.material.userData.shader&&(r.material.userData.shader.uniforms.harbourTime.value=n);let a=this.viewing=qe(e);ur(this.fighters,e.fighters,this.bench,this.seatActions),this.dropStaleAvatars(),this.flameSim.track(e.projectiles,e.phase===`playing`);let o=this.ringSpots;o.length=0;for(let r of e.fighters){let i=this.fighters.get(r.id);if(!i||!this.seatActions.ready(r))continue;i.mesh.position.set(r.pos.x,0,r.pos.z),i.mesh.rotation.y=Math.atan2(r.facing.x,r.facing.z),i.mesh.userData.flameHold=r.role===`mage`?this.flameSim.hold(r.id):0,Vt(i.mesh,r,r.role===`samurai`&&e.phase!==`lobby`?e.elapsed:n,t);let s=i.mesh.userData.gait,c=this.footsteps.step(r.id,s);c>=0&&this.steps.length<32&&this.steps.push({id:r.id,foot:c,moving:s.moving,x:r.pos.x,z:r.pos.z,pudding:We(r.role,this.avatarOf(r),gt())}),i.ring.position.set(r.pos.x,.045,r.pos.z),i.ring.visible=r.id===e.controlledId;let l=Wa(r.team,a,r.id===e.controlledId);l&&o.push({x:r.pos.x,z:r.pos.z,kind:l}),i.ring.material.color.copy(r.team===a?$o.ally:$o.enemy),i.shadow.position.set(r.pos.x,.025,r.pos.z);let u=0;for(let t of e.effects)t.presentation===`guard-hit`&&Math.hypot(t.pos.x-r.pos.x,t.pos.z-r.pos.z)<.8&&(u=Math.max(u,t.life/t.maxLife));qt(i.barrier,!!r.blocking,r.pos.x,r.pos.z,Math.atan2(r.facing.x,r.facing.z),u,r.guardGauge/ut.gauge,i.opacity,n);let d=(e,n,r)=>t>0?L.clamp(e+(n?t/r.fadeIn:-t/r.fadeOut),0,1):e;i.healLevel=d(i.healLevel,(r.healed??0)>0&&r.stun<=0,qi.heal),i.calmLevel=d(i.calmLevel,(!!r.meditating||!!r.sprinting||(r.boost??0)>0)&&r.stun<=0,qi.meditation),i.heal.position.set(r.pos.x,0,r.pos.z),ba(i.heal,i.healLevel*i.opacity,n,this.camera,r.id),i.calm&&(i.calm.position.set(r.pos.x,0,r.pos.z),va(i.calm,i.calmLevel*i.opacity,n,this.camera,r.id))}$a(this.teamRings,o,n),this.puck.position.set(e.puck.pos.x,0,e.puck.pos.z),this.puck.rotation.y=n*1.2,this.drawPuckState(e,t),this.drawReachFan(e,t),this.flameSim.update(t,this.flameNozzle),this.flameView.write(this.flameSim,n);let c=new Set;for(let n of e.projectiles){if(n.kind===`fire`)continue;let e=`p`+n.id;c.add(e);let r=this.transient.get(e);if(!r){if(n.kind===`bullet`){r=new V;let e=new B(new k(.12,8,6),new z({color:`#fff5ce`}));r.add(e);let t=new B(new be(.055,.015,1.15,6),new z({color:n.team===0?`#ffc66e`:`#ff7762`,transparent:!0,opacity:.85,depthWrite:!1}));t.rotation.x=Math.PI/2,t.position.z=-.57,r.add(t)}else r=n.kind===`kamaitachi`?ls():new B(new s(.2),new z({color:`#b7afff`}));this.transient.set(e,r),this.scene.add(r)}r.position.set(n.pos.x,n.kind===`kamaitachi`?0:n.height??1.1,n.pos.z),n.kind===`bullet`?(r.quaternion.setFromUnitVectors(new H(0,0,1),new H(n.velocity.x,n.verticalVelocity??0,n.velocity.z).normalize()),r.children[1].material.color.copy(rs[n.team])):n.kind===`kamaitachi`?(r.quaternion.setFromUnitVectors(new H(0,0,1),new H(n.velocity.x,0,n.velocity.z).normalize()),r.scale.setScalar(1+.22*(1-Math.max(0,Math.min(1,n.life/_t.life))))):r.rotation.y+=t*10}for(let t of e.walls){let r=`w`+t.id;c.add(r);let i=this.transient.get(r);if(t.kind===`light`){i||(i=Li(t.width,t.id,n),this.transient.set(r,i),this.scene.add(i)),zi(i,t,n);continue}i||(i=ko(t.width,t.id),i.userData.born=n,this.transient.set(r,i),this.scene.add(i));let a=Ge(t);i.position.set(t.pos.x,0,t.pos.z),i.rotation.y=Math.atan2(-a.z,a.x),Yo(i,{age:n-i.userData.born,left:t.life,look:So(t.hp,$e.hits,t.hitAt,e.elapsed,t.id),time:n,camera:this.camera})}for(let t of e.effects){if(t.presentation===`samurai-iai`)continue;let n=`e`+t.id;c.add(n);let r=this.transient.get(n);if(t.presentation===`guard-hit`)continue;if(t.presentation===`foe-critical`){if(!r){r=new V,r.name=t.team===qe(e)?`ally-critical`:`foe-critical`;let a=t.team===qe(e)?ze.ally.color:ze.color;for(let[e,t]of[[.8,0],[.88,.28]]){let n=new B(new i(e,1,64),new z({color:a,side:2,transparent:!0,opacity:.95,depthWrite:!1}));n.rotation.x=-Math.PI/2,n.userData.lag=t,r.add(n)}this.transient.set(n,r),this.scene.add(r)}let a=1-t.life/t.maxLife;r.position.set(t.pos.x,.1,t.pos.z);for(let e of r.children){let n=Math.max(0,Math.min(1,(a-e.userData.lag)/(1-e.userData.lag)));e.scale.setScalar(.6+(t.radius-.6)*n),e.visible=a>=e.userData.lag,e.material.opacity=.95*(1-n)*(1-n)}continue}if(t.presentation===`ice-shatter`){r||(r=Xo(t.id,t.radius*2),this.transient.set(n,r),this.scene.add(r)),Zo(r,t.pos.x,t.pos.z,t.direction,1-t.life/t.maxLife,t.maxLife,this.camera);continue}if(t.presentation===`guard-break`){r||(r=Jt(t.id),this.transient.set(n,r),this.scene.add(r)),Yt(r,t.pos.x,t.pos.z,Math.atan2(t.direction?.x??0,t.direction?.z??1),1-t.life/t.maxLife,t.maxLife);continue}if(t.presentation===`dodge-afterimage`){r||(r=this.dodgeGhost(e,t)??new V,this.transient.set(n,r),this.scene.add(r)),r.userData.ghostMaterial&&zt(r,1-t.life/t.maxLife);continue}if(t.presentation===`dodge-vanish`||t.presentation===`dodge-smoke`||t.presentation===`dodge-roll`||t.presentation===`dodge-step`){let e=t.presentation===`dodge-vanish`||t.presentation===`dodge-smoke`?`smoke`:`dust`;r||(r=Wt(e,t.id),this.transient.set(n,r),this.scene.add(r)),Ht(r,e,t.pos.x,t.pos.z,Math.min(1,(1-t.life/t.maxLife)*1.4),this.camera);continue}if(t.presentation===`kamaitachi-hold`){r||(r=ls(),this.transient.set(n,r),this.scene.add(r)),r.position.set(t.pos.x,0,t.pos.z),r.quaternion.setFromUnitVectors(new H(0,0,1),new H(t.direction?.x??1,0,t.direction?.z??0).normalize());let e=Be+(t.maxLife-t.life);ns.forEach((t,n)=>{let i=r.children[n],a=e-t;i.visible=a>=0,i.material.opacity=cs*(1+.9*Math.max(0,1-a/.09))}),r.children[ns.length+1].visible=!1;continue}if(t.presentation===`wind`){if(!r){r=new V;let e=new B(new i(.9,1,40,1,0,Math.PI),new z({color:`#eaf6ff`,side:2,transparent:!0,opacity:.5,depthWrite:!1}));e.rotation.x=-Math.PI/2,r.add(e),this.transient.set(n,r),this.scene.add(r)}let e=1-t.life/t.maxLife,a=t.radius*(st.start+(1-st.start)*Math.min(1,e));r.position.set(t.pos.x,.45,t.pos.z),r.scale.set(a,1,a),r.rotation.y=Math.atan2(-(t.direction?.x??0),-(t.direction?.z??1)),r.children[0].material.opacity=.55*(1-e)*(1-e*.5);continue}if(t.presentation===`weapon-slash`||t.presentation===`staff-hit`){if(!r){let e=t.presentation===`staff-hit`;r=new V;let a=new B(new i(t.radius*(e?.92:.84),t.radius,28,1,.45,2.25),new z({color:e?`#ffe6b0`:t.team===0?`#c8edff`:`#ffb8a4`,side:2,transparent:!0,opacity:.7,depthWrite:!1}));a.rotation.x=Math.PI/2,a.position.y=e?.55:.8,r.add(a),this.transient.set(n,r),this.scene.add(r)}let e=1-t.life/t.maxLife,a=t.presentation===`staff-hit`?.5-e:e-.5;r.position.set(t.pos.x,0,t.pos.z),r.rotation.y=Math.atan2(t.direction?.x??0,t.direction?.z??1)+a*.6;let o=r.children[0];o.material.opacity=Math.sin(Math.PI*e)*.72;continue}if(t.presentation===`clash-spark`){r||(r=Wi(t.id),this.transient.set(n,r),this.scene.add(r)),r.position.set(t.pos.x,t.height??1.2,t.pos.z),Ki(r,1-t.life/t.maxLife,t.radius,this.camera);continue}if(t.presentation===`bomber`){r||(r=Ba(t.id),this.transient.set(n,r),this.scene.add(r)),Va(r,t.pos.x,t.pos.z,t.maxLife-t.life,t.maxLife,t.radius,this.camera);continue}if(t.presentation===`shockwave`){r||(r=new B(new i(.86,1,64),new z({color:`#fff6d0`,side:2,transparent:!0,opacity:.95,depthWrite:!1})),r.rotation.x=-Math.PI/2,this.transient.set(n,r),this.scene.add(r));let e=1-t.life/t.maxLife,a=.6+(t.radius-.6)*e;r.position.set(t.pos.x,.09,t.pos.z),r.scale.setScalar(a),r.material.opacity=.95*(1-e)*(1-e);continue}let a=1-t.life/t.maxLife;if(!r){let e=(t.presentation===`crit-spark`?`#fff3c4`:t.presentation===`mid-spark`?`#8ff0ff`:t.presentation===`tip-spark`?`#8f9fb4`:``)||(t.kind===`heal`?`#a7ff91`:t.kind===`hit`?`#ffb089`:t.kind===`ice`?`#8ff0ff`:t.kind===`light`?`#ffe27a`:t.team===0?`#a6ecff`:`#ffc298`);r=new V;let a=[`slash`,`charge`].includes(t.kind),o=new B(new i(t.radius*.83,t.radius,a?28:48,1,0,a?Math.PI*1.3:Math.PI*2),new z({color:e,side:2,transparent:!0,opacity:.9,depthWrite:!1}));o.rotation.x=-Math.PI/2,o.position.y=t.kind===`heal`?.12:.65,r.add(o);for(let n=0;n<7;n++){let i=new B(new s(.095),new z({color:e,transparent:!0,opacity:1}));i.position.set(Math.cos(n*6.28/7)*t.radius,.4,Math.sin(n*6.28/7)*t.radius),r.add(i)}this.transient.set(n,r),this.scene.add(r)}r.position.set(t.pos.x,0,t.pos.z),r.scale.setScalar(.7+a*.5),r.rotation.y=a*2,r.children.forEach((e,t)=>{let n=e;n.material.opacity=1-a,t>0&&(e.position.y=.35+a*1.5)})}for(let[e,t]of this.transient)c.has(e)||(this.disposeObject(t),this.transient.delete(e));let l=e.fighters.find(t=>t.id===e.controlledId),u=e.phase===`lobby`;if(this.camera.position.sub(this.shake),this.shake.set(0,0,0),u){let e=this.camera.aspect;if(this.mapId===`colosseum`){let t=He(this.mapId).radius;this.target.set(10,7,-6),this.camera.position.set(-t*.62,e<1.6?11:9.5,t*.54)}else this.target.set(35,8,-3),this.camera.position.set(-W.width/2-9+Math.sin(n*.06)*.5,e<1.6?13:11,12);this.camera.lookAt(this.target)}else{let e=new H(Math.sin(this.yaw),0,Math.cos(this.yaw)),n=new H(l.pos.x,0,l.pos.z),r=n.clone().addScaledVector(e,-8);r.y=1.56+this.pitch*3;let i=7;if(this.mapId===`colosseum`){let e=He(this.mapId).radius-.9,t=Math.hypot(r.x,r.z);t>e&&(r.x*=e/t,r.z*=e/t);let a=Math.hypot(r.x-n.x,r.z-n.z);r.y+=Math.max(0,4-a)*.7,i=L.lerp(.65,7,L.smoothstep(a,.4,4))}else if(this.mapId===`dojo`){r.x=L.clamp(r.x,-Gn.x,Gn.x),r.z=L.clamp(r.z,-Gn.z,Gn.z);let e=Math.hypot(r.x-n.x,r.z-n.z);r.y+=Math.max(0,4-e)*.7,i=L.lerp(.65,7,L.smoothstep(e,.4,4))}let a=n.clone().addScaledVector(e,i);a.y=1.8;let o=this.lastPhase===`lobby`||this.lastPhase===``?1:1-Math.exp(-t*10);this.camera.position.lerp(r,o),this.target.lerp(a,o),this.camera.lookAt(this.target)}if(!u){let t=Ve(l),r=Math.max(t.f>0?(.05+.07*t.s)*t.f:l.hitStop>0?.03:0,ct(e));r>0&&(this.shake.set(Math.sin(n*80)*r,Math.cos(n*63)*r,0),this.camera.position.add(this.shake),this.camera.lookAt(this.target))}this.lastPhase=e.phase;let d=new Set(e.fighters.filter(e=>e.dash?.presentation===`dodge-vanish`).map(e=>e.id));for(let[t,n]of this.fighters){let r=n.mesh.position.distanceTo(this.camera.position),i=u||t===e.controlledId?1:L.smoothstep(r,4.5,6.5);for(let e of n.fadeMaterials){let t=yi(e,i,this.quality.fadeWhenNeeded);e.alphaHash!==t&&(e.alphaHash=t,e.needsUpdate=!0),e.opacity=i}n.mesh.visible=i>.015&&!d.has(t)&&!this.benchmarkMode?.hideFighters,n.opacity=i}for(let t of e.fighters)if(t.role===`gunner`&&t.stun<=0){let n=this.fighters.get(t.id)?.mesh;if(!n)continue;t.id===e.controlledId&&!u?Bt(n,new H(t.pos.x+t.facing.x*12,1.2,t.pos.z+t.facing.z*12)):Bt(n,new H(e.puck.pos.x,.25,e.puck.pos.z))}this.quality.shadow===`once`?this.sceneryReady&&!this.shadowBaked&&(this.renderer.shadowMap.needsUpdate=!0,this.shadowBaked=!0):this.quality.shadow===`hz30`&&(this.shadowElapsed+=t,this.shadowElapsed>=1/30&&(this.renderer.shadowMap.needsUpdate=!0,this.shadowElapsed%=1/30)),this.benchmarkMode?.direct?(this.renderer.info.reset(),this.renderer.setRenderTarget(null),this.renderer.render(this.scene,this.camera)):this.effects.render(t)}gunAim(e){let t=e.fighters.find(t=>t.id===e.controlledId);this.camera.updateMatrixWorld(!0);let n=this.camera.position.clone(),r=this.camera.getWorldDirection(new H).multiplyScalar(100),i=Re(e,n,r,t.team,0),a=n.clone().addScaledVector(r,i?.t??1),o=this.fighters.get(t.id)?.mesh;return o&&(o.position.set(t.pos.x,0,t.pos.z),o.rotation.y=Math.atan2(t.facing.x,t.facing.z)),{origin:(o?Bt(o,a):void 0)??{x:t.pos.x,y:1.2,z:t.pos.z},target:a}}minimap(e,t){let n=e.getContext(`2d`),r=e.width,i=e.height,a=He(t.mapId),o=a.shape===`circle`;n.clearRect(0,0,r,i);let s=Math.min(r-20,i-20)/(a.radius*2),c=o?s:(r-20)/a.width,l=o?s:(i-20)/a.depth,u=e=>r/2+e*c,d=e=>i/2+e*l;n.strokeStyle=`#ffffff35`,n.lineWidth=1,n.fillStyle=`#b28b5720`,n.beginPath(),o?n.arc(r/2,i/2,a.radius*c,0,Math.PI*2):n.rect(10,10,r-20,i-20),n.fill(),n.stroke(),n.beginPath(),n.moveTo(r/2,d(-a.depth/2)),n.lineTo(r/2,d(a.depth/2)),n.stroke(),n.beginPath(),n.arc(r/2,i/2,o?5*c:12,0,Math.PI*2),n.stroke();for(let e of[0,1])n.strokeStyle=e===0?`#83dbff`:`#ff907d`,n.lineWidth=3,n.beginPath(),n.moveTo(u((e?1:-1)*a.goalX),d(-a.goalWidth/2)),n.lineTo(u((e?1:-1)*a.goalX),d(a.goalWidth/2)),n.stroke();for(let e of t.walls){let t=Ge(e),r=-t.z*e.width/2,i=t.x*e.width/2;n.strokeStyle=e.kind===`light`?`#ffe27a`:`#b1f1ff`,n.lineWidth=3,n.beginPath(),n.moveTo(u(e.pos.x-r),d(e.pos.z-i)),n.lineTo(u(e.pos.x+r),d(e.pos.z+i)),n.stroke()}for(let e of t.fighters){let r=e.id===t.controlledId;n.fillStyle=e.stun>0?`#7b8194`:r?`#c6ff8b`:e.team===0?`#85dcff`:`#ff897d`,n.beginPath(),n.arc(u(e.pos.x),d(e.pos.z),r?4:3,0,Math.PI*2),n.fill(),r&&(n.strokeStyle=`#c6ff8b77`,n.lineWidth=1,n.beginPath(),n.arc(u(e.pos.x),d(e.pos.z),7,0,Math.PI*2),n.stroke())}let f=mt(Math.hypot(t.puck.velocity.x,t.puck.velocity.z));n.globalAlpha=!f.blink||Math.floor(t.elapsed/(ft.blinkPeriod/2))%2==0?1:.35,n.fillStyle=f.color,n.beginPath(),n.arc(u(t.puck.pos.x),d(t.puck.pos.z),f.dot,0,Math.PI*2),n.fill(),n.globalAlpha=1}};export{ys as GameView};