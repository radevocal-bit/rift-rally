import{An as e,At as t,Bn as n,C as r,Dt as i,E as a,En as o,Et as s,F as c,Fn as l,G as u,Gn as d,H as f,Hn as p,I as m,J as h,L as g,Ln as _,Lt as v,M as y,Mn as b,Nn as x,On as S,P as C,Pn as w,Q as T,Qn as E,R as D,Rn as O,S as k,T as A,Tt as j,U as M,Un as N,V as P,W as F,X as ee,Y as te,Z as I,Zn as L,_ as R,_t as ne,at as re,b as ie,d as ae,dt as oe,et as se,ft as z,g as ce,gn as le,h as ue,it as de,jt as B,k as fe,kn as pe,kt as me,l as he,m as ge,mt as V,n as _e,nt as ve,ot as ye,pt as H,q as U,qn as be,rt as xe,tr as Se,u as Ce,ut as W,v as we,vt as Te,w as Ee,wt as De,x as Oe,xn as G,xt as ke,yn as Ae,yt as K,zn as je}from"./avatar-CuCBzIkj.js";import{$ as Me,A as Ne,B as Pe,C as Fe,D as Ie,E as Le,F as Re,G as ze,H as Be,I as Ve,J as He,K as Ue,L as We,M as Ge,N as Ke,O as qe,P as Je,Q as Ye,R as Xe,S as Ze,T as Qe,U as $e,V as q,W as et,X as tt,Y as nt,Z as rt,_ as it,at,b as ot,et as st,f as ct,g as lt,h as ut,it as dt,j as ft,k as pt,l as mt,m as ht,n as gt,nt as _t,p as vt,q as yt,r as bt,rt as xt,s as St,t as Ct,tt as wt,v as Tt,w as Et,x as Dt,y as Ot,z as kt}from"./index-cZmZAFAe.js";import{a as At,c as jt,d as Mt,i as Nt,l as Pt,n as Ft,o as It,s as Lt,t as Rt,u as zt}from"./yuru-party-CI7PBUj0.js";var Bt;function Vt(){if(Bt)return Bt;let e=4093,t=()=>(e=Math.imul(e,1664525)+1013904223>>>0,e/4294967296),n=e=>{let n=document.createElement(`canvas`);n.width=n.height=512;let r=n.getContext(`2d`),i=r.createImageData(512,512);for(let n=0;n<512;n++)for(let r=0;r<512;r++){let a=e===`wood`?Math.sin(r*.32+Math.sin(n*.035)*1.2)*8+Math.sin(r*1.13+n*.007)*5:e===`cloth`?(r%3==0?-15:0)+(n%3==0?-13:0):0,o=(e===`wood`?173:e===`slate`?168:e===`cloth`?226:216)+a+(t()-.5)*(e===`plaster`?33:17),s=(n*512+r)*4;i.data[s]=o,i.data[s+1]=o,i.data[s+2]=o,i.data[s+3]=255}if(r.putImageData(i,0,0),e===`wood`){for(let e=0;e<512;e+=128)r.fillStyle=`#3a342c`,r.fillRect(e,0,3,512),r.fillStyle=`#ded0b7`,r.fillRect(e+4,0,2,512);for(let e=0;e<170;e++){let n=t()*512;r.strokeStyle=`rgba(55,42,25,${.06+t()*.17})`,r.lineWidth=.5+t()*1.1,r.beginPath(),r.moveTo(n,0),r.bezierCurveTo(n+Math.sin(e)*13,170,n-Math.cos(e)*7,360,n,512),r.stroke()}}if(e===`slate`)for(let e=-1;e<9;e++)for(let n=-1;n<9;n++){let i=n*64+e%2*32,a=e*64,o=132+t()*57;r.fillStyle=`rgb(${o},${o+2},${o+4})`,r.fillRect(i+1,a+2,62,61),r.fillStyle=`#555960`,r.fillRect(i,a+60,64,4),r.fillRect(i,a,2,60),r.fillStyle=`#bec2c2`,r.fillRect(i+3,a+4,58,1);for(let e=0;e<13;e++)r.fillStyle=t()>.5?`#ffffff09`:`#00000012`,r.fillRect(i+4+t()*53,a+6+t()*46,1+t()*19,1)}let a=new ie(n);return a.colorSpace=o,a.wrapS=a.wrapT=Ae,a.anisotropy=4,a};return Bt={wood:n(`wood`),slate:n(`slate`),cloth:n(`cloth`),plaster:n(`plaster`)},Bt}function Ht(e,t){let n=e.getAttribute(`position`),r=e.getAttribute(`normal`),i=new Float32Array(n.count*2);for(let e=0;e<n.count;e++){let a=Math.abs(r.getX(e)),o=Math.abs(r.getY(e)),s=Math.abs(r.getZ(e));i[e*2]=(a>o&&a>s?n.getZ(e):n.getX(e))*t,i[e*2+1]=(o>a&&o>s?n.getZ(e):n.getY(e))*t}e.setAttribute(`uv`,new R(i,2))}function Ut(e,t){let n=(e,t,n)=>e+Math.max(-1,Math.min(1,e/t))*(n-t);return{x:n(e,17,q.width/2),z:n(t,10.5,q.depth/2)}}var Wt=e=>e.isMesh===!0,Gt=`city-lamp-light`,Kt=e=>e.isMeshStandardMaterial===!0;async function qt(e){let n=new U;n.name=`blender-harbour-city`;let i=new he,a=new _,s=await fetch(`./models/twilight-city-layout.json`);if(!s.ok)throw Error(`City layout unavailable`);let c=await s.json(),l=e=>({...e,...Ut(e.x,e.z)}),u={...c,palace:l(c.palace),blocks:c.blocks.map(e=>({...e,placements:e.placements.map(l)}))},[d,f,p,m]=await Promise.all([i.loadAsync(`./models/twilight-infrastructure.glb`),i.loadAsync(`./models/monumental-palace-v3.glb`),Promise.all(u.blocks.map(e=>i.loadAsync(`./models/${e.model}.glb`))),Promise.all([`weathered-limestone-v3`,`aged-oak-v3`,`lime-plaster-v3`].map(e=>a.loadAsync(`./textures/${e}.png`)))]),h=Vt(),g=m.map(e=>(e.colorSpace=o,e.wrapS=e.wrapT=Ae,e.anisotropy=8,e)),v=g.map(e=>{let t=e.clone();return t.colorSpace=``,t.needsUpdate=!0,t}),y=new Set;for(let e of[d.scene,f.scene,...p.map(e=>e.scene)])e.traverse(e=>{if(Wt(e)){e.receiveShadow=!0;for(let t of Array.isArray(e.material)?e.material:[e.material]){if(!Kt(t)||y.has(t))continue;y.add(t),t.envMapIntensity=.25;let e=t.name;/WarmGlass/i.test(e)?(t.color.set(`#6b391d`),t.emissive.set(`#ff9b43`),t.emissiveIntensity=1.05,t.roughness=.35):/Recess|Shadow|DarkStone/i.test(e)?(t.normalMap=null,t.map=g[0],t.bumpMap=v[0],t.bumpScale=.055):/Stone|limestone/i.test(e)?(t.normalMap=null,t.map=g[0],t.bumpMap=v[0],t.bumpScale=.095,t.roughness=.88,t.color.lerp(new r(`#c1b9a8`),.48)):/Oak|Wood|walnut/i.test(e)?(t.normalMap=null,t.map=g[1],t.bumpMap=v[1],t.bumpScale=.045,t.roughness=.82,t.color.lerp(new r(`#aea094`),.58)):/Plaster/i.test(e)?(t.normalMap=null,t.map=g[2],t.bumpMap=v[2],t.bumpScale=.035,t.roughness=.94,t.color.lerp(new r(`#d0bbaa`),.44)):/Slate|RoofTile/i.test(e)?(t.normalMap=null,t.map=h.slate,t.bumpMap=h.slate,t.bumpScale=.045,t.roughness=.66,t.color.set(`#3b5266`)):/Linen|Canvas|Teal/i.test(e)&&(t.normalMap=null,t.map=h.cloth,t.bumpMap=h.cloth,t.bumpScale=.012,t.roughness=.94),/Leaves|Flowers/i.test(e)&&(t.side=2,t.roughness=.86),t.onBeforeCompile=e=>{e.fragmentShader=e.fragmentShader.replace(`#include <normal_fragment_maps>`,`
          vec3 stableSurfaceNormal=normal;
          #include <normal_fragment_maps>
          if(!(dot(normal,normal)>0.5))normal=stableSurfaceNormal;
        `)},t.customProgramCacheKey=()=>`city-stable-normal-v1`,t.needsUpdate=!0}}});d.scene.updateMatrixWorld(!0),d.scene.traverse(e=>{if(!Wt(e))return;e.castShadow=!/StoneRecess|Flowers/.test(e.name);let t=e.geometry.clone().applyMatrix4(e.matrixWorld),n=t.getAttribute(`position`);for(let e=0;e<n.count;e++){let t=Ut(n.getX(e),n.getZ(e));n.setXYZ(e,t.x,n.getY(e),t.z)}t.computeVertexNormals(),/Stone|Approach/i.test(e.name)&&Ht(t,.25),t.applyMatrix4(e.matrixWorld.clone().invert()),t.computeBoundingBox(),t.computeBoundingSphere(),e.geometry.dispose(),e.geometry=t}),n.add(d.scene);let b=new ce(1,1,1),x=new K({color:`#9d998f`,map:g[0],bumpMap:v[0],bumpScale:.08,roughness:.92}),S=[];function C(e,t,r){e.updateMatrixWorld(!0);let i=new De,a=new z,o=new ue().setFromObject(e),s=o.getSize(new E),c=o.getCenter(new E);for(let e of t){let t=new E(c.x*e.scale,0,c.z*e.scale).applyAxisAngle(new E(0,1,0),e.angle),n=e.y-.01,r=-5.35;i.position.set(e.x+t.x,(n+r)/2,e.z+t.z),i.rotation.set(0,e.angle,0),i.scale.set(s.x*e.scale,n-r,s.z*e.scale),i.updateMatrix();let a=b.clone().applyMatrix4(i.matrix);Ht(a,.25),S.push(a)}e.traverse(e=>{if(!Wt(e))return;let o=new T(e.geometry,e.material,t.length);o.name=r,o.castShadow=!0,o.receiveShadow=!0,t.forEach((t,n)=>{i.position.set(t.x,t.y,t.z),i.rotation.set(0,t.angle,0),i.scale.setScalar(t.scale),i.updateMatrix(),a.multiplyMatrices(i.matrix,e.matrixWorld),o.setMatrixAt(n,a)}),o.computeBoundingSphere(),n.add(o)})}u.blocks.forEach((e,t)=>C(p[t].scene,e.placements,e.model)),C(f.scene,[u.palace],`monumental-palace`);let w=new H(ae(S,!1),x);w.name=`grounded-building-foundations`,w.receiveShadow=!0,w.castShadow=!0,w.geometry.computeBoundingSphere(),n.add(w),S.forEach(e=>e.dispose()),b.dispose(),n.userData={authoredWith:`Blender 5.2`,ready:!0,version:3,archetypes:u.blocks.length,buildings:u.blocks.reduce((e,t)=>e+t.placements.length,0),palace:u.palace,court:{width:q.width,depth:q.depth}},e.add(n);for(let[n,r,i,a,o]of[[4,5,-19,22,19],[16,5,20,24,22],[-24,4,13,16,18],[39,8,-20,34,32]]){let s=Ut(n,i),c=new t(`#ffad65`,a,o,1.6);c.position.set(s.x,r,s.z),c.name=Gt,e.add(c)}}function Jt(e){let t=new H(new me(780,680),new K({color:`#273c38`,roughness:1}));t.rotation.x=-Math.PI/2,t.position.y=-5.3,t.receiveShadow=!0,t.name=`terraced-valley`,e.add(t);let n=new K({color:`#173b4b`,roughness:.27,metalness:.6,envMapIntensity:.75});n.onBeforeCompile=e=>{e.uniforms.harbourTime={value:0},n.userData.shader=e,e.vertexShader=e.vertexShader.replace(`#include <common>`,`#include <common>
varying vec3 waterPosition;`).replace(`#include <worldpos_vertex>`,`#include <worldpos_vertex>
waterPosition=(modelMatrix*vec4(transformed,1.0)).xyz;`),e.fragmentShader=e.fragmentShader.replace(`#include <common>`,`#include <common>
varying vec3 waterPosition;uniform float harbourTime;`).replace(`#include <normal_fragment_maps>`,`#include <normal_fragment_maps>
        float w1=sin(waterPosition.x*2.2+waterPosition.z*1.7+harbourTime*.7);
        float w2=cos(waterPosition.x*.81-waterPosition.z*3.1-harbourTime*.43);
        normal=normalize(normal+vec3(w1*.10,w2*.075,0.0));`)};let r=new H(new me(134,220),n),i=Ut(76,95);r.rotation.x=-Math.PI/2,r.position.set(i.x,-2.6,i.z),r.name=`harbour-water`,e.add(r)}function Yt(e){if(e.getObjectByName(`EpicCity_TwilightSky`))return;let t=(e,t)=>{let n=W.degToRad(e),r=W.degToRad(t);return new E(Math.cos(r)*Math.cos(n),Math.sin(r),Math.cos(r)*Math.sin(n))},n=t(-25,25),i=t(25,20),a=new pe({name:`EpicCity_TwilightSkyMaterial`,side:1,depthTest:!1,depthWrite:!1,fog:!1,toneMapped:!0,uniforms:{uZenith:{value:new r(`#142b59`)},uMiddle:{value:new r(`#36648c`)},uHorizon:{value:new r(`#829aaa`)},uBelow:{value:new r(`#566e8a`)},uBlueDirection:{value:n},uAmberDirection:{value:i},uBlueRadius:{value:W.degToRad(5)},uAmberRadius:{value:W.degToRad(6.5)},uBlueTint:{value:new r(`#c3e8f2`)},uAmberTint:{value:new r(`#efb983`)}},vertexShader:`
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
    `}),o=new l(650,48,32),s=new H(o,a);s.name=`EpicCity_TwilightSky`,s.renderOrder=-1e4,s.frustumCulled=!1,s.castShadow=!1,s.receiveShadow=!1;let c=new E;s.onBeforeRender=(e,t,n)=>{n.getWorldPosition(c),s.position.copy(c),s.updateMatrixWorld(!0)},s.userData.dispose=()=>{s.removeFromParent(),o.dispose(),a.dispose()},e.add(s)}function Xt(e){let t=new U;t.name=`rift-arena`,e.add(t);let n=q.width/2,r=q.depth/2,i=q.goalWidth/2,a=q.width/34,s=q.depth/21;t.userData={theme:`twilight-royal-approach`,courtWidth:q.width,courtDepth:q.depth,goalWidth:q.goalWidth,area:q.width*q.depth,tallSceneryInnerX:n+10,tallSceneryInnerZ:r+10.5};let c=(e,t={})=>new K({color:e,roughness:.91,metalness:.02,...t}),l=c(14999251),u=c(15853526),d=c(7892576),p=c(6505267),m=c(9725249),h=c(3749691,{metalness:.5}),g=c(12558946,{metalness:.45,roughness:.65}),v=c(3767956,{side:2}),y=c(11029589,{side:2}),b=c(15058812);c(7374940);let x=new V({color:7981525}),S=new V({color:15114373}),C=c(11968633,{metalness:.25,roughness:.8}),w=new V({color:16032847}),T=new V({color:16770976}),E=c(15119979,{emissive:16760166,emissiveIntensity:.8,roughness:.4}),D=Vt(),O=new _().load(`./textures/weathered-limestone-v3.png`);O.colorSpace=o,O.wrapS=O.wrapT=Ae,O.anisotropy=8;let k=e=>{let t=e.clone();return t.colorSpace=``,t.needsUpdate=!0,t},j=(e,t,n,r)=>{e.map=t,e.bumpMap=k(t),e.bumpScale=r,e.userData.worldScale=n};for(let e of[l,u])j(e,O,.22,.045);for(let e of[p,m])j(e,D.wood,.42,.027);for(let e of[v,y])e.map=D.cloth,e.bumpMap=k(D.cloth),e.bumpScale=.012,e.roughness=.83;let M=new ce(1,1,1);new ee(1,1);function N(e,n,r,i,a,o=t){let s=new H(e,n);return s.position.set(r,i,a),s.receiveShadow=!0,s.castShadow=n instanceof K,o.add(s),s}function P(e,n,r,i,a,o,s,c=t){let l=N(M,s,e,n,r,c);return l.scale.set(i,a,o),l}function F(e,n,r,i,a,o,s,c=20,l=t){return N(new fe(i,a,o,Math.max(12,c)),s,e,n,r,l)}function te(e,t,n,r,i,a=0){let o=P(e,.016,t,n,.018,r,i);return o.rotation.y=a,o}function I(e,t,n,r,i,a=0,o=Math.PI*2){let s=N(new G(n-r/2,n+r/2,80,1,a,o),i,e,.031,t);return s.rotation.x=-Math.PI/2,s}function R(e,n,r,i,a,o,s=0,c=t){let l=new U;l.position.set(e,n,r),l.rotation.y=s,c.add(l);let u=new me(i,a,10,12),d=u.getAttribute(`position`);for(let e=0;e<d.count;e++){let t=(d.getX(e)+i/2)/i,n=(a/2-d.getY(e))/a;d.setXYZ(e,d.getX(e),-n*a+(n>.99?.26*(1-Math.abs(t-.5)*2):0),Math.sin(t*Math.PI*5+n*.8)*.048*n)}u.computeVertexNormals(),N(u,o,0,0,0,l),P(0,-a*.44,.055,i*.065,a*.88,.018,b,l);let f=N(new Oe(i*.18,6),b,0,-a*.4,.025,l);f.rotation.z=Math.PI/6,P(0,.045,0,i+.22,.09,.1,p,l)}function ne(e,n,r,i,a=t){let o=new U;o.position.set(e,n,r),o.scale.setScalar(i),a.add(o);let s=[new L(.36,0),new L(.43,.15),new L(.48,.55),new L(.44,.94),new L(.37,1.07)];N(new se(s,18),m,0,0,0,o),F(0,1.055,0,.365,.365,.04,p,18,o);for(let e of[.1,.26,.84,1.01]){let t=N(new je(e<.2||e>1?.395:.458,.025,5,20),h,0,e,0,o);t.rotation.x=Math.PI/2}}function re(e,n,r,i=t){let a=new U;a.position.set(e,n,r),i.add(a),P(0,0,0,.27,.4,.27,h,a),P(0,0,0,.225,.3,.285,E,a),P(0,0,0,.285,.3,.225,E,a);for(let e of[-.135,.135])for(let t of[-.135,.135])P(e,0,t,.035,.43,.035,h,a);F(0,.27,0,.04,.23,.18,h,4,a);let o=N(new je(.1,.018,4,14),h,0,.44,0,a);o.rotation.y=Math.PI/2}function ie(e,t){F(e,.18,t,.47,.55,.38,d,8),F(e,.75,t,.18,.26,1.1,h,8),F(e,1.38,t,.43,.22,.3,g,8);let n=N(new A(.28,.75,7),w,e,1.86,t);n.rotation.z=.13;let r=N(new A(.16,.54,6),T,e-.04,1.81,t+.03);r.rotation.z=-.12}Yt(e),Jt(e),P(0,-.95,0,q.width+22,1.5,q.depth+19,d),P(0,-.24,0,q.width+22.5,.24,q.depth+19.5,l),P(0,-.33,0,q.width+3.9,.56,q.depth+3.9,u),P(0,-.135,0,q.width+2.2,.14,q.depth+2.2,d);let ae=new _().load(`./textures/limestone-court-v2.png`);ae.wrapS=ae.wrapT=Ae,ae.repeat.set(6*a,4*s),ae.colorSpace=o,ae.anisotropy=8;let oe=N(new me(q.width,q.depth),c(11778756,{map:ae,bumpMap:k(ae),bumpScale:.12,roughness:.74,metalness:.04}),0,-.03,0);oe.rotation.x=-Math.PI/2,oe.name=`playable-stone-floor`,oe.castShadow=!1;for(let e of[-r-.6,r+.6])for(let t=0;t<q.width;t++)P(-n+.5+t,-.035,e,.96,.16,1,l);for(let e of[-n-.6,n+.6])for(let t=-r;t<=r;t++)P(e,-.035,t,1,.16,.96,u);for(let e of[-r+.18,r-.18])te(0,e,q.width-.15,.09,C);for(let e of[-6.2*a,6.2*a])te(e,0,q.depth-.4,.035,C,Math.PI/2);for(let e=-r+.8;e<=r-.8;e+=1.6)if(Math.abs(e)>3.8*s){let t=te(0,e,.13,.13,C);t.rotation.y=Math.PI/4}I(0,0,3.2*s,.09,C),I(0,0,2.98*s,.025,C),I(0,0,.93,.065,C);for(let e=0;e<8;e++){let t=e*Math.PI/4,n=3.45*s,r=te(Math.sin(t)*n,Math.cos(t)*n,.31,.31,C);r.rotation.y=t+Math.PI/4,te(Math.sin(t)*2.65*s,Math.cos(t)*2.65*s,.38,.065,C,Math.PI/2-t)}let z=te(0,0,.42,.42,b);z.rotation.y=Math.PI/4;for(let e of[-1,1]){let a=e<0?v:y,o=e<0?x:S;I(e*(n-.25),0,i+1.1,.075,o,e<0?-Math.PI/2:Math.PI/2,Math.PI).scale.x=.74;for(let t of[-r-.22,r+.22]){P(e*(n/2+.2),.2,t,n+.1,.46,.28,l),P(e*(n/2+.2),.43,t,n+.1,.035,.3,g);for(let r=.55;r<n;r+=1.2)P(e*r,.22,t,.025,.32,.287,d);te(e*(n/2-.05),t-Math.sign(t)*.4,n-.15,.1,o)}let s=r-i;for(let t of[-(r+i)/2,(r+i)/2])P(e*(n+.45),.2,t,.3,.46,s,l),P(e*(n+.45),.43,t,.32,.035,s,g);let c=new U;t.add(c),c.name=e<0?`azure-goal`:`ember-goal`,c.userData={goalPlane:e*n,opening:q.goalWidth};for(let t of[-i,i]){P(e*(n+.22),1.14,t,.23,2.35,.23,u,c);for(let r of[.3,.9,1.5,2.1])P(e*(n+.22),r,t,.265,.1,.265,l,c);P(e*(n+.07),1.18,t,.05,2.25,.1,o,c)}P(e*(n+.22),2.33,0,.23,.18,q.goalWidth+.22,u,c),P(e*(n+.08),2.33,0,.055,.07,q.goalWidth+.2,g,c);for(let t of[-i,i])P(e*(n+.22),2.48,t,.31,.18,.35,l,c);P(e*(n+1),-.04,0,1.7,.04,q.goalWidth-.02,a,c),R(e*(n+1.9),3.7,i+1.05,1.2,1.25,a,e<0?Math.PI/2:-Math.PI/2,c),F(e*(n+1.9),1.84,i+1.05,.06,.08,3.78,h,12,c),F(e*(n+1.9),.1,i+1.05,.22,.27,.24,d,12,c);let p=[];for(let t=-i;t<=i;t+=.47)p.push(e*(n+1.78),.1,t,e*(n+1.78),2.23,t);for(let t=.2;t<2.3;t+=.35)p.push(e*(n+1.78),t,-i,e*(n+1.78),t,i);let m=new we;m.setAttribute(`position`,new f(p,3)),c.add(new de(m,new xe({color:12167038,transparent:!0,opacity:.4})));for(let t of[-i-1.8,i+1.8])ie(e*(n+2.4),t)}for(let e of[-1,1]){for(let t of[-19,-5,17]){let{x:n,z:r}=Ut(t,e*17.6);P(n,.2,r,3.4,.55,1.2,d),P(n,.52,r,3.6,.12,1.4,l)}for(let[t,n]of[[-23,.9],[-21,.68],[10,.87],[25,1.1]]){let{x:r,z:i}=Ut(t,e*18.2);ne(r,-.05,i,n),n>.85&&re(r,n*1.08+.15,i)}for(let t of[-22,22]){let{x:n,z:r}=Ut(t,e*16.5);F(n,1.7,r,.055,.075,3.5,h,10),R(n,3.35,r,1,1.7,n<0?v:y,e<0?0:Math.PI)}}return Zt(t),qt(e)}function Zt(e){e.updateWorldMatrix(!0,!0);let t=e.matrixWorld.clone().invert(),n=new Map;e.traverse(e=>{if(!(e instanceof H)||e instanceof T||Array.isArray(e.material)||e.material.transparent)return;let t=`${e.material.uuid}:${e.castShadow}:${e.receiveShadow}:${e.renderOrder}:${e.layers.mask}`,r=n.get(t)||[];r.push(e),n.set(t,r)});let r=new Set;for(let i of n.values()){if(i.length<2)continue;let n=i.map(e=>{let n=e.geometry.index?e.geometry.toNonIndexed():e.geometry.clone();return n.applyMatrix4(new z().multiplyMatrices(t,e.matrixWorld)),e.material.userData.worldScale&&Ht(n,e.material.userData.worldScale),n.clearGroups(),n}),a=ae(n,!1);if(n.forEach(e=>e.dispose()),!a)continue;a.computeBoundingBox(),a.computeBoundingSphere();let o=i[0],s=new H(a,o.material);s.name=`arena-batch`,s.castShadow=o.castShadow,s.receiveShadow=o.receiveShadow,s.renderOrder=o.renderOrder,s.layers.mask=o.layers.mask,e.add(s);for(let e of i)r.add(e.geometry),e.removeFromParent()}e.traverse(e=>{e instanceof H&&r.delete(e.geometry)}),r.forEach(e=>e.dispose())}var Qt=Be.colosseum;function $t(e){return()=>(e=Math.imul(e,1664525)+1013904223>>>0,e/4294967296)}function en(){let e=document.createElement(`canvas`);e.width=e.height=1024;let t=e.getContext(`2d`),n=$t(4815);t.fillStyle=`#8f7456`,t.fillRect(0,0,1024,1024);for(let e=0;e<700;e++){let r=n()*1024,i=n()*1024,a=8+n()*80;for(let n of[-1024,0,1024])for(let o of[-1024,0,1024]){let s=r+n,c=i+o;if(s+a<0||c+a<0||s-a>1024||c-a>1024)continue;let l=t.createRadialGradient(s,c,0,s,c,a);l.addColorStop(0,e%2?`#d4b78e28`:`#392e2928`),l.addColorStop(1,`#00000000`),t.fillStyle=l,t.fillRect(s-a,c-a,a*2,a*2)}}for(let e=0;e<62e3;e++){let r=n()*1024,i=n()*1024,a=.35+n()*1.4;t.fillStyle=e%3==0?`#dfc9a13b`:`#342b292b`,t.fillRect(r,i,a,a*.7)}for(let e=0;e<1600;e++){let e=n()*1024,r=n()*1024,i=.7+n()*2;t.fillStyle=`#4c423d50`,t.beginPath(),t.ellipse(e,r,i*1.5,i,.6,0,Math.PI*2),t.fill(),t.fillStyle=`#b5a18b65`,t.fillRect(e-i,r-i*.4,i*2,.7)}let r=new ie(e);return r.colorSpace=o,r.wrapS=r.wrapT=Ae,r.repeat.set(6,6),r.anisotropy=8,r.name=`Colosseum packed earth`,r}function tn(e,t,n,r=.5){let i=new we().setFromPoints(t);e.add(new ve(i,new xe({color:n,transparent:!0,opacity:r,depthWrite:!1})))}function nn(e){let t=$t(65123),n=[],i=[4609910,7552059,7823433,10127200,3755078,11182225,5850724,3359059],a=(e,t)=>Math.abs(Math.atan2(Math.sin(e-t),Math.cos(e-t)));for(let e=0;e<8;e++){let r=34.48+e*1.86,o=11+e*1.22+.46,s=Math.floor(2*Math.PI*r/1.05);for(let e=0;e<s;e++){let c=(e+.5)*Math.PI*2/s;a(c,Math.round(c/(Math.PI/6))*Math.PI/6)*r<1.08||r>=39.2&&(a(c,-Math.PI/2)<16*Math.PI/180||a(c,Math.PI/2)<11*Math.PI/180)||r>=44.5&&a(c,59*Math.PI/180)<.075||t()<.14||n.push({x:Math.cos(c)*r,y:o,z:Math.sin(c)*r,angle:-c-Math.PI/2,color:i[Math.floor(t()*i.length)],size:.88+t()*.24})}}let o=new T(new fe(.21,.28,.66,7),new K({roughness:1}),n.length),s=new T(new l(.18,7,5),new K({roughness:1}),n.length),c=new T(new fe(.075,.085,.53,5),new K({roughness:1}),n.length*2),u=new De,d=new r;n.forEach((e,n)=>{u.position.set(e.x,e.y+.32*e.size,e.z),u.rotation.set(0,e.angle,0),u.scale.set(e.size,e.size,e.size),u.updateMatrix(),o.setMatrixAt(n,u.matrix),o.setColorAt(n,d.setHex(e.color)),u.position.y=e.y+.86*e.size,u.updateMatrix(),s.setMatrixAt(n,u.matrix),s.setColorAt(n,d.setHSL(.07+t()*.04,.19+t()*.15,.37+t()*.28));for(let t=0;t<2;t++){let r=t?1:-1,i=n%9==0;u.position.set(e.x+Math.cos(e.angle)*r*.26,e.y+(i?.72:.3),e.z-Math.sin(e.angle)*r*.26),u.rotation.set(i?.4:-.6,e.angle,r*(i?.5:.12)),u.updateMatrix(),c.setMatrixAt(n*2+t,u.matrix),c.setColorAt(n*2+t,d.setHex(e.color))}}),o.name=`Colosseum audience clothing`,s.name=`Colosseum audience faces`,c.name=`Colosseum audience arms`;for(let t of[o,s,c])t.receiveShadow=!0,t.castShadow=!1,t.computeBoundingSphere(),e.add(t);e.userData.spectators=n.length}async function rn(e){Yt(e);let n=new U;n.name=`rift-arena`,n.userData={mapId:`colosseum`,radius:Qt.radius,area:Qt.area},e.add(n);let r=en(),i=new H(new Oe(Qt.radius+2,192),new K({map:r,bumpMap:r,bumpScale:.065,roughness:.98,color:`#c4b4a0`}));i.name=`Colosseum circular soil`,i.rotation.x=-Math.PI/2,i.position.y=-.035,i.receiveShadow=!0,n.add(i);let a=new V({color:`#d9cab1`,transparent:!0,opacity:.29,side:2,depthWrite:!1});for(let[e,t]of[[5,.065],[Qt.radius-1.4,.07]]){let r=new H(new G(e-t,e,192),a);r.rotation.x=-Math.PI/2,r.position.y=.003,n.add(r)}let o=new H(new Oe(.3,24),a);o.rotation.x=-Math.PI/2,o.position.y=.004,n.add(o),tn(n,[new E(0,.005,-Qt.radius+1.4),new E(0,.005,Qt.radius-1.4)],`#dac9a8`,.28);let s=[];for(let e of[-1,1]){let r=e<0?`#76caff`:`#ee9565`,i=e*Qt.goalX,o=new U;o.name=e<0?`Azure scoring gate`:`Ember scoring gate`,o.position.x=e*(Qt.radius+5.7),s.push(o);let c=new H(new ce(.3,8.1,15.1),new K({color:`#282b2a`,roughness:.94}));c.position.y=4,o.add(c);let l=new K({color:`#434847`,metalness:.55,roughness:.67});for(let t=-7;t<=7;t+=.7){let n=new H(new ce(.25,7.8,.09),l);n.position.set(-e*.28,3.9,t),o.add(n)}for(let t of[1,3,5,7]){let n=new H(new ce(.32,.13,14.8),l);n.position.set(-e*.3,t,0),o.add(n)}let u=new H(new fe(1.05,1.05,.12,8),new K({color:r,roughness:.72,emissive:r,emissiveIntensity:.12}));u.rotation.z=Math.PI/2,u.position.set(-e*.5,4.1,0),o.add(u),n.add(o);let d=new H(new me(.14,Qt.goalWidth),new V({color:r,transparent:!0,opacity:.65,depthWrite:!1}));d.rotation.x=-Math.PI/2,d.position.set(i,.018,0),n.add(d);for(let a of[-Qt.goalWidth/2,Qt.goalWidth/2]){let o=new H(new j(.24),new K({color:r,emissive:r,emissiveIntensity:1.3,roughness:.32}));o.position.set(i,2.3,a),n.add(o);let s=new t(r,12,6,2);s.position.set(i-e*.8,2.5,a),n.add(s)}let f=new H(new G(3.9,3.96,64,1,-Math.PI/2,Math.PI),a);f.rotation.x=-Math.PI/2,f.rotation.z=e<0?0:Math.PI,f.position.set(i,.012,0),n.add(f)}for(let e of s)Zt(e);let c=await new he().loadAsync(`./models/maps/royal-colosseum-v1.glb`);c.scene.name=`Blender Colosseum`,c.scene.traverse(e=>{if(e instanceof H){e.castShadow=!0,e.receiveShadow=!0;for(let t of Array.isArray(e.material)?e.material:[e.material])t instanceof K&&t.map&&(t.map.anisotropy=8)}}),n.add(c.scene),nn(n)}var an=new E;function on(e,t,n,r,i,a){let o=2*Math.PI*i/4,s=Math.max(a-2*i,0),c=Math.PI/4;an.copy(t),an[r]=0,an.normalize();let l=.5*o/(o+s),u=1-an.angleTo(e)/c;return Math.sign(an[n])===1?u*l:s/(o+s)+l+l*(1-u)}var sn=class e extends ce{constructor(e=1,t=1,n=1,r=2,i=.1){let a=r*2+1;if(i=Math.min(e/2,t/2,n/2,i),super(1,1,1,a,a,a),this.type=`RoundedBoxGeometry`,this.parameters={width:e,height:t,depth:n,segments:r,radius:i},a===1)return;let o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;let s=new E,c=new E,l=new E(e,t,n).divideScalar(2).subScalar(i),u=this.attributes.position.array,d=this.attributes.normal.array,f=this.attributes.uv.array,p=u.length/6,m=new E,h=.5/a;for(let r=0,a=0;r<u.length;r+=3,a+=2)switch(s.fromArray(u,r),c.copy(s),c.x-=Math.sign(c.x)*h,c.y-=Math.sign(c.y)*h,c.z-=Math.sign(c.z)*h,c.normalize(),u[r+0]=l.x*Math.sign(s.x)+c.x*i,u[r+1]=l.y*Math.sign(s.y)+c.y*i,u[r+2]=l.z*Math.sign(s.z)+c.z*i,d[r+0]=c.x,d[r+1]=c.y,d[r+2]=c.z,Math.floor(r/p)){case 0:m.set(1,0,0),f[a+0]=on(m,c,`z`,`y`,i,n),f[a+1]=1-on(m,c,`y`,`z`,i,t);break;case 1:m.set(-1,0,0),f[a+0]=1-on(m,c,`z`,`y`,i,n),f[a+1]=1-on(m,c,`y`,`z`,i,t);break;case 2:m.set(0,1,0),f[a+0]=1-on(m,c,`x`,`z`,i,e),f[a+1]=on(m,c,`z`,`x`,i,n);break;case 3:m.set(0,-1,0),f[a+0]=1-on(m,c,`x`,`z`,i,e),f[a+1]=1-on(m,c,`z`,`x`,i,n);break;case 4:m.set(0,0,1),f[a+0]=1-on(m,c,`x`,`y`,i,e),f[a+1]=1-on(m,c,`y`,`x`,i,t);break;case 5:m.set(0,0,-1),f[a+0]=on(m,c,`x`,`y`,i,e),f[a+1]=1-on(m,c,`y`,`x`,i,t)}}static fromJSON(t){return new e(t.width,t.height,t.depth,t.segments,t.radius)}},J={barrier:{radius:1.05,bottom:.12,top:2.12,columns:9,rows:5},cyber:{line:.03,node:.036,rim:.05,scan:{height:.22,period:1.15},twinkle:{rate:10,fade:3.5}},glow:{base:.9,flash:.5,low:.3},palette:{line:new r(`#34e6ff`),lineEdge:new r(`#042b40`),node:new r(`#eaffff`),rim:new r(`#86f7ff`),fill:new r(`#062d46`),fillGlow:new r(`#1f9fd6`),scan:new r(`#a8fbff`)},shards:{count:14,speed:3.2,up:2.2,gravity:5.5},smoke:{puffs:7,radius:.27,grow:2.1,height:[.35,1.6],color:`#ece6f2`,opacity:.75},dust:{puffs:5,radius:.24,grow:2.2,height:[.05,.35],color:`#d8c3a0`,opacity:.6},ghost:{color:`#bfe3ff`,opacity:.55},roll:{turns:1,center:1.12,tuck:.35},step:{lean:.38,hop:.16}},cn=e=>Object.assign(new V({vertexColors:!0,transparent:!0,depthWrite:!1,side:2,blending:2,opacity:J.glow.base}),{name:e});function ln(e,t,n,r,i,a,o,s){e.push(n.x,n.y,n.z,i.x,i.y,i.z,o.x,o.y,o.z),t.push(r.r,r.g,r.b,a.r,a.g,a.b,s.r,s.g,s.b)}function un(e,t,n,r,i,a){for(let o=0;o<4;o++)ln(e,t,n,i,r[o],a,r[(o+1)%4],a)}function dn(e,t,n,r,i,a,o,s){let c=i.clone().multiplyScalar(a/2),l=n.clone().sub(c),u=n.clone().add(c),d=r.clone().sub(c),f=r.clone().add(c);ln(e,t,l,s,d,s,r,o),ln(e,t,l,s,r,o,n,o),ln(e,t,n,o,r,o,f,s),ln(e,t,n,o,f,s,u,s)}var fn=new E(0,1,0),pn=e=>new E(Math.cos(e),0,-Math.sin(e));function mn(e,t,n){let r=new we;r.setAttribute(`position`,new f(e,3)),r.setAttribute(`color`,new f(t,3));let i=new H(r,cn(n));return i.name=n,i.frustumCulled=!1,i}var hn=(e,t,n)=>new E(Math.sin(e)*n,t,Math.cos(e)*n);function gn(){let e=J.barrier,t=J.cyber,n=J.palette,i=Math.PI/e.columns,a=(e.top-e.bottom)/e.rows,o=e.columns*2,s=e.rows*2,c=e=>-Math.PI/2+e*i/2,l=(t,n)=>hn(c(t),e.bottom+n*a/2,e.radius),u=[],d=[],f=[];for(let e=0;e<=s;e++)for(let t=0;t<=o;t++){if((t+e)%2)continue;let r=[[t-1,e],[t,e+1],[t+1,e],[t,e-1]].map(([e,t])=>l(Math.min(o,Math.max(0,e)),Math.min(s,Math.max(0,t))));f.push(u.length/3),un(u,d,l(t,e),r,n.fill,n.fill)}for(let e of[1,-1])for(let r=-s-1;r<=o+s+1;r++){if(Math.abs(r)%2!=1)continue;let i=[];for(let t=0;t<=o;t++){let n=e>0?t-r:r-t;n>=0&&n<=s&&i.push([t,n])}for(let e=1;e<i.length;e++)dn(u,d,l(...i[e-1]),l(...i[e]),fn,t.line,n.line,n.lineEdge)}for(let e of[0,s])for(let r=0;r<o;r++)dn(u,d,l(r,e),l(r+1,e),fn,t.rim,n.rim,n.lineEdge);for(let e of[0,o])for(let r=0;r<s;r++)dn(u,d,l(e,r),l(e,r+1),pn(c(e)),t.rim,n.rim,n.lineEdge);for(let e=0;e<=s;e++)for(let r=0;r<=o;r++){if((r+e)%2==0)continue;let i=l(r,e),a=pn(c(r)),o=t.node;un(u,d,i,[i.clone().addScaledVector(a,-o),i.clone().addScaledVector(fn,o),i.clone().addScaledVector(a,o),i.clone().addScaledVector(fn,-o)],n.node,n.line)}let p=mn(u,d,`guard-barrier`);p.renderOrder=3,p.visible=!1,p.userData.fills=f,p.userData.twinkle=new Float32Array(f.length);let m=[],h=[],g=new r(0,0,0),_=t.scan.height,v=e.radius*1.004;for(let e=0;e<36;e++){let t=-Math.PI/2+Math.PI*e/36,r=t+Math.PI/36;for(let[e,i,a,o]of[[-_/2,g,0,n.scan],[0,n.scan,_/2,g]]){let n=hn(t,e,v),s=hn(r,e,v),c=hn(r,a,v),l=hn(t,a,v);ln(m,h,n,i,s,i,c,o),ln(m,h,n,i,c,o,l,o)}}let y=mn(m,h,`guard-scan`);return y.renderOrder=4,p.add(y),p}function _n(e,t,n,r,i,a,o,s,c){if(e.visible=t&&s>.015,!e.visible){e.userData.time=void 0;return}let l=J.barrier,u=J.cyber,d=J.glow,f=J.palette;e.position.set(n,0,r),e.rotation.y=i;let p=Math.max(0,Math.min(.1,c-(e.userData.time??c)));e.userData.time=c;let m=o<d.low&&Math.sin(c*53.1)+Math.sin(c*91.7)>.8?.2:1;e.material.opacity=Math.min(1,d.base+d.flash*a)*m*s;let h=e.userData.fills,g=e.userData.twinkle,_=e.geometry.getAttribute(`color`);Math.random()<u.twinkle.rate*p&&(g[Math.floor(Math.random()*g.length)]=1);for(let e=0;e<h.length;e++){g[e]=Math.max(0,g[e]-u.twinkle.fade*p);let t=Math.min(1,g[e]+a*.8),n=f.fill.r+(f.fillGlow.r-f.fill.r)*t,r=f.fill.g+(f.fillGlow.g-f.fill.g)*t,i=f.fill.b+(f.fillGlow.b-f.fill.b)*t;for(let t=h[e];t<h[e]+12;t++)_.setXYZ(t,n,r,i)}_.needsUpdate=!0;let v=e.children[0],y=c/u.scan.period%1;v.position.y=l.bottom+(l.top-l.bottom)*y,v.material.opacity=Math.min(1,(.75+.5*a)*Math.sin(Math.PI*y))*m*s}function vn(e){let t=J.shards,n=J.barrier,r=new U,i=wn(e);for(let e=0;e<t.count;e++){let e=(i()-.5)*Math.PI,a=n.bottom+i()*(n.top-n.bottom),o=.1+i()*.1,s=[],c=[];un(s,c,new E,[new E(-o,0,0),new E(0,o*1.4,0),new E(o,0,0),new E(0,-o*1.4,0)],J.palette.node,J.palette.line);let l=new we;l.setAttribute(`position`,new f(s,3)),l.setAttribute(`color`,new f(c,3));let u=new H(l,cn(`guard-shard`)),d=hn(e,a,n.radius),p=new E(Math.sin(e),0,Math.cos(e));u.userData.start=d,u.userData.velocity=p.multiplyScalar(t.speed*(.6+.6*i())).setY(t.up*i()),u.userData.spin=new E(i()*9,i()*9,i()*9),u.frustumCulled=!1,r.add(u)}return r.name=`guard-shards`,r.userData.noFade=!0,r}function yn(e,t,n,r,i,a){e.position.set(t,0,n),e.rotation.y=r;let o=J.shards,s=i*a;for(let t of e.children){let{start:e,velocity:n,spin:r}=t.userData;t.position.set(e.x+n.x*s,Math.max(.02,e.y+n.y*s-o.gravity*s*s/2),e.z+n.z*s),t.rotation.set(r.x*s,r.y*s,r.z*s),t.material.opacity=(1-i)*.9}}function bn(e,t){let n=J[e],r=new U,i=wn(t);for(let t=0;t<n.puffs;t++){let t=new H(new Oe(n.radius,14),Object.assign(new V({color:n.color,transparent:!0,depthWrite:!1,side:2,opacity:n.opacity}),{name:`dodge-${e}`})),a=i()*Math.PI*2,o=.25+i()*.45;t.userData.offset=new E(Math.cos(a)*o,n.height[0]+i()*(n.height[1]-n.height[0]),Math.sin(a)*o),t.userData.scale=.7+i()*.6,t.frustumCulled=!1,r.add(t)}return r.name=e===`smoke`?`dodge-smoke`:`dodge-dust`,r.userData.noFade=!0,r}function xn(e,t,n,r,i,a){let o=J[t];e.position.set(n,0,r);for(let t of e.children){let{offset:e,scale:n}=t.userData;t.position.copy(e).multiplyScalar(1+i*.8),t.position.y=e.y+i*.35,t.quaternion.copy(a.quaternion),t.scale.setScalar(n*(1+(o.grow-1)*Math.sqrt(i))),t.material.opacity=o.opacity*(1-i)*(1-i)}}function Sn(e){e.updateWorldMatrix(!0,!0);let t=Ce(e);e.matrixWorld.decompose(t.position,t.quaternion,t.scale);let n=Object.assign(new V({color:J.ghost.color,transparent:!0,depthWrite:!1,opacity:J.ghost.opacity}),{name:`dodge-ghost`});return t.traverse(e=>{let t=e;t.isMesh&&(t.material=n,t.castShadow=!1,t.receiveShadow=!1,t.frustumCulled=!1,t.userData.ghost=!0)}),t.name=`dodge-ghost`,t.userData.ghostMaterial=n,t.userData.noFade=!0,t}function Cn(e,t){e.userData.ghostMaterial.opacity=J.ghost.opacity*(1-t)}function wn(e){let t=e*2654435761>>>0||1;return()=>(t^=t<<13,t>>>=0,t^=t>>>17,t^=t<<5,t>>>=0,t/4294967296)}var Tn={tint:`#ffd45a`,bright:1.55,opacity:.95,relief:.8,maria:.36,terrain:.24,haloWidth:11,halo:.8,seed:23.9},En=e=>e-Math.floor(e);function Dn(e,t,n){let r=En(e*.1031),i=En(t*.1031),a=En(n*.1031),o=r*(i+33.33)+i*(a+33.33)+a*(r+33.33);return r+=o,i+=o,a+=o,En((r+i)*a)}function On(e,t,n){let r=Math.floor(e),i=Math.floor(t),a=Math.floor(n),o=e-r,s=t-i,c=n-a;o=o*o*(3-2*o),s=s*s*(3-2*s),c=c*c*(3-2*c);let l=(e,t,n)=>Dn(r+e,i+t,a+n),u=(e,t,n)=>e+(t-e)*n;return u(u(u(l(0,0,0),l(1,0,0),o),u(l(0,1,0),l(1,1,0),o),s),u(u(l(0,0,1),l(1,0,1),o),u(l(0,1,1),l(1,1,1),o),s),c)}function kn(e,t,n){let r=0,i=.52;for(let a=0;a<4;a++)r+=i*On(e,t,n),e=e*2.07+17.1,t=t*2.07+9.2,n=n*2.07+3.7,i*=.49;return r}var An=(e,t,n)=>{let r=Math.min(1,Math.max(0,(n-e)/(t-e)));return r*r*(3-2*r)},jn;function Mn(){if(jn)return jn;let e=new Uint8Array(131072),t=Tn.seed,n=t*.73,r=t*.17,i=t*.43,a=Array.from({length:16},(e,n)=>{let r=n+t,i=Dn(r,1.7,5.2),a=Dn(r,8.3,2.4),o=Dn(r,3.1,9.8),s=i*2-1,c=a*2-1,l=.17+o*.83,u=Math.hypot(s,c,l);return{x:s/u,y:c/u,z:l/u,radius:.055+.185*o*o}});for(let t=0;t<128;t++)for(let o=0;o<256;o++){let s=(o+.5)/256*2-1,c=(t+.5)/128,l=s*s+c*c,u=(t*256+o)*4,d=.8,f=0;if(l<=1.02){let e=Math.sqrt(Math.max(0,1-l)),t=An(.34,.69,kn(s*4.4+n,c*4.4+r,e*4.4+i)),o=kn(s*19+n+7.5,c*19+r+7.5,e*19+i+7.5);d=.9-t*Tn.maria+(o-.48)*Tn.terrain;for(let t of a){let n=Math.hypot(s-t.x,c-t.y,e-t.z)/t.radius,r=(n-.94)/.13;f+=Math.exp(-r*r)*.052-Math.exp(-((n/.7)**4))*.078}}e[u]=Math.round(Math.min(1,Math.max(0,d))*255),e[u+1]=Math.round(Math.min(1,Math.max(0,.5+f*2))*255),e[u+2]=0,e[u+3]=255}return jn=new y(e,256,128,v,N),jn.name=`samurai-iai-moon-surface`,jn.colorSpace=``,jn.wrapS=jn.wrapT=k,jn.magFilter=re,jn.minFilter=ye,jn.generateMipmaps=!0,jn.needsUpdate=!0,jn}function Nn(){return new pe({name:`samurai-iai-moon`,transparent:!0,depthWrite:!1,side:2,fog:!1,uniforms:{uSurface:{value:Mn()},uRadius:{value:1},uTerminator:{value:.165},uTint:{value:new r(Tn.tint)},uBright:{value:Tn.bright},uOpacity:{value:Tn.opacity},uRelief:{value:Tn.relief},uHaloWidth:{value:Tn.haloWidth},uHalo:{value:Tn.halo},uFront:{value:0},uFade:{value:1},uLead:{value:0}},vertexShader:`
      uniform float uRadius;
      varying vec2 vDisk;
      void main() {
        // 月の円の中の位置（左右 x：左が正、前 y）。月の半径を 1 とする。
        vDisk = vec2(position.x, position.z) / uRadius;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,fragmentShader:`
      precision highp float;
      uniform sampler2D uSurface;
      uniform vec3 uTint;
      uniform float uTerminator, uBright, uOpacity, uRelief, uHaloWidth, uHalo, uFront, uFade, uLead;
      varying vec2 vDisk;
      void main() {
        float r = length(vDisk);
        // 微分は、どの画素でも同じ所で取る（途中で抜けない）。
        float aa = max(fwidth(r), 0.002);
        // 描き進め：左の真横 0 → 右の真横 1。描いた所だけ見せ、描いた直後ほど明るくする。
        float arc = 0.5 - atan(vDisk.x, vDisk.y) / 3.14159265;
        float shown = 1.0 - smoothstep(uFront - 0.006, uFront + 0.006, arc);
        float lead = uLead * exp(-max(uFront - arc, 0.0) / 0.07);
        // 横（少し後ろ）から照らす：明暗の境目が、正面で uTerminator の楕円になる向き。
        float sinB = sqrt(max(0.0, 1.0 - uTerminator * uTerminator));
        float z = sqrt(max(0.0, 1.0 - r * r));
        float lit = vDisk.y * sinB - z * uTerminator;
        vec2 surface = texture2D(uSurface, vec2(vDisk.x * 0.5 + 0.5, clamp(vDisk.y, 0.0, 1.0))).rg;
        float nearTerminator = 1.0 - smoothstep(0.02, 0.45, lit);
        float albedo = surface.r + (surface.g - 0.5) * uRelief * (1.0 + 2.5 * nearTerminator);
        float shade = 0.4 + 0.6 * sqrt(max(lit, 0.0));
        vec3 moon = uTint * albedo * shade * uBright * (1.0 + lead);
        float moonAlpha = uOpacity * smoothstep(-0.01, 0.15, lit);
        // 月のかさ：外の縁の外へ、照らされた側ほど濃く。
        float limbLit = max(vDisk.y / max(r, 0.0001) * sinB, 0.0);
        float halo = exp(-max(r - 1.0, 0.0) * uHaloWidth) * limbLit * uHalo;
        float inside = 1.0 - smoothstep(1.0 - aa, 1.0 + aa, r);
        vec3 colour = mix(uTint * uBright * (1.0 + lead), moon, inside);
        float alpha = mix(halo, moonAlpha, inside) * shown * uFade;
        gl_FragColor = vec4(colour, alpha);
        #include <tonemapping_fragment>
        #include <colorspace_fragment>
      }
    `})}var Pn={radius:tt+q.puckRadius,inner:.7,halo:1.12,columns:64,baseY:1.15,tilt:.26,lead:1.2,fade:.35,burst:.1},Fn,In,Ln=e=>{let t=W.clamp(e,0,1);return t*t*(3-2*t)};function Rn(){return In??=new he().loadAsync(`./models/effects/samurai-iai-v1.glb`).then(e=>{if(!e.scene.getObjectByName(`Iai_Tsuba_Flash_Horizontal`))throw Error(`侍の鯉口の光を確認できませんでした`);Fn=e.scene})}function zn(){let e=Pn.columns,t=Pn.radius,n=new Float32Array((e+1)*2*3),r=[];for(let r=0;r<=e;r++){let i=(.5-r/e)*Math.PI,a=Math.sin(i),o=Math.cos(i);[1/Math.sqrt(a*a/(t*t)+o*o/(Pn.inner*Pn.inner))*.9,t*Pn.halo].forEach((e,t)=>{let i=o*e;n.set([a*e,Pn.baseY+Pn.tilt*i,i],(r*2+t)*3)})}for(let t=0;t<e;t++){let e=t*2,n=e+2;r.push(e,n,e+1,e+1,n,n+1)}let i=new we;i.setAttribute(`position`,new R(n,3)),i.setIndex(r);let a=Nn();a.uniforms.uRadius.value=t,a.uniforms.uTerminator.value=Pn.inner/t;let o=new H(i,a);return o.name=`samurai-iai-crescent`,o.castShadow=!1,o.receiveShadow=!1,o.frustumCulled=!1,o.renderOrder=6,o.visible=!1,o.userData.samuraiVfx=!0,{mesh:o,front:0}}function Bn(){if(!Fn)throw Error(`侍の斬撃エフェクトの読み込みが完了していません`);let e=Fn.clone(!0);e.name=`samurai-iai-vfx`;let t=[],n=[];e.traverse(e=>{if(!(e instanceof H))return;if(e.userData.vfx_kind!==`flash`){n.push(e);return}let i=Array.isArray(e.material)?e.material[0]:e.material,a=new V({color:(i.color?.clone()??new r(`#fff0d1`)).multiplyScalar(Number(e.userData.vfx_gain)||2.4),transparent:!0,blending:2,depthWrite:!1,depthTest:!0,side:2,opacity:0,toneMapped:!1});a.name=`${e.name}_additive`,e.geometry=e.geometry.clone(),e.material=a,e.castShadow=!1,e.receiveShadow=!1,e.frustumCulled=!1,e.renderOrder=5,e.userData.samuraiVfx=!0,t.push({mesh:e,opacity:Number(e.userData.vfx_opacity)||1,position:e.position.clone(),scale:e.scale.clone()})});for(let e of n)e.removeFromParent();let i=zn();return e.add(i.mesh),e.userData.samuraiVfx={flashes:t,flashOrigin:t[0].position.clone(),crescent:i},e.visible=!1,e}function Vn(e,t,n){let{mesh:r}=e,i=r.material.uniforms;if(t===null||!Number.isFinite(t)||t<Ue)return e.front=0,r.visible=!1,r.scale.set(1,1,1),!1;if(n&&t<=He&&Number.isFinite(n.x)&&Number.isFinite(n.z)&&(n.x!==0||n.z!==0)){let t=Math.atan2(n.x,n.z),r=W.clamp(.5-t/Math.PI,0,1);e.front=Math.max(e.front,r)}let a=Ln((t-He)/Pn.fade),o=1-a;if(o<=0||e.front<=0)return r.visible=!1,r.scale.set(1,1,1),!1;let s=1+Pn.burst*a;return r.scale.set(s,1,s),i.uFront.value=e.front,i.uFade.value=o,i.uLead.value=Pn.lead*o,r.visible=!0,!0}function Hn(e,t,n,r){let i=e.userData.samuraiVfx;if(!i)return;let a=!1;for(let e of i.flashes){e.mesh.position.copy(e.position),e.mesh.scale.copy(e.scale);let r=0;if(t!==null&&Number.isFinite(t)){n&&Number.isFinite(n.x)&&Number.isFinite(n.y)&&Number.isFinite(n.z)&&e.mesh.position.add(n).sub(i.flashOrigin);let a=t-nt;r=Ln(a/.025)*(1-Ln((a-.04)/.08)),e.mesh.scale.multiplyScalar(.65+.55*Ln(a/.04))}e.mesh.material.opacity=e.opacity*r,e.mesh.visible=e.mesh.material.opacity>.002,a||=e.mesh.visible}a=Vn(i.crescent,t,r)||a,e.visible=a}var Un=(e=0,t=0,n=0)=>new E(e,t,n),Wn=W.clamp;function Gn(e){e.updateWorldMatrix(!0,!0);let t=t=>{let n=e.getObjectByName(t);if(!(n instanceof ge))throw Error(`Missing samurai footwork bone: ${t}`);return n},n=t(`root`),r=e.getWorldQuaternion(new B).invert(),i={};for(let n of[`R`,`L`]){let a=t(`foot_`+n),o=a.getWorldPosition(Un()),s=1/0;if(e.traverse(e=>{if(!(e instanceof x)||!(Array.isArray(e.material)?e.material:[e.material]).some(e=>e.name.includes(`Zori_Dark_Sole`)))return;let t=e.geometry.attributes.position,n=e.geometry.attributes.skinIndex,r=e.geometry.attributes.skinWeight,i=e.skeleton.bones.indexOf(a);if(!(!t||!n||!r||i<0))for(let a=0;a<t.count;a++){let o=!1;for(let e=0;e<4;e++)n.getComponent(a,e)===i&&r.getComponent(a,e)>.999&&(o=!0);o&&(s=Math.min(s,Un().fromBufferAttribute(t,a).applyMatrix4(e.matrixWorld).y))}}),!Number.isFinite(s))throw Error(`Missing samurai sole: `+n);i[n]={upper:t(`upperleg01_`+n),lower:t(`lowerleg01_`+n),foot:a,ankleRest:e.worldToLocal(o.clone()),footRest:r.clone().multiply(a.getWorldQuaternion(new B)),ankleClearance:o.y-s}}return{model:e,hips:n,hipRestPosition:n.position.clone(),legs:i,applied:!1,last:{load:0,release:0,rightError:0,leftError:0,hipOffset:[0,0,0]}}}function Kn(e){e.applied&&=(e.hips.position.copy(e.hipRestPosition),!1)}function qn(e,t){let n=e.parent.getWorldQuaternion(new B).invert();e.quaternion.copy(n.multiply(t)),e.updateWorldMatrix(!1,!0)}function Jn(e,t,n){let r=e.getWorldPosition(Un()),i=t.getWorldPosition(Un()).sub(r).normalize(),a=n.clone().sub(r).normalize();qn(e,new B().setFromUnitVectors(i,a).multiply(e.getWorldQuaternion(new B)))}function Yn(e,t,n,r){let i=e.legs[t],a=i.upper.getWorldPosition(Un()),o=i.lower.getWorldPosition(Un()),s=i.foot.getWorldPosition(Un()),c=a.distanceTo(o),l=o.distanceTo(s),u=n.clone().sub(a),d=Wn(u.length(),.01,c+l-5e-4);u.normalize();let f=Un(t===`R`?-.22:.22,0,1).applyQuaternion(r);f.addScaledVector(u,-f.dot(u)).normalize();let p=(c*c-l*l+d*d)/(2*d),m=a.clone().addScaledVector(u,p).addScaledVector(f,Math.sqrt(Math.max(0,c*c-p*p)));return Jn(i.upper,i.lower,m),Jn(i.lower,i.foot,n),qn(i.foot,r.clone().multiply(i.footRest)),i.foot.getWorldPosition(Un()).distanceTo(n)}function Xn(e,t){if(!t.x&&!t.y&&!t.z)return;let n=e.model.worldToLocal(e.hips.parent.localToWorld(e.hipRestPosition.clone())),r=e.model.localToWorld(n.add(t));e.hips.position.copy(e.hips.parent.worldToLocal(r)),e.hips.updateWorldMatrix(!1,!0),e.applied=!0}function Zn(e,t,n,r){if(r<=0)return;let i=Un(0,0,1).applyQuaternion(e.model.getWorldQuaternion(new B)),a=new B().setFromAxisAngle(Un(0,1,0),Math.atan2(i.x,i.z));for(let i of[`R`,`L`]){let o=e.legs[i],s=i===`R`?-1:1,c=e.model.worldToLocal(o.foot.getWorldPosition(Un())),l=o.ankleRest.clone();l.x=s*t;let u=e.model.localToWorld(c.lerp(l,r));u.y=o.ankleClearance,Yn(e,i,u,a.clone().multiply(new B().setFromAxisAngle(Un(0,1,0),s*n*r)))}e.applied=!0}function Qn(e,t,n,r,i=!1,a=!1){if(!r)return;t=Wn(t,0,1),n=Wn(n,0,1);let o=t*(1-n),s=o+n,c=Un(.15*o-.03*n,-.26*o-.145*n,-.12*o+.2*n),l=e.model.worldToLocal(e.hips.parent.localToWorld(e.hipRestPosition.clone())),u=e.model.localToWorld(l.add(c));e.hips.position.copy(e.hips.parent.worldToLocal(u)),e.hips.updateWorldMatrix(!1,!0);let d=Un(0,0,1).applyQuaternion(e.model.getWorldQuaternion(new B)),f=new B().setFromAxisAngle(Un(0,1,0),Math.atan2(d.x,d.z)),p=e.model.getWorldScale(Un()).y,m=e.legs.R.ankleRest.clone().add(Un(-.12*o-.1*n,0,.04*o+.47*n)),h=e.legs.L.ankleRest.clone().add(Un(.14*s,0,-.14*o-.08*n)),g=e.model.localToWorld(m),_=e.model.localToWorld(h);g.y=e.legs.R.ankleClearance+(a?0:.1*Math.sin(Math.PI*n)*p),_.y=e.legs.L.ankleClearance+(i?0:.045*Math.sin(Math.PI*t)*(1-n)*p),e.applied=!0,e.last={load:t,release:n,hipOffset:c.toArray(),rightError:Yn(e,`R`,g,f),leftError:Yn(e,`L`,_,f)}}var $n={asset:`models/characters/yuru-samurai-v1.glb`,scale:1.1,rigScale:.6,rigForward:.3,rigDown:.12,hipsFollow:1,bob:.6,twist:.6,lean:.35,palm:.05,step:1.3,stars:1.85},er=[`YuruBody`,`YuruHand_R`,`YuruHand_L`,`YuruFoot_R`,`YuruFoot_L`],tr,nr;function rr(){return nr??=new he().loadAsync(`./${$n.asset}`).then(e=>{for(let t of er)if(!e.scene.getObjectByName(t))throw Error(`ゆるキャラの侍のモデルを確認できませんでした`);tr=e.scene})}function ir(e){let t=e.name,n=(e,n={})=>Object.assign(new V({color:e,...n}),{name:t});if(t===`Yuru_Ink`)return n(197379);if(t===`Yuru_Line`)return n(197379,{side:0});if(t===`Yuru_Eye_White`)return n(16250871);if(t===`Yuru_Eye_Shine`)return n(16777215);if(t===`Yuru_EyeShadow`)return n(328453,{vertexColors:!0,transparent:!0,depthWrite:!1});let r=e.clone();return!t.startsWith(`SD_`)&&r instanceof K&&(r.vertexColors=!1),r}function ar(e,t,n,r,i){if(!tr)throw Error(`ゆるキャラの侍の読み込みが完了していません`);let a=e=>{for(let t=e;t;t=t.parent)if(n.includes(t))return!0;return!1};t.traverse(e=>{e.isMesh&&!a(e)&&gt(e)});let o=new Map,s=e=>{let t=o.get(e);return t||(t=ir(e),o.set(e,t),t instanceof K&&i.push({material:t,emissive:t.emissive.clone(),intensity:t.emissiveIntensity})),t},c=t=>{let n=tr.getObjectByName(t),r=n.clone(!0);return r.position.copy(n.position).multiplyScalar($n.scale),r.scale.setScalar($n.scale),r.traverse(e=>{let t=e;t.isMesh&&(t.material=Array.isArray(t.material)?t.material.map(s):s(t.material),t.castShadow=!0,t.receiveShadow=!0)}),e.add(r),r},l=c(`YuruBody`),u={R:c(`YuruHand_R`),L:c(`YuruHand_L`)},d={R:c(`YuruFoot_R`),L:c(`YuruFoot_L`)};e.updateWorldMatrix(!0,!0);let f=t=>e.worldToLocal(t.getWorldPosition(new E));return{body:l,hands:u,feet:d,footRest:{R:d.R.position.clone(),L:d.L.position.clone()},hipsRest:f(r.hips),rigFootRest:{R:f(r.foot.R),L:f(r.foot.L)}}}var or=new E,sr=new E,cr=new D,lr=new E(0,1,0),ur=new z;function dr(e,t,n,r){let i=$n;t.worldToLocal(n.hips.getWorldPosition(or)),e.body.position.set((or.x-e.hipsRest.x)*i.hipsFollow,(or.y-e.hipsRest.y)*i.bob,(or.z-e.hipsRest.z)*i.hipsFollow),cr.setFromRotationMatrix(r,`YXZ`),e.body.rotation.set(cr.x*i.lean,cr.y*i.twist,0,`YXZ`);for(let r of[`R`,`L`]){let a=t.worldToLocal(n.wrist[r].getWorldPosition(new E)),o=t.worldToLocal(n.elbow[r].getWorldPosition(new E)),s=a.clone().sub(o).normalize(),c=e.hands[r];c.position.copy(a).addScaledVector(s,i.palm);let l=r===`L`?s.clone():s.clone().negate(),u=lr.clone().addScaledVector(l,-lr.dot(l));u.lengthSq()<1e-4&&u.set(0,0,1),u.normalize(),c.quaternion.setFromRotationMatrix(ur.makeBasis(l,u,new E().crossVectors(l,u)))}for(let r of[`R`,`L`]){t.worldToLocal(n.foot[r].getWorldPosition(sr));let a=e.footRest[r],o=e.rigFootRest[r];e.feet[r].position.set(a.x+(sr.x-o.x)*i.step,a.y+Math.max(0,sr.y-o.y)*i.step,a.z+(sr.z-o.z)*i.step)}}var fr,pr,mr=()=>!!fr;function hr(){return pr??=Promise.all([new he().loadAsync(`./models/characters/samurai-hybrid-v2-combat.glb`),Rn(),Ct()===`yuru`?rr():void 0]).then(([e])=>{for(let t of[`Samurai_V8_Game_Mesh`,`Samurai_Katana`,`Samurai_Saya`])if(!e.scene.getObjectByName(t))throw Error(`侍のモデルを確認できませんでした`);fr=e.scene,Er(fr)})}var gr={frames:10,fade:.15,outer:4.12,core:2.72,coreBand:.26,hot:`#fff3cf`,cool:`#6fd0ff`,node:`#ffffff`,nearGlow:1,farGlow:.05,nodeGlow:1.25,falloff:1.1},_r=rt.map(([e,t],n)=>[e,t+(n===3?.03:.02)]),vr=[0,.5,1,2,3,4,5,6.5,8],yr={scale:1.5,margin:.45},br={settle:.28,eyes:.2,wrist:{x:.245,y:.97,z:.13},palm:0,pole:{x:.55,y:1.15,z:-.6},feet:.1,toe:.22,nod:.16},xr={position:new E(.25,1.01,-.01),direction:new E(.2,-.22,-.955).normalize()},Sr={dip:.58,lift:6e-4,width:85e-5,outer:1.35,segments:28,lid:.92,lashTop:1.738,sink:.012,bin:.001,cell:5e-4},Cr=e=>e instanceof H?[e.material].flat().map(e=>e.name).join():``;function wr(e){let t=e.map((e,t)=>Number.isFinite(e)?t:-1).filter(e=>e>=0);return t.length?e.map((n,r)=>{if(Number.isFinite(n))return n;let i=t.filter(e=>e<r).pop(),a=t.find(e=>e>r);return i===void 0?e[a]:a===void 0?e[i]:W.lerp(e[i],e[a],(r-i)/(a-i))}):e}var Tr=`Samurai_Closed_Eyes`;function Er(e){let t=t=>{let n;return e.traverse(e=>{!n&&e instanceof H&&Cr(e)===t&&(n=e)}),n},r=t(`SD_EyeWhite`),i=t(`SD_Brows`),a=t(`SD_EyelidCrease`);if(!r||!i||!a||!(i instanceof x))return;let o=r.geometry.getAttribute(`position`),s=i.geometry.getAttribute(`position`),c=a.geometry.getAttribute(`position`),l=new Float32Array(s.count*3),u=new Float32Array(c.count*3),d=Sr,p=[],m=[],h=[];for(let e of[1,-1]){let t=[];for(let n=0;n<o.count;n++)o.getX(n)*e>0&&t.push({x:Math.abs(o.getX(n)),y:o.getY(n),z:o.getZ(n)});if(t.length<8)continue;let n=t.reduce((e,t)=>t.x<e.x?t:e),i=t.reduce((e,t)=>t.x>e.x?t:e),a=i.x-n.x,f=Math.ceil(a/d.bin)+1,g=e=>Rr((e-n.x)/a,0,1),_=e=>Math.round(g(e)*(f-1)),v=Array(f).fill(1/0);for(let e of t)v[_(e.x)]=Math.min(v[_(e.x)],e.y);let y=wr(v),b=e=>n.y+(i.y-n.y)*g(e),x=[0,0,0],S=[[0,0,0],[0,0,0],[0,0,0]];y.forEach((e,t)=>{let r=t/(f-1),i=b(n.x+a*r)-e,o=[1,r,r*r].map(e=>e*r*(1-r));for(let e=0;e<3;e++){x[e]+=o[e]*i;for(let t=0;t<3;t++)S[e][t]+=o[e]*o[t]}});let C=e=>e[0][0]*(e[1][1]*e[2][2]-e[1][2]*e[2][1])-e[0][1]*(e[1][0]*e[2][2]-e[1][2]*e[2][0])+e[0][2]*(e[1][0]*e[2][1]-e[1][1]*e[2][0]),w=C(S),T=[0,1,2].map(e=>C(S.map((t,n)=>t.map((t,r)=>r===e?x[n]:t)))/w),D=e=>{let t=g(e);return Math.max(0,t*(1-t)*(T[0]+T[1]*t+T[2]*t*t))},O=e=>b(e)-D(e)*d.dip,k=Math.min(...t.map(e=>e.y))-.002,A=Math.max(...t.map(e=>e.y))+.004,j=Math.ceil(a/d.cell)+1,M=Math.ceil((A-k)/d.cell)+1,N=Array(j*M).fill(-1/0),P=(e,t)=>[Rr(Math.round((e-n.x)/d.cell),0,j-1),Rr(Math.round((t-k)/d.cell),0,M-1)];for(let e of t){let[t,n]=P(e.x,e.y);N[n*j+t]=Math.max(N[n*j+t],e.z)}for(let e=0;e<j+M;e++){let e=0;for(let t=0;t<M;t++)for(let n=0;n<j;n++){if(Number.isFinite(N[t*j+n]))continue;let r=0,i=0;for(let[e,a]of[[1,0],[-1,0],[0,1],[0,-1]]){let o=n+e,s=t+a;if(o<0||s<0||o>=j||s>=M)continue;let c=N[s*j+o];Number.isFinite(c)&&(r+=c,i++)}i?N[t*j+n]=r/i:e++}if(!e)break}let F=N.map((e,t)=>{let n=t%j,r=Math.floor(t/j),i=0,a=0;for(let e=-1;e<=1;e++)for(let t=-1;t<=1;t++){let o=n+t,s=r+e;o<0||s<0||o>=j||s>=M||(i+=N[s*j+o],a++)}return i/a}),ee=(e,t)=>{let r=Rr((e-n.x)/d.cell,0,j-1),i=Rr((t-k)/d.cell,0,M-1),a=Math.min(j-2,Math.floor(r)),o=Math.min(M-2,Math.floor(i)),s=r-a,c=i-o,l=(e,t)=>F[t*j+e];return W.lerp(W.lerp(l(a,o),l(a+1,o),s),W.lerp(l(a,o+1),l(a+1,o+1),s),c)},te=[],I=r.geometry.getIndex();for(let t=0;I&&t<I.count;t+=3){let n=[I.getX(t),I.getX(t+1),I.getX(t+2)];n.every(t=>o.getX(t)*e>0)&&te.push(n.flatMap(e=>[Math.abs(o.getX(e)),o.getY(e),o.getZ(e)]))}let R=(e,t)=>{let n=-1/0;for(let[r,i,a,o,s,c,l,u,d]of te){let f=(s-u)*(r-l)+(l-o)*(i-u);if(Math.abs(f)<1e-14)continue;let p=((s-u)*(e-l)+(l-o)*(t-u))/f,m=((u-i)*(e-l)+(r-l)*(t-u))/f;p<-1e-9||m<-1e-9||p+m>1+1e-9||(n=Math.max(n,p*a+m*c+(1-p-m)*d))}return Number.isFinite(n)?n:ee(e,t)},ne=p.length/3;for(let t=0;t<=d.segments;t++){let r=t/d.segments,o=n.x+a*r,s=O(o),c=O(Math.min(i.x,o+5e-4))-O(Math.max(n.x,o-5e-4)),l=Math.min(i.x,o+5e-4)-Math.max(n.x,o-5e-4),u=new L(-c,l).normalize(),f=d.width*Math.sin(Math.PI*r)**.75*W.lerp(1,d.outer,r);for(let t of[1,-1]){let n=o+u.x*f*t,r=s+u.y*f*t,i=R(n,r)+d.lift,a=(R(n+4e-4,r)-R(n-4e-4,r))/8e-4,c=(R(n,r+4e-4)-R(n,r-4e-4))/8e-4,l=new E(-a*e,-c,1).normalize();p.push(n*e,r,i),m.push(l.x,l.y,l.z)}}for(let t=0;t<d.segments;t++){let n=ne+t*2,r=n+1,i=n+2,a=n+3;e>0?h.push(n,r,i,r,a,i):h.push(n,i,r,r,i,a)}let re=(n.x+i.x)/2,ie=new E(re*e,b(re),R(re,b(re))-d.sink);for(let t=0;t<s.count;t++)s.getX(t)*e<=0||s.getY(t)>=d.lashTop||(l[t*3]=ie.x-s.getX(t),l[t*3+1]=ie.y-s.getY(t),l[t*3+2]=ie.z-s.getZ(t));for(let t=0;t<c.count;t++){let r=Math.abs(c.getX(t)),a=c.getY(t);if(c.getX(t)*e<=0||r<n.x-.003||r>i.x+.003||a>=b(r)||a<b(r)-D(r)-.004)continue;let o=O(r);u[t*3+1]=o-a,u[t*3+2]=R(r,o)+d.lift*.5-c.getZ(t)}}for(let[e,t]of[[i,l],[a,u]])e.geometry.morphAttributes.position=[new f(t,3)],e.geometry.morphTargetsRelative=!0,e.updateMorphTargets();let g=p.length/3,_=new we;_.setAttribute(`position`,new f(p,3)),_.setAttribute(`normal`,new f(m,3));let v=i.skeleton.bones.findIndex(e=>e.name===`head`);_.setAttribute(`skinIndex`,new n(new Uint16Array(g*4).map((e,t)=>t%4==0?Math.max(0,v):0),4)),_.setAttribute(`skinWeight`,new f(new Float32Array(g*4).map((e,t)=>+(t%4==0)),4));for(let[e,t]of Object.entries(i.geometry.attributes))_.getAttribute(e)||_.setAttribute(e,new f(new Float32Array(g*t.itemSize).fill(+(e===`color`)),t.itemSize));_.setIndex(h);let y=new x(_,i.material);y.name=Tr,y.bind(i.skeleton,i.bindMatrix),y.position.copy(i.position),y.quaternion.copy(i.quaternion),y.scale.copy(i.scale),y.visible=!1,i.parent.add(y)}function Dr(e,t){let n=t>=.5;if(e.closed!==n){e.closed=n;for(let t of e.morphs)t.morphTargetInfluences[0]=+!!n;for(let t of e.white)t.material.color.copy(n?e.lid:t.open);for(let t of e.hide)t.visible=!n;for(let t of e.lines)t.visible=n}}function Or(){let e=gr.frames,t=vr.length,n=(e-1)*(t-1),r=new we;r.setAttribute(`position`,new R(new Float32Array(n*6*3),3)),r.setAttribute(`color`,new R(new Float32Array(n*6*3),3));let i=new V({vertexColors:!0,transparent:!0,opacity:1,side:2,depthWrite:!1,blending:2}),a=new H(r,i);return a.frustumCulled=!1,a.visible=!1,a.renderOrder=6,a.userData.noFade=!0,{mesh:a,samples:[],time:0}}var kr=new r(gr.hot),Ar=new r(gr.cool),jr=new r(gr.node),Mr=new r,Nr=new E,Pr=new E;function Fr(e,t){let n=t.samples,r=gr.frames,i=vr.length;if(n.length<2){t.mesh.visible=!1;return}let a=t.mesh.geometry.getAttribute(`position`),o=t.mesh.geometry.getAttribute(`color`),s=[];for(let t=0;t<r;t++){let a=n[Math.min(t,n.length-1)],o=Math.max(0,1-a.age/gr.fade)*(1-t/r*.6);Pr.copy(a.tip).sub(a.grip).normalize();let c=Math.max(Math.hypot(a.tip.x-a.centre.x,a.tip.z-a.centre.z),.3),l=Math.max(Math.hypot(Pr.x,Pr.z),.2),u=Math.max(0,(gr.outer-c)/l),d=[];for(let t=0;t<i;t++){let n=vr[t]/(i-1);Nr.copy(a.tip).addScaledVector(Pr,u*n);let r=Math.hypot(Nr.x-a.centre.x,Nr.z-a.centre.z),s=Math.max(0,1-Math.abs(r-gr.core)/gr.coreBand);Mr.copy(kr).lerp(Ar,n**.45).lerp(jr,s);let c=(1-n)**gr.falloff,l=(gr.farGlow+(gr.nearGlow-gr.farGlow)*c+gr.nodeGlow*s)*o;d.push({point:e.worldToLocal(Nr.clone()),colour:Mr.clone().multiplyScalar(Math.max(0,l))})}s.push(d)}let c=0,l=e=>{a.setXYZ(c,e.point.x,e.point.y,e.point.z),o.setXYZ(c,e.colour.r,e.colour.g,e.colour.b),c++};for(let e=0;e<r-1;e++)for(let t=0;t<i-1;t++)l(s[e][t]),l(s[e+1][t]),l(s[e][t+1]),l(s[e+1][t]),l(s[e+1][t+1]),l(s[e][t+1]);a.needsUpdate=!0,o.needsUpdate=!0,t.mesh.visible=!0}var Ir=new B,Lr=new r(`#ffc9ae`),Y=(e,t,n)=>new E(e,t,n),Rr=W.clamp,zr=e=>(e=Rr(e,0,1),e*e*(3-2*e));function X(e,t=!1){let n=e.clone().normalize(),r=Y(0,t?1:-1,0);r.addScaledVector(n,-r.dot(n)).normalize();let i=n.clone().cross(r).normalize();return new B().setFromRotationMatrix(new z().makeBasis(r,i,n))}var Br=(e,t)=>zr((t-e[0])/(e[1]-e[0])),Vr={side:[.24,.38],back:[.02,.16],low:[.92,1.06],high:[1.46,1.62]};function Hr(e){let t=e.skeleton.bones,n=t.findIndex(e=>e.name===`spine02`);if(n<0)return;let r=new Set(t.map((e,t)=>/^(upper|lower)arm0[12]_[RL]$/.test(e.name)?t:-1).filter(e=>e>=0)),{position:i,skinIndex:a,skinWeight:o}=e.geometry.attributes,s=new E,c=[0,1,2,3];for(let e=0;e<i.count;e++){s.fromBufferAttribute(i,e);let t=(1-Br(Vr.side,Math.abs(s.x)))*(1-Br(Vr.back,s.z))*Br(Vr.low,s.y)*(1-Br(Vr.high,s.y));if(t<=.001)continue;let l=c.map(t=>a.getComponent(e,t)),u=c.map(t=>o.getComponent(e,t)),d=0;for(let e of c)r.has(l[e])&&u[e]>0&&(d+=u[e]*t,u[e]*=1-t);if(d<=0)continue;let f=c.find(e=>l[e]===n&&u[e]>0)??c.find(e=>u[e]<=1e-6);f===void 0&&(f=c.reduce((e,t)=>!r.has(l[t])&&u[t]>u[e]?t:e,0)),l[f]!==n&&(r.has(l[f])||u[f]<=1e-6)&&(l[f]=n),u[f]+=d;let p=u.reduce((e,t)=>e+t,0)||1;for(let t of c)a.setComponent(e,t,l[t]),o.setComponent(e,t,u[t]/p)}a.needsUpdate=!0,o.needsUpdate=!0}var Ur=Y(0,1.12,.4);X(Y(0,.32,.95));var Wr=Y(.25,1.01,-.01),Gr=X(Y(.2,-.22,-.955).normalize(),!0),Kr=Y(.9,-.05,-.433).normalize(),qr=X(Kr,!0),Jr=Y(.27,1.09,.12),Yr={twist:30*Math.PI/180,lean:.12,load:.5,release:.4},Xr=Yr.twist,Zr=/^(?:upper|lower)leg|^foot_|^toe/,Qr={release:.12,recover:.22},$r=(e,t,n)=>e<t?Math.min(t,e+n):Math.max(t,e-n),ei=[[`spine05`,.09,.08,0],[`spine03`,.11,.13,0],[`spine01`,.15,.14,0],[`neck02`,-.14,-.17,0],[`head`,-.12,-.18,0],[`upperleg01_R`,-.8713,.043,.0778],[`lowerleg01_R`,1.23,0,0],[`upperleg01_L`,.3579,-.007,.0196],[`lowerleg01_L`,.594,0,0]],ti=[0,-.22,.03];Jr.clone(),qr.clone();var ni=e=>Z(e,Jr,qr,Jr,1,Xr,qr),Z=(e,t,n,r,i,a=0,o=Gr)=>({time:e,swordPosition:t,swordRotation:n,sayaPosition:r,sayaRotation:o,leftOnSaya:i,twist:a}),ri=[ni(0),Z(.24,Jr,qr,Jr,1,.6,qr),Z(.42,Jr,qr,Jr,1,.74,qr),Z(.64,Jr,qr,Jr,1,.91,qr),Z(.72,Jr,qr,Jr,1,.91,qr),Z(ze.draw,Jr.clone().addScaledVector(Kr,-.55),qr,Jr.clone().addScaledVector(Kr,.23),1,.24,qr),Z(.92,Y(-.1,1.23,.49),X(Y(.72,.05,.69)),Jr.clone().addScaledVector(Kr,.15),1,-.32,qr),Z(ze.follow,Y(-.39,1.3,.38),X(Y(-.8,.12,.6)),Jr.clone().addScaledVector(Kr,.1),1,-.38,qr),Z(1.4,Y(-.39,1.3,.38),X(Y(-.8,.12,.6)),Jr.clone().addScaledVector(Kr,.1),1,-.38,qr),Z(1.58,Jr.clone().addScaledVector(Kr,-.34),qr,Jr,1,.1,qr),ni(ze.duration)],ii=[ni(0)],ai=[Z(0,Ur.clone().add(Y(0,.055,0)),X(Y(0,.58,.82)),Wr,.3)],oi=(e,t)=>Ur.clone().lerp(e,t),si=1.6,ci=1.5,li=oi(Y(-.36,1.26,.35),ci),ui=X(Y(-.9,.04,.43)),di=[ni(0),Z(.055,oi(Y(.1,1.14,.3),si),X(Y(.91,.08,.4)),Wr,.94,.34*si),Z(et,oi(Y(-.07,1.16,.48),1.25),X(Y(.12,-.06,.99)),Wr,1,.02),Z(.18,li,ui,Wr,1,-.26*ci),Z(.26,li,ui,Wr,1,-.26*ci),Z(.34,li,ui,Wr,1,-.26*ci),Z(.45,oi(Y(-.1,1.18,.39),1.1),X(Y(-.15,.25,.95)),Wr,.65,-.1),ni($e)],fi=[ni(0),Z(.09,Y(.34,1.16,.16),X(Y(.93,.1,.35)),Wr,.95,.42),Z(_t,Y(-.62,1.3,.34),X(Y(-.94,.02,.34)),Wr,1,-.3),Z(.3,Y(-.16,1.86,.2),X(Y(-.12,.96,.25)),Wr,1,-.08),Z(Ye,Y(.02,.84,.72),X(Y(.02,-.78,.62)),Wr,1,.04),Z(.5,Y(.46,1.8,.3),X(Y(.5,.8,.33)),Wr,1,.3),Z(wt,Y(-.5,.88,.62),X(Y(-.58,-.7,.42)),Wr,1,-.26),Z(.7,Y(-.48,1.82,.28),X(Y(-.52,.79,.32)),Wr,1,-.3),Z(st,Y(.52,.86,.6),X(Y(.6,-.69,.4)),Wr,1,.28),Z(.9,Y(.52,.86,.6),X(Y(.6,-.69,.4)),Wr,1,.28),Z(1.02,Y(.1,1.06,.58),X(Y(.12,-.16,.98)),Wr,.7,.06),ni(Me)];function pi(e,t){let n=e[0],r=e[e.length-1];for(let i=1;i<e.length;i++){if(t<=e[i].time){n=e[i-1],r=e[i];break}n=e[i]}let i=n===r?1:zr((t-n.time)/Math.max(.001,r.time-n.time));return{swordPosition:n.swordPosition.clone().lerp(r.swordPosition,i),swordRotation:n.swordRotation.clone().slerp(r.swordRotation,i),sayaPosition:n.sayaPosition.clone().lerp(r.sayaPosition,i),sayaRotation:n.sayaRotation.clone().slerp(r.sayaRotation,i),leftOnSaya:W.lerp(n.leftOnSaya,r.leftOnSaya,i),twist:W.lerp(n.twist,r.twist,i)}}function mi(e){let t=new z,n={meshes:e.length,before:new Set(e.map(e=>e.skeleton)).size,after:0,merged:!1,reason:``};if(n.after=n.before,e.length<2)return n.reason=`スキンメッシュが1枚以下`,n;let r=e[0].skeleton;for(let i of e){if(!i.bindMatrix.equals(t))return n.reason=`bindMatrix が単位行列でない（${i.name}）`,n;let e=i.skeleton.bones;if(e.length!==r.bones.length)return n.reason=`骨の本数が違う（${i.name}）`,n;for(let t=0;t<e.length;t++)if(e[t]!==r.bones[t])return n.reason=`骨の並びが違う（${i.name} の ${t}本目）`,n;let a=i.skeleton.boneInverses;if(a!==r.boneInverses){if(a.length!==r.boneInverses.length)return n.reason=`逆行列の本数が違う（${i.name}）`,n;for(let e=0;e<a.length;e++)if(!a[e].equals(r.boneInverses[e]))return n.reason=`逆行列が違う（${i.name} の ${e}本目）`,n}}for(let t of e)t.skeleton!==r&&t.bind(r,t.bindMatrix);return n.after=new Set(e.map(e=>e.skeleton)).size,n.merged=!0,n.reason=`まとめた`,n}function hi(e,t){if(!fr)throw Error(`侍の読み込みが完了していません`);let n=new U;n.name=`${e===0?`azure`:`coral`}-samurai`;let i=new U;n.add(i);let a=Ce(fr);a.scale.setScalar(1.12),a.position.y=-.028,i.add(a);let o=Ct()===`yuru`;o&&(a.scale.multiplyScalar($n.rigScale),a.position.set(0,-.028*$n.rigScale-$n.rigDown,$n.rigForward));let s=Ct()===`human`;s&&(a.scale.setScalar(Rt.scale),a.position.y=-.028*Rt.scale/1.12);let c=[],l=new Map,u=[];a.traverse(e=>{if(!(e instanceof H))return;e.geometry=e.geometry.clone();let t=e=>{let t=l.get(e);return t||(t=e.clone(),l.set(e,t),t instanceof K&&(/Katana_(Forged_Steel|Polished_Edge)|temper line/.test(t.name)&&(t.metalness=.68,t.roughness=Math.max(.23,t.roughness),t.envMapIntensity=2.4),u.push({material:t,emissive:t.emissive.clone(),intensity:t.emissiveIntensity}))),t};if(e.material=Array.isArray(e.material)?e.material.map(t):t(e.material),e.castShadow=Pe.cast,e.receiveShadow=!0,e instanceof x){c.push(e),/Packed_indigo_wave_silk/.test([e.material].flat().map(e=>e.name).join())&&Hr(e),e.geometry.computeBoundingSphere();let t=e.geometry.boundingSphere;e.boundingSphere=new w(t.center.clone(),t.radius*yr.scale+yr.margin)}e.frustumCulled=!0}),n.userData.samuraiSkeletons=mi(c),n.updateMatrixWorld(!0);let d=new Map;a.traverse(e=>{if(!(e instanceof ge))return;let t=e.getWorldQuaternion(new B).invert();d.set(e.name,{bone:e,rest:e.quaternion.clone(),x:Y(1,0,0).applyQuaternion(t),y:Y(0,1,0).applyQuaternion(t),z:Y(0,0,1).applyQuaternion(t)})});let f=a.getObjectByName(`Samurai_Katana`),p=a.getObjectByName(`Samurai_Saya`),m=e=>({position:new E().fromArray(e.userData.grip_wrist_position),quaternion:new B().fromArray(e.userData.grip_wrist_quaternion)}),h=m(f);h.position.z+=.03;let g=m(p),_=m(p),v=new B().setFromAxisAngle(Y(1,0,0),Math.PI);_.position.sub(Y(0,0,.06)).applyQuaternion(v).add(Y(0,0,-.195)),_.quaternion.premultiply(v);let y=new H(new G(.57,.62,32),new V({color:e===0?`#54d9ff`:`#ff6e89`,side:2,depthWrite:!1}));y.rotation.x=-Math.PI/2,y.position.y=.033,n.add(y);let b=new U;b.position.y=2.35,n.add(b);for(let e=0;e<3;e++){let t=new H(new j(.105),new K({color:`#ffe080`,emissive:`#ffd458`,emissiveIntensity:.6}));t.position.set(Math.cos(e*Math.PI*2/3)*.36,e*.035,Math.sin(e*Math.PI*2/3)*.36),b.add(t)}b.visible=!1;let S=Bn();i.add(S);let C=Gn(a),T=a.matrixWorld.clone().invert().multiply(d.get(`spine05`).bone.matrixWorld).invert(),D=Or();n.add(D.mesh);let O={},k=a.getWorldQuaternion(new B).invert();for(let e of[`R`,`L`]){let t=e===`R`?-1:1,n=t=>a.worldToLocal(d.get(t+e).bone.getWorldPosition(new E)),r=Y(t*br.wrist.x,br.wrist.y,br.wrist.z),i=r.clone().sub(n(`upperarm01_`)).normalize(),o=k.clone().multiply(d.get(`wrist_`+e).bone.getWorldQuaternion(new B)),s=new B().setFromUnitVectors(n(`wrist_`).sub(n(`lowerarm01_`)).normalize(),i);O[e]={position:r,quaternion:new B().setFromAxisAngle(i,t*br.palm).multiply(s).multiply(o)}}let A={white:[],lid:new r(1,1,1),morphs:[],hide:[],lines:[],closed:void 0};a.traverse(e=>{let t=Cr(e);if(t){if(e.name===Tr)A.lines.push(e);else if(t===`SD_EyeWhite`){let t=e.material;A.white.push({material:t,open:t.color.clone()})}else t===`SD_Skin`?A.lid.copy(e.material.color).multiplyScalar(Sr.lid):/^SD_(IrisContinuous|Pupil|Catchlight)$/.test(t)&&A.hide.push(e);e.morphTargetInfluences?.length&&A.morphs.push(e)}}),Dr(A,0);let M;if(o){let e=e=>d.get(e).bone,t={hips:C.hips,wrist:{R:e(`wrist_R`),L:e(`wrist_L`)},elbow:{R:e(`lowerarm01_R`),L:e(`lowerarm01_L`)},foot:{R:e(`foot_R`),L:e(`foot_L`)}};M={parts:ar(i,a,[f,p],t,u),bones:t},A.hide.length=0,A.lines.length=0,b.position.y=$n.stars}return s&&(Nt(a,[f,p],u,t),A.hide.length=0,A.lines.length=0,b.position.y=Rt.stars.default*Rt.scale),n.userData.samurai={model:a,motion:i,vfx:S,joints:d,stars:b,sword:f,saya:p,rightGrip:h,leftGrip:_,sayaGrip:g,materials:u,gripErrors:{right:0,left:0},footwork:C,torsoRestInverse:T,torsoDelta:new z,slash:D,sideGrips:O,eyes:A,yuru:M},n.userData.characterAsset=o?`yuru-samurai-v1`:s?t?`avatar-samurai`:`yuru-samurai`:`samurai-hybrid-v2`,n}function gi(e,t){let n=e.parent.getWorldQuaternion(new B);e.quaternion.copy(n.invert().multiply(t)),e.updateWorldMatrix(!1,!0)}function _i(e,t,n){let r=e.getWorldPosition(new E),i=t.getWorldPosition(new E).sub(r).normalize(),a=n.clone().sub(r).normalize();gi(e,new B().setFromUnitVectors(i,a).multiply(e.getWorldQuaternion(new B)))}var vi={x:.34,y:.86,z:.95};function yi(e,t,n,r=0){let i=e.joints.get(`upperarm01_`+t).bone,a=e.joints.get(`lowerarm01_`+t).bone,o=e.joints.get(`wrist_`+t).bone,s=i.getWorldPosition(new E),c=a.getWorldPosition(new E),l=o.getWorldPosition(new E),u=e.model.localToWorld(n.position.clone()),d=s.distanceTo(c),f=c.distanceTo(l),p=u.clone().sub(s),m=Rr(p.length(),.025,d+f-.001);p.normalize();let h=br.pole,g=W.lerp(vi.x,h.x,r),_=e.model.localToWorld(Y(t===`R`?-g:g,W.lerp(vi.y,h.y,r),W.lerp(vi.z,h.z,r)).applyMatrix4(e.torsoDelta)).sub(s);_.addScaledVector(p,-_.dot(p)).normalize();let v=(d*d-f*f+m*m)/(2*m);return _i(i,a,s.clone().addScaledVector(p,v).addScaledVector(_,Math.sqrt(Math.max(0,d*d-v*v)))),_i(a,o,u),xi(e,t,r),gi(o,e.model.getWorldQuaternion(new B).multiply(n.quaternion)),o.getWorldPosition(new E).distanceTo(u)}var bi=Y(0,-1,0);function xi(e,t,n=0){let r=e.joints.get(`lowerarm01_`+t),i=e.joints.get(`wrist_`+t).bone.getWorldPosition(new E).sub(r.bone.getWorldPosition(new E));if(i.lengthSq()<1e-8)return;i.normalize();let a=r.bone.getWorldQuaternion(new B),o=Y(0,0,-1).applyQuaternion(e.model.getWorldQuaternion(new B)),s=r.y.clone().applyQuaternion(a).negate(),c=bi.clone().multiplyScalar(1-n).addScaledVector(o,n);for(let e of[s,c])e.addScaledVector(i,-e.dot(i));let l=Rr(s.length()/.35,0,1)*Rr(c.length()/.35,0,1);if(l<.001)return;s.normalize(),c.normalize();let u=Math.atan2(s.clone().cross(c).dot(i),Rr(s.dot(c),-1,1))*l;gi(r.bone,new B().setFromAxisAngle(i,u).multiply(a))}function Si(e,t){let n=Ci(e,t);e.gripErrors.right=yi(e,`R`,n.R),e.gripErrors.left=yi(e,`L`,n.L)}function Ci(e,t){let n=wi(e.sword,e.rightGrip),r=wi(e.sword,e.leftGrip),i=wi(e.saya,e.sayaGrip);return r.position.lerp(i.position,t),r.quaternion.slerp(i.quaternion,t),{R:n,L:r}}function wi(e,t){return{position:t.position.clone().applyQuaternion(e.quaternion).add(e.position),quaternion:e.quaternion.clone().multiply(t.quaternion)}}function Ti(e,t,n,r,i){let a=t.slash,o=Math.min(.1,Math.max(0,r-a.time));a.time=r;let s=ft(`samurai`),c=!i&&n.samuraiMotion===`reflect`&&n.action>0,l=c?$e-n.action:1/0,u=!i&&n.samuraiMotion===`kamaitachi`&&n.action>0,d=u?Me-n.action:1/0,f=u&&_r.some(([e,t])=>d>=e&&d<=t);for(let e of a.samples)e.age+=o;if(c&&l>=s.windup&&l<=s.active||f){let n=t.sword.localToWorld(t.rightGrip.position.clone()),r=t.sword.localToWorld(t.rightGrip.position.clone().add(Y(0,0,.737))),i=e.getWorldPosition(new E);a.samples.unshift({tip:r,grip:n,centre:i,age:0})}for(;a.samples.length>gr.frames;)a.samples.pop();for(;a.samples.length&&a.samples[a.samples.length-1].age>gr.fade;)a.samples.pop();if(!a.samples.length){a.mesh.visible=!1;return}Fr(e,a)}function Ei(e,t,n){let r=e.userData.samurai;if(!r)return;let i=e.userData.poseTime,a=t.hitStop>0?i??n:e.userData.poseTime=n,o=Rr(a-(i??a),0,.1),s=t.stun>0,c=s?0:Math.min(1,t.moving),l=a*10.5+t.id*.6,u=Math.sin(l)*c;for(let e of r.joints.values())e.bone.quaternion.copy(e.rest);Kn(r.footwork);let d=(e,t=0,n=0,i=0)=>{let a=r.joints.get(e);if(a)for(let[e,r]of[[a.x,t],[a.y,n],[a.z,i]])r&&a.bone.quaternion.multiply(Ir.setFromAxisAngle(e,r))},f;f=!s&&t.samuraiMotion===`iai`&&t.action>0?pi(ri,dt(yt-t.action)):!s&&t.samuraiMotion===`reflect`&&t.action>0?pi(di,$e-t.action):!s&&t.samuraiMotion===`kamaitachi`&&t.action>0?pi(fi,Me-t.action):!s&&(t.guard>0||t.blocking)?pi(ai,0):pi(ii,0);let p=!s&&!t.guard&&!t.blocking&&!(t.action>0&&t.samuraiMotion),m=!s&&t.meditating?1:0,h=e.userData.samuraiCalm,g=zr(e.userData.samuraiCalm=t.action>0||t.guard>0||t.blocking?0:h===void 0?m:$r(h,m,o/br.settle)),_=1-g,v=!s&&t.samuraiMotion===`iai`&&t.action>0,y=v?dt(yt-t.action):0,b=!s&&t.samuraiMotion===`reflect`&&t.action>0,x=b?$e-t.action:0,S=v?zr((y-.36)/.2)*(1-zr((y-.72)/.16)):b?.24*zr(x/.055)*(1-zr((x-.055)/.11)):0,C=v?zr((y-.76)/.22)*(1-zr((y-1.4)/.3)):b?.24*zr((x-.055)/.125)*(1-zr((x-.26)/.2)):0,w=b?zr(x/.055)*(1-zr((x-.26)/.2)):0;r.motion.position.y=v?0:(Math.abs(u)*.017+Math.sin(a*2.4+t.id)*.003)*(1-w),r.motion.rotation.set(s?.07:c*.025,0,s?Math.sin(a*4)*.09:-u*.008);let T=+!!p,D=p?Math.max(0,1-c*3):0,O=e.userData.samuraiStanceLegs,k=e.userData.samuraiStanceLegs=O===void 0?D:$r(O,D,o/(D<O?Qr.release:Qr.recover)),A=p&&ei.length>0,j=(A?T:0)*_,M=(A?k:0)*_,N=(A?0:T)*_,P=(A?0:k)*_,F=_-M;d(`upperleg01_R`,(-.1+u*.24+S*.1-C*.18)*F),d(`upperleg01_L`,(.075-u*.24+S*.06+C*.1)*F),d(`lowerleg01_R`,(-.04-Math.max(0,-Math.sin(l))*c*.24-S*.14-C*.12)*F),d(`lowerleg01_L`,(-.04-Math.max(0,Math.sin(l))*c*.24-S*.12)*F),d(`foot_R`,(.08-u*.08)*F),d(`foot_L`,(-.04+u*.08)*F);let ee=f.twist*(p?N:1);d(`spine05`,S*.16+C*.08+Yr.lean*N,ee-u*.015,-S*.025+C*.02),d(`head`,(s?.05:-S*.06)-Yr.lean*.55*N,p?-ee:-f.twist*.3,s?Math.sin(a*4)*.08:-C*.01);for(let[e,t,n,r]of ei){let i=Zr.test(e)?M:j;i>0&&d(e,t*i,n*i,r*i)}g>0&&d(`head`,br.nod*g);let te=at(t),I=s?0:te.f*te.s;if(I>0&&(d(`spine05`,.4*te.along*I,0,.2*te.side*I),d(`head`,.3*te.along*I),d(`upperleg01_R`,-.25*I),r.motion.position.y-=.03*I,f.swordPosition.add(Y(0,.1,-.12).multiplyScalar(I)),f.swordRotation.slerp(X(Y(0,.8,.55)),.35*I)),g>0){let e=xr,t=X(e.direction,!0);f.swordPosition.lerp(e.position,g),f.swordRotation.slerp(t,g),f.sayaPosition.lerp(e.position,g),f.sayaRotation.slerp(t,g)}r.sword.position.copy(f.swordPosition),r.sword.quaternion.copy(f.swordRotation),r.saya.position.copy(f.sayaPosition),r.saya.quaternion.copy(f.sayaRotation);let L=r.joints.get(`finger1-2_L`);L&&L.bone.quaternion.multiply(Ir.setFromAxisAngle(Y(-.9816983191,.0118977202,-.1900672821),W.degToRad(12)*(1-f.leftOnSaya))),r.model.updateWorldMatrix(!0,!0);let R=p?Yr.load*P:S,ne=p?Yr.release*P:C,re=p?P:w,ie=b&&w<1||p&&P<1?Object.values(r.footwork.legs).flatMap(e=>[e.upper,e.lower,e.foot].map(e=>({bone:e,quaternion:e.quaternion.clone()}))):[],ae=r.footwork.hips.position.clone();if(Qn(r.footwork,R,ne,v||b||P>0,p||b||y>=.56,p||b||y>=.98),ie.length){r.footwork.hips.position.lerpVectors(ae,r.footwork.hips.position,re);for(let{bone:e,quaternion:t}of ie)e.quaternion.slerpQuaternions(t,e.quaternion,re)}M>0&&Xn(r.footwork,new E(...ti).multiplyScalar(M)),Zn(r.footwork,br.feet,br.toe,g),e.userData.samuraiStanceWeight=v?1:w,r.joints.get(`spine05`).bone.updateWorldMatrix(!0,!1),r.torsoDelta.copy(r.model.matrixWorld).invert().multiply(r.joints.get(`spine05`).bone.matrixWorld).multiply(r.torsoRestInverse);let oe=new B().setFromRotationMatrix(r.torsoDelta);for(let e of[r.sword,r.saya])e.position.applyMatrix4(r.torsoDelta),e.quaternion.premultiply(oe);let se=v?zr((y-.92)/.12)*(1-zr((y-1.4)/.18)):b?zr((x-.11)/.07)*(1-zr((x-.26)/.105)):0;if(se>0){let e=r.joints.get(`upperarm01_R`).bone.getWorldPosition(new E),t=r.joints.get(`lowerarm01_R`).bone.getWorldPosition(new E),n=r.joints.get(`wrist_R`).bone.getWorldPosition(new E),i=(e.distanceTo(t)+t.distanceTo(n)-.0012)/r.model.getWorldScale(new E).x,a=r.model.worldToLocal(e).add(Y(-i,0,0)),o=X(Y(-1,0,0)),s=a.sub(r.rightGrip.position.clone().applyQuaternion(o));r.sword.position.lerp(s,se),r.sword.quaternion.slerp(o,se)}if(r.model.updateWorldMatrix(!0,!0),g>0){let e=Ci(r,f.leftOnSaya);for(let t of[`R`,`L`])e[t].position.lerp(r.sideGrips[t].position,g),e[t].quaternion.slerp(r.sideGrips[t].quaternion,g);r.gripErrors.right=yi(r,`R`,e.R,g),r.gripErrors.left=yi(r,`L`,e.L,g)}else Si(r,f.leftOnSaya);Ti(e,r,t,a,s);let z=v?r.motion.worldToLocal(r.sword.localToWorld(r.rightGrip.position.clone().add(Y(0,0,.737)))).sub(r.motion.worldToLocal(r.sword.localToWorld(r.rightGrip.position.clone()))):void 0;Hn(r.vfx,v?yt-t.action:null,r.motion.worldToLocal(r.saya.getWorldPosition(new E)),z),r.stars.visible=s,r.stars.rotation.y=a*2.1;let ce=!s&&t.meditating?1:0,le=e.userData.samuraiEyes;Dr(r.eyes,e.userData.samuraiEyes=le===void 0?ce:$r(le,ce,o/br.eyes)),e.userData.samuraiPose=t.samuraiMotion===`iai`&&t.action>0?`iai`:t.samuraiMotion===`reflect`&&t.action>0?`reflect`:t.samuraiMotion===`kamaitachi`&&t.action>0?`kamaitachi`:g>.5?`meditate`:`battou`;for(let e of r.materials)e.material.emissive.copy(t.hitFlash>0?Lr:e.emissive),e.material.emissiveIntensity=t.hitFlash>0?.3*(t.hitFlash/.25):e.intensity;r.yuru&&dr(r.yuru.parts,r.motion,r.yuru.bones,r.torsoDelta)}var Di={wrist:[-.4,1.34,.02],blade:[-.62,.72,-.3],yaw:-.35,elbow:[-1,.1,-.2]},Oi={wrist:[-.38,1.02,-.28],blade:[-.2,.3,-.93],yaw:-.45,elbow:[-.7,-.4,-.4]},ki=(e,t)=>({t:e,...t}),Ai=ot.swordsman.duration,ji={swordsman:{slash:{fadeIn:.03,fadeOut:.045,keys:[ki(.03,Di),ki(.12,{wrist:[-.36,1.28,.25],blade:[-.62,.45,.64],yaw:-.2,elbow:[-.9,-.2,-.3]}),ki(.19,{wrist:[-.14,1.1,.4],blade:[.05,-.12,.99],yaw:0,elbow:[-.6,-.6,-.3]}),ki(.27,{wrist:[-.03,.96,.28],blade:[.7,-.45,.55],yaw:.25,elbow:[-.4,-.8,-.2]}),ki(.35,{wrist:[0,.9,.16],blade:[.72,-.64,.26],yaw:.45,elbow:[-.3,-.9,-.2]}),ki(Ai,{wrist:[0,.9,.16],blade:[.72,-.64,.26],yaw:.45,elbow:[-.3,-.9,-.2]})]},spin:{fadeIn:.05,fadeOut:.05,keys:[ki(.05,{wrist:[-.52,1.05,.12],blade:[-.98,.05,.15],yaw:0,elbow:[-.3,-.9,-.2]}),ki(.3,{wrist:[-.52,1.05,.12],blade:[-.98,.05,.15],yaw:Math.PI*2,elbow:[-.3,-.9,-.2]}),ki(.35,{wrist:[-.52,1.05,.12],blade:[-.98,.05,.15],yaw:Math.PI*2,elbow:[-.3,-.9,-.2]})]},charge:{fadeIn:.15,fadeOut:0,keys:[ki(.15,Oi),ki(Dt.charge,Oi)]},thrust:{fadeIn:0,fadeOut:.2,keys:[ki(0,Oi),ki(.06,{wrist:[-.15,1.12,.44],blade:[.02,.02,1],yaw:.3,elbow:[-.6,-.7,-.2]}),ki(Dt.follow,{wrist:[-.15,1.12,.44],blade:[.02,.02,1],yaw:.3,elbow:[-.6,-.7,-.2]})]},awaken:{fadeIn:.08,fadeOut:.1,keys:[ki(.08,{wrist:[-.3,1.45,.2],blade:[-.1,.99,.05],yaw:0,elbow:[-1,.1,-.2]}),ki(.35,{wrist:[-.3,1.45,.2],blade:[-.1,.99,.05],yaw:0,elbow:[-1,.1,-.2]})]}}};function Mi(e){if(e.role!==`swordsman`||e.stun>0)return;let t=ji.swordsman;if(e.charge>0)return{motion:t.charge,t:Dt.charge-e.charge,length:Dt.charge};if(e.action>0){if(e.attackKind===`melee`)return{motion:t.slash,t:Ai-e.action,length:Ai};if(e.skillMotion===`spin`)return{motion:t.spin,t:.35-e.action,length:.35};if(e.skillMotion===`thrust`)return{motion:t.thrust,t:Dt.follow-e.action,length:Dt.follow};if(e.skillMotion===`awaken`)return{motion:t.awaken,t:.35-e.action,length:.35}}}var Ni=e=>{let t=Math.min(1,Math.max(0,e));return t*t*(3-2*t)};function Pi(e,t){let n=e.keys;if(t<=n[0].t)return n[0];for(let e=1;e<n.length;e++){let r=n[e-1],i=n[e];if(t<=i.t){let e=Ni((t-r.t)/Math.max(1e-6,i.t-r.t)),n=(t,n)=>t.map((t,r)=>t+(n[r]-t)*e);return{t,wrist:n(r.wrist,i.wrist),blade:n(r.blade,i.blade),yaw:r.yaw+(i.yaw-r.yaw)*e,elbow:n(r.elbow,i.elbow)}}}return n[n.length-1]}function Fi(e,t,n){let r=e.fadeIn>0?Ni(t/e.fadeIn):1,i=e.fadeOut>0?Ni((n-t)/e.fadeOut):1;return Math.min(r,i)}var Ii=new WeakMap,Li=new WeakMap,Ri=new E,zi=new E,Bi=new E,Vi=new E,Hi=new B,Ui=new B;function Wi(e){let t=Ii.get(e);if(t)return t;let n=t=>e.model.getObjectByName(t),r=n(`upperarm01_R`),i=n(`lowerarm01_R`),a=n(`wrist_R`),o;if(e.model.traverse(e=>{e.isSkinnedMesh&&e.name===`Yuru_Body`&&(!o||String(e.userData.avatarPart??``).startsWith(`weapon-`))&&(o=e)}),!r||!i||!a||!o)return;let s=Li.get(o.geometry);if(s!==void 0)return s?(t={upper:r,lower:i,wrist:a,blade:s.clone(),lowerStand:i.quaternion.clone(),wristStand:a.quaternion.clone()},Ii.set(e,t),t):void 0;e.model.updateMatrixWorld(!0);let c=o.skeleton.bones.indexOf(a),l=o.geometry.getAttribute(`position`),u=o.geometry.getAttribute(`skinIndex`),d=o.geometry.getAttribute(`skinWeight`),f=a.getWorldPosition(new E),p=new E,m=new E,h=0;for(let e=0;e<l.count;e++){let t=0;for(let n=0;n<4;n++)u.getComponent(e,n)===c&&(t+=d.getComponent(e,n));if(t<.95)continue;p.fromBufferAttribute(l,e),o.applyBoneTransform(e,p),p.applyMatrix4(o.matrixWorld);let n=p.distanceTo(f);n>h&&(h=n,m.copy(p))}if(h<.2){Li.set(o.geometry,null);return}let g=m.sub(f).normalize().applyQuaternion(a.getWorldQuaternion(new B).invert());return Li.set(o.geometry,g.clone()),t={upper:r,lower:i,wrist:a,blade:g,lowerStand:i.quaternion.clone(),wristStand:a.quaternion.clone()},Ii.set(e,t),t}function Gi(e,t){e.parent.getWorldQuaternion(Ui),e.quaternion.copy(Ui.invert().multiply(t)),e.updateWorldMatrix(!1,!0)}function Ki(e,t,n){let r=e.getWorldPosition(new E),i=t.getWorldPosition(new E).sub(r).normalize(),a=n.clone().sub(r).normalize();Gi(e,new B().setFromUnitVectors(i,a).multiply(e.getWorldQuaternion(new B)))}function qi(e,t,n){if(!(n.role in ji))return 0;let r=Ii.get(t)??Wi(t);if(!r)return 0;r.lower.quaternion.copy(r.lowerStand),r.wrist.quaternion.copy(r.wristStand);let i=Mi(n);if(!i)return 0;let a=Fi(i.motion,i.t,i.length);if(a<=0)return 0;let o=Pi(i.motion,i.t),s=Math.atan2(Math.sin(o.yaw-e.rotation.y),Math.cos(o.yaw-e.rotation.y));e.rotation.y+=s*a,e.updateMatrixWorld(!0);let c=r.wrist.getWorldPosition(Ri),l=r.blade.clone().applyQuaternion(r.wrist.getWorldQuaternion(Hi)),u=e.localToWorld(zi.set(...o.wrist)).sub(c).multiplyScalar(a).add(c),d=e.getWorldQuaternion(new B),f=new E(...o.blade).normalize().applyQuaternion(d).sub(l).multiplyScalar(a).add(l).normalize(),p=r.upper.getWorldPosition(new E),m=r.lower.getWorldPosition(Bi),h=r.wrist.getWorldPosition(Vi),g=p.distanceTo(m),_=m.distanceTo(h),v=u.clone().sub(p),y=Math.min(Math.max(v.length(),.02),g+_-.001);v.normalize();let b=new E(...o.elbow).applyQuaternion(d);b.addScaledVector(v,-b.dot(v)).normalize();let x=(g*g-_*_+y*y)/(2*y),S=p.clone().addScaledVector(v,x).addScaledVector(b,Math.sqrt(Math.max(0,g*g-x*x))),C=p.clone().addScaledVector(v,y);Ki(r.upper,r.lower,S),Ki(r.lower,r.wrist,C);let w=r.wrist.getWorldQuaternion(new B),T=r.blade.clone().applyQuaternion(w);return Gi(r.wrist,new B().setFromUnitVectors(T,f).multiply(w)),r.wrist.getWorldPosition(new E).distanceTo(u)}var Ji=new E(0,1,0),Yi=[2611711,16737405],Xi=14478591;function Zi(e,t=0,n=0){return new K({color:e,roughness:t?.3:.82,metalness:t,emissive:e,emissiveIntensity:n})}function Qi(e,t,n,r=0,i=0,a=0){let o=new H(t,n);return o.position.set(r,i,a),o.castShadow=Pe.cast,o.receiveShadow=!0,e.add(o),o}function Q(e,t,n,r=[0,0,0]){let i=Math.min(...n);return Qi(e,i>.045?new sn(n[0],n[1],n[2],1,i*.17):new ce(n[0],n[1],n[2]),t,...r)}function $i(e,t,n,r=[0,0,0],i=[1,1,1]){let a=Qi(e,new l(n,20,14),t,...r);return a.scale.set(...i),a}function $(e,t,n,r,i,a=[0,0,0],o=8){return Qi(e,new fe(n,r,i,Math.max(14,o)),t,...a)}function ea(e,t=0,n=0,r=0){let i=new U;return i.position.set(t,n,r),e.add(i),i}function ta(t,n,r,i,a){let o=ea(t,0,-.59,.035);o.rotation.x=Math.PI/2-.16,$(o,i,.045,.045,.24);for(let e=0;e<3;e++)$(o,r,.05,.05,.025,[0,-.075+e*.07,0]);if($i(o,r,.068,[0,-.16,0]),a===`katana`){$(o,r,.13,.13,.04,[0,.16,0],8);let t=new e;t.moveTo(-.045,.19),t.lineTo(-.035,1.01),t.lineTo(.105,1.28),t.lineTo(.11,1.08),t.lineTo(.07,.19),t.closePath(),Qi(o,new P(t,{depth:.027,bevelEnabled:!1}),n,0,0,-.015)}else{Q(o,r,[.4,.07,.1],[0,.15,0]);let t=new e;t.moveTo(-.1,.18),t.lineTo(-.1,.93),t.lineTo(0,1.17),t.lineTo(.1,.93),t.lineTo(.1,.18),t.closePath(),Qi(o,new P(t,{depth:.045,bevelEnabled:!0,bevelThickness:.012,bevelSize:.019,bevelSegments:1,steps:1}),n,0,0,-.025),Q(o,r,[.025,.75,.055],[0,.61,0])}return o}function na(e,t,n=1.02,r=.66){let i=ea(e,0,1.51,-.24),a=new me(1,1,10,12),o=a.getAttribute(`position`);for(let e=0;e<o.count;e++){let t=o.getX(e)+.5,i=.5-o.getY(e),a=.56+(r-.56)*i;o.setXYZ(e,(t-.5)*a,-i*n,-.2*i+Math.sin(t*Math.PI*8)*.024*i)}return a.computeVertexNormals(),t.side=2,Qi(i,a,t),i}function ra(e,t,n){$i(e,t,n?.23:.165,[0,-.08,0],[1,.72,1.03])}function ia(e,t){let n=[t.body,t.head,t.rightArm,t.leftArm,t.rightLeg,t.leftLeg,t.stars,...t.guns];t.cape&&n.push(t.cape);let r=new Set(n);t.halo&&r.add(t.halo),e.updateMatrixWorld(!0);for(let e of n){let t=new Map,n=e=>{for(let i of e.children)if(!r.has(i)){if(i instanceof H&&!Array.isArray(i.material)){let e=t.get(i.material)??[];e.push(i),t.set(i.material,e)}n(i)}};n(e);let i=e.matrixWorld.clone().invert();for(let[n,r]of t){if(r.length<2)continue;let t=r.map(e=>{let t=e.geometry.index?e.geometry.toNonIndexed():e.geometry.clone();return t.getAttribute(`uv`)||t.setAttribute(`uv`,new f(new Float32Array(t.getAttribute(`position`).count*2),2)),t.applyMatrix4(new z().multiplyMatrices(i,e.matrixWorld)),t.clearGroups(),t}),a=ae(t,!1);if(t.forEach(e=>e.dispose()),!a)continue;let o=new H(a,n);o.castShadow=Pe.cast,o.receiveShadow=!0,a.computeBoundingSphere(),e.add(o);for(let e of r)e.removeFromParent(),e.geometry.dispose()}}}function aa(e,t,n){if(Ct()!==`human`&&(n=void 0),e===`samurai`)return hi(t,n);let r=oa(e,t);return Ct()===`human`&&At(r,r.userData.rig,t,n),r}function oa(t,n){let r=new U,i=[];r.name=`${n===0?`azure`:`coral`}-${t}`;let a=[],o=(e,t=0,n=0)=>{let r=Zi(e,t,n);return a.push(r),r.userData.baseEmissive=n,r},s=o(Yi[n],.2,.22),c=o(1450812),u=o(2569550,.15),d=o(t===`ninja`?15316107:t===`gunner`?13275245:16041635),f=o(16774364),p=o(Xi,.72),m=o(16107358,.55),h=o(t===`healer`?16110737:t===`swordsman`?16107878:t===`mage`?15063533:3746619),g=o({swordsman:3235508,samurai:11026259,paladin:13474630,mage:6901922,gunner:10184011,ninja:2440281,healer:15263698}[t]),_=o(t===`healer`?5483144:t===`mage`?12095959:t===`samurai`?7875903:4019840),v=Vt().cloth;for(let e of[g,_,c])e.map=v,e.roughness=.93;s.emissiveIntensity=.085,s.userData.baseEmissive=.085;let y=ea(r),b=t===`paladin`,x=t===`ninja`,S=b?.77:x?.53:.63,C=$(y,g,S*.52,S*.41,.6,[0,1.18,0],6);C.scale.z=.71,Q(y,c,[S*.87,.13,.39],[0,.93,0]),Q(y,m,[.13,.14,.045],[0,.93,.213]);for(let e of[-1,1]){let t=Q(y,u,[.09,.53,.045],[e*.16,1.21,.239]);t.rotation.z=e*.32;for(let t=0;t<4;t++)$i(y,m,.013,[e*.22,1.08+t*.075,.245],[1,1,.5]);Q(y,u,[.14,.2,.14],[S*.46*e,.91,-.055])}$(y,d,.11,.12,.15,[0,1.55,0]),Q(y,s,[.18,.35,.035],[0,1.26,.24]),Q(y,s,[.21,.3,.035],[0,1.29,-.235]);let w=ea(y,-.16,.91,0),T=ea(y,.16,.91,0);for(let e of[w,T]){$(e,c,x?.105:.125,.1,.42,[0,-.19,0]),$(e,u,.115,.13,.3,[0,-.56,0]),Q(e,u,[.235,.15,.35],[0,-.825,.055]),Q(e,t===`paladin`?m:p,[.18,.15,.07],[0,-.46,.11]),Q(e,u,[.235,.035,.35],[0,-.894,.055]);for(let t=0;t<3;t++)Q(e,m,[.055,.02,.026],[-.08,-.51-t*.048,.125]);$(e,s,.122,.122,.045,[0,-.65,0])}let E=ea(y,-S*.62,1.48,0),D=ea(y,S*.62,1.48,0);for(let e of[E,D]){$(e,g,x?.095:.12,.09,.33,[0,-.17,0]),$(e,t===`healer`||t===`mage`?g:u,.12,.1,.22,[0,-.4,0]),$(e,s,.125,.125,.045,[0,-.43,0]),$i(e,d,.105,[0,-.565,0],[.85,1,.91]),ra(e,t===`paladin`?m:t===`swordsman`?p:g,b);for(let t of[-1,1])$i(e,m,.025,[t*(b?.16:.1),-.08,.09],[1,1,.6])}let O=ea(y,0,1.83,.018);if($i(O,d,.285,[0,0,0],[.95,1.09,.91]),$i(O,d,.068,[-.268,-.012,0]),$i(O,d,.068,[.268,-.012,0]),$i(O,h,.29,[0,.115,-.055],[1.02,.83,.92]),![`paladin`,`samurai`,`ninja`].includes(t))for(let e=0;e<14;e++){let t=e*Math.PI*2/14,n=Qi(O,new A(.085,.27+e%3*.017,7),h,Math.sin(t)*.23,.185+e%3*.012,Math.cos(t)*.2-.065);n.rotation.z=-Math.sin(t)*.95,n.rotation.x=Math.cos(t)*.7}for(let e of[-1,1]){Q(O,f,[.08,.081,.015],[e*.107,.018,.242]),Q(O,c,[.037,.058,.015],[e*.103,.011,.256]);let t=Q(O,h,[.103,.029,.024],[e*.111,.085,.24]);t.rotation.z=e*.08}$i(O,d,.048,[0,-.035,.263],[.65,.9,.8]),Q(O,o(11167325),[.07,.014,.012],[0,-.125,.245]);let k,M;if(t===`swordsman`){k=na(y,_,.93,.71),Q(k,s,[.14,.66,.028],[0,-.39,-.098]),ta(E,p,m,c,`sword`);for(let e=-1;e<=1;e++){let t=Qi(O,new A(.115,.25,4),h,e*.14,.27,.025);t.rotation.z=-e*.4,t.rotation.x=.2}Q(D,p,[.2,.24,.1],[0,-.38,.075]),Q(y,p,[.2,.25,.045],[-.18,1.27,.238])}else if(t===`samurai`){ta(E,p,m,c,`katana`);for(let e=0;e<3;e++)Q(y,e%2?_:g,[.56,.105,.08],[0,1.12+e*.115,.233]),Q(y,m,[.52,.018,.014],[0,1.13+e*.115,.28]);for(let e of[-.24,0,.24])Q(y,g,[.21,.3,.1],[e,.81,.21]),Q(y,m,[.17,.025,.015],[e,.73,.268]);$i(O,c,.305,[0,.13,-.035],[1.13,.8,1.08]),Q(O,g,[.59,.1,.5],[0,.1,-.07]);for(let e of[-1,1]){let t=Qi(O,new A(.06,.32,5),m,e*.19,.37,.13);t.rotation.z=-e*.42,Q(O,g,[.115,.31,.33],[e*.29,-.05,-.07])}$i(O,s,.073,[0,.22,.245],[.8,1,.55]);let e=Q(y,c,[.075,.93,.09],[.36,.81,-.05]);e.rotation.z=-.38,k=na(y,s,.65,.25)}else if(t===`paladin`){k=na(y,f,1.1,.85),Q(k,s,[.25,.78,.028],[0,-.44,-.11]);let t=$(y,m,.44,.34,.51,[0,1.22,.018],6);t.scale.z=.71,Q(y,f,[.065,.25,.03],[0,1.25,.3]),Q(y,f,[.22,.06,.03],[0,1.29,.305]),ta(E,p,m,c,`sword`).scale.setScalar(.82);let n=ea(D,.07,-.34,.15),r=new e;r.moveTo(-.34,.38),r.lineTo(.34,.38),r.lineTo(.34,-.19),r.lineTo(0,-.52),r.lineTo(-.34,-.19),r.closePath();let i=new P(r,{depth:.075,bevelEnabled:!0,bevelSize:.04,bevelThickness:.025,bevelSegments:1,steps:1});Qi(n,i,m),Qi(n,i,s,0,0,.1).scale.set(.81,.84,.32),Q(n,f,[.075,.49,.025],[0,.005,.15]),Q(n,f,[.34,.075,.025],[0,.085,.15]),$i(O,m,.305,[0,.12,-.07],[1.13,.87,1]),Q(O,m,[.62,.075,.22],[0,.12,.12]);for(let e of[-1,1])Q(O,m,[.075,.24,.18],[e*.265,-.07,.025]);let a=Qi(O,new A(.12,.3,5),s,0,.37,-.11);a.scale.z=1.8}else if(t===`mage`||t===`healer`){let e=$(y,g,.25,.45,.75,[0,.66,0],8);e.scale.z=.8,$(y,_,.44,.455,.08,[0,.3,0],8).scale.z=.8;for(let e of[-1,1]){let t=Q(y,_,[.1,.91,.035],[e*.15,.85,.29]);t.rotation.z=e*.055}let n=ea(E,0,-.55,.05);if($(n,t===`mage`?c:m,.04,.045,1.8,[0,.1,0]),$(n,m,.075,.075,.12,[0,.86,0]),$(n,s,.047,.047,.31,[0,-.03,0]),k=na(y,_,.88,.65),t===`mage`){$(O,g,.46,.46,.065,[0,.235,0],10);let e=Qi(O,new A(.32,.68,8),g,.035,.58,-.025);e.rotation.z=-.1,$(O,m,.288,.31,.07,[.006,.3,0]),$i(O,s,.065,[0,.32,.29],[1,1,.5]);let t=o(16748875,.2,.8),r=Qi(n,new je(.17,.035,5,8),m,0,1.02,0);r.rotation.z=Math.PI/4,Qi(n,new j(.13),t,0,1.06,0)}else{$i(O,h,.27,[0,-.12,-.095],[1.08,1.3,.7]);for(let e of[-1,1])$i(O,h,.1,[e*.21,-.23,.012],[.67,1.7,.8]);$(O,f,.281,.281,.075,[0,.17,0],12),Qi(O,new j(.075),s,0,.17,.275);let e=o(9174983,.2,.65);M=Qi(O,new je(.3,.025,6,24),m,0,.48,0),M.rotation.x=Math.PI/2,Qi(n,new je(.18,.035,6,16),m,0,1.04,0),Qi(n,new j(.12),e,0,1.04,0),Q(n,e,[.055,.24,.05],[0,1.05,0]),Q(n,e,[.21,.055,.05],[0,1.05,0])}}else if(t===`gunner`){k=na(y,g,.91,.76);for(let e of[-1,1]){let t=Q(y,g,[.23,.47,.18],[e*.245,.82,0]);t.rotation.z=e*.1;let n=Q(y,m,[.075,.39,.05],[e*.2,1.3,.235]);n.rotation.z=e*.25}for(let e of[E,D]){let t=ea(e,0,-.56,.04);i.push(t);let n=ea(t,0,.065,.462);n.name=`gun-muzzle`,Q(t,c,[.105,.18,.09],[0,-.04,.05]),Q(t,p,[.12,.115,.4],[0,.065,.21]),Q(t,m,[.14,.12,.08],[0,.065,.4]),Q(t,c,[.07,.07,.02],[0,.065,.444])}let e=$(O,c,.3,.3,.11,[0,.12,0]);e.scale.z=.9;for(let e of[-1,1])$(O,m,.092,.092,.04,[e*.105,.14,.255]).rotation.x=Math.PI/2,$i(O,s,.071,[e*.105,.14,.28],[1,.82,.24]);Q(y,c,[.4,.1,.05],[0,1.18,.253]).rotation.z=-.55;for(let e=0;e<4;e++)$(y,m,.025,.025,.085,[-.08+e*.06,1.2-e*.035,.295])}else{$i(O,c,.287,[0,-.12,.012],[1,.6,.91]),Q(O,c,[.42,.13,.14],[0,-.1,.21]),$(O,s,.293,.293,.085,[0,.14,0],12);let e=$(y,s,.19,.19,.16,[0,1.54,0],8);e.scale.z=1.04,k=na(y,s,.93,.22),k.position.x=.13,k.rotation.z=-.2,ta(E,p,c,c,`sword`).scale.set(.66,.56,.72),ta(D,p,c,c,`sword`).scale.set(.66,.56,.72),Q(y,p,[.09,.7,.075],[0,1.15,-.26]).rotation.z=-.6,Q(y,c,[.15,.23,.15],[.3,.95,.025])}let N=ea(r,0,t===`mage`?2.95:2.48,0),F=o(16767339,.15,.5);for(let e=0;e<3;e++){let t=e*Math.PI*2/3,n=Qi(N,new j(.115),F,Math.cos(t)*.4,e*.035,Math.sin(t)*.4);n.scale.y=1.2}N.visible=!1;let ee=sa(t);r.add(ee);let te={body:y,head:O,rightArm:E,leftArm:D,rightLeg:w,leftLeg:T,cape:k,halo:M,stars:N,materials:a,role:t,guns:i,swingTrail:ee};r.userData.rig=te,ia(r,te);for(let e of i){let t=new H(new l(.11,8,6),new V({color:`#fff3b2`,transparent:!0,opacity:.9,depthWrite:!1}));t.name=`muzzle-flash`,t.position.set(0,.065,.51),t.scale.set(1,1,2.4),t.visible=!1,e.add(t)}return r}function sa(e){let t=.6+.72,n=pt(e)+.72,r=Math.acos(Ot.showAngle)*.55,i=new G(t,n,30,1,-Math.PI/2-r,r*2),a=i.getAttribute(`position`),o=new Float32Array(a.count*3),s=n-t;for(let e=0;e<a.count;e++){let n=(Math.hypot(a.getX(e),a.getY(e))-t)/s,r=+(Math.abs(n-Ie.core)<=Ie.criticalBand);o[e*3]=.72+r*.28,o[e*3+1]=.86+r*.14,o[e*3+2]=1}i.setAttribute(`color`,new R(o,3));let c=new H(i,new V({vertexColors:!0,transparent:!0,opacity:0,side:2,depthWrite:!1}));return c.rotation.x=-Math.PI/2,c.position.y=1.02,c.visible=!1,c.userData.noFade=!0,c}function ca(e,t,n,r){if(e.userData.samurai){Ei(e,t,n);return}let i=e.userData.rig;if(!i)return;let a=t.hitStop>0?e.userData.poseTime??n:e.userData.poseTime=n,o=t.stun>0;if(o)for(let e of i.guns)e.getObjectByName(`muzzle-flash`).visible=!1;let s=o?0:Math.min(1,t.moving),c=Math.sin(a*(i.role===`ninja`?15:11)+t.id*.6)*s,l=t.action>0?Math.sin(Math.min(1,t.action/.4)*Math.PI):0;if(i.body.position.y=Math.abs(c)*.055+Math.sin(a*2.4+t.id)*.009,i.body.rotation.x=o?.07:s*.09,i.body.rotation.z=o?Math.sin(a*5+t.id)*.14:-c*.022,i.body.rotation.y=l*(i.role===`swordsman`||i.role===`samurai`?.85:.2),i.rightLeg.rotation.x=c*.58,i.leftLeg.rotation.x=-c*.58,i.rightArm.rotation.x=-.24-c*.25-l*.9,i.leftArm.rotation.x=-.15+c*.28-l*.4,i.rightArm.rotation.z=.04-l*.65,i.leftArm.rotation.z=-.04,i.rightArm.rotation.y=-l*1.6,i.role===`gunner`?(i.rightArm.rotation.x=-.85-l*.35,i.leftArm.rotation.x=-.75-l*.3):i.role===`mage`||i.role===`healer`?(i.rightArm.rotation.x=-.12-l*.45,i.rightArm.rotation.z=.09,i.rightArm.rotation.y=0,i.leftArm.rotation.x=-.22-l*1.1,i.leftArm.rotation.z=-l*.6):i.role===`ninja`&&(i.rightArm.rotation.x=.25-l*1.45,i.leftArm.rotation.x=.25-l*1.1,i.body.rotation.x=s*.18),(t.guard>0&&t.attackKind!==`melee`||t.blocking)&&(i.leftArm.rotation.x=-.7,i.rightArm.rotation.x=-.5),i.role===`paladin`&&t.attackKind===`wall`&&t.action>0&&!o){let e=1-t.action/Qe.cast,n=W.smoothstep(e,0,.3)*(1-W.smoothstep(e,.75,1));i.body.rotation.y=0,i.body.rotation.x=s*.09-.08*n,i.rightArm.rotation.set(-.24-1.21*n,0,.04+.28*n),i.leftArm.rotation.set(-.15-.45*n,0,-.04-.12*n)}if(t.attackKind===`melee`&&t.action>0&&!o){let e=ot[i.role],n=ft(i.role),r=Tt,a=e.duration-t.action,o=Math.min(1,a/Math.max(n.windup,1e-4)),c=W.smoothstep(a,n.windup,n.active),l=o*(1-W.smoothstep(a,n.active+r.hold,e.duration)),u=(e,t)=>(e*r.windupAmp*(1-c)+t*r.cutAmp*c)*l;if(i.body.rotation.y=u(-.32,.38),i.role===`mage`||i.role===`healer`?(i.rightArm.rotation.set(u(-1.1,.95),u(-.25,.4),u(.25,-.55)),i.leftArm.rotation.x=-.35-l*.5,i.body.rotation.x=s*.09+Math.sin(c*Math.PI)*.16*r.cutAmp):(i.rightArm.rotation.set(u(-1.35,.15),u(-.95,1.15),u(-.25,.3)),i.role===`ninja`&&i.leftArm.rotation.set(-.6*l,.7*l,.2*l)),i.swingTrail.visible=c>0&&c<1,i.swingTrail.visible){i.swingTrail.rotation.set(-Math.PI/2,0,u(-.32,.38));let e=i.swingTrail.material;e.opacity=.34*Math.sin(Math.min(1,c)*Math.PI)}}else i.swingTrail&&(i.swingTrail.visible=!1);if(i.role===`gunner`&&!o){let e=t.attackKind===`shot`?Math.max(0,1-(.35-t.action)/.16):0;i.body.rotation.set(0,0,0),i.body.position.y=0,i.rightArm.rotation.set(-1.45-e*.1,0,.04),i.leftArm.rotation.set(-1.4,0,-.04),i.guns.forEach((t,n)=>{t.rotation.set(n===0?1.45:1.4,0,0),t.getObjectByName(`muzzle-flash`).visible=n===0&&e>.45})}if((t.windup??0)>0&&!o){let e=t.windupSlot;i.role===`mage`?(i.leftArm.rotation.set(-1.4,0,-.3),i.rightArm.rotation.set(-.5,0,.2),i.body.rotation.set(-.08,-.25,0)):i.role===`gunner`&&e===3?(i.rightArm.rotation.set(-1.3,0,-.6),i.leftArm.rotation.set(-1.3,0,.6)):i.role===`gunner`?(i.rightArm.rotation.set(-1.55,0,-.25),i.leftArm.rotation.set(-1.55,0,.3),i.body.rotation.set(-.1,0,0)):i.role===`ninja`?(i.rightArm.rotation.set(-.5,1.1,.5),i.leftArm.rotation.set(-.3,0,-.2),i.body.rotation.set(.05,-.4,0)):i.role===`paladin`&&(i.leftArm.rotation.set(-1.15,0,-.1),i.rightArm.rotation.set(-.3,0,.1),i.body.rotation.set(.2,0,0),i.body.position.y-=.06)}t.charge>0&&(i.rightArm.rotation.x=-1.95,i.rightArm.rotation.z=-.15,i.body.rotation.y=-.28);let u=at(t),d=o?0:u.f*u.s;i.head.rotation.x=.35*u.along*d,d>0&&(i.body.rotation.x+=.42*u.along*d,i.body.rotation.z+=.3*u.side*d,i.body.rotation.y+=.25*u.side*d,i.body.position.y-=.04*d,i.rightArm.rotation.x-=.9*d,i.leftArm.rotation.x-=.7*d,i.rightArm.rotation.z-=.35*d,i.leftArm.rotation.z+=.35*d,i.rightLeg.rotation.x+=.45*d,i.leftLeg.rotation.x-=.2*d),o?(i.head.rotation.z=Math.sin(a*4)*.1,i.rightArm.rotation.x=.07,i.leftArm.rotation.x=.07,i.rightArm.rotation.z=.2,i.leftArm.rotation.z=-.2):i.head.rotation.z=0;let f=t.dash&&Ke(t.dash.presentation)?t.dash:void 0;if(i.body.position.x=0,i.body.position.z=0,i.body.scale.setScalar(1),f&&(f.presentation===`dodge-roll`||f.presentation===`dodge-step`)){let t=W.clamp(1-f.left/Ze.length,0,1),n=new E(f.dir.x,0,f.dir.z).applyAxisAngle(Ji,-e.rotation.y),r=new E().crossVectors(Ji,n).normalize();if(f.presentation===`dodge-roll`){let e=1-J.roll.tuck*Math.sin(Math.PI*t);i.body.quaternion.setFromAxisAngle(r,Math.PI*2*J.roll.turns*t),i.body.scale.setScalar(e);let n=new E(0,J.roll.center*e,0);i.body.position.copy(n).sub(n.clone().applyQuaternion(i.body.quaternion))}else{let e=Math.sin(Math.PI*t);i.body.quaternion.setFromAxisAngle(r,J.step.lean*e),i.body.position.set(0,J.step.hop*e,0)}}i.cape&&(i.cape.rotation.x=.03+s*.27+Math.sin(a*5+t.id)*(.025+s*.06)),i.halo&&(i.halo.position.y=.48+Math.sin(a*2.5)*.04),i.stars.visible=o,i.stars.rotation.y=a*2.1;for(let e of i.materials)e.emissiveIntensity=e.userData.baseEmissive+.3*Math.max(0,t.hitFlash)/.25;let p=e.userData.yuruParty;p&&(Lt(p,Math.max(0,t.hitFlash)),e.userData.motionError=qi(i.body,p,t))}function la(e,t){let n=e.userData.rig;if(!n?.guns.length)return;e.updateMatrixWorld(!0);for(let e of n.guns){let n=e.getWorldPosition(new E),r=t.clone().sub(n).normalize(),i=new B().setFromUnitVectors(new E(0,0,1),r);e.quaternion.copy(e.parent.getWorldQuaternion(new B).invert().multiply(i)),e.updateMatrixWorld(!0)}let r=e.userData.yuruParty;return r&&Ft(e,r,t),n.guns[0].getObjectByName(`gun-muzzle`).getWorldPosition(new E)}function ua(e,t,n,r){let i=(e,t)=>e.role===t.role&&e.team===t.team&&(e.look??``)===(r.look?.(t)??``);for(let a of t){let t=e.get(a.id);t&&!i(t,a)&&r.ready(a)&&(e.delete(a.id),n.push(t),r.park(t))}for(let a of t){if(e.has(a.id)||!r.ready(a))continue;let t=n.findIndex(e=>i(e,a));if(t<0){e.set(a.id,r.create(a));continue}let[o]=n.splice(t,1);r.unpark(o),e.set(a.id,o)}}var da=class extends S{constructor(){super(),this.name=`RoomEnvironment`,this.position.y=-3.5;let e=new ce;e.deleteAttribute(`uv`);let n=new K({side:1}),r=new K,i=new t(16777215,900,28,2);i.position.set(.418,16.199,.3),this.add(i);let a=new H(e,n);a.position.set(-.757,13.219,.717),a.scale.set(31.713,28.305,28.591),this.add(a);let o=new T(e,r,6),s=new De;s.position.set(-10.906,2.009,1.846),s.rotation.set(0,-.195,0),s.scale.set(2.328,7.905,4.651),s.updateMatrix(),o.setMatrixAt(0,s.matrix),s.position.set(-5.607,-.754,-.758),s.rotation.set(0,.994,0),s.scale.set(1.97,1.534,3.955),s.updateMatrix(),o.setMatrixAt(1,s.matrix),s.position.set(6.167,.857,7.803),s.rotation.set(0,.561,0),s.scale.set(3.927,6.285,3.687),s.updateMatrix(),o.setMatrixAt(2,s.matrix),s.position.set(-2.017,.018,6.124),s.rotation.set(0,.333,0),s.scale.set(2.002,4.566,2.064),s.updateMatrix(),o.setMatrixAt(3,s.matrix),s.position.set(2.291,-.756,-2.621),s.rotation.set(0,-.286,0),s.scale.set(1.546,1.552,1.496),s.updateMatrix(),o.setMatrixAt(4,s.matrix),s.position.set(-2.193,-.369,-5.547),s.rotation.set(0,.516,0),s.scale.set(3.875,3.487,2.986),s.updateMatrix(),o.setMatrixAt(5,s.matrix),this.add(o);let c=new H(e,fa(50));c.position.set(-16.116,14.37,8.208),c.scale.set(.1,2.428,2.739),this.add(c);let l=new H(e,fa(50));l.position.set(-16.109,18.021,-8.207),l.scale.set(.1,2.425,2.751),this.add(l);let u=new H(e,fa(17));u.position.set(14.904,12.198,-1.832),u.scale.set(.15,4.265,6.331),this.add(u);let d=new H(e,fa(43));d.position.set(-.462,8.89,14.52),d.scale.set(4.38,5.441,.088),this.add(d);let f=new H(e,fa(20));f.position.set(3.235,11.486,-12.541),f.scale.set(2.5,2,.1),this.add(f);let p=new H(e,fa(100));p.position.set(0,20,0),p.scale.set(1,.1,1),this.add(p)}dispose(){let e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(let t of e)t.dispose()}};function fa(e){return new ne({color:0,emissive:16777215,emissiveIntensity:e})}var pa={name:`CopyShader`,uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`},ma=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error(`THREE.Pass: .render() must be implemented in derived pass.`)}dispose(){}},ha=new s(-1,1,1,-1,0,1),ga=new class extends we{constructor(){super(),this.setAttribute(`position`,new f([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute(`uv`,new f([0,2,0,0,2,0],2))}},_a=class{constructor(e){this._mesh=new H(ga,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,ha)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}},va=class extends ma{constructor(e,t=`tDiffuse`){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof pe?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=p.clone(e.uniforms),this.material=new pe({name:e.name===void 0?`unspecified`:e.name,defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new _a(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}},ya=class extends ma{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){let r=e.getContext(),i=e.state;i.buffers.color.setMask(!1),i.buffers.depth.setMask(!1),i.buffers.color.setLocked(!0),i.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),i.buffers.stencil.setTest(!0),i.buffers.stencil.setOp(r.REPLACE,r.REPLACE,r.REPLACE),i.buffers.stencil.setFunc(r.ALWAYS,a,4294967295),i.buffers.stencil.setClear(o),i.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),i.buffers.color.setLocked(!1),i.buffers.depth.setLocked(!1),i.buffers.color.setMask(!0),i.buffers.depth.setMask(!0),i.buffers.stencil.setLocked(!1),i.buffers.stencil.setFunc(r.EQUAL,1,4294967295),i.buffers.stencil.setOp(r.KEEP,r.KEEP,r.KEEP),i.buffers.stencil.setLocked(!0)}},ba=class extends ma{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}},xa=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let n=e.getSize(new L);this._width=n.width,this._height=n.height,t=new Se(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:h}),t.texture.name=`EffectComposer.rt1`}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name=`EffectComposer.rt2`,this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new va(pa),this.copyPass.material.blending=0,this.timer=new O}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){this.timer.update(),e===void 0&&(e=this.timer.getDelta());let t=this.renderer.getRenderTarget(),n=!1;for(let t=0,r=this.passes.length;t<r;t++){let r=this.passes[t];if(r.enabled!==!1){if(r.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(t),r.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),r.needsSwap){if(n){let t=this.renderer.getContext(),n=this.renderer.state.buffers.stencil;n.setFunc(t.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),n.setFunc(t.EQUAL,1,4294967295)}this.swapBuffers()}ya!==void 0&&(r instanceof ya?n=!0:r instanceof ba&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new L);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let n=this._width*this._pixelRatio,r=this._height*this._pixelRatio;this.renderTarget1.setSize(n,r),this.renderTarget2.setSize(n,r);for(let e=0;e<this.passes.length;e++)this.passes[e].setSize(n,r)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}},Sa=class extends ma{constructor(e,t,n=null,i=null,a=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=i,this.clearAlpha=a,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new r}render(e,t,n){let r=e.autoClear;e.autoClear=!1;let i,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(i=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==1&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(i),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),e.autoClear=r}},Ca={name:`GTAOShader`,defines:{PERSPECTIVE_CAMERA:1,SAMPLES:16,NORMAL_VECTOR_TYPE:1,DEPTH_SWIZZLING:`x`,SCREEN_SPACE_RADIUS:0,SCREEN_SPACE_RADIUS_SCALE:100,SCENE_CLIP_BOX:0},uniforms:{tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new L},cameraNear:{value:null},cameraFar:{value:null},cameraProjectionMatrix:{value:new z},cameraProjectionMatrixInverse:{value:new z},cameraWorldMatrix:{value:new z},radius:{value:.25},distanceExponent:{value:1},thickness:{value:1},distanceFallOff:{value:1},scale:{value:1},sceneBoxMin:{value:new E(-1,-1,-1)},sceneBoxMax:{value:new E(1,1,1)}},vertexShader:`

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
		}`},wa={name:`GTAODepthShader`,defines:{PERSPECTIVE_CAMERA:1},uniforms:{tDepth:{value:null},cameraNear:{value:null},cameraFar:{value:null}},vertexShader:`
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

		}`},Ta={name:`GTAOBlendShader`,uniforms:{tDiffuse:{value:null},intensity:{value:1}},vertexShader:`
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
		}`};function Ea(e=5){let t=Math.floor(e)%2==0?Math.floor(e)+1:Math.floor(e),n=Da(t),r=n.length,i=new Uint8Array(r*4);for(let e=0;e<r;++e){let t=n[e],a=2*Math.PI*t/r,o=new E(Math.cos(a),Math.sin(a),0).normalize();i[e*4]=(o.x*.5+.5)*255,i[e*4+1]=(o.y*.5+.5)*255,i[e*4+2]=127,i[e*4+3]=255}let a=new y(i,t,t);return a.wrapS=Ae,a.wrapT=Ae,a.needsUpdate=!0,a}function Da(e){let t=Math.floor(e)%2==0?Math.floor(e)+1:Math.floor(e),n=t*t,r=Array(n).fill(0),i=Math.floor(t/2),a=t-1;for(let e=1;e<=n;){if(i===-1&&a===t?(a=t-2,i=0):(a===t&&(a=0),i<0&&(i=t-1)),r[i*t+a]!==0){a-=2,i++;continue}r[i*t+a]=e++,a++,i--}return r}var Oa={name:`PoissonDenoiseShader`,defines:{SAMPLES:16,SAMPLE_VECTORS:ka(16,2,1),NORMAL_VECTOR_TYPE:1,DEPTH_VALUE_SOURCE:0},uniforms:{tDiffuse:{value:null},tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new L},cameraProjectionMatrixInverse:{value:new z},lumaPhi:{value:5},depthPhi:{value:5},normalPhi:{value:5},radius:{value:4},index:{value:0}},vertexShader:`

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
		}`};function ka(e,t,n){let r=Aa(e,t,n),i=`vec3[SAMPLES](`;for(let t=0;t<e;t++){let n=r[t];i+=`vec3(${n.x}, ${n.y}, ${n.z})${t<e-1?`,`:`)`}`}return i}function Aa(e,t,n){let r=[];for(let i=0;i<e;i++){let a=2*Math.PI*t*i/e,o=(i/(e-1))**n;r.push(new E(Math.cos(a),Math.sin(a),o))}return r}var ja=class{constructor(e=Math){this.grad3=[[1,1,0],[-1,1,0],[1,-1,0],[-1,-1,0],[1,0,1],[-1,0,1],[1,0,-1],[-1,0,-1],[0,1,1],[0,-1,1],[0,1,-1],[0,-1,-1]],this.grad4=[[0,1,1,1],[0,1,1,-1],[0,1,-1,1],[0,1,-1,-1],[0,-1,1,1],[0,-1,1,-1],[0,-1,-1,1],[0,-1,-1,-1],[1,0,1,1],[1,0,1,-1],[1,0,-1,1],[1,0,-1,-1],[-1,0,1,1],[-1,0,1,-1],[-1,0,-1,1],[-1,0,-1,-1],[1,1,0,1],[1,1,0,-1],[1,-1,0,1],[1,-1,0,-1],[-1,1,0,1],[-1,1,0,-1],[-1,-1,0,1],[-1,-1,0,-1],[1,1,1,0],[1,1,-1,0],[1,-1,1,0],[1,-1,-1,0],[-1,1,1,0],[-1,1,-1,0],[-1,-1,1,0],[-1,-1,-1,0]],this.p=[];for(let t=0;t<256;t++)this.p[t]=Math.floor(e.random()*256);this.perm=[];for(let e=0;e<512;e++)this.perm[e]=this.p[e&255];this.simplex=[[0,1,2,3],[0,1,3,2],[0,0,0,0],[0,2,3,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,3,0],[0,2,1,3],[0,0,0,0],[0,3,1,2],[0,3,2,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,3,2,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,0,3],[0,0,0,0],[1,3,0,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,3,0,1],[2,3,1,0],[1,0,2,3],[1,0,3,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,3,1],[0,0,0,0],[2,1,3,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,1,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,0,1,2],[3,0,2,1],[0,0,0,0],[3,1,2,0],[2,1,0,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,1,0,2],[0,0,0,0],[3,2,0,1],[3,2,1,0]]}noise(e,t){let n,r,i,a=.5*(Math.sqrt(3)-1),o=(e+t)*a,s=Math.floor(e+o),c=Math.floor(t+o),l=(3-Math.sqrt(3))/6,u=(s+c)*l,d=s-u,f=c-u,p=e-d,m=t-f,h,g;p>m?(h=1,g=0):(h=0,g=1);let _=p-h+l,v=m-g+l,y=p-1+2*l,b=m-1+2*l,x=s&255,S=c&255,C=this.perm[x+this.perm[S]]%12,w=this.perm[x+h+this.perm[S+g]]%12,T=this.perm[x+1+this.perm[S+1]]%12,E=.5-p*p-m*m;E<0?n=0:(E*=E,n=E*E*this._dot(this.grad3[C],p,m));let D=.5-_*_-v*v;D<0?r=0:(D*=D,r=D*D*this._dot(this.grad3[w],_,v));let O=.5-y*y-b*b;return O<0?i=0:(O*=O,i=O*O*this._dot(this.grad3[T],y,b)),70*(n+r+i)}noise3d(e,t,n){let r,i,a,o,s=(e+t+n)*(1/3),c=Math.floor(e+s),l=Math.floor(t+s),u=Math.floor(n+s),d=1/6,f=(c+l+u)*d,p=c-f,m=l-f,h=u-f,g=e-p,_=t-m,v=n-h,y,b,x,S,C,w;g>=_?_>=v?(y=1,b=0,x=0,S=1,C=1,w=0):g>=v?(y=1,b=0,x=0,S=1,C=0,w=1):(y=0,b=0,x=1,S=1,C=0,w=1):_<v?(y=0,b=0,x=1,S=0,C=1,w=1):g<v?(y=0,b=1,x=0,S=0,C=1,w=1):(y=0,b=1,x=0,S=1,C=1,w=0);let T=g-y+d,E=_-b+d,D=v-x+d,O=g-S+2*d,k=_-C+2*d,A=v-w+2*d,j=g-1+3*d,M=_-1+3*d,N=v-1+3*d,P=c&255,F=l&255,ee=u&255,te=this.perm[P+this.perm[F+this.perm[ee]]]%12,I=this.perm[P+y+this.perm[F+b+this.perm[ee+x]]]%12,L=this.perm[P+S+this.perm[F+C+this.perm[ee+w]]]%12,R=this.perm[P+1+this.perm[F+1+this.perm[ee+1]]]%12,ne=.6-g*g-_*_-v*v;ne<0?r=0:(ne*=ne,r=ne*ne*this._dot3(this.grad3[te],g,_,v));let re=.6-T*T-E*E-D*D;re<0?i=0:(re*=re,i=re*re*this._dot3(this.grad3[I],T,E,D));let ie=.6-O*O-k*k-A*A;ie<0?a=0:(ie*=ie,a=ie*ie*this._dot3(this.grad3[L],O,k,A));let ae=.6-j*j-M*M-N*N;return ae<0?o=0:(ae*=ae,o=ae*ae*this._dot3(this.grad3[R],j,M,N)),32*(r+i+a+o)}noise4d(e,t,n,r){let i=this.grad4,a=this.simplex,o=this.perm,s=(Math.sqrt(5)-1)/4,c=(5-Math.sqrt(5))/20,l,u,d,f,p,m=(e+t+n+r)*s,h=Math.floor(e+m),g=Math.floor(t+m),_=Math.floor(n+m),v=Math.floor(r+m),y=(h+g+_+v)*c,b=h-y,x=g-y,S=_-y,C=v-y,w=e-b,T=t-x,E=n-S,D=r-C,O=w>T?32:0,k=w>E?16:0,A=T>E?8:0,j=w>D?4:0,M=T>D?2:0,N=+(E>D),P=O+k+A+j+M+N,F=+(a[P][0]>=3),ee=+(a[P][1]>=3),te=+(a[P][2]>=3),I=+(a[P][3]>=3),L=+(a[P][0]>=2),R=+(a[P][1]>=2),ne=+(a[P][2]>=2),re=+(a[P][3]>=2),ie=+(a[P][0]>=1),ae=+(a[P][1]>=1),oe=+(a[P][2]>=1),se=+(a[P][3]>=1),z=w-F+c,ce=T-ee+c,le=E-te+c,ue=D-I+c,de=w-L+2*c,B=T-R+2*c,fe=E-ne+2*c,pe=D-re+2*c,me=w-ie+3*c,he=T-ae+3*c,ge=E-oe+3*c,V=D-se+3*c,_e=w-1+4*c,ve=T-1+4*c,ye=E-1+4*c,H=D-1+4*c,U=h&255,be=g&255,xe=_&255,Se=v&255,Ce=o[U+o[be+o[xe+o[Se]]]]%32,W=o[U+F+o[be+ee+o[xe+te+o[Se+I]]]]%32,we=o[U+L+o[be+R+o[xe+ne+o[Se+re]]]]%32,Te=o[U+ie+o[be+ae+o[xe+oe+o[Se+se]]]]%32,Ee=o[U+1+o[be+1+o[xe+1+o[Se+1]]]]%32,De=.6-w*w-T*T-E*E-D*D;De<0?l=0:(De*=De,l=De*De*this._dot4(i[Ce],w,T,E,D));let Oe=.6-z*z-ce*ce-le*le-ue*ue;Oe<0?u=0:(Oe*=Oe,u=Oe*Oe*this._dot4(i[W],z,ce,le,ue));let G=.6-de*de-B*B-fe*fe-pe*pe;G<0?d=0:(G*=G,d=G*G*this._dot4(i[we],de,B,fe,pe));let ke=.6-me*me-he*he-ge*ge-V*V;ke<0?f=0:(ke*=ke,f=ke*ke*this._dot4(i[Te],me,he,ge,V));let Ae=.6-_e*_e-ve*ve-ye*ye-H*H;return Ae<0?p=0:(Ae*=Ae,p=Ae*Ae*this._dot4(i[Ee],_e,ve,ye,H)),27*(l+u+d+f+p)}_dot(e,t,n){return e[0]*t+e[1]*n}_dot3(e,t,n,r){return e[0]*t+e[1]*n+e[2]*r}_dot4(e,t,n,r,i){return e[0]*t+e[1]*n+e[2]*r+e[3]*i}},Ma=class e extends ma{constructor(e,t,n=512,i=512,a,o,s){super(),this.width=n,this.height=i,this.clear=!0,this.camera=t,this.scene=e,this.output=0,this._renderGBuffer=!0,this._visibilityCache=[],this.blendIntensity=1,this.pdRings=2,this.pdRadiusExponent=2,this.pdSamples=16,this.gtaoNoiseTexture=Ea(),this.pdNoiseTexture=this._generateNoise(),this.gtaoRenderTarget=new Se(this.width,this.height,{type:h}),this.pdRenderTarget=this.gtaoRenderTarget.clone(),this.gtaoMaterial=new pe({defines:Object.assign({},Ca.defines),uniforms:p.clone(Ca.uniforms),vertexShader:Ca.vertexShader,fragmentShader:Ca.fragmentShader,blending:0,depthTest:!1,depthWrite:!1}),this.gtaoMaterial.defines.PERSPECTIVE_CAMERA=+!!this.camera.isPerspectiveCamera,this.gtaoMaterial.uniforms.tNoise.value=this.gtaoNoiseTexture,this.gtaoMaterial.uniforms.resolution.value.set(this.width,this.height),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.normalMaterial=new Te,this.normalMaterial.blending=0,this.pdMaterial=new pe({defines:Object.assign({},Oa.defines),uniforms:p.clone(Oa.uniforms),vertexShader:Oa.vertexShader,fragmentShader:Oa.fragmentShader,depthTest:!1,depthWrite:!1}),this.pdMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.pdMaterial.uniforms.tNoise.value=this.pdNoiseTexture,this.pdMaterial.uniforms.resolution.value.set(this.width,this.height),this.pdMaterial.uniforms.lumaPhi.value=10,this.pdMaterial.uniforms.depthPhi.value=2,this.pdMaterial.uniforms.normalPhi.value=3,this.pdMaterial.uniforms.radius.value=8,this.depthRenderMaterial=new pe({defines:Object.assign({},wa.defines),uniforms:p.clone(wa.uniforms),vertexShader:wa.vertexShader,fragmentShader:wa.fragmentShader,blending:0}),this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.copyMaterial=new pe({uniforms:p.clone(pa.uniforms),vertexShader:pa.vertexShader,fragmentShader:pa.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blendSrc:208,blendDst:200,blendEquation:100,blendSrcAlpha:206,blendDstAlpha:200,blendEquationAlpha:100}),this.blendMaterial=new pe({uniforms:p.clone(Ta.uniforms),vertexShader:Ta.vertexShader,fragmentShader:Ta.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blending:5,blendSrc:208,blendDst:200,blendEquation:100,blendSrcAlpha:206,blendDstAlpha:200,blendEquationAlpha:100}),this._fsQuad=new _a(null),this._originalClearColor=new r,this.setGBuffer(a?a.depthTexture:void 0,a?a.normalTexture:void 0),o!==void 0&&this.updateGtaoMaterial(o),s!==void 0&&this.updatePdMaterial(s)}setSize(e,t){this.width=e,this.height=t,this.gtaoRenderTarget.setSize(e,t),this.normalRenderTarget.setSize(e,t),this.pdRenderTarget.setSize(e,t),this.gtaoMaterial.uniforms.resolution.value.set(e,t),this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.pdMaterial.uniforms.resolution.value.set(e,t),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse)}dispose(){this.gtaoNoiseTexture.dispose(),this.pdNoiseTexture.dispose(),this.normalRenderTarget.dispose(),this.gtaoRenderTarget.dispose(),this.pdRenderTarget.dispose(),this.normalMaterial.dispose(),this.pdMaterial.dispose(),this.copyMaterial.dispose(),this.depthRenderMaterial.dispose(),this._fsQuad.dispose()}get gtaoMap(){return this.pdRenderTarget.texture}setGBuffer(e,t){e===void 0?(this.depthTexture=new c,this.depthTexture.format=C,this.depthTexture.type=d,this.normalRenderTarget=new Se(this.width,this.height,{minFilter:ke,magFilter:ke,type:h,depthTexture:this.depthTexture}),this.normalTexture=this.normalRenderTarget.texture,this._renderGBuffer=!0):(this.depthTexture=e,this.normalTexture=t,this._renderGBuffer=!1);let n=+!!this.normalTexture,r=this.depthTexture===this.normalTexture?`w`:`x`;this.gtaoMaterial.defines.NORMAL_VECTOR_TYPE=n,this.gtaoMaterial.defines.DEPTH_SWIZZLING=r,this.gtaoMaterial.uniforms.tNormal.value=this.normalTexture,this.gtaoMaterial.uniforms.tDepth.value=this.depthTexture,this.pdMaterial.defines.NORMAL_VECTOR_TYPE=n,this.pdMaterial.defines.DEPTH_SWIZZLING=r,this.pdMaterial.uniforms.tNormal.value=this.normalTexture,this.pdMaterial.uniforms.tDepth.value=this.depthTexture,this.depthRenderMaterial.uniforms.tDepth.value=this.normalRenderTarget.depthTexture}setSceneClipBox(e){e?(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX!==1,this.gtaoMaterial.defines.SCENE_CLIP_BOX=1,this.gtaoMaterial.uniforms.sceneBoxMin.value.copy(e.min),this.gtaoMaterial.uniforms.sceneBoxMax.value.copy(e.max)):(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX===0,this.gtaoMaterial.defines.SCENE_CLIP_BOX=0)}updateGtaoMaterial(e){e.radius!==void 0&&(this.gtaoMaterial.uniforms.radius.value=e.radius),e.distanceExponent!==void 0&&(this.gtaoMaterial.uniforms.distanceExponent.value=e.distanceExponent),e.thickness!==void 0&&(this.gtaoMaterial.uniforms.thickness.value=e.thickness),e.distanceFallOff!==void 0&&(this.gtaoMaterial.uniforms.distanceFallOff.value=e.distanceFallOff,this.gtaoMaterial.needsUpdate=!0),e.scale!==void 0&&(this.gtaoMaterial.uniforms.scale.value=e.scale),e.samples!==void 0&&e.samples!==this.gtaoMaterial.defines.SAMPLES&&(this.gtaoMaterial.defines.SAMPLES=e.samples,this.gtaoMaterial.needsUpdate=!0),e.screenSpaceRadius!==void 0&&+!!e.screenSpaceRadius!==this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS&&(this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS=+!!e.screenSpaceRadius,this.gtaoMaterial.needsUpdate=!0)}updatePdMaterial(e){let t=!1;e.lumaPhi!==void 0&&(this.pdMaterial.uniforms.lumaPhi.value=e.lumaPhi),e.depthPhi!==void 0&&(this.pdMaterial.uniforms.depthPhi.value=e.depthPhi),e.normalPhi!==void 0&&(this.pdMaterial.uniforms.normalPhi.value=e.normalPhi),e.radius!==void 0&&e.radius!==this.radius&&(this.pdMaterial.uniforms.radius.value=e.radius),e.radiusExponent!==void 0&&e.radiusExponent!==this.pdRadiusExponent&&(this.pdRadiusExponent=e.radiusExponent,t=!0),e.rings!==void 0&&e.rings!==this.pdRings&&(this.pdRings=e.rings,t=!0),e.samples!==void 0&&e.samples!==this.pdSamples&&(this.pdSamples=e.samples,t=!0),t&&(this.pdMaterial.defines.SAMPLES=this.pdSamples,this.pdMaterial.defines.SAMPLE_VECTORS=ka(this.pdSamples,this.pdRings,this.pdRadiusExponent),this.pdMaterial.needsUpdate=!0)}render(t,n,r){switch(this._renderGBuffer&&(this._overrideVisibility(),this._renderOverride(t,this.normalMaterial,this.normalRenderTarget,7829503,1),this._restoreVisibility()),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.gtaoMaterial.uniforms.cameraWorldMatrix.value.copy(this.camera.matrixWorld),this._renderPass(t,this.gtaoMaterial,this.gtaoRenderTarget,16777215,1),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this._renderPass(t,this.pdMaterial,this.pdRenderTarget,16777215,1),this.output){case e.OUTPUT.Off:break;case e.OUTPUT.Diffuse:this.copyMaterial.uniforms.tDiffuse.value=r.texture,this.copyMaterial.blending=0,this._renderPass(t,this.copyMaterial,this.renderToScreen?null:n);break;case e.OUTPUT.AO:this.copyMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.copyMaterial.blending=0,this._renderPass(t,this.copyMaterial,this.renderToScreen?null:n);break;case e.OUTPUT.Denoise:this.copyMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this.copyMaterial.blending=0,this._renderPass(t,this.copyMaterial,this.renderToScreen?null:n);break;case e.OUTPUT.Depth:this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this._renderPass(t,this.depthRenderMaterial,this.renderToScreen?null:n);break;case e.OUTPUT.Normal:this.copyMaterial.uniforms.tDiffuse.value=this.normalRenderTarget.texture,this.copyMaterial.blending=0,this._renderPass(t,this.copyMaterial,this.renderToScreen?null:n);break;case e.OUTPUT.Default:this.copyMaterial.uniforms.tDiffuse.value=r.texture,this.copyMaterial.blending=0,this._renderPass(t,this.copyMaterial,this.renderToScreen?null:n),this.blendMaterial.uniforms.intensity.value=this.blendIntensity,this.blendMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this._renderPass(t,this.blendMaterial,this.renderToScreen?null:n);break;default:console.warn(`THREE.GTAOPass: Unknown output type.`)}}_renderPass(e,t,n,r,i){e.getClearColor(this._originalClearColor);let a=e.getClearAlpha(),o=e.autoClear;e.setRenderTarget(n),e.autoClear=!1,r!=null&&(e.setClearColor(r),e.setClearAlpha(i||0),e.clear()),this._fsQuad.material=t,this._fsQuad.render(e),e.autoClear=o,e.setClearColor(this._originalClearColor),e.setClearAlpha(a)}_renderOverride(e,t,n,r,i){e.getClearColor(this._originalClearColor);let a=e.getClearAlpha(),o=e.autoClear;e.setRenderTarget(n),e.autoClear=!1,r=t.clearColor||r,i=t.clearAlpha||i,r!=null&&(e.setClearColor(r),e.setClearAlpha(i||0),e.clear()),this.scene.overrideMaterial=t,e.render(this.scene,this.camera),this.scene.overrideMaterial=null,e.autoClear=o,e.setClearColor(this._originalClearColor),e.setClearAlpha(a)}_overrideVisibility(){let e=this.scene,t=this._visibilityCache;e.traverse(function(e){(e.isPoints||e.isLine||e.isLine2)&&e.visible&&(e.visible=!1,t.push(e))})}_restoreVisibility(){let e=this._visibilityCache;for(let t=0;t<e.length;t++)e[t].visible=!0;e.length=0}_generateNoise(e=64){let t=new ja,n=e*e*4,r=new Uint8Array(n);for(let n=0;n<e;n++)for(let i=0;i<e;i++){let a=n,o=i;r[(n*e+i)*4]=(t.noise(a,o)*.5+.5)*255,r[(n*e+i)*4+1]=(t.noise(a+e,o)*.5+.5)*255,r[(n*e+i)*4+2]=(t.noise(a,o+e)*.5+.5)*255,r[(n*e+i)*4+3]=(t.noise(a+e,o+e)*.5+.5)*255}let i=new y(r,e,e,v,N);return i.wrapS=Ae,i.wrapT=Ae,i.needsUpdate=!0,i}};Ma.OUTPUT={Off:-1,Default:0,Diffuse:1,Depth:2,Normal:3,AO:4,Denoise:5};var Na={name:`OutputShader`,uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`},Pa=class extends ma{constructor(){super(),this.isOutputPass=!0,this.uniforms=p.clone(Na.uniforms),this.material=new le({name:Na.name,uniforms:this.uniforms,vertexShader:Na.vertexShader,fragmentShader:Na.fragmentShader}),this._fsQuad=new _a(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},Ee.getTransfer(this._outputColorSpace)===`srgb`&&(this.material.defines.SRGB_TRANSFER=``),this._toneMapping===1?this.material.defines.LINEAR_TONE_MAPPING=``:this._toneMapping===2?this.material.defines.REINHARD_TONE_MAPPING=``:this._toneMapping===3?this.material.defines.CINEON_TONE_MAPPING=``:this._toneMapping===4?this.material.defines.ACES_FILMIC_TONE_MAPPING=``:this._toneMapping===6?this.material.defines.AGX_TONE_MAPPING=``:this._toneMapping===7?this.material.defines.NEUTRAL_TONE_MAPPING=``:this._toneMapping===5&&(this.material.defines.CUSTOM_TONE_MAPPING=``),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}},Fa={name:`FXAAShader`,uniforms:{tDiffuse:{value:null},resolution:{value:new L(1/1024,1/512)}},vertexShader:`

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

		}`},Ia={name:`LuminosityHighPassShader`,uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new r(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`},La=class e extends ma{constructor(e,t=1,n,i){super(),this.strength=t,this.radius=n,this.threshold=i,this.resolution=e===void 0?new L(256,256):new L(e.x,e.y),this.clearColor=new r(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let a=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new Se(a,o,{type:h}),this.renderTargetBright.texture.name=`UnrealBloomPass.bright`,this.renderTargetBright.texture.generateMipmaps=!1;for(let e=0;e<this.nMips;e++){let t=new Se(a,o,{type:h});t.texture.name=`UnrealBloomPass.h`+e,t.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(t);let n=new Se(a,o,{type:h});n.texture.name=`UnrealBloomPass.v`+e,n.texture.generateMipmaps=!1,this.renderTargetsVertical.push(n),a=Math.round(a/2),o=Math.round(o/2)}let s=Ia;this.highPassUniforms=p.clone(s.uniforms),this.highPassUniforms.luminosityThreshold.value=i,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new pe({uniforms:this.highPassUniforms,vertexShader:s.vertexShader,fragmentShader:s.fragmentShader}),this.separableBlurMaterials=[];let c=[6,10,14,18,22];a=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let e=0;e<this.nMips;e++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(c[e])),this.separableBlurMaterials[e].uniforms.invSize.value=new L(1/a,1/o),a=Math.round(a/2),o=Math.round(o/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let l=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=l,this.bloomTintColors=[new E(1,1,1),new E(1,1,1),new E(1,1,1),new E(1,1,1),new E(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=p.clone(pa.uniforms),this.blendMaterial=new pe({uniforms:this.copyUniforms,vertexShader:pa.vertexShader,fragmentShader:pa.fragmentShader,premultipliedAlpha:!0,blending:2,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new r,this._oldClearAlpha=1,this._basic=new V,this._fsQuad=new _a(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),r=Math.round(t/2);this.renderTargetBright.setSize(n,r);for(let e=0;e<this.nMips;e++)this.renderTargetsHorizontal[e].setSize(n,r),this.renderTargetsVertical[e].setSize(n,r),this.separableBlurMaterials[e].uniforms.invSize.value=new L(1/n,1/r),n=Math.round(n/2),r=Math.round(r/2)}render(t,n,r,i,a){t.getClearColor(this._oldClearColor),this._oldClearAlpha=t.getClearAlpha();let o=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),a&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=r.texture,t.setRenderTarget(null),t.clear(),this._fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=r.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this._fsQuad.render(t);let s=this.renderTargetBright;for(let n=0;n<this.nMips;n++)this._fsQuad.material=this.separableBlurMaterials[n],this.separableBlurMaterials[n].uniforms.colorTexture.value=s.texture,this.separableBlurMaterials[n].uniforms.direction.value=e.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[n]),t.clear(),this._fsQuad.render(t),this.separableBlurMaterials[n].uniforms.colorTexture.value=this.renderTargetsHorizontal[n].texture,this.separableBlurMaterials[n].uniforms.direction.value=e.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[n]),t.clear(),this._fsQuad.render(t),s=this.renderTargetsVertical[n];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this._fsQuad.render(t),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,a&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(r),this._fsQuad.render(t)),t.setClearColor(this._oldClearColor,this._oldClearAlpha),t.autoClear=o}_getSeparableBlurMaterial(e){let t=[],n=e/3;for(let r=0;r<e;r++)t.push(.39894*Math.exp(-.5*r*r/(n*n))/n);return new pe({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new L(.5,.5)},direction:{value:new L(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`

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

				}`})}_getCompositeMaterial(e){return new pe({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

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

				}`})}};La.BlurDirectionX=new L(1,0),La.BlurDirectionY=new L(0,1);var Ra=class extends Ma{setSize(e,t){let n=Math.min(.5,960/e);super.setSize(Math.max(1,Math.round(e*n)),Math.max(1,Math.round(t*n)))}render(e,t,n,r,i){this.setGBuffer(n.depthTexture,void 0),this.depthRenderMaterial.uniforms.tDepth.value=n.depthTexture,super.render(e,t,n,r,i)}},za={name:`SharpenShader`,uniforms:{tDiffuse:{value:null},resolution:{value:new L(1/1024,1/512)},sharpness:{value:{sharpness:.5}.sharpness}},vertexShader:`varying vec2 vUv;
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
}`};function Ba(e,t,n){let r=new Ra(e,t,16,16);return r.blendIntensity=1,r.updateGtaoMaterial({radius:1.15,thickness:1,distanceExponent:1.5,distanceFallOff:1,scale:1.4,samples:n?4:8,screenSpaceRadius:!1}),r.updatePdMaterial({samples:n?4:8,rings:2,radius:4,depthPhi:1,normalPhi:3}),r}function Va(){let e=new La(new L(16,16),.2,.45,1.25);return e.materialHighPassFilter.fragmentShader=e.materialHighPassFilter.fragmentShader.replace(`vec4 texel = texture2D( tDiffuse, vUv );`,`vec4 texel = texture2D( tDiffuse, vUv );
     texel.rgb=vec3(texel.r>=0.0?min(texel.r,16.0):0.0,
                    texel.g>=0.0?min(texel.g,16.0):0.0,
                    texel.b>=0.0?min(texel.b,16.0):0.0);`),e}var Ha=class{renderer;scene;camera;mobile;composer;ao;bloom;sharpen;antialias;render3d;output=new Pa;constructor(e,t,n,r=!1,i={}){this.renderer=e,this.scene=t,this.camera=n,this.mobile=r;let a=i.ambientOcclusion!==!1,o=i.bloom!==!1;this.composer=new xa(e);for(let e of[this.composer.renderTarget1,this.composer.renderTarget2])e.depthTexture=new c(1,1,be);this.antialias=new va(Fa),this.render3d=new Sa(t,n),this.composer.addPass(this.render3d),a&&(this.ao=Ba(t,n,r),this.composer.addPass(this.ao)),o&&(this.bloom=Va(),this.composer.addPass(this.bloom)),this.composer.addPass(this.output),this.composer.addPass(this.antialias),e.info.autoReset=!1}setAmbientOcclusion(e){e&&!this.ao&&(this.ao=Ba(this.scene,this.camera,this.mobile),this.composer.insertPass(this.ao,this.composer.passes.indexOf(this.render3d)+1),this.sizePasses()),this.ao&&(this.ao.enabled=e)}setBloom(e){e!==!!this.bloom&&(e?(this.bloom=Va(),this.composer.insertPass(this.bloom,this.composer.passes.indexOf(this.output)),this.sizePasses()):this.bloom&&=(this.composer.removePass(this.bloom),this.bloom.dispose(),void 0))}setSharpen(e){e!==!!this.sharpen&&(e?(this.sharpen=new va(za),this.composer.addPass(this.sharpen),this.sizePasses()):this.sharpen&&=(this.composer.removePass(this.sharpen),this.sharpen.dispose(),void 0))}setAntialias(e){this.antialias.enabled=e}width=1;height=1;resize(e,t){this.width=e,this.height=t,this.composer.setSize(e,t),this.sizePasses()}sizePasses(){let e=this.renderer.getPixelRatio(),t=1/(this.width*e),n=1/(this.height*e);this.antialias.uniforms.resolution.value.set(t,n),this.sharpen?.uniforms.resolution.value.set(t,n)}render(e){this.renderer.info.reset(),this.composer.render(e)}},Ua={colosseum:{pc:{pixelRatio:1.5,shadow:`every`,ambientOcclusion:!1,bloom:!1,lampLights:!0,movingShadows:!1,mapLight:!1,mapPointLights:!1,cullBuildings:!1,skyCube:0,bakeMapLight:!1,shadowSamples:5,fighterLight:!1,fighterKeepMetal:!1,fadeWhenNeeded:!1,sharpen:!1,antialias:!0},mobile:{pixelRatio:1.275,shadow:`once`,ambientOcclusion:!1,bloom:!1,lampLights:!0,movingShadows:!1,mapLight:!0,mapPointLights:!0,cullBuildings:!1,skyCube:512,bakeMapLight:!0,shadowSamples:1,fighterLight:!0,fighterKeepMetal:!0,fadeWhenNeeded:!0,sharpen:!0,antialias:!0}},royal:{pc:{pixelRatio:1.5,shadow:`every`,ambientOcclusion:!0,bloom:!0,lampLights:!0,movingShadows:!0,mapLight:!1,mapPointLights:!1,cullBuildings:!1,skyCube:0,bakeMapLight:!1,shadowSamples:5,fighterLight:!1,fighterKeepMetal:!1,fadeWhenNeeded:!1,sharpen:!1,antialias:!0},mobile:{pixelRatio:1.275,shadow:`once`,ambientOcclusion:!1,bloom:!1,lampLights:!1,movingShadows:!1,mapLight:!0,mapPointLights:!1,cullBuildings:!0,skyCube:512,bakeMapLight:!0,shadowSamples:1,fighterLight:!0,fighterKeepMetal:!0,fadeWhenNeeded:!0,sharpen:!0,antialias:!0},mobileBefore:{pixelRatio:1.275,shadow:`hz30`,ambientOcclusion:!0,bloom:!0,lampLights:!0,movingShadows:!0,mapLight:!1,mapPointLights:!1,cullBuildings:!1,skyCube:0,bakeMapLight:!1,shadowSamples:5,fighterLight:!1,fighterKeepMetal:!1,fadeWhenNeeded:!1,sharpen:!1,antialias:!0}}};function Wa(e,t){return Ua[e][t?`mobile`:`pc`]}function Ga(e,t){return t?Ua[e].mobileBefore:void 0}var Ka={environment:1.25,sun:1.25,probe:[3.8135,1.763,1.6363,.279,.2171,1.0862,1.2137,-.3469,-.6344],pixelPoints:[`05_Mortar_and_recesses`,`03_Pale_arch_and_coping`]},qa={mapLightProbe:{value:Ka.probe.map(e=>new E(e,e,e))},mapLightSun:{value:Ka.sun}};function Ja(e){return e.isMeshStandardMaterial===!0&&!e.transparent}function Ya(e,t,n){Object.assign(e.uniforms,qa,t);let r=[n.points===`vertex`?`MAP_LIGHT_POINTS`:``,n.shadowOnce?`MAP_LIGHT_SHADOW_ONCE`:``,n.metalMap?`MAP_LIGHT_METAL_MAP`:``,n.sheen?`MAP_LIGHT_SHEEN`:``,n.baked?`MAP_LIGHT_BAKED\n#define MAP_LIGHT_BAKED_TEXELS ${n.baked.texels}`:``].filter(Boolean).map(e=>`#define ${e}\n`).join(``);e.vertexShader=r+e.vertexShader.replace(`#include <common>`,`#include <common>
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
	#endif`).replace(`#include <lights_fragment_maps>`,``).replace(`#include <lights_fragment_end>`,``).replace(`#include <envmap_fragment>`,``)}var Xa=e=>`map-light-v3:${e.points}:${e.shadowOnce?1:5}:${e.metalMap?`metal-map`:`metal`}:${e.sheen?`sheen`:``}:${e.baked?`baked${e.baked.texels}`:``}`,Za=(e,t)=>Ka.environment*(e.envMap?e.envMapIntensity:t);function Qa(e,t,n,r){let i=new ne({name:e.name,color:e.color,map:e.map,vertexColors:e.vertexColors,emissive:e.emissive,emissiveIntensity:e.emissiveIntensity,emissiveMap:e.emissiveMap,alphaMap:e.alphaMap,alphaTest:e.alphaTest,side:e.side,fog:e.fog,flatShading:e.flatShading,depthWrite:e.depthWrite,depthTest:e.depthTest}),a={mapLightEnvironment:{value:Za(e,t)},mapLightMetal:{value:e.metalness},...r?{mapLightBaked:{value:r.texture},mapLightBakedWidth:{value:r.width},mapLightBakedVertices:{value:r.vertices}}:{}},o={...n,metalMap:!1,...r?{baked:{texels:r.texels}}:{}};return i.onBeforeCompile=e=>Ya(e,a,o),i.customProgramCacheKey=()=>Xa(o),i.userData.mapLight=!0,r&&(i.userData.baked=!0),i.userData.environment=a.mapLightEnvironment,i.userData.sun=qa.mapLightSun,i}function $a(e,t,n){let r=new ne({name:e.name,map:e.map,vertexColors:e.vertexColors,emissiveMap:e.emissiveMap,alphaMap:e.alphaMap,alphaTest:e.alphaTest,side:e.side,fog:e.fog,flatShading:e.flatShading,transparent:e.transparent,opacity:e.opacity,alphaHash:e.alphaHash,depthWrite:e.depthWrite,depthTest:e.depthTest});r.color=e.color,r.emissive=e.emissive,Object.defineProperty(r,"emissiveIntensity",{configurable:!0,get:()=>e.emissiveIntensity,set:t=>{e.emissiveIntensity=t}});let i=!!(e.map&&e.metalnessMap),a={mapLightEnvironment:{value:eo.environment*(e.envMap?e.envMapIntensity:t)},mapLightMetal:{value:e.metalness},...i?{mapLightMetalMap:{value:e.metalnessMap}}:{},mapLightSun:to.sun,mapLightSheen:to.sheen},o={...n,metalMap:i,sheen:!0};return r.onBeforeCompile=e=>Ya(e,a,o),r.customProgramCacheKey=()=>Xa(o),r.userData.fighterLight=!0,r.userData.source=e,r.userData.environment=a.mapLightEnvironment,r.userData.sun=to.sun,r.userData.sheen=to.sheen,r}var eo={keepRoles:[`paladin`],keepMetalness:.5,environment:.95,sun:.85,sheen:.03},to={sun:{value:eo.sun},sheen:{value:eo.sheen}};function no(e,t){return eo.keepRoles.includes(t)||e.metalness>=eo.keepMetalness&&!e.metalnessMap}function ro(e,t,n){return!n||e.transparent||t<1}function io(e,t,n){return t?n&&Ka.pixelPoints.includes(e.name)?`pixel`:`vertex`:`none`}var ao={width:2048};function oo(e,t){let n={ambient:new r(0,0,0),hemispheres:[],fills:[],points:[]},i=0;return e.updateMatrixWorld(),e.traverseVisible(e=>{let r=e;if(!r.isLight)return;let a=r.color.clone().multiplyScalar(r.intensity);if(r.isAmbientLight)n.ambient.add(a);else if(r.isHemisphereLight){let e=r;n.hemispheres.push({sky:a,ground:e.groundColor.clone().multiplyScalar(e.intensity),direction:new E().setFromMatrixPosition(e.matrixWorld).normalize()})}else if(r.isDirectionalLight){let e=r,o=new E().setFromMatrixPosition(e.target.matrixWorld),s=new E().setFromMatrixPosition(e.matrixWorld).sub(o).normalize();t&&e.castShadow?(n.sun={color:a,direction:s},i++):n.fills.push({color:a,direction:s})}else if(r.isPointLight){let e=r;n.points.push({color:a,position:new E().setFromMatrixPosition(e.matrixWorld),distance:e.distance,decay:e.decay})}}),i>1?void 0:n}var so=Ka.probe;function co(e,t,n,r,i,a,o,s,c,l){let u=e.ambient.r,d=e.ambient.g,f=e.ambient.b;for(let t of e.hemispheres){let e=.5*(n*t.direction.x+r*t.direction.y+i*t.direction.z)+.5;u+=t.ground.r+(t.sky.r-t.ground.r)*e,d+=t.ground.g+(t.sky.g-t.ground.g)*e,f+=t.ground.b+(t.sky.b-t.ground.b)*e}for(let t of e.fills){let e=Math.min(1,Math.max(0,n*t.direction.x+r*t.direction.y+i*t.direction.z));u+=t.color.r*e,d+=t.color.g*e,f+=t.color.b*e}if(t.points)for(let t of e.points){let e=t.position.x-a,c=t.position.y-o,l=t.position.z-s,p=Math.hypot(e,c,l);if(p===0)continue;let m=1/Math.max(p**+t.decay,.01);if(t.distance>0){let e=Math.min(1,Math.max(0,1-(p/t.distance)**4));m*=e*e}let h=Math.min(1,Math.max(0,(n*e+r*c+i*l)/p))*m;u+=t.color.r*h,d+=t.color.g*h,f+=t.color.b*h}let p=t.environment*(so[0]*.886227+so[1]*2*.511664*r+so[2]*2*.511664*i+so[3]*2*.511664*n+so[4]*2*.429043*n*r+so[5]*2*.429043*r*i+so[6]*(.743125*i*i-.247708)+so[7]*2*.429043*n*i+so[8]*.429043*(n*n-r*r)),m=1-t.metal;c[l]=u*m+p,c[l+1]=d*m+p,c[l+2]=f*m+p,c[l+3]=e.sun?n*e.sun.direction.x+r*e.sun.direction.y+i*e.sun.direction.z:0}function lo(e,t,n,r,i=!1,a){let o=e.geometry,s=o.getAttribute(`position`),c=o.getAttribute(`normal`),l=e.isInstancedMesh===!0,u=a??(l?e.instanceMatrix.array:void 0),d=l?a?a.length/16:e.count:1,f=s.count,p=r?2:1,m=new Float32Array(f*d*p*4);e.updateWorldMatrix(!0,!1);let h=new z,g=new z,_=new oe,v=h.elements,y=_.elements,b=i?-1:1;for(let i=0;i<d;i++){l?(g.fromArray(u,i*16),h.multiplyMatrices(e.matrixWorld,g)):h.copy(e.matrixWorld),_.getNormalMatrix(h);for(let e=0;e<f;e++){let a=s.getX(e),o=s.getY(e),l=s.getZ(e),u=c.getX(e),d=c.getY(e),h=c.getZ(e),g=v[0]*a+v[4]*o+v[8]*l+v[12],_=v[1]*a+v[5]*o+v[9]*l+v[13],x=v[2]*a+v[6]*o+v[10]*l+v[14],S=y[0]*u+y[3]*d+y[6]*h,C=y[1]*u+y[4]*d+y[7]*h,w=y[2]*u+y[5]*d+y[8]*h,T=Math.hypot(S,C,w)||1;S*=b/T,C*=b/T,w*=b/T;let E=(i*f+e)*p*4;co(t,n,S,C,w,g,_,x,m,E),r&&co(t,n,-S,-C,-w,g,_,x,m,E+4)}}return{data:m,texels:p,vertices:f,count:d}}function uo(e,t=ao.width){let n=e.vertices*e.count*e.texels,r=Math.max(1,Math.ceil(n/t)),i=new Float32Array(t*r*4);return i.set(e.data),{data:i,height:r}}function fo(e,t=ao.width){let{data:n,height:r}=uo(e,t),i=new y(n,t,r,v,M);return i.internalFormat=`RGBA16F`,i.minFilter=i.magFilter=ke,i.generateMipmaps=!1,i.needsUpdate=!0,i.onUpdate=()=>{i.image.data=null},i}var po={margin:2},mo=new u,ho=new z;function go(e){return mo.setFromProjectionMatrix(ho.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse))}var _o=class{mesh;total;spheres;original;shown;constructor(e,t=po.margin){this.mesh=e,this.total=e.count,this.original=e.instanceMatrix.array.slice(0,this.total*16),this.shown=[...Array(this.total).keys()],e.geometry.boundingSphere||e.geometry.computeBoundingSphere();let n=e.geometry.boundingSphere,r=new z,i=new z;e.updateWorldMatrix(!0,!1),this.spheres=this.shown.map(a=>{i.multiplyMatrices(e.matrixWorld,r.fromArray(this.original,a*16));let o=n.clone().applyMatrix4(i);return o.radius+=t,o})}pick(e,t){let n=[];for(let r=0;r<this.total;r++)(!t||t(r))&&(!e||e.intersectsSphere(this.spheres[r]))&&n.push(r);return n}show(e){if(e.length===this.shown.length&&e.every((e,t)=>e===this.shown[t]))return!1;let t=this.mesh.instanceMatrix.array;e.forEach((e,n)=>t.set(this.original.subarray(e*16,e*16+16),n*16)),this.mesh.count=e.length,this.mesh.instanceMatrix.clearUpdateRanges(),this.mesh.instanceMatrix.addUpdateRange(0,e.length*16),this.mesh.instanceMatrix.needsUpdate=!0;let n=this.mesh.geometry.getAttribute(`mapLightInstance`);return n&&(e.forEach((e,t)=>{n.array[t]=e}),n.clearUpdateRanges(),n.addUpdateRange(0,e.length),n.needsUpdate=!0),this.shown=[...e],!0}showAll(){return this.show([...Array(this.total).keys()])}get count(){return this.shown.length}},vo={height:2.8,base:`#ffc12e`,top:`#ffffff`,sheets:[-.1,.1],groundWidth:1.2,rise:.22,fade:.45,gain:.8},yo=`
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}`,bo=`
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
}`;function xo(e=!1,t=0){let n=vo;return new pe({vertexShader:yo,fragmentShader:bo,uniforms:{uBase:{value:new r(n.base)},uTop:{value:new r(n.top)},uTime:{value:0},uSeed:{value:t},uFade:{value:0},uGain:{value:n.gain},uGround:{value:+!!e}},transparent:!0,depthWrite:!1,side:2,blending:2})}function So(e,t,n){let r=vo,i=new U,a=t%17*1.37;for(let t of r.sheets){let n=new H(new me(e,r.height).translate(0,r.height/2,0).rotateY(Math.PI/2),xo(!1,a+t*9));n.position.x=t,i.add(n)}let o=new H(new me(r.groundWidth,e).rotateX(-Math.PI/2),xo(!0,a));return o.position.y=.03,i.add(o),i.userData.born=n,i}var Co=e=>{let t=Math.max(0,Math.min(1,e));return t*t*(3-2*t)};function wo(e,t,n){let r=vo,i=kt(t),a=Co((n-e.userData.born)/r.rise),o=Math.max(0,Math.min(1,t.life/r.fade));e.position.set(t.pos.x,0,t.pos.z),e.rotation.y=Math.atan2(-i.z,i.x);for(let t of e.children){let e=t,r=e.material,i=r.uniforms.uGround.value>.5;i||(e.scale.y=Math.max(.001,a)),r.uniforms.uTime.value=n,r.uniforms.uFade.value=i?o*a:o}}var To={flare:`#ffffff`,glow:`#fff0c2`,cross:`#fff6d8`,streak:`#ffe39a`,ember:`#ffc44f`,ring:`#fff0c4`,streaks:9,embers:14},Eo=e=>{let t=Math.min(1,Math.max(0,e));return t*t*(3-2*t)};function Do(e){let t=Math.abs(Math.floor(e))%233280+1;return()=>(t=(t*9301+49297)%233280,t/233280)}function Oo(e){return new V({color:e,transparent:!0,opacity:0,depthWrite:!1,depthTest:!1,side:2})}function ko(e){let t=new U,n=Do(e);t.name=`clash-spark`;let r=new Oe(1,4),i=new Oe(1,28),a=new G(.9,1,48),o=(e,n,r,i)=>{let a=new H(e,Oo(n));a.renderOrder=r,a.userData.clash=i,t.add(a)};o(a,To.ring,20,{kind:`ring`,angle:0,length:1,speed:1});let s=(n()-.5)*.5;for(let e=0;e<To.streaks;e++)o(r,To.streak,21,{kind:`streak`,angle:(e+n()*.8)/To.streaks*Math.PI*2,length:.45+n()*.6,speed:1});for(let e=0;e<To.embers;e++)o(r,To.ember,22,{kind:`ember`,angle:n()*Math.PI*2,length:1,speed:.75+n()*.7});return o(i,To.glow,22,{kind:`glow`,angle:0,length:1,speed:1}),o(i,To.flare,23,{kind:`flare`,angle:0,length:1,speed:1}),o(r,To.cross,24,{kind:`cross`,angle:s,length:1.3,speed:1}),o(r,To.cross,24,{kind:`cross`,angle:s+Math.PI/2,length:.95,speed:1}),t}function Ao(e,t,n,r,i=0){e.rotation.z=t-Math.PI/2,e.scale.set(r,n/2,1),e.position.set(Math.cos(t)*(i+n/2),Math.sin(t)*(i+n/2),0)}function jo(e,t,n,r){let i=Math.min(1,Math.max(0,t)),a=n;e.quaternion.copy(r.quaternion);let o=.7+.3*Eo(i/.25),s=1-.65*i;for(let t of e.children){let e=t,n=e.userData.clash;if(n.kind===`flare`)e.scale.setScalar(a*.26*(1-.5*Eo(i/.35))),e.material.opacity=1-Eo(i/.35);else if(n.kind===`glow`)e.scale.setScalar(a*.55*(1-.4*Eo(i/.5))),e.material.opacity=.5*(1-Eo(i/.5));else if(n.kind===`cross`)e.rotation.z=n.angle,e.position.set(0,0,0),e.scale.set(a*n.length*(1-.35*i),a*.055*s,1),e.material.opacity=1-Eo(i/.65);else if(n.kind===`streak`)Ao(e,n.angle,a*n.length*o,a*.035*s,a*.08),e.material.opacity=(1-i)**1.3;else if(n.kind===`ember`){let t=a*1.2*n.speed*(1-(1-i)*(1-i)),r=a*.6*i*i,o=Math.cos(n.angle)*t,s=Math.sin(n.angle)*t-r;e.rotation.z=n.angle-Math.PI/2,e.position.set(o,s,0),e.scale.set(a*.022*(1-.5*i),a*.09*(1-.4*i),1),e.material.opacity=i<.1?i/.1:1-(i-.1)/.9}else e.scale.setScalar(a*(.3+1.05*Eo(i/.4))),e.material.opacity=.45*(1-Eo(i/.4))}}var Mo={meditation:{color:`#a86cff`,light:`#dcc2ff`,circle:{radius:1.35,spin:.32,lift:.05,strength:1},sparks:{count:30,radius:[.42,.9],height:[.08,2.2],life:[1.7,2.6],size:[.11,.2],twinkle:7,glow:2.1},fadeIn:.3,fadeOut:.3},stance:{samurai:{color:`#dfe6ff`,light:`#ffffff`},swordsman:{color:`#ff3326`,light:`#ffae96`},ninja:{color:`#8ccc80`,light:`#b4f0a6`,shadow:!0,rim:{color:`#4f2790`,light:`#8a5fd4`,strength:.75}},paladin:{color:`#ffc31a`,light:`#fff09a`},mage:{color:`#a86cff`,light:`#dcc2ff`},healer:{color:`#ff5aad`,light:`#ffc4e1`},gunner:{color:`#9c5a24`,light:`#e0a868`}},heal:{color:`#5cff86`,light:`#c8ffd6`,pluses:{count:10,radius:[.34,.72],height:[.3,2.2],life:[.9,1.3],size:[.15,.21],width:.045,glow:1.9},sparks:{count:12,radius:[.3,.75],height:[.2,2],life:[.8,1.2],size:[.08,.13],twinkle:9,glow:1.9},fadeIn:.12,fadeOut:.35}};function No(e=!1){return new V({vertexColors:!0,transparent:!0,depthWrite:!1,side:2,blending:e?3:2,premultipliedAlpha:e})}var Po=(e,t)=>{let n=Math.sin(e*127.1+t*311.7)*43758.5453;return n-Math.floor(n)},Fo=(e,t)=>e[0]+(e[1]-e[0])*t;function Io(e,t,n,r,i,a,o,s,c){let l=r-t,u=i-n,d=Math.hypot(l,u)||1,f=-u/d*a,p=l/d*a,m=e.position.length/3;for(let[a,l,u]of[[t-f,n-p,0],[t,n,o],[t+f,n+p,0],[r-f,i-p,0],[r,i,o],[r+f,i+p,0]])e.position.push(a,s,l),e.colour.push(c.r*u,c.g*u,c.b*u);e.index.push(m,m+3,m+1,m+1,m+3,m+4,m+1,m+4,m+2,m+2,m+4,m+5)}function Lo(e,t,n,r,i,a,o=72){let s=e.position.length/3;for(let s=0;s<=o;s++){let c=s/o*Math.PI*2,l=Math.cos(c),u=Math.sin(c);for(let[o,s]of[[-1,0],[0,r],[1,0]])e.position.push(l*(t+o*n),i,u*(t+o*n)),e.colour.push(a.r*s,a.g*s,a.b*s)}for(let t=0;t<o;t++)for(let n=0;n<2;n++){let r=s+t*3+n,i=r+3;e.index.push(r,i,r+1,r+1,i,i+1)}}function Ro(e,t,n,r,i,a=36){let o=e.position.length/3;e.position.push(0,r,0),e.colour.push(i.r*n,i.g*n,i.b*n);for(let n=0;n<=a;n++){let i=n/a*Math.PI*2;e.position.push(Math.cos(i)*t,r,Math.sin(i)*t),e.colour.push(0,0,0)}for(let t=0;t<a;t++)e.index.push(o,o+1+t,o+2+t)}function zo(e){let t=new we;return t.setAttribute(`position`,new f(e.position,3)),t.setAttribute(`color`,new f(e.colour,3)),t.setIndex(e.index),t}function Bo(e){let t={position:[],colour:[],index:[]},n=new r(e.color),i=new r(e.light);Ro(t,1,.1,0,n),Lo(t,.97,.028,1,0,i),Lo(t,.86,.016,.85,0,n);for(let e=0;e<18;e++){let n=e/18*Math.PI*2,r=Math.cos(n),a=Math.sin(n),o=.915;if(e%2)Io(t,r*.885,a*.885,r*.9450000000000001,a*.9450000000000001,.012,.9,0,i);else{let e=.022,n=-a,s=r;Io(t,r*.893,a*.893,r*o+n*e,a*o+s*e,.008,.8,0,i),Io(t,r*o+n*e,a*o+s*e,r*.937,a*.937,.008,.8,0,i),Io(t,r*.937,a*.937,r*o-n*e,a*o-s*e,.008,.8,0,i),Io(t,r*o-n*e,a*o-s*e,r*.893,a*.893,.008,.8,0,i)}}Lo(t,.6,.016,.85,0,n);for(let e of[0,Math.PI/3])for(let r=0;r<3;r++){let i=e+r/3*Math.PI*2+Math.PI/2,a=i+Math.PI*2/3;Io(t,Math.cos(i)*.6,Math.sin(i)*.6,Math.cos(a)*.6,Math.sin(a)*.6,.014,.75,0,n)}return Lo(t,.25,.012,.7,0,i,48),Ro(t,.16,.45,0,i,24),zo(t)}var Vo=9;function Ho(e,t){for(let n=0;n<4;n++){let r=t+1+n*2,i=t+2+n*2,a=t+1+(n+1)%4*2;e.push(t,r,i,t,i,a)}}var Uo=12;function Wo(e,t){for(let n of[0,6]){let r=t+n;e.push(r,r+3,r+1,r+1,r+3,r+4,r+1,r+4,r+2,r+2,r+4,r+5)}}function Go(e,t,n=!1){let r=e*Vo+t*Uo,i=[];for(let t=0;t<e;t++)Ho(i,t*Vo);for(let n=0;n<t;n++)Wo(i,e*Vo+n*Uo);let a=new we;a.setAttribute(`position`,new R(new Float32Array(r*3),3)),a.setAttribute(`color`,new R(new Float32Array(r*3),3)),a.setIndex(i),a.boundingSphere=new w(new E(0,1.15,0),1.9);let o=new H(a,No(n));return o.renderOrder=7,{mesh:o,stars:e,pluses:t}}var Ko=new E,qo=new E,Jo=new E,Yo=new E,Xo=new r,Zo=new Map,Qo=e=>Zo.get(e)??Zo.set(e,new r(e)).get(e);function $o(e,t,n,r,i,a){e.setXYZ(n,r.x,r.y,r.z),t.setXYZ(n,a.r,a.g,a.b);for(let o=0;o<4;o++){let s=o*Math.PI/2,c=Math.cos(s),l=Math.sin(s);Jo.copy(r).addScaledVector(Ko,c*i).addScaledVector(qo,l*i),e.setXYZ(n+1+o*2,Jo.x,Jo.y,Jo.z),t.setXYZ(n+1+o*2,0,0,0);let u=s+Math.PI/4,d=i*.2;Jo.copy(r).addScaledVector(Ko,Math.cos(u)*d).addScaledVector(qo,Math.sin(u)*d),e.setXYZ(n+2+o*2,Jo.x,Jo.y,Jo.z),t.setXYZ(n+2+o*2,a.r*.25,a.g*.25,a.b*.25)}}function es(e,t,n,r,i,a,o){for(let[s,c,l]of[[0,Ko,qo],[6,qo,Ko]]){let u=0;for(let d of[-1,1])for(let f of[-1,0,1]){Jo.copy(r).addScaledVector(c,d*i).addScaledVector(l,f*a*(f?1.6:0));let p=+!f;e.setXYZ(n+s+u,Jo.x,Jo.y,Jo.z),t.setXYZ(n+s+u,o.r*p,o.g*p,o.b*p),u++}}}function ts(e,t,n,r,i,a){let o=e.mesh.geometry.getAttribute(`position`),s=e.mesh.geometry.getAttribute(`color`);Ko.set(1,0,0).applyQuaternion(i.quaternion),qo.set(0,1,0).applyQuaternion(i.quaternion);let c=Qo(t.color),l=Qo(t.light),u=(e,t,n)=>{let i=((r/Fo(t.life,Po(e,n+1))+Po(e,n+2))%1+1)%1,a=Po(e,n+3)*Math.PI*2+i*.9,o=Fo(t.radius,Po(e,n+4));return Yo.set(Math.cos(a)*o,Fo(t.height,i),Math.sin(a)*o),Math.sin(Math.PI*i)**1.2};for(let i=0;i<e.stars;i++){let e=u(i+a*97,t.sparks,0),d=.5+.5*Math.sin(r*t.sparks.twinkle+Po(i,9)*20)**2;Xo.copy(c).lerp(l,Po(i,7)).multiplyScalar(n*e*d*t.sparks.glow),$o(o,s,i*Vo,Yo,Fo(t.sparks.size,Po(i,5))*(.8+.4*d),Xo)}let d=t.pluses;for(let t=0;d&&t<e.pluses;t++){let r=u(t+a*53,d,20);Xo.copy(c).lerp(l,Po(t,27)*.5).multiplyScalar(n*r*d.glow),es(o,s,e.stars*Vo+t*Uo,Yo,Fo(d.size,Po(t,25)),d.width,Xo)}o.needsUpdate=!0,s.needsUpdate=!0}function ns(e=Mo.stance.samurai){let t=new U;t.name=`meditation-aura`,t.userData.spec={...Mo.meditation,color:e.color,light:e.light};let n=new H(Bo(e),No(e.shadow));if(n.scale.setScalar(Mo.meditation.circle.radius),n.position.y=Mo.meditation.circle.lift,n.renderOrder=6,t.add(n,Go(Mo.meditation.sparks.count,0,e.shadow).mesh),e.rim){let n=new H(Bo(e.rim),No());n.scale.setScalar(Mo.meditation.circle.radius),n.position.y=Mo.meditation.circle.lift+.002,n.renderOrder=6,n.userData.strength=e.rim.strength,t.add(n)}return t.visible=!1,t}function rs(e,t,n,r,i){if(e.visible=t>.005,!e.visible)return;let[a,o,s]=e.children;a.rotation.y=n*Mo.meditation.circle.spin,a.scale.setScalar(Mo.meditation.circle.radius*(.82+.18*t));let c=Mo.meditation.circle.strength*t*(.86+.14*Math.sin(n*2.2));a.material.color.setScalar(c),s&&(s.rotation.y=a.rotation.y,s.scale.copy(a.scale),s.material.color.setScalar(c*s.userData.strength)),ts({mesh:o,stars:Mo.meditation.sparks.count,pluses:0},e.userData.spec??Mo.meditation,t,n,r,i)}function is(){let e=new U;return e.name=`heal-aura`,e.add(Go(Mo.heal.sparks.count,Mo.heal.pluses.count).mesh),e.visible=!1,e}function as(e,t,n,r,i){if(e.visible=t>.005,!e.visible)return;let a=e.children[0];ts({mesh:a,stars:Mo.heal.sparks.count,pluses:Mo.heal.pluses.count},Mo.heal,t,n,r,i)}var os=.6+q.puckRadius,ss={ally:new r(`#a9f878`),enemy:new r(`#ff7869`)},cs={radius:1.45,spread:72*Math.PI/180,thickness:.15,lateral:.065,centreY:1.05,rootFade:.03},ls=[0,Math.PI/2,Math.PI/4,-Math.PI/4],us=[_t,Ye,wt,st],ds=[new r(`#ffc66e`),new r(`#ff7762`)];function fs(e){let t=[],n=[],r=(e,r)=>{t.push(e.x,e.y,e.z),n.push(r,r,r)};for(let t=0;t<e.length-1;t++){let n=e[t],i=e[t+1],a=n.centre.clone().addScaledVector(n.across,-n.half),o=n.centre.clone().addScaledVector(n.across,n.half),s=i.centre.clone().addScaledVector(i.across,-i.half),c=i.centre.clone().addScaledVector(i.across,i.half);r(a,0),r(n.centre,n.glow),r(i.centre,i.glow),r(a,0),r(i.centre,i.glow),r(s,0),r(o,0),r(i.centre,i.glow),r(n.centre,n.glow),r(o,0),r(c,0),r(i.centre,i.glow)}let i=new we;return i.setAttribute(`position`,new f(t,3)),i.setAttribute(`color`,new f(n,3)),i}var ps=[[-.95,0],[-.34,.5],[.08,1],[.5,.8],[1.05,0]];function ms(e,t,n,r,i,a){let o=[],s=[],c=e=>{o.push(e.point.x,e.point.y,e.point.z),s.push(e.glow,e.glow,e.glow)};for(let o of[1,-1]){let s=[];for(let c=0;c<=40;c++){let l=c/40*2-1,u=l*t,d=Math.max(0,1-l*l),f=n*d**.55,p=.62+.38*d**.35,m=r*d**.5;s.push(ps.map(([t,n])=>{let r=e+t*f,s=i(r*Math.sin(u),r*Math.cos(u),o*m*n);return{point:s,glow:n*p*a(s)}}))}for(let e=0;e<40;e++)for(let t=0;t<ps.length-1;t++)c(s[e][t]),c(s[e][t+1]),c(s[e+1][t+1]),c(s[e][t]),c(s[e+1][t+1]),c(s[e+1][t])}let l=new we;return l.setAttribute(`position`,new f(o,3)),l.setAttribute(`color`,new f(s,3)),l}var hs=e=>new V({color:`#ffffff`,vertexColors:!0,transparent:!0,opacity:e,depthWrite:!1,side:2,blending:2}),gs=.62;function _s(){let e=cs,t=new U,n=e=>Math.max(0,Math.min(1,e)),r=e=>{let t=n(e);return t*t*(3-2*t)};for(let n of ls){let i=Math.cos(n),a=Math.sin(n);t.add(new H(ms(e.radius,e.spread,e.thickness,e.lateral,(t,n,r)=>new E(t*i-r*a,e.centreY+t*a+r*i,n),t=>r(t.y/e.rootFade)),hs(gs)))}let i=new H(new l(.1,10,8),new V({color:`#ffffff`,transparent:!0,opacity:.55,depthWrite:!1,blending:2}));i.position.set(0,e.centreY,0),t.add(i);let a=[];for(let e=0;e<=10;e++){let t=1.1-e/10*3.4,i=r(n((1-Math.abs(t+.6)/2)/.5))*.6;a.push({centre:new E(0,.04,t),across:new E(1,0,0),half:.19*(.5+.5*i),glow:i})}return t.add(new H(fs(a),hs(.8))),t}var vs=new r(`#ffffff`),ys={taper:.935,height:.4583,floorGap:.085,coreRadius:.59,coreThickness:.035,coreLift:.0015,bandRadius:.957,bandThickness:.075,bandAt:.648,glowInner:1.18,glowOuter:1.31,glowLift:.025,trailRadius:.59,trailCount:14,trailLift:.06},bs=e=>e.isMesh===!0&&[e.material].flat().some(e=>e.name.startsWith(`Yuru_Line`)),xs=[`rift-arena`,`blender-harbour-city`,`terraced-valley`,`harbour-water`],Ss=`EpicCity_TwilightSky`,Cs=class{canvas;mapId;renderer;ready;scene=new S;camera=new i(60,1,.1,850);yaw=Math.PI/2;pitch=.58;gunPitch=.12;fighters=new Map;bench=[];viewing=0;avatar;setAvatar(e){this.avatar=e&&{id:e.id,look:{...e.look}}}avatarOf(e){return this.avatar&&e.id===this.avatar.id&&Ct()===`human`?this.avatar.look:void 0}seatActions={ready:e=>!(e.role===`samurai`&&!mr())&&!(Ct()===`human`&&!jt(e.role))&&!(t=>t&&!_e(St(t,e.role)))(this.avatarOf(e)),look:e=>{let t=this.avatarOf(e);return t?mt(t):``},create:e=>this.createFighter(e),park:e=>{this.scene.remove(e.mesh,e.ring,e.shadow,e.heal,e.barrier),e.calm&&this.scene.remove(e.calm)},unpark:e=>{Object.assign(e,{healLevel:0,calmLevel:0,opacity:1}),this.scene.add(e.mesh,e.ring,e.shadow,e.heal,e.barrier),e.calm&&this.scene.add(e.calm)}};transient=new Map;puck=new U;puckTint=new r(vt[0].color);puckParts=[];threatRing;threatDisplay=ht();reachFan;coreBand;bodyRing;reachFanLevel=0;reachFanRole;corePulse=0;trail=[];target=new E;shake=new E;lastPhase=``;projection=new E;effects;effectShaders=new U;shadowElapsed=0;benchmarkMode=null;benchmarkSaved;setBenchmark(e){let t=this.benchmarkSaved,n=this.programKey();if(t){for(let e of t.hidden)e.visible=!0;this.benchmarkSaved=void 0}if(this.benchmarkMode=e,this.applyQuality(e?.quality?{...this.baseQuality,...e.quality}:this.baseQuality),e){let t={hidden:[]};if(e.hideScenery)for(let e of xs){let n=this.scene.getObjectByName(e);n?.visible&&(n.visible=!1,t.hidden.push(n))}if(e.hideOutlines)for(let e of[...this.fighters.values(),...this.bench])e.mesh.traverse(e=>{bs(e)&&e.visible&&(e.visible=!1,t.hidden.push(e))});this.benchmarkSaved=t}else{for(let e of this.plainMaterials.values())e.dispose();this.plainMaterials.clear()}if(n!==this.programKey()){let t=this.renderer.getRenderTarget();this.renderer.setRenderTarget(e?.direct?null:this.effects.composer.readBuffer),this.renderer.compile(this.scene,this.camera),this.renderer.setRenderTarget(t)}}benchmarkOptions(){let e=this.baseQuality;return{baked:e.bakeMapLight&&this.bakes.size>0,mobile:this.mobileDevice,pixelRatio:e.pixelRatio,outlines:[...this.fighters.values()].some(e=>{let t=!1;return e.mesh.traverse(e=>{bs(e)&&(t=!0)}),t}),gtao:Ua[this.mapId].pc.ambientOcclusion&&!e.ambientOcclusion,before:Ga(this.mapId,this.mobileDevice)}}programKey(){return`${!!this.benchmarkMode?.direct}:${this.lamps.filter(e=>e.visible).length}:${this.mapMaterialKey()}:${this.skyMesh?.visible}:${this.fighterMaterialKey()}`}mapMeshes=[];lightMaterials=new Map;plainMaterials=new Map;mapMaterialKey(){let e=this.benchmarkMode;if(e?.plainMaterials)return`plain`;if(!this.quality.mapLight||e?.standardMaterials)return`standard`;let t=e?.mapPointLights??this.quality.mapPointLights,n=e?.mapPixelPoints??!0,r=this.quality.bakeMapLight&&this.bakes.size>0&&t===this.baseQuality.mapPointLights&&n;return`light:${t}:${n}:${this.quality.shadowSamples}:${r}`}applyMapMaterials(){let e=this.mapMaterialKey(),[,t,n,r,i]=e.split(`:`),a=r===`1`;for(let{mesh:r,original:o}of this.mapMeshes){let s=o=>e===`plain`?this.plainOf(o):e!==`standard`&&r!==this.water&&Ja(o)?this.lightOf(o,io(o,t===`true`,n===`true`),a,i===`true`?r:void 0):o;r.material=Array.isArray(o)?o.map(s):s(o)}}lightOf(e,t,n,r){let i=r&&this.bakes.get(r),a=`${e.uuid}:${t}:${n}${i?`:${r.uuid}`:``}`,o=this.lightMaterials.get(a);return o||this.lightMaterials.set(a,o=Qa(e,this.scene.environmentIntensity,{points:t,shadowOnce:n},i)),o}makeEnvironment(){let e=new da,t=new Pt(this.renderer);this.scene.environment=t.fromScene(e,.06).texture,e.dispose(),t.dispose()}bakes=new Map;bakeMs=0;bakeMap(){let e=this.quality;if(!e.mapLight||!e.bakeMapLight)return;let t=performance.now(),n=oo(this.scene,this.renderer.shadowMap.enabled);if(!n)return;let r=new Map(this.culls.map(e=>[e.mesh,e])),i=new Map;for(let{mesh:e}of this.mapMeshes)i.set(e.geometry,(i.get(e.geometry)??0)+1);for(let{mesh:t,original:a}of this.mapMeshes){if(t===this.water||Array.isArray(a)||!Ja(a)||this.bakes.has(t))continue;let o=a,s=t.isInstancedMesh===!0,c=r.get(t)?.original,l=s?c?c.length/16:t.count:1,u=t.geometry.getAttribute(`position`).count*l*(o.side===2?2:1);if(Math.ceil(u/ao.width)>this.renderer.capabilities.maxTextureSize)continue;let d={environment:Za(o,this.scene.environmentIntensity),metal:o.metalness,points:io(o,e.mapPointLights,!0)===`vertex`},f=()=>lo(t,n,d,o.side===2,o.side===1,c),p=f();if(s){if((i.get(t.geometry)??0)>1){let e=new we,n=t.geometry;for(let[t,r]of Object.entries(n.attributes))e.setAttribute(t,r);e.setIndex(n.index);for(let t of n.groups)e.addGroup(t.start,t.count,t.materialIndex);e.boundingSphere=n.boundingSphere,e.boundingBox=n.boundingBox,t.geometry=e}let e=new I(Float32Array.from({length:p.count},(e,t)=>t),1);e.setUsage(g),t.geometry.setAttribute(`mapLightInstance`,e)}this.bakes.set(t,{texture:fo(p),width:ao.width,vertices:p.vertices,texels:p.texels,redo:f})}this.bakeMs=performance.now()-t}rebake(){for(let e of this.bakes.values())e.texture.image.data=uo(e.redo(),e.width).data,e.texture.needsUpdate=!0}bakeReport(){let e=0,t=0,n=0;for(let[r,i]of this.bakes)e+=i.texture.image.width*i.texture.image.height,r.isInstancedMesh&&t++,i.texels===2&&n++;return{meshes:this.bakes.size,instanced:t,doubleSided:n,texels:e,megabytes:+(e*8/1e6).toFixed(1),milliseconds:Math.round(this.bakeMs)}}fighterLightMaterials=new Map;fighterMaterialKey(){let e=this.quality;return`${e.fighterLight?`light:${e.mapPointLights}:${e.shadowSamples}:${e.fighterKeepMetal}`:`standard`}:${e.fadeWhenNeeded}`}applyFighterMaterials(){for(let e of[...this.fighters.values(),...this.bench])this.dressFighter(e)}dressFighter(e){let t=this.quality,n=new Set;for(let r of e.parts){let i=e=>e.isMeshStandardMaterial===!0,a=n=>t.fighterLight&&i(n)&&!(t.fighterKeepMetal&&no(n,e.role))?this.fighterLightOf(n,t.mapPointLights,t.shadowSamples===1):n;r.mesh.material=Array.isArray(r.original)?r.original.map(a):a(r.original);for(let e of[r.mesh.material].flat())n.add(e)}e.fadeMaterials=[...n]}fighterLightOf(e,t,n){let r=`${e.uuid}:${t}:${n}`,i=this.fighterLightMaterials.get(r);return i||this.fighterLightMaterials.set(r,i=$a(e,this.scene.environmentIntensity,{points:t?`vertex`:`none`,shadowOnce:n})),i}plainOf(e){let t=e;if(!t.isMeshStandardMaterial)return e;let n=this.plainMaterials.get(e);if(!n){let r=t.color.clone();t.emissive&&t.emissiveIntensity>0&&r.add(t.emissive.clone().multiplyScalar(t.emissiveIntensity)),n=new V({color:r,map:t.map,vertexColors:t.vertexColors,side:t.side,transparent:t.transparent,opacity:t.opacity,alphaTest:t.alphaTest,alphaMap:t.alphaMap,depthWrite:t.depthWrite,depthTest:t.depthTest,fog:t.fog}),this.plainMaterials.set(e,n)}return n}async prepareMapShaders(){let e=this.renderer.getRenderTarget();this.renderer.setRenderTarget(this.effects.composer.readBuffer);let t;try{t=Promise.all(xs.map(e=>this.scene.getObjectByName(e)).filter(e=>!!e).map(e=>this.renderer.compileAsync(e,this.camera,this.scene)))}finally{this.renderer.setRenderTarget(e)}await t}skyMesh;skyCube;skyColor=new r(`#203d61`);cacheSky(e){this.skyMesh&&e&&!this.skyCube&&(this.skyCube=new zt(e,{type:h,generateMipmaps:!1,minFilter:re,magFilter:re,depthBuffer:!1}),this.drawSkyCube())}drawSkyCube(){let e=this.skyMesh,t=this.skyCube;if(!e||!t)return;let n=e.parent,r=new S,i=e.visible;r.add(e),e.visible=!0,new a(1,1e3,t).update(this.renderer,r),e.visible=i,n.add(e)}applySky(){let e=this.skyMesh;if(!e)return;let t=this.benchmarkMode,n=!!t?.hideSky,r=!!this.skyCube&&this.quality.skyCube>0&&!t?.liveSky;e.visible=!n&&!r,this.scene.background=r&&!n?this.skyCube.texture:this.skyColor}culls=[];cullShapes(e){if(!this.culls.length)return;let t=this.renderer.shadowMap.autoUpdate||this.renderer.shadowMap.needsUpdate,n=this.quality.cullBuildings&&this.quality.shadow===`once`&&!this.benchmarkMode?.drawAllBuildings&&!t,r=this.benchmarkMode?.halfShapes?e=>e%2==0:void 0,i=n?go(e):void 0;if(!i&&!r){if(!this.cullsFull){for(let e of this.culls)e.showAll();this.cullsFull=!0}return}this.cullsFull=!1;for(let e of this.culls)e.show(e.pick(i,r))}cullsFull=!0;quality;baseQuality;applyQuality(e){if(e!==this.quality){this.quality=e;let t=Math.min(devicePixelRatio,e.pixelRatio);this.renderer.getPixelRatio()!==t&&(this.renderer.setPixelRatio(t),this.resize()),this.renderer.shadowMap.autoUpdate=e.shadow===`every`,this.shadowBaked=!1,this.shadowElapsed=0,this.renderer.shadowMap.needsUpdate=!0,this.puckDisc.castShadow=e.movingShadows,this.effects.setBloom(e.bloom);for(let t of this.lamps)t.visible=e.lampLights;this.effects.setAmbientOcclusion(e.ambientOcclusion),this.effects.setSharpen(e.sharpen),this.effects.setAntialias(e.antialias)}this.applyMapMaterials(),this.applySky(),this.applyFighterMaterials()}lamps=[];puckDisc;shadowBaked=!1;sceneryReady=!1;viewportWidth=1;viewportHeight=1;water;mobileDevice=/Android|iPhone|iPad|iPod/i.test(navigator.userAgent)||navigator.platform===`MacIntel`&&navigator.maxTouchPoints>1;constructor(e,t=`royal`){this.canvas=e,this.mapId=t;let n=xt(t),r=n.shape===`circle`;this.renderer=new Mt({canvas:e,antialias:!this.mobileDevice,alpha:!1,powerPreference:`high-performance`}),e.addEventListener(`webglcontextrestored`,()=>{this.makeEnvironment(),this.drawSkyCube(),this.rebake()}),this.baseQuality=this.quality=Wa(t,this.mobileDevice),this.renderer.setPixelRatio(Math.min(devicePixelRatio,this.quality.pixelRatio)),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.autoUpdate=this.quality.shadow===`every`,this.renderer.shadowMap.needsUpdate=!0,this.renderer.shadowMap.type=1,this.renderer.outputColorSpace=o,this.renderer.toneMapping=4,this.renderer.toneMappingExposure=.92,this.scene.background=this.skyColor,this.scene.fog=new F(`#48658a`,.0034),this.scene.add(new te(r?`#c5d4ec`:`#88a8de`,r?`#645342`:`#323043`,r?.85:.65));let i=new m(r?`#ffe1b3`:`#99b9ef`,r?2.4:1.75);i.position.set(-28,47,-38),i.castShadow=!0,i.shadow.mapSize.set(2048,2048),Object.assign(i.shadow.camera,{left:-n.width/2-24,right:n.width/2+24,top:n.depth/2+24.5,bottom:-n.depth/2-24.5,near:1,far:160}),r||Object.assign(i.shadow.camera,{left:-q.width/2-31,right:q.width/2+31,top:q.depth/2+31.5,bottom:-q.depth/2-31.5}),i.shadow.bias=-3e-4,i.shadow.normalBias=.025,i.shadow.radius=2,this.scene.add(i);let a=new m(`#e9a775`,.32);a.position.set(-15,15,35),this.scene.add(a),this.makeEnvironment(),this.scene.environmentIntensity=r?.3:.22,this.ready=Promise.all([r?rn(this.scene):Xt(this.scene),hr(),Ct()===`human`?It():void 0]).then(()=>{this.water=this.scene.getObjectByName(`harbour-water`);for(let e of xs){let t=this.scene.getObjectByName(e);t&&(t.updateWorldMatrix(!0,!0),t.traverse(e=>{e.matrixAutoUpdate=!1,e.matrixWorldAutoUpdate=!1}))}this.scene.traverse(e=>{e.name===`city-lamp-light`&&e.isPointLight&&this.lamps.push(e)});for(let e of this.lamps)e.visible=this.quality.lampLights;for(let e of xs)this.scene.getObjectByName(e)?.traverse(e=>{let t=e;t.isMesh&&[t.material].flat().some(e=>e.isMeshStandardMaterial)&&this.mapMeshes.push({mesh:t,original:t.material})});for(let e of[`blender-harbour-city`,`rift-arena`])this.scene.getObjectByName(e)?.traverse(e=>{e.isInstancedMesh&&this.culls.push(new _o(e))});return this.skyMesh=this.scene.getObjectByName(Ss),this.cacheSky(this.quality.skyCube),this.bakeMap(),this.applyMapMaterials(),this.applySky(),this.prepareMapShaders().then(()=>this.prepareEffectShaders())}).then(()=>{this.sceneryReady=!0}),this.scene.onBeforeRender=(e,t,n)=>this.cullShapes(n),this.ready.catch(e=>{console.error(`ゲームの素材の読み込みに失敗しました`,e)});let s=q.puckRadius,c=ys,l=s*c.height,u=c.floorGap+l,d=new H(new fe(s*c.taper,s,l,32),new K({color:`#101923`,metalness:.75,roughness:.26}));d.position.y=c.floorGap+l/2,d.castShadow=this.quality.movingShadows,this.puck.add(d),this.puckDisc=d;let f=new H(new fe(s*c.coreRadius,s*c.coreRadius,c.coreThickness,24),new V({color:`#e4ffc0`}));f.position.y=u+c.coreLift+c.coreThickness/2,this.puck.add(f);let p=new H(new je(s*c.bandRadius,s*c.bandThickness,6,32),new V({color:`#d0ff82`}));p.rotation.x=Math.PI/2,p.position.y=c.floorGap+l*c.bandAt,this.puck.add(p);let h=new H(new G(s*c.glowInner,s*c.glowOuter,32),new V({color:`#d0ff82`,transparent:!0,opacity:.55,side:2,depthWrite:!1}));h.rotation.x=-Math.PI/2,h.position.y=c.glowLift,this.puck.add(h),this.scene.add(this.puck),this.puckParts=[f.material,p.material,h.material];let g=new H(new G(ct.ringRadius*ct.ringInner,ct.ringRadius,40),new V({color:`#ff5a5a`,transparent:!0,opacity:0,side:2,depthWrite:!1}));g.rotation.x=-Math.PI/2,g.visible=!1,this.threatRing=g,this.scene.add(g);let _=Math.acos(Ot.showAngle),v=new H(new Oe(1,48,-_,_*2),new V({color:`#ffffff`,transparent:!0,opacity:0,side:2,depthWrite:!1}));v.rotation.x=-Math.PI/2,v.visible=!1,this.reachFan=v,this.scene.add(v);let y=new H(new G(.9,1,48,1,-_,_*2),new V({color:`#ffffff`,transparent:!0,opacity:0,side:2,depthWrite:!1}));y.rotation.x=-Math.PI/2,y.visible=!1,this.coreBand=y,this.scene.add(y);let b=os,x=new H(new G(b-.06,b,48),new V({color:`#e8eef6`,transparent:!0,opacity:0,side:2,depthWrite:!1}));x.rotation.x=-Math.PI/2,x.visible=!1,this.bodyRing=x,this.scene.add(x);for(let e=0;e<c.trailCount;e++){let t=new H(new Oe(s*c.trailRadius*(1-e/18),12),new V({color:`#c7ff7b`,transparent:!0,opacity:.3*(1-e/c.trailCount),depthWrite:!1}));t.rotation.x=-Math.PI/2,t.position.y=c.trailLift,t.visible=!1,this.scene.add(t),this.trail.push(t)}this.effects=new Ha(this.renderer,this.scene,this.camera,this.mobileDevice,{ambientOcclusion:this.quality.ambientOcclusion,bloom:this.quality.bloom}),this.effects.setSharpen(this.quality.sharpen),this.effects.setAntialias(this.quality.antialias),this.resize()}async prepareEffectShaders(){let e=new me(1,1),t=[new V,new V({transparent:!0,depthWrite:!1}),new V({transparent:!0,depthWrite:!1,side:2}),new K({color:`#87e5ff`,emissive:`#1a809b`,emissiveIntensity:.3,metalness:.2,roughness:.18,transparent:!0,opacity:.84}),xo()];for(let n of t){let t=new H(e,n);t.castShadow=!0,this.effectShaders.add(t)}let r=new we;r.setAttribute(`position`,new R(new Float32Array(9),3)),r.setAttribute(`color`,new R(new Float32Array(9),3)),this.effectShaders.add(new H(r,new V({vertexColors:!0,transparent:!0,depthWrite:!1,side:2,blending:2})));let i=new G(.5,1,4);i.setAttribute(`color`,new R(new Float32Array(i.getAttribute(`position`).count*3),3)),this.effectShaders.add(new H(i,new V({vertexColors:!0,transparent:!0,side:2,depthWrite:!1})));let a=new we;a.setAttribute(`position`,new R(new Float32Array(9),3)),this.effectShaders.add(new H(a,Nn()));let o=new we;o.setAttribute(`position`,new R(new Float32Array(9),3)),o.setAttribute(`normal`,new R(new Float32Array([0,1,0,0,1,0,0,1,0]),3)),o.setAttribute(`skinIndex`,new n(new Uint16Array(12),4)),o.setAttribute(`skinWeight`,new R(new Float32Array([1,0,0,0,1,0,0,0,1,0,0,0]),4));let s=new x(o,new V({transparent:!0,depthWrite:!1})),c=new ge;s.add(c),s.bind(new b([c])),s.frustumCulled=!1,this.effectShaders.add(s);let l=this.renderer.getRenderTarget();this.renderer.setRenderTarget(this.effects.composer.readBuffer);let u;try{u=this.renderer.compileAsync(this.effectShaders,this.camera,this.scene)}finally{this.renderer.setRenderTarget(l)}await u}async prepareFighterShaders(){let e=[...this.fighters.values()],t=e.flatMap(e=>[e.mesh,e.heal,e.barrier,...e.calm?[e.calm]:[]]),n=this.quality.fadeWhenNeeded?e.flatMap(e=>e.fadeMaterials).filter(e=>!e.transparent):[],r=n.map(e=>e.alphaHash),i=this.renderer.getRenderTarget();this.renderer.setRenderTarget(this.effects.composer.readBuffer);let a=[];try{for(let e of n.length?[!1,!0]:[void 0]){if(e!==void 0)for(let t of n)t.alphaHash!==e&&(t.alphaHash=e,t.needsUpdate=!0);a.push(...bt(t).map(e=>this.renderer.compileAsync(e,this.camera,this.scene)))}}finally{n.forEach((e,t)=>{e.alphaHash!==r[t]&&(e.alphaHash=r[t],e.needsUpdate=!0)}),this.renderer.setRenderTarget(i)}await Promise.all(a)}sizeStale(){let e=this.canvas.clientWidth,t=this.canvas.clientHeight;return e>0&&t>0&&(e!==this.viewportWidth||t!==this.viewportHeight)}resize(){let e=this.canvas.clientWidth,t=this.canvas.clientHeight;this.viewportWidth=e,this.viewportHeight=t,this.renderer.setSize(e,t,!1),this.camera.aspect=e/t,this.camera.updateProjectionMatrix(),this.effects?.resize(e,t)}resetCamera(e=0){this.yaw=Ne(e)*Math.PI/2,this.pitch=.58,this.gunPitch=.12,this.lastPhase=``}project(e,t,n){return this.projection.set(e,t,n).project(this.camera),{x:(this.projection.x*.5+.5)*this.viewportWidth,y:(-.5*this.projection.y+.5)*this.viewportHeight,visible:this.projection.z>-1&&this.projection.z<1&&Math.abs(this.projection.x)<1.08&&Math.abs(this.projection.y)<1.1}}groundAxes(e,t){this.camera.updateMatrixWorld();let n={x:Math.sin(this.yaw),z:Math.cos(this.yaw)},r={x:-n.z,z:n.x},i=.5,a=this.project(e.x,t,e.z);if(!a.visible)return;let o=this.project(e.x+r.x*i,t,e.z+r.z*i),s=this.project(e.x+n.x*i,t,e.z+n.z*i);return{right:r,forward:n,onRight:{x:(o.x-a.x)/i,y:(o.y-a.y)/i},onForward:{x:(s.x-a.x)/i,y:(s.y-a.y)/i}}}drawPuckState(e,t){let n=it(Math.hypot(e.puck.velocity.x,e.puck.velocity.z));this.puckTint.lerp(this.tierColor(n),t>0?Math.min(1,t/ct.blend):0);for(let e of this.puckParts)e.color.copy(this.puckTint).multiplyScalar(n.glow);let r=Re(e);if(r>0){this.puckTint.lerp(vs,Math.min(1,r*1.1));for(let e of this.puckParts)e.color.copy(this.puckTint).multiplyScalar(1+r*1.6)}let i=.8+n.glow*.2,a=Math.min(1,n.glow),o=r>0?this.trail.length:n.trail;this.trail.forEach((t,n)=>{let r=e.puck.trail[e.puck.trail.length-1-n];if(t.visible=!!r&&n<o,!t.visible)return;t.position.set(r.x,ys.trailLift,r.z),t.scale.setScalar(i);let s=t.material;s.color.copy(this.puckTint),s.opacity=.3*(1-n/ys.trailCount)*a});let s=this.threatRing;if(!s)return;let c=e.fighters.find(t=>t.id===e.controlledId),l=c&&e.phase===`playing`?ut(e.puck,c,Je(e,c.id)):null,u=lt(this.threatDisplay,l,t);s.visible=u.visible,u.visible&&c&&(s.position.set(c.pos.x,.055,c.pos.z),s.material.opacity=u.opacity)}drawReachFan(e,t){let n=this.reachFan,i=this.coreBand,a=this.bodyRing;if(!n||!i||!a)return;let o=e.fighters.find(t=>t.id===e.controlledId),s=o&&e.phase===`playing`&&o.role!==`gunner`&&o.stun<=0&&!o.meditating&&!o.sprinting?!Ot.showWhenReady||o.cooldowns[0]<=0?1:.25:0,c=t>0?t/Ot.fadeIn:0;this.reachFanLevel+=W.clamp(s-this.reachFanLevel,-c,c);let l=this.reachFanLevel;if(n.visible=i.visible=a.visible=l>.01,!n.visible||!o)return;let u=pt(o.role)+q.puckRadius;if(this.reachFanRole!==o.role){this.reachFanRole=o.role,n.material.color.set(Le[o.role].color),i.material.color.set(Le[o.role].color).lerp(new r(`#ffffff`),.45);let e=u-os,t=Math.acos(Ot.showAngle);i.geometry.dispose(),i.geometry=new G(os+e*(Ie.core-Ie.criticalBand),os+e*(Ie.core+Ie.criticalBand),48,1,-t,t*2)}let d=Math.atan2(-o.facing.z,o.facing.x);n.position.set(o.pos.x,.035,o.pos.z),n.scale.setScalar(u),n.rotation.set(-Math.PI/2,0,d),n.material.opacity=.15*l,i.position.set(o.pos.x,.04,o.pos.z),i.rotation.set(-Math.PI/2,0,d);let f=Ve(e,o);this.corePulse=f?this.corePulse+t:0;let p=f?.78+.22*Math.sin(this.corePulse/.12*Math.PI*2):0;i.material.opacity=(f?.62+.3*p:.28)*l,a.position.set(o.pos.x,.03,o.pos.z),a.material.opacity=.12*l}tierColor(e){return this.tierColors.get(e.color)??this.tierColors.set(e.color,new r(e.color)).get(e.color)}tierColors=new Map;dodgeGhost(e,t){let n=e.fighters.find(e=>e.dash?.presentation===`dodge-afterimage`&&Math.hypot(e.pos.x-t.pos.x,e.pos.z-t.pos.z)<1.5),r=n&&this.fighters.get(n.id)?.mesh.userData.samurai;if(!n||!r)return;let i=Sn(r.model);return i.position.x+=t.pos.x-n.pos.x,i.position.z+=t.pos.z-n.pos.z,i}disposeObject(e){e.traverse(e=>{if(e instanceof H){if(e instanceof x&&e.skeleton.dispose(),e.userData.ghost)return;e.geometry.dispose(),(Array.isArray(e.material)?e.material:[e.material]).forEach(e=>e.dispose())}}),e.userData.ghostMaterial?.dispose(),this.scene.remove(e)}dropStaleAvatars(){let e=this.avatar?mt(this.avatar.look):``;this.bench.some(t=>t.look&&t.look!==e)&&(this.bench=this.bench.filter(t=>{if(!t.look||t.look===e)return!0;for(let e of[t.mesh,t.ring,t.shadow,t.heal,t.barrier,t.calm])e?.traverse(e=>{e instanceof H&&(e instanceof x&&e.skeleton.dispose(),(Array.isArray(e.material)?e.material:[e.material]).forEach(e=>e.dispose()))});return!1}))}createFighter(e){let t=this.avatarOf(e),n=aa(e.role,e.team,t),r=new H(new G(.77,.86,40),new V({color:e.team===this.viewing?ss.ally:ss.enemy,side:2,transparent:!0,opacity:.95,depthWrite:!1}));r.rotation.x=-Math.PI/2;let i=new H(new Oe(.68,20),new V({color:`#010611`,transparent:!0,opacity:.14,depthWrite:!1}));i.rotation.x=-Math.PI/2;let a=[];n.traverse(e=>{!(e instanceof H)||e.userData.samuraiVfx||e.userData.noFade||a.push({mesh:e,original:e.material})});let o=is(),s=ns(Mo.stance[e.role]),c=gn();this.scene.add(n,r,i,o,c),s&&this.scene.add(s);let l={mesh:n,role:e.role,team:e.team,look:t?mt(t):``,ring:r,shadow:i,parts:a,fadeMaterials:[],heal:o,calm:s,healLevel:0,calmLevel:0,opacity:1,barrier:c};return this.dressFighter(l),l}draw(e,t,n){if(this.benchmarkMode?.skipRender)return;let r=this.water;r?.material.userData.shader&&(r.material.userData.shader.uniforms.harbourTime.value=n);let i=this.viewing=We(e);ua(this.fighters,e.fighters,this.bench,this.seatActions),this.dropStaleAvatars();for(let r of e.fighters){let a=this.fighters.get(r.id);if(!a||!this.seatActions.ready(r))continue;a.mesh.position.set(r.pos.x,0,r.pos.z),a.mesh.rotation.y=Math.atan2(r.facing.x,r.facing.z),ca(a.mesh,r,r.role===`samurai`&&e.phase!==`lobby`?e.elapsed:n,t),a.ring.position.set(r.pos.x,.045,r.pos.z),a.ring.visible=r.id===e.controlledId,a.ring.material.color.copy(r.team===i?ss.ally:ss.enemy),a.shadow.position.set(r.pos.x,.025,r.pos.z);let o=0;for(let t of e.effects)t.presentation===`guard-hit`&&Math.hypot(t.pos.x-r.pos.x,t.pos.z-r.pos.z)<.8&&(o=Math.max(o,t.life/t.maxLife));_n(a.barrier,!!r.blocking,r.pos.x,r.pos.z,Math.atan2(r.facing.x,r.facing.z),o,r.guardGauge/Fe.gauge,a.opacity,n);let s=(e,n,r)=>t>0?W.clamp(e+(n?t/r.fadeIn:-t/r.fadeOut),0,1):e;a.healLevel=s(a.healLevel,(r.healed??0)>0&&r.stun<=0,Mo.heal),a.calmLevel=s(a.calmLevel,(!!r.meditating||!!r.sprinting||(r.boost??0)>0)&&r.stun<=0,Mo.meditation),a.heal.position.set(r.pos.x,0,r.pos.z),as(a.heal,a.healLevel*a.opacity,n,this.camera,r.id),a.calm&&(a.calm.position.set(r.pos.x,0,r.pos.z),rs(a.calm,a.calmLevel*a.opacity,n,this.camera,r.id))}this.puck.position.set(e.puck.pos.x,0,e.puck.pos.z),this.puck.rotation.y=n*1.2,this.drawPuckState(e,t),this.drawReachFan(e,t);let a=new Set;for(let n of e.projectiles){let e=`p`+n.id;a.add(e);let r=this.transient.get(e);if(!r){if(n.kind===`bullet`){r=new U;let e=new H(new l(.12,8,6),new V({color:`#fff5ce`}));r.add(e);let t=new H(new fe(.055,.015,1.15,6),new V({color:n.team===0?`#ffc66e`:`#ff7762`,transparent:!0,opacity:.85,depthWrite:!1}));t.rotation.x=Math.PI/2,t.position.z=-.57,r.add(t)}else r=n.kind===`kamaitachi`?_s():new H(n.kind===`fire`?new ee(.39,1):new j(.2),new V({color:n.kind===`fire`?`#ff9d4a`:`#b7afff`}));this.transient.set(e,r),this.scene.add(r)}r.position.set(n.pos.x,n.kind===`kamaitachi`?0:n.height??1.1,n.pos.z),n.kind===`bullet`?(r.quaternion.setFromUnitVectors(new E(0,0,1),new E(n.velocity.x,n.verticalVelocity??0,n.velocity.z).normalize()),r.children[1].material.color.copy(ds[n.team])):n.kind===`kamaitachi`?(r.quaternion.setFromUnitVectors(new E(0,0,1),new E(n.velocity.x,0,n.velocity.z).normalize()),r.scale.setScalar(1+.22*(1-Math.max(0,Math.min(1,n.life/Et.life))))):r.rotation.y+=t*10}for(let t of e.walls){let e=`w`+t.id;a.add(e);let r=this.transient.get(e);if(t.kind===`light`){r||(r=So(t.width,t.id,n),this.transient.set(e,r),this.scene.add(r)),wo(r,t,n);continue}if(!r){r=new U;for(let e=0;e<6;e++){let n=1.6+e%3*.35,i=new H(new fe(.3,.53,n,5),new K({color:`#87e5ff`,emissive:`#1a809b`,emissiveIntensity:.3,metalness:.2,roughness:.18,transparent:!0,opacity:.84}));i.position.set(0,n/2,(e-2.5)*t.width/6),i.rotation.y=e,i.castShadow=this.quality.movingShadows,r.add(i)}this.transient.set(e,r),this.scene.add(r)}r.position.set(t.pos.x,0,t.pos.z),r.scale.y=Math.min(1,t.life*2);let i=kt(t);r.rotation.y=Math.atan2(-i.z,i.x)}for(let t of e.effects){if(t.presentation===`samurai-iai`)continue;let n=`e`+t.id;a.add(n);let r=this.transient.get(n);if(t.presentation===`guard-hit`)continue;if(t.presentation===`guard-break`){r||(r=vn(t.id),this.transient.set(n,r),this.scene.add(r)),yn(r,t.pos.x,t.pos.z,Math.atan2(t.direction?.x??0,t.direction?.z??1),1-t.life/t.maxLife,t.maxLife);continue}if(t.presentation===`dodge-afterimage`){r||(r=this.dodgeGhost(e,t)??new U,this.transient.set(n,r),this.scene.add(r)),r.userData.ghostMaterial&&Cn(r,1-t.life/t.maxLife);continue}if(t.presentation===`dodge-vanish`||t.presentation===`dodge-smoke`||t.presentation===`dodge-roll`||t.presentation===`dodge-step`){let e=t.presentation===`dodge-vanish`||t.presentation===`dodge-smoke`?`smoke`:`dust`;r||(r=bn(e,t.id),this.transient.set(n,r),this.scene.add(r)),xn(r,e,t.pos.x,t.pos.z,Math.min(1,(1-t.life/t.maxLife)*1.4),this.camera);continue}if(t.presentation===`kamaitachi-hold`){r||(r=_s(),this.transient.set(n,r),this.scene.add(r)),r.position.set(t.pos.x,0,t.pos.z),r.quaternion.setFromUnitVectors(new E(0,0,1),new E(t.direction?.x??1,0,t.direction?.z??0).normalize());let e=_t+(t.maxLife-t.life);us.forEach((t,n)=>{let i=r.children[n],a=e-t;i.visible=a>=0,i.material.opacity=gs*(1+.9*Math.max(0,1-a/.09))}),r.children[us.length+1].visible=!1;continue}if(t.presentation===`wind`){if(!r){r=new U;let e=new H(new G(.9,1,40,1,0,Math.PI),new V({color:`#eaf6ff`,side:2,transparent:!0,opacity:.5,depthWrite:!1}));e.rotation.x=-Math.PI/2,r.add(e),this.transient.set(n,r),this.scene.add(r)}let e=1-t.life/t.maxLife,i=t.radius*(qe.start+(1-qe.start)*Math.min(1,e));r.position.set(t.pos.x,.45,t.pos.z),r.scale.set(i,1,i),r.rotation.y=Math.atan2(-(t.direction?.x??0),-(t.direction?.z??1)),r.children[0].material.opacity=.55*(1-e)*(1-e*.5);continue}if(t.presentation===`weapon-slash`||t.presentation===`staff-hit`){if(!r){let e=t.presentation===`staff-hit`;r=new U;let i=new H(new G(t.radius*(e?.92:.84),t.radius,28,1,.45,2.25),new V({color:e?`#ffe6b0`:t.team===0?`#c8edff`:`#ffb8a4`,side:2,transparent:!0,opacity:.7,depthWrite:!1}));i.rotation.x=Math.PI/2,i.position.y=e?.55:.8,r.add(i),this.transient.set(n,r),this.scene.add(r)}let e=1-t.life/t.maxLife;r.position.set(t.pos.x,0,t.pos.z),r.rotation.y=Math.atan2(t.direction?.x??0,t.direction?.z??1)+(e-.5)*.6;let i=r.children[0];i.material.opacity=Math.sin(Math.PI*e)*.72;continue}if(t.presentation===`clash-spark`){r||(r=ko(t.id),this.transient.set(n,r),this.scene.add(r)),r.position.set(t.pos.x,t.height??1.2,t.pos.z),jo(r,1-t.life/t.maxLife,t.radius,this.camera);continue}if(t.presentation===`shockwave`){r||(r=new H(new G(.86,1,64),new V({color:`#fff6d0`,side:2,transparent:!0,opacity:.95,depthWrite:!1})),r.rotation.x=-Math.PI/2,this.transient.set(n,r),this.scene.add(r));let e=1-t.life/t.maxLife,i=.6+(t.radius-.6)*e;r.position.set(t.pos.x,.09,t.pos.z),r.scale.setScalar(i),r.material.opacity=.95*(1-e)*(1-e);continue}let i=1-t.life/t.maxLife;if(!r){let e=(t.presentation===`crit-spark`?`#fff3c4`:t.presentation===`mid-spark`?`#8ff0ff`:t.presentation===`tip-spark`?`#8f9fb4`:``)||(t.kind===`heal`?`#a7ff91`:t.kind===`hit`?`#ffb089`:t.kind===`ice`?`#8ff0ff`:t.kind===`light`?`#ffe27a`:t.team===0?`#a6ecff`:`#ffc298`);r=new U;let i=[`slash`,`charge`].includes(t.kind),a=new H(new G(t.radius*.83,t.radius,i?28:48,1,0,i?Math.PI*1.3:Math.PI*2),new V({color:e,side:2,transparent:!0,opacity:.9,depthWrite:!1}));a.rotation.x=-Math.PI/2,a.position.y=t.kind===`heal`?.12:.65,r.add(a);for(let n=0;n<7;n++){let i=new H(new j(.095),new V({color:e,transparent:!0,opacity:1}));i.position.set(Math.cos(n*6.28/7)*t.radius,.4,Math.sin(n*6.28/7)*t.radius),r.add(i)}this.transient.set(n,r),this.scene.add(r)}r.position.set(t.pos.x,0,t.pos.z),r.scale.setScalar(.7+i*.5),r.rotation.y=i*2,r.children.forEach((e,t)=>{let n=e;n.material.opacity=1-i,t>0&&(e.position.y=.35+i*1.5)})}for(let[e,t]of this.transient)a.has(e)||(this.disposeObject(t),this.transient.delete(e));let o=e.fighters.find(t=>t.id===e.controlledId),s=e.phase===`lobby`;if(this.camera.position.sub(this.shake),this.shake.set(0,0,0),s){let e=this.camera.aspect;if(this.mapId===`colosseum`){let t=xt(this.mapId).radius;this.target.set(10,7,-6),this.camera.position.set(-t*.62,e<1.6?11:9.5,t*.54)}else this.target.set(35,8,-3),this.camera.position.set(-q.width/2-9+Math.sin(n*.06)*.5,e<1.6?13:11,12);this.camera.lookAt(this.target)}else{let e=new E(Math.sin(this.yaw),0,Math.cos(this.yaw)),n=new E(o.pos.x,0,o.pos.z),r=n.clone().addScaledVector(e,-8);r.y=1.56+this.pitch*3;let i=7;if(this.mapId===`colosseum`){let e=xt(this.mapId).radius-.9,t=Math.hypot(r.x,r.z);t>e&&(r.x*=e/t,r.z*=e/t);let a=Math.hypot(r.x-n.x,r.z-n.z);r.y+=Math.max(0,4-a)*.7,i=W.lerp(.65,7,W.smoothstep(a,.4,4))}let a=n.clone().addScaledVector(e,i);a.y=1.8;let s=this.lastPhase===`lobby`||this.lastPhase===``?1:1-Math.exp(-t*10);this.camera.position.lerp(r,s),this.target.lerp(a,s),this.camera.lookAt(this.target)}if(!s){let t=at(o),r=Math.max(t.f>0?(.05+.07*t.s)*t.f:o.hitStop>0?.03:0,Ge(e));r>0&&(this.shake.set(Math.sin(n*80)*r,Math.cos(n*63)*r,0),this.camera.position.add(this.shake),this.camera.lookAt(this.target))}this.lastPhase=e.phase;let c=new Set(e.fighters.filter(e=>e.dash?.presentation===`dodge-vanish`).map(e=>e.id));for(let[t,n]of this.fighters){let r=n.mesh.position.distanceTo(this.camera.position),i=s||t===e.controlledId?1:W.smoothstep(r,4.5,6.5);for(let e of n.fadeMaterials){let t=ro(e,i,this.quality.fadeWhenNeeded);e.alphaHash!==t&&(e.alphaHash=t,e.needsUpdate=!0),e.opacity=i}n.mesh.visible=i>.015&&!c.has(t)&&!this.benchmarkMode?.hideFighters,n.opacity=i}for(let t of e.fighters)if(t.role===`gunner`&&t.stun<=0){let n=this.fighters.get(t.id)?.mesh;if(!n)continue;t.id===e.controlledId&&!s?la(n,new E(t.pos.x+t.facing.x*12,1.2,t.pos.z+t.facing.z*12)):la(n,new E(e.puck.pos.x,.25,e.puck.pos.z))}this.quality.shadow===`once`?this.sceneryReady&&!this.shadowBaked&&(this.renderer.shadowMap.needsUpdate=!0,this.shadowBaked=!0):this.quality.shadow===`hz30`&&(this.shadowElapsed+=t,this.shadowElapsed>=1/30&&(this.renderer.shadowMap.needsUpdate=!0,this.shadowElapsed%=1/30)),this.benchmarkMode?.direct?(this.renderer.info.reset(),this.renderer.setRenderTarget(null),this.renderer.render(this.scene,this.camera)):this.effects.render(t)}gunAim(e){let t=e.fighters.find(t=>t.id===e.controlledId);this.camera.updateMatrixWorld(!0);let n=this.camera.position.clone(),r=this.camera.getWorldDirection(new E).multiplyScalar(100),i=Xe(e,n,r,t.team,0),a=n.clone().addScaledVector(r,i?.t??1),o=this.fighters.get(t.id)?.mesh;return o&&(o.position.set(t.pos.x,0,t.pos.z),o.rotation.y=Math.atan2(t.facing.x,t.facing.z)),{origin:(o?la(o,a):void 0)??{x:t.pos.x,y:1.2,z:t.pos.z},target:a}}minimap(e,t){let n=e.getContext(`2d`),r=e.width,i=e.height,a=xt(t.mapId),o=a.shape===`circle`;n.clearRect(0,0,r,i);let s=Math.min(r-20,i-20)/(a.radius*2),c=o?s:(r-20)/a.width,l=o?s:(i-20)/a.depth,u=e=>r/2+e*c,d=e=>i/2+e*l;n.strokeStyle=`#ffffff35`,n.lineWidth=1,n.fillStyle=`#b28b5720`,n.beginPath(),o?n.arc(r/2,i/2,a.radius*c,0,Math.PI*2):n.rect(10,10,r-20,i-20),n.fill(),n.stroke(),n.beginPath(),n.moveTo(r/2,d(-a.depth/2)),n.lineTo(r/2,d(a.depth/2)),n.stroke(),n.beginPath(),n.arc(r/2,i/2,o?5*c:12,0,Math.PI*2),n.stroke();for(let e of[0,1])n.strokeStyle=e===0?`#83dbff`:`#ff907d`,n.lineWidth=3,n.beginPath(),n.moveTo(u((e?1:-1)*a.goalX),d(-a.goalWidth/2)),n.lineTo(u((e?1:-1)*a.goalX),d(a.goalWidth/2)),n.stroke();for(let e of t.walls){let t=kt(e),r=-t.z*e.width/2,i=t.x*e.width/2;n.strokeStyle=e.kind===`light`?`#ffe27a`:`#b1f1ff`,n.lineWidth=3,n.beginPath(),n.moveTo(u(e.pos.x-r),d(e.pos.z-i)),n.lineTo(u(e.pos.x+r),d(e.pos.z+i)),n.stroke()}for(let e of t.fighters){let r=e.id===t.controlledId;n.fillStyle=e.stun>0?`#7b8194`:r?`#c6ff8b`:e.team===0?`#85dcff`:`#ff897d`,n.beginPath(),n.arc(u(e.pos.x),d(e.pos.z),r?4:3,0,Math.PI*2),n.fill(),r&&(n.strokeStyle=`#c6ff8b77`,n.lineWidth=1,n.beginPath(),n.arc(u(e.pos.x),d(e.pos.z),7,0,Math.PI*2),n.stroke())}let f=it(Math.hypot(t.puck.velocity.x,t.puck.velocity.z));n.globalAlpha=!f.blink||Math.floor(t.elapsed/(ct.blinkPeriod/2))%2==0?1:.35,n.fillStyle=f.color,n.beginPath(),n.arc(u(t.puck.pos.x),d(t.puck.pos.z),f.dot,0,Math.PI*2),n.fill(),n.globalAlpha=1}};export{Cs as GameView};