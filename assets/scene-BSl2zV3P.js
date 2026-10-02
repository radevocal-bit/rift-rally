import{$ as e,A as t,B as n,C as r,D as i,E as a,F as o,G as s,H as c,I as l,J as u,K as d,L as f,M as p,N as m,O as h,P as g,Q as _,R as v,T as y,U as b,V as x,W as S,X as C,Y as w,Z as T,_t as E,at as D,ct as O,dt as k,et as A,ft as j,gt as M,ht as ee,it as N,j as te,k as ne,lt as re,mt as P,nt as ie,ot as ae,p as oe,pt as se,q as ce,r as le,rt as ue,s as de,st as fe,t as pe,tt as F,ut as me,vt as he,w as ge,yt as _e,z as ve}from"./index-Cozwf9y_.js";import{An as ye,At as be,Bn as xe,C as I,Dt as Se,E as Ce,En as we,Et as Te,F as Ee,Fn as De,G as Oe,Gn as ke,H as L,Hn as Ae,I as je,J as Me,L as Ne,Ln as Pe,Lt as Fe,M as Ie,Mn as Le,Nn as Re,On as ze,P as Be,Pn as Ve,Q as He,Qn as R,Rn as Ue,S as We,T as Ge,Tt as Ke,U as qe,Un as Je,V as Ye,W as Xe,X as Ze,Y as Qe,Z as $e,Zn as z,_ as et,_t as tt,at as nt,b as rt,d as it,dt as at,et as ot,ft as st,g as ct,gn as lt,h as ut,it as dt,jt as B,k as ft,kn as pt,kt as mt,l as ht,m as gt,mt as V,nt as _t,ot as vt,pt as H,q as U,qn as yt,rt as bt,tr as xt,u as St,ut as W,v as Ct,vt as wt,w as Tt,wt as Et,x as Dt,xn as Ot,xt as kt,yn as At,yt as G,zn as jt}from"./avatar-LYxZDiit.js";import{_ as Mt,a as Nt,c as Pt,d as Ft,f as It,g as Lt,h as Rt,i as zt,l as Bt,m as Vt,n as Ht,o as Ut,p as Wt,s as Gt,t as Kt,u as qt,v as Jt}from"./yuru-party-DUZQ6xci.js";import{i as Yt,l as Xt,t as Zt}from"./pudding-l1KIkEnb.js";var Qt;function $t(){if(Qt)return Qt;let e=4093,t=()=>(e=Math.imul(e,1664525)+1013904223>>>0,e/4294967296),n=e=>{let n=document.createElement(`canvas`);n.width=n.height=512;let r=n.getContext(`2d`),i=r.createImageData(512,512);for(let n=0;n<512;n++)for(let r=0;r<512;r++){let a=e===`wood`?Math.sin(r*.32+Math.sin(n*.035)*1.2)*8+Math.sin(r*1.13+n*.007)*5:e===`cloth`?(r%3==0?-15:0)+(n%3==0?-13:0):0,o=(e===`wood`?173:e===`slate`?168:e===`cloth`?226:216)+a+(t()-.5)*(e===`plaster`?33:17),s=(n*512+r)*4;i.data[s]=o,i.data[s+1]=o,i.data[s+2]=o,i.data[s+3]=255}if(r.putImageData(i,0,0),e===`wood`){for(let e=0;e<512;e+=128)r.fillStyle=`#3a342c`,r.fillRect(e,0,3,512),r.fillStyle=`#ded0b7`,r.fillRect(e+4,0,2,512);for(let e=0;e<170;e++){let n=t()*512;r.strokeStyle=`rgba(55,42,25,${.06+t()*.17})`,r.lineWidth=.5+t()*1.1,r.beginPath(),r.moveTo(n,0),r.bezierCurveTo(n+Math.sin(e)*13,170,n-Math.cos(e)*7,360,n,512),r.stroke()}}if(e===`slate`)for(let e=-1;e<9;e++)for(let n=-1;n<9;n++){let i=n*64+e%2*32,a=e*64,o=132+t()*57;r.fillStyle=`rgb(${o},${o+2},${o+4})`,r.fillRect(i+1,a+2,62,61),r.fillStyle=`#555960`,r.fillRect(i,a+60,64,4),r.fillRect(i,a,2,60),r.fillStyle=`#bec2c2`,r.fillRect(i+3,a+4,58,1);for(let e=0;e<13;e++)r.fillStyle=t()>.5?`#ffffff09`:`#00000012`,r.fillRect(i+4+t()*53,a+6+t()*46,1+t()*19,1)}let a=new rt(n);return a.colorSpace=we,a.wrapS=a.wrapT=At,a.anisotropy=4,a};return Qt={wood:n(`wood`),slate:n(`slate`),cloth:n(`cloth`),plaster:n(`plaster`)},Qt}function en(e,t){let n=e.getAttribute(`position`),r=e.getAttribute(`normal`),i=new Float32Array(n.count*2);for(let e=0;e<n.count;e++){let a=Math.abs(r.getX(e)),o=Math.abs(r.getY(e)),s=Math.abs(r.getZ(e));i[e*2]=(a>o&&a>s?n.getZ(e):n.getX(e))*t,i[e*2+1]=(o>a&&o>s?n.getZ(e):n.getY(e))*t}e.setAttribute(`uv`,new et(i,2))}function tn(e,t){let n=(e,t,n)=>e+Math.max(-1,Math.min(1,e/t))*(n-t);return{x:n(e,17,F.width/2),z:n(t,10.5,F.depth/2)}}var nn=e=>e.isMesh===!0,rn=`city-lamp-light`,an=e=>e.isMeshStandardMaterial===!0;async function on(e){let t=new U;t.name=`blender-harbour-city`;let n=new ht,r=new Pe,i=await fetch(`./models/twilight-city-layout.json`);if(!i.ok)throw Error(`City layout unavailable`);let a=await i.json(),o=e=>({...e,...tn(e.x,e.z)}),s={...a,palace:o(a.palace),blocks:a.blocks.map(e=>({...e,placements:e.placements.map(o)}))},[c,l,u,d]=await Promise.all([n.loadAsync(`./models/twilight-infrastructure.glb`),n.loadAsync(`./models/monumental-palace-v3.glb`),Promise.all(s.blocks.map(e=>n.loadAsync(`./models/${e.model}.glb`))),Promise.all([`weathered-limestone-v3`,`aged-oak-v3`,`lime-plaster-v3`].map(e=>r.loadAsync(`./textures/${e}.png`)))]),f=$t(),p=d.map(e=>(e.colorSpace=we,e.wrapS=e.wrapT=At,e.anisotropy=8,e)),m=p.map(e=>{let t=e.clone();return t.colorSpace=``,t.needsUpdate=!0,t}),h=new Set;for(let e of[c.scene,l.scene,...u.map(e=>e.scene)])e.traverse(e=>{if(nn(e)){e.receiveShadow=!0;for(let t of Array.isArray(e.material)?e.material:[e.material]){if(!an(t)||h.has(t))continue;h.add(t),t.envMapIntensity=.25;let e=t.name;/WarmGlass/i.test(e)?(t.color.set(`#6b391d`),t.emissive.set(`#ff9b43`),t.emissiveIntensity=1.05,t.roughness=.35):/Recess|Shadow|DarkStone/i.test(e)?(t.normalMap=null,t.map=p[0],t.bumpMap=m[0],t.bumpScale=.055):/Stone|limestone/i.test(e)?(t.normalMap=null,t.map=p[0],t.bumpMap=m[0],t.bumpScale=.095,t.roughness=.88,t.color.lerp(new I(`#c1b9a8`),.48)):/Oak|Wood|walnut/i.test(e)?(t.normalMap=null,t.map=p[1],t.bumpMap=m[1],t.bumpScale=.045,t.roughness=.82,t.color.lerp(new I(`#aea094`),.58)):/Plaster/i.test(e)?(t.normalMap=null,t.map=p[2],t.bumpMap=m[2],t.bumpScale=.035,t.roughness=.94,t.color.lerp(new I(`#d0bbaa`),.44)):/Slate|RoofTile/i.test(e)?(t.normalMap=null,t.map=f.slate,t.bumpMap=f.slate,t.bumpScale=.045,t.roughness=.66,t.color.set(`#3b5266`)):/Linen|Canvas|Teal/i.test(e)&&(t.normalMap=null,t.map=f.cloth,t.bumpMap=f.cloth,t.bumpScale=.012,t.roughness=.94),/Leaves|Flowers/i.test(e)&&(t.side=2,t.roughness=.86),t.onBeforeCompile=e=>{e.fragmentShader=e.fragmentShader.replace(`#include <normal_fragment_maps>`,`
          vec3 stableSurfaceNormal=normal;
          #include <normal_fragment_maps>
          if(!(dot(normal,normal)>0.5))normal=stableSurfaceNormal;
        `)},t.customProgramCacheKey=()=>`city-stable-normal-v1`,t.needsUpdate=!0}}});c.scene.updateMatrixWorld(!0),c.scene.traverse(e=>{if(!nn(e))return;e.castShadow=!/StoneRecess|Flowers/.test(e.name);let t=e.geometry.clone().applyMatrix4(e.matrixWorld),n=t.getAttribute(`position`);for(let e=0;e<n.count;e++){let t=tn(n.getX(e),n.getZ(e));n.setXYZ(e,t.x,n.getY(e),t.z)}t.computeVertexNormals(),/Stone|Approach/i.test(e.name)&&en(t,.25),t.applyMatrix4(e.matrixWorld.clone().invert()),t.computeBoundingBox(),t.computeBoundingSphere(),e.geometry.dispose(),e.geometry=t}),t.add(c.scene);let g=new ct(1,1,1),_=new G({color:`#9d998f`,map:p[0],bumpMap:m[0],bumpScale:.08,roughness:.92}),v=[];function y(e,n,r){e.updateMatrixWorld(!0);let i=new Et,a=new st,o=new ut().setFromObject(e),s=o.getSize(new R),c=o.getCenter(new R);for(let e of n){let t=new R(c.x*e.scale,0,c.z*e.scale).applyAxisAngle(new R(0,1,0),e.angle),n=e.y-.01,r=-5.35;i.position.set(e.x+t.x,(n+r)/2,e.z+t.z),i.rotation.set(0,e.angle,0),i.scale.set(s.x*e.scale,n-r,s.z*e.scale),i.updateMatrix();let a=g.clone().applyMatrix4(i.matrix);en(a,.25),v.push(a)}e.traverse(e=>{if(!nn(e))return;let o=new He(e.geometry,e.material,n.length);o.name=r,o.castShadow=!0,o.receiveShadow=!0,n.forEach((t,n)=>{i.position.set(t.x,t.y,t.z),i.rotation.set(0,t.angle,0),i.scale.setScalar(t.scale),i.updateMatrix(),a.multiplyMatrices(i.matrix,e.matrixWorld),o.setMatrixAt(n,a)}),o.computeBoundingSphere(),t.add(o)})}s.blocks.forEach((e,t)=>y(u[t].scene,e.placements,e.model)),y(l.scene,[s.palace],`monumental-palace`);let b=new H(it(v,!1),_);b.name=`grounded-building-foundations`,b.receiveShadow=!0,b.castShadow=!0,b.geometry.computeBoundingSphere(),t.add(b),v.forEach(e=>e.dispose()),g.dispose(),t.userData={authoredWith:`Blender 5.2`,ready:!0,version:3,archetypes:s.blocks.length,buildings:s.blocks.reduce((e,t)=>e+t.placements.length,0),palace:s.palace,court:{width:F.width,depth:F.depth}},e.add(t);for(let[t,n,r,i,a]of[[4,5,-19,22,19],[16,5,20,24,22],[-24,4,13,16,18],[39,8,-20,34,32]]){let o=tn(t,r),s=new be(`#ffad65`,i,a,1.6);s.position.set(o.x,n,o.z),s.name=rn,e.add(s)}}function sn(e){let t=new H(new mt(780,680),new G({color:`#273c38`,roughness:1}));t.rotation.x=-Math.PI/2,t.position.y=-5.3,t.receiveShadow=!0,t.name=`terraced-valley`,e.add(t);let n=new G({color:`#173b4b`,roughness:.27,metalness:.6,envMapIntensity:.75});n.onBeforeCompile=e=>{e.uniforms.harbourTime={value:0},n.userData.shader=e,e.vertexShader=e.vertexShader.replace(`#include <common>`,`#include <common>
varying vec3 waterPosition;`).replace(`#include <worldpos_vertex>`,`#include <worldpos_vertex>
waterPosition=(modelMatrix*vec4(transformed,1.0)).xyz;`),e.fragmentShader=e.fragmentShader.replace(`#include <common>`,`#include <common>
varying vec3 waterPosition;uniform float harbourTime;`).replace(`#include <normal_fragment_maps>`,`#include <normal_fragment_maps>
        float w1=sin(waterPosition.x*2.2+waterPosition.z*1.7+harbourTime*.7);
        float w2=cos(waterPosition.x*.81-waterPosition.z*3.1-harbourTime*.43);
        normal=normalize(normal+vec3(w1*.10,w2*.075,0.0));`)};let r=new H(new mt(134,220),n),i=tn(76,95);r.rotation.x=-Math.PI/2,r.position.set(i.x,-2.6,i.z),r.name=`harbour-water`,e.add(r)}function cn(e){if(e.getObjectByName(`EpicCity_TwilightSky`))return;let t=(e,t)=>{let n=W.degToRad(e),r=W.degToRad(t);return new R(Math.cos(r)*Math.cos(n),Math.sin(r),Math.cos(r)*Math.sin(n))},n=t(-25,25),r=t(25,20),i=new pt({name:`EpicCity_TwilightSkyMaterial`,side:1,depthTest:!1,depthWrite:!1,fog:!1,toneMapped:!0,uniforms:{uZenith:{value:new I(`#142b59`)},uMiddle:{value:new I(`#36648c`)},uHorizon:{value:new I(`#829aaa`)},uBelow:{value:new I(`#566e8a`)},uBlueDirection:{value:n},uAmberDirection:{value:r},uBlueRadius:{value:W.degToRad(5)},uAmberRadius:{value:W.degToRad(6.5)},uBlueTint:{value:new I(`#c3e8f2`)},uAmberTint:{value:new I(`#efb983`)}},vertexShader:`
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
    `}),a=new De(650,48,32),o=new H(a,i);o.name=`EpicCity_TwilightSky`,o.renderOrder=-1e4,o.frustumCulled=!1,o.castShadow=!1,o.receiveShadow=!1;let s=new R;o.onBeforeRender=(e,t,n)=>{n.getWorldPosition(s),o.position.copy(s),o.updateMatrixWorld(!0)},o.userData.dispose=()=>{o.removeFromParent(),a.dispose(),i.dispose()},e.add(o)}function ln(e){let t=new U;t.name=`rift-arena`,e.add(t);let n=F.width/2,r=F.depth/2,i=F.goalWidth/2,a=F.width/34,o=F.depth/21;t.userData={theme:`twilight-royal-approach`,courtWidth:F.width,courtDepth:F.depth,goalWidth:F.goalWidth,area:F.width*F.depth,tallSceneryInnerX:n+10,tallSceneryInnerZ:r+10.5};let s=(e,t={})=>new G({color:e,roughness:.91,metalness:.02,...t}),c=s(14999251),l=s(15853526),u=s(7892576),d=s(6505267),f=s(9725249),p=s(3749691,{metalness:.5}),m=s(12558946,{metalness:.45,roughness:.65}),h=s(3767956,{side:2}),g=s(11029589,{side:2}),_=s(15058812);s(7374940);let v=new V({color:7981525}),y=new V({color:15114373}),b=s(11968633,{metalness:.25,roughness:.8}),x=new V({color:16032847}),S=new V({color:16770976}),C=s(15119979,{emissive:16760166,emissiveIntensity:.8,roughness:.4}),w=$t(),T=new Pe().load(`./textures/weathered-limestone-v3.png`);T.colorSpace=we,T.wrapS=T.wrapT=At,T.anisotropy=8;let E=e=>{let t=e.clone();return t.colorSpace=``,t.needsUpdate=!0,t},D=(e,t,n,r)=>{e.map=t,e.bumpMap=E(t),e.bumpScale=r,e.userData.worldScale=n};for(let e of[c,l])D(e,T,.22,.045);for(let e of[d,f])D(e,w.wood,.42,.027);for(let e of[h,g])e.map=w.cloth,e.bumpMap=E(w.cloth),e.bumpScale=.012,e.roughness=.83;let O=new ct(1,1,1);new Ze(1,1);function k(e,n,r,i,a,o=t){let s=new H(e,n);return s.position.set(r,i,a),s.receiveShadow=!0,s.castShadow=n instanceof G,o.add(s),s}function A(e,n,r,i,a,o,s,c=t){let l=k(O,s,e,n,r,c);return l.scale.set(i,a,o),l}function j(e,n,r,i,a,o,s,c=20,l=t){return k(new ft(i,a,o,Math.max(12,c)),s,e,n,r,l)}function M(e,t,n,r,i,a=0){let o=A(e,.016,t,n,.018,r,i);return o.rotation.y=a,o}function ee(e,t,n,r,i,a=0,o=Math.PI*2){let s=k(new Ot(n-r/2,n+r/2,80,1,a,o),i,e,.031,t);return s.rotation.x=-Math.PI/2,s}function N(e,n,r,i,a,o,s=0,c=t){let l=new U;l.position.set(e,n,r),l.rotation.y=s,c.add(l);let u=new mt(i,a,10,12),f=u.getAttribute(`position`);for(let e=0;e<f.count;e++){let t=(f.getX(e)+i/2)/i,n=(a/2-f.getY(e))/a;f.setXYZ(e,f.getX(e),-n*a+(n>.99?.26*(1-Math.abs(t-.5)*2):0),Math.sin(t*Math.PI*5+n*.8)*.048*n)}u.computeVertexNormals(),k(u,o,0,0,0,l),A(0,-a*.44,.055,i*.065,a*.88,.018,_,l);let p=k(new Dt(i*.18,6),_,0,-a*.4,.025,l);p.rotation.z=Math.PI/6,A(0,.045,0,i+.22,.09,.1,d,l)}function te(e,n,r,i,a=t){let o=new U;o.position.set(e,n,r),o.scale.setScalar(i),a.add(o);let s=[new z(.36,0),new z(.43,.15),new z(.48,.55),new z(.44,.94),new z(.37,1.07)];k(new ot(s,18),f,0,0,0,o),j(0,1.055,0,.365,.365,.04,d,18,o);for(let e of[.1,.26,.84,1.01]){let t=k(new jt(e<.2||e>1?.395:.458,.025,5,20),p,0,e,0,o);t.rotation.x=Math.PI/2}}function ne(e,n,r,i=t){let a=new U;a.position.set(e,n,r),i.add(a),A(0,0,0,.27,.4,.27,p,a),A(0,0,0,.225,.3,.285,C,a),A(0,0,0,.285,.3,.225,C,a);for(let e of[-.135,.135])for(let t of[-.135,.135])A(e,0,t,.035,.43,.035,p,a);j(0,.27,0,.04,.23,.18,p,4,a);let o=k(new jt(.1,.018,4,14),p,0,.44,0,a);o.rotation.y=Math.PI/2}function re(e,t){j(e,.18,t,.47,.55,.38,u,8),j(e,.75,t,.18,.26,1.1,p,8),j(e,1.38,t,.43,.22,.3,m,8);let n=k(new Ge(.28,.75,7),x,e,1.86,t);n.rotation.z=.13;let r=k(new Ge(.16,.54,6),S,e-.04,1.81,t+.03);r.rotation.z=-.12}cn(e),sn(e),A(0,-.95,0,F.width+22,1.5,F.depth+19,u),A(0,-.24,0,F.width+22.5,.24,F.depth+19.5,c),A(0,-.33,0,F.width+3.9,.56,F.depth+3.9,l),A(0,-.135,0,F.width+2.2,.14,F.depth+2.2,u);let P=new Pe().load(`./textures/limestone-court-v2.png`);P.wrapS=P.wrapT=At,P.repeat.set(6*a,4*o),P.colorSpace=we,P.anisotropy=8;let ie=k(new mt(F.width,F.depth),s(11778756,{map:P,bumpMap:E(P),bumpScale:.12,roughness:.74,metalness:.04}),0,-.03,0);ie.rotation.x=-Math.PI/2,ie.name=`playable-stone-floor`,ie.castShadow=!1;for(let e of[-r-.6,r+.6])for(let t=0;t<F.width;t++)A(-n+.5+t,-.035,e,.96,.16,1,c);for(let e of[-n-.6,n+.6])for(let t=-r;t<=r;t++)A(e,-.035,t,1,.16,.96,l);for(let e of[-r+.18,r-.18])M(0,e,F.width-.15,.09,b);for(let e of[-6.2*a,6.2*a])M(e,0,F.depth-.4,.035,b,Math.PI/2);for(let e=-r+.8;e<=r-.8;e+=1.6)if(Math.abs(e)>3.8*o){let t=M(0,e,.13,.13,b);t.rotation.y=Math.PI/4}ee(0,0,3.2*o,.09,b),ee(0,0,2.98*o,.025,b),ee(0,0,.93,.065,b);for(let e=0;e<8;e++){let t=e*Math.PI/4,n=3.45*o,r=M(Math.sin(t)*n,Math.cos(t)*n,.31,.31,b);r.rotation.y=t+Math.PI/4,M(Math.sin(t)*2.65*o,Math.cos(t)*2.65*o,.38,.065,b,Math.PI/2-t)}let ae=M(0,0,.42,.42,_);ae.rotation.y=Math.PI/4;for(let e of[-1,1]){let a=e<0?h:g,o=e<0?v:y;ee(e*(n-.25),0,i+1.1,.075,o,e<0?-Math.PI/2:Math.PI/2,Math.PI).scale.x=.74;for(let t of[-r-.22,r+.22]){A(e*(n/2+.2),.2,t,n+.1,.46,.28,c),A(e*(n/2+.2),.43,t,n+.1,.035,.3,m);for(let r=.55;r<n;r+=1.2)A(e*r,.22,t,.025,.32,.287,u);M(e*(n/2-.05),t-Math.sign(t)*.4,n-.15,.1,o)}let s=r-i;for(let t of[-(r+i)/2,(r+i)/2])A(e*(n+.45),.2,t,.3,.46,s,c),A(e*(n+.45),.43,t,.32,.035,s,m);let d=new U;t.add(d),d.name=e<0?`azure-goal`:`ember-goal`,d.userData={goalPlane:e*n,opening:F.goalWidth};for(let t of[-i,i]){A(e*(n+.22),1.14,t,.23,2.35,.23,l,d);for(let r of[.3,.9,1.5,2.1])A(e*(n+.22),r,t,.265,.1,.265,c,d);A(e*(n+.07),1.18,t,.05,2.25,.1,o,d)}A(e*(n+.22),2.33,0,.23,.18,F.goalWidth+.22,l,d),A(e*(n+.08),2.33,0,.055,.07,F.goalWidth+.2,m,d);for(let t of[-i,i])A(e*(n+.22),2.48,t,.31,.18,.35,c,d);A(e*(n+1),-.04,0,1.7,.04,F.goalWidth-.02,a,d),N(e*(n+1.9),3.7,i+1.05,1.2,1.25,a,e<0?Math.PI/2:-Math.PI/2,d),j(e*(n+1.9),1.84,i+1.05,.06,.08,3.78,p,12,d),j(e*(n+1.9),.1,i+1.05,.22,.27,.24,u,12,d);let f=[];for(let t=-i;t<=i;t+=.47)f.push(e*(n+1.78),.1,t,e*(n+1.78),2.23,t);for(let t=.2;t<2.3;t+=.35)f.push(e*(n+1.78),t,-i,e*(n+1.78),t,i);let _=new Ct;_.setAttribute(`position`,new L(f,3)),d.add(new dt(_,new bt({color:12167038,transparent:!0,opacity:.4})));for(let t of[-i-1.8,i+1.8])re(e*(n+2.4),t)}for(let e of[-1,1]){for(let t of[-19,-5,17]){let{x:n,z:r}=tn(t,e*17.6);A(n,.2,r,3.4,.55,1.2,u),A(n,.52,r,3.6,.12,1.4,c)}for(let[t,n]of[[-23,.9],[-21,.68],[10,.87],[25,1.1]]){let{x:r,z:i}=tn(t,e*18.2);te(r,-.05,i,n),n>.85&&ne(r,n*1.08+.15,i)}for(let t of[-22,22]){let{x:n,z:r}=tn(t,e*16.5);j(n,1.7,r,.055,.075,3.5,p,10),N(n,3.35,r,1,1.7,n<0?h:g,e<0?0:Math.PI)}}return un(t),on(e)}function un(e){e.updateWorldMatrix(!0,!0);let t=e.matrixWorld.clone().invert(),n=new Map;e.traverse(e=>{if(!(e instanceof H)||e instanceof He||Array.isArray(e.material)||e.material.transparent)return;let t=`${e.material.uuid}:${e.castShadow}:${e.receiveShadow}:${e.renderOrder}:${e.layers.mask}`,r=n.get(t)||[];r.push(e),n.set(t,r)});let r=new Set;for(let i of n.values()){if(i.length<2)continue;let n=i.map(e=>{let n=e.geometry.index?e.geometry.toNonIndexed():e.geometry.clone();return n.applyMatrix4(new st().multiplyMatrices(t,e.matrixWorld)),e.material.userData.worldScale&&en(n,e.material.userData.worldScale),n.clearGroups(),n}),a=it(n,!1);if(n.forEach(e=>e.dispose()),!a)continue;a.computeBoundingBox(),a.computeBoundingSphere();let o=i[0],s=new H(a,o.material);s.name=`arena-batch`,s.castShadow=o.castShadow,s.receiveShadow=o.receiveShadow,s.renderOrder=o.renderOrder,s.layers.mask=o.layers.mask,e.add(s);for(let e of i)r.add(e.geometry),e.removeFromParent()}e.traverse(e=>{e instanceof H&&r.delete(e.geometry)}),r.forEach(e=>e.dispose())}var dn=ie.colosseum;function fn(e){return()=>(e=Math.imul(e,1664525)+1013904223>>>0,e/4294967296)}function pn(){let e=document.createElement(`canvas`);e.width=e.height=1024;let t=e.getContext(`2d`),n=fn(4815);t.fillStyle=`#8f7456`,t.fillRect(0,0,1024,1024);for(let e=0;e<700;e++){let r=n()*1024,i=n()*1024,a=8+n()*80;for(let n of[-1024,0,1024])for(let o of[-1024,0,1024]){let s=r+n,c=i+o;if(s+a<0||c+a<0||s-a>1024||c-a>1024)continue;let l=t.createRadialGradient(s,c,0,s,c,a);l.addColorStop(0,e%2?`#d4b78e28`:`#392e2928`),l.addColorStop(1,`#00000000`),t.fillStyle=l,t.fillRect(s-a,c-a,a*2,a*2)}}for(let e=0;e<62e3;e++){let r=n()*1024,i=n()*1024,a=.35+n()*1.4;t.fillStyle=e%3==0?`#dfc9a13b`:`#342b292b`,t.fillRect(r,i,a,a*.7)}for(let e=0;e<1600;e++){let e=n()*1024,r=n()*1024,i=.7+n()*2;t.fillStyle=`#4c423d50`,t.beginPath(),t.ellipse(e,r,i*1.5,i,.6,0,Math.PI*2),t.fill(),t.fillStyle=`#b5a18b65`,t.fillRect(e-i,r-i*.4,i*2,.7)}let r=new rt(e);return r.colorSpace=we,r.wrapS=r.wrapT=At,r.repeat.set(6,6),r.anisotropy=8,r.name=`Colosseum packed earth`,r}function mn(e,t,n,r=.5){let i=new Ct().setFromPoints(t);e.add(new _t(i,new bt({color:n,transparent:!0,opacity:r,depthWrite:!1})))}function hn(e){let t=fn(65123),n=[],r=[4609910,7552059,7823433,10127200,3755078,11182225,5850724,3359059],i=(e,t)=>Math.abs(Math.atan2(Math.sin(e-t),Math.cos(e-t)));for(let e=0;e<8;e++){let a=34.48+e*1.86,o=11+e*1.22+.46,s=Math.floor(2*Math.PI*a/1.05);for(let e=0;e<s;e++){let c=(e+.5)*Math.PI*2/s;i(c,Math.round(c/(Math.PI/6))*Math.PI/6)*a<1.08||a>=39.2&&(i(c,-Math.PI/2)<16*Math.PI/180||i(c,Math.PI/2)<11*Math.PI/180)||a>=44.5&&i(c,59*Math.PI/180)<.075||t()<.14||n.push({x:Math.cos(c)*a,y:o,z:Math.sin(c)*a,angle:-c-Math.PI/2,color:r[Math.floor(t()*r.length)],size:.88+t()*.24})}}let a=new He(new ft(.21,.28,.66,7),new G({roughness:1}),n.length),o=new He(new De(.18,7,5),new G({roughness:1}),n.length),s=new He(new ft(.075,.085,.53,5),new G({roughness:1}),n.length*2),c=new Et,l=new I;n.forEach((e,n)=>{c.position.set(e.x,e.y+.32*e.size,e.z),c.rotation.set(0,e.angle,0),c.scale.set(e.size,e.size,e.size),c.updateMatrix(),a.setMatrixAt(n,c.matrix),a.setColorAt(n,l.setHex(e.color)),c.position.y=e.y+.86*e.size,c.updateMatrix(),o.setMatrixAt(n,c.matrix),o.setColorAt(n,l.setHSL(.07+t()*.04,.19+t()*.15,.37+t()*.28));for(let t=0;t<2;t++){let r=t?1:-1,i=n%9==0;c.position.set(e.x+Math.cos(e.angle)*r*.26,e.y+(i?.72:.3),e.z-Math.sin(e.angle)*r*.26),c.rotation.set(i?.4:-.6,e.angle,r*(i?.5:.12)),c.updateMatrix(),s.setMatrixAt(n*2+t,c.matrix),s.setColorAt(n*2+t,l.setHex(e.color))}}),a.name=`Colosseum audience clothing`,o.name=`Colosseum audience faces`,s.name=`Colosseum audience arms`;for(let t of[a,o,s])t.receiveShadow=!0,t.castShadow=!1,t.computeBoundingSphere(),e.add(t);e.userData.spectators=n.length}async function gn(e){cn(e);let t=new U;t.name=`rift-arena`,t.userData={mapId:`colosseum`,radius:dn.radius,area:dn.area},e.add(t);let n=pn(),r=new H(new Dt(dn.radius+2,192),new G({map:n,bumpMap:n,bumpScale:.065,roughness:.98,color:`#c4b4a0`}));r.name=`Colosseum circular soil`,r.rotation.x=-Math.PI/2,r.position.y=-.035,r.receiveShadow=!0,t.add(r);let i=new V({color:`#d9cab1`,transparent:!0,opacity:.29,side:2,depthWrite:!1});for(let[e,n]of[[5,.065],[dn.radius-1.4,.07]]){let r=new H(new Ot(e-n,e,192),i);r.rotation.x=-Math.PI/2,r.position.y=.003,t.add(r)}let a=new H(new Dt(.3,24),i);a.rotation.x=-Math.PI/2,a.position.y=.004,t.add(a),mn(t,[new R(0,.005,-dn.radius+1.4),new R(0,.005,dn.radius-1.4)],`#dac9a8`,.28);let o=[];for(let e of[-1,1]){let n=e<0?`#76caff`:`#ee9565`,r=e*dn.goalX,a=new U;a.name=e<0?`Azure scoring gate`:`Ember scoring gate`,a.position.x=e*(dn.radius+5.7),o.push(a);let s=new H(new ct(.3,8.1,15.1),new G({color:`#282b2a`,roughness:.94}));s.position.y=4,a.add(s);let c=new G({color:`#434847`,metalness:.55,roughness:.67});for(let t=-7;t<=7;t+=.7){let n=new H(new ct(.25,7.8,.09),c);n.position.set(-e*.28,3.9,t),a.add(n)}for(let t of[1,3,5,7]){let n=new H(new ct(.32,.13,14.8),c);n.position.set(-e*.3,t,0),a.add(n)}let l=new H(new ft(1.05,1.05,.12,8),new G({color:n,roughness:.72,emissive:n,emissiveIntensity:.12}));l.rotation.z=Math.PI/2,l.position.set(-e*.5,4.1,0),a.add(l),t.add(a);let u=new H(new mt(.14,dn.goalWidth),new V({color:n,transparent:!0,opacity:.65,depthWrite:!1}));u.rotation.x=-Math.PI/2,u.position.set(r,.018,0),t.add(u);for(let i of[-dn.goalWidth/2,dn.goalWidth/2]){let a=new H(new Ke(.24),new G({color:n,emissive:n,emissiveIntensity:1.3,roughness:.32}));a.position.set(r,2.3,i),t.add(a);let o=new be(n,12,6,2);o.position.set(r-e*.8,2.5,i),t.add(o)}let d=new H(new Ot(3.9,3.96,64,1,-Math.PI/2,Math.PI),i);d.rotation.x=-Math.PI/2,d.rotation.z=e<0?0:Math.PI,d.position.set(r,.012,0),t.add(d)}for(let e of o)un(e);let s=await new ht().loadAsync(`./models/maps/royal-colosseum-v1.glb`);s.scene.name=`Blender Colosseum`,s.scene.traverse(e=>{if(e instanceof H){e.castShadow=!0,e.receiveShadow=!0;for(let t of Array.isArray(e.material)?e.material:[e.material])t instanceof G&&t.map&&(t.map.anisotropy=8)}}),t.add(s.scene),hn(t)}var _n=new R;function vn(e,t,n,r,i,a){let o=2*Math.PI*i/4,s=Math.max(a-2*i,0),c=Math.PI/4;_n.copy(t),_n[r]=0,_n.normalize();let l=.5*o/(o+s),u=1-_n.angleTo(e)/c;return Math.sign(_n[n])===1?u*l:s/(o+s)+l+l*(1-u)}var yn=class e extends ct{constructor(e=1,t=1,n=1,r=2,i=.1){let a=r*2+1;if(i=Math.min(e/2,t/2,n/2,i),super(1,1,1,a,a,a),this.type=`RoundedBoxGeometry`,this.parameters={width:e,height:t,depth:n,segments:r,radius:i},a===1)return;let o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;let s=new R,c=new R,l=new R(e,t,n).divideScalar(2).subScalar(i),u=this.attributes.position.array,d=this.attributes.normal.array,f=this.attributes.uv.array,p=u.length/6,m=new R,h=.5/a;for(let r=0,a=0;r<u.length;r+=3,a+=2)switch(s.fromArray(u,r),c.copy(s),c.x-=Math.sign(c.x)*h,c.y-=Math.sign(c.y)*h,c.z-=Math.sign(c.z)*h,c.normalize(),u[r+0]=l.x*Math.sign(s.x)+c.x*i,u[r+1]=l.y*Math.sign(s.y)+c.y*i,u[r+2]=l.z*Math.sign(s.z)+c.z*i,d[r+0]=c.x,d[r+1]=c.y,d[r+2]=c.z,Math.floor(r/p)){case 0:m.set(1,0,0),f[a+0]=vn(m,c,`z`,`y`,i,n),f[a+1]=1-vn(m,c,`y`,`z`,i,t);break;case 1:m.set(-1,0,0),f[a+0]=1-vn(m,c,`z`,`y`,i,n),f[a+1]=1-vn(m,c,`y`,`z`,i,t);break;case 2:m.set(0,1,0),f[a+0]=1-vn(m,c,`x`,`z`,i,e),f[a+1]=vn(m,c,`z`,`x`,i,n);break;case 3:m.set(0,-1,0),f[a+0]=1-vn(m,c,`x`,`z`,i,e),f[a+1]=1-vn(m,c,`z`,`x`,i,n);break;case 4:m.set(0,0,1),f[a+0]=1-vn(m,c,`x`,`y`,i,e),f[a+1]=1-vn(m,c,`y`,`x`,i,t);break;case 5:m.set(0,0,-1),f[a+0]=vn(m,c,`x`,`y`,i,e),f[a+1]=1-vn(m,c,`y`,`x`,i,t)}}static fromJSON(t){return new e(t.width,t.height,t.depth,t.segments,t.radius)}},K={barrier:{radius:1.05,bottom:.12,top:2.12,columns:9,rows:5},cyber:{line:.03,node:.036,rim:.05,scan:{height:.22,period:1.15},twinkle:{rate:10,fade:3.5}},glow:{base:.9,flash:.5,low:.3},palette:{line:new I(`#34e6ff`),lineEdge:new I(`#042b40`),node:new I(`#eaffff`),rim:new I(`#86f7ff`),fill:new I(`#062d46`),fillGlow:new I(`#1f9fd6`),scan:new I(`#a8fbff`)},shards:{count:14,speed:3.2,up:2.2,gravity:5.5},smoke:{puffs:7,radius:.27,grow:2.1,height:[.35,1.6],color:`#ece6f2`,opacity:.75},dust:{puffs:5,radius:.24,grow:2.2,height:[.05,.35],color:`#d8c3a0`,opacity:.6},ghost:{color:`#bfe3ff`,opacity:.55},roll:{turns:1,center:1.12,tuck:.35},step:{lean:.38,hop:.16}},bn=e=>Object.assign(new V({vertexColors:!0,transparent:!0,depthWrite:!1,side:2,blending:2,opacity:K.glow.base}),{name:e});function xn(e,t,n,r,i,a,o,s){e.push(n.x,n.y,n.z,i.x,i.y,i.z,o.x,o.y,o.z),t.push(r.r,r.g,r.b,a.r,a.g,a.b,s.r,s.g,s.b)}function Sn(e,t,n,r,i,a){for(let o=0;o<4;o++)xn(e,t,n,i,r[o],a,r[(o+1)%4],a)}function Cn(e,t,n,r,i,a,o,s){let c=i.clone().multiplyScalar(a/2),l=n.clone().sub(c),u=n.clone().add(c),d=r.clone().sub(c),f=r.clone().add(c);xn(e,t,l,s,d,s,r,o),xn(e,t,l,s,r,o,n,o),xn(e,t,n,o,r,o,f,s),xn(e,t,n,o,f,s,u,s)}var wn=new R(0,1,0),Tn=e=>new R(Math.cos(e),0,-Math.sin(e));function En(e,t,n){let r=new Ct;r.setAttribute(`position`,new L(e,3)),r.setAttribute(`color`,new L(t,3));let i=new H(r,bn(n));return i.name=n,i.frustumCulled=!1,i}var Dn=(e,t,n)=>new R(Math.sin(e)*n,t,Math.cos(e)*n);function On(){let e=K.barrier,t=K.cyber,n=K.palette,r=Math.PI/e.columns,i=(e.top-e.bottom)/e.rows,a=e.columns*2,o=e.rows*2,s=e=>-Math.PI/2+e*r/2,c=(t,n)=>Dn(s(t),e.bottom+n*i/2,e.radius),l=[],u=[],d=[];for(let e=0;e<=o;e++)for(let t=0;t<=a;t++){if((t+e)%2)continue;let r=[[t-1,e],[t,e+1],[t+1,e],[t,e-1]].map(([e,t])=>c(Math.min(a,Math.max(0,e)),Math.min(o,Math.max(0,t))));d.push(l.length/3),Sn(l,u,c(t,e),r,n.fill,n.fill)}for(let e of[1,-1])for(let r=-o-1;r<=a+o+1;r++){if(Math.abs(r)%2!=1)continue;let i=[];for(let t=0;t<=a;t++){let n=e>0?t-r:r-t;n>=0&&n<=o&&i.push([t,n])}for(let e=1;e<i.length;e++)Cn(l,u,c(...i[e-1]),c(...i[e]),wn,t.line,n.line,n.lineEdge)}for(let e of[0,o])for(let r=0;r<a;r++)Cn(l,u,c(r,e),c(r+1,e),wn,t.rim,n.rim,n.lineEdge);for(let e of[0,a])for(let r=0;r<o;r++)Cn(l,u,c(e,r),c(e,r+1),Tn(s(e)),t.rim,n.rim,n.lineEdge);for(let e=0;e<=o;e++)for(let r=0;r<=a;r++){if((r+e)%2==0)continue;let i=c(r,e),a=Tn(s(r)),o=t.node;Sn(l,u,i,[i.clone().addScaledVector(a,-o),i.clone().addScaledVector(wn,o),i.clone().addScaledVector(a,o),i.clone().addScaledVector(wn,-o)],n.node,n.line)}let f=En(l,u,`guard-barrier`);f.renderOrder=3,f.visible=!1,f.userData.fills=d,f.userData.twinkle=new Float32Array(d.length);let p=[],m=[],h=new I(0,0,0),g=t.scan.height,_=e.radius*1.004;for(let e=0;e<36;e++){let t=-Math.PI/2+Math.PI*e/36,r=t+Math.PI/36;for(let[e,i,a,o]of[[-g/2,h,0,n.scan],[0,n.scan,g/2,h]]){let n=Dn(t,e,_),s=Dn(r,e,_),c=Dn(r,a,_),l=Dn(t,a,_);xn(p,m,n,i,s,i,c,o),xn(p,m,n,i,c,o,l,o)}}let v=En(p,m,`guard-scan`);return v.renderOrder=4,f.add(v),f}function kn(e,t,n,r,i,a,o,s,c){if(e.visible=t&&s>.015,!e.visible){e.userData.time=void 0;return}let l=K.barrier,u=K.cyber,d=K.glow,f=K.palette;e.position.set(n,0,r),e.rotation.y=i;let p=Math.max(0,Math.min(.1,c-(e.userData.time??c)));e.userData.time=c;let m=o<d.low&&Math.sin(c*53.1)+Math.sin(c*91.7)>.8?.2:1;e.material.opacity=Math.min(1,d.base+d.flash*a)*m*s;let h=e.userData.fills,g=e.userData.twinkle,_=e.geometry.getAttribute(`color`);Math.random()<u.twinkle.rate*p&&(g[Math.floor(Math.random()*g.length)]=1);for(let e=0;e<h.length;e++){g[e]=Math.max(0,g[e]-u.twinkle.fade*p);let t=Math.min(1,g[e]+a*.8),n=f.fill.r+(f.fillGlow.r-f.fill.r)*t,r=f.fill.g+(f.fillGlow.g-f.fill.g)*t,i=f.fill.b+(f.fillGlow.b-f.fill.b)*t;for(let t=h[e];t<h[e]+12;t++)_.setXYZ(t,n,r,i)}_.needsUpdate=!0;let v=e.children[0],y=c/u.scan.period%1;v.position.y=l.bottom+(l.top-l.bottom)*y,v.material.opacity=Math.min(1,(.75+.5*a)*Math.sin(Math.PI*y))*m*s}function An(e){let t=K.shards,n=K.barrier,r=new U,i=In(e);for(let e=0;e<t.count;e++){let e=(i()-.5)*Math.PI,a=n.bottom+i()*(n.top-n.bottom),o=.1+i()*.1,s=[],c=[];Sn(s,c,new R,[new R(-o,0,0),new R(0,o*1.4,0),new R(o,0,0),new R(0,-o*1.4,0)],K.palette.node,K.palette.line);let l=new Ct;l.setAttribute(`position`,new L(s,3)),l.setAttribute(`color`,new L(c,3));let u=new H(l,bn(`guard-shard`)),d=Dn(e,a,n.radius),f=new R(Math.sin(e),0,Math.cos(e));u.userData.start=d,u.userData.velocity=f.multiplyScalar(t.speed*(.6+.6*i())).setY(t.up*i()),u.userData.spin=new R(i()*9,i()*9,i()*9),u.frustumCulled=!1,r.add(u)}return r.name=`guard-shards`,r.userData.noFade=!0,r}function jn(e,t,n,r,i,a){e.position.set(t,0,n),e.rotation.y=r;let o=K.shards,s=i*a;for(let t of e.children){let{start:e,velocity:n,spin:r}=t.userData;t.position.set(e.x+n.x*s,Math.max(.02,e.y+n.y*s-o.gravity*s*s/2),e.z+n.z*s),t.rotation.set(r.x*s,r.y*s,r.z*s),t.material.opacity=(1-i)*.9}}function Mn(e,t){let n=K[e],r=new U,i=In(t);for(let t=0;t<n.puffs;t++){let t=new H(new Dt(n.radius,14),Object.assign(new V({color:n.color,transparent:!0,depthWrite:!1,side:2,opacity:n.opacity}),{name:`dodge-${e}`})),a=i()*Math.PI*2,o=.25+i()*.45;t.userData.offset=new R(Math.cos(a)*o,n.height[0]+i()*(n.height[1]-n.height[0]),Math.sin(a)*o),t.userData.scale=.7+i()*.6,t.frustumCulled=!1,r.add(t)}return r.name=e===`smoke`?`dodge-smoke`:`dodge-dust`,r.userData.noFade=!0,r}function Nn(e,t,n,r,i,a){let o=K[t];e.position.set(n,0,r);for(let t of e.children){let{offset:e,scale:n}=t.userData;t.position.copy(e).multiplyScalar(1+i*.8),t.position.y=e.y+i*.35,t.quaternion.copy(a.quaternion),t.scale.setScalar(n*(1+(o.grow-1)*Math.sqrt(i))),t.material.opacity=o.opacity*(1-i)*(1-i)}}function Pn(e){e.updateWorldMatrix(!0,!0);let t=St(e);e.matrixWorld.decompose(t.position,t.quaternion,t.scale);let n=Object.assign(new V({color:K.ghost.color,transparent:!0,depthWrite:!1,opacity:K.ghost.opacity}),{name:`dodge-ghost`});return t.traverse(e=>{let t=e;t.isMesh&&(t.material=n,t.castShadow=!1,t.receiveShadow=!1,t.frustumCulled=!1,t.userData.ghost=!0)}),t.name=`dodge-ghost`,t.userData.ghostMaterial=n,t.userData.noFade=!0,t}function Fn(e,t){e.userData.ghostMaterial.opacity=K.ghost.opacity*(1-t)}function In(e){let t=e*2654435761>>>0||1;return()=>(t^=t<<13,t>>>=0,t^=t>>>17,t^=t<<5,t>>>=0,t/4294967296)}var Ln={tint:`#ffd45a`,bright:1.55,opacity:.95,relief:.8,maria:.36,terrain:.24,haloWidth:11,halo:.8,seed:23.9},Rn=e=>e-Math.floor(e);function zn(e,t,n){let r=Rn(e*.1031),i=Rn(t*.1031),a=Rn(n*.1031),o=r*(i+33.33)+i*(a+33.33)+a*(r+33.33);return r+=o,i+=o,a+=o,Rn((r+i)*a)}function Bn(e,t,n){let r=Math.floor(e),i=Math.floor(t),a=Math.floor(n),o=e-r,s=t-i,c=n-a;o=o*o*(3-2*o),s=s*s*(3-2*s),c=c*c*(3-2*c);let l=(e,t,n)=>zn(r+e,i+t,a+n),u=(e,t,n)=>e+(t-e)*n;return u(u(u(l(0,0,0),l(1,0,0),o),u(l(0,1,0),l(1,1,0),o),s),u(u(l(0,0,1),l(1,0,1),o),u(l(0,1,1),l(1,1,1),o),s),c)}function Vn(e,t,n){let r=0,i=.52;for(let a=0;a<4;a++)r+=i*Bn(e,t,n),e=e*2.07+17.1,t=t*2.07+9.2,n=n*2.07+3.7,i*=.49;return r}var Hn=(e,t,n)=>{let r=Math.min(1,Math.max(0,(n-e)/(t-e)));return r*r*(3-2*r)},Un;function Wn(){if(Un)return Un;let e=new Uint8Array(131072),t=Ln.seed,n=t*.73,r=t*.17,i=t*.43,a=Array.from({length:16},(e,n)=>{let r=n+t,i=zn(r,1.7,5.2),a=zn(r,8.3,2.4),o=zn(r,3.1,9.8),s=i*2-1,c=a*2-1,l=.17+o*.83,u=Math.hypot(s,c,l);return{x:s/u,y:c/u,z:l/u,radius:.055+.185*o*o}});for(let t=0;t<128;t++)for(let o=0;o<256;o++){let s=(o+.5)/256*2-1,c=(t+.5)/128,l=s*s+c*c,u=(t*256+o)*4,d=.8,f=0;if(l<=1.02){let e=Math.sqrt(Math.max(0,1-l)),t=Hn(.34,.69,Vn(s*4.4+n,c*4.4+r,e*4.4+i)),o=Vn(s*19+n+7.5,c*19+r+7.5,e*19+i+7.5);d=.9-t*Ln.maria+(o-.48)*Ln.terrain;for(let t of a){let n=Math.hypot(s-t.x,c-t.y,e-t.z)/t.radius,r=(n-.94)/.13;f+=Math.exp(-r*r)*.052-Math.exp(-((n/.7)**4))*.078}}e[u]=Math.round(Math.min(1,Math.max(0,d))*255),e[u+1]=Math.round(Math.min(1,Math.max(0,.5+f*2))*255),e[u+2]=0,e[u+3]=255}return Un=new Ie(e,256,128,Fe,Je),Un.name=`samurai-iai-moon-surface`,Un.colorSpace=``,Un.wrapS=Un.wrapT=We,Un.magFilter=nt,Un.minFilter=vt,Un.generateMipmaps=!0,Un.needsUpdate=!0,Un}function Gn(){return new pt({name:`samurai-iai-moon`,transparent:!0,depthWrite:!1,side:2,fog:!1,uniforms:{uSurface:{value:Wn()},uRadius:{value:1},uTerminator:{value:.165},uTint:{value:new I(Ln.tint)},uBright:{value:Ln.bright},uOpacity:{value:Ln.opacity},uRelief:{value:Ln.relief},uHaloWidth:{value:Ln.haloWidth},uHalo:{value:Ln.halo},uFront:{value:0},uFade:{value:1},uLead:{value:0}},vertexShader:`
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
    `})}var Kn={radius:me+F.puckRadius,inner:.7,halo:1.12,columns:64,baseY:1.15,tilt:.26,lead:1.2,fade:.35,burst:.1},qn,Jn,Yn=e=>{let t=W.clamp(e,0,1);return t*t*(3-2*t)};function Xn(){return Jn??=new ht().loadAsync(`./models/effects/samurai-iai-v1.glb`).then(e=>{if(!e.scene.getObjectByName(`Iai_Tsuba_Flash_Horizontal`))throw Error(`侍の鯉口の光を確認できませんでした`);qn=e.scene})}function Zn(){let e=Kn.columns,t=Kn.radius,n=new Float32Array((e+1)*2*3),r=[];for(let r=0;r<=e;r++){let i=(.5-r/e)*Math.PI,a=Math.sin(i),o=Math.cos(i);[1/Math.sqrt(a*a/(t*t)+o*o/(Kn.inner*Kn.inner))*.9,t*Kn.halo].forEach((e,t)=>{let i=o*e;n.set([a*e,Kn.baseY+Kn.tilt*i,i],(r*2+t)*3)})}for(let t=0;t<e;t++){let e=t*2,n=e+2;r.push(e,n,e+1,e+1,n,n+1)}let i=new Ct;i.setAttribute(`position`,new et(n,3)),i.setIndex(r);let a=Gn();a.uniforms.uRadius.value=t,a.uniforms.uTerminator.value=Kn.inner/t;let o=new H(i,a);return o.name=`samurai-iai-crescent`,o.castShadow=!1,o.receiveShadow=!1,o.frustumCulled=!1,o.renderOrder=6,o.visible=!1,o.userData.samuraiVfx=!0,{mesh:o,front:0}}function Qn(){if(!qn)throw Error(`侍の斬撃エフェクトの読み込みが完了していません`);let e=qn.clone(!0);e.name=`samurai-iai-vfx`;let t=[],n=[];e.traverse(e=>{if(!(e instanceof H))return;if(e.userData.vfx_kind!==`flash`){n.push(e);return}let r=Array.isArray(e.material)?e.material[0]:e.material,i=new V({color:(r.color?.clone()??new I(`#fff0d1`)).multiplyScalar(Number(e.userData.vfx_gain)||2.4),transparent:!0,blending:2,depthWrite:!1,depthTest:!0,side:2,opacity:0,toneMapped:!1});i.name=`${e.name}_additive`,e.geometry=e.geometry.clone(),e.material=i,e.castShadow=!1,e.receiveShadow=!1,e.frustumCulled=!1,e.renderOrder=5,e.userData.samuraiVfx=!0,t.push({mesh:e,opacity:Number(e.userData.vfx_opacity)||1,position:e.position.clone(),scale:e.scale.clone()})});for(let e of n)e.removeFromParent();let r=Zn();return e.add(r.mesh),e.userData.samuraiVfx={flashes:t,flashOrigin:t[0].position.clone(),crescent:r},e.visible=!1,e}function $n(e,t,n){let{mesh:r}=e,i=r.material.uniforms;if(t===null||!Number.isFinite(t)||t<ae)return e.front=0,r.visible=!1,r.scale.set(1,1,1),!1;if(n&&t<=O&&Number.isFinite(n.x)&&Number.isFinite(n.z)&&(n.x!==0||n.z!==0)){let t=Math.atan2(n.x,n.z),r=W.clamp(.5-t/Math.PI,0,1);e.front=Math.max(e.front,r)}let a=Yn((t-O)/Kn.fade),o=1-a;if(o<=0||e.front<=0)return r.visible=!1,r.scale.set(1,1,1),!1;let s=1+Kn.burst*a;return r.scale.set(s,1,s),i.uFront.value=e.front,i.uFade.value=o,i.uLead.value=Kn.lead*o,r.visible=!0,!0}function er(e,t,n,r){let i=e.userData.samuraiVfx;if(!i)return;let a=!1;for(let e of i.flashes){e.mesh.position.copy(e.position),e.mesh.scale.copy(e.scale);let r=0;if(t!==null&&Number.isFinite(t)){n&&Number.isFinite(n.x)&&Number.isFinite(n.y)&&Number.isFinite(n.z)&&e.mesh.position.add(n).sub(i.flashOrigin);let a=t-re;r=Yn(a/.025)*(1-Yn((a-.04)/.08)),e.mesh.scale.multiplyScalar(.65+.55*Yn(a/.04))}e.mesh.material.opacity=e.opacity*r,e.mesh.visible=e.mesh.material.opacity>.002,a||=e.mesh.visible}a=$n(i.crescent,t,r)||a,e.visible=a}var tr=(e=0,t=0,n=0)=>new R(e,t,n),nr=W.clamp;function rr(e){e.updateWorldMatrix(!0,!0);let t=t=>{let n=e.getObjectByName(t);if(!(n instanceof gt))throw Error(`Missing samurai footwork bone: ${t}`);return n},n=t(`root`),r=e.getWorldQuaternion(new B).invert(),i={};for(let n of[`R`,`L`]){let a=t(`foot_`+n),o=a.getWorldPosition(tr()),s=1/0;if(e.traverse(e=>{if(!(e instanceof Re)||!(Array.isArray(e.material)?e.material:[e.material]).some(e=>e.name.includes(`Zori_Dark_Sole`)))return;let t=e.geometry.attributes.position,n=e.geometry.attributes.skinIndex,r=e.geometry.attributes.skinWeight,i=e.skeleton.bones.indexOf(a);if(!(!t||!n||!r||i<0))for(let a=0;a<t.count;a++){let o=!1;for(let e=0;e<4;e++)n.getComponent(a,e)===i&&r.getComponent(a,e)>.999&&(o=!0);o&&(s=Math.min(s,tr().fromBufferAttribute(t,a).applyMatrix4(e.matrixWorld).y))}}),!Number.isFinite(s))throw Error(`Missing samurai sole: `+n);i[n]={upper:t(`upperleg01_`+n),lower:t(`lowerleg01_`+n),foot:a,ankleRest:e.worldToLocal(o.clone()),footRest:r.clone().multiply(a.getWorldQuaternion(new B)),ankleClearance:o.y-s}}return{model:e,hips:n,hipRestPosition:n.position.clone(),legs:i,applied:!1,last:{load:0,release:0,rightError:0,leftError:0,hipOffset:[0,0,0]}}}function ir(e){e.applied&&=(e.hips.position.copy(e.hipRestPosition),!1)}function ar(e,t){let n=e.parent.getWorldQuaternion(new B).invert();e.quaternion.copy(n.multiply(t)),e.updateWorldMatrix(!1,!0)}function or(e,t,n){let r=e.getWorldPosition(tr()),i=t.getWorldPosition(tr()).sub(r).normalize(),a=n.clone().sub(r).normalize();ar(e,new B().setFromUnitVectors(i,a).multiply(e.getWorldQuaternion(new B)))}function sr(e,t,n,r){let i=e.legs[t],a=i.upper.getWorldPosition(tr()),o=i.lower.getWorldPosition(tr()),s=i.foot.getWorldPosition(tr()),c=a.distanceTo(o),l=o.distanceTo(s),u=n.clone().sub(a),d=nr(u.length(),.01,c+l-5e-4);u.normalize();let f=tr(t===`R`?-.22:.22,0,1).applyQuaternion(r);f.addScaledVector(u,-f.dot(u)).normalize();let p=(c*c-l*l+d*d)/(2*d),m=a.clone().addScaledVector(u,p).addScaledVector(f,Math.sqrt(Math.max(0,c*c-p*p)));return or(i.upper,i.lower,m),or(i.lower,i.foot,n),ar(i.foot,r.clone().multiply(i.footRest)),i.foot.getWorldPosition(tr()).distanceTo(n)}function cr(e,t){if(!t.x&&!t.y&&!t.z)return;let n=e.model.worldToLocal(e.hips.parent.localToWorld(e.hipRestPosition.clone())),r=e.model.localToWorld(n.add(t));e.hips.position.copy(e.hips.parent.worldToLocal(r)),e.hips.updateWorldMatrix(!1,!0),e.applied=!0}function lr(e,t,n,r){if(r<=0)return;let i=tr(0,0,1).applyQuaternion(e.model.getWorldQuaternion(new B)),a=new B().setFromAxisAngle(tr(0,1,0),Math.atan2(i.x,i.z));for(let i of[`R`,`L`]){let o=e.legs[i],s=i===`R`?-1:1,c=e.model.worldToLocal(o.foot.getWorldPosition(tr())),l=o.ankleRest.clone();l.x=s*t;let u=e.model.localToWorld(c.lerp(l,r));u.y=o.ankleClearance,sr(e,i,u,a.clone().multiply(new B().setFromAxisAngle(tr(0,1,0),s*n*r)))}e.applied=!0}function ur(e,t,n,r,i=!1,a=!1){if(!r)return;t=nr(t,0,1),n=nr(n,0,1);let o=t*(1-n),s=o+n,c=tr(.15*o-.03*n,-.26*o-.145*n,-.12*o+.2*n),l=e.model.worldToLocal(e.hips.parent.localToWorld(e.hipRestPosition.clone())),u=e.model.localToWorld(l.add(c));e.hips.position.copy(e.hips.parent.worldToLocal(u)),e.hips.updateWorldMatrix(!1,!0);let d=tr(0,0,1).applyQuaternion(e.model.getWorldQuaternion(new B)),f=new B().setFromAxisAngle(tr(0,1,0),Math.atan2(d.x,d.z)),p=e.model.getWorldScale(tr()).y,m=e.legs.R.ankleRest.clone().add(tr(-.12*o-.1*n,0,.04*o+.47*n)),h=e.legs.L.ankleRest.clone().add(tr(.14*s,0,-.14*o-.08*n)),g=e.model.localToWorld(m),_=e.model.localToWorld(h);g.y=e.legs.R.ankleClearance+(a?0:.1*Math.sin(Math.PI*n)*p),_.y=e.legs.L.ankleClearance+(i?0:.045*Math.sin(Math.PI*t)*(1-n)*p),e.applied=!0,e.last={load:t,release:n,hipOffset:c.toArray(),rightError:sr(e,`R`,g,f),leftError:sr(e,`L`,_,f)}}var dr,fr,pr=()=>!!dr;function mr(){return fr??=Promise.all([new ht().loadAsync(`./models/characters/samurai-hybrid-v2-combat.glb`),Xn(),pe()===`yuru`?Vt():void 0,pe()===`classic`?void 0:Ut()]).then(([e])=>{for(let t of[`Samurai_V8_Game_Mesh`,`Samurai_Katana`,`Samurai_Saya`])if(!e.scene.getObjectByName(t))throw Error(`侍のモデルを確認できませんでした`);dr=e.scene,Tr(dr)})}var hr={frames:10,fade:.15,outer:4.12,core:2.72,coreBand:.26,hot:`#fff3cf`,cool:`#6fd0ff`,node:`#ffffff`,nearGlow:1,farGlow:.05,nodeGlow:1.25,falloff:1.1},gr=k.map(([e,t],n)=>[e,t+(n===3?.03:.02)]),_r=[0,.5,1,2,3,4,5,6.5,8],vr={scale:1.5,margin:.45},yr={settle:.28,eyes:.2,wrist:{x:.245,y:.97,z:.13},palm:0,pole:{x:.55,y:1.15,z:-.6},feet:.1,toe:.22,nod:.16},br={position:new R(.25,1.01,-.01),direction:new R(.2,-.22,-.955).normalize()},xr={dip:.58,lift:6e-4,width:85e-5,outer:1.35,segments:28,lid:.92,lashTop:1.738,sink:.012,bin:.001,cell:5e-4},Sr=e=>e instanceof H?[e.material].flat().map(e=>e.name).join():``;function Cr(e){let t=e.map((e,t)=>Number.isFinite(e)?t:-1).filter(e=>e>=0);return t.length?e.map((n,r)=>{if(Number.isFinite(n))return n;let i=t.filter(e=>e<r).pop(),a=t.find(e=>e>r);return i===void 0?e[a]:a===void 0?e[i]:W.lerp(e[i],e[a],(r-i)/(a-i))}):e}var wr=`Samurai_Closed_Eyes`;function Tr(e){let t=t=>{let n;return e.traverse(e=>{!n&&e instanceof H&&Sr(e)===t&&(n=e)}),n},n=t(`SD_EyeWhite`),r=t(`SD_Brows`),i=t(`SD_EyelidCrease`);if(!n||!r||!i||!(r instanceof Re))return;let a=n.geometry.getAttribute(`position`),o=r.geometry.getAttribute(`position`),s=i.geometry.getAttribute(`position`),c=new Float32Array(o.count*3),l=new Float32Array(s.count*3),u=xr,d=[],f=[],p=[];for(let e of[1,-1]){let t=[];for(let n=0;n<a.count;n++)a.getX(n)*e>0&&t.push({x:Math.abs(a.getX(n)),y:a.getY(n),z:a.getZ(n)});if(t.length<8)continue;let r=t.reduce((e,t)=>t.x<e.x?t:e),i=t.reduce((e,t)=>t.x>e.x?t:e),m=i.x-r.x,h=Math.ceil(m/u.bin)+1,g=e=>Lr((e-r.x)/m,0,1),_=e=>Math.round(g(e)*(h-1)),v=Array(h).fill(1/0);for(let e of t)v[_(e.x)]=Math.min(v[_(e.x)],e.y);let y=Cr(v),b=e=>r.y+(i.y-r.y)*g(e),x=[0,0,0],S=[[0,0,0],[0,0,0],[0,0,0]];y.forEach((e,t)=>{let n=t/(h-1),i=b(r.x+m*n)-e,a=[1,n,n*n].map(e=>e*n*(1-n));for(let e=0;e<3;e++){x[e]+=a[e]*i;for(let t=0;t<3;t++)S[e][t]+=a[e]*a[t]}});let C=e=>e[0][0]*(e[1][1]*e[2][2]-e[1][2]*e[2][1])-e[0][1]*(e[1][0]*e[2][2]-e[1][2]*e[2][0])+e[0][2]*(e[1][0]*e[2][1]-e[1][1]*e[2][0]),w=C(S),T=[0,1,2].map(e=>C(S.map((t,n)=>t.map((t,r)=>r===e?x[n]:t)))/w),E=e=>{let t=g(e);return Math.max(0,t*(1-t)*(T[0]+T[1]*t+T[2]*t*t))},D=e=>b(e)-E(e)*u.dip,O=Math.min(...t.map(e=>e.y))-.002,k=Math.max(...t.map(e=>e.y))+.004,A=Math.ceil(m/u.cell)+1,j=Math.ceil((k-O)/u.cell)+1,M=Array(A*j).fill(-1/0),ee=(e,t)=>[Lr(Math.round((e-r.x)/u.cell),0,A-1),Lr(Math.round((t-O)/u.cell),0,j-1)];for(let e of t){let[t,n]=ee(e.x,e.y);M[n*A+t]=Math.max(M[n*A+t],e.z)}for(let e=0;e<A+j;e++){let e=0;for(let t=0;t<j;t++)for(let n=0;n<A;n++){if(Number.isFinite(M[t*A+n]))continue;let r=0,i=0;for(let[e,a]of[[1,0],[-1,0],[0,1],[0,-1]]){let o=n+e,s=t+a;if(o<0||s<0||o>=A||s>=j)continue;let c=M[s*A+o];Number.isFinite(c)&&(r+=c,i++)}i?M[t*A+n]=r/i:e++}if(!e)break}let N=M.map((e,t)=>{let n=t%A,r=Math.floor(t/A),i=0,a=0;for(let e=-1;e<=1;e++)for(let t=-1;t<=1;t++){let o=n+t,s=r+e;o<0||s<0||o>=A||s>=j||(i+=M[s*A+o],a++)}return i/a}),te=(e,t)=>{let n=Lr((e-r.x)/u.cell,0,A-1),i=Lr((t-O)/u.cell,0,j-1),a=Math.min(A-2,Math.floor(n)),o=Math.min(j-2,Math.floor(i)),s=n-a,c=i-o,l=(e,t)=>N[t*A+e];return W.lerp(W.lerp(l(a,o),l(a+1,o),s),W.lerp(l(a,o+1),l(a+1,o+1),s),c)},ne=[],re=n.geometry.getIndex();for(let t=0;re&&t<re.count;t+=3){let n=[re.getX(t),re.getX(t+1),re.getX(t+2)];n.every(t=>a.getX(t)*e>0)&&ne.push(n.flatMap(e=>[Math.abs(a.getX(e)),a.getY(e),a.getZ(e)]))}let P=(e,t)=>{let n=-1/0;for(let[r,i,a,o,s,c,l,u,d]of ne){let f=(s-u)*(r-l)+(l-o)*(i-u);if(Math.abs(f)<1e-14)continue;let p=((s-u)*(e-l)+(l-o)*(t-u))/f,m=((u-i)*(e-l)+(r-l)*(t-u))/f;p<-1e-9||m<-1e-9||p+m>1+1e-9||(n=Math.max(n,p*a+m*c+(1-p-m)*d))}return Number.isFinite(n)?n:te(e,t)},ie=d.length/3;for(let t=0;t<=u.segments;t++){let n=t/u.segments,a=r.x+m*n,o=D(a),s=D(Math.min(i.x,a+5e-4))-D(Math.max(r.x,a-5e-4)),c=Math.min(i.x,a+5e-4)-Math.max(r.x,a-5e-4),l=new z(-s,c).normalize(),p=u.width*Math.sin(Math.PI*n)**.75*W.lerp(1,u.outer,n);for(let t of[1,-1]){let n=a+l.x*p*t,r=o+l.y*p*t,i=P(n,r)+u.lift,s=(P(n+4e-4,r)-P(n-4e-4,r))/8e-4,c=(P(n,r+4e-4)-P(n,r-4e-4))/8e-4,m=new R(-s*e,-c,1).normalize();d.push(n*e,r,i),f.push(m.x,m.y,m.z)}}for(let t=0;t<u.segments;t++){let n=ie+t*2,r=n+1,i=n+2,a=n+3;e>0?p.push(n,r,i,r,a,i):p.push(n,i,r,r,i,a)}let ae=(r.x+i.x)/2,oe=new R(ae*e,b(ae),P(ae,b(ae))-u.sink);for(let t=0;t<o.count;t++)o.getX(t)*e<=0||o.getY(t)>=u.lashTop||(c[t*3]=oe.x-o.getX(t),c[t*3+1]=oe.y-o.getY(t),c[t*3+2]=oe.z-o.getZ(t));for(let t=0;t<s.count;t++){let n=Math.abs(s.getX(t)),a=s.getY(t);if(s.getX(t)*e<=0||n<r.x-.003||n>i.x+.003||a>=b(n)||a<b(n)-E(n)-.004)continue;let o=D(n);l[t*3+1]=o-a,l[t*3+2]=P(n,o)+u.lift*.5-s.getZ(t)}}for(let[e,t]of[[r,c],[i,l]])e.geometry.morphAttributes.position=[new L(t,3)],e.geometry.morphTargetsRelative=!0,e.updateMorphTargets();let m=d.length/3,h=new Ct;h.setAttribute(`position`,new L(d,3)),h.setAttribute(`normal`,new L(f,3));let g=r.skeleton.bones.findIndex(e=>e.name===`head`);h.setAttribute(`skinIndex`,new xe(new Uint16Array(m*4).map((e,t)=>t%4==0?Math.max(0,g):0),4)),h.setAttribute(`skinWeight`,new L(new Float32Array(m*4).map((e,t)=>+(t%4==0)),4));for(let[e,t]of Object.entries(r.geometry.attributes))h.getAttribute(e)||h.setAttribute(e,new L(new Float32Array(m*t.itemSize).fill(+(e===`color`)),t.itemSize));h.setIndex(p);let _=new Re(h,r.material);_.name=wr,_.bind(r.skeleton,r.bindMatrix),_.position.copy(r.position),_.quaternion.copy(r.quaternion),_.scale.copy(r.scale),_.visible=!1,r.parent.add(_)}function Er(e,t){let n=t>=.5;if(e.closed!==n){e.closed=n;for(let t of e.morphs)t.morphTargetInfluences[0]=+!!n;for(let t of e.white)t.material.color.copy(n?e.lid:t.open);for(let t of e.hide)t.visible=!n;for(let t of e.lines)t.visible=n}}function Dr(){let e=hr.frames,t=_r.length,n=(e-1)*(t-1),r=new Ct;r.setAttribute(`position`,new et(new Float32Array(n*6*3),3)),r.setAttribute(`color`,new et(new Float32Array(n*6*3),3));let i=new V({vertexColors:!0,transparent:!0,opacity:1,side:2,depthWrite:!1,blending:2}),a=new H(r,i);return a.frustumCulled=!1,a.visible=!1,a.renderOrder=6,a.userData.noFade=!0,{mesh:a,samples:[],time:0}}var Or=new I(hr.hot),kr=new I(hr.cool),Ar=new I(hr.node),jr=new I,Mr=new R,Nr=new R;function Pr(e,t){let n=t.samples,r=hr.frames,i=_r.length;if(n.length<2){t.mesh.visible=!1;return}let a=t.mesh.geometry.getAttribute(`position`),o=t.mesh.geometry.getAttribute(`color`),s=[];for(let t=0;t<r;t++){let a=n[Math.min(t,n.length-1)],o=Math.max(0,1-a.age/hr.fade)*(1-t/r*.6);Nr.copy(a.tip).sub(a.grip).normalize();let c=Math.max(Math.hypot(a.tip.x-a.centre.x,a.tip.z-a.centre.z),.3),l=Math.max(Math.hypot(Nr.x,Nr.z),.2),u=Math.max(0,(hr.outer-c)/l),d=[];for(let t=0;t<i;t++){let n=_r[t]/(i-1);Mr.copy(a.tip).addScaledVector(Nr,u*n);let r=Math.hypot(Mr.x-a.centre.x,Mr.z-a.centre.z),s=Math.max(0,1-Math.abs(r-hr.core)/hr.coreBand);jr.copy(Or).lerp(kr,n**.45).lerp(Ar,s);let c=(1-n)**hr.falloff,l=(hr.farGlow+(hr.nearGlow-hr.farGlow)*c+hr.nodeGlow*s)*o;d.push({point:e.worldToLocal(Mr.clone()),colour:jr.clone().multiplyScalar(Math.max(0,l))})}s.push(d)}let c=0,l=e=>{a.setXYZ(c,e.point.x,e.point.y,e.point.z),o.setXYZ(c,e.colour.r,e.colour.g,e.colour.b),c++};for(let e=0;e<r-1;e++)for(let t=0;t<i-1;t++)l(s[e][t]),l(s[e+1][t]),l(s[e][t+1]),l(s[e+1][t]),l(s[e+1][t+1]),l(s[e][t+1]);a.needsUpdate=!0,o.needsUpdate=!0,t.mesh.visible=!0}var Fr=new B,Ir=new I(`#ffc9ae`),q=(e,t,n)=>new R(e,t,n),Lr=W.clamp,Rr=e=>(e=Lr(e,0,1),e*e*(3-2*e));function J(e,t=!1){let n=e.clone().normalize(),r=q(0,t?1:-1,0);r.addScaledVector(n,-r.dot(n)).normalize();let i=n.clone().cross(r).normalize();return new B().setFromRotationMatrix(new st().makeBasis(r,i,n))}var zr=(e,t)=>Rr((t-e[0])/(e[1]-e[0])),Br={side:[.24,.38],back:[.02,.16],low:[.92,1.06],high:[1.46,1.62]};function Vr(e){let t=e.skeleton.bones,n=t.findIndex(e=>e.name===`spine02`);if(n<0)return;let r=new Set(t.map((e,t)=>/^(upper|lower)arm0[12]_[RL]$/.test(e.name)?t:-1).filter(e=>e>=0)),{position:i,skinIndex:a,skinWeight:o}=e.geometry.attributes,s=new R,c=[0,1,2,3];for(let e=0;e<i.count;e++){s.fromBufferAttribute(i,e);let t=(1-zr(Br.side,Math.abs(s.x)))*(1-zr(Br.back,s.z))*zr(Br.low,s.y)*(1-zr(Br.high,s.y));if(t<=.001)continue;let l=c.map(t=>a.getComponent(e,t)),u=c.map(t=>o.getComponent(e,t)),d=0;for(let e of c)r.has(l[e])&&u[e]>0&&(d+=u[e]*t,u[e]*=1-t);if(d<=0)continue;let f=c.find(e=>l[e]===n&&u[e]>0)??c.find(e=>u[e]<=1e-6);f===void 0&&(f=c.reduce((e,t)=>!r.has(l[t])&&u[t]>u[e]?t:e,0)),l[f]!==n&&(r.has(l[f])||u[f]<=1e-6)&&(l[f]=n),u[f]+=d;let p=u.reduce((e,t)=>e+t,0)||1;for(let t of c)a.setComponent(e,t,l[t]),o.setComponent(e,t,u[t]/p)}a.needsUpdate=!0,o.needsUpdate=!0}var Hr=q(0,1.12,.4);J(q(0,.32,.95));var Ur=q(.25,1.01,-.01),Wr=J(q(.2,-.22,-.955).normalize(),!0),Gr=q(.9,-.05,-.433).normalize(),Kr=J(Gr,!0),qr=q(.27,1.09,.12),Jr={twist:30*Math.PI/180,lean:.12,load:.5,release:.4},Yr=Jr.twist,Xr=/^(?:upper|lower)leg|^foot_|^toe/,Zr={release:.12,recover:.22},Qr=(e,t,n)=>e<t?Math.min(t,e+n):Math.max(t,e-n),$r=[[`spine05`,.09,.08,0],[`spine03`,.11,.13,0],[`spine01`,.15,.14,0],[`neck02`,-.14,-.17,0],[`head`,-.12,-.18,0],[`upperleg01_R`,-.8713,.043,.0778],[`lowerleg01_R`,1.23,0,0],[`upperleg01_L`,.3579,-.007,.0196],[`lowerleg01_L`,.594,0,0]],ei=[0,-.22,.03];qr.clone(),Kr.clone();var ti=e=>Y(e,qr,Kr,qr,1,Yr,Kr),Y=(e,t,n,r,i,a=0,o=Wr)=>({time:e,swordPosition:t,swordRotation:n,sayaPosition:r,sayaRotation:o,leftOnSaya:i,twist:a}),ni=[ti(0),Y(.24,qr,Kr,qr,1,.6,Kr),Y(.42,qr,Kr,qr,1,.74,Kr),Y(.64,qr,Kr,qr,1,.91,Kr),Y(.72,qr,Kr,qr,1,.91,Kr),Y(D.draw,qr.clone().addScaledVector(Gr,-.55),Kr,qr.clone().addScaledVector(Gr,.23),1,.24,Kr),Y(.92,q(-.1,1.23,.49),J(q(.72,.05,.69)),qr.clone().addScaledVector(Gr,.15),1,-.32,Kr),Y(D.follow,q(-.39,1.3,.38),J(q(-.8,.12,.6)),qr.clone().addScaledVector(Gr,.1),1,-.38,Kr),Y(1.4,q(-.39,1.3,.38),J(q(-.8,.12,.6)),qr.clone().addScaledVector(Gr,.1),1,-.38,Kr),Y(1.58,qr.clone().addScaledVector(Gr,-.34),Kr,qr,1,.1,Kr),ti(D.duration)],ri=[ti(0)],ii=[Y(0,Hr.clone().add(q(0,.055,0)),J(q(0,.58,.82)),Ur,.3)],ai=(e,t)=>Hr.clone().lerp(e,t),oi=1.6,si=1.5,ci=ai(q(-.36,1.26,.35),si),li=J(q(-.9,.04,.43)),ui=[ti(0),Y(.055,ai(q(.1,1.14,.3),oi),J(q(.91,.08,.4)),Ur,.94,.34*oi),Y(N,ai(q(-.07,1.16,.48),1.25),J(q(.12,-.06,.99)),Ur,1,.02),Y(.18,ci,li,Ur,1,-.26*si),Y(.26,ci,li,Ur,1,-.26*si),Y(.34,ci,li,Ur,1,-.26*si),Y(.45,ai(q(-.1,1.18,.39),1.1),J(q(-.15,.25,.95)),Ur,.65,-.1),ti(ue)],di=[ti(0),Y(.09,q(.34,1.16,.16),J(q(.93,.1,.35)),Ur,.95,.42),Y(M,q(-.62,1.3,.34),J(q(-.94,.02,.34)),Ur,1,-.3),Y(.3,q(-.16,1.86,.2),J(q(-.12,.96,.25)),Ur,1,-.08),Y(j,q(.02,.84,.72),J(q(.02,-.78,.62)),Ur,1,.04),Y(.5,q(.46,1.8,.3),J(q(.5,.8,.33)),Ur,1,.3),Y(ee,q(-.5,.88,.62),J(q(-.58,-.7,.42)),Ur,1,-.26),Y(.7,q(-.48,1.82,.28),J(q(-.52,.79,.32)),Ur,1,-.3),Y(P,q(.52,.86,.6),J(q(.6,-.69,.4)),Ur,1,.28),Y(.9,q(.52,.86,.6),J(q(.6,-.69,.4)),Ur,1,.28),Y(1.02,q(.1,1.06,.58),J(q(.12,-.16,.98)),Ur,.7,.06),ti(se)];function fi(e,t){let n=e[0],r=e[e.length-1];for(let i=1;i<e.length;i++){if(t<=e[i].time){n=e[i-1],r=e[i];break}n=e[i]}let i=n===r?1:Rr((t-n.time)/Math.max(.001,r.time-n.time));return{swordPosition:n.swordPosition.clone().lerp(r.swordPosition,i),swordRotation:n.swordRotation.clone().slerp(r.swordRotation,i),sayaPosition:n.sayaPosition.clone().lerp(r.sayaPosition,i),sayaRotation:n.sayaRotation.clone().slerp(r.sayaRotation,i),leftOnSaya:W.lerp(n.leftOnSaya,r.leftOnSaya,i),twist:W.lerp(n.twist,r.twist,i)}}function pi(e){let t=new st,n={meshes:e.length,before:new Set(e.map(e=>e.skeleton)).size,after:0,merged:!1,reason:``};if(n.after=n.before,e.length<2)return n.reason=`スキンメッシュが1枚以下`,n;let r=e[0].skeleton;for(let i of e){if(!i.bindMatrix.equals(t))return n.reason=`bindMatrix が単位行列でない（${i.name}）`,n;let e=i.skeleton.bones;if(e.length!==r.bones.length)return n.reason=`骨の本数が違う（${i.name}）`,n;for(let t=0;t<e.length;t++)if(e[t]!==r.bones[t])return n.reason=`骨の並びが違う（${i.name} の ${t}本目）`,n;let a=i.skeleton.boneInverses;if(a!==r.boneInverses){if(a.length!==r.boneInverses.length)return n.reason=`逆行列の本数が違う（${i.name}）`,n;for(let e=0;e<a.length;e++)if(!a[e].equals(r.boneInverses[e]))return n.reason=`逆行列が違う（${i.name} の ${e}本目）`,n}}for(let t of e)t.skeleton!==r&&t.bind(r,t.bindMatrix);return n.after=new Set(e.map(e=>e.skeleton)).size,n.merged=!0,n.reason=`まとめた`,n}function mi(e,t){if(!dr)throw Error(`侍の読み込みが完了していません`);let n=new U;n.name=`${e===0?`azure`:`coral`}-samurai`;let r=new U;n.add(r);let i=St(dr);i.scale.setScalar(1.12),i.position.y=-.028,r.add(i);let a=pe()===`yuru`,o=de(t)?t:void 0;(a||o)&&(i.scale.multiplyScalar(It.rigScale),i.position.set(0,-.028*It.rigScale-It.rigDown,o?Zt.samuraiForward:It.rigForward));let s=pe()===`human`&&!o;s&&(i.scale.setScalar(Kt.scale),i.position.y=-.028*Kt.scale/1.12);let c=[],l=new Map,u=[];i.traverse(e=>{if(!(e instanceof H))return;e.geometry=e.geometry.clone();let t=e=>{let t=l.get(e);return t||(t=e.clone(),l.set(e,t),t instanceof G&&(/Katana_(Forged_Steel|Polished_Edge)|temper line/.test(t.name)&&(t.metalness=.68,t.roughness=Math.max(.23,t.roughness),t.envMapIntensity=2.4),u.push({material:t,emissive:t.emissive.clone(),intensity:t.emissiveIntensity}))),t};if(e.material=Array.isArray(e.material)?e.material.map(t):t(e.material),e.castShadow=A.cast,e.receiveShadow=!0,e instanceof Re){c.push(e),/Packed_indigo_wave_silk/.test([e.material].flat().map(e=>e.name).join())&&Vr(e),e.geometry.computeBoundingSphere();let t=e.geometry.boundingSphere;e.boundingSphere=new Ve(t.center.clone(),t.radius*vr.scale+vr.margin)}e.frustumCulled=!0}),n.userData.samuraiSkeletons=pi(c),n.updateMatrixWorld(!0);let d=new Map;i.traverse(e=>{if(!(e instanceof gt))return;let t=e.getWorldQuaternion(new B).invert();d.set(e.name,{bone:e,rest:e.quaternion.clone(),x:q(1,0,0).applyQuaternion(t),y:q(0,1,0).applyQuaternion(t),z:q(0,0,1).applyQuaternion(t)})});let f=i.getObjectByName(`Samurai_Katana`),p=i.getObjectByName(`Samurai_Saya`),m=e=>({position:new R().fromArray(e.userData.grip_wrist_position),quaternion:new B().fromArray(e.userData.grip_wrist_quaternion)}),h=m(f);h.position.z+=.03;let g=m(p),_=m(p),v=new B().setFromAxisAngle(q(1,0,0),Math.PI);_.position.sub(q(0,0,.06)).applyQuaternion(v).add(q(0,0,-.195)),_.quaternion.premultiply(v);let y=new H(new Ot(.57,.62,32),new V({color:e===0?`#54d9ff`:`#ff6e89`,side:2,depthWrite:!1}));y.rotation.x=-Math.PI/2,y.position.y=.033,n.add(y);let b=new U;b.position.y=2.35,n.add(b);for(let e=0;e<3;e++){let t=new H(new Ke(.105),new G({color:`#ffe080`,emissive:`#ffd458`,emissiveIntensity:.6}));t.position.set(Math.cos(e*Math.PI*2/3)*.36,e*.035,Math.sin(e*Math.PI*2/3)*.36),b.add(t)}b.visible=!1;let x=Qn();r.add(x);let S=rr(i),C=i.matrixWorld.clone().invert().multiply(d.get(`spine05`).bone.matrixWorld).invert(),w=Dr();n.add(w.mesh);let T={},E=i.getWorldQuaternion(new B).invert();for(let e of[`R`,`L`]){let t=e===`R`?-1:1,n=t=>i.worldToLocal(d.get(t+e).bone.getWorldPosition(new R)),r=q(t*yr.wrist.x,yr.wrist.y,yr.wrist.z),a=r.clone().sub(n(`upperarm01_`)).normalize(),o=E.clone().multiply(d.get(`wrist_`+e).bone.getWorldQuaternion(new B)),s=new B().setFromUnitVectors(n(`wrist_`).sub(n(`lowerarm01_`)).normalize(),a);T[e]={position:r,quaternion:new B().setFromAxisAngle(a,t*yr.palm).multiply(s).multiply(o)}}let D={white:[],lid:new I(1,1,1),morphs:[],hide:[],lines:[],closed:void 0};i.traverse(e=>{let t=Sr(e);if(t){if(e.name===wr)D.lines.push(e);else if(t===`SD_EyeWhite`){let t=e.material;D.white.push({material:t,open:t.color.clone()})}else t===`SD_Skin`?D.lid.copy(e.material.color).multiplyScalar(xr.lid):/^SD_(IrisContinuous|Pupil|Catchlight)$/.test(t)&&D.hide.push(e);e.morphTargetInfluences?.length&&D.morphs.push(e)}}),Er(D,0);let O;if(a||o){let e=e=>d.get(e).bone,t={hips:S.hips,wrist:{R:e(`wrist_R`),L:e(`wrist_L`)},elbow:{R:e(`lowerarm01_R`),L:e(`lowerarm01_L`)},foot:{R:e(`foot_R`),L:e(`foot_L`)}};O={parts:o?Yt(r,i,[f,p],t,u,o):Wt(r,i,[f,p],t,u),bones:t},D.hide.length=0,D.lines.length=0,b.position.y=o?Zt.stars:It.stars}return s&&(zt(i,[f,p],u,de(t)?void 0:t),D.hide.length=0,D.lines.length=0,b.position.y=Kt.stars.default*Kt.scale),pe()!==`classic`&&qt(f,p,u),n.userData.samurai={model:i,motion:r,vfx:x,joints:d,stars:b,sword:f,saya:p,rightGrip:h,leftGrip:_,sayaGrip:g,materials:u,gripErrors:{right:0,left:0},footwork:S,torsoRestInverse:C,torsoDelta:new st,slash:w,sideGrips:T,eyes:D,yuru:O},n.userData.characterAsset=a?`yuru-samurai-v1`:o?`pudding-samurai`:s?t?`avatar-samurai`:`yuru-samurai`:`samurai-hybrid-v2`,n}function hi(e,t){let n=e.parent.getWorldQuaternion(new B);e.quaternion.copy(n.invert().multiply(t)),e.updateWorldMatrix(!1,!0)}function gi(e,t,n){let r=e.getWorldPosition(new R),i=t.getWorldPosition(new R).sub(r).normalize(),a=n.clone().sub(r).normalize();hi(e,new B().setFromUnitVectors(i,a).multiply(e.getWorldQuaternion(new B)))}var _i={x:.34,y:.86,z:.95};function vi(e,t,n,r=0){let i=e.joints.get(`upperarm01_`+t).bone,a=e.joints.get(`lowerarm01_`+t).bone,o=e.joints.get(`wrist_`+t).bone,s=i.getWorldPosition(new R),c=a.getWorldPosition(new R),l=o.getWorldPosition(new R),u=e.model.localToWorld(n.position.clone()),d=s.distanceTo(c),f=c.distanceTo(l),p=u.clone().sub(s),m=Lr(p.length(),.025,d+f-.001);p.normalize();let h=yr.pole,g=W.lerp(_i.x,h.x,r),_=e.model.localToWorld(q(t===`R`?-g:g,W.lerp(_i.y,h.y,r),W.lerp(_i.z,h.z,r)).applyMatrix4(e.torsoDelta)).sub(s);_.addScaledVector(p,-_.dot(p)).normalize();let v=(d*d-f*f+m*m)/(2*m);return gi(i,a,s.clone().addScaledVector(p,v).addScaledVector(_,Math.sqrt(Math.max(0,d*d-v*v)))),gi(a,o,u),bi(e,t,r),hi(o,e.model.getWorldQuaternion(new B).multiply(n.quaternion)),o.getWorldPosition(new R).distanceTo(u)}var yi=q(0,-1,0);function bi(e,t,n=0){let r=e.joints.get(`lowerarm01_`+t),i=e.joints.get(`wrist_`+t).bone.getWorldPosition(new R).sub(r.bone.getWorldPosition(new R));if(i.lengthSq()<1e-8)return;i.normalize();let a=r.bone.getWorldQuaternion(new B),o=q(0,0,-1).applyQuaternion(e.model.getWorldQuaternion(new B)),s=r.y.clone().applyQuaternion(a).negate(),c=yi.clone().multiplyScalar(1-n).addScaledVector(o,n);for(let e of[s,c])e.addScaledVector(i,-e.dot(i));let l=Lr(s.length()/.35,0,1)*Lr(c.length()/.35,0,1);if(l<.001)return;s.normalize(),c.normalize();let u=Math.atan2(s.clone().cross(c).dot(i),Lr(s.dot(c),-1,1))*l;hi(r.bone,new B().setFromAxisAngle(i,u).multiply(a))}function xi(e,t){let n=Si(e,t);e.gripErrors.right=vi(e,`R`,n.R),e.gripErrors.left=vi(e,`L`,n.L)}function Si(e,t){let n=Ci(e.sword,e.rightGrip),r=Ci(e.sword,e.leftGrip),i=Ci(e.saya,e.sayaGrip);return r.position.lerp(i.position,t),r.quaternion.slerp(i.quaternion,t),{R:n,L:r}}function Ci(e,t){return{position:t.position.clone().applyQuaternion(e.quaternion).add(e.position),quaternion:e.quaternion.clone().multiply(t.quaternion)}}function wi(e,t,n,r,i){let a=t.slash,o=Math.min(.1,Math.max(0,r-a.time));a.time=r;let c=s(`samurai`),l=!i&&n.samuraiMotion===`reflect`&&n.action>0,u=l?ue-n.action:1/0,d=!i&&n.samuraiMotion===`kamaitachi`&&n.action>0,f=d?se-n.action:1/0,p=d&&gr.some(([e,t])=>f>=e&&f<=t);for(let e of a.samples)e.age+=o;if(l&&u>=c.windup&&u<=c.active||p){let n=t.sword.localToWorld(t.rightGrip.position.clone()),r=t.sword.localToWorld(t.rightGrip.position.clone().add(q(0,0,.737))),i=e.getWorldPosition(new R);a.samples.unshift({tip:r,grip:n,centre:i,age:0})}for(;a.samples.length>hr.frames;)a.samples.pop();for(;a.samples.length&&a.samples[a.samples.length-1].age>hr.fade;)a.samples.pop();if(!a.samples.length){a.mesh.visible=!1;return}Pr(e,a)}function Ti(e,t,n){let r=e.userData.samurai;if(!r)return;let i=e.userData.poseTime,a=t.hitStop>0?i??n:e.userData.poseTime=n,o=Lr(a-(i??a),0,.1),s=t.stun>0,c=s?0:Math.min(1,t.moving),l=te(`samurai`,t.id,a),u=Math.sin(l)*c,d=e.userData.gait??={phase:l,moving:c};d.phase=l,d.moving=c;for(let e of r.joints.values())e.bone.quaternion.copy(e.rest);ir(r.footwork);let f=(e,t=0,n=0,i=0)=>{let a=r.joints.get(e);if(a)for(let[e,r]of[[a.x,t],[a.y,n],[a.z,i]])r&&a.bone.quaternion.multiply(Fr.setFromAxisAngle(e,r))},p;p=!s&&t.samuraiMotion===`iai`&&t.action>0?fi(ni,he(fe-t.action)):!s&&t.samuraiMotion===`reflect`&&t.action>0?fi(ui,ue-t.action):!s&&t.samuraiMotion===`kamaitachi`&&t.action>0?fi(di,se-t.action):!s&&(t.guard>0||t.blocking)?fi(ii,0):fi(ri,0);let m=!s&&!t.guard&&!t.blocking&&!(t.action>0&&t.samuraiMotion),h=!s&&t.meditating?1:0,g=e.userData.samuraiCalm,_=Rr(e.userData.samuraiCalm=t.action>0||t.guard>0||t.blocking?0:g===void 0?h:Qr(g,h,o/yr.settle)),v=1-_,y=!s&&t.samuraiMotion===`iai`&&t.action>0,b=y?he(fe-t.action):0,x=!s&&t.samuraiMotion===`reflect`&&t.action>0,S=x?ue-t.action:0,C=y?Rr((b-.36)/.2)*(1-Rr((b-.72)/.16)):x?.24*Rr(S/.055)*(1-Rr((S-.055)/.11)):0,w=y?Rr((b-.76)/.22)*(1-Rr((b-1.4)/.3)):x?.24*Rr((S-.055)/.125)*(1-Rr((S-.26)/.2)):0,T=x?Rr(S/.055)*(1-Rr((S-.26)/.2)):0;r.motion.position.y=y?0:(Math.abs(u)*.017+Math.sin(a*2.4+t.id)*.003)*(1-T),r.motion.rotation.set(s?.07:c*.025,0,s?Math.sin(a*4)*.09:-u*.008);let E=+!!m,D=m?Math.max(0,1-c*3):0,O=e.userData.samuraiStanceLegs,k=e.userData.samuraiStanceLegs=O===void 0?D:Qr(O,D,o/(D<O?Zr.release:Zr.recover)),A=m&&$r.length>0,j=(A?E:0)*v,M=(A?k:0)*v,ee=(A?0:E)*v,N=(A?0:k)*v,ne=v-M;f(`upperleg01_R`,(-.1+u*.24+C*.1-w*.18)*ne),f(`upperleg01_L`,(.075-u*.24+C*.06+w*.1)*ne),f(`lowerleg01_R`,(-.04-Math.max(0,-Math.sin(l))*c*.24-C*.14-w*.12)*ne),f(`lowerleg01_L`,(-.04-Math.max(0,Math.sin(l))*c*.24-C*.12)*ne),f(`foot_R`,(.08-u*.08)*ne),f(`foot_L`,(-.04+u*.08)*ne);let re=p.twist*(m?ee:1);f(`spine05`,C*.16+w*.08+Jr.lean*ee,re-u*.015,-C*.025+w*.02),f(`head`,(s?.05:-C*.06)-Jr.lean*.55*ee,m?-re:-p.twist*.3,s?Math.sin(a*4)*.08:-w*.01);for(let[e,t,n,r]of $r){let i=Xr.test(e)?M:j;i>0&&f(e,t*i,n*i,r*i)}_>0&&f(`head`,yr.nod*_);let P=_e(t),ie=s?0:P.f*P.s;if(ie>0&&(f(`spine05`,.4*P.along*ie,0,.2*P.side*ie),f(`head`,.3*P.along*ie),f(`upperleg01_R`,-.25*ie),r.motion.position.y-=.03*ie,p.swordPosition.add(q(0,.1,-.12).multiplyScalar(ie)),p.swordRotation.slerp(J(q(0,.8,.55)),.35*ie)),_>0){let e=br,t=J(e.direction,!0);p.swordPosition.lerp(e.position,_),p.swordRotation.slerp(t,_),p.sayaPosition.lerp(e.position,_),p.sayaRotation.slerp(t,_)}r.sword.position.copy(p.swordPosition),r.sword.quaternion.copy(p.swordRotation),r.saya.position.copy(p.sayaPosition),r.saya.quaternion.copy(p.sayaRotation);let ae=r.joints.get(`finger1-2_L`);ae&&ae.bone.quaternion.multiply(Fr.setFromAxisAngle(q(-.9816983191,.0118977202,-.1900672821),W.degToRad(12)*(1-p.leftOnSaya))),r.model.updateWorldMatrix(!0,!0);let oe=m?Jr.load*N:C,ce=m?Jr.release*N:w,le=m?N:T,de=x&&T<1||m&&N<1?Object.values(r.footwork.legs).flatMap(e=>[e.upper,e.lower,e.foot].map(e=>({bone:e,quaternion:e.quaternion.clone()}))):[],pe=r.footwork.hips.position.clone();if(ur(r.footwork,oe,ce,y||x||N>0,m||x||b>=.56,m||x||b>=.98),de.length){r.footwork.hips.position.lerpVectors(pe,r.footwork.hips.position,le);for(let{bone:e,quaternion:t}of de)e.quaternion.slerpQuaternions(t,e.quaternion,le)}M>0&&cr(r.footwork,new R(...ei).multiplyScalar(M)),lr(r.footwork,yr.feet,yr.toe,_),e.userData.samuraiStanceWeight=y?1:T,r.joints.get(`spine05`).bone.updateWorldMatrix(!0,!1),r.torsoDelta.copy(r.model.matrixWorld).invert().multiply(r.joints.get(`spine05`).bone.matrixWorld).multiply(r.torsoRestInverse);let F=new B().setFromRotationMatrix(r.torsoDelta);for(let e of[r.sword,r.saya])e.position.applyMatrix4(r.torsoDelta),e.quaternion.premultiply(F);let me=y?Rr((b-.92)/.12)*(1-Rr((b-1.4)/.18)):x?Rr((S-.11)/.07)*(1-Rr((S-.26)/.105)):0;if(me>0){let e=r.joints.get(`upperarm01_R`).bone.getWorldPosition(new R),t=r.joints.get(`lowerarm01_R`).bone.getWorldPosition(new R),n=r.joints.get(`wrist_R`).bone.getWorldPosition(new R),i=(e.distanceTo(t)+t.distanceTo(n)-.0012)/r.model.getWorldScale(new R).x,a=r.model.worldToLocal(e).add(q(-i,0,0)),o=J(q(-1,0,0)),s=a.sub(r.rightGrip.position.clone().applyQuaternion(o));r.sword.position.lerp(s,me),r.sword.quaternion.slerp(o,me)}if(r.model.updateWorldMatrix(!0,!0),_>0){let e=Si(r,p.leftOnSaya);for(let t of[`R`,`L`])e[t].position.lerp(r.sideGrips[t].position,_),e[t].quaternion.slerp(r.sideGrips[t].quaternion,_);r.gripErrors.right=vi(r,`R`,e.R,_),r.gripErrors.left=vi(r,`L`,e.L,_)}else xi(r,p.leftOnSaya);wi(e,r,t,a,s);let ge=y?r.motion.worldToLocal(r.sword.localToWorld(r.rightGrip.position.clone().add(q(0,0,.737)))).sub(r.motion.worldToLocal(r.sword.localToWorld(r.rightGrip.position.clone()))):void 0;er(r.vfx,y?fe-t.action:null,r.motion.worldToLocal(r.saya.getWorldPosition(new R)),ge),r.stars.visible=s,r.stars.rotation.y=a*2.1;let ve=!s&&t.meditating?1:0,ye=e.userData.samuraiEyes;Er(r.eyes,e.userData.samuraiEyes=ye===void 0?ve:Qr(ye,ve,o/yr.eyes)),e.userData.samuraiPose=t.samuraiMotion===`iai`&&t.action>0?`iai`:t.samuraiMotion===`reflect`&&t.action>0?`reflect`:t.samuraiMotion===`kamaitachi`&&t.action>0?`kamaitachi`:_>.5?`meditate`:`battou`;for(let e of r.materials)e.material.emissive.copy(t.hitFlash>0?Ir:e.emissive),e.material.emissiveIntensity=t.hitFlash>0?.3*(t.hitFlash/.25):e.intensity;r.yuru&&Rt(r.yuru.parts,r.motion,r.yuru.bones,r.torsoDelta)}var Ei={wrist:[-.4,1.34,.02],blade:[-.62,.72,-.3],yaw:-.35,elbow:[-1,.1,-.2]},Di={wrist:[-.38,1.02,-.28],blade:[-.2,.3,-.93],yaw:-.45,elbow:[-.7,-.4,-.4]},Oi=(e,t)=>({t:e,...t}),ki=g.swordsman.duration,Ai={swordsman:{slash:{fadeIn:.03,fadeOut:.045,keys:[Oi(.03,Ei),Oi(.12,{wrist:[-.36,1.28,.25],blade:[-.62,.45,.64],yaw:-.2,elbow:[-.9,-.2,-.3]}),Oi(.19,{wrist:[-.14,1.1,.4],blade:[.05,-.12,.99],yaw:0,elbow:[-.6,-.6,-.3]}),Oi(.27,{wrist:[-.03,.96,.28],blade:[.7,-.45,.55],yaw:.25,elbow:[-.4,-.8,-.2]}),Oi(.35,{wrist:[0,.9,.16],blade:[.72,-.64,.26],yaw:.45,elbow:[-.3,-.9,-.2]}),Oi(ki,{wrist:[0,.9,.16],blade:[.72,-.64,.26],yaw:.45,elbow:[-.3,-.9,-.2]})]},spin:{fadeIn:.05,fadeOut:.05,keys:[Oi(.05,{wrist:[-.52,1.05,.12],blade:[-.98,.05,.15],yaw:0,elbow:[-.3,-.9,-.2]}),Oi(.3,{wrist:[-.52,1.05,.12],blade:[-.98,.05,.15],yaw:Math.PI*2,elbow:[-.3,-.9,-.2]}),Oi(.35,{wrist:[-.52,1.05,.12],blade:[-.98,.05,.15],yaw:Math.PI*2,elbow:[-.3,-.9,-.2]})]},charge:{fadeIn:.15,fadeOut:0,keys:[Oi(.15,Di),Oi(o.charge,Di)]},thrust:{fadeIn:0,fadeOut:.2,keys:[Oi(0,Di),Oi(.06,{wrist:[-.15,1.12,.44],blade:[.02,.02,1],yaw:.3,elbow:[-.6,-.7,-.2]}),Oi(o.follow,{wrist:[-.15,1.12,.44],blade:[.02,.02,1],yaw:.3,elbow:[-.6,-.7,-.2]})]},awaken:{fadeIn:.08,fadeOut:.1,keys:[Oi(.08,{wrist:[-.3,1.45,.2],blade:[-.1,.99,.05],yaw:0,elbow:[-1,.1,-.2]}),Oi(.35,{wrist:[-.3,1.45,.2],blade:[-.1,.99,.05],yaw:0,elbow:[-1,.1,-.2]})]}}};function ji(e){if(e.role!==`swordsman`||e.stun>0)return;let t=Ai.swordsman;if(e.charge>0)return{motion:t.charge,t:o.charge-e.charge,length:o.charge};if(e.action>0){if(e.attackKind===`melee`)return{motion:t.slash,t:ki-e.action,length:ki};if(e.skillMotion===`spin`)return{motion:t.spin,t:.35-e.action,length:.35};if(e.skillMotion===`thrust`)return{motion:t.thrust,t:o.follow-e.action,length:o.follow};if(e.skillMotion===`awaken`)return{motion:t.awaken,t:.35-e.action,length:.35}}}var Mi=e=>{let t=Math.min(1,Math.max(0,e));return t*t*(3-2*t)};function Ni(e,t){let n=e.keys;if(t<=n[0].t)return n[0];for(let e=1;e<n.length;e++){let r=n[e-1],i=n[e];if(t<=i.t){let e=Mi((t-r.t)/Math.max(1e-6,i.t-r.t)),n=(t,n)=>t.map((t,r)=>t+(n[r]-t)*e);return{t,wrist:n(r.wrist,i.wrist),blade:n(r.blade,i.blade),yaw:r.yaw+(i.yaw-r.yaw)*e,elbow:n(r.elbow,i.elbow)}}}return n[n.length-1]}function Pi(e,t,n){let r=e.fadeIn>0?Mi(t/e.fadeIn):1,i=e.fadeOut>0?Mi((n-t)/e.fadeOut):1;return Math.min(r,i)}var Fi=new WeakMap,Ii=new WeakMap,Li=new R,Ri=new R,zi=new R,Bi=new R,Vi=new B,Hi=new B;function Ui(e){let t=Fi.get(e);if(t)return t;let n=t=>e.model.getObjectByName(t),r=n(`upperarm01_R`),i=n(`lowerarm01_R`),a=n(`wrist_R`),o;if(e.model.traverse(e=>{e.isSkinnedMesh&&e.name===`Yuru_Body`&&(!o||String(e.userData.avatarPart??``).startsWith(`weapon-`))&&(o=e)}),!r||!i||!a||!o)return;let s=Ii.get(o.geometry);if(s!==void 0)return s?(t={upper:r,lower:i,wrist:a,blade:s.clone(),lowerStand:i.quaternion.clone(),wristStand:a.quaternion.clone()},Fi.set(e,t),t):void 0;e.model.updateMatrixWorld(!0);let c=o.skeleton.bones.indexOf(a),l=o.geometry.getAttribute(`position`),u=o.geometry.getAttribute(`skinIndex`),d=o.geometry.getAttribute(`skinWeight`),f=a.getWorldPosition(new R),p=new R,m=new R,h=0;for(let e=0;e<l.count;e++){let t=0;for(let n=0;n<4;n++)u.getComponent(e,n)===c&&(t+=d.getComponent(e,n));if(t<.95)continue;p.fromBufferAttribute(l,e),o.applyBoneTransform(e,p),p.applyMatrix4(o.matrixWorld);let n=p.distanceTo(f);n>h&&(h=n,m.copy(p))}if(h<.2){Ii.set(o.geometry,null);return}let g=m.sub(f).normalize().applyQuaternion(a.getWorldQuaternion(new B).invert());return Ii.set(o.geometry,g.clone()),t={upper:r,lower:i,wrist:a,blade:g,lowerStand:i.quaternion.clone(),wristStand:a.quaternion.clone()},Fi.set(e,t),t}function Wi(e,t){e.parent.getWorldQuaternion(Hi),e.quaternion.copy(Hi.invert().multiply(t)),e.updateWorldMatrix(!1,!0)}function Gi(e,t,n){let r=e.getWorldPosition(new R),i=t.getWorldPosition(new R).sub(r).normalize(),a=n.clone().sub(r).normalize();Wi(e,new B().setFromUnitVectors(i,a).multiply(e.getWorldQuaternion(new B)))}function Ki(e,t,n){if(!(n.role in Ai))return 0;let r=Fi.get(t)??Ui(t);if(!r)return 0;r.lower.quaternion.copy(r.lowerStand),r.wrist.quaternion.copy(r.wristStand);let i=ji(n);if(!i)return 0;let a=Pi(i.motion,i.t,i.length);if(a<=0)return 0;let o=Ni(i.motion,i.t),s=Math.atan2(Math.sin(o.yaw-e.rotation.y),Math.cos(o.yaw-e.rotation.y));e.rotation.y+=s*a,e.updateMatrixWorld(!0);let c=r.wrist.getWorldPosition(Li),l=r.blade.clone().applyQuaternion(r.wrist.getWorldQuaternion(Vi)),u=t.model.localToWorld(Ri.set(...o.wrist).divideScalar(Kt.scale)).sub(c).multiplyScalar(a).add(c),d=e.getWorldQuaternion(new B),f=new R(...o.blade).normalize().applyQuaternion(d).sub(l).multiplyScalar(a).add(l).normalize(),p=r.upper.getWorldPosition(new R),m=r.lower.getWorldPosition(zi),h=r.wrist.getWorldPosition(Bi),g=p.distanceTo(m),_=m.distanceTo(h),v=u.clone().sub(p),y=Math.min(Math.max(v.length(),.02),g+_-.001);v.normalize();let b=new R(...o.elbow).applyQuaternion(d);b.addScaledVector(v,-b.dot(v)).normalize();let x=(g*g-_*_+y*y)/(2*y),S=p.clone().addScaledVector(v,x).addScaledVector(b,Math.sqrt(Math.max(0,g*g-x*x))),C=p.clone().addScaledVector(v,y);Gi(r.upper,r.lower,S),Gi(r.lower,r.wrist,C);let w=r.wrist.getWorldQuaternion(new B),T=r.blade.clone().applyQuaternion(w);return Wi(r.wrist,new B().setFromUnitVectors(T,f).multiply(w)),r.wrist.getWorldPosition(new R).distanceTo(u)}var qi=new R(0,1,0),Ji=[2611711,16737405],Yi=14478591;function Xi(e,t=0,n=0){return new G({color:e,roughness:t?.3:.82,metalness:t,emissive:e,emissiveIntensity:n})}function X(e,t,n,r=0,i=0,a=0){let o=new H(t,n);return o.position.set(r,i,a),o.castShadow=A.cast,o.receiveShadow=!0,e.add(o),o}function Z(e,t,n,r=[0,0,0]){let i=Math.min(...n);return X(e,i>.045?new yn(n[0],n[1],n[2],1,i*.17):new ct(n[0],n[1],n[2]),t,...r)}function Zi(e,t,n,r=[0,0,0],i=[1,1,1]){let a=X(e,new De(n,20,14),t,...r);return a.scale.set(...i),a}function Q(e,t,n,r,i,a=[0,0,0],o=8){return X(e,new ft(n,r,i,Math.max(14,o)),t,...a)}function Qi(e,t=0,n=0,r=0){let i=new U;return i.position.set(t,n,r),e.add(i),i}function $i(e,t,n,r,i){let a=Qi(e,0,-.59,.035);a.rotation.x=Math.PI/2-.16,Q(a,r,.045,.045,.24);for(let e=0;e<3;e++)Q(a,n,.05,.05,.025,[0,-.075+e*.07,0]);if(Zi(a,n,.068,[0,-.16,0]),i===`katana`){Q(a,n,.13,.13,.04,[0,.16,0],8);let e=new ye;e.moveTo(-.045,.19),e.lineTo(-.035,1.01),e.lineTo(.105,1.28),e.lineTo(.11,1.08),e.lineTo(.07,.19),e.closePath(),X(a,new Ye(e,{depth:.027,bevelEnabled:!1}),t,0,0,-.015)}else{Z(a,n,[.4,.07,.1],[0,.15,0]);let e=new ye;e.moveTo(-.1,.18),e.lineTo(-.1,.93),e.lineTo(0,1.17),e.lineTo(.1,.93),e.lineTo(.1,.18),e.closePath(),X(a,new Ye(e,{depth:.045,bevelEnabled:!0,bevelThickness:.012,bevelSize:.019,bevelSegments:1,steps:1}),t,0,0,-.025),Z(a,n,[.025,.75,.055],[0,.61,0])}return a}function ea(e,t,n=1.02,r=.66){let i=Qi(e,0,1.51,-.24),a=new mt(1,1,10,12),o=a.getAttribute(`position`);for(let e=0;e<o.count;e++){let t=o.getX(e)+.5,i=.5-o.getY(e),a=.56+(r-.56)*i;o.setXYZ(e,(t-.5)*a,-i*n,-.2*i+Math.sin(t*Math.PI*8)*.024*i)}return a.computeVertexNormals(),t.side=2,X(i,a,t),i}function ta(e,t,n){Zi(e,t,n?.23:.165,[0,-.08,0],[1,.72,1.03])}function na(e,t){let n=[t.body,t.head,t.rightArm,t.leftArm,t.rightLeg,t.leftLeg,t.stars,...t.guns];t.cape&&n.push(t.cape);let r=new Set(n);t.halo&&r.add(t.halo),e.updateMatrixWorld(!0);for(let e of n){let t=new Map,n=e=>{for(let i of e.children)if(!r.has(i)){if(i instanceof H&&!Array.isArray(i.material)){let e=t.get(i.material)??[];e.push(i),t.set(i.material,e)}n(i)}};n(e);let i=e.matrixWorld.clone().invert();for(let[n,r]of t){if(r.length<2)continue;let t=r.map(e=>{let t=e.geometry.index?e.geometry.toNonIndexed():e.geometry.clone();return t.getAttribute(`uv`)||t.setAttribute(`uv`,new L(new Float32Array(t.getAttribute(`position`).count*2),2)),t.applyMatrix4(new st().multiplyMatrices(i,e.matrixWorld)),t.clearGroups(),t}),a=it(t,!1);if(t.forEach(e=>e.dispose()),!a)continue;let o=new H(a,n);o.castShadow=A.cast,o.receiveShadow=!0,a.computeBoundingSphere(),e.add(o);for(let e of r)e.removeFromParent(),e.geometry.dispose()}}}function ra(e,t,n){if(pe()!==`human`&&(n=void 0),e===`samurai`)return mi(t,n);let r=ia(e,t);return pe()===`human`&&Nt(r,r.userData.rig,t,n),r}function ia(e,t){let n=new U,r=[];n.name=`${t===0?`azure`:`coral`}-${e}`;let i=[],a=(e,t=0,n=0)=>{let r=Xi(e,t,n);return i.push(r),r.userData.baseEmissive=n,r},o=a(Ji[t],.2,.22),s=a(1450812),c=a(2569550,.15),l=a(e===`ninja`?15316107:e===`gunner`?13275245:16041635),u=a(16774364),d=a(Yi,.72),f=a(16107358,.55),p=a(e===`healer`?16110737:e===`swordsman`?16107878:e===`mage`?15063533:3746619),m=a({swordsman:3235508,samurai:11026259,paladin:13474630,mage:6901922,gunner:10184011,ninja:2440281,healer:15263698}[e]),h=a(e===`healer`?5483144:e===`mage`?12095959:e===`samurai`?7875903:4019840),g=$t().cloth;for(let e of[m,h,s])e.map=g,e.roughness=.93;o.emissiveIntensity=.085,o.userData.baseEmissive=.085;let _=Qi(n),v=e===`paladin`,y=e===`ninja`,b=v?.77:y?.53:.63,x=Q(_,m,b*.52,b*.41,.6,[0,1.18,0],6);x.scale.z=.71,Z(_,s,[b*.87,.13,.39],[0,.93,0]),Z(_,f,[.13,.14,.045],[0,.93,.213]);for(let e of[-1,1]){let t=Z(_,c,[.09,.53,.045],[e*.16,1.21,.239]);t.rotation.z=e*.32;for(let t=0;t<4;t++)Zi(_,f,.013,[e*.22,1.08+t*.075,.245],[1,1,.5]);Z(_,c,[.14,.2,.14],[b*.46*e,.91,-.055])}Q(_,l,.11,.12,.15,[0,1.55,0]),Z(_,o,[.18,.35,.035],[0,1.26,.24]),Z(_,o,[.21,.3,.035],[0,1.29,-.235]);let S=Qi(_,-.16,.91,0),C=Qi(_,.16,.91,0);for(let t of[S,C]){Q(t,s,y?.105:.125,.1,.42,[0,-.19,0]),Q(t,c,.115,.13,.3,[0,-.56,0]),Z(t,c,[.235,.15,.35],[0,-.825,.055]),Z(t,e===`paladin`?f:d,[.18,.15,.07],[0,-.46,.11]),Z(t,c,[.235,.035,.35],[0,-.894,.055]);for(let e=0;e<3;e++)Z(t,f,[.055,.02,.026],[-.08,-.51-e*.048,.125]);Q(t,o,.122,.122,.045,[0,-.65,0])}let w=Qi(_,-b*.62,1.48,0),T=Qi(_,b*.62,1.48,0);for(let t of[w,T]){Q(t,m,y?.095:.12,.09,.33,[0,-.17,0]),Q(t,e===`healer`||e===`mage`?m:c,.12,.1,.22,[0,-.4,0]),Q(t,o,.125,.125,.045,[0,-.43,0]),Zi(t,l,.105,[0,-.565,0],[.85,1,.91]),ta(t,e===`paladin`?f:e===`swordsman`?d:m,v);for(let e of[-1,1])Zi(t,f,.025,[e*(v?.16:.1),-.08,.09],[1,1,.6])}let E=Qi(_,0,1.83,.018);if(Zi(E,l,.285,[0,0,0],[.95,1.09,.91]),Zi(E,l,.068,[-.268,-.012,0]),Zi(E,l,.068,[.268,-.012,0]),Zi(E,p,.29,[0,.115,-.055],[1.02,.83,.92]),![`paladin`,`samurai`,`ninja`].includes(e))for(let e=0;e<14;e++){let t=e*Math.PI*2/14,n=X(E,new Ge(.085,.27+e%3*.017,7),p,Math.sin(t)*.23,.185+e%3*.012,Math.cos(t)*.2-.065);n.rotation.z=-Math.sin(t)*.95,n.rotation.x=Math.cos(t)*.7}for(let e of[-1,1]){Z(E,u,[.08,.081,.015],[e*.107,.018,.242]),Z(E,s,[.037,.058,.015],[e*.103,.011,.256]);let t=Z(E,p,[.103,.029,.024],[e*.111,.085,.24]);t.rotation.z=e*.08}Zi(E,l,.048,[0,-.035,.263],[.65,.9,.8]),Z(E,a(11167325),[.07,.014,.012],[0,-.125,.245]);let D,O;if(e===`swordsman`){D=ea(_,h,.93,.71),Z(D,o,[.14,.66,.028],[0,-.39,-.098]),$i(w,d,f,s,`sword`);for(let e=-1;e<=1;e++){let t=X(E,new Ge(.115,.25,4),p,e*.14,.27,.025);t.rotation.z=-e*.4,t.rotation.x=.2}Z(T,d,[.2,.24,.1],[0,-.38,.075]),Z(_,d,[.2,.25,.045],[-.18,1.27,.238])}else if(e===`samurai`){$i(w,d,f,s,`katana`);for(let e=0;e<3;e++)Z(_,e%2?h:m,[.56,.105,.08],[0,1.12+e*.115,.233]),Z(_,f,[.52,.018,.014],[0,1.13+e*.115,.28]);for(let e of[-.24,0,.24])Z(_,m,[.21,.3,.1],[e,.81,.21]),Z(_,f,[.17,.025,.015],[e,.73,.268]);Zi(E,s,.305,[0,.13,-.035],[1.13,.8,1.08]),Z(E,m,[.59,.1,.5],[0,.1,-.07]);for(let e of[-1,1]){let t=X(E,new Ge(.06,.32,5),f,e*.19,.37,.13);t.rotation.z=-e*.42,Z(E,m,[.115,.31,.33],[e*.29,-.05,-.07])}Zi(E,o,.073,[0,.22,.245],[.8,1,.55]);let e=Z(_,s,[.075,.93,.09],[.36,.81,-.05]);e.rotation.z=-.38,D=ea(_,o,.65,.25)}else if(e===`paladin`){D=ea(_,u,1.1,.85),Z(D,o,[.25,.78,.028],[0,-.44,-.11]);let e=Q(_,f,.44,.34,.51,[0,1.22,.018],6);e.scale.z=.71,Z(_,u,[.065,.25,.03],[0,1.25,.3]),Z(_,u,[.22,.06,.03],[0,1.29,.305]),$i(w,d,f,s,`sword`).scale.setScalar(.82);let t=Qi(T,.07,-.34,.15),n=new ye;n.moveTo(-.34,.38),n.lineTo(.34,.38),n.lineTo(.34,-.19),n.lineTo(0,-.52),n.lineTo(-.34,-.19),n.closePath();let r=new Ye(n,{depth:.075,bevelEnabled:!0,bevelSize:.04,bevelThickness:.025,bevelSegments:1,steps:1});X(t,r,f),X(t,r,o,0,0,.1).scale.set(.81,.84,.32),Z(t,u,[.075,.49,.025],[0,.005,.15]),Z(t,u,[.34,.075,.025],[0,.085,.15]),Zi(E,f,.305,[0,.12,-.07],[1.13,.87,1]),Z(E,f,[.62,.075,.22],[0,.12,.12]);for(let e of[-1,1])Z(E,f,[.075,.24,.18],[e*.265,-.07,.025]);let i=X(E,new Ge(.12,.3,5),o,0,.37,-.11);i.scale.z=1.8}else if(e===`mage`||e===`healer`){let t=Q(_,m,.25,.45,.75,[0,.66,0],8);t.scale.z=.8,Q(_,h,.44,.455,.08,[0,.3,0],8).scale.z=.8;for(let e of[-1,1]){let t=Z(_,h,[.1,.91,.035],[e*.15,.85,.29]);t.rotation.z=e*.055}let n=Qi(w,0,-.55,.05);if(Q(n,e===`mage`?s:f,.04,.045,1.8,[0,.1,0]),Q(n,f,.075,.075,.12,[0,.86,0]),Q(n,o,.047,.047,.31,[0,-.03,0]),D=ea(_,h,.88,.65),e===`mage`){Q(E,m,.46,.46,.065,[0,.235,0],10);let e=X(E,new Ge(.32,.68,8),m,.035,.58,-.025);e.rotation.z=-.1,Q(E,f,.288,.31,.07,[.006,.3,0]),Zi(E,o,.065,[0,.32,.29],[1,1,.5]);let t=a(16748875,.2,.8),r=X(n,new jt(.17,.035,5,8),f,0,1.02,0);r.rotation.z=Math.PI/4,X(n,new Ke(.13),t,0,1.06,0)}else{Zi(E,p,.27,[0,-.12,-.095],[1.08,1.3,.7]);for(let e of[-1,1])Zi(E,p,.1,[e*.21,-.23,.012],[.67,1.7,.8]);Q(E,u,.281,.281,.075,[0,.17,0],12),X(E,new Ke(.075),o,0,.17,.275);let e=a(9174983,.2,.65);O=X(E,new jt(.3,.025,6,24),f,0,.48,0),O.rotation.x=Math.PI/2,X(n,new jt(.18,.035,6,16),f,0,1.04,0),X(n,new Ke(.12),e,0,1.04,0),Z(n,e,[.055,.24,.05],[0,1.05,0]),Z(n,e,[.21,.055,.05],[0,1.05,0])}}else if(e===`gunner`){D=ea(_,m,.91,.76);for(let e of[-1,1]){let t=Z(_,m,[.23,.47,.18],[e*.245,.82,0]);t.rotation.z=e*.1;let n=Z(_,f,[.075,.39,.05],[e*.2,1.3,.235]);n.rotation.z=e*.25}for(let e of[w,T]){let t=Qi(e,0,-.56,.04);r.push(t);let n=Qi(t,0,.065,.462);n.name=`gun-muzzle`,Z(t,s,[.105,.18,.09],[0,-.04,.05]),Z(t,d,[.12,.115,.4],[0,.065,.21]),Z(t,f,[.14,.12,.08],[0,.065,.4]),Z(t,s,[.07,.07,.02],[0,.065,.444])}let e=Q(E,s,.3,.3,.11,[0,.12,0]);e.scale.z=.9;for(let e of[-1,1])Q(E,f,.092,.092,.04,[e*.105,.14,.255]).rotation.x=Math.PI/2,Zi(E,o,.071,[e*.105,.14,.28],[1,.82,.24]);Z(_,s,[.4,.1,.05],[0,1.18,.253]).rotation.z=-.55;for(let e=0;e<4;e++)Q(_,f,.025,.025,.085,[-.08+e*.06,1.2-e*.035,.295])}else{Zi(E,s,.287,[0,-.12,.012],[1,.6,.91]),Z(E,s,[.42,.13,.14],[0,-.1,.21]),Q(E,o,.293,.293,.085,[0,.14,0],12);let e=Q(_,o,.19,.19,.16,[0,1.54,0],8);e.scale.z=1.04,D=ea(_,o,.93,.22),D.position.x=.13,D.rotation.z=-.2,$i(w,d,s,s,`sword`).scale.set(.66,.56,.72),$i(T,d,s,s,`sword`).scale.set(.66,.56,.72),Z(_,d,[.09,.7,.075],[0,1.15,-.26]).rotation.z=-.6,Z(_,s,[.15,.23,.15],[.3,.95,.025])}let k=Qi(n,0,e===`mage`?2.95:2.48,0),A=a(16767339,.15,.5);for(let e=0;e<3;e++){let t=e*Math.PI*2/3,n=X(k,new Ke(.115),A,Math.cos(t)*.4,e*.035,Math.sin(t)*.4);n.scale.y=1.2}k.visible=!1;let j=aa(e);n.add(j);let M={body:_,head:E,rightArm:w,leftArm:T,rightLeg:S,leftLeg:C,cape:D,halo:O,stars:k,materials:i,role:e,guns:r,swingTrail:j};n.userData.rig=M,na(n,M);for(let e of r){let t=new H(new De(.11,8,6),new V({color:`#fff3b2`,transparent:!0,opacity:.9,depthWrite:!1}));t.name=`muzzle-flash`,t.position.set(0,.065,.51),t.scale.set(1,1,2.4),t.visible=!1,e.add(t)}return n}function aa(e){let t=.6+.72,n=b(e)+.72,r=Math.acos(m.showAngle)*.55,i=new Ot(t,n,30,1,-Math.PI/2-r,r*2),a=i.getAttribute(`position`),o=new Float32Array(a.count*3),s=n-t;for(let e=0;e<a.count;e++){let n=(Math.hypot(a.getX(e),a.getY(e))-t)/s,r=+(Math.abs(n-x.core)<=x.criticalBand);o[e*3]=.72+r*.28,o[e*3+1]=.86+r*.14,o[e*3+2]=1}i.setAttribute(`color`,new et(o,3));let c=new H(i,new V({vertexColors:!0,transparent:!0,opacity:0,side:2,depthWrite:!1}));return c.rotation.x=-Math.PI/2,c.position.y=1.02,c.visible=!1,c.userData.noFade=!0,c}function oa(e,t,n,r){if(e.userData.samurai){Ti(e,t,n);return}let i=e.userData.rig;if(!i)return;let a=t.hitStop>0?e.userData.poseTime??n:e.userData.poseTime=n,o=t.stun>0;if(o)for(let e of i.guns)e.getObjectByName(`muzzle-flash`).visible=!1;let c=o?0:Math.min(1,t.moving),u=te(i.role,t.id,a),d=Math.sin(u)*c,f=e.userData.gait??={phase:u,moving:c};f.phase=u,f.moving=c;let m=t.action>0?Math.sin(Math.min(1,t.action/.4)*Math.PI):0;if(i.body.position.y=Math.abs(d)*.055+Math.sin(a*2.4+t.id)*.009,i.body.rotation.x=o?.07:c*.09,i.body.rotation.z=o?Math.sin(a*5+t.id)*.14:-d*.022,i.body.rotation.y=m*(i.role===`swordsman`||i.role===`samurai`?.85:.2),i.rightLeg.rotation.x=d*.58,i.leftLeg.rotation.x=-d*.58,i.rightArm.rotation.x=-.24-d*.25-m*.9,i.leftArm.rotation.x=-.15+d*.28-m*.4,i.rightArm.rotation.z=.04-m*.65,i.leftArm.rotation.z=-.04,i.rightArm.rotation.y=-m*1.6,i.role===`gunner`?(i.rightArm.rotation.x=-.85-m*.35,i.leftArm.rotation.x=-.75-m*.3):i.role===`mage`||i.role===`healer`?(i.rightArm.rotation.x=-.12-m*.45,i.rightArm.rotation.z=.09,i.rightArm.rotation.y=0,i.leftArm.rotation.x=-.22-m*1.1,i.leftArm.rotation.z=-m*.6):i.role===`ninja`&&(i.rightArm.rotation.x=.25-m*1.45,i.leftArm.rotation.x=.25-m*1.1,i.body.rotation.x=c*.18),(t.guard>0&&t.attackKind!==`melee`||t.blocking)&&(i.leftArm.rotation.x=-.7,i.rightArm.rotation.x=-.5),i.role===`paladin`&&t.attackKind===`wall`&&t.action>0&&!o){let e=1-t.action/ve.cast,n=W.smoothstep(e,0,.3)*(1-W.smoothstep(e,.75,1));i.body.rotation.y=0,i.body.rotation.x=c*.09-.08*n,i.rightArm.rotation.set(-.24-1.21*n,0,.04+.28*n),i.leftArm.rotation.set(-.15-.45*n,0,-.04-.12*n)}if(t.attackKind===`melee`&&t.action>0&&!o){let e=g[i.role],n=s(i.role),r=p,a=e.duration-t.action,o=Math.min(1,a/Math.max(n.windup,1e-4)),l=W.smoothstep(a,n.windup,n.active),u=o*(1-W.smoothstep(a,n.active+r.hold,e.duration)),d=(e,t)=>(e*r.windupAmp*(1-l)+t*r.cutAmp*l)*u;if(i.body.rotation.y=d(-.32,.38),i.role===`mage`||i.role===`healer`?(i.rightArm.rotation.set(d(-1.1,.95),d(-.25,.4),d(.25,-.55)),i.leftArm.rotation.x=-.35-u*.5,i.body.rotation.x=c*.09+Math.sin(l*Math.PI)*.16*r.cutAmp):(i.rightArm.rotation.set(d(-1.35,.15),d(-.95,1.15),d(-.25,.3)),i.role===`ninja`&&i.leftArm.rotation.set(-.6*u,.7*u,.2*u)),i.swingTrail.visible=l>0&&l<1,i.swingTrail.visible){i.swingTrail.rotation.set(-Math.PI/2,0,d(-.32,.38));let e=i.swingTrail.material;e.opacity=.34*Math.sin(Math.min(1,l)*Math.PI)}}else i.swingTrail&&(i.swingTrail.visible=!1);if(i.role===`gunner`&&!o){let e=t.attackKind===`shot`?Math.max(0,1-(.35-t.action)/.16):0;i.body.rotation.set(0,0,0),i.body.position.y=0,i.rightArm.rotation.set(-1.45-e*.1,0,.04),i.leftArm.rotation.set(-1.4,0,-.04),i.guns.forEach((t,n)=>{t.rotation.set(n===0?1.45:1.4,0,0),t.getObjectByName(`muzzle-flash`).visible=n===0&&e>.45})}if((t.windup??0)>0&&!o){let e=t.windupSlot;i.role===`mage`?(i.leftArm.rotation.set(-1.4,0,-.3),i.rightArm.rotation.set(-.5,0,.2),i.body.rotation.set(-.08,-.25,0)):i.role===`gunner`&&e===3?(i.rightArm.rotation.set(-1.3,0,-.6),i.leftArm.rotation.set(-1.3,0,.6)):i.role===`gunner`?(i.rightArm.rotation.set(-1.55,0,-.25),i.leftArm.rotation.set(-1.55,0,.3),i.body.rotation.set(-.1,0,0)):i.role===`ninja`?(i.rightArm.rotation.set(-.5,1.1,.5),i.leftArm.rotation.set(-.3,0,-.2),i.body.rotation.set(.05,-.4,0)):i.role===`paladin`&&(i.leftArm.rotation.set(-1.15,0,-.1),i.rightArm.rotation.set(-.3,0,.1),i.body.rotation.set(.2,0,0),i.body.position.y-=.06)}t.charge>0&&(i.rightArm.rotation.x=-1.95,i.rightArm.rotation.z=-.15,i.body.rotation.y=-.28);let h=_e(t),_=o?0:h.f*h.s;i.head.rotation.x=.35*h.along*_,_>0&&(i.body.rotation.x+=.42*h.along*_,i.body.rotation.z+=.3*h.side*_,i.body.rotation.y+=.25*h.side*_,i.body.position.y-=.04*_,i.rightArm.rotation.x-=.9*_,i.leftArm.rotation.x-=.7*_,i.rightArm.rotation.z-=.35*_,i.leftArm.rotation.z+=.35*_,i.rightLeg.rotation.x+=.45*_,i.leftLeg.rotation.x-=.2*_),o?(i.head.rotation.z=Math.sin(a*4)*.1,i.rightArm.rotation.x=.07,i.leftArm.rotation.x=.07,i.rightArm.rotation.z=.2,i.leftArm.rotation.z=-.2):i.head.rotation.z=0;let v=t.dash&&ce(t.dash.presentation)?t.dash:void 0;if(i.body.position.x=0,i.body.position.z=0,i.body.scale.setScalar(1),v&&(v.presentation===`dodge-roll`||v.presentation===`dodge-step`)){let t=W.clamp(1-v.left/l.length,0,1),n=new R(v.dir.x,0,v.dir.z).applyAxisAngle(qi,-e.rotation.y),r=new R().crossVectors(qi,n).normalize();if(v.presentation===`dodge-roll`){let e=1-K.roll.tuck*Math.sin(Math.PI*t);i.body.quaternion.setFromAxisAngle(r,Math.PI*2*K.roll.turns*t),i.body.scale.setScalar(e);let n=new R(0,K.roll.center*e,0);i.body.position.copy(n).sub(n.clone().applyQuaternion(i.body.quaternion))}else{let e=Math.sin(Math.PI*t);i.body.quaternion.setFromAxisAngle(r,K.step.lean*e),i.body.position.set(0,K.step.hop*e,0)}}i.cape&&(i.cape.rotation.x=.03+c*.27+Math.sin(a*5+t.id)*(.025+c*.06)),i.halo&&(i.halo.position.y=.48+Math.sin(a*2.5)*.04),i.stars.visible=o,i.stars.rotation.y=a*2.1;for(let e of i.materials)e.emissiveIntensity=e.userData.baseEmissive+.3*Math.max(0,t.hitFlash)/.25;let y=e.userData.yuruParty;y&&(Bt(y,Math.max(0,t.hitFlash)),e.userData.motionError=Ki(i.body,y,t),Pt(y,i.body))}function sa(e,t){let n=e.userData.rig;if(!n?.guns.length)return;e.updateMatrixWorld(!0);for(let e of n.guns){let n=e.getWorldPosition(new R),r=t.clone().sub(n).normalize(),i=new B().setFromUnitVectors(new R(0,0,1),r);e.quaternion.copy(e.parent.getWorldQuaternion(new B).invert().multiply(i)),e.updateMatrixWorld(!0)}let r=e.userData.yuruParty;return r&&(Ht(e,r,t),Pt(r,n.body)),n.guns[0].getObjectByName(`gun-muzzle`).getWorldPosition(new R)}function ca(e,t,n,r){let i=(e,t)=>e.role===t.role&&e.team===t.team&&(e.look??``)===(r.look?.(t)??``);for(let a of t){let t=e.get(a.id);t&&!i(t,a)&&r.ready(a)&&(e.delete(a.id),n.push(t),r.park(t))}for(let a of t){if(e.has(a.id)||!r.ready(a))continue;let t=n.findIndex(e=>i(e,a));if(t<0){e.set(a.id,r.create(a));continue}let[o]=n.splice(t,1);r.unpark(o),e.set(a.id,o)}}var la=class extends ze{constructor(){super(),this.name=`RoomEnvironment`,this.position.y=-3.5;let e=new ct;e.deleteAttribute(`uv`);let t=new G({side:1}),n=new G,r=new be(16777215,900,28,2);r.position.set(.418,16.199,.3),this.add(r);let i=new H(e,t);i.position.set(-.757,13.219,.717),i.scale.set(31.713,28.305,28.591),this.add(i);let a=new He(e,n,6),o=new Et;o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),o.updateMatrix(),a.setMatrixAt(0,o.matrix),o.position.set(-5.607,-.754,-.758),o.rotation.set(0,.994,0),o.scale.set(1.97,1.534,3.955),o.updateMatrix(),a.setMatrixAt(1,o.matrix),o.position.set(6.167,.857,7.803),o.rotation.set(0,.561,0),o.scale.set(3.927,6.285,3.687),o.updateMatrix(),a.setMatrixAt(2,o.matrix),o.position.set(-2.017,.018,6.124),o.rotation.set(0,.333,0),o.scale.set(2.002,4.566,2.064),o.updateMatrix(),a.setMatrixAt(3,o.matrix),o.position.set(2.291,-.756,-2.621),o.rotation.set(0,-.286,0),o.scale.set(1.546,1.552,1.496),o.updateMatrix(),a.setMatrixAt(4,o.matrix),o.position.set(-2.193,-.369,-5.547),o.rotation.set(0,.516,0),o.scale.set(3.875,3.487,2.986),o.updateMatrix(),a.setMatrixAt(5,o.matrix),this.add(a);let s=new H(e,ua(50));s.position.set(-16.116,14.37,8.208),s.scale.set(.1,2.428,2.739),this.add(s);let c=new H(e,ua(50));c.position.set(-16.109,18.021,-8.207),c.scale.set(.1,2.425,2.751),this.add(c);let l=new H(e,ua(17));l.position.set(14.904,12.198,-1.832),l.scale.set(.15,4.265,6.331),this.add(l);let u=new H(e,ua(43));u.position.set(-.462,8.89,14.52),u.scale.set(4.38,5.441,.088),this.add(u);let d=new H(e,ua(20));d.position.set(3.235,11.486,-12.541),d.scale.set(2.5,2,.1),this.add(d);let f=new H(e,ua(100));f.position.set(0,20,0),f.scale.set(1,.1,1),this.add(f)}dispose(){let e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(let t of e)t.dispose()}};function ua(e){return new tt({color:0,emissive:16777215,emissiveIntensity:e})}var da={name:`CopyShader`,uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`},fa=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error(`THREE.Pass: .render() must be implemented in derived pass.`)}dispose(){}},pa=new Te(-1,1,1,-1,0,1),ma=new class extends Ct{constructor(){super(),this.setAttribute(`position`,new L([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute(`uv`,new L([0,2,0,0,2,0],2))}},ha=class{constructor(e){this._mesh=new H(ma,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,pa)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}},ga=class extends fa{constructor(e,t=`tDiffuse`){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof pt?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Ae.clone(e.uniforms),this.material=new pt({name:e.name===void 0?`unspecified`:e.name,defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new ha(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}},_a=class extends fa{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){let r=e.getContext(),i=e.state;i.buffers.color.setMask(!1),i.buffers.depth.setMask(!1),i.buffers.color.setLocked(!0),i.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),i.buffers.stencil.setTest(!0),i.buffers.stencil.setOp(r.REPLACE,r.REPLACE,r.REPLACE),i.buffers.stencil.setFunc(r.ALWAYS,a,4294967295),i.buffers.stencil.setClear(o),i.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),i.buffers.color.setLocked(!1),i.buffers.depth.setLocked(!1),i.buffers.color.setMask(!0),i.buffers.depth.setMask(!0),i.buffers.stencil.setLocked(!1),i.buffers.stencil.setFunc(r.EQUAL,1,4294967295),i.buffers.stencil.setOp(r.KEEP,r.KEEP,r.KEEP),i.buffers.stencil.setLocked(!0)}},va=class extends fa{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}},ya=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let n=e.getSize(new z);this._width=n.width,this._height=n.height,t=new xt(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Me}),t.texture.name=`EffectComposer.rt1`}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name=`EffectComposer.rt2`,this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new ga(da),this.copyPass.material.blending=0,this.timer=new Ue}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){this.timer.update(),e===void 0&&(e=this.timer.getDelta());let t=this.renderer.getRenderTarget(),n=!1;for(let t=0,r=this.passes.length;t<r;t++){let r=this.passes[t];if(r.enabled!==!1){if(r.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(t),r.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),r.needsSwap){if(n){let t=this.renderer.getContext(),n=this.renderer.state.buffers.stencil;n.setFunc(t.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),n.setFunc(t.EQUAL,1,4294967295)}this.swapBuffers()}_a!==void 0&&(r instanceof _a?n=!0:r instanceof va&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new z);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let n=this._width*this._pixelRatio,r=this._height*this._pixelRatio;this.renderTarget1.setSize(n,r),this.renderTarget2.setSize(n,r);for(let e=0;e<this.passes.length;e++)this.passes[e].setSize(n,r)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}},ba=class extends fa{constructor(e,t,n=null,r=null,i=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=r,this.clearAlpha=i,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new I}render(e,t,n){let r=e.autoClear;e.autoClear=!1;let i,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(i=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==1&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(i),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),e.autoClear=r}},xa={name:`GTAOShader`,defines:{PERSPECTIVE_CAMERA:1,SAMPLES:16,NORMAL_VECTOR_TYPE:1,DEPTH_SWIZZLING:`x`,SCREEN_SPACE_RADIUS:0,SCREEN_SPACE_RADIUS_SCALE:100,SCENE_CLIP_BOX:0},uniforms:{tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new z},cameraNear:{value:null},cameraFar:{value:null},cameraProjectionMatrix:{value:new st},cameraProjectionMatrixInverse:{value:new st},cameraWorldMatrix:{value:new st},radius:{value:.25},distanceExponent:{value:1},thickness:{value:1},distanceFallOff:{value:1},scale:{value:1},sceneBoxMin:{value:new R(-1,-1,-1)},sceneBoxMax:{value:new R(1,1,1)}},vertexShader:`

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
		}`},Sa={name:`GTAODepthShader`,defines:{PERSPECTIVE_CAMERA:1},uniforms:{tDepth:{value:null},cameraNear:{value:null},cameraFar:{value:null}},vertexShader:`
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

		}`},Ca={name:`GTAOBlendShader`,uniforms:{tDiffuse:{value:null},intensity:{value:1}},vertexShader:`
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
		}`};function wa(e=5){let t=Math.floor(e)%2==0?Math.floor(e)+1:Math.floor(e),n=Ta(t),r=n.length,i=new Uint8Array(r*4);for(let e=0;e<r;++e){let t=n[e],a=2*Math.PI*t/r,o=new R(Math.cos(a),Math.sin(a),0).normalize();i[e*4]=(o.x*.5+.5)*255,i[e*4+1]=(o.y*.5+.5)*255,i[e*4+2]=127,i[e*4+3]=255}let a=new Ie(i,t,t);return a.wrapS=At,a.wrapT=At,a.needsUpdate=!0,a}function Ta(e){let t=Math.floor(e)%2==0?Math.floor(e)+1:Math.floor(e),n=t*t,r=Array(n).fill(0),i=Math.floor(t/2),a=t-1;for(let e=1;e<=n;){if(i===-1&&a===t?(a=t-2,i=0):(a===t&&(a=0),i<0&&(i=t-1)),r[i*t+a]!==0){a-=2,i++;continue}r[i*t+a]=e++,a++,i--}return r}var Ea={name:`PoissonDenoiseShader`,defines:{SAMPLES:16,SAMPLE_VECTORS:Da(16,2,1),NORMAL_VECTOR_TYPE:1,DEPTH_VALUE_SOURCE:0},uniforms:{tDiffuse:{value:null},tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new z},cameraProjectionMatrixInverse:{value:new st},lumaPhi:{value:5},depthPhi:{value:5},normalPhi:{value:5},radius:{value:4},index:{value:0}},vertexShader:`

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
		}`};function Da(e,t,n){let r=Oa(e,t,n),i=`vec3[SAMPLES](`;for(let t=0;t<e;t++){let n=r[t];i+=`vec3(${n.x}, ${n.y}, ${n.z})${t<e-1?`,`:`)`}`}return i}function Oa(e,t,n){let r=[];for(let i=0;i<e;i++){let a=2*Math.PI*t*i/e,o=(i/(e-1))**n;r.push(new R(Math.cos(a),Math.sin(a),o))}return r}var ka=class{constructor(e=Math){this.grad3=[[1,1,0],[-1,1,0],[1,-1,0],[-1,-1,0],[1,0,1],[-1,0,1],[1,0,-1],[-1,0,-1],[0,1,1],[0,-1,1],[0,1,-1],[0,-1,-1]],this.grad4=[[0,1,1,1],[0,1,1,-1],[0,1,-1,1],[0,1,-1,-1],[0,-1,1,1],[0,-1,1,-1],[0,-1,-1,1],[0,-1,-1,-1],[1,0,1,1],[1,0,1,-1],[1,0,-1,1],[1,0,-1,-1],[-1,0,1,1],[-1,0,1,-1],[-1,0,-1,1],[-1,0,-1,-1],[1,1,0,1],[1,1,0,-1],[1,-1,0,1],[1,-1,0,-1],[-1,1,0,1],[-1,1,0,-1],[-1,-1,0,1],[-1,-1,0,-1],[1,1,1,0],[1,1,-1,0],[1,-1,1,0],[1,-1,-1,0],[-1,1,1,0],[-1,1,-1,0],[-1,-1,1,0],[-1,-1,-1,0]],this.p=[];for(let t=0;t<256;t++)this.p[t]=Math.floor(e.random()*256);this.perm=[];for(let e=0;e<512;e++)this.perm[e]=this.p[e&255];this.simplex=[[0,1,2,3],[0,1,3,2],[0,0,0,0],[0,2,3,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,3,0],[0,2,1,3],[0,0,0,0],[0,3,1,2],[0,3,2,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,3,2,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,0,3],[0,0,0,0],[1,3,0,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,3,0,1],[2,3,1,0],[1,0,2,3],[1,0,3,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,3,1],[0,0,0,0],[2,1,3,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,1,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,0,1,2],[3,0,2,1],[0,0,0,0],[3,1,2,0],[2,1,0,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,1,0,2],[0,0,0,0],[3,2,0,1],[3,2,1,0]]}noise(e,t){let n,r,i,a=.5*(Math.sqrt(3)-1),o=(e+t)*a,s=Math.floor(e+o),c=Math.floor(t+o),l=(3-Math.sqrt(3))/6,u=(s+c)*l,d=s-u,f=c-u,p=e-d,m=t-f,h,g;p>m?(h=1,g=0):(h=0,g=1);let _=p-h+l,v=m-g+l,y=p-1+2*l,b=m-1+2*l,x=s&255,S=c&255,C=this.perm[x+this.perm[S]]%12,w=this.perm[x+h+this.perm[S+g]]%12,T=this.perm[x+1+this.perm[S+1]]%12,E=.5-p*p-m*m;E<0?n=0:(E*=E,n=E*E*this._dot(this.grad3[C],p,m));let D=.5-_*_-v*v;D<0?r=0:(D*=D,r=D*D*this._dot(this.grad3[w],_,v));let O=.5-y*y-b*b;return O<0?i=0:(O*=O,i=O*O*this._dot(this.grad3[T],y,b)),70*(n+r+i)}noise3d(e,t,n){let r,i,a,o,s=(e+t+n)*(1/3),c=Math.floor(e+s),l=Math.floor(t+s),u=Math.floor(n+s),d=1/6,f=(c+l+u)*d,p=c-f,m=l-f,h=u-f,g=e-p,_=t-m,v=n-h,y,b,x,S,C,w;g>=_?_>=v?(y=1,b=0,x=0,S=1,C=1,w=0):g>=v?(y=1,b=0,x=0,S=1,C=0,w=1):(y=0,b=0,x=1,S=1,C=0,w=1):_<v?(y=0,b=0,x=1,S=0,C=1,w=1):g<v?(y=0,b=1,x=0,S=0,C=1,w=1):(y=0,b=1,x=0,S=1,C=1,w=0);let T=g-y+d,E=_-b+d,D=v-x+d,O=g-S+2*d,k=_-C+2*d,A=v-w+2*d,j=g-1+3*d,M=_-1+3*d,ee=v-1+3*d,N=c&255,te=l&255,ne=u&255,re=this.perm[N+this.perm[te+this.perm[ne]]]%12,P=this.perm[N+y+this.perm[te+b+this.perm[ne+x]]]%12,ie=this.perm[N+S+this.perm[te+C+this.perm[ne+w]]]%12,ae=this.perm[N+1+this.perm[te+1+this.perm[ne+1]]]%12,oe=.6-g*g-_*_-v*v;oe<0?r=0:(oe*=oe,r=oe*oe*this._dot3(this.grad3[re],g,_,v));let se=.6-T*T-E*E-D*D;se<0?i=0:(se*=se,i=se*se*this._dot3(this.grad3[P],T,E,D));let ce=.6-O*O-k*k-A*A;ce<0?a=0:(ce*=ce,a=ce*ce*this._dot3(this.grad3[ie],O,k,A));let le=.6-j*j-M*M-ee*ee;return le<0?o=0:(le*=le,o=le*le*this._dot3(this.grad3[ae],j,M,ee)),32*(r+i+a+o)}noise4d(e,t,n,r){let i=this.grad4,a=this.simplex,o=this.perm,s=(Math.sqrt(5)-1)/4,c=(5-Math.sqrt(5))/20,l,u,d,f,p,m=(e+t+n+r)*s,h=Math.floor(e+m),g=Math.floor(t+m),_=Math.floor(n+m),v=Math.floor(r+m),y=(h+g+_+v)*c,b=h-y,x=g-y,S=_-y,C=v-y,w=e-b,T=t-x,E=n-S,D=r-C,O=w>T?32:0,k=w>E?16:0,A=T>E?8:0,j=w>D?4:0,M=T>D?2:0,ee=+(E>D),N=O+k+A+j+M+ee,te=+(a[N][0]>=3),ne=+(a[N][1]>=3),re=+(a[N][2]>=3),P=+(a[N][3]>=3),ie=+(a[N][0]>=2),ae=+(a[N][1]>=2),oe=+(a[N][2]>=2),se=+(a[N][3]>=2),ce=+(a[N][0]>=1),le=+(a[N][1]>=1),ue=+(a[N][2]>=1),de=+(a[N][3]>=1),fe=w-te+c,pe=T-ne+c,F=E-re+c,me=D-P+c,he=w-ie+2*c,ge=T-ae+2*c,_e=E-oe+2*c,ve=D-se+2*c,ye=w-ce+3*c,be=T-le+3*c,xe=E-ue+3*c,I=D-de+3*c,Se=w-1+4*c,Ce=T-1+4*c,we=E-1+4*c,Te=D-1+4*c,Ee=h&255,De=g&255,Oe=_&255,ke=v&255,L=o[Ee+o[De+o[Oe+o[ke]]]]%32,Ae=o[Ee+te+o[De+ne+o[Oe+re+o[ke+P]]]]%32,je=o[Ee+ie+o[De+ae+o[Oe+oe+o[ke+se]]]]%32,Me=o[Ee+ce+o[De+le+o[Oe+ue+o[ke+de]]]]%32,Ne=o[Ee+1+o[De+1+o[Oe+1+o[ke+1]]]]%32,Pe=.6-w*w-T*T-E*E-D*D;Pe<0?l=0:(Pe*=Pe,l=Pe*Pe*this._dot4(i[L],w,T,E,D));let Fe=.6-fe*fe-pe*pe-F*F-me*me;Fe<0?u=0:(Fe*=Fe,u=Fe*Fe*this._dot4(i[Ae],fe,pe,F,me));let Ie=.6-he*he-ge*ge-_e*_e-ve*ve;Ie<0?d=0:(Ie*=Ie,d=Ie*Ie*this._dot4(i[je],he,ge,_e,ve));let Le=.6-ye*ye-be*be-xe*xe-I*I;Le<0?f=0:(Le*=Le,f=Le*Le*this._dot4(i[Me],ye,be,xe,I));let Re=.6-Se*Se-Ce*Ce-we*we-Te*Te;return Re<0?p=0:(Re*=Re,p=Re*Re*this._dot4(i[Ne],Se,Ce,we,Te)),27*(l+u+d+f+p)}_dot(e,t,n){return e[0]*t+e[1]*n}_dot3(e,t,n,r){return e[0]*t+e[1]*n+e[2]*r}_dot4(e,t,n,r,i){return e[0]*t+e[1]*n+e[2]*r+e[3]*i}},Aa=class e extends fa{constructor(e,t,n=512,r=512,i,a,o){super(),this.width=n,this.height=r,this.clear=!0,this.camera=t,this.scene=e,this.output=0,this._renderGBuffer=!0,this._visibilityCache=[],this.blendIntensity=1,this.pdRings=2,this.pdRadiusExponent=2,this.pdSamples=16,this.gtaoNoiseTexture=wa(),this.pdNoiseTexture=this._generateNoise(),this.gtaoRenderTarget=new xt(this.width,this.height,{type:Me}),this.pdRenderTarget=this.gtaoRenderTarget.clone(),this.gtaoMaterial=new pt({defines:Object.assign({},xa.defines),uniforms:Ae.clone(xa.uniforms),vertexShader:xa.vertexShader,fragmentShader:xa.fragmentShader,blending:0,depthTest:!1,depthWrite:!1}),this.gtaoMaterial.defines.PERSPECTIVE_CAMERA=+!!this.camera.isPerspectiveCamera,this.gtaoMaterial.uniforms.tNoise.value=this.gtaoNoiseTexture,this.gtaoMaterial.uniforms.resolution.value.set(this.width,this.height),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.normalMaterial=new wt,this.normalMaterial.blending=0,this.pdMaterial=new pt({defines:Object.assign({},Ea.defines),uniforms:Ae.clone(Ea.uniforms),vertexShader:Ea.vertexShader,fragmentShader:Ea.fragmentShader,depthTest:!1,depthWrite:!1}),this.pdMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.pdMaterial.uniforms.tNoise.value=this.pdNoiseTexture,this.pdMaterial.uniforms.resolution.value.set(this.width,this.height),this.pdMaterial.uniforms.lumaPhi.value=10,this.pdMaterial.uniforms.depthPhi.value=2,this.pdMaterial.uniforms.normalPhi.value=3,this.pdMaterial.uniforms.radius.value=8,this.depthRenderMaterial=new pt({defines:Object.assign({},Sa.defines),uniforms:Ae.clone(Sa.uniforms),vertexShader:Sa.vertexShader,fragmentShader:Sa.fragmentShader,blending:0}),this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.copyMaterial=new pt({uniforms:Ae.clone(da.uniforms),vertexShader:da.vertexShader,fragmentShader:da.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blendSrc:208,blendDst:200,blendEquation:100,blendSrcAlpha:206,blendDstAlpha:200,blendEquationAlpha:100}),this.blendMaterial=new pt({uniforms:Ae.clone(Ca.uniforms),vertexShader:Ca.vertexShader,fragmentShader:Ca.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blending:5,blendSrc:208,blendDst:200,blendEquation:100,blendSrcAlpha:206,blendDstAlpha:200,blendEquationAlpha:100}),this._fsQuad=new ha(null),this._originalClearColor=new I,this.setGBuffer(i?i.depthTexture:void 0,i?i.normalTexture:void 0),a!==void 0&&this.updateGtaoMaterial(a),o!==void 0&&this.updatePdMaterial(o)}setSize(e,t){this.width=e,this.height=t,this.gtaoRenderTarget.setSize(e,t),this.normalRenderTarget.setSize(e,t),this.pdRenderTarget.setSize(e,t),this.gtaoMaterial.uniforms.resolution.value.set(e,t),this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.pdMaterial.uniforms.resolution.value.set(e,t),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse)}dispose(){this.gtaoNoiseTexture.dispose(),this.pdNoiseTexture.dispose(),this.normalRenderTarget.dispose(),this.gtaoRenderTarget.dispose(),this.pdRenderTarget.dispose(),this.normalMaterial.dispose(),this.pdMaterial.dispose(),this.copyMaterial.dispose(),this.depthRenderMaterial.dispose(),this._fsQuad.dispose()}get gtaoMap(){return this.pdRenderTarget.texture}setGBuffer(e,t){e===void 0?(this.depthTexture=new Ee,this.depthTexture.format=Be,this.depthTexture.type=ke,this.normalRenderTarget=new xt(this.width,this.height,{minFilter:kt,magFilter:kt,type:Me,depthTexture:this.depthTexture}),this.normalTexture=this.normalRenderTarget.texture,this._renderGBuffer=!0):(this.depthTexture=e,this.normalTexture=t,this._renderGBuffer=!1);let n=+!!this.normalTexture,r=this.depthTexture===this.normalTexture?`w`:`x`;this.gtaoMaterial.defines.NORMAL_VECTOR_TYPE=n,this.gtaoMaterial.defines.DEPTH_SWIZZLING=r,this.gtaoMaterial.uniforms.tNormal.value=this.normalTexture,this.gtaoMaterial.uniforms.tDepth.value=this.depthTexture,this.pdMaterial.defines.NORMAL_VECTOR_TYPE=n,this.pdMaterial.defines.DEPTH_SWIZZLING=r,this.pdMaterial.uniforms.tNormal.value=this.normalTexture,this.pdMaterial.uniforms.tDepth.value=this.depthTexture,this.depthRenderMaterial.uniforms.tDepth.value=this.normalRenderTarget.depthTexture}setSceneClipBox(e){e?(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX!==1,this.gtaoMaterial.defines.SCENE_CLIP_BOX=1,this.gtaoMaterial.uniforms.sceneBoxMin.value.copy(e.min),this.gtaoMaterial.uniforms.sceneBoxMax.value.copy(e.max)):(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX===0,this.gtaoMaterial.defines.SCENE_CLIP_BOX=0)}updateGtaoMaterial(e){e.radius!==void 0&&(this.gtaoMaterial.uniforms.radius.value=e.radius),e.distanceExponent!==void 0&&(this.gtaoMaterial.uniforms.distanceExponent.value=e.distanceExponent),e.thickness!==void 0&&(this.gtaoMaterial.uniforms.thickness.value=e.thickness),e.distanceFallOff!==void 0&&(this.gtaoMaterial.uniforms.distanceFallOff.value=e.distanceFallOff,this.gtaoMaterial.needsUpdate=!0),e.scale!==void 0&&(this.gtaoMaterial.uniforms.scale.value=e.scale),e.samples!==void 0&&e.samples!==this.gtaoMaterial.defines.SAMPLES&&(this.gtaoMaterial.defines.SAMPLES=e.samples,this.gtaoMaterial.needsUpdate=!0),e.screenSpaceRadius!==void 0&&+!!e.screenSpaceRadius!==this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS&&(this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS=+!!e.screenSpaceRadius,this.gtaoMaterial.needsUpdate=!0)}updatePdMaterial(e){let t=!1;e.lumaPhi!==void 0&&(this.pdMaterial.uniforms.lumaPhi.value=e.lumaPhi),e.depthPhi!==void 0&&(this.pdMaterial.uniforms.depthPhi.value=e.depthPhi),e.normalPhi!==void 0&&(this.pdMaterial.uniforms.normalPhi.value=e.normalPhi),e.radius!==void 0&&e.radius!==this.radius&&(this.pdMaterial.uniforms.radius.value=e.radius),e.radiusExponent!==void 0&&e.radiusExponent!==this.pdRadiusExponent&&(this.pdRadiusExponent=e.radiusExponent,t=!0),e.rings!==void 0&&e.rings!==this.pdRings&&(this.pdRings=e.rings,t=!0),e.samples!==void 0&&e.samples!==this.pdSamples&&(this.pdSamples=e.samples,t=!0),t&&(this.pdMaterial.defines.SAMPLES=this.pdSamples,this.pdMaterial.defines.SAMPLE_VECTORS=Da(this.pdSamples,this.pdRings,this.pdRadiusExponent),this.pdMaterial.needsUpdate=!0)}render(t,n,r){switch(this._renderGBuffer&&(this._overrideVisibility(),this._renderOverride(t,this.normalMaterial,this.normalRenderTarget,7829503,1),this._restoreVisibility()),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.gtaoMaterial.uniforms.cameraWorldMatrix.value.copy(this.camera.matrixWorld),this._renderPass(t,this.gtaoMaterial,this.gtaoRenderTarget,16777215,1),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this._renderPass(t,this.pdMaterial,this.pdRenderTarget,16777215,1),this.output){case e.OUTPUT.Off:break;case e.OUTPUT.Diffuse:this.copyMaterial.uniforms.tDiffuse.value=r.texture,this.copyMaterial.blending=0,this._renderPass(t,this.copyMaterial,this.renderToScreen?null:n);break;case e.OUTPUT.AO:this.copyMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.copyMaterial.blending=0,this._renderPass(t,this.copyMaterial,this.renderToScreen?null:n);break;case e.OUTPUT.Denoise:this.copyMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this.copyMaterial.blending=0,this._renderPass(t,this.copyMaterial,this.renderToScreen?null:n);break;case e.OUTPUT.Depth:this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this._renderPass(t,this.depthRenderMaterial,this.renderToScreen?null:n);break;case e.OUTPUT.Normal:this.copyMaterial.uniforms.tDiffuse.value=this.normalRenderTarget.texture,this.copyMaterial.blending=0,this._renderPass(t,this.copyMaterial,this.renderToScreen?null:n);break;case e.OUTPUT.Default:this.copyMaterial.uniforms.tDiffuse.value=r.texture,this.copyMaterial.blending=0,this._renderPass(t,this.copyMaterial,this.renderToScreen?null:n),this.blendMaterial.uniforms.intensity.value=this.blendIntensity,this.blendMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this._renderPass(t,this.blendMaterial,this.renderToScreen?null:n);break;default:console.warn(`THREE.GTAOPass: Unknown output type.`)}}_renderPass(e,t,n,r,i){e.getClearColor(this._originalClearColor);let a=e.getClearAlpha(),o=e.autoClear;e.setRenderTarget(n),e.autoClear=!1,r!=null&&(e.setClearColor(r),e.setClearAlpha(i||0),e.clear()),this._fsQuad.material=t,this._fsQuad.render(e),e.autoClear=o,e.setClearColor(this._originalClearColor),e.setClearAlpha(a)}_renderOverride(e,t,n,r,i){e.getClearColor(this._originalClearColor);let a=e.getClearAlpha(),o=e.autoClear;e.setRenderTarget(n),e.autoClear=!1,r=t.clearColor||r,i=t.clearAlpha||i,r!=null&&(e.setClearColor(r),e.setClearAlpha(i||0),e.clear()),this.scene.overrideMaterial=t,e.render(this.scene,this.camera),this.scene.overrideMaterial=null,e.autoClear=o,e.setClearColor(this._originalClearColor),e.setClearAlpha(a)}_overrideVisibility(){let e=this.scene,t=this._visibilityCache;e.traverse(function(e){(e.isPoints||e.isLine||e.isLine2)&&e.visible&&(e.visible=!1,t.push(e))})}_restoreVisibility(){let e=this._visibilityCache;for(let t=0;t<e.length;t++)e[t].visible=!0;e.length=0}_generateNoise(e=64){let t=new ka,n=e*e*4,r=new Uint8Array(n);for(let n=0;n<e;n++)for(let i=0;i<e;i++){let a=n,o=i;r[(n*e+i)*4]=(t.noise(a,o)*.5+.5)*255,r[(n*e+i)*4+1]=(t.noise(a+e,o)*.5+.5)*255,r[(n*e+i)*4+2]=(t.noise(a,o+e)*.5+.5)*255,r[(n*e+i)*4+3]=(t.noise(a+e,o+e)*.5+.5)*255}let i=new Ie(r,e,e,Fe,Je);return i.wrapS=At,i.wrapT=At,i.needsUpdate=!0,i}};Aa.OUTPUT={Off:-1,Default:0,Diffuse:1,Depth:2,Normal:3,AO:4,Denoise:5};var ja={name:`OutputShader`,uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`},Ma=class extends fa{constructor(){super(),this.isOutputPass=!0,this.uniforms=Ae.clone(ja.uniforms),this.material=new lt({name:ja.name,uniforms:this.uniforms,vertexShader:ja.vertexShader,fragmentShader:ja.fragmentShader}),this._fsQuad=new ha(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},Tt.getTransfer(this._outputColorSpace)===`srgb`&&(this.material.defines.SRGB_TRANSFER=``),this._toneMapping===1?this.material.defines.LINEAR_TONE_MAPPING=``:this._toneMapping===2?this.material.defines.REINHARD_TONE_MAPPING=``:this._toneMapping===3?this.material.defines.CINEON_TONE_MAPPING=``:this._toneMapping===4?this.material.defines.ACES_FILMIC_TONE_MAPPING=``:this._toneMapping===6?this.material.defines.AGX_TONE_MAPPING=``:this._toneMapping===7?this.material.defines.NEUTRAL_TONE_MAPPING=``:this._toneMapping===5&&(this.material.defines.CUSTOM_TONE_MAPPING=``),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}},Na={name:`FXAAShader`,uniforms:{tDiffuse:{value:null},resolution:{value:new z(1/1024,1/512)}},vertexShader:`

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

		}`},Pa={name:`LuminosityHighPassShader`,uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new I(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`},Fa=class e extends fa{constructor(e,t=1,n,r){super(),this.strength=t,this.radius=n,this.threshold=r,this.resolution=e===void 0?new z(256,256):new z(e.x,e.y),this.clearColor=new I(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let i=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new xt(i,a,{type:Me}),this.renderTargetBright.texture.name=`UnrealBloomPass.bright`,this.renderTargetBright.texture.generateMipmaps=!1;for(let e=0;e<this.nMips;e++){let t=new xt(i,a,{type:Me});t.texture.name=`UnrealBloomPass.h`+e,t.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(t);let n=new xt(i,a,{type:Me});n.texture.name=`UnrealBloomPass.v`+e,n.texture.generateMipmaps=!1,this.renderTargetsVertical.push(n),i=Math.round(i/2),a=Math.round(a/2)}let o=Pa;this.highPassUniforms=Ae.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=r,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new pt({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];let s=[6,10,14,18,22];i=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let e=0;e<this.nMips;e++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(s[e])),this.separableBlurMaterials[e].uniforms.invSize.value=new z(1/i,1/a),i=Math.round(i/2),a=Math.round(a/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new R(1,1,1),new R(1,1,1),new R(1,1,1),new R(1,1,1),new R(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=Ae.clone(da.uniforms),this.blendMaterial=new pt({uniforms:this.copyUniforms,vertexShader:da.vertexShader,fragmentShader:da.fragmentShader,premultipliedAlpha:!0,blending:2,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new I,this._oldClearAlpha=1,this._basic=new V,this._fsQuad=new ha(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),r=Math.round(t/2);this.renderTargetBright.setSize(n,r);for(let e=0;e<this.nMips;e++)this.renderTargetsHorizontal[e].setSize(n,r),this.renderTargetsVertical[e].setSize(n,r),this.separableBlurMaterials[e].uniforms.invSize.value=new z(1/n,1/r),n=Math.round(n/2),r=Math.round(r/2)}render(t,n,r,i,a){t.getClearColor(this._oldClearColor),this._oldClearAlpha=t.getClearAlpha();let o=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),a&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=r.texture,t.setRenderTarget(null),t.clear(),this._fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=r.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this._fsQuad.render(t);let s=this.renderTargetBright;for(let n=0;n<this.nMips;n++)this._fsQuad.material=this.separableBlurMaterials[n],this.separableBlurMaterials[n].uniforms.colorTexture.value=s.texture,this.separableBlurMaterials[n].uniforms.direction.value=e.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[n]),t.clear(),this._fsQuad.render(t),this.separableBlurMaterials[n].uniforms.colorTexture.value=this.renderTargetsHorizontal[n].texture,this.separableBlurMaterials[n].uniforms.direction.value=e.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[n]),t.clear(),this._fsQuad.render(t),s=this.renderTargetsVertical[n];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this._fsQuad.render(t),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,a&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(r),this._fsQuad.render(t)),t.setClearColor(this._oldClearColor,this._oldClearAlpha),t.autoClear=o}_getSeparableBlurMaterial(e){let t=[],n=e/3;for(let r=0;r<e;r++)t.push(.39894*Math.exp(-.5*r*r/(n*n))/n);return new pt({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new z(.5,.5)},direction:{value:new z(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`

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

				}`})}_getCompositeMaterial(e){return new pt({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

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

				}`})}};Fa.BlurDirectionX=new z(1,0),Fa.BlurDirectionY=new z(0,1);var Ia={watercolor:{name:`水彩`,paper:`#fffaf0`,ink:`#4a3326`,paint:3,shade:.84,exposure:1.06,saturation:1.12,contrast:.92,warmth:.35,levels:0,bleed:.6,edge:.18,grain:.13,fine:.03,wash:.14,granulate:.22,hatch:0,wobble:.8,vignette:.06,stripes:!1,lines:[.08,.35]},pencil:{name:`色えんぴつ`,paper:`#fffcf4`,ink:`#3d3530`,paint:0,shade:.85,exposure:1.06,saturation:1,contrast:.92,warmth:.25,levels:0,bleed:.1,edge:.45,grain:.12,fine:.04,wash:0,granulate:0,hatch:.24,wobble:0,vignette:.05,stripes:!1,lines:[.1,.38]},pencil1:{name:`色えんぴつ（直す前）`,paper:`#fffcf4`,ink:`#3d3530`,paint:2,shade:.82,exposure:1.08,saturation:.95,contrast:.9,warmth:.25,levels:0,bleed:.1,edge:.5,grain:.16,fine:.08,wash:.03,granulate:0,hatch:.34,wobble:.5,vignette:.05,stripes:!0,lines:[.08,.35]},gouache:{name:`絵の具`,paper:`#fff8ec`,ink:`#2e2420`,paint:3.5,shade:.86,exposure:1.04,saturation:1.2,contrast:1,warmth:.3,levels:7,bleed:.2,edge:.45,grain:.08,fine:.02,wash:.05,granulate:.06,hatch:0,wobble:.4,vignette:.05,stripes:!1,lines:[.08,.35]}},La=e=>new I(e);function Ra(e){let t=e=>{let t=La(e);return new R(t.r,t.g,t.b)};return{tDiffuse:{value:null},resolution:{value:new z(1/1024,1/512)},paper:{value:t(e.paper)},ink:{value:t(e.ink)},paint:{value:e.paint},shade:{value:e.shade},exposure:{value:e.exposure},saturation:{value:e.saturation},contrast:{value:e.contrast},warmth:{value:e.warmth},levels:{value:e.levels},bleed:{value:e.bleed},edge:{value:e.edge},grain:{value:e.grain},fine:{value:e.fine},wash:{value:e.wash},granulate:{value:e.granulate},hatch:{value:e.hatch},stripes:{value:+!!e.stripes},lines:{value:new z(...e.lines)},wobble:{value:e.wobble},vignette:{value:e.vignette}}}var za={name:`PictureBookShader`,uniforms:Ra(Ia.watercolor),vertexShader:`varying vec2 vUv;
void main(){vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0);}`,fragmentShader:`uniform sampler2D tDiffuse;
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
	float e=smoothstep(lines.x,lines.y,length(vec2(gx,gy)));
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
	gl_FragColor=vec4(clamp(c,0.0,1.0),src.a);
}`},Ba=class extends Aa{setSize(e,t){let n=Math.min(.5,960/e);super.setSize(Math.max(1,Math.round(e*n)),Math.max(1,Math.round(t*n)))}render(e,t,n,r,i){this.setGBuffer(n.depthTexture,void 0),this.depthRenderMaterial.uniforms.tDepth.value=n.depthTexture,super.render(e,t,n,r,i)}},Va={name:`SharpenShader`,uniforms:{tDiffuse:{value:null},resolution:{value:new z(1/1024,1/512)},sharpness:{value:{sharpness:.5}.sharpness}},vertexShader:`varying vec2 vUv;
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
}`};function Ha(e,t,n){let r=new Ba(e,t,16,16);return r.blendIntensity=1,r.updateGtaoMaterial({radius:1.15,thickness:1,distanceExponent:1.5,distanceFallOff:1,scale:1.4,samples:n?4:8,screenSpaceRadius:!1}),r.updatePdMaterial({samples:n?4:8,rings:2,radius:4,depthPhi:1,normalPhi:3}),r}function Ua(){let e=new Fa(new z(16,16),.2,.45,1.25);return e.materialHighPassFilter.fragmentShader=e.materialHighPassFilter.fragmentShader.replace(`vec4 texel = texture2D( tDiffuse, vUv );`,`vec4 texel = texture2D( tDiffuse, vUv );
     texel.rgb=vec3(texel.r>=0.0?min(texel.r,16.0):0.0,
                    texel.g>=0.0?min(texel.g,16.0):0.0,
                    texel.b>=0.0?min(texel.b,16.0):0.0);`),e}var Wa=class{renderer;scene;camera;mobile;composer;ao;bloom;sharpen;book;bookStyle=`off`;antialias;render3d;output=new Ma;constructor(e,t,n,r=!1,i={}){this.renderer=e,this.scene=t,this.camera=n,this.mobile=r;let a=i.ambientOcclusion!==!1,o=i.bloom!==!1;this.composer=new ya(e);for(let e of[this.composer.renderTarget1,this.composer.renderTarget2])e.depthTexture=new Ee(1,1,yt);this.antialias=new ga(Na),this.render3d=new ba(t,n),this.composer.addPass(this.render3d),a&&(this.ao=Ha(t,n,r),this.composer.addPass(this.ao)),o&&(this.bloom=Ua(),this.composer.addPass(this.bloom)),this.composer.addPass(this.output),this.composer.addPass(this.antialias),e.info.autoReset=!1}setAmbientOcclusion(e){e&&!this.ao&&(this.ao=Ha(this.scene,this.camera,this.mobile),this.composer.insertPass(this.ao,this.composer.passes.indexOf(this.render3d)+1),this.sizePasses()),this.ao&&(this.ao.enabled=e)}setBloom(e){e!==!!this.bloom&&(e?(this.bloom=Ua(),this.composer.insertPass(this.bloom,this.composer.passes.indexOf(this.output)),this.sizePasses()):this.bloom&&=(this.composer.removePass(this.bloom),this.bloom.dispose(),void 0))}setSharpen(e){e!==!!this.sharpen&&(e?(this.sharpen=new ga(Va),this.book?this.composer.insertPass(this.sharpen,this.composer.passes.indexOf(this.book)):this.composer.addPass(this.sharpen),this.sizePasses()):this.sharpen&&=(this.composer.removePass(this.sharpen),this.sharpen.dispose(),void 0))}setBook(e){if(this.bookStyle=e,e===`off`){this.book&&=(this.composer.removePass(this.book),this.book.dispose(),void 0);return}if(!this.book)this.book=new ga({...za,uniforms:Ra(Ia[e])}),this.composer.addPass(this.book);else for(let[t,n]of Object.entries(Ra(Ia[e])))t!==`tDiffuse`&&t!==`resolution`&&(this.book.uniforms[t].value=n.value);this.sizePasses()}setAntialias(e){this.antialias.enabled=e}width=1;height=1;resize(e,t){this.width=e,this.height=t,this.composer.setSize(e,t),this.sizePasses()}sizePasses(){let e=this.renderer.getPixelRatio(),t=1/(this.width*e),n=1/(this.height*e);this.antialias.uniforms.resolution.value.set(t,n),this.sharpen?.uniforms.resolution.value.set(t,n),this.book?.uniforms.resolution.value.set(t,n)}render(e){this.renderer.info.reset(),this.composer.render(e)}},Ga={colosseum:{pc:{pixelRatio:1.5,shadow:`every`,ambientOcclusion:!1,bloom:!1,lampLights:!0,movingShadows:!1,mapLight:!1,mapPointLights:!1,cullBuildings:!1,skyCube:0,bakeMapLight:!1,shadowSamples:5,fighterLight:!1,fighterKeepMetal:!1,fadeWhenNeeded:!1,sharpen:!1,antialias:!0},mobile:{pixelRatio:1.275,shadow:`once`,ambientOcclusion:!1,bloom:!1,lampLights:!0,movingShadows:!1,mapLight:!0,mapPointLights:!0,cullBuildings:!1,skyCube:512,bakeMapLight:!0,shadowSamples:1,fighterLight:!0,fighterKeepMetal:!0,fadeWhenNeeded:!0,sharpen:!0,antialias:!0}},royal:{pc:{pixelRatio:1.5,shadow:`every`,ambientOcclusion:!0,bloom:!0,lampLights:!0,movingShadows:!0,mapLight:!1,mapPointLights:!1,cullBuildings:!1,skyCube:0,bakeMapLight:!1,shadowSamples:5,fighterLight:!1,fighterKeepMetal:!1,fadeWhenNeeded:!1,sharpen:!1,antialias:!0},mobile:{pixelRatio:1.275,shadow:`once`,ambientOcclusion:!1,bloom:!1,lampLights:!1,movingShadows:!1,mapLight:!0,mapPointLights:!1,cullBuildings:!0,skyCube:512,bakeMapLight:!0,shadowSamples:1,fighterLight:!0,fighterKeepMetal:!0,fadeWhenNeeded:!0,sharpen:!0,antialias:!0},mobileBefore:{pixelRatio:1.275,shadow:`hz30`,ambientOcclusion:!0,bloom:!0,lampLights:!0,movingShadows:!0,mapLight:!1,mapPointLights:!1,cullBuildings:!1,skyCube:0,bakeMapLight:!1,shadowSamples:5,fighterLight:!1,fighterKeepMetal:!1,fadeWhenNeeded:!1,sharpen:!1,antialias:!0}}};function Ka(e,t){return Ga[e][t?`mobile`:`pc`]}function qa(e,t){return t?Ga[e].mobileBefore:void 0}var Ja={environment:1.25,sun:1.25,probe:[3.8135,1.763,1.6363,.279,.2171,1.0862,1.2137,-.3469,-.6344],pixelPoints:[`05_Mortar_and_recesses`,`03_Pale_arch_and_coping`]},Ya={mapLightProbe:{value:Ja.probe.map(e=>new R(e,e,e))},mapLightSun:{value:Ja.sun}};function Xa(e){return e.isMeshStandardMaterial===!0&&!e.transparent}function Za(e,t,n){Object.assign(e.uniforms,Ya,t);let r=[n.points===`vertex`?`MAP_LIGHT_POINTS`:``,n.shadowOnce?`MAP_LIGHT_SHADOW_ONCE`:``,n.metalMap?`MAP_LIGHT_METAL_MAP`:``,n.sheen?`MAP_LIGHT_SHEEN`:``,n.baked?`MAP_LIGHT_BAKED\n#define MAP_LIGHT_BAKED_TEXELS ${n.baked.texels}`:``].filter(Boolean).map(e=>`#define ${e}\n`).join(``);e.vertexShader=r+e.vertexShader.replace(`#include <common>`,`#include <common>
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
	#endif`).replace(`#include <lights_fragment_maps>`,``).replace(`#include <lights_fragment_end>`,``).replace(`#include <envmap_fragment>`,``)}var Qa=e=>`map-light-v3:${e.points}:${e.shadowOnce?1:5}:${e.metalMap?`metal-map`:`metal`}:${e.sheen?`sheen`:``}:${e.baked?`baked${e.baked.texels}`:``}`,$a=(e,t)=>Ja.environment*(e.envMap?e.envMapIntensity:t);function eo(e,t,n,r){let i=new tt({name:e.name,color:e.color,map:e.map,vertexColors:e.vertexColors,emissive:e.emissive,emissiveIntensity:e.emissiveIntensity,emissiveMap:e.emissiveMap,alphaMap:e.alphaMap,alphaTest:e.alphaTest,side:e.side,fog:e.fog,flatShading:e.flatShading,depthWrite:e.depthWrite,depthTest:e.depthTest}),a={mapLightEnvironment:{value:$a(e,t)},mapLightMetal:{value:e.metalness},...r?{mapLightBaked:{value:r.texture},mapLightBakedWidth:{value:r.width},mapLightBakedVertices:{value:r.vertices}}:{}},o={...n,metalMap:!1,...r?{baked:{texels:r.texels}}:{}};return i.onBeforeCompile=e=>Za(e,a,o),i.customProgramCacheKey=()=>Qa(o),i.userData.mapLight=!0,r&&(i.userData.baked=!0),i.userData.environment=a.mapLightEnvironment,i.userData.sun=Ya.mapLightSun,i}function to(e,t,n){let r=new tt({name:e.name,map:e.map,vertexColors:e.vertexColors,emissiveMap:e.emissiveMap,alphaMap:e.alphaMap,alphaTest:e.alphaTest,side:e.side,fog:e.fog,flatShading:e.flatShading,transparent:e.transparent,opacity:e.opacity,alphaHash:e.alphaHash,depthWrite:e.depthWrite,depthTest:e.depthTest});r.color=e.color,r.emissive=e.emissive,Object.defineProperty(r,"emissiveIntensity",{configurable:!0,get:()=>e.emissiveIntensity,set:t=>{e.emissiveIntensity=t}});let i=!!(e.map&&e.metalnessMap),a={mapLightEnvironment:{value:no.environment*(e.envMap?e.envMapIntensity:t)},mapLightMetal:{value:e.metalness},...i?{mapLightMetalMap:{value:e.metalnessMap}}:{},mapLightSun:ro.sun,mapLightSheen:ro.sheen},o={...n,metalMap:i,sheen:!0};return r.onBeforeCompile=e=>Za(e,a,o),r.customProgramCacheKey=()=>Qa(o),r.userData.fighterLight=!0,r.userData.source=e,r.userData.environment=a.mapLightEnvironment,r.userData.sun=ro.sun,r.userData.sheen=ro.sheen,r}var no={keepRoles:[`paladin`],keepMetalness:.5,environment:.95,sun:.85,sheen:.03},ro={sun:{value:no.sun},sheen:{value:no.sheen}};function io(e,t){return no.keepRoles.includes(t)||e.metalness>=no.keepMetalness&&!e.metalnessMap}function ao(e,t,n){return!n||e.transparent||t<1}function oo(e,t,n){return t?n&&Ja.pixelPoints.includes(e.name)?`pixel`:`vertex`:`none`}var so={width:2048};function co(e,t){let n={ambient:new I(0,0,0),hemispheres:[],fills:[],points:[]},r=0;return e.updateMatrixWorld(),e.traverseVisible(e=>{let i=e;if(!i.isLight)return;let a=i.color.clone().multiplyScalar(i.intensity);if(i.isAmbientLight)n.ambient.add(a);else if(i.isHemisphereLight){let e=i;n.hemispheres.push({sky:a,ground:e.groundColor.clone().multiplyScalar(e.intensity),direction:new R().setFromMatrixPosition(e.matrixWorld).normalize()})}else if(i.isDirectionalLight){let e=i,o=new R().setFromMatrixPosition(e.target.matrixWorld),s=new R().setFromMatrixPosition(e.matrixWorld).sub(o).normalize();t&&e.castShadow?(n.sun={color:a,direction:s},r++):n.fills.push({color:a,direction:s})}else if(i.isPointLight){let e=i;n.points.push({color:a,position:new R().setFromMatrixPosition(e.matrixWorld),distance:e.distance,decay:e.decay})}}),r>1?void 0:n}var lo=Ja.probe;function uo(e,t,n,r,i,a,o,s,c,l){let u=e.ambient.r,d=e.ambient.g,f=e.ambient.b;for(let t of e.hemispheres){let e=.5*(n*t.direction.x+r*t.direction.y+i*t.direction.z)+.5;u+=t.ground.r+(t.sky.r-t.ground.r)*e,d+=t.ground.g+(t.sky.g-t.ground.g)*e,f+=t.ground.b+(t.sky.b-t.ground.b)*e}for(let t of e.fills){let e=Math.min(1,Math.max(0,n*t.direction.x+r*t.direction.y+i*t.direction.z));u+=t.color.r*e,d+=t.color.g*e,f+=t.color.b*e}if(t.points)for(let t of e.points){let e=t.position.x-a,c=t.position.y-o,l=t.position.z-s,p=Math.hypot(e,c,l);if(p===0)continue;let m=1/Math.max(p**+t.decay,.01);if(t.distance>0){let e=Math.min(1,Math.max(0,1-(p/t.distance)**4));m*=e*e}let h=Math.min(1,Math.max(0,(n*e+r*c+i*l)/p))*m;u+=t.color.r*h,d+=t.color.g*h,f+=t.color.b*h}let p=t.environment*(lo[0]*.886227+lo[1]*2*.511664*r+lo[2]*2*.511664*i+lo[3]*2*.511664*n+lo[4]*2*.429043*n*r+lo[5]*2*.429043*r*i+lo[6]*(.743125*i*i-.247708)+lo[7]*2*.429043*n*i+lo[8]*.429043*(n*n-r*r)),m=1-t.metal;c[l]=u*m+p,c[l+1]=d*m+p,c[l+2]=f*m+p,c[l+3]=e.sun?n*e.sun.direction.x+r*e.sun.direction.y+i*e.sun.direction.z:0}function fo(e,t,n,r,i=!1,a){let o=e.geometry,s=o.getAttribute(`position`),c=o.getAttribute(`normal`),l=e.isInstancedMesh===!0,u=a??(l?e.instanceMatrix.array:void 0),d=l?a?a.length/16:e.count:1,f=s.count,p=r?2:1,m=new Float32Array(f*d*p*4);e.updateWorldMatrix(!0,!1);let h=new st,g=new st,_=new at,v=h.elements,y=_.elements,b=i?-1:1;for(let i=0;i<d;i++){l?(g.fromArray(u,i*16),h.multiplyMatrices(e.matrixWorld,g)):h.copy(e.matrixWorld),_.getNormalMatrix(h);for(let e=0;e<f;e++){let a=s.getX(e),o=s.getY(e),l=s.getZ(e),u=c.getX(e),d=c.getY(e),h=c.getZ(e),g=v[0]*a+v[4]*o+v[8]*l+v[12],_=v[1]*a+v[5]*o+v[9]*l+v[13],x=v[2]*a+v[6]*o+v[10]*l+v[14],S=y[0]*u+y[3]*d+y[6]*h,C=y[1]*u+y[4]*d+y[7]*h,w=y[2]*u+y[5]*d+y[8]*h,T=Math.hypot(S,C,w)||1;S*=b/T,C*=b/T,w*=b/T;let E=(i*f+e)*p*4;uo(t,n,S,C,w,g,_,x,m,E),r&&uo(t,n,-S,-C,-w,g,_,x,m,E+4)}}return{data:m,texels:p,vertices:f,count:d}}function po(e,t=so.width){let n=e.vertices*e.count*e.texels,r=Math.max(1,Math.ceil(n/t)),i=new Float32Array(t*r*4);return i.set(e.data),{data:i,height:r}}function mo(e,t=so.width){let{data:n,height:r}=po(e,t),i=new Ie(n,t,r,Fe,qe);return i.internalFormat=`RGBA16F`,i.minFilter=i.magFilter=kt,i.generateMipmaps=!1,i.needsUpdate=!0,i.onUpdate=()=>{i.image.data=null},i}var ho={margin:2},go=new Oe,_o=new st;function vo(e){return go.setFromProjectionMatrix(_o.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse))}var yo=class{mesh;total;spheres;original;shown;constructor(e,t=ho.margin){this.mesh=e,this.total=e.count,this.original=e.instanceMatrix.array.slice(0,this.total*16),this.shown=[...Array(this.total).keys()],e.geometry.boundingSphere||e.geometry.computeBoundingSphere();let n=e.geometry.boundingSphere,r=new st,i=new st;e.updateWorldMatrix(!0,!1),this.spheres=this.shown.map(a=>{i.multiplyMatrices(e.matrixWorld,r.fromArray(this.original,a*16));let o=n.clone().applyMatrix4(i);return o.radius+=t,o})}pick(e,t){let n=[];for(let r=0;r<this.total;r++)(!t||t(r))&&(!e||e.intersectsSphere(this.spheres[r]))&&n.push(r);return n}show(e){if(e.length===this.shown.length&&e.every((e,t)=>e===this.shown[t]))return!1;let t=this.mesh.instanceMatrix.array;e.forEach((e,n)=>t.set(this.original.subarray(e*16,e*16+16),n*16)),this.mesh.count=e.length,this.mesh.instanceMatrix.clearUpdateRanges(),this.mesh.instanceMatrix.addUpdateRange(0,e.length*16),this.mesh.instanceMatrix.needsUpdate=!0;let n=this.mesh.geometry.getAttribute(`mapLightInstance`);return n&&(e.forEach((e,t)=>{n.array[t]=e}),n.clearUpdateRanges(),n.addUpdateRange(0,e.length),n.needsUpdate=!0),this.shown=[...e],!0}showAll(){return this.show([...Array(this.total).keys()])}get count(){return this.shown.length}},bo={height:2.8,base:`#ffc12e`,top:`#ffffff`,sheets:[-.1,.1],groundWidth:1.2,rise:.22,fade:.45,gain:.8},xo=`
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}`,So=`
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
}`;function Co(e=!1,t=0){let n=bo;return new pt({vertexShader:xo,fragmentShader:So,uniforms:{uBase:{value:new I(n.base)},uTop:{value:new I(n.top)},uTime:{value:0},uSeed:{value:t},uFade:{value:0},uGain:{value:n.gain},uGround:{value:+!!e}},transparent:!0,depthWrite:!1,side:2,blending:2})}function wo(e,t,n){let r=bo,i=new U,a=t%17*1.37;for(let t of r.sheets){let n=new H(new mt(e,r.height).translate(0,r.height/2,0).rotateY(Math.PI/2),Co(!1,a+t*9));n.position.x=t,i.add(n)}let o=new H(new mt(r.groundWidth,e).rotateX(-Math.PI/2),Co(!0,a));return o.position.y=.03,i.add(o),i.userData.born=n,i}var To=e=>{let t=Math.max(0,Math.min(1,e));return t*t*(3-2*t)};function Eo(t,n,r){let i=bo,a=e(n),o=To((r-t.userData.born)/i.rise),s=Math.max(0,Math.min(1,n.life/i.fade));t.position.set(n.pos.x,0,n.pos.z),t.rotation.y=Math.atan2(-a.z,a.x);for(let e of t.children){let t=e,n=t.material,i=n.uniforms.uGround.value>.5;i||(t.scale.y=Math.max(.001,o)),n.uniforms.uTime.value=r,n.uniforms.uFade.value=i?s*o:s}}var Do={flare:`#ffffff`,glow:`#fff0c2`,cross:`#fff6d8`,streak:`#ffe39a`,ember:`#ffc44f`,ring:`#fff0c4`,streaks:9,embers:14},Oo=e=>{let t=Math.min(1,Math.max(0,e));return t*t*(3-2*t)};function ko(e){let t=Math.abs(Math.floor(e))%233280+1;return()=>(t=(t*9301+49297)%233280,t/233280)}function Ao(e){return new V({color:e,transparent:!0,opacity:0,depthWrite:!1,depthTest:!1,side:2})}function jo(e){let t=new U,n=ko(e);t.name=`clash-spark`;let r=new Dt(1,4),i=new Dt(1,28),a=new Ot(.9,1,48),o=(e,n,r,i)=>{let a=new H(e,Ao(n));a.renderOrder=r,a.userData.clash=i,t.add(a)};o(a,Do.ring,20,{kind:`ring`,angle:0,length:1,speed:1});let s=(n()-.5)*.5;for(let e=0;e<Do.streaks;e++)o(r,Do.streak,21,{kind:`streak`,angle:(e+n()*.8)/Do.streaks*Math.PI*2,length:.45+n()*.6,speed:1});for(let e=0;e<Do.embers;e++)o(r,Do.ember,22,{kind:`ember`,angle:n()*Math.PI*2,length:1,speed:.75+n()*.7});return o(i,Do.glow,22,{kind:`glow`,angle:0,length:1,speed:1}),o(i,Do.flare,23,{kind:`flare`,angle:0,length:1,speed:1}),o(r,Do.cross,24,{kind:`cross`,angle:s,length:1.3,speed:1}),o(r,Do.cross,24,{kind:`cross`,angle:s+Math.PI/2,length:.95,speed:1}),t}function Mo(e,t,n,r,i=0){e.rotation.z=t-Math.PI/2,e.scale.set(r,n/2,1),e.position.set(Math.cos(t)*(i+n/2),Math.sin(t)*(i+n/2),0)}function No(e,t,n,r){let i=Math.min(1,Math.max(0,t)),a=n;e.quaternion.copy(r.quaternion);let o=.7+.3*Oo(i/.25),s=1-.65*i;for(let t of e.children){let e=t,n=e.userData.clash;if(n.kind===`flare`)e.scale.setScalar(a*.26*(1-.5*Oo(i/.35))),e.material.opacity=1-Oo(i/.35);else if(n.kind===`glow`)e.scale.setScalar(a*.55*(1-.4*Oo(i/.5))),e.material.opacity=.5*(1-Oo(i/.5));else if(n.kind===`cross`)e.rotation.z=n.angle,e.position.set(0,0,0),e.scale.set(a*n.length*(1-.35*i),a*.055*s,1),e.material.opacity=1-Oo(i/.65);else if(n.kind===`streak`)Mo(e,n.angle,a*n.length*o,a*.035*s,a*.08),e.material.opacity=(1-i)**1.3;else if(n.kind===`ember`){let t=a*1.2*n.speed*(1-(1-i)*(1-i)),r=a*.6*i*i,o=Math.cos(n.angle)*t,s=Math.sin(n.angle)*t-r;e.rotation.z=n.angle-Math.PI/2,e.position.set(o,s,0),e.scale.set(a*.022*(1-.5*i),a*.09*(1-.4*i),1),e.material.opacity=i<.1?i/.1:1-(i-.1)/.9}else e.scale.setScalar(a*(.3+1.05*Oo(i/.4))),e.material.opacity=.45*(1-Oo(i/.4))}}var $={meditation:{color:`#a86cff`,light:`#dcc2ff`,circle:{radius:1.35,spin:.32,lift:.05,strength:1},sparks:{count:30,radius:[.42,.9],height:[.08,2.2],life:[1.7,2.6],size:[.11,.2],twinkle:7,glow:2.1},fadeIn:.3,fadeOut:.3},stance:{samurai:{color:`#dfe6ff`,light:`#ffffff`},swordsman:{color:`#ff3326`,light:`#ffae96`},ninja:{color:`#8ccc80`,light:`#b4f0a6`,shadow:!0,rim:{color:`#4f2790`,light:`#8a5fd4`,strength:.75}},paladin:{color:`#ffc31a`,light:`#fff09a`},mage:{color:`#a86cff`,light:`#dcc2ff`},healer:{color:`#ff5aad`,light:`#ffc4e1`},gunner:{color:`#9c5a24`,light:`#e0a868`}},heal:{color:`#5cff86`,light:`#c8ffd6`,pluses:{count:10,radius:[.34,.72],height:[.3,2.2],life:[.9,1.3],size:[.15,.21],width:.045,glow:1.9},sparks:{count:12,radius:[.3,.75],height:[.2,2],life:[.8,1.2],size:[.08,.13],twinkle:9,glow:1.9},fadeIn:.12,fadeOut:.35}};function Po(e=!1){return new V({vertexColors:!0,transparent:!0,depthWrite:!1,side:2,blending:e?3:2,premultipliedAlpha:e})}var Fo=(e,t)=>{let n=Math.sin(e*127.1+t*311.7)*43758.5453;return n-Math.floor(n)},Io=(e,t)=>e[0]+(e[1]-e[0])*t;function Lo(e,t,n,r,i,a,o,s,c){let l=r-t,u=i-n,d=Math.hypot(l,u)||1,f=-u/d*a,p=l/d*a,m=e.position.length/3;for(let[a,l,u]of[[t-f,n-p,0],[t,n,o],[t+f,n+p,0],[r-f,i-p,0],[r,i,o],[r+f,i+p,0]])e.position.push(a,s,l),e.colour.push(c.r*u,c.g*u,c.b*u);e.index.push(m,m+3,m+1,m+1,m+3,m+4,m+1,m+4,m+2,m+2,m+4,m+5)}function Ro(e,t,n,r,i,a,o=72){let s=e.position.length/3;for(let s=0;s<=o;s++){let c=s/o*Math.PI*2,l=Math.cos(c),u=Math.sin(c);for(let[o,s]of[[-1,0],[0,r],[1,0]])e.position.push(l*(t+o*n),i,u*(t+o*n)),e.colour.push(a.r*s,a.g*s,a.b*s)}for(let t=0;t<o;t++)for(let n=0;n<2;n++){let r=s+t*3+n,i=r+3;e.index.push(r,i,r+1,r+1,i,i+1)}}function zo(e,t,n,r,i,a=36){let o=e.position.length/3;e.position.push(0,r,0),e.colour.push(i.r*n,i.g*n,i.b*n);for(let n=0;n<=a;n++){let i=n/a*Math.PI*2;e.position.push(Math.cos(i)*t,r,Math.sin(i)*t),e.colour.push(0,0,0)}for(let t=0;t<a;t++)e.index.push(o,o+1+t,o+2+t)}function Bo(e){let t=new Ct;return t.setAttribute(`position`,new L(e.position,3)),t.setAttribute(`color`,new L(e.colour,3)),t.setIndex(e.index),t}function Vo(e){let t={position:[],colour:[],index:[]},n=new I(e.color),r=new I(e.light);zo(t,1,.1,0,n),Ro(t,.97,.028,1,0,r),Ro(t,.86,.016,.85,0,n);for(let e=0;e<18;e++){let n=e/18*Math.PI*2,i=Math.cos(n),a=Math.sin(n),o=.915;if(e%2)Lo(t,i*.885,a*.885,i*.9450000000000001,a*.9450000000000001,.012,.9,0,r);else{let e=.022,n=-a,s=i;Lo(t,i*.893,a*.893,i*o+n*e,a*o+s*e,.008,.8,0,r),Lo(t,i*o+n*e,a*o+s*e,i*.937,a*.937,.008,.8,0,r),Lo(t,i*.937,a*.937,i*o-n*e,a*o-s*e,.008,.8,0,r),Lo(t,i*o-n*e,a*o-s*e,i*.893,a*.893,.008,.8,0,r)}}Ro(t,.6,.016,.85,0,n);for(let e of[0,Math.PI/3])for(let r=0;r<3;r++){let i=e+r/3*Math.PI*2+Math.PI/2,a=i+Math.PI*2/3;Lo(t,Math.cos(i)*.6,Math.sin(i)*.6,Math.cos(a)*.6,Math.sin(a)*.6,.014,.75,0,n)}return Ro(t,.25,.012,.7,0,r,48),zo(t,.16,.45,0,r,24),Bo(t)}var Ho=9;function Uo(e,t){for(let n=0;n<4;n++){let r=t+1+n*2,i=t+2+n*2,a=t+1+(n+1)%4*2;e.push(t,r,i,t,i,a)}}var Wo=12;function Go(e,t){for(let n of[0,6]){let r=t+n;e.push(r,r+3,r+1,r+1,r+3,r+4,r+1,r+4,r+2,r+2,r+4,r+5)}}function Ko(e,t,n=!1){let r=e*Ho+t*Wo,i=[];for(let t=0;t<e;t++)Uo(i,t*Ho);for(let n=0;n<t;n++)Go(i,e*Ho+n*Wo);let a=new Ct;a.setAttribute(`position`,new et(new Float32Array(r*3),3)),a.setAttribute(`color`,new et(new Float32Array(r*3),3)),a.setIndex(i),a.boundingSphere=new Ve(new R(0,1.15,0),1.9);let o=new H(a,Po(n));return o.renderOrder=7,{mesh:o,stars:e,pluses:t}}var qo=new R,Jo=new R,Yo=new R,Xo=new R,Zo=new I,Qo=new Map,$o=e=>Qo.get(e)??Qo.set(e,new I(e)).get(e);function es(e,t,n,r,i,a){e.setXYZ(n,r.x,r.y,r.z),t.setXYZ(n,a.r,a.g,a.b);for(let o=0;o<4;o++){let s=o*Math.PI/2,c=Math.cos(s),l=Math.sin(s);Yo.copy(r).addScaledVector(qo,c*i).addScaledVector(Jo,l*i),e.setXYZ(n+1+o*2,Yo.x,Yo.y,Yo.z),t.setXYZ(n+1+o*2,0,0,0);let u=s+Math.PI/4,d=i*.2;Yo.copy(r).addScaledVector(qo,Math.cos(u)*d).addScaledVector(Jo,Math.sin(u)*d),e.setXYZ(n+2+o*2,Yo.x,Yo.y,Yo.z),t.setXYZ(n+2+o*2,a.r*.25,a.g*.25,a.b*.25)}}function ts(e,t,n,r,i,a,o){for(let[s,c,l]of[[0,qo,Jo],[6,Jo,qo]]){let u=0;for(let d of[-1,1])for(let f of[-1,0,1]){Yo.copy(r).addScaledVector(c,d*i).addScaledVector(l,f*a*(f?1.6:0));let p=+!f;e.setXYZ(n+s+u,Yo.x,Yo.y,Yo.z),t.setXYZ(n+s+u,o.r*p,o.g*p,o.b*p),u++}}}function ns(e,t,n,r,i,a){let o=e.mesh.geometry.getAttribute(`position`),s=e.mesh.geometry.getAttribute(`color`);qo.set(1,0,0).applyQuaternion(i.quaternion),Jo.set(0,1,0).applyQuaternion(i.quaternion);let c=$o(t.color),l=$o(t.light),u=(e,t,n)=>{let i=((r/Io(t.life,Fo(e,n+1))+Fo(e,n+2))%1+1)%1,a=Fo(e,n+3)*Math.PI*2+i*.9,o=Io(t.radius,Fo(e,n+4));return Xo.set(Math.cos(a)*o,Io(t.height,i),Math.sin(a)*o),Math.sin(Math.PI*i)**1.2};for(let i=0;i<e.stars;i++){let e=u(i+a*97,t.sparks,0),d=.5+.5*Math.sin(r*t.sparks.twinkle+Fo(i,9)*20)**2;Zo.copy(c).lerp(l,Fo(i,7)).multiplyScalar(n*e*d*t.sparks.glow),es(o,s,i*Ho,Xo,Io(t.sparks.size,Fo(i,5))*(.8+.4*d),Zo)}let d=t.pluses;for(let t=0;d&&t<e.pluses;t++){let r=u(t+a*53,d,20);Zo.copy(c).lerp(l,Fo(t,27)*.5).multiplyScalar(n*r*d.glow),ts(o,s,e.stars*Ho+t*Wo,Xo,Io(d.size,Fo(t,25)),d.width,Zo)}o.needsUpdate=!0,s.needsUpdate=!0}function rs(e=$.stance.samurai){let t=new U;t.name=`meditation-aura`,t.userData.spec={...$.meditation,color:e.color,light:e.light};let n=new H(Vo(e),Po(e.shadow));if(n.scale.setScalar($.meditation.circle.radius),n.position.y=$.meditation.circle.lift,n.renderOrder=6,t.add(n,Ko($.meditation.sparks.count,0,e.shadow).mesh),e.rim){let n=new H(Vo(e.rim),Po());n.scale.setScalar($.meditation.circle.radius),n.position.y=$.meditation.circle.lift+.002,n.renderOrder=6,n.userData.strength=e.rim.strength,t.add(n)}return t.visible=!1,t}function is(e,t,n,r,i){if(e.visible=t>.005,!e.visible)return;let[a,o,s]=e.children;a.rotation.y=n*$.meditation.circle.spin,a.scale.setScalar($.meditation.circle.radius*(.82+.18*t));let c=$.meditation.circle.strength*t*(.86+.14*Math.sin(n*2.2));a.material.color.setScalar(c),s&&(s.rotation.y=a.rotation.y,s.scale.copy(a.scale),s.material.color.setScalar(c*s.userData.strength)),ns({mesh:o,stars:$.meditation.sparks.count,pluses:0},e.userData.spec??$.meditation,t,n,r,i)}function as(){let e=new U;return e.name=`heal-aura`,e.add(Ko($.heal.sparks.count,$.heal.pluses.count).mesh),e.visible=!1,e}function os(e,t,n,r,i){if(e.visible=t>.005,!e.visible)return;let a=e.children[0];ns({mesh:a,stars:$.heal.sparks.count,pluses:$.heal.pluses.count},$.heal,t,n,r,i)}var ss=.6+F.puckRadius,cs={ally:new I(`#a9f878`),enemy:new I(`#ff7869`)},ls={radius:1.45,spread:72*Math.PI/180,thickness:.15,lateral:.065,centreY:1.05,rootFade:.03},us=[0,Math.PI/2,Math.PI/4,-Math.PI/4],ds=[M,j,ee,P],fs=[new I(`#ffc66e`),new I(`#ff7762`)];function ps(e){let t=[],n=[],r=(e,r)=>{t.push(e.x,e.y,e.z),n.push(r,r,r)};for(let t=0;t<e.length-1;t++){let n=e[t],i=e[t+1],a=n.centre.clone().addScaledVector(n.across,-n.half),o=n.centre.clone().addScaledVector(n.across,n.half),s=i.centre.clone().addScaledVector(i.across,-i.half),c=i.centre.clone().addScaledVector(i.across,i.half);r(a,0),r(n.centre,n.glow),r(i.centre,i.glow),r(a,0),r(i.centre,i.glow),r(s,0),r(o,0),r(i.centre,i.glow),r(n.centre,n.glow),r(o,0),r(c,0),r(i.centre,i.glow)}let i=new Ct;return i.setAttribute(`position`,new L(t,3)),i.setAttribute(`color`,new L(n,3)),i}var ms=[[-.95,0],[-.34,.5],[.08,1],[.5,.8],[1.05,0]];function hs(e,t,n,r,i,a){let o=[],s=[],c=e=>{o.push(e.point.x,e.point.y,e.point.z),s.push(e.glow,e.glow,e.glow)};for(let o of[1,-1]){let s=[];for(let c=0;c<=40;c++){let l=c/40*2-1,u=l*t,d=Math.max(0,1-l*l),f=n*d**.55,p=.62+.38*d**.35,m=r*d**.5;s.push(ms.map(([t,n])=>{let r=e+t*f,s=i(r*Math.sin(u),r*Math.cos(u),o*m*n);return{point:s,glow:n*p*a(s)}}))}for(let e=0;e<40;e++)for(let t=0;t<ms.length-1;t++)c(s[e][t]),c(s[e][t+1]),c(s[e+1][t+1]),c(s[e][t]),c(s[e+1][t+1]),c(s[e+1][t])}let l=new Ct;return l.setAttribute(`position`,new L(o,3)),l.setAttribute(`color`,new L(s,3)),l}var gs=e=>new V({color:`#ffffff`,vertexColors:!0,transparent:!0,opacity:e,depthWrite:!1,side:2,blending:2}),_s=.62;function vs(){let e=ls,t=new U,n=e=>Math.max(0,Math.min(1,e)),r=e=>{let t=n(e);return t*t*(3-2*t)};for(let n of us){let i=Math.cos(n),a=Math.sin(n);t.add(new H(hs(e.radius,e.spread,e.thickness,e.lateral,(t,n,r)=>new R(t*i-r*a,e.centreY+t*a+r*i,n),t=>r(t.y/e.rootFade)),gs(_s)))}let i=new H(new De(.1,10,8),new V({color:`#ffffff`,transparent:!0,opacity:.55,depthWrite:!1,blending:2}));i.position.set(0,e.centreY,0),t.add(i);let a=[];for(let e=0;e<=10;e++){let t=1.1-e/10*3.4,i=r(n((1-Math.abs(t+.6)/2)/.5))*.6;a.push({centre:new R(0,.04,t),across:new R(1,0,0),half:.19*(.5+.5*i),glow:i})}return t.add(new H(ps(a),gs(.8))),t}var ys=new I(`#ffffff`),bs={taper:.935,height:.4583,floorGap:.085,coreRadius:.59,coreThickness:.035,coreLift:.0015,bandRadius:.957,bandThickness:.075,bandAt:.648,glowInner:1.18,glowOuter:1.31,glowLift:.025,trailRadius:.59,trailCount:14,trailLift:.06},xs=e=>e.isMesh===!0&&[e.material].flat().some(e=>e.name.startsWith(`Yuru_Line`)),Ss=[`rift-arena`,`blender-harbour-city`,`terraced-valley`,`harbour-water`],Cs=`EpicCity_TwilightSky`,ws=class{canvas;mapId;renderer;ready;scene=new ze;camera=new Se(60,1,.1,850);yaw=Math.PI/2;pitch=.58;gunPitch=.12;fighters=new Map;bench=[];viewing=0;avatar;setAvatar(e){this.avatar=e&&{id:e.id,look:{...e.look}}}footsteps=new t;steps=[];takeSteps(){let e=this.steps;return this.steps=[],e}get bookStyle(){return this.effects.bookStyle}setBook(e){this.effects.setBook(e)}avatarOf(e){return this.avatar&&e.id===this.avatar.id&&pe()===`human`?this.avatar.look:void 0}seatActions={ready:e=>!(e.role===`samurai`&&!pr())&&!(pe()===`human`&&!Ft(e.role))&&!(t=>t&&!Xt(t,e.role))(this.avatarOf(e)),look:e=>{let t=this.avatarOf(e);return t?oe(t):``},create:e=>this.createFighter(e),park:e=>{this.scene.remove(e.mesh,e.ring,e.shadow,e.heal,e.barrier),e.calm&&this.scene.remove(e.calm)},unpark:e=>{Object.assign(e,{healLevel:0,calmLevel:0,opacity:1}),this.scene.add(e.mesh,e.ring,e.shadow,e.heal,e.barrier),e.calm&&this.scene.add(e.calm)}};transient=new Map;puck=new U;puckTint=new I(ge[0].color);puckParts=[];threatRing;threatDisplay=y();reachFan;coreBand;bodyRing;reachFanLevel=0;reachFanRole;corePulse=0;trail=[];target=new R;shake=new R;lastPhase=``;projection=new R;effects;effectShaders=new U;shadowElapsed=0;benchmarkMode=null;benchmarkSaved;setBenchmark(e){let t=this.benchmarkSaved,n=this.programKey();if(t){for(let e of t.hidden)e.visible=!0;this.benchmarkSaved=void 0}if(this.benchmarkMode=e,this.applyQuality(e?.quality?{...this.baseQuality,...e.quality}:this.baseQuality),e){let t={hidden:[]};if(e.hideScenery)for(let e of Ss){let n=this.scene.getObjectByName(e);n?.visible&&(n.visible=!1,t.hidden.push(n))}if(e.hideOutlines)for(let e of[...this.fighters.values(),...this.bench])e.mesh.traverse(e=>{xs(e)&&e.visible&&(e.visible=!1,t.hidden.push(e))});this.benchmarkSaved=t}else{for(let e of this.plainMaterials.values())e.dispose();this.plainMaterials.clear()}if(n!==this.programKey()){let t=this.renderer.getRenderTarget();this.renderer.setRenderTarget(e?.direct?null:this.effects.composer.readBuffer),this.renderer.compile(this.scene,this.camera),this.renderer.setRenderTarget(t)}}benchmarkOptions(){let e=this.baseQuality;return{baked:e.bakeMapLight&&this.bakes.size>0,mobile:this.mobileDevice,pixelRatio:e.pixelRatio,outlines:[...this.fighters.values()].some(e=>{let t=!1;return e.mesh.traverse(e=>{xs(e)&&(t=!0)}),t}),gtao:Ga[this.mapId].pc.ambientOcclusion&&!e.ambientOcclusion,before:qa(this.mapId,this.mobileDevice)}}programKey(){return`${!!this.benchmarkMode?.direct}:${this.lamps.filter(e=>e.visible).length}:${this.mapMaterialKey()}:${this.skyMesh?.visible}:${this.fighterMaterialKey()}`}mapMeshes=[];lightMaterials=new Map;plainMaterials=new Map;mapMaterialKey(){let e=this.benchmarkMode;if(e?.plainMaterials)return`plain`;if(!this.quality.mapLight||e?.standardMaterials)return`standard`;let t=e?.mapPointLights??this.quality.mapPointLights,n=e?.mapPixelPoints??!0,r=this.quality.bakeMapLight&&this.bakes.size>0&&t===this.baseQuality.mapPointLights&&n;return`light:${t}:${n}:${this.quality.shadowSamples}:${r}`}applyMapMaterials(){let e=this.mapMaterialKey(),[,t,n,r,i]=e.split(`:`),a=r===`1`;for(let{mesh:r,original:o}of this.mapMeshes){let s=o=>e===`plain`?this.plainOf(o):e!==`standard`&&r!==this.water&&Xa(o)?this.lightOf(o,oo(o,t===`true`,n===`true`),a,i===`true`?r:void 0):o;r.material=Array.isArray(o)?o.map(s):s(o)}}lightOf(e,t,n,r){let i=r&&this.bakes.get(r),a=`${e.uuid}:${t}:${n}${i?`:${r.uuid}`:``}`,o=this.lightMaterials.get(a);return o||this.lightMaterials.set(a,o=eo(e,this.scene.environmentIntensity,{points:t,shadowOnce:n},i)),o}makeEnvironment(){let e=new la,t=new Lt(this.renderer);this.scene.environment=t.fromScene(e,.06).texture,e.dispose(),t.dispose()}bakes=new Map;bakeMs=0;bakeMap(){let e=this.quality;if(!e.mapLight||!e.bakeMapLight)return;let t=performance.now(),n=co(this.scene,this.renderer.shadowMap.enabled);if(!n)return;let r=new Map(this.culls.map(e=>[e.mesh,e])),i=new Map;for(let{mesh:e}of this.mapMeshes)i.set(e.geometry,(i.get(e.geometry)??0)+1);for(let{mesh:t,original:a}of this.mapMeshes){if(t===this.water||Array.isArray(a)||!Xa(a)||this.bakes.has(t))continue;let o=a,s=t.isInstancedMesh===!0,c=r.get(t)?.original,l=s?c?c.length/16:t.count:1,u=t.geometry.getAttribute(`position`).count*l*(o.side===2?2:1);if(Math.ceil(u/so.width)>this.renderer.capabilities.maxTextureSize)continue;let d={environment:$a(o,this.scene.environmentIntensity),metal:o.metalness,points:oo(o,e.mapPointLights,!0)===`vertex`},f=()=>fo(t,n,d,o.side===2,o.side===1,c),p=f();if(s){if((i.get(t.geometry)??0)>1){let e=new Ct,n=t.geometry;for(let[t,r]of Object.entries(n.attributes))e.setAttribute(t,r);e.setIndex(n.index);for(let t of n.groups)e.addGroup(t.start,t.count,t.materialIndex);e.boundingSphere=n.boundingSphere,e.boundingBox=n.boundingBox,t.geometry=e}let e=new $e(Float32Array.from({length:p.count},(e,t)=>t),1);e.setUsage(Ne),t.geometry.setAttribute(`mapLightInstance`,e)}this.bakes.set(t,{texture:mo(p),width:so.width,vertices:p.vertices,texels:p.texels,redo:f})}this.bakeMs=performance.now()-t}rebake(){for(let e of this.bakes.values())e.texture.image.data=po(e.redo(),e.width).data,e.texture.needsUpdate=!0}bakeReport(){let e=0,t=0,n=0;for(let[r,i]of this.bakes)e+=i.texture.image.width*i.texture.image.height,r.isInstancedMesh&&t++,i.texels===2&&n++;return{meshes:this.bakes.size,instanced:t,doubleSided:n,texels:e,megabytes:+(e*8/1e6).toFixed(1),milliseconds:Math.round(this.bakeMs)}}fighterLightMaterials=new Map;fighterMaterialKey(){let e=this.quality;return`${e.fighterLight?`light:${e.mapPointLights}:${e.shadowSamples}:${e.fighterKeepMetal}`:`standard`}:${e.fadeWhenNeeded}`}applyFighterMaterials(){for(let e of[...this.fighters.values(),...this.bench])this.dressFighter(e)}dressFighter(e){let t=this.quality,n=new Set;for(let r of e.parts){let i=e=>e.isMeshStandardMaterial===!0,a=n=>t.fighterLight&&i(n)&&!(t.fighterKeepMetal&&io(n,e.role))?this.fighterLightOf(n,t.mapPointLights,t.shadowSamples===1):n;r.mesh.material=Array.isArray(r.original)?r.original.map(a):a(r.original);for(let e of[r.mesh.material].flat())n.add(e)}e.fadeMaterials=[...n]}fighterLightOf(e,t,n){let r=`${e.uuid}:${t}:${n}`,i=this.fighterLightMaterials.get(r);return i||this.fighterLightMaterials.set(r,i=to(e,this.scene.environmentIntensity,{points:t?`vertex`:`none`,shadowOnce:n})),i}plainOf(e){let t=e;if(!t.isMeshStandardMaterial)return e;let n=this.plainMaterials.get(e);if(!n){let r=t.color.clone();t.emissive&&t.emissiveIntensity>0&&r.add(t.emissive.clone().multiplyScalar(t.emissiveIntensity)),n=new V({color:r,map:t.map,vertexColors:t.vertexColors,side:t.side,transparent:t.transparent,opacity:t.opacity,alphaTest:t.alphaTest,alphaMap:t.alphaMap,depthWrite:t.depthWrite,depthTest:t.depthTest,fog:t.fog}),this.plainMaterials.set(e,n)}return n}async prepareMapShaders(){let e=this.renderer.getRenderTarget();this.renderer.setRenderTarget(this.effects.composer.readBuffer);let t;try{t=Promise.all(Ss.map(e=>this.scene.getObjectByName(e)).filter(e=>!!e).map(e=>this.renderer.compileAsync(e,this.camera,this.scene)))}finally{this.renderer.setRenderTarget(e)}await t}skyMesh;skyCube;skyColor=new I(`#203d61`);cacheSky(e){this.skyMesh&&e&&!this.skyCube&&(this.skyCube=new Mt(e,{type:Me,generateMipmaps:!1,minFilter:nt,magFilter:nt,depthBuffer:!1}),this.drawSkyCube())}drawSkyCube(){let e=this.skyMesh,t=this.skyCube;if(!e||!t)return;let n=e.parent,r=new ze,i=e.visible;r.add(e),e.visible=!0,new Ce(1,1e3,t).update(this.renderer,r),e.visible=i,n.add(e)}applySky(){let e=this.skyMesh;if(!e)return;let t=this.benchmarkMode,n=!!t?.hideSky,r=!!this.skyCube&&this.quality.skyCube>0&&!t?.liveSky;e.visible=!n&&!r,this.scene.background=r&&!n?this.skyCube.texture:this.skyColor}culls=[];cullShapes(e){if(!this.culls.length)return;let t=this.renderer.shadowMap.autoUpdate||this.renderer.shadowMap.needsUpdate,n=this.quality.cullBuildings&&this.quality.shadow===`once`&&!this.benchmarkMode?.drawAllBuildings&&!t,r=this.benchmarkMode?.halfShapes?e=>e%2==0:void 0,i=n?vo(e):void 0;if(!i&&!r){if(!this.cullsFull){for(let e of this.culls)e.showAll();this.cullsFull=!0}return}this.cullsFull=!1;for(let e of this.culls)e.show(e.pick(i,r))}cullsFull=!0;quality;baseQuality;applyQuality(e){if(e!==this.quality){this.quality=e;let t=Math.min(devicePixelRatio,e.pixelRatio);this.renderer.getPixelRatio()!==t&&(this.renderer.setPixelRatio(t),this.resize()),this.renderer.shadowMap.autoUpdate=e.shadow===`every`,this.shadowBaked=!1,this.shadowElapsed=0,this.renderer.shadowMap.needsUpdate=!0,this.puckDisc.castShadow=e.movingShadows,this.effects.setBloom(e.bloom);for(let t of this.lamps)t.visible=e.lampLights;this.effects.setAmbientOcclusion(e.ambientOcclusion),this.effects.setSharpen(e.sharpen),this.effects.setAntialias(e.antialias)}this.applyMapMaterials(),this.applySky(),this.applyFighterMaterials()}lamps=[];puckDisc;shadowBaked=!1;sceneryReady=!1;viewportWidth=1;viewportHeight=1;water;mobileDevice=/Android|iPhone|iPad|iPod/i.test(navigator.userAgent)||navigator.platform===`MacIntel`&&navigator.maxTouchPoints>1;constructor(e,t=`royal`){this.canvas=e,this.mapId=t;let n=E(t),i=n.shape===`circle`;this.renderer=new Jt({canvas:e,antialias:!this.mobileDevice,alpha:!1,powerPreference:`high-performance`}),e.addEventListener(`webglcontextrestored`,()=>{this.makeEnvironment(),this.drawSkyCube(),this.rebake()}),this.baseQuality=this.quality=Ka(t,this.mobileDevice),this.renderer.setPixelRatio(Math.min(devicePixelRatio,this.quality.pixelRatio)),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.autoUpdate=this.quality.shadow===`every`,this.renderer.shadowMap.needsUpdate=!0,this.renderer.shadowMap.type=1,this.renderer.outputColorSpace=we,this.renderer.toneMapping=4,this.renderer.toneMappingExposure=.92,this.scene.background=this.skyColor,this.scene.fog=new Xe(`#48658a`,.0034),this.scene.add(new Qe(i?`#c5d4ec`:`#88a8de`,i?`#645342`:`#323043`,i?.85:.65));let a=new je(i?`#ffe1b3`:`#99b9ef`,i?2.4:1.75);a.position.set(-28,47,-38),a.castShadow=!0,a.shadow.mapSize.set(2048,2048),Object.assign(a.shadow.camera,{left:-n.width/2-24,right:n.width/2+24,top:n.depth/2+24.5,bottom:-n.depth/2-24.5,near:1,far:160}),i||Object.assign(a.shadow.camera,{left:-F.width/2-31,right:F.width/2+31,top:F.depth/2+31.5,bottom:-F.depth/2-31.5}),a.shadow.bias=-3e-4,a.shadow.normalBias=.025,a.shadow.radius=2,this.scene.add(a);let o=new je(`#e9a775`,.32);o.position.set(-15,15,35),this.scene.add(o),this.makeEnvironment(),this.scene.environmentIntensity=i?.3:.22,this.ready=Promise.all([i?gn(this.scene):ln(this.scene),mr(),pe()===`human`?Gt():void 0]).then(()=>{this.water=this.scene.getObjectByName(`harbour-water`);for(let e of Ss){let t=this.scene.getObjectByName(e);t&&(t.updateWorldMatrix(!0,!0),t.traverse(e=>{e.matrixAutoUpdate=!1,e.matrixWorldAutoUpdate=!1}))}this.scene.traverse(e=>{e.name===`city-lamp-light`&&e.isPointLight&&this.lamps.push(e)});for(let e of this.lamps)e.visible=this.quality.lampLights;for(let e of Ss)this.scene.getObjectByName(e)?.traverse(e=>{let t=e;t.isMesh&&[t.material].flat().some(e=>e.isMeshStandardMaterial)&&this.mapMeshes.push({mesh:t,original:t.material})});for(let e of[`blender-harbour-city`,`rift-arena`])this.scene.getObjectByName(e)?.traverse(e=>{e.isInstancedMesh&&this.culls.push(new yo(e))});return this.skyMesh=this.scene.getObjectByName(Cs),this.cacheSky(this.quality.skyCube),this.bakeMap(),this.applyMapMaterials(),this.applySky(),this.prepareMapShaders().then(()=>this.prepareEffectShaders())}).then(()=>{this.sceneryReady=!0}),this.scene.onBeforeRender=(e,t,n)=>this.cullShapes(n),this.ready.catch(e=>{console.error(`ゲームの素材の読み込みに失敗しました`,e)});let s=F.puckRadius,c=bs,l=s*c.height,u=c.floorGap+l,d=new H(new ft(s*c.taper,s,l,32),new G({color:`#101923`,metalness:.75,roughness:.26}));d.position.y=c.floorGap+l/2,d.castShadow=this.quality.movingShadows,this.puck.add(d),this.puckDisc=d;let f=new H(new ft(s*c.coreRadius,s*c.coreRadius,c.coreThickness,24),new V({color:`#e4ffc0`}));f.position.y=u+c.coreLift+c.coreThickness/2,this.puck.add(f);let p=new H(new jt(s*c.bandRadius,s*c.bandThickness,6,32),new V({color:`#d0ff82`}));p.rotation.x=Math.PI/2,p.position.y=c.floorGap+l*c.bandAt,this.puck.add(p);let h=new H(new Ot(s*c.glowInner,s*c.glowOuter,32),new V({color:`#d0ff82`,transparent:!0,opacity:.55,side:2,depthWrite:!1}));h.rotation.x=-Math.PI/2,h.position.y=c.glowLift,this.puck.add(h),this.scene.add(this.puck),this.puckParts=[f.material,p.material,h.material];let g=new H(new Ot(r.ringRadius*r.ringInner,r.ringRadius,40),new V({color:`#ff5a5a`,transparent:!0,opacity:0,side:2,depthWrite:!1}));g.rotation.x=-Math.PI/2,g.visible=!1,this.threatRing=g,this.scene.add(g);let _=Math.acos(m.showAngle),v=new H(new Dt(1,48,-_,_*2),new V({color:`#ffffff`,transparent:!0,opacity:0,side:2,depthWrite:!1}));v.rotation.x=-Math.PI/2,v.visible=!1,this.reachFan=v,this.scene.add(v);let y=new H(new Ot(.9,1,48,1,-_,_*2),new V({color:`#ffffff`,transparent:!0,opacity:0,side:2,depthWrite:!1}));y.rotation.x=-Math.PI/2,y.visible=!1,this.coreBand=y,this.scene.add(y);let b=ss,x=new H(new Ot(b-.06,b,48),new V({color:`#e8eef6`,transparent:!0,opacity:0,side:2,depthWrite:!1}));x.rotation.x=-Math.PI/2,x.visible=!1,this.bodyRing=x,this.scene.add(x);for(let e=0;e<c.trailCount;e++){let t=new H(new Dt(s*c.trailRadius*(1-e/18),12),new V({color:`#c7ff7b`,transparent:!0,opacity:.3*(1-e/c.trailCount),depthWrite:!1}));t.rotation.x=-Math.PI/2,t.position.y=c.trailLift,t.visible=!1,this.scene.add(t),this.trail.push(t)}this.effects=new Wa(this.renderer,this.scene,this.camera,this.mobileDevice,{ambientOcclusion:this.quality.ambientOcclusion,bloom:this.quality.bloom}),this.effects.setSharpen(this.quality.sharpen),this.effects.setAntialias(this.quality.antialias),this.effects.setBook(ne()),this.resize()}async prepareEffectShaders(){let e=new mt(1,1),t=[new V,new V({transparent:!0,depthWrite:!1}),new V({transparent:!0,depthWrite:!1,side:2}),new G({color:`#87e5ff`,emissive:`#1a809b`,emissiveIntensity:.3,metalness:.2,roughness:.18,transparent:!0,opacity:.84}),Co()];for(let n of t){let t=new H(e,n);t.castShadow=!0,this.effectShaders.add(t)}let n=new Ct;n.setAttribute(`position`,new et(new Float32Array(9),3)),n.setAttribute(`color`,new et(new Float32Array(9),3)),this.effectShaders.add(new H(n,new V({vertexColors:!0,transparent:!0,depthWrite:!1,side:2,blending:2})));let r=new Ot(.5,1,4);r.setAttribute(`color`,new et(new Float32Array(r.getAttribute(`position`).count*3),3)),this.effectShaders.add(new H(r,new V({vertexColors:!0,transparent:!0,side:2,depthWrite:!1})));let i=new Ct;i.setAttribute(`position`,new et(new Float32Array(9),3)),this.effectShaders.add(new H(i,Gn()));let a=new Ct;a.setAttribute(`position`,new et(new Float32Array(9),3)),a.setAttribute(`normal`,new et(new Float32Array([0,1,0,0,1,0,0,1,0]),3)),a.setAttribute(`skinIndex`,new xe(new Uint16Array(12),4)),a.setAttribute(`skinWeight`,new et(new Float32Array([1,0,0,0,1,0,0,0,1,0,0,0]),4));let o=new Re(a,new V({transparent:!0,depthWrite:!1})),s=new gt;o.add(s),o.bind(new Le([s])),o.frustumCulled=!1,this.effectShaders.add(o);let c=this.renderer.getRenderTarget();this.renderer.setRenderTarget(this.effects.composer.readBuffer);let l;try{l=this.renderer.compileAsync(this.effectShaders,this.camera,this.scene)}finally{this.renderer.setRenderTarget(c)}await l}async prepareFighterShaders(){let e=[...this.fighters.values()],t=e.flatMap(e=>[e.mesh,e.heal,e.barrier,...e.calm?[e.calm]:[]]),n=this.quality.fadeWhenNeeded?e.flatMap(e=>e.fadeMaterials).filter(e=>!e.transparent):[],r=n.map(e=>e.alphaHash),i=this.renderer.getRenderTarget();this.renderer.setRenderTarget(this.effects.composer.readBuffer);let a=[];try{for(let e of n.length?[!1,!0]:[void 0]){if(e!==void 0)for(let t of n)t.alphaHash!==e&&(t.alphaHash=e,t.needsUpdate=!0);a.push(...le(t).map(e=>this.renderer.compileAsync(e,this.camera,this.scene)))}}finally{n.forEach((e,t)=>{e.alphaHash!==r[t]&&(e.alphaHash=r[t],e.needsUpdate=!0)}),this.renderer.setRenderTarget(i)}await Promise.all(a)}sizeStale(){let e=this.canvas.clientWidth,t=this.canvas.clientHeight;return e>0&&t>0&&(e!==this.viewportWidth||t!==this.viewportHeight)}resize(){let e=this.canvas.clientWidth,t=this.canvas.clientHeight;this.viewportWidth=e,this.viewportHeight=t,this.renderer.setSize(e,t,!1),this.camera.aspect=e/t,this.camera.updateProjectionMatrix(),this.effects?.resize(e,t)}resetCamera(e=0){this.yaw=S(e)*Math.PI/2,this.pitch=.58,this.gunPitch=.12,this.lastPhase=``}project(e,t,n){return this.projection.set(e,t,n).project(this.camera),{x:(this.projection.x*.5+.5)*this.viewportWidth,y:(-.5*this.projection.y+.5)*this.viewportHeight,visible:this.projection.z>-1&&this.projection.z<1&&Math.abs(this.projection.x)<1.08&&Math.abs(this.projection.y)<1.1}}groundAxes(e,t){this.camera.updateMatrixWorld();let n={x:Math.sin(this.yaw),z:Math.cos(this.yaw)},r={x:-n.z,z:n.x},i=.5,a=this.project(e.x,t,e.z);if(!a.visible)return;let o=this.project(e.x+r.x*i,t,e.z+r.z*i),s=this.project(e.x+n.x*i,t,e.z+n.z*i);return{right:r,forward:n,onRight:{x:(o.x-a.x)/i,y:(o.y-a.y)/i},onForward:{x:(s.x-a.x)/i,y:(s.y-a.y)/i}}}drawPuckState(e,t){let n=h(Math.hypot(e.puck.velocity.x,e.puck.velocity.z));this.puckTint.lerp(this.tierColor(n),t>0?Math.min(1,t/r.blend):0);for(let e of this.puckParts)e.color.copy(this.puckTint).multiplyScalar(n.glow);let o=w(e);if(o>0){this.puckTint.lerp(ys,Math.min(1,o*1.1));for(let e of this.puckParts)e.color.copy(this.puckTint).multiplyScalar(1+o*1.6)}let s=.8+n.glow*.2,c=Math.min(1,n.glow),l=o>0?this.trail.length:n.trail;this.trail.forEach((t,n)=>{let r=e.puck.trail[e.puck.trail.length-1-n];if(t.visible=!!r&&n<l,!t.visible)return;t.position.set(r.x,bs.trailLift,r.z),t.scale.setScalar(s);let i=t.material;i.color.copy(this.puckTint),i.opacity=.3*(1-n/bs.trailCount)*c});let d=this.threatRing;if(!d)return;let f=e.fighters.find(t=>t.id===e.controlledId),p=f&&e.phase===`playing`?a(e.puck,f,u(e,f.id)):null,m=i(this.threatDisplay,p,t);d.visible=m.visible,m.visible&&f&&(d.position.set(f.pos.x,.055,f.pos.z),d.material.opacity=m.opacity)}drawReachFan(e,t){let r=this.reachFan,i=this.coreBand,a=this.bodyRing;if(!r||!i||!a)return;let o=e.fighters.find(t=>t.id===e.controlledId),s=o&&e.phase===`playing`&&o.role!==`gunner`&&o.stun<=0&&!o.meditating&&!o.sprinting?!m.showWhenReady||o.cooldowns[0]<=0?1:.25:0,c=t>0?t/m.fadeIn:0;this.reachFanLevel+=W.clamp(s-this.reachFanLevel,-c,c);let l=this.reachFanLevel;if(r.visible=i.visible=a.visible=l>.01,!r.visible||!o)return;let u=b(o.role)+F.puckRadius;if(this.reachFanRole!==o.role){this.reachFanRole=o.role,r.material.color.set(n[o.role].color),i.material.color.set(n[o.role].color).lerp(new I(`#ffffff`),.45);let e=u-ss,t=Math.acos(m.showAngle);i.geometry.dispose(),i.geometry=new Ot(ss+e*(x.core-x.criticalBand),ss+e*(x.core+x.criticalBand),48,1,-t,t*2)}let d=Math.atan2(-o.facing.z,o.facing.x);r.position.set(o.pos.x,.035,o.pos.z),r.scale.setScalar(u),r.rotation.set(-Math.PI/2,0,d),r.material.opacity=.15*l,i.position.set(o.pos.x,.04,o.pos.z),i.rotation.set(-Math.PI/2,0,d);let f=C(e,o);this.corePulse=f?this.corePulse+t:0;let p=f?.78+.22*Math.sin(this.corePulse/.12*Math.PI*2):0;i.material.opacity=(f?.62+.3*p:.28)*l,a.position.set(o.pos.x,.03,o.pos.z),a.material.opacity=.12*l}tierColor(e){return this.tierColors.get(e.color)??this.tierColors.set(e.color,new I(e.color)).get(e.color)}tierColors=new Map;dodgeGhost(e,t){let n=e.fighters.find(e=>e.dash?.presentation===`dodge-afterimage`&&Math.hypot(e.pos.x-t.pos.x,e.pos.z-t.pos.z)<1.5),r=n&&this.fighters.get(n.id)?.mesh.userData.samurai;if(!n||!r)return;let i=Pn(r.model);return i.position.x+=t.pos.x-n.pos.x,i.position.z+=t.pos.z-n.pos.z,i}disposeObject(e){e.traverse(e=>{if(e instanceof H){if(e instanceof Re&&e.skeleton.dispose(),e.userData.ghost)return;e.geometry.dispose(),(Array.isArray(e.material)?e.material:[e.material]).forEach(e=>e.dispose())}}),e.userData.ghostMaterial?.dispose(),this.scene.remove(e)}dropStaleAvatars(){let e=this.avatar?oe(this.avatar.look):``;this.bench.some(t=>t.look&&t.look!==e)&&(this.bench=this.bench.filter(t=>{if(!t.look||t.look===e)return!0;for(let e of[t.mesh,t.ring,t.shadow,t.heal,t.barrier,t.calm])e?.traverse(e=>{e instanceof H&&(e instanceof Re&&e.skeleton.dispose(),(Array.isArray(e.material)?e.material:[e.material]).forEach(e=>e.dispose()))});return!1}))}createFighter(e){let t=this.avatarOf(e),n=ra(e.role,e.team,t),r=new H(new Ot(.77,.86,40),new V({color:e.team===this.viewing?cs.ally:cs.enemy,side:2,transparent:!0,opacity:.95,depthWrite:!1}));r.rotation.x=-Math.PI/2;let i=new H(new Dt(.68,20),new V({color:`#010611`,transparent:!0,opacity:.14,depthWrite:!1}));i.rotation.x=-Math.PI/2;let a=[];n.traverse(e=>{!(e instanceof H)||e.userData.samuraiVfx||e.userData.noFade||a.push({mesh:e,original:e.material})});let o=as(),s=rs($.stance[e.role]),c=On();this.scene.add(n,r,i,o,c),s&&this.scene.add(s);let l={mesh:n,role:e.role,team:e.team,look:t?oe(t):``,ring:r,shadow:i,parts:a,fadeMaterials:[],heal:o,calm:s,healLevel:0,calmLevel:0,opacity:1,barrier:c};return this.dressFighter(l),l}draw(t,n,r){if(this.benchmarkMode?.skipRender)return;let i=this.water;i?.material.userData.shader&&(i.material.userData.shader.uniforms.harbourTime.value=r);let a=this.viewing=T(t);ca(this.fighters,t.fighters,this.bench,this.seatActions),this.dropStaleAvatars();for(let e of t.fighters){let i=this.fighters.get(e.id);if(!i||!this.seatActions.ready(e))continue;i.mesh.position.set(e.pos.x,0,e.pos.z),i.mesh.rotation.y=Math.atan2(e.facing.x,e.facing.z),oa(i.mesh,e,e.role===`samurai`&&t.phase!==`lobby`?t.elapsed:r,n);let o=i.mesh.userData.gait,s=this.footsteps.step(e.id,o);s>=0&&this.steps.length<32&&this.steps.push({id:e.id,foot:s,moving:o.moving,x:e.pos.x,z:e.pos.z,pudding:de(this.avatarOf(e))}),i.ring.position.set(e.pos.x,.045,e.pos.z),i.ring.visible=e.id===t.controlledId,i.ring.material.color.copy(e.team===a?cs.ally:cs.enemy),i.shadow.position.set(e.pos.x,.025,e.pos.z);let c=0;for(let n of t.effects)n.presentation===`guard-hit`&&Math.hypot(n.pos.x-e.pos.x,n.pos.z-e.pos.z)<.8&&(c=Math.max(c,n.life/n.maxLife));kn(i.barrier,!!e.blocking,e.pos.x,e.pos.z,Math.atan2(e.facing.x,e.facing.z),c,e.guardGauge/f.gauge,i.opacity,r);let l=(e,t,r)=>n>0?W.clamp(e+(t?n/r.fadeIn:-n/r.fadeOut),0,1):e;i.healLevel=l(i.healLevel,(e.healed??0)>0&&e.stun<=0,$.heal),i.calmLevel=l(i.calmLevel,(!!e.meditating||!!e.sprinting||(e.boost??0)>0)&&e.stun<=0,$.meditation),i.heal.position.set(e.pos.x,0,e.pos.z),os(i.heal,i.healLevel*i.opacity,r,this.camera,e.id),i.calm&&(i.calm.position.set(e.pos.x,0,e.pos.z),is(i.calm,i.calmLevel*i.opacity,r,this.camera,e.id))}this.puck.position.set(t.puck.pos.x,0,t.puck.pos.z),this.puck.rotation.y=r*1.2,this.drawPuckState(t,n),this.drawReachFan(t,n);let o=new Set;for(let e of t.projectiles){let t=`p`+e.id;o.add(t);let r=this.transient.get(t);if(!r){if(e.kind===`bullet`){r=new U;let t=new H(new De(.12,8,6),new V({color:`#fff5ce`}));r.add(t);let n=new H(new ft(.055,.015,1.15,6),new V({color:e.team===0?`#ffc66e`:`#ff7762`,transparent:!0,opacity:.85,depthWrite:!1}));n.rotation.x=Math.PI/2,n.position.z=-.57,r.add(n)}else r=e.kind===`kamaitachi`?vs():new H(e.kind===`fire`?new Ze(.39,1):new Ke(.2),new V({color:e.kind===`fire`?`#ff9d4a`:`#b7afff`}));this.transient.set(t,r),this.scene.add(r)}r.position.set(e.pos.x,e.kind===`kamaitachi`?0:e.height??1.1,e.pos.z),e.kind===`bullet`?(r.quaternion.setFromUnitVectors(new R(0,0,1),new R(e.velocity.x,e.verticalVelocity??0,e.velocity.z).normalize()),r.children[1].material.color.copy(fs[e.team])):e.kind===`kamaitachi`?(r.quaternion.setFromUnitVectors(new R(0,0,1),new R(e.velocity.x,0,e.velocity.z).normalize()),r.scale.setScalar(1+.22*(1-Math.max(0,Math.min(1,e.life/v.life))))):r.rotation.y+=n*10}for(let n of t.walls){let t=`w`+n.id;o.add(t);let i=this.transient.get(t);if(n.kind===`light`){i||(i=wo(n.width,n.id,r),this.transient.set(t,i),this.scene.add(i)),Eo(i,n,r);continue}if(!i){i=new U;for(let e=0;e<6;e++){let t=1.6+e%3*.35,r=new H(new ft(.3,.53,t,5),new G({color:`#87e5ff`,emissive:`#1a809b`,emissiveIntensity:.3,metalness:.2,roughness:.18,transparent:!0,opacity:.84}));r.position.set(0,t/2,(e-2.5)*n.width/6),r.rotation.y=e,r.castShadow=this.quality.movingShadows,i.add(r)}this.transient.set(t,i),this.scene.add(i)}i.position.set(n.pos.x,0,n.pos.z),i.scale.y=Math.min(1,n.life*2);let a=e(n);i.rotation.y=Math.atan2(-a.z,a.x)}for(let e of t.effects){if(e.presentation===`samurai-iai`)continue;let n=`e`+e.id;o.add(n);let r=this.transient.get(n);if(e.presentation===`guard-hit`)continue;if(e.presentation===`guard-break`){r||(r=An(e.id),this.transient.set(n,r),this.scene.add(r)),jn(r,e.pos.x,e.pos.z,Math.atan2(e.direction?.x??0,e.direction?.z??1),1-e.life/e.maxLife,e.maxLife);continue}if(e.presentation===`dodge-afterimage`){r||(r=this.dodgeGhost(t,e)??new U,this.transient.set(n,r),this.scene.add(r)),r.userData.ghostMaterial&&Fn(r,1-e.life/e.maxLife);continue}if(e.presentation===`dodge-vanish`||e.presentation===`dodge-smoke`||e.presentation===`dodge-roll`||e.presentation===`dodge-step`){let t=e.presentation===`dodge-vanish`||e.presentation===`dodge-smoke`?`smoke`:`dust`;r||(r=Mn(t,e.id),this.transient.set(n,r),this.scene.add(r)),Nn(r,t,e.pos.x,e.pos.z,Math.min(1,(1-e.life/e.maxLife)*1.4),this.camera);continue}if(e.presentation===`kamaitachi-hold`){r||(r=vs(),this.transient.set(n,r),this.scene.add(r)),r.position.set(e.pos.x,0,e.pos.z),r.quaternion.setFromUnitVectors(new R(0,0,1),new R(e.direction?.x??1,0,e.direction?.z??0).normalize());let t=M+(e.maxLife-e.life);ds.forEach((e,n)=>{let i=r.children[n],a=t-e;i.visible=a>=0,i.material.opacity=_s*(1+.9*Math.max(0,1-a/.09))}),r.children[ds.length+1].visible=!1;continue}if(e.presentation===`wind`){if(!r){r=new U;let e=new H(new Ot(.9,1,40,1,0,Math.PI),new V({color:`#eaf6ff`,side:2,transparent:!0,opacity:.5,depthWrite:!1}));e.rotation.x=-Math.PI/2,r.add(e),this.transient.set(n,r),this.scene.add(r)}let t=1-e.life/e.maxLife,i=e.radius*(c.start+(1-c.start)*Math.min(1,t));r.position.set(e.pos.x,.45,e.pos.z),r.scale.set(i,1,i),r.rotation.y=Math.atan2(-(e.direction?.x??0),-(e.direction?.z??1)),r.children[0].material.opacity=.55*(1-t)*(1-t*.5);continue}if(e.presentation===`weapon-slash`||e.presentation===`staff-hit`){if(!r){let t=e.presentation===`staff-hit`;r=new U;let i=new H(new Ot(e.radius*(t?.92:.84),e.radius,28,1,.45,2.25),new V({color:t?`#ffe6b0`:e.team===0?`#c8edff`:`#ffb8a4`,side:2,transparent:!0,opacity:.7,depthWrite:!1}));i.rotation.x=Math.PI/2,i.position.y=t?.55:.8,r.add(i),this.transient.set(n,r),this.scene.add(r)}let t=1-e.life/e.maxLife;r.position.set(e.pos.x,0,e.pos.z),r.rotation.y=Math.atan2(e.direction?.x??0,e.direction?.z??1)+(t-.5)*.6;let i=r.children[0];i.material.opacity=Math.sin(Math.PI*t)*.72;continue}if(e.presentation===`clash-spark`){r||(r=jo(e.id),this.transient.set(n,r),this.scene.add(r)),r.position.set(e.pos.x,e.height??1.2,e.pos.z),No(r,1-e.life/e.maxLife,e.radius,this.camera);continue}if(e.presentation===`shockwave`){r||(r=new H(new Ot(.86,1,64),new V({color:`#fff6d0`,side:2,transparent:!0,opacity:.95,depthWrite:!1})),r.rotation.x=-Math.PI/2,this.transient.set(n,r),this.scene.add(r));let t=1-e.life/e.maxLife,i=.6+(e.radius-.6)*t;r.position.set(e.pos.x,.09,e.pos.z),r.scale.setScalar(i),r.material.opacity=.95*(1-t)*(1-t);continue}let i=1-e.life/e.maxLife;if(!r){let t=(e.presentation===`crit-spark`?`#fff3c4`:e.presentation===`mid-spark`?`#8ff0ff`:e.presentation===`tip-spark`?`#8f9fb4`:``)||(e.kind===`heal`?`#a7ff91`:e.kind===`hit`?`#ffb089`:e.kind===`ice`?`#8ff0ff`:e.kind===`light`?`#ffe27a`:e.team===0?`#a6ecff`:`#ffc298`);r=new U;let i=[`slash`,`charge`].includes(e.kind),a=new H(new Ot(e.radius*.83,e.radius,i?28:48,1,0,i?Math.PI*1.3:Math.PI*2),new V({color:t,side:2,transparent:!0,opacity:.9,depthWrite:!1}));a.rotation.x=-Math.PI/2,a.position.y=e.kind===`heal`?.12:.65,r.add(a);for(let n=0;n<7;n++){let i=new H(new Ke(.095),new V({color:t,transparent:!0,opacity:1}));i.position.set(Math.cos(n*6.28/7)*e.radius,.4,Math.sin(n*6.28/7)*e.radius),r.add(i)}this.transient.set(n,r),this.scene.add(r)}r.position.set(e.pos.x,0,e.pos.z),r.scale.setScalar(.7+i*.5),r.rotation.y=i*2,r.children.forEach((e,t)=>{let n=e;n.material.opacity=1-i,t>0&&(e.position.y=.35+i*1.5)})}for(let[e,t]of this.transient)o.has(e)||(this.disposeObject(t),this.transient.delete(e));let s=t.fighters.find(e=>e.id===t.controlledId),l=t.phase===`lobby`;if(this.camera.position.sub(this.shake),this.shake.set(0,0,0),l){let e=this.camera.aspect;if(this.mapId===`colosseum`){let t=E(this.mapId).radius;this.target.set(10,7,-6),this.camera.position.set(-t*.62,e<1.6?11:9.5,t*.54)}else this.target.set(35,8,-3),this.camera.position.set(-F.width/2-9+Math.sin(r*.06)*.5,e<1.6?13:11,12);this.camera.lookAt(this.target)}else{let e=new R(Math.sin(this.yaw),0,Math.cos(this.yaw)),t=new R(s.pos.x,0,s.pos.z),r=t.clone().addScaledVector(e,-8);r.y=1.56+this.pitch*3;let i=7;if(this.mapId===`colosseum`){let e=E(this.mapId).radius-.9,n=Math.hypot(r.x,r.z);n>e&&(r.x*=e/n,r.z*=e/n);let a=Math.hypot(r.x-t.x,r.z-t.z);r.y+=Math.max(0,4-a)*.7,i=W.lerp(.65,7,W.smoothstep(a,.4,4))}let a=t.clone().addScaledVector(e,i);a.y=1.8;let o=this.lastPhase===`lobby`||this.lastPhase===``?1:1-Math.exp(-n*10);this.camera.position.lerp(r,o),this.target.lerp(a,o),this.camera.lookAt(this.target)}if(!l){let e=_e(s),n=Math.max(e.f>0?(.05+.07*e.s)*e.f:s.hitStop>0?.03:0,d(t));n>0&&(this.shake.set(Math.sin(r*80)*n,Math.cos(r*63)*n,0),this.camera.position.add(this.shake),this.camera.lookAt(this.target))}this.lastPhase=t.phase;let u=new Set(t.fighters.filter(e=>e.dash?.presentation===`dodge-vanish`).map(e=>e.id));for(let[e,n]of this.fighters){let r=n.mesh.position.distanceTo(this.camera.position),i=l||e===t.controlledId?1:W.smoothstep(r,4.5,6.5);for(let e of n.fadeMaterials){let t=ao(e,i,this.quality.fadeWhenNeeded);e.alphaHash!==t&&(e.alphaHash=t,e.needsUpdate=!0),e.opacity=i}n.mesh.visible=i>.015&&!u.has(e)&&!this.benchmarkMode?.hideFighters,n.opacity=i}for(let e of t.fighters)if(e.role===`gunner`&&e.stun<=0){let n=this.fighters.get(e.id)?.mesh;if(!n)continue;e.id===t.controlledId&&!l?sa(n,new R(e.pos.x+e.facing.x*12,1.2,e.pos.z+e.facing.z*12)):sa(n,new R(t.puck.pos.x,.25,t.puck.pos.z))}this.quality.shadow===`once`?this.sceneryReady&&!this.shadowBaked&&(this.renderer.shadowMap.needsUpdate=!0,this.shadowBaked=!0):this.quality.shadow===`hz30`&&(this.shadowElapsed+=n,this.shadowElapsed>=1/30&&(this.renderer.shadowMap.needsUpdate=!0,this.shadowElapsed%=1/30)),this.benchmarkMode?.direct?(this.renderer.info.reset(),this.renderer.setRenderTarget(null),this.renderer.render(this.scene,this.camera)):this.effects.render(n)}gunAim(e){let t=e.fighters.find(t=>t.id===e.controlledId);this.camera.updateMatrixWorld(!0);let n=this.camera.position.clone(),r=this.camera.getWorldDirection(new R).multiplyScalar(100),i=_(e,n,r,t.team,0),a=n.clone().addScaledVector(r,i?.t??1),o=this.fighters.get(t.id)?.mesh;return o&&(o.position.set(t.pos.x,0,t.pos.z),o.rotation.y=Math.atan2(t.facing.x,t.facing.z)),{origin:(o?sa(o,a):void 0)??{x:t.pos.x,y:1.2,z:t.pos.z},target:a}}minimap(t,n){let i=t.getContext(`2d`),a=t.width,o=t.height,s=E(n.mapId),c=s.shape===`circle`;i.clearRect(0,0,a,o);let l=Math.min(a-20,o-20)/(s.radius*2),u=c?l:(a-20)/s.width,d=c?l:(o-20)/s.depth,f=e=>a/2+e*u,p=e=>o/2+e*d;i.strokeStyle=`#ffffff35`,i.lineWidth=1,i.fillStyle=`#b28b5720`,i.beginPath(),c?i.arc(a/2,o/2,s.radius*u,0,Math.PI*2):i.rect(10,10,a-20,o-20),i.fill(),i.stroke(),i.beginPath(),i.moveTo(a/2,p(-s.depth/2)),i.lineTo(a/2,p(s.depth/2)),i.stroke(),i.beginPath(),i.arc(a/2,o/2,c?5*u:12,0,Math.PI*2),i.stroke();for(let e of[0,1])i.strokeStyle=e===0?`#83dbff`:`#ff907d`,i.lineWidth=3,i.beginPath(),i.moveTo(f((e?1:-1)*s.goalX),p(-s.goalWidth/2)),i.lineTo(f((e?1:-1)*s.goalX),p(s.goalWidth/2)),i.stroke();for(let t of n.walls){let n=e(t),r=-n.z*t.width/2,a=n.x*t.width/2;i.strokeStyle=t.kind===`light`?`#ffe27a`:`#b1f1ff`,i.lineWidth=3,i.beginPath(),i.moveTo(f(t.pos.x-r),p(t.pos.z-a)),i.lineTo(f(t.pos.x+r),p(t.pos.z+a)),i.stroke()}for(let e of n.fighters){let t=e.id===n.controlledId;i.fillStyle=e.stun>0?`#7b8194`:t?`#c6ff8b`:e.team===0?`#85dcff`:`#ff897d`,i.beginPath(),i.arc(f(e.pos.x),p(e.pos.z),t?4:3,0,Math.PI*2),i.fill(),t&&(i.strokeStyle=`#c6ff8b77`,i.lineWidth=1,i.beginPath(),i.arc(f(e.pos.x),p(e.pos.z),7,0,Math.PI*2),i.stroke())}let m=h(Math.hypot(n.puck.velocity.x,n.puck.velocity.z));i.globalAlpha=!m.blink||Math.floor(n.elapsed/(r.blinkPeriod/2))%2==0?1:.35,i.fillStyle=m.color,i.beginPath(),i.arc(f(n.puck.pos.x),p(n.puck.pos.z),m.dot,0,Math.PI*2),i.fill(),i.globalAlpha=1}};export{ws as GameView};