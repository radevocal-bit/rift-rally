import{$ as e,At as t,B as n,C as r,Ct as i,Dt as a,Et as o,F as s,G as c,H as l,I as u,J as d,K as f,L as p,Ot as m,Q as h,R as g,St as _,T as v,Tt as y,U as b,V as x,W as S,X as C,Y as w,Z as T,_ as E,_t as D,at as O,bt as k,ct as A,dt as j,et as M,ft as ee,g as N,gt as te,ht as ne,it as re,jt as ie,kt as ae,lt as oe,mt as se,nt as ce,ot as le,pt as P,q as ue,r as de,rt as fe,st as pe,t as me,tt as he,ut as ge,vt as _e,wt as ve,xt as ye,y as be,yt as xe,z as Se}from"./index-BUzDN_mi.js";import{An as Ce,At as we,Bn as Te,C as F,Dt as Ee,E as De,En as Oe,Et as ke,F as Ae,Fn as je,G as Me,Gn as Ne,H as I,Hn as Pe,I as Fe,J as Ie,L as Le,Ln as Re,Lt as ze,M as Be,Mn as Ve,Nn as He,On as Ue,P as We,Pn as Ge,Q as Ke,Qn as L,R as qe,Rn as Je,S as Ye,T as Xe,Tt as Ze,U as Qe,Un as $e,V as et,W as tt,X as nt,Y as rt,Z as it,Zn as R,_ as at,_t as ot,at as st,b as ct,d as lt,dt as ut,et as dt,ft,g as pt,gn as mt,h as ht,it as gt,jt as z,k as _t,kn as vt,kt as yt,l as bt,m as xt,mt as B,nt as St,ot as Ct,pt as V,q as H,qn as wt,rt as Tt,tr as Et,u as Dt,ut as U,v as Ot,vt as kt,w as At,wt as jt,x as Mt,xn as Nt,xt as Pt,yn as Ft,yt as W,zn as It}from"./avatar-C7Llwc6R.js";import{_ as Lt,a as Rt,c as zt,d as Bt,f as Vt,g as Ht,h as Ut,i as Wt,l as Gt,m as Kt,n as qt,o as Jt,p as Yt,s as Xt,t as Zt,u as Qt,v as $t}from"./yuru-party-Bhw_dUF9.js";import{c as en,d as tn,g as nn,i as rn,l as an,o as on,t as sn,u as cn}from"./pudding-COjzkqZx.js";var ln;function un(){if(ln)return ln;let e=4093,t=()=>(e=Math.imul(e,1664525)+1013904223>>>0,e/4294967296),n=e=>{let n=document.createElement(`canvas`);n.width=n.height=512;let r=n.getContext(`2d`),i=r.createImageData(512,512);for(let n=0;n<512;n++)for(let r=0;r<512;r++){let a=e===`wood`?Math.sin(r*.32+Math.sin(n*.035)*1.2)*8+Math.sin(r*1.13+n*.007)*5:e===`cloth`?(r%3==0?-15:0)+(n%3==0?-13:0):0,o=(e===`wood`?173:e===`slate`?168:e===`cloth`?226:216)+a+(t()-.5)*(e===`plaster`?33:17),s=(n*512+r)*4;i.data[s]=o,i.data[s+1]=o,i.data[s+2]=o,i.data[s+3]=255}if(r.putImageData(i,0,0),e===`wood`){for(let e=0;e<512;e+=128)r.fillStyle=`#3a342c`,r.fillRect(e,0,3,512),r.fillStyle=`#ded0b7`,r.fillRect(e+4,0,2,512);for(let e=0;e<170;e++){let n=t()*512;r.strokeStyle=`rgba(55,42,25,${.06+t()*.17})`,r.lineWidth=.5+t()*1.1,r.beginPath(),r.moveTo(n,0),r.bezierCurveTo(n+Math.sin(e)*13,170,n-Math.cos(e)*7,360,n,512),r.stroke()}}if(e===`slate`)for(let e=-1;e<9;e++)for(let n=-1;n<9;n++){let i=n*64+e%2*32,a=e*64,o=132+t()*57;r.fillStyle=`rgb(${o},${o+2},${o+4})`,r.fillRect(i+1,a+2,62,61),r.fillStyle=`#555960`,r.fillRect(i,a+60,64,4),r.fillRect(i,a,2,60),r.fillStyle=`#bec2c2`,r.fillRect(i+3,a+4,58,1);for(let e=0;e<13;e++)r.fillStyle=t()>.5?`#ffffff09`:`#00000012`,r.fillRect(i+4+t()*53,a+6+t()*46,1+t()*19,1)}let a=new ct(n);return a.colorSpace=Oe,a.wrapS=a.wrapT=Ft,a.anisotropy=4,a};return ln={wood:n(`wood`),slate:n(`slate`),cloth:n(`cloth`),plaster:n(`plaster`)},ln}function dn(e,t){let n=e.getAttribute(`position`),r=e.getAttribute(`normal`),i=new Float32Array(n.count*2);for(let e=0;e<n.count;e++){let a=Math.abs(r.getX(e)),o=Math.abs(r.getY(e)),s=Math.abs(r.getZ(e));i[e*2]=(a>o&&a>s?n.getZ(e):n.getX(e))*t,i[e*2+1]=(o>a&&o>s?n.getZ(e):n.getY(e))*t}e.setAttribute(`uv`,new at(i,2))}function fn(e,t){let n=(e,t,n)=>e+Math.max(-1,Math.min(1,e/t))*(n-t);return{x:n(e,17,P.width/2),z:n(t,10.5,P.depth/2)}}var pn=e=>e.isMesh===!0,mn=`city-lamp-light`,hn=e=>e.isMeshStandardMaterial===!0;async function gn(e){let t=new H;t.name=`blender-harbour-city`;let n=new bt,r=new Re,i=await fetch(`./models/twilight-city-layout.json`);if(!i.ok)throw Error(`City layout unavailable`);let a=await i.json(),o=e=>({...e,...fn(e.x,e.z)}),s={...a,palace:o(a.palace),blocks:a.blocks.map(e=>({...e,placements:e.placements.map(o)}))},[c,l,u,d]=await Promise.all([n.loadAsync(`./models/twilight-infrastructure.glb`),n.loadAsync(`./models/monumental-palace-v3.glb`),Promise.all(s.blocks.map(e=>n.loadAsync(`./models/${e.model}.glb`))),Promise.all([`weathered-limestone-v3`,`aged-oak-v3`,`lime-plaster-v3`].map(e=>r.loadAsync(`./textures/${e}.png`)))]),f=un(),p=d.map(e=>(e.colorSpace=Oe,e.wrapS=e.wrapT=Ft,e.anisotropy=8,e)),m=p.map(e=>{let t=e.clone();return t.colorSpace=``,t.needsUpdate=!0,t}),h=new Set;for(let e of[c.scene,l.scene,...u.map(e=>e.scene)])e.traverse(e=>{if(pn(e)){e.receiveShadow=!0;for(let t of Array.isArray(e.material)?e.material:[e.material]){if(!hn(t)||h.has(t))continue;h.add(t),t.envMapIntensity=.25;let e=t.name;/WarmGlass/i.test(e)?(t.color.set(`#6b391d`),t.emissive.set(`#ff9b43`),t.emissiveIntensity=1.05,t.roughness=.35):/Recess|Shadow|DarkStone/i.test(e)?(t.normalMap=null,t.map=p[0],t.bumpMap=m[0],t.bumpScale=.055):/Stone|limestone/i.test(e)?(t.normalMap=null,t.map=p[0],t.bumpMap=m[0],t.bumpScale=.095,t.roughness=.88,t.color.lerp(new F(`#c1b9a8`),.48)):/Oak|Wood|walnut/i.test(e)?(t.normalMap=null,t.map=p[1],t.bumpMap=m[1],t.bumpScale=.045,t.roughness=.82,t.color.lerp(new F(`#aea094`),.58)):/Plaster/i.test(e)?(t.normalMap=null,t.map=p[2],t.bumpMap=m[2],t.bumpScale=.035,t.roughness=.94,t.color.lerp(new F(`#d0bbaa`),.44)):/Slate|RoofTile/i.test(e)?(t.normalMap=null,t.map=f.slate,t.bumpMap=f.slate,t.bumpScale=.045,t.roughness=.66,t.color.set(`#3b5266`)):/Linen|Canvas|Teal/i.test(e)&&(t.normalMap=null,t.map=f.cloth,t.bumpMap=f.cloth,t.bumpScale=.012,t.roughness=.94),/Leaves|Flowers/i.test(e)&&(t.side=2,t.roughness=.86),t.onBeforeCompile=e=>{e.fragmentShader=e.fragmentShader.replace(`#include <normal_fragment_maps>`,`
          vec3 stableSurfaceNormal=normal;
          #include <normal_fragment_maps>
          if(!(dot(normal,normal)>0.5))normal=stableSurfaceNormal;
        `)},t.customProgramCacheKey=()=>`city-stable-normal-v1`,t.needsUpdate=!0}}});c.scene.updateMatrixWorld(!0),c.scene.traverse(e=>{if(!pn(e))return;e.castShadow=!/StoneRecess|Flowers/.test(e.name);let t=e.geometry.clone().applyMatrix4(e.matrixWorld),n=t.getAttribute(`position`);for(let e=0;e<n.count;e++){let t=fn(n.getX(e),n.getZ(e));n.setXYZ(e,t.x,n.getY(e),t.z)}t.computeVertexNormals(),/Stone|Approach/i.test(e.name)&&dn(t,.25),t.applyMatrix4(e.matrixWorld.clone().invert()),t.computeBoundingBox(),t.computeBoundingSphere(),e.geometry.dispose(),e.geometry=t}),t.add(c.scene);let g=new pt(1,1,1),_=new W({color:`#9d998f`,map:p[0],bumpMap:m[0],bumpScale:.08,roughness:.92}),v=[];function y(e,n,r){e.updateMatrixWorld(!0);let i=new jt,a=new ft,o=new ht().setFromObject(e),s=o.getSize(new L),c=o.getCenter(new L);for(let e of n){let t=new L(c.x*e.scale,0,c.z*e.scale).applyAxisAngle(new L(0,1,0),e.angle),n=e.y-.01,r=-5.35;i.position.set(e.x+t.x,(n+r)/2,e.z+t.z),i.rotation.set(0,e.angle,0),i.scale.set(s.x*e.scale,n-r,s.z*e.scale),i.updateMatrix();let a=g.clone().applyMatrix4(i.matrix);dn(a,.25),v.push(a)}e.traverse(e=>{if(!pn(e))return;let o=new Ke(e.geometry,e.material,n.length);o.name=r,o.castShadow=!0,o.receiveShadow=!0,n.forEach((t,n)=>{i.position.set(t.x,t.y,t.z),i.rotation.set(0,t.angle,0),i.scale.setScalar(t.scale),i.updateMatrix(),a.multiplyMatrices(i.matrix,e.matrixWorld),o.setMatrixAt(n,a)}),o.computeBoundingSphere(),t.add(o)})}s.blocks.forEach((e,t)=>y(u[t].scene,e.placements,e.model)),y(l.scene,[s.palace],`monumental-palace`);let b=new V(lt(v,!1),_);b.name=`grounded-building-foundations`,b.receiveShadow=!0,b.castShadow=!0,b.geometry.computeBoundingSphere(),t.add(b),v.forEach(e=>e.dispose()),g.dispose(),t.userData={authoredWith:`Blender 5.2`,ready:!0,version:3,archetypes:s.blocks.length,buildings:s.blocks.reduce((e,t)=>e+t.placements.length,0),palace:s.palace,court:{width:P.width,depth:P.depth}},e.add(t);for(let[t,n,r,i,a]of[[4,5,-19,22,19],[16,5,20,24,22],[-24,4,13,16,18],[39,8,-20,34,32]]){let o=fn(t,r),s=new we(`#ffad65`,i,a,1.6);s.position.set(o.x,n,o.z),s.name=mn,e.add(s)}}function _n(e){let t=new V(new yt(780,680),new W({color:`#273c38`,roughness:1}));t.rotation.x=-Math.PI/2,t.position.y=-5.3,t.receiveShadow=!0,t.name=`terraced-valley`,e.add(t);let n=new W({color:`#173b4b`,roughness:.27,metalness:.6,envMapIntensity:.75});n.onBeforeCompile=e=>{e.uniforms.harbourTime={value:0},n.userData.shader=e,e.vertexShader=e.vertexShader.replace(`#include <common>`,`#include <common>
varying vec3 waterPosition;`).replace(`#include <worldpos_vertex>`,`#include <worldpos_vertex>
waterPosition=(modelMatrix*vec4(transformed,1.0)).xyz;`),e.fragmentShader=e.fragmentShader.replace(`#include <common>`,`#include <common>
varying vec3 waterPosition;uniform float harbourTime;`).replace(`#include <normal_fragment_maps>`,`#include <normal_fragment_maps>
        float w1=sin(waterPosition.x*2.2+waterPosition.z*1.7+harbourTime*.7);
        float w2=cos(waterPosition.x*.81-waterPosition.z*3.1-harbourTime*.43);
        normal=normalize(normal+vec3(w1*.10,w2*.075,0.0));`)};let r=new V(new yt(134,220),n),i=fn(76,95);r.rotation.x=-Math.PI/2,r.position.set(i.x,-2.6,i.z),r.name=`harbour-water`,e.add(r)}function vn(e){if(e.getObjectByName(`EpicCity_TwilightSky`))return;let t=(e,t)=>{let n=U.degToRad(e),r=U.degToRad(t);return new L(Math.cos(r)*Math.cos(n),Math.sin(r),Math.cos(r)*Math.sin(n))},n=t(-25,25),r=t(25,20),i=new vt({name:`EpicCity_TwilightSkyMaterial`,side:1,depthTest:!1,depthWrite:!1,fog:!1,toneMapped:!0,uniforms:{uZenith:{value:new F(`#142b59`)},uMiddle:{value:new F(`#36648c`)},uHorizon:{value:new F(`#829aaa`)},uBelow:{value:new F(`#566e8a`)},uBlueDirection:{value:n},uAmberDirection:{value:r},uBlueRadius:{value:U.degToRad(5)},uAmberRadius:{value:U.degToRad(6.5)},uBlueTint:{value:new F(`#c3e8f2`)},uAmberTint:{value:new F(`#efb983`)}},vertexShader:`
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
    `}),a=new je(650,48,32),o=new V(a,i);o.name=`EpicCity_TwilightSky`,o.renderOrder=-1e4,o.frustumCulled=!1,o.castShadow=!1,o.receiveShadow=!1;let s=new L;o.onBeforeRender=(e,t,n)=>{n.getWorldPosition(s),o.position.copy(s),o.updateMatrixWorld(!0)},o.userData.dispose=()=>{o.removeFromParent(),a.dispose(),i.dispose()},e.add(o)}function yn(e){let t=new H;t.name=`rift-arena`,e.add(t);let n=P.width/2,r=P.depth/2,i=P.goalWidth/2,a=P.width/34,o=P.depth/21;t.userData={theme:`twilight-royal-approach`,courtWidth:P.width,courtDepth:P.depth,goalWidth:P.goalWidth,area:P.width*P.depth,tallSceneryInnerX:n+10,tallSceneryInnerZ:r+10.5};let s=(e,t={})=>new W({color:e,roughness:.91,metalness:.02,...t}),c=s(14999251),l=s(15853526),u=s(7892576),d=s(6505267),f=s(9725249),p=s(3749691,{metalness:.5}),m=s(12558946,{metalness:.45,roughness:.65}),h=s(3767956,{side:2}),g=s(11029589,{side:2}),_=s(15058812);s(7374940);let v=new B({color:7981525}),y=new B({color:15114373}),b=s(11968633,{metalness:.25,roughness:.8}),x=new B({color:16032847}),S=new B({color:16770976}),C=s(15119979,{emissive:16760166,emissiveIntensity:.8,roughness:.4}),w=un(),T=new Re().load(`./textures/weathered-limestone-v3.png`);T.colorSpace=Oe,T.wrapS=T.wrapT=Ft,T.anisotropy=8;let E=e=>{let t=e.clone();return t.colorSpace=``,t.needsUpdate=!0,t},D=(e,t,n,r)=>{e.map=t,e.bumpMap=E(t),e.bumpScale=r,e.userData.worldScale=n};for(let e of[c,l])D(e,T,.22,.045);for(let e of[d,f])D(e,w.wood,.42,.027);for(let e of[h,g])e.map=w.cloth,e.bumpMap=E(w.cloth),e.bumpScale=.012,e.roughness=.83;let O=new pt(1,1,1);new nt(1,1);function k(e,n,r,i,a,o=t){let s=new V(e,n);return s.position.set(r,i,a),s.receiveShadow=!0,s.castShadow=n instanceof W,o.add(s),s}function A(e,n,r,i,a,o,s,c=t){let l=k(O,s,e,n,r,c);return l.scale.set(i,a,o),l}function j(e,n,r,i,a,o,s,c=20,l=t){return k(new _t(i,a,o,Math.max(12,c)),s,e,n,r,l)}function M(e,t,n,r,i,a=0){let o=A(e,.016,t,n,.018,r,i);return o.rotation.y=a,o}function ee(e,t,n,r,i,a=0,o=Math.PI*2){let s=k(new Nt(n-r/2,n+r/2,80,1,a,o),i,e,.031,t);return s.rotation.x=-Math.PI/2,s}function N(e,n,r,i,a,o,s=0,c=t){let l=new H;l.position.set(e,n,r),l.rotation.y=s,c.add(l);let u=new yt(i,a,10,12),f=u.getAttribute(`position`);for(let e=0;e<f.count;e++){let t=(f.getX(e)+i/2)/i,n=(a/2-f.getY(e))/a;f.setXYZ(e,f.getX(e),-n*a+(n>.99?.26*(1-Math.abs(t-.5)*2):0),Math.sin(t*Math.PI*5+n*.8)*.048*n)}u.computeVertexNormals(),k(u,o,0,0,0,l),A(0,-a*.44,.055,i*.065,a*.88,.018,_,l);let p=k(new Mt(i*.18,6),_,0,-a*.4,.025,l);p.rotation.z=Math.PI/6,A(0,.045,0,i+.22,.09,.1,d,l)}function te(e,n,r,i,a=t){let o=new H;o.position.set(e,n,r),o.scale.setScalar(i),a.add(o);let s=[new R(.36,0),new R(.43,.15),new R(.48,.55),new R(.44,.94),new R(.37,1.07)];k(new dt(s,18),f,0,0,0,o),j(0,1.055,0,.365,.365,.04,d,18,o);for(let e of[.1,.26,.84,1.01]){let t=k(new It(e<.2||e>1?.395:.458,.025,5,20),p,0,e,0,o);t.rotation.x=Math.PI/2}}function ne(e,n,r,i=t){let a=new H;a.position.set(e,n,r),i.add(a),A(0,0,0,.27,.4,.27,p,a),A(0,0,0,.225,.3,.285,C,a),A(0,0,0,.285,.3,.225,C,a);for(let e of[-.135,.135])for(let t of[-.135,.135])A(e,0,t,.035,.43,.035,p,a);j(0,.27,0,.04,.23,.18,p,4,a);let o=k(new It(.1,.018,4,14),p,0,.44,0,a);o.rotation.y=Math.PI/2}function re(e,t){j(e,.18,t,.47,.55,.38,u,8),j(e,.75,t,.18,.26,1.1,p,8),j(e,1.38,t,.43,.22,.3,m,8);let n=k(new Xe(.28,.75,7),x,e,1.86,t);n.rotation.z=.13;let r=k(new Xe(.16,.54,6),S,e-.04,1.81,t+.03);r.rotation.z=-.12}vn(e),_n(e),A(0,-.95,0,P.width+22,1.5,P.depth+19,u),A(0,-.24,0,P.width+22.5,.24,P.depth+19.5,c),A(0,-.33,0,P.width+3.9,.56,P.depth+3.9,l),A(0,-.135,0,P.width+2.2,.14,P.depth+2.2,u);let ie=new Re().load(`./textures/limestone-court-v2.png`);ie.wrapS=ie.wrapT=Ft,ie.repeat.set(6*a,4*o),ie.colorSpace=Oe,ie.anisotropy=8;let ae=k(new yt(P.width,P.depth),s(11778756,{map:ie,bumpMap:E(ie),bumpScale:.12,roughness:.74,metalness:.04}),0,-.03,0);ae.rotation.x=-Math.PI/2,ae.name=`playable-stone-floor`,ae.castShadow=!1;for(let e of[-r-.6,r+.6])for(let t=0;t<P.width;t++)A(-n+.5+t,-.035,e,.96,.16,1,c);for(let e of[-n-.6,n+.6])for(let t=-r;t<=r;t++)A(e,-.035,t,1,.16,.96,l);for(let e of[-r+.18,r-.18])M(0,e,P.width-.15,.09,b);for(let e of[-6.2*a,6.2*a])M(e,0,P.depth-.4,.035,b,Math.PI/2);for(let e=-r+.8;e<=r-.8;e+=1.6)if(Math.abs(e)>3.8*o){let t=M(0,e,.13,.13,b);t.rotation.y=Math.PI/4}ee(0,0,3.2*o,.09,b),ee(0,0,2.98*o,.025,b),ee(0,0,.93,.065,b);for(let e=0;e<8;e++){let t=e*Math.PI/4,n=3.45*o,r=M(Math.sin(t)*n,Math.cos(t)*n,.31,.31,b);r.rotation.y=t+Math.PI/4,M(Math.sin(t)*2.65*o,Math.cos(t)*2.65*o,.38,.065,b,Math.PI/2-t)}let oe=M(0,0,.42,.42,_);oe.rotation.y=Math.PI/4;for(let e of[-1,1]){let a=e<0?h:g,o=e<0?v:y;ee(e*(n-.25),0,i+1.1,.075,o,e<0?-Math.PI/2:Math.PI/2,Math.PI).scale.x=.74;for(let t of[-r-.22,r+.22]){A(e*(n/2+.2),.2,t,n+.1,.46,.28,c),A(e*(n/2+.2),.43,t,n+.1,.035,.3,m);for(let r=.55;r<n;r+=1.2)A(e*r,.22,t,.025,.32,.287,u);M(e*(n/2-.05),t-Math.sign(t)*.4,n-.15,.1,o)}let s=r-i;for(let t of[-(r+i)/2,(r+i)/2])A(e*(n+.45),.2,t,.3,.46,s,c),A(e*(n+.45),.43,t,.32,.035,s,m);let d=new H;t.add(d),d.name=e<0?`azure-goal`:`ember-goal`,d.userData={goalPlane:e*n,opening:P.goalWidth};for(let t of[-i,i]){A(e*(n+.22),1.14,t,.23,2.35,.23,l,d);for(let r of[.3,.9,1.5,2.1])A(e*(n+.22),r,t,.265,.1,.265,c,d);A(e*(n+.07),1.18,t,.05,2.25,.1,o,d)}A(e*(n+.22),2.33,0,.23,.18,P.goalWidth+.22,l,d),A(e*(n+.08),2.33,0,.055,.07,P.goalWidth+.2,m,d);for(let t of[-i,i])A(e*(n+.22),2.48,t,.31,.18,.35,c,d);A(e*(n+1),-.04,0,1.7,.04,P.goalWidth-.02,a,d),N(e*(n+1.9),3.7,i+1.05,1.2,1.25,a,e<0?Math.PI/2:-Math.PI/2,d),j(e*(n+1.9),1.84,i+1.05,.06,.08,3.78,p,12,d),j(e*(n+1.9),.1,i+1.05,.22,.27,.24,u,12,d);let f=[];for(let t=-i;t<=i;t+=.47)f.push(e*(n+1.78),.1,t,e*(n+1.78),2.23,t);for(let t=.2;t<2.3;t+=.35)f.push(e*(n+1.78),t,-i,e*(n+1.78),t,i);let _=new Ot;_.setAttribute(`position`,new I(f,3)),d.add(new gt(_,new Tt({color:12167038,transparent:!0,opacity:.4})));for(let t of[-i-1.8,i+1.8])re(e*(n+2.4),t)}for(let e of[-1,1]){for(let t of[-19,-5,17]){let{x:n,z:r}=fn(t,e*17.6);A(n,.2,r,3.4,.55,1.2,u),A(n,.52,r,3.6,.12,1.4,c)}for(let[t,n]of[[-23,.9],[-21,.68],[10,.87],[25,1.1]]){let{x:r,z:i}=fn(t,e*18.2);te(r,-.05,i,n),n>.85&&ne(r,n*1.08+.15,i)}for(let t of[-22,22]){let{x:n,z:r}=fn(t,e*16.5);j(n,1.7,r,.055,.075,3.5,p,10),N(n,3.35,r,1,1.7,n<0?h:g,e<0?0:Math.PI)}}return bn(t),gn(e)}function bn(e){e.updateWorldMatrix(!0,!0);let t=e.matrixWorld.clone().invert(),n=new Map;e.traverse(e=>{if(!(e instanceof V)||e instanceof Ke||Array.isArray(e.material)||e.material.transparent)return;let t=`${e.material.uuid}:${e.castShadow}:${e.receiveShadow}:${e.renderOrder}:${e.layers.mask}`,r=n.get(t)||[];r.push(e),n.set(t,r)});let r=new Set;for(let i of n.values()){if(i.length<2)continue;let n=i.map(e=>{let n=e.geometry.index?e.geometry.toNonIndexed():e.geometry.clone();return n.applyMatrix4(new ft().multiplyMatrices(t,e.matrixWorld)),e.material.userData.worldScale&&dn(n,e.material.userData.worldScale),n.clearGroups(),n}),a=lt(n,!1);if(n.forEach(e=>e.dispose()),!a)continue;a.computeBoundingBox(),a.computeBoundingSphere();let o=i[0],s=new V(a,o.material);s.name=`arena-batch`,s.castShadow=o.castShadow,s.receiveShadow=o.receiveShadow,s.renderOrder=o.renderOrder,s.layers.mask=o.layers.mask,e.add(s);for(let e of i)r.add(e.geometry),e.removeFromParent()}e.traverse(e=>{e instanceof V&&r.delete(e.geometry)}),r.forEach(e=>e.dispose())}var xn=se.colosseum;function Sn(e){return()=>(e=Math.imul(e,1664525)+1013904223>>>0,e/4294967296)}function Cn(){let e=document.createElement(`canvas`);e.width=e.height=1024;let t=e.getContext(`2d`),n=Sn(4815);t.fillStyle=`#8f7456`,t.fillRect(0,0,1024,1024);for(let e=0;e<700;e++){let r=n()*1024,i=n()*1024,a=8+n()*80;for(let n of[-1024,0,1024])for(let o of[-1024,0,1024]){let s=r+n,c=i+o;if(s+a<0||c+a<0||s-a>1024||c-a>1024)continue;let l=t.createRadialGradient(s,c,0,s,c,a);l.addColorStop(0,e%2?`#d4b78e28`:`#392e2928`),l.addColorStop(1,`#00000000`),t.fillStyle=l,t.fillRect(s-a,c-a,a*2,a*2)}}for(let e=0;e<62e3;e++){let r=n()*1024,i=n()*1024,a=.35+n()*1.4;t.fillStyle=e%3==0?`#dfc9a13b`:`#342b292b`,t.fillRect(r,i,a,a*.7)}for(let e=0;e<1600;e++){let e=n()*1024,r=n()*1024,i=.7+n()*2;t.fillStyle=`#4c423d50`,t.beginPath(),t.ellipse(e,r,i*1.5,i,.6,0,Math.PI*2),t.fill(),t.fillStyle=`#b5a18b65`,t.fillRect(e-i,r-i*.4,i*2,.7)}let r=new ct(e);return r.colorSpace=Oe,r.wrapS=r.wrapT=Ft,r.repeat.set(6,6),r.anisotropy=8,r.name=`Colosseum packed earth`,r}function wn(e,t,n,r=.5){let i=new Ot().setFromPoints(t);e.add(new St(i,new Tt({color:n,transparent:!0,opacity:r,depthWrite:!1})))}function Tn(e){let t=Sn(65123),n=[],r=[4609910,7552059,7823433,10127200,3755078,11182225,5850724,3359059],i=(e,t)=>Math.abs(Math.atan2(Math.sin(e-t),Math.cos(e-t)));for(let e=0;e<8;e++){let a=34.48+e*1.86,o=11+e*1.22+.46,s=Math.floor(2*Math.PI*a/1.05);for(let e=0;e<s;e++){let c=(e+.5)*Math.PI*2/s;i(c,Math.round(c/(Math.PI/6))*Math.PI/6)*a<1.08||a>=39.2&&(i(c,-Math.PI/2)<16*Math.PI/180||i(c,Math.PI/2)<11*Math.PI/180)||a>=44.5&&i(c,59*Math.PI/180)<.075||t()<.14||n.push({x:Math.cos(c)*a,y:o,z:Math.sin(c)*a,angle:-c-Math.PI/2,color:r[Math.floor(t()*r.length)],size:.88+t()*.24})}}let a=new Ke(new _t(.21,.28,.66,7),new W({roughness:1}),n.length),o=new Ke(new je(.18,7,5),new W({roughness:1}),n.length),s=new Ke(new _t(.075,.085,.53,5),new W({roughness:1}),n.length*2),c=new jt,l=new F;n.forEach((e,n)=>{c.position.set(e.x,e.y+.32*e.size,e.z),c.rotation.set(0,e.angle,0),c.scale.set(e.size,e.size,e.size),c.updateMatrix(),a.setMatrixAt(n,c.matrix),a.setColorAt(n,l.setHex(e.color)),c.position.y=e.y+.86*e.size,c.updateMatrix(),o.setMatrixAt(n,c.matrix),o.setColorAt(n,l.setHSL(.07+t()*.04,.19+t()*.15,.37+t()*.28));for(let t=0;t<2;t++){let r=t?1:-1,i=n%9==0;c.position.set(e.x+Math.cos(e.angle)*r*.26,e.y+(i?.72:.3),e.z-Math.sin(e.angle)*r*.26),c.rotation.set(i?.4:-.6,e.angle,r*(i?.5:.12)),c.updateMatrix(),s.setMatrixAt(n*2+t,c.matrix),s.setColorAt(n*2+t,l.setHex(e.color))}}),a.name=`Colosseum audience clothing`,o.name=`Colosseum audience faces`,s.name=`Colosseum audience arms`;for(let t of[a,o,s])t.receiveShadow=!0,t.castShadow=!1,t.computeBoundingSphere(),e.add(t);e.userData.spectators=n.length}async function En(e){vn(e);let t=new H;t.name=`rift-arena`,t.userData={mapId:`colosseum`,radius:xn.radius,area:xn.area},e.add(t);let n=Cn(),r=new V(new Mt(xn.radius+2,192),new W({map:n,bumpMap:n,bumpScale:.065,roughness:.98,color:`#c4b4a0`}));r.name=`Colosseum circular soil`,r.rotation.x=-Math.PI/2,r.position.y=-.035,r.receiveShadow=!0,t.add(r);let i=new B({color:`#d9cab1`,transparent:!0,opacity:.29,side:2,depthWrite:!1});for(let[e,n]of[[5,.065],[xn.radius-1.4,.07]]){let r=new V(new Nt(e-n,e,192),i);r.rotation.x=-Math.PI/2,r.position.y=.003,t.add(r)}let a=new V(new Mt(.3,24),i);a.rotation.x=-Math.PI/2,a.position.y=.004,t.add(a),wn(t,[new L(0,.005,-xn.radius+1.4),new L(0,.005,xn.radius-1.4)],`#dac9a8`,.28);let o=[];for(let e of[-1,1]){let n=e<0?`#76caff`:`#ee9565`,r=e*xn.goalX,a=new H;a.name=e<0?`Azure scoring gate`:`Ember scoring gate`,a.position.x=e*(xn.radius+5.7),o.push(a);let s=new V(new pt(.3,8.1,15.1),new W({color:`#282b2a`,roughness:.94}));s.position.y=4,a.add(s);let c=new W({color:`#434847`,metalness:.55,roughness:.67});for(let t=-7;t<=7;t+=.7){let n=new V(new pt(.25,7.8,.09),c);n.position.set(-e*.28,3.9,t),a.add(n)}for(let t of[1,3,5,7]){let n=new V(new pt(.32,.13,14.8),c);n.position.set(-e*.3,t,0),a.add(n)}let l=new V(new _t(1.05,1.05,.12,8),new W({color:n,roughness:.72,emissive:n,emissiveIntensity:.12}));l.rotation.z=Math.PI/2,l.position.set(-e*.5,4.1,0),a.add(l),t.add(a);let u=new V(new yt(.14,xn.goalWidth),new B({color:n,transparent:!0,opacity:.65,depthWrite:!1}));u.rotation.x=-Math.PI/2,u.position.set(r,.018,0),t.add(u);for(let i of[-xn.goalWidth/2,xn.goalWidth/2]){let a=new V(new Ze(.24),new W({color:n,emissive:n,emissiveIntensity:1.3,roughness:.32}));a.position.set(r,2.3,i),t.add(a);let o=new we(n,12,6,2);o.position.set(r-e*.8,2.5,i),t.add(o)}let d=new V(new Nt(3.9,3.96,64,1,-Math.PI/2,Math.PI),i);d.rotation.x=-Math.PI/2,d.rotation.z=e<0?0:Math.PI,d.position.set(r,.012,0),t.add(d)}for(let e of o)bn(e);let s=await new bt().loadAsync(`./models/maps/royal-colosseum-v1.glb`);s.scene.name=`Blender Colosseum`,s.scene.traverse(e=>{if(e instanceof V){e.castShadow=!0,e.receiveShadow=!0;for(let t of Array.isArray(e.material)?e.material:[e.material])t instanceof W&&t.map&&(t.map.anisotropy=8)}}),t.add(s.scene),Tn(t)}var Dn={zenith:`#86c6ee`,middle:`#b4def4`,horizon:`#fdf3df`,below:`#e4f0f2`,sun:{azimuth:-126.4,elevation:44.9,color:`#fff2c9`},rainbow:{azimuth:6,elevation:-15,radius:33,width:5.4,strength:.78},clouds:[[-158,12,6.5],[-122,19,5],[-84,11,7],[-46,21,5.5],[-14,9,4.5],[34,20,5.5],[68,11,7.5],[104,17,6],[138,10,7],[172,22,5.5],[-178,30,4],[10,29,4]]},On=(e,t)=>{let n=U.degToRad(e),r=U.degToRad(t);return new L(Math.cos(r)*Math.cos(n),Math.sin(r),Math.cos(r)*Math.sin(n))};function kn(e){if(e.getObjectByName(`EpicCity_TwilightSky`))return;let t=Dn,n=t.clouds.length,r=[],i=[],a=[],o=[];t.clouds.forEach(([e,t,n],s)=>{let c=On(e,t),l=new L().crossVectors(c,new L(0,1,0)).normalize(),u=new L().crossVectors(l,c).normalize();r.push(c),i.push(l),a.push(u),o.push(new R(Math.sin(U.degToRad(n)),s*7.31+1.7))});let s=new vt({name:`StorybookSkyMaterial`,side:1,depthTest:!1,depthWrite:!1,fog:!1,toneMapped:!0,defines:{CLOUDS:n},uniforms:{uZenith:{value:new F(t.zenith)},uMiddle:{value:new F(t.middle)},uHorizon:{value:new F(t.horizon)},uBelow:{value:new F(t.below)},uSunDir:{value:On(t.sun.azimuth,t.sun.elevation)},uSunColor:{value:new F(t.sun.color)},uRainbowDir:{value:On(t.rainbow.azimuth,t.rainbow.elevation)},uRainbow:{value:new L(U.degToRad(t.rainbow.radius),U.degToRad(t.rainbow.width),t.rainbow.strength)},uCloudC:{value:r},uCloudR:{value:i},uCloudU:{value:a},uCloudS:{value:o}},vertexShader:`
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
      }`}),c=new je(650,48,32),l=new V(c,s);l.name=`EpicCity_TwilightSky`,l.renderOrder=-1e4,l.frustumCulled=!1,l.castShadow=!1,l.receiveShadow=!1;let u=new L;l.onBeforeRender=(e,t,n)=>{n.getWorldPosition(u),l.position.copy(u),l.updateMatrixWorld(!0)},l.userData.dispose=()=>{l.removeFromParent(),c.dispose(),s.dispose()},e.add(l)}var An={dirt:{half:28,radius:33},trackLines:[24,25.6,27.2,28.8,30.4],clear:12,building:{front:90,z:-6,length:46,depth:11},open:[{x0:54,x1:116,z0:-44,z1:34},{x0:-42,x1:30,z0:-56,z1:-33},{x0:-36,x1:46,z0:33,z1:52},{x0:-97,x1:-64,z0:-2,z1:32}],rings:[{radius:185},{radius:310},{radius:500}]};function jn(e){return()=>{e=e+1831565813|0;let t=Math.imul(e^e>>>15,1|e);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}var Mn=(e,t)=>{let n=Math.sin(e*127.1+t*311.7)*43758.5453;return n-Math.floor(n)};function Nn(e,t){let n=Math.floor(e),r=Math.floor(t),i=e-n,a=t-r,o=i*i*(3-2*i),s=a*a*(3-2*a),c=Mn(n,r),l=Mn(n+1,r),u=Mn(n,r+1),d=Mn(n+1,r+1);return c+(l-c)*o+(u-c)*s+(c-l-u+d)*o*s}var Pn=(e,t,n)=>Nn(Math.cos(e)*t+n,Math.sin(e)*t+n*1.7),Fn=(e,t,n)=>{let r=Math.min(1,Math.max(0,(n-e)/(t-e)));return r*r*(3-2*r)},In=(e,t)=>Math.hypot(Math.max(Math.abs(e)-An.dirt.half,0),t)-An.dirt.radius,Ln=(e,t)=>Math.hypot(Math.max(Math.abs(e)-P.width/2,0),Math.max(Math.abs(t)-P.depth/2,0)),Rn=(e,t)=>Math.min(...An.open.map(n=>Math.hypot(Math.max(n.x0-e,0,e-n.x1),Math.max(n.z0-t,0,t-n.z1))));function zn(e,t){let n=Fn(30,110,In(e,t))*Fn(0,20,Rn(e,t));return n<=0?0:n*(5+11*Nn(e*.011+3.1,t*.011+7.7))+n*n*9}var Bn=new F;function Vn(e,t){e.getAttribute(`uv`)&&e.deleteAttribute(`uv`);let n=e.getAttribute(`position`),r=new Float32Array(n.count*3);for(let e=0;e<n.count;e++){let i=typeof t==`function`?t(n.getX(e),n.getY(e),n.getZ(e)):Bn.set(t);r[e*3]=i.r,r[e*3+1]=i.g,r[e*3+2]=i.b}return e.setAttribute(`color`,new I(r,3)),e.index||e.setIndex([...Array(n.count).keys()]),e}var Hn=(e,t,n,r)=>{let i=new F(e),a=new F(t);return(e,t)=>Bn.copy(i).lerp(a,Fn(n,r,t))};function Un(e,t,n=1){let r=e.index?e.toNonIndexed():e,i=t.map(e=>new F(e)),a=r.getAttribute(`position`).count;r.getAttribute(`uv`)&&r.deleteAttribute(`uv`);let o=new Float32Array(a*3);for(let e=0;e<a;e++){let t=i[Math.floor(e/3/n)%i.length];o[e*3]=t.r,o[e*3+1]=t.g,o[e*3+2]=t.b}return r.setAttribute(`color`,new I(o,3)),r.setIndex([...Array(a).keys()]),r}function Wn(e,t,n){let r=e.index?e.toNonIndexed():e,i=t.map(e=>new F(e)),a=r.getAttribute(`position`),o=a.count,s=new Float32Array(o*3);r.getAttribute(`uv`)&&r.deleteAttribute(`uv`);for(let e=0;e<o;e+=3){let t=(a.getX(e)+a.getX(e+1)+a.getX(e+2))/3,r=(a.getZ(e)+a.getZ(e+1)+a.getZ(e+2))/3,o=i[Math.floor((Math.atan2(r,t)+Math.PI)/(Math.PI*2)*n)%i.length];for(let t=0;t<3;t++)s[(e+t)*3]=o.r,s[(e+t)*3+1]=o.g,s[(e+t)*3+2]=o.b}return r.setAttribute(`color`,new I(s,3)),r.setIndex([...Array(o).keys()]),r}var G=(e,t,n,r,i=0,a=1,o=0,s=0)=>e.applyMatrix4(new ft().compose(new L(t,n,r),new z().setFromEuler(new qe(o,i,s,`YXZ`)),Array.isArray(a)?new L(...a):new L(a,a,a))),K=(e,t,n,r)=>Vn(new pt(e,t,n),r),q=(e,t,n,r,i=10)=>Vn(new _t(e,t,n,i,1),r),Gn=(e,t,n,r=10)=>Vn(new Xe(e,t,r,1),n),Kn=(e,t,n=10,r=7)=>Vn(new je(e,n,r),t);function qn(e,t,n,r,i=6){let a=t.clone().sub(e);return q(n,n,a.length(),r,i).applyMatrix4(new ft().compose(e.clone().add(t).multiplyScalar(.5),new z().setFromUnitVectors(new L(0,1,0),a.normalize()),new L(1,1,1)))}function Jn(e,t,n){let r=0;e.forEach(([t,n],i)=>{let[a,o]=e[(i+1)%e.length];r+=t*o-a*n}),r<0&&(e=[...e].reverse());let i=[],a=[],o=e.length,s=(t,n)=>{let r=i.length/3;for(let[n,r]of e)i.push(n,r,t);for(let e=1;e<o-1;e++)a.push(...n?[r,r+e+1,r+e]:[r,r+e,r+e+1])};s(t/2,!1),s(-t/2,!0);for(let n=0;n<o;n++){let[r,s]=e[n],[c,l]=e[(n+1)%o],u=i.length/3;i.push(r,s,t/2,c,l,t/2,c,l,-t/2,r,s,-t/2),a.push(u,u+3,u+2,u,u+2,u+1)}let c=new Ot;return c.setAttribute(`position`,new I(i,3)),c.setIndex(a),c.computeVertexNormals(),Vn(c,n)}function Yn(e,t,n,r,i){let a=[],o=[],s=e.length;for(let r=0;r<s;r++){let o=e[i?(r-1+s)%s:Math.max(0,r-1)],c=e[i?(r+1)%s:Math.min(s-1,r+1)].clone().sub(o).normalize(),l=-c.y*t/2,u=c.x*t/2,d=e[r];a.push(d.x-l,n,d.y-u,d.x+l,n,d.y+u)}for(let e=0;e<(i?s:s-1);e++){let t=e*2,n=(e+1)%s*2;o.push(t,n,t+1,t+1,n,n+1)}let c=new Ot;c.setAttribute(`position`,new I(a,3)),c.setIndex(o),c.computeVertexNormals();let l=c.getAttribute(`normal`);for(let e=0;e<l.count;e++)l.setXYZ(e,0,1,0);return Vn(c,r)}var Xn={dirt:`#dcbd8f`,dirtDark:`#c9a575`,grass:`#93c66e`,grassLight:`#a9d47e`,grassDark:`#7cb35f`,chalk:`#fbfaf3`,board:`#fbf6ec`,azure:`#8ccdf0`,ember:`#f6a596`,posts:[`#f4a9bd`,`#9ddbc6`,`#f7dc72`,`#c4b2ee`],trunk:`#94653f`,leaves:[`#6fb05d`,`#5d9e55`,`#86c26b`],pine:`#3f8061`,blossom:`#f3b5c8`,autumn:`#eba648`,wall:`#f7edd9`,roof:`#e2705a`,trim:`#4aa3a2`,glass:`#a9daf0`,wood:`#a76a45`,navy:`#3f4b77`,cap:[`#e5574d`,`#9c84d6`,`#f29e4c`],stem:`#f8eedb`,rainbow:[`#ff9aa2`,`#ffc58e`,`#fff09a`,`#a9e8a4`,`#9ccff6`,`#c9a8ef`]};function Zn(){let e=jn(20261002),t=[],n=7.5;for(let r=-175;r<=175;r+=n)for(let i=-175;i<=175;i+=n){let a=r+(e()-.5)*n*.9,o=i+(e()-.5)*n*.9,s=e(),c=e(),l=e(),u=e(),d=Ln(a,o),f=In(a,o),p=Math.hypot(a,o);if(d<An.clear+2||f<4||Rn(a,o)<3||p>175||s>.82*Fn(4,10,f)*(1-.8*Fn(45,120,f))+.035)continue;let m=c<.58?`round`:c<.8?`pine`:c<.9?`blossom`:`autumn`;t.push({x:a,z:o,y:zn(a,o),scale:.78+l*.62,kind:m,tint:u})}return t}function Qn(e){kn(e);let t=new H;t.name=`rift-arena`,e.add(t);let n=P.width/2,r=P.depth/2,i=P.goalWidth/2;t.userData={mapId:`school`,theme:`storybook-forest-school`,courtWidth:P.width,courtDepth:P.depth,goalWidth:P.goalWidth,area:P.width*P.depth,tallClear:An.clear};let a=[],o=[],s=[],c=[],l=[],u=jn(7),d=Xn,f=(e,t,n)=>new L(e,t,n),p=(e,t)=>Math.abs(e)<n+30&&Math.abs(t)<r+30?a:s,m=(e,t)=>{let n=In(e,t),r=Nn(e*.06,t*.06),i=Nn(e*.4+9,t*.4+2),a=Bn.set(d.dirt).lerp(new F(d.dirtDark),r*.45+i*.15).clone(),o=new F(d.grass).lerp(new F(r>.5?d.grassLight:d.grassDark),Math.abs(r-.5)*1.2),s=zn(e,t);return s>0&&o.lerp(new F(`#9fc7a0`),Fn(4,40,s)*.35),a.lerp(o,Fn(-.4,1.1,n))},h=new yt(130,84,130,84);h.rotateX(-Math.PI/2);let g=new yt(1e3,1e3,100,100);g.rotateX(-Math.PI/2);{let e=g.getAttribute(`position`);for(let t=0;t<e.count;t++)e.setY(t,zn(e.getX(t),e.getZ(t))-.05);g.computeVertexNormals()}for(let e of[h,g]){let t=e.getAttribute(`position`),n=e.getAttribute(`uv`),r=new Float32Array(t.count*3);for(let e=0;e<t.count;e++){let i=t.getX(e),a=t.getZ(e),o=m(i,a);r[e*3]=o.r,r[e*3+1]=o.g,r[e*3+2]=o.b,n.setXY(e,i/5,a/5)}e.setAttribute(`color`,new I(r,3))}let _=new W({name:`School yard ground`,vertexColors:!0,roughness:1,metalness:0,map:$n()}),v=new V(lt([h,g]),_);v.name=`school-yard-ground`,v.receiveShadow=!0,t.add(v),h.dispose(),g.dispose();let y=.12,b=.012,x=(e,t,n,r)=>o.push(G(K(n,.004,r,d.chalk),e,b,t));for(let e of[-r+.1,r-.1])x(0,e,P.width,y);for(let e of[-n+.1,n-.1])x(e,0,y,P.depth);x(0,0,y,P.depth);let S=(e,t,n,r=0,i=Math.PI*2)=>o.push(G(Vn(new Nt(n-y/2,n+y/2,72,1,r,i),d.chalk),e,b,t,0,1,-Math.PI/2));S(0,0,6.4),o.push(G(Vn(new Mt(.28,16),d.chalk),0,b,0,0,1,-Math.PI/2));for(let e of[-1,1]){let t=e*(n-9),i=e*(n-3.5),a=e*(n-7);x(t,0,y,26),x(i,0,y,19);for(let r of[-13,13])x((t+e*n)/2,r,9,y);for(let t of[-9.5,9.5])x((i+e*n)/2,t,3.5,y);o.push(G(Vn(new Mt(.22,14),d.chalk),a,b,0,0,1,-Math.PI/2));let s=Math.acos(2/6.4);S(a,0,6.4,e>0?Math.PI-s:-s,s*2);for(let t of[-1,1])S(e*n,t*r,1,e>0?t>0?Math.PI/2:Math.PI:t>0?0:-Math.PI/2,Math.PI/2)}let C=e=>{let t=[],n=An.dirt.half;for(let r=0;r<=36;r++){let i=-Math.PI/2+Math.PI*r/36;t.push(new R(n+Math.cos(i)*e,Math.sin(i)*e))}for(let r=0;r<=36;r++){let i=Math.PI/2+Math.PI*r/36;t.push(new R(-n+Math.cos(i)*e,Math.sin(i)*e))}return t};for(let e of An.trackLines)o.push(Yn(C(e),.1,.011,d.chalk,!0));x(0,(An.trackLines[0]+An.trackLines.at(-1))/2,.16,An.trackLines.at(-1)-An.trackLines[0]);for(let e of[-r-.22,r+.22]){a.push(G(K(P.width+.6,.42,.16,d.board),0,.21,e));for(let t of[-1,1])a.push(G(K(n+.3,.07,.24,t<0?d.azure:d.ember),t*(n+.3)/2,.45,e))}for(let e of[-1,1])for(let t of[-(r+i)/2,(r+i)/2])a.push(G(K(.16,.42,r-i+.3,d.board),e*(n+.45),.21,t)),a.push(G(K(.24,.07,r-i+.3,e<0?d.azure:d.ember),e*(n+.45),.45,t));let w=0,T=(e,t)=>{let n=d.posts[w++%d.posts.length];a.push(G(q(.08,.09,.5,d.board,8),e,.25,t),G(Kn(.14,n,9,6),e,.56,t))};for(let e=-n;e<=n+.01;e+=3.4)for(let t of[-r-.22,r+.22])T(e,t);for(let e of[-1,1])for(let t of[-r,-i-.2,i+.2,r])T(e*(n+.45),t);for(let e of[-1,1]){let r=e<0?d.azure:d.ember,s=e*(n+.22),c=e*(n+1.9);for(let e of[-i,i])a.push(G(q(.12,.12,2.42,`#ffffff`,10),s,1.21,e)),a.push(qn(f(s,2.36,e),f(c,.06,e),.07,`#f4f4f0`)),a.push(qn(f(s,.06,e),f(c,.06,e),.06,`#f4f4f0`));a.push(qn(f(s,2.36,-i-.1),f(s,2.36,i+.1),.11,`#ffffff`,10)),a.push(qn(f(c,.06,-i),f(c,.06,i),.06,`#f4f4f0`)),o.push(G(K(1.66,.02,P.goalWidth-.1,r),(s+c)/2,.012,0));let l=[];for(let e=-i;e<=i+.01;e+=.5)l.push(s,2.36,e,c,.06,e);for(let e=.08;e<1;e+=.12){let t=s+(c-s)*e,n=2.36+-2.3*e;l.push(t,n,-i,t,n,i)}for(let e of[-i,i]){for(let t=.15;t<1;t+=.17){let n=s+(c-s)*t;l.push(n,.06,e,n,2.36+-2.3*t,e)}for(let t=.4;t<2.36;t+=.35)l.push(s,t,e,s+(c-s)*(2.36-t)/2.3,t,e)}let u=new Ot;u.setAttribute(`position`,new I(l,3));let p=new gt(u,new Tt({color:r,transparent:!0,opacity:.6}));p.name=e<0?`azure-goal`:`ember-goal`,p.userData={goalPlane:e*n,opening:P.goalWidth},t.add(p);for(let t of[-i-1.2,i+1.2])a.push(G(q(.05,.05,3.2,`#ffffff`,6),e*(n+1.2),1.6,t)),a.push(G(Jn([[0,0],[1.1,-.35],[0,-.7]],.03,r),e*(n+1.2),3.15,t,e<0?0:Math.PI))}for(let e=-27;e<=27;e+=9){a.push(G(K(7.6,.28,1.4,`#d9876a`),e,.14,35)),a.push(G(K(7.2,.1,1,`#8a6a4e`),e,.27,35));for(let t=0;t<9;t++){let n=e-3.2+t*.8,r=35+(t%2?.25:-.25),i=d.rainbow[(t+Math.round(e/9)+3)%6];a.push(G(q(.025,.025,.45,`#5f9e55`,4),n,.5,r),G(Gn(.13,.26,i,6),n,.8,r,0,1,Math.PI))}}a.push(G(K(3.2,1,2,`#ffffff`),0,.5,37.4),G(K(3.4,.08,2.2,`#7fbf8f`),0,1.04,37.4),G(K(1.2,.5,.8,`#7fbf8f`),0,.25,36.1));for(let e of[-17,4]){for(let[t,n]of[[-3.2,-2.2],[3.2,-2.2],[-3.2,2.2],[3.2,2.2]])a.push(G(q(.06,.06,2.7,`#ffffff`,6),e+t,1.35,42+n));a.push(G(Un(new Xe(3.9,1.3,4,1).rotateY(Math.PI/4),[`#7ec0ea`,`#ffffff`]),e,3.3,42,0,[1.3,1,1]));for(let t=0;t<12;t++)for(let n of[-2.76,2.76])a.push(G(Jn([[-.3,0],[.3,0],[0,-.38]],.02,t%2?`#7ec0ea`:`#ffffff`),e-3.3+t*.6,2.66,42+n));for(let t=0;t<9;t++)for(let n of[-3.58,3.58])a.push(G(Jn([[-.3,0],[.3,0],[0,-.38]],.02,t%2?`#7ec0ea`:`#ffffff`),e+n,2.66,39.6+t*.6,Math.PI/2));a.push(G(K(5.2,.08,1,`#ffffff`),e,.78,42),G(K(.08,.74,.9,`#d8d0c0`),e-2.4,.37,42),G(K(.08,.74,.9,`#d8d0c0`),e+2.4,.37,42))}a.push(G(q(.09,.11,9,`#ffffff`,8),26,4.5,39),G(Kn(.2,`#f7dc72`),26,9.1,39),G(Jn([[0,0],[2.6,-.8],[0,-1.6]],.04,`#f9e27a`),26.1,8.7,39),G(q(.32,.32,.05,`#e2705a`,14),26.9,8.1,39,0,1,Math.PI/2));let E=[-34,-10,14,38];for(let e of E)a.push(G(q(.07,.09,6.2,`#f3ece0`,6),e,3.1,48));for(let e=0;e<E.length-1;e++){let t=E[e],n=E[e+1],r=[];for(let e=0;e<=1.0001;e+=1/26)r.push(f(t+(n-t)*e,6.1-Math.sin(Math.PI*e)*1.6,48));for(let t=0;t<r.length-1;t++)a.push(qn(r[t],r[t+1],.02,`#7a6a5a`,4)),t%1==0&&a.push(G(Jn([[-.3,0],[.3,0],[0,-.62]],.02,d.rainbow[(t+e)%6]),r[t].x+.45,r[t].y-.02,48))}for(let e=0;e<9;e++)a.push(G(Vn(new It(.48,.2,6,14),d.posts[e%4]),-33+e*1.5,.25,-35.5,0,1,0,0));[.9,1.15,1.4].forEach((e,t)=>{let n=-33+t*1.8;for(let r of[-41,-39])a.push(G(q(.07,.07,e,d.posts[t],6),n,e/2,r));a.push(qn(f(n,e,-41),f(n,e,-39),.035,`#b9c2cc`,6))});for(let e=0;e<=3;e++)for(let t=0;t<=3;t++){let n=[`#ef7f74`,`#f7d36a`,`#8fd18a`,`#7dbbea`];a.push(qn(f(-24+e,0,-44+t),f(-24+e,3,-44+t),.045,`#f2f2f2`,5));for(let r=1;r<=3;r++)e<3&&a.push(qn(f(-24+e,r,-44+t),f(-23+e,r,-44+t),.04,n[r],5)),t<3&&a.push(qn(f(-24+e,r,-44+t),f(-24+e,r,-43+t),.04,n[r],5))}for(let[e,t]of[[-.8,-.8],[.8,-.8],[-.8,.8],[.8,.8]])a.push(G(q(.08,.08,3.2,`#7dbbea`,6),-8+e,1.6,-44+t));a.push(G(K(1.8,.12,1.8,`#f7d36a`),-8,2.2,-44),G(Gn(1.5,1,`#ef7f74`,4),-8,3.7,-44,Math.PI/4)),a.push(G(K(.9,.1,4.6,`#f7d36a`),-8,1.15,-40.2,0,1,-.5),G(K(.08,.3,4.6,`#ef7f74`),-7.55,1.32,-40.2,0,1,-.5),G(K(.08,.3,4.6,`#ef7f74`),-8.45,1.32,-40.2,0,1,-.5));for(let e=0;e<6;e++)a.push(qn(f(-8.6,.35*e+.2,-45.2),f(-7.4,.35*e+.2,-45.2),.04,`#f2f2f2`,5));for(let e of[-46,-42])a.push(qn(f(6,0,e-1.2),f(6,2.8,e),.08,`#ef7f74`),qn(f(6,0,e+1.2),f(6,2.8,e),.08,`#ef7f74`));a.push(qn(f(6,2.8,-46.3),f(6,2.8,-41.7),.08,`#f7d36a`));for(let e of[-45,-43])a.push(qn(f(5.75,2.8,e),f(5.75,.65,e),.015,`#9aa3ad`,4),qn(f(6.25,2.8,e),f(6.25,.65,e),.015,`#9aa3ad`,4),G(K(.75,.08,.4,`#8fd18a`),6,.62,e));a.push(G(K(5,.2,.25,d.wood),20,.1,-41.5),G(K(5,.2,.25,d.wood),20,.1,-45.5),G(K(.25,.2,4.2,d.wood),17.5,.1,-43.5),G(K(.25,.2,4.2,d.wood),22.5,.1,-43.5)),o.push(G(K(4.8,.06,3.8,`#f0dca9`),20,.04,-43.5)),a.push(G(Gn(.6,.7,`#e8cf98`,8),19,.4,-43),G(q(.22,.17,.32,`#e5574d`,10),21.2,.2,-44.2));for(let e=0;e<4;e++)a.push(G(K(2.2,.45,.5,d.wood),-14+e*9,.45,51.5),G(K(.1,.45,.4,`#7c5338`),-14.9+e*9,.22,51.5),G(K(.1,.45,.4,`#7c5338`),-13.1+e*9,.22,51.5));{let e=An.building,t=e.front,n=(t+(e.front+e.depth))/2,r=8.8;s.push(G(K(e.depth,r,e.length,d.wall),n,r/2,e.z),G(K(e.depth+.3,.5,e.length+.3,`#d9c9ae`),n,.25,e.z));let i=(e,t,n,r,i,a,o,c=!1)=>{let l=c?Math.PI/2:0;s.push(G(Jn([[-n/2-.7,0],[n/2+.7,0],[0,r]],e,o),a,i,t,l)),s.push(G(Jn([[-n/2,0],[n/2,0],[0,r-.4]],e-.6,d.wall),a,i-.02,t,l))};i(e.length+1.2,e.z,e.depth,4.6,r,n,d.roof);for(let n=e.z-e.length/2+2.6;n<=e.z+e.length/2-2.4;n+=3.7)if(!(Math.abs(n-e.z)<5)){for(let[e,r]of[[2.6,u()<.25],[6.6,u()<.2]])if(s.push(G(K(.12,2.5,2.2,`#ffffff`),t-.06,e,n)),(r?c:s).push(G(K(.14,2.1,1.8,r?`#ffe7b0`:d.glass),t-.09,e,n)),s.push(G(K(.18,.1,1.8,`#ffffff`),t-.1,e,n),G(K(.18,2.1,.1,`#ffffff`),t-.1,e,n)),e<3){s.push(G(K(.5,.3,2,d.wood),t-.3,e-1.35,n));for(let r=0;r<4;r++)s.push(G(Kn(.17,r%2?`#f08a9b`:`#f7d36a`,7,5),t-.32,e-1.1,n-.7+r*.47))}}let a=t-.4,o=7.2,l=17.5;s.push(G(K(o,l,o,d.wall),a+o/2-1,l/2,e.z),G(K(7.6000000000000005,.5,7.6000000000000005,d.trim),a+o/2-1,l,e.z),G(K(7.6000000000000005,.4,7.6000000000000005,d.trim),a+o/2-1,r,e.z)),s.push(G(Gn(o*.78,7.5,d.trim,4),a+o/2-1,21.4,e.z,Math.PI/4),G(Kn(.35,`#f7d36a`),a+o/2-1,25.3,e.z)),s.push(G(q(.05,.05,2.2,`#5d5a6b`,5),a+o/2-1,26.3,e.z),G(Jn([[0,.25],[1.4,0],[0,-.25]],.05,`#5d5a6b`),a+o/2-1,26.9,e.z,Math.PI/2));let f=a-1.05;s.push(G(q(2.25,2.25,.2,d.navy,32),f,12,e.z,0,1,0,Math.PI/2),G(q(2,2,.24,`#fffdf6`,32),f-.02,12,e.z,0,1,0,Math.PI/2));for(let t=0;t<12;t++){let n=t*Math.PI/6;s.push(G(K(.1,t%3?.22:.42,.1,d.navy),f-.16,12+Math.cos(n)*1.65,e.z+Math.sin(n)*1.65,0,1,n))}for(let[t,n,r]of[[1.1,-Math.PI/3,.16],[1.55,Math.PI/3,.11]])s.push(G(K(.1,t,r,d.navy),f-.22,12+Math.cos(n)*t/2,e.z+Math.sin(n)*t/2,0,1,n));s.push(G(Jn([[-1.1,0],[1.1,0],[1.1,1.8],[0,2.6],[-1.1,1.8]],.2,`#6b5a78`),a-1.02,14.6,e.z,Math.PI/2)),s.push(G(Kn(.5,`#f2c75c`,10,7),a-1,15.7,e.z)),s.push(G(Jn([[-1.4,0],[1.4,0],[1.4,2.6],[0,3.8],[-1.4,2.6]],.25,d.wood),a-1.05,.5,e.z,Math.PI/2)),s.push(G(K(.12,3,.08,`#7c5338`),a-1.2,2.2,e.z),G(Kn(.09,`#f7d36a`,6,4),a-1.25,2,e.z+.45));for(let t=0;t<3;t++)s.push(G(K(1.2-t*.3,.2,4.2,`#d9c9ae`),a-1.6-t*.3+.45,.1+t*.2,e.z));i(4.4,e.z,3.2,1.6,4.4,a-2.2,d.roof,!0);for(let t of[e.z-3.4,e.z+3.4])s.push(G(q(.15,.15,3.9,`#ffffff`,8),a-3.3,2.45,t));for(let t of[e.z-5.5,e.z+5.5])s.push(G(Kn(1.25,`#6fb05d`,10,7),a-2.4,1,t),G(Kn(.9,`#86c26b`,9,6),a-2.6,1.9,t));for(let t=An.dirt.half+An.dirt.radius+1.5;t<a-2.6;t+=1.7)s.push(G(q(.62,.66,.1,`#e9e2d4`,12),t,.05,e.z+Math.sin(t*.7)*.35,t));for(let n of[e.z-e.length/2+.4,e.z+e.length/2-.4])s.push(G(K(.3,6,.5,`#9ccf88`),t-.1,3.6,n),G(Kn(1.1,`#86c26b`,9,6),t-.3,6.6,n))}for(let e of Zn()){let t=e.scale,n=p(e.x,e.z),r=.9+e.tint*.2,i=In(e.x,e.z)>45,a=i?[8,5,7,4]:[10,7,9,6];if(n.push(G(q(.24,.38,3.2,d.trunk,i?5:7),e.x,e.y+1.4*t,e.z,0,t)),e.kind===`pine`){let a=new F(d.pine).multiplyScalar(r);[[2.7,3.4,2.6],[2.1,3,4.4],[1.4,2.6,6]].forEach(([r,o,s])=>n.push(G(Gn(r,o,Hn(`#${a.getHexString()}`,`#7fb48a`,-o/2,o/2),i?7:9),e.x,e.y+s*t,e.z,e.tint*6,t)))}else{let i=e.kind===`blossom`?d.blossom:e.kind===`autumn`?d.autumn:d.leaves[Math.floor(e.tint*3)%3],o=new F(i).lerp(new F(`#fffbe8`),.32),s=Hn(`#${new F(i).multiplyScalar(r*.9).getHexString()}`,`#${o.getHexString()}`,-1.6,1.8);n.push(G(Kn(2.3,s,a[0],a[1]),e.x,e.y+4.6*t,e.z,0,t)),n.push(G(Kn(1.6,s,a[2],a[3]),e.x+1.2*t,e.y+4*t,e.z+.6*t,0,t),G(Kn(1.5,s,a[2],a[3]),e.x-1.1*t,e.y+4.2*t,e.z-.5*t,0,t))}}let D=jn(11);for(let e=0;e<46;e++){let t=D()*Math.PI*2,n=An.dirt.radius+3+D()*30,r=Math.cos(t)*(n+An.dirt.half*Math.abs(Math.cos(t))),i=Math.sin(t)*n,a=[`#ffffff`,`#fff1a0`,`#f8c0d0`,`#d6c6f4`][e%4];for(let e=0;e<12;e++){let e=r+(D()-.5)*3.2,t=i+(D()-.5)*3.2;In(e,t)<1||Rn(e,t)<.5||p(e,t).push(G(Kn(.11,a,6,4),e,zn(e,t)+.07,t,0,[1,.45,1]),G(Kn(.04,`#f2c94c`,4,3),e,zn(e,t)+.12,t))}}let O=(e,t,n,r,i)=>{let a=zn(e,t);i.push(G(q(.42,.55,2.2,d.stem,10),e,a+1.1*n,t,0,n));let o=Vn(new je(1.5,14,7,0,Math.PI*2,0,Math.PI/2),Hn(r,r,0,1));i.push(G(o,e,a+2*n,t,0,[n,n*.72,n]),G(Vn(new Mt(1.5,14),`#f1dfc2`),e,a+2*n+.01,t,0,n,Math.PI/2));for(let r=0;r<7;r++){let o=r*2.4,s=.55+r%3*.3,c=Math.sqrt(Math.max(0,1.5**2-s*s))*.72;i.push(G(Kn(.2+r%2*.08,`#fffaf0`,7,5),e+Math.cos(o)*s*n,a+(2+c)*n,t+Math.sin(o)*s*n,0,[n,n*.5,n]))}};for(let[e,t,n]of[[-62,-40,5],[-58,42,4],[52,46,4],[-30,-64,5],[66,-40,3],[-82,-8,4]])for(let r=0;r<n;r++){let n=e+(u()-.5)*9,i=t+(u()-.5)*9;Ln(n,i)<An.clear+1||In(n,i)<1||O(n,i,.6+u()*1.8,d.cap[r%3],p(n,i))}{let e=zn(-98,16);s.push(G(q(2.1,3.2,24,d.trunk,12),-98,e+12,16));for(let t=0;t<6;t++){let n=t*Math.PI/3+.3;s.push(qn(f(-98+Math.cos(n)*1.5,e+2.5,16+Math.sin(n)*1.5),f(-98+Math.cos(n)*4.2,e-.3,16+Math.sin(n)*4.2),.7,d.trunk,7))}for(let[t,n,r]of[[3,15,2],[-3.5,17,-1.5],[1,19,-3.5]])s.push(qn(f(-98,e+n-4,16),f(-98+t*2,e+n,16+r*2),.6,d.trunk,7));for(let[t,n,r,i]of[[0,29,0,9.5],[6,26,5,7],[-7,27,-3,7.5],[3,32,-6,6.5],[-4,33,5,6],[7,30,-6,5.5],[-8,24,6,6]])s.push(G(Kn(i,Hn(`#5d9e55`,`#a6d67d`,-i,i),14,10),-98+t,e+n,16+r));let t=e+13;s.push(qn(f(-96.5,e+10,16.5),f(-90.6,t-.2,17),.6,d.trunk,7),qn(f(-89,t-.2,17),f(-88.7,e+.2,17),.3,d.trunk,6));for(let n of[-.45,.45])s.push(qn(f(-87.1,t,17+n),f(-86.4,e+.05,17+n),.04,`#c9a77a`,4));for(let n=1;n<10;n++){let r=n/10;s.push(qn(f(-87.1+.7*r,t-(t-e)*r,16.55),f(-87.1+.7*r,t-(t-e)*r,17.45),.035,`#a8835a`,4))}s.push(G(K(3.6,.3,3.6,d.wood),-89,t,17),G(K(3,2.6,3,`#fbe9c8`),-89,t+1.45,17),G(Jn([[-2,0],[2,0],[0,1.7]],3.6,`#e5574d`),-89,t+2.75,17,Math.PI/2)),s.push(G(q(.55,.55,.1,`#ffe7b0`,14),-87.48,t+1.6,17,0,1,0,Math.PI/2)),s.push(G(Jn([[-.9,0],[.9,0],[.9,1.4],[0,2.2],[-.9,1.4]],.3,`#7c5338`),-95.5,e+.1,16,Math.PI/2+.1));for(let e=0;e<8;e++)c.push(G(Kn(.16,`#fff1b0`,6,4),-94.5+e*.55,t-.6-Math.sin(e/7*Math.PI)*.7,15.1))}let k=(e,t,n,r)=>{s.push(G(Gn(9,15,Hn(`#a1849a`,`#dcbcc4`,-7.5,7.5),8),e,t-7.6*r,n,.4,r,Math.PI)),s.push(G(q(9.4,9.1,1.4,Hn(`#7fb35f`,`#a6d67d`,-.7,.7),12),e,t,n,0,r));for(let[i,a,o]of[[-3,2,2.4],[3.5,-2,1.9],[0,-4.5,1.6]])s.push(G(q(.25,.35,2.4,d.trunk,6),e+i*r,t+1.6*r,n+a*r,0,r),G(Kn(o,Hn(`#5d9e55`,`#a6d67d`,-o,o),9,6),e+i*r,t+(2.9+o*.6)*r,n+a*r,0,r));s.push(G(K(.3,22,2.4,Hn(`#e8f6ff`,`#a9daf0`,-11,11)),e+9.1*r,t-11*r,n,0,r))};k(-150,66,118,1),k(165,82,-150,.85),k(-40,104,-235,.7),k(120,58,185,.65),s.push(G(Wn(new je(6,16,10),[`#f7d36a`,`#ef7f74`,`#7dbbea`,`#ffffff`],16),46,46,118,0,[1,1.18,1])),s.push(G(K(1.8,1.3,1.8,d.wood),46,35.8,118));for(let[e,t]of[[-.8,-.8],[.8,-.8],[-.8,.8],[.8,.8]])s.push(qn(f(46+e,36.4,118+t),f(46+e*3.4,41.4,118+t*3.4),.04,`#6b5a4a`,4));let A=[{r:An.rings[0].radius,h:e=>22+12*Pn(e,2.2,1)+2.2*Math.abs(Math.sin(e*47)),low:`#5f9f55`,high:`#9fd27a`,snow:999},{r:An.rings[1].radius,h:e=>52+42*Pn(e,1.6,5)+26*Math.max(0,Math.sin(e*5+1))**3,low:`#4f8f9c`,high:`#8cc3c0`,snow:999},{r:An.rings[2].radius,h:e=>95+60*Pn(e,1.3,9)+90*Math.max(0,Math.sin(e*4+2.2))**6+45*Math.max(0,Math.sin(e*9+.7))**8,low:`#6c7cc4`,high:`#a3afe8`,snow:162}];for(let e of A){let t=[0,.45,.75,.9,.975,1],n=[],r=[],i=[],a=new F(e.low),o=new F(e.high);for(let i=0;i<=360;i++){let s=i/360*Math.PI*2,c=e.h(s),l=Math.cos(s),u=Math.sin(s);for(let i of t){let t=-6+(c+6)*i,s=a.clone().lerp(o,Math.min(1,i*i/.95));i===1&&s.lerp(new F(`#ffffff`),.22),t>e.snow&&s.lerp(new F(`#fbfdff`),Fn(e.snow,e.snow+8,t)),n.push(l*e.r,t,u*e.r),r.push(s.r,s.g,s.b)}}for(let e=0;e<360;e++)for(let n=0;n<t.length-1;n++){let r=e*t.length+n,a=r+t.length;i.push(r,a,r+1,a,a+1,r+1)}let s=new Ot;s.setAttribute(`position`,new I(n,3)),s.setAttribute(`color`,new I(r,3)),s.setIndex(i),s.computeVertexNormals(),l.push(s)}{let e=U.degToRad(-112),t=An.rings[1].radius-6,n=A[1].h(e+Math.PI*2)-4,r=Math.cos(e)*t,i=Math.sin(e)*t,a=1.7,o=`#f6cbd6`;l.push(G(Vn(new pt(16*a,8*a,5*a),o),r,n+4*a,i,-e+Math.PI/2));for(let[t,s,c]of[[-9,16,3.2],[9,15,3.2],[-3,21,3.8],[3.5,12,2.6],[0,26,2.4]]){let u=r-Math.sin(e)*t*a,d=i+Math.cos(e)*t*a;l.push(G(Vn(new _t(c*a,c*a,s*a,10),o),u,n+s*a/2,d),G(Vn(new Xe(c*1.3*a,c*2.2*a,10),`#8094dc`),u,n+(s+c*1.1)*a,d))}}let j=new W({name:`School scenery`,vertexColors:!0,roughness:.92,metalness:0}),M=new W({name:`School warm lights`,vertexColors:!0,roughness:.6,metalness:0,emissive:`#ffcf7a`,emissiveIntensity:.55}),ee=new B({name:`School paper mountains`,vertexColors:!0,fog:!0}),N=(e,n,r,i)=>{if(!e.length)return;let a=lt(e,!1);if(e.forEach(e=>e.dispose()),!a)throw Error(`${r} の形をまとめられない`);a.computeBoundingSphere();let o=new V(a,n);o.name=r,o.castShadow=i,o.receiveShadow=!0,t.add(o)};return N(a,j,`school-near`,!0),N(o,j,`school-lines`,!1),N(s,j,`school-far`,!1),N(c,M,`school-lights`,!1),N(l,ee,`school-paper-mountains`,!1),Promise.resolve()}function $n(){if(typeof document>`u`)return null;let e=document.createElement(`canvas`);e.width=e.height=256;let t=e.getContext(`2d`);t.fillStyle=`#ffffff`,t.fillRect(0,0,256,256);let n=jn(42);for(let e=0;e<26;e++)t.fillStyle=`rgba(150,130,110,${.035+n()*.03})`,t.beginPath(),t.arc(n()*256,n()*256,14+n()*30,0,Math.PI*2),t.fill();for(let e=0;e<1500;e++){let e=185+Math.floor(n()*55);t.fillStyle=`rgb(${e},${e-6},${e-14})`,t.beginPath(),t.arc(n()*256,n()*256,.6+n()*1.5,0,Math.PI*2),t.fill()}for(let e=0;e<40;e++){let e=n()*256,r=n()*256,i=1.6+n()*2.2;t.fillStyle=`rgb(205,195,182)`,t.beginPath(),t.arc(e,r,i,0,Math.PI*2),t.fill(),t.fillStyle=`rgb(246,242,234)`,t.beginPath(),t.arc(e-i*.3,r-i*.3,i*.5,0,Math.PI*2),t.fill()}let r=new ct(e);return r.colorSpace=Oe,r.wrapS=r.wrapT=Ft,r.anisotropy=8,r.name=`School ground speckles`,r}var er={royal:{hemisphere:{sky:`#88a8de`,ground:`#323043`,intensity:.65},sun:{color:`#99b9ef`,intensity:1.75},fill:{color:`#e9a775`,intensity:.32},fog:{color:`#48658a`,density:.0034},environment:.22,background:`#203d61`,exposure:.92},colosseum:{hemisphere:{sky:`#c5d4ec`,ground:`#645342`,intensity:.85},sun:{color:`#ffe1b3`,intensity:2.4},fill:{color:`#e9a775`,intensity:.32},fog:{color:`#48658a`,density:.0034},environment:.3,background:`#203d61`,exposure:.92},school:{hemisphere:{sky:`#dcefff`,ground:`#9cc77f`,intensity:1.05},sun:{color:`#fff1d8`,intensity:2.2},fill:{color:`#ffd6b0`,intensity:.35},fog:{color:`#e4f0f2`,density:.0012},environment:.25,background:`#bfe3f7`,exposure:.95}},tr=new L;function nr(e,t,n,r,i,a){let o=2*Math.PI*i/4,s=Math.max(a-2*i,0),c=Math.PI/4;tr.copy(t),tr[r]=0,tr.normalize();let l=.5*o/(o+s),u=1-tr.angleTo(e)/c;return Math.sign(tr[n])===1?u*l:s/(o+s)+l+l*(1-u)}var rr=class e extends pt{constructor(e=1,t=1,n=1,r=2,i=.1){let a=r*2+1;if(i=Math.min(e/2,t/2,n/2,i),super(1,1,1,a,a,a),this.type=`RoundedBoxGeometry`,this.parameters={width:e,height:t,depth:n,segments:r,radius:i},a===1)return;let o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;let s=new L,c=new L,l=new L(e,t,n).divideScalar(2).subScalar(i),u=this.attributes.position.array,d=this.attributes.normal.array,f=this.attributes.uv.array,p=u.length/6,m=new L,h=.5/a;for(let r=0,a=0;r<u.length;r+=3,a+=2)switch(s.fromArray(u,r),c.copy(s),c.x-=Math.sign(c.x)*h,c.y-=Math.sign(c.y)*h,c.z-=Math.sign(c.z)*h,c.normalize(),u[r+0]=l.x*Math.sign(s.x)+c.x*i,u[r+1]=l.y*Math.sign(s.y)+c.y*i,u[r+2]=l.z*Math.sign(s.z)+c.z*i,d[r+0]=c.x,d[r+1]=c.y,d[r+2]=c.z,Math.floor(r/p)){case 0:m.set(1,0,0),f[a+0]=nr(m,c,`z`,`y`,i,n),f[a+1]=1-nr(m,c,`y`,`z`,i,t);break;case 1:m.set(-1,0,0),f[a+0]=1-nr(m,c,`z`,`y`,i,n),f[a+1]=1-nr(m,c,`y`,`z`,i,t);break;case 2:m.set(0,1,0),f[a+0]=1-nr(m,c,`x`,`z`,i,e),f[a+1]=nr(m,c,`z`,`x`,i,n);break;case 3:m.set(0,-1,0),f[a+0]=1-nr(m,c,`x`,`z`,i,e),f[a+1]=1-nr(m,c,`z`,`x`,i,n);break;case 4:m.set(0,0,1),f[a+0]=1-nr(m,c,`x`,`y`,i,e),f[a+1]=1-nr(m,c,`y`,`x`,i,t);break;case 5:m.set(0,0,-1),f[a+0]=nr(m,c,`x`,`y`,i,e),f[a+1]=1-nr(m,c,`y`,`x`,i,t)}}static fromJSON(t){return new e(t.width,t.height,t.depth,t.segments,t.radius)}},J={barrier:{radius:1.05,bottom:.12,top:2.12,columns:9,rows:5},cyber:{line:.03,node:.036,rim:.05,scan:{height:.22,period:1.15},twinkle:{rate:10,fade:3.5}},glow:{base:.9,flash:.5,low:.3},palette:{line:new F(`#34e6ff`),lineEdge:new F(`#042b40`),node:new F(`#eaffff`),rim:new F(`#86f7ff`),fill:new F(`#062d46`),fillGlow:new F(`#1f9fd6`),scan:new F(`#a8fbff`)},shards:{count:14,speed:3.2,up:2.2,gravity:5.5},smoke:{puffs:7,radius:.27,grow:2.1,height:[.35,1.6],color:`#ece6f2`,opacity:.75},dust:{puffs:5,radius:.24,grow:2.2,height:[.05,.35],color:`#d8c3a0`,opacity:.6},ghost:{color:`#bfe3ff`,opacity:.55},roll:{turns:1,center:1.12,tuck:.35},step:{lean:.38,hop:.16}},ir=e=>Object.assign(new B({vertexColors:!0,transparent:!0,depthWrite:!1,side:2,blending:2,opacity:J.glow.base}),{name:e});function ar(e,t,n,r,i,a,o,s){e.push(n.x,n.y,n.z,i.x,i.y,i.z,o.x,o.y,o.z),t.push(r.r,r.g,r.b,a.r,a.g,a.b,s.r,s.g,s.b)}function or(e,t,n,r,i,a){for(let o=0;o<4;o++)ar(e,t,n,i,r[o],a,r[(o+1)%4],a)}function sr(e,t,n,r,i,a,o,s){let c=i.clone().multiplyScalar(a/2),l=n.clone().sub(c),u=n.clone().add(c),d=r.clone().sub(c),f=r.clone().add(c);ar(e,t,l,s,d,s,r,o),ar(e,t,l,s,r,o,n,o),ar(e,t,n,o,r,o,f,s),ar(e,t,n,o,f,s,u,s)}var cr=new L(0,1,0),lr=e=>new L(Math.cos(e),0,-Math.sin(e));function ur(e,t,n){let r=new Ot;r.setAttribute(`position`,new I(e,3)),r.setAttribute(`color`,new I(t,3));let i=new V(r,ir(n));return i.name=n,i.frustumCulled=!1,i}var dr=(e,t,n)=>new L(Math.sin(e)*n,t,Math.cos(e)*n);function fr(){let e=J.barrier,t=J.cyber,n=J.palette,r=Math.PI/e.columns,i=(e.top-e.bottom)/e.rows,a=e.columns*2,o=e.rows*2,s=e=>-Math.PI/2+e*r/2,c=(t,n)=>dr(s(t),e.bottom+n*i/2,e.radius),l=[],u=[],d=[];for(let e=0;e<=o;e++)for(let t=0;t<=a;t++){if((t+e)%2)continue;let r=[[t-1,e],[t,e+1],[t+1,e],[t,e-1]].map(([e,t])=>c(Math.min(a,Math.max(0,e)),Math.min(o,Math.max(0,t))));d.push(l.length/3),or(l,u,c(t,e),r,n.fill,n.fill)}for(let e of[1,-1])for(let r=-o-1;r<=a+o+1;r++){if(Math.abs(r)%2!=1)continue;let i=[];for(let t=0;t<=a;t++){let n=e>0?t-r:r-t;n>=0&&n<=o&&i.push([t,n])}for(let e=1;e<i.length;e++)sr(l,u,c(...i[e-1]),c(...i[e]),cr,t.line,n.line,n.lineEdge)}for(let e of[0,o])for(let r=0;r<a;r++)sr(l,u,c(r,e),c(r+1,e),cr,t.rim,n.rim,n.lineEdge);for(let e of[0,a])for(let r=0;r<o;r++)sr(l,u,c(e,r),c(e,r+1),lr(s(e)),t.rim,n.rim,n.lineEdge);for(let e=0;e<=o;e++)for(let r=0;r<=a;r++){if((r+e)%2==0)continue;let i=c(r,e),a=lr(s(r)),o=t.node;or(l,u,i,[i.clone().addScaledVector(a,-o),i.clone().addScaledVector(cr,o),i.clone().addScaledVector(a,o),i.clone().addScaledVector(cr,-o)],n.node,n.line)}let f=ur(l,u,`guard-barrier`);f.renderOrder=3,f.visible=!1,f.userData.fills=d,f.userData.twinkle=new Float32Array(d.length);let p=[],m=[],h=new F(0,0,0),g=t.scan.height,_=e.radius*1.004;for(let e=0;e<36;e++){let t=-Math.PI/2+Math.PI*e/36,r=t+Math.PI/36;for(let[e,i,a,o]of[[-g/2,h,0,n.scan],[0,n.scan,g/2,h]]){let n=dr(t,e,_),s=dr(r,e,_),c=dr(r,a,_),l=dr(t,a,_);ar(p,m,n,i,s,i,c,o),ar(p,m,n,i,c,o,l,o)}}let v=ur(p,m,`guard-scan`);return v.renderOrder=4,f.add(v),f}function pr(e,t,n,r,i,a,o,s,c){if(e.visible=t&&s>.015,!e.visible){e.userData.time=void 0;return}let l=J.barrier,u=J.cyber,d=J.glow,f=J.palette;e.position.set(n,0,r),e.rotation.y=i;let p=Math.max(0,Math.min(.1,c-(e.userData.time??c)));e.userData.time=c;let m=o<d.low&&Math.sin(c*53.1)+Math.sin(c*91.7)>.8?.2:1;e.material.opacity=Math.min(1,d.base+d.flash*a)*m*s;let h=e.userData.fills,g=e.userData.twinkle,_=e.geometry.getAttribute(`color`);Math.random()<u.twinkle.rate*p&&(g[Math.floor(Math.random()*g.length)]=1);for(let e=0;e<h.length;e++){g[e]=Math.max(0,g[e]-u.twinkle.fade*p);let t=Math.min(1,g[e]+a*.8),n=f.fill.r+(f.fillGlow.r-f.fill.r)*t,r=f.fill.g+(f.fillGlow.g-f.fill.g)*t,i=f.fill.b+(f.fillGlow.b-f.fill.b)*t;for(let t=h[e];t<h[e]+12;t++)_.setXYZ(t,n,r,i)}_.needsUpdate=!0;let v=e.children[0],y=c/u.scan.period%1;v.position.y=l.bottom+(l.top-l.bottom)*y,v.material.opacity=Math.min(1,(.75+.5*a)*Math.sin(Math.PI*y))*m*s}function mr(e){let t=J.shards,n=J.barrier,r=new H,i=br(e);for(let e=0;e<t.count;e++){let e=(i()-.5)*Math.PI,a=n.bottom+i()*(n.top-n.bottom),o=.1+i()*.1,s=[],c=[];or(s,c,new L,[new L(-o,0,0),new L(0,o*1.4,0),new L(o,0,0),new L(0,-o*1.4,0)],J.palette.node,J.palette.line);let l=new Ot;l.setAttribute(`position`,new I(s,3)),l.setAttribute(`color`,new I(c,3));let u=new V(l,ir(`guard-shard`)),d=dr(e,a,n.radius),f=new L(Math.sin(e),0,Math.cos(e));u.userData.start=d,u.userData.velocity=f.multiplyScalar(t.speed*(.6+.6*i())).setY(t.up*i()),u.userData.spin=new L(i()*9,i()*9,i()*9),u.frustumCulled=!1,r.add(u)}return r.name=`guard-shards`,r.userData.noFade=!0,r}function hr(e,t,n,r,i,a){e.position.set(t,0,n),e.rotation.y=r;let o=J.shards,s=i*a;for(let t of e.children){let{start:e,velocity:n,spin:r}=t.userData;t.position.set(e.x+n.x*s,Math.max(.02,e.y+n.y*s-o.gravity*s*s/2),e.z+n.z*s),t.rotation.set(r.x*s,r.y*s,r.z*s),t.material.opacity=(1-i)*.9}}function gr(e,t){let n=J[e],r=new H,i=br(t);for(let t=0;t<n.puffs;t++){let t=new V(new Mt(n.radius,14),Object.assign(new B({color:n.color,transparent:!0,depthWrite:!1,side:2,opacity:n.opacity}),{name:`dodge-${e}`})),a=i()*Math.PI*2,o=.25+i()*.45;t.userData.offset=new L(Math.cos(a)*o,n.height[0]+i()*(n.height[1]-n.height[0]),Math.sin(a)*o),t.userData.scale=.7+i()*.6,t.frustumCulled=!1,r.add(t)}return r.name=e===`smoke`?`dodge-smoke`:`dodge-dust`,r.userData.noFade=!0,r}function _r(e,t,n,r,i,a){let o=J[t];e.position.set(n,0,r);for(let t of e.children){let{offset:e,scale:n}=t.userData;t.position.copy(e).multiplyScalar(1+i*.8),t.position.y=e.y+i*.35,t.quaternion.copy(a.quaternion),t.scale.setScalar(n*(1+(o.grow-1)*Math.sqrt(i))),t.material.opacity=o.opacity*(1-i)*(1-i)}}function vr(e){e.updateWorldMatrix(!0,!0);let t=Dt(e);e.matrixWorld.decompose(t.position,t.quaternion,t.scale);let n=Object.assign(new B({color:J.ghost.color,transparent:!0,depthWrite:!1,opacity:J.ghost.opacity}),{name:`dodge-ghost`});return t.traverse(e=>{let t=e;t.isMesh&&(t.material=n,t.castShadow=!1,t.receiveShadow=!1,t.frustumCulled=!1,t.userData.ghost=!0)}),t.name=`dodge-ghost`,t.userData.ghostMaterial=n,t.userData.noFade=!0,t}function yr(e,t){e.userData.ghostMaterial.opacity=J.ghost.opacity*(1-t)}function br(e){let t=e*2654435761>>>0||1;return()=>(t^=t<<13,t>>>=0,t^=t>>>17,t^=t<<5,t>>>=0,t/4294967296)}var xr={tint:`#ffd45a`,bright:1.55,opacity:.95,relief:.8,maria:.36,terrain:.24,haloWidth:11,halo:.8,seed:23.9},Sr=e=>e-Math.floor(e);function Cr(e,t,n){let r=Sr(e*.1031),i=Sr(t*.1031),a=Sr(n*.1031),o=r*(i+33.33)+i*(a+33.33)+a*(r+33.33);return r+=o,i+=o,a+=o,Sr((r+i)*a)}function wr(e,t,n){let r=Math.floor(e),i=Math.floor(t),a=Math.floor(n),o=e-r,s=t-i,c=n-a;o=o*o*(3-2*o),s=s*s*(3-2*s),c=c*c*(3-2*c);let l=(e,t,n)=>Cr(r+e,i+t,a+n),u=(e,t,n)=>e+(t-e)*n;return u(u(u(l(0,0,0),l(1,0,0),o),u(l(0,1,0),l(1,1,0),o),s),u(u(l(0,0,1),l(1,0,1),o),u(l(0,1,1),l(1,1,1),o),s),c)}function Tr(e,t,n){let r=0,i=.52;for(let a=0;a<4;a++)r+=i*wr(e,t,n),e=e*2.07+17.1,t=t*2.07+9.2,n=n*2.07+3.7,i*=.49;return r}var Er=(e,t,n)=>{let r=Math.min(1,Math.max(0,(n-e)/(t-e)));return r*r*(3-2*r)},Dr;function Or(){if(Dr)return Dr;let e=new Uint8Array(131072),t=xr.seed,n=t*.73,r=t*.17,i=t*.43,a=Array.from({length:16},(e,n)=>{let r=n+t,i=Cr(r,1.7,5.2),a=Cr(r,8.3,2.4),o=Cr(r,3.1,9.8),s=i*2-1,c=a*2-1,l=.17+o*.83,u=Math.hypot(s,c,l);return{x:s/u,y:c/u,z:l/u,radius:.055+.185*o*o}});for(let t=0;t<128;t++)for(let o=0;o<256;o++){let s=(o+.5)/256*2-1,c=(t+.5)/128,l=s*s+c*c,u=(t*256+o)*4,d=.8,f=0;if(l<=1.02){let e=Math.sqrt(Math.max(0,1-l)),t=Er(.34,.69,Tr(s*4.4+n,c*4.4+r,e*4.4+i)),o=Tr(s*19+n+7.5,c*19+r+7.5,e*19+i+7.5);d=.9-t*xr.maria+(o-.48)*xr.terrain;for(let t of a){let n=Math.hypot(s-t.x,c-t.y,e-t.z)/t.radius,r=(n-.94)/.13;f+=Math.exp(-r*r)*.052-Math.exp(-((n/.7)**4))*.078}}e[u]=Math.round(Math.min(1,Math.max(0,d))*255),e[u+1]=Math.round(Math.min(1,Math.max(0,.5+f*2))*255),e[u+2]=0,e[u+3]=255}return Dr=new Be(e,256,128,ze,$e),Dr.name=`samurai-iai-moon-surface`,Dr.colorSpace=``,Dr.wrapS=Dr.wrapT=Ye,Dr.magFilter=st,Dr.minFilter=Ct,Dr.generateMipmaps=!0,Dr.needsUpdate=!0,Dr}function kr(){return new vt({name:`samurai-iai-moon`,transparent:!0,depthWrite:!1,side:2,fog:!1,uniforms:{uSurface:{value:Or()},uRadius:{value:1},uTerminator:{value:.165},uTint:{value:new F(xr.tint)},uBright:{value:xr.bright},uOpacity:{value:xr.opacity},uRelief:{value:xr.relief},uHaloWidth:{value:xr.haloWidth},uHalo:{value:xr.halo},uFront:{value:0},uFade:{value:1},uLead:{value:0}},vertexShader:`
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
    `})}var Ar={radius:_+P.puckRadius,inner:.7,halo:1.12,columns:64,baseY:1.15,tilt:.26,lead:1.2,fade:.35,burst:.1},jr,Mr,Nr=e=>{let t=U.clamp(e,0,1);return t*t*(3-2*t)};function Pr(){return Mr??=new bt().loadAsync(`./models/effects/samurai-iai-v1.glb`).then(e=>{if(!e.scene.getObjectByName(`Iai_Tsuba_Flash_Horizontal`))throw Error(`侍の鯉口の光を確認できませんでした`);jr=e.scene})}function Fr(){let e=Ar.columns,t=Ar.radius,n=new Float32Array((e+1)*2*3),r=[];for(let r=0;r<=e;r++){let i=(.5-r/e)*Math.PI,a=Math.sin(i),o=Math.cos(i);[1/Math.sqrt(a*a/(t*t)+o*o/(Ar.inner*Ar.inner))*.9,t*Ar.halo].forEach((e,t)=>{let i=o*e;n.set([a*e,Ar.baseY+Ar.tilt*i,i],(r*2+t)*3)})}for(let t=0;t<e;t++){let e=t*2,n=e+2;r.push(e,n,e+1,e+1,n,n+1)}let i=new Ot;i.setAttribute(`position`,new at(n,3)),i.setIndex(r);let a=kr();a.uniforms.uRadius.value=t,a.uniforms.uTerminator.value=Ar.inner/t;let o=new V(i,a);return o.name=`samurai-iai-crescent`,o.castShadow=!1,o.receiveShadow=!1,o.frustumCulled=!1,o.renderOrder=6,o.visible=!1,o.userData.samuraiVfx=!0,{mesh:o,front:0}}function Ir(){if(!jr)throw Error(`侍の斬撃エフェクトの読み込みが完了していません`);let e=jr.clone(!0);e.name=`samurai-iai-vfx`;let t=[],n=[];e.traverse(e=>{if(!(e instanceof V))return;if(e.userData.vfx_kind!==`flash`){n.push(e);return}let r=Array.isArray(e.material)?e.material[0]:e.material,i=new B({color:(r.color?.clone()??new F(`#fff0d1`)).multiplyScalar(Number(e.userData.vfx_gain)||2.4),transparent:!0,blending:2,depthWrite:!1,depthTest:!0,side:2,opacity:0,toneMapped:!1});i.name=`${e.name}_additive`,e.geometry=e.geometry.clone(),e.material=i,e.castShadow=!1,e.receiveShadow=!1,e.frustumCulled=!1,e.renderOrder=5,e.userData.samuraiVfx=!0,t.push({mesh:e,opacity:Number(e.userData.vfx_opacity)||1,position:e.position.clone(),scale:e.scale.clone()})});for(let e of n)e.removeFromParent();let r=Fr();return e.add(r.mesh),e.userData.samuraiVfx={flashes:t,flashOrigin:t[0].position.clone(),crescent:r},e.visible=!1,e}function Lr(e,t,n){let{mesh:r}=e,i=r.material.uniforms;if(t===null||!Number.isFinite(t)||t<_e)return e.front=0,r.visible=!1,r.scale.set(1,1,1),!1;if(n&&t<=k&&Number.isFinite(n.x)&&Number.isFinite(n.z)&&(n.x!==0||n.z!==0)){let t=Math.atan2(n.x,n.z),r=U.clamp(.5-t/Math.PI,0,1);e.front=Math.max(e.front,r)}let a=Nr((t-k)/Ar.fade),o=1-a;if(o<=0||e.front<=0)return r.visible=!1,r.scale.set(1,1,1),!1;let s=1+Ar.burst*a;return r.scale.set(s,1,s),i.uFront.value=e.front,i.uFade.value=o,i.uLead.value=Ar.lead*o,r.visible=!0,!0}function Rr(e,t,n,r){let i=e.userData.samuraiVfx;if(!i)return;let a=!1;for(let e of i.flashes){e.mesh.position.copy(e.position),e.mesh.scale.copy(e.scale);let r=0;if(t!==null&&Number.isFinite(t)){n&&Number.isFinite(n.x)&&Number.isFinite(n.y)&&Number.isFinite(n.z)&&e.mesh.position.add(n).sub(i.flashOrigin);let a=t-ye;r=Nr(a/.025)*(1-Nr((a-.04)/.08)),e.mesh.scale.multiplyScalar(.65+.55*Nr(a/.04))}e.mesh.material.opacity=e.opacity*r,e.mesh.visible=e.mesh.material.opacity>.002,a||=e.mesh.visible}a=Lr(i.crescent,t,r)||a,e.visible=a}var zr=(e=0,t=0,n=0)=>new L(e,t,n),Br=U.clamp;function Vr(e){e.updateWorldMatrix(!0,!0);let t=t=>{let n=e.getObjectByName(t);if(!(n instanceof xt))throw Error(`Missing samurai footwork bone: ${t}`);return n},n=t(`root`),r=e.getWorldQuaternion(new z).invert(),i={};for(let n of[`R`,`L`]){let a=t(`foot_`+n),o=a.getWorldPosition(zr()),s=1/0;if(e.traverse(e=>{if(!(e instanceof He)||!(Array.isArray(e.material)?e.material:[e.material]).some(e=>e.name.includes(`Zori_Dark_Sole`)))return;let t=e.geometry.attributes.position,n=e.geometry.attributes.skinIndex,r=e.geometry.attributes.skinWeight,i=e.skeleton.bones.indexOf(a);if(!(!t||!n||!r||i<0))for(let a=0;a<t.count;a++){let o=!1;for(let e=0;e<4;e++)n.getComponent(a,e)===i&&r.getComponent(a,e)>.999&&(o=!0);o&&(s=Math.min(s,zr().fromBufferAttribute(t,a).applyMatrix4(e.matrixWorld).y))}}),!Number.isFinite(s))throw Error(`Missing samurai sole: `+n);i[n]={upper:t(`upperleg01_`+n),lower:t(`lowerleg01_`+n),foot:a,ankleRest:e.worldToLocal(o.clone()),footRest:r.clone().multiply(a.getWorldQuaternion(new z)),ankleClearance:o.y-s}}return{model:e,hips:n,hipRestPosition:n.position.clone(),legs:i,applied:!1,last:{load:0,release:0,rightError:0,leftError:0,hipOffset:[0,0,0]}}}function Hr(e){e.applied&&=(e.hips.position.copy(e.hipRestPosition),!1)}function Ur(e,t){let n=e.parent.getWorldQuaternion(new z).invert();e.quaternion.copy(n.multiply(t)),e.updateWorldMatrix(!1,!0)}function Wr(e,t,n){let r=e.getWorldPosition(zr()),i=t.getWorldPosition(zr()).sub(r).normalize(),a=n.clone().sub(r).normalize();Ur(e,new z().setFromUnitVectors(i,a).multiply(e.getWorldQuaternion(new z)))}function Gr(e,t,n,r){let i=e.legs[t],a=i.upper.getWorldPosition(zr()),o=i.lower.getWorldPosition(zr()),s=i.foot.getWorldPosition(zr()),c=a.distanceTo(o),l=o.distanceTo(s),u=n.clone().sub(a),d=Br(u.length(),.01,c+l-5e-4);u.normalize();let f=zr(t===`R`?-.22:.22,0,1).applyQuaternion(r);f.addScaledVector(u,-f.dot(u)).normalize();let p=(c*c-l*l+d*d)/(2*d),m=a.clone().addScaledVector(u,p).addScaledVector(f,Math.sqrt(Math.max(0,c*c-p*p)));return Wr(i.upper,i.lower,m),Wr(i.lower,i.foot,n),Ur(i.foot,r.clone().multiply(i.footRest)),i.foot.getWorldPosition(zr()).distanceTo(n)}function Kr(e,t){if(!t.x&&!t.y&&!t.z)return;let n=e.model.worldToLocal(e.hips.parent.localToWorld(e.hipRestPosition.clone())),r=e.model.localToWorld(n.add(t));e.hips.position.copy(e.hips.parent.worldToLocal(r)),e.hips.updateWorldMatrix(!1,!0),e.applied=!0}function qr(e,t,n,r){if(r<=0)return;let i=zr(0,0,1).applyQuaternion(e.model.getWorldQuaternion(new z)),a=new z().setFromAxisAngle(zr(0,1,0),Math.atan2(i.x,i.z));for(let i of[`R`,`L`]){let o=e.legs[i],s=i===`R`?-1:1,c=e.model.worldToLocal(o.foot.getWorldPosition(zr())),l=o.ankleRest.clone();l.x=s*t;let u=e.model.localToWorld(c.lerp(l,r));u.y=o.ankleClearance,Gr(e,i,u,a.clone().multiply(new z().setFromAxisAngle(zr(0,1,0),s*n*r)))}e.applied=!0}function Jr(e,t,n,r,i=!1,a=!1){if(!r)return;t=Br(t,0,1),n=Br(n,0,1);let o=t*(1-n),s=o+n,c=zr(.15*o-.03*n,-.26*o-.145*n,-.12*o+.2*n),l=e.model.worldToLocal(e.hips.parent.localToWorld(e.hipRestPosition.clone())),u=e.model.localToWorld(l.add(c));e.hips.position.copy(e.hips.parent.worldToLocal(u)),e.hips.updateWorldMatrix(!1,!0);let d=zr(0,0,1).applyQuaternion(e.model.getWorldQuaternion(new z)),f=new z().setFromAxisAngle(zr(0,1,0),Math.atan2(d.x,d.z)),p=e.model.getWorldScale(zr()).y,m=e.legs.R.ankleRest.clone().add(zr(-.12*o-.1*n,0,.04*o+.47*n)),h=e.legs.L.ankleRest.clone().add(zr(.14*s,0,-.14*o-.08*n)),g=e.model.localToWorld(m),_=e.model.localToWorld(h);g.y=e.legs.R.ankleClearance+(a?0:.1*Math.sin(Math.PI*n)*p),_.y=e.legs.L.ankleClearance+(i?0:.045*Math.sin(Math.PI*t)*(1-n)*p),e.applied=!0,e.last={load:t,release:n,hipOffset:c.toArray(),rightError:Gr(e,`R`,g,f),leftError:Gr(e,`L`,_,f)}}var Yr,Xr,Zr=()=>!!Yr;function Qr(){return Xr??=Promise.all([new bt().loadAsync(`./models/characters/samurai-hybrid-v2-combat.glb`),Pr(),me()===`yuru`?Kt():void 0,me()===`classic`?void 0:Jt()]).then(([e])=>{for(let t of[`Samurai_V8_Game_Mesh`,`Samurai_Katana`,`Samurai_Saya`])if(!e.scene.getObjectByName(t))throw Error(`侍のモデルを確認できませんでした`);Yr=e.scene,li(Yr)})}var $r={frames:10,fade:.15,outer:4.12,core:2.72,coreBand:.26,hot:`#fff3cf`,cool:`#6fd0ff`,node:`#ffffff`,nearGlow:1,farGlow:.05,nodeGlow:1.25,falloff:1.1},ei=i.map(([e,t],n)=>[e,t+(n===3?.03:.02)]),ti=[0,.5,1,2,3,4,5,6.5,8],ni={scale:1.5,margin:.45},ri={settle:.28,eyes:.2,wrist:{x:.245,y:.97,z:.13},palm:0,pole:{x:.55,y:1.15,z:-.6},feet:.1,toe:.22,nod:.16},ii={position:new L(.25,1.01,-.01),direction:new L(.2,-.22,-.955).normalize()},ai={dip:.58,lift:6e-4,width:85e-5,outer:1.35,segments:28,lid:.92,lashTop:1.738,sink:.012,bin:.001,cell:5e-4},oi=e=>e instanceof V?[e.material].flat().map(e=>e.name).join():``;function si(e){let t=e.map((e,t)=>Number.isFinite(e)?t:-1).filter(e=>e>=0);return t.length?e.map((n,r)=>{if(Number.isFinite(n))return n;let i=t.filter(e=>e<r).pop(),a=t.find(e=>e>r);return i===void 0?e[a]:a===void 0?e[i]:U.lerp(e[i],e[a],(r-i)/(a-i))}):e}var ci=`Samurai_Closed_Eyes`;function li(e){let t=t=>{let n;return e.traverse(e=>{!n&&e instanceof V&&oi(e)===t&&(n=e)}),n},n=t(`SD_EyeWhite`),r=t(`SD_Brows`),i=t(`SD_EyelidCrease`);if(!n||!r||!i||!(r instanceof He))return;let a=n.geometry.getAttribute(`position`),o=r.geometry.getAttribute(`position`),s=i.geometry.getAttribute(`position`),c=new Float32Array(o.count*3),l=new Float32Array(s.count*3),u=ai,d=[],f=[],p=[];for(let e of[1,-1]){let t=[];for(let n=0;n<a.count;n++)a.getX(n)*e>0&&t.push({x:Math.abs(a.getX(n)),y:a.getY(n),z:a.getZ(n)});if(t.length<8)continue;let r=t.reduce((e,t)=>t.x<e.x?t:e),i=t.reduce((e,t)=>t.x>e.x?t:e),m=i.x-r.x,h=Math.ceil(m/u.bin)+1,g=e=>xi((e-r.x)/m,0,1),_=e=>Math.round(g(e)*(h-1)),v=Array(h).fill(1/0);for(let e of t)v[_(e.x)]=Math.min(v[_(e.x)],e.y);let y=si(v),b=e=>r.y+(i.y-r.y)*g(e),x=[0,0,0],S=[[0,0,0],[0,0,0],[0,0,0]];y.forEach((e,t)=>{let n=t/(h-1),i=b(r.x+m*n)-e,a=[1,n,n*n].map(e=>e*n*(1-n));for(let e=0;e<3;e++){x[e]+=a[e]*i;for(let t=0;t<3;t++)S[e][t]+=a[e]*a[t]}});let C=e=>e[0][0]*(e[1][1]*e[2][2]-e[1][2]*e[2][1])-e[0][1]*(e[1][0]*e[2][2]-e[1][2]*e[2][0])+e[0][2]*(e[1][0]*e[2][1]-e[1][1]*e[2][0]),w=C(S),T=[0,1,2].map(e=>C(S.map((t,n)=>t.map((t,r)=>r===e?x[n]:t)))/w),E=e=>{let t=g(e);return Math.max(0,t*(1-t)*(T[0]+T[1]*t+T[2]*t*t))},D=e=>b(e)-E(e)*u.dip,O=Math.min(...t.map(e=>e.y))-.002,k=Math.max(...t.map(e=>e.y))+.004,A=Math.ceil(m/u.cell)+1,j=Math.ceil((k-O)/u.cell)+1,M=Array(A*j).fill(-1/0),ee=(e,t)=>[xi(Math.round((e-r.x)/u.cell),0,A-1),xi(Math.round((t-O)/u.cell),0,j-1)];for(let e of t){let[t,n]=ee(e.x,e.y);M[n*A+t]=Math.max(M[n*A+t],e.z)}for(let e=0;e<A+j;e++){let e=0;for(let t=0;t<j;t++)for(let n=0;n<A;n++){if(Number.isFinite(M[t*A+n]))continue;let r=0,i=0;for(let[e,a]of[[1,0],[-1,0],[0,1],[0,-1]]){let o=n+e,s=t+a;if(o<0||s<0||o>=A||s>=j)continue;let c=M[s*A+o];Number.isFinite(c)&&(r+=c,i++)}i?M[t*A+n]=r/i:e++}if(!e)break}let N=M.map((e,t)=>{let n=t%A,r=Math.floor(t/A),i=0,a=0;for(let e=-1;e<=1;e++)for(let t=-1;t<=1;t++){let o=n+t,s=r+e;o<0||s<0||o>=A||s>=j||(i+=M[s*A+o],a++)}return i/a}),te=(e,t)=>{let n=xi((e-r.x)/u.cell,0,A-1),i=xi((t-O)/u.cell,0,j-1),a=Math.min(A-2,Math.floor(n)),o=Math.min(j-2,Math.floor(i)),s=n-a,c=i-o,l=(e,t)=>N[t*A+e];return U.lerp(U.lerp(l(a,o),l(a+1,o),s),U.lerp(l(a,o+1),l(a+1,o+1),s),c)},ne=[],re=n.geometry.getIndex();for(let t=0;re&&t<re.count;t+=3){let n=[re.getX(t),re.getX(t+1),re.getX(t+2)];n.every(t=>a.getX(t)*e>0)&&ne.push(n.flatMap(e=>[Math.abs(a.getX(e)),a.getY(e),a.getZ(e)]))}let ie=(e,t)=>{let n=-1/0;for(let[r,i,a,o,s,c,l,u,d]of ne){let f=(s-u)*(r-l)+(l-o)*(i-u);if(Math.abs(f)<1e-14)continue;let p=((s-u)*(e-l)+(l-o)*(t-u))/f,m=((u-i)*(e-l)+(r-l)*(t-u))/f;p<-1e-9||m<-1e-9||p+m>1+1e-9||(n=Math.max(n,p*a+m*c+(1-p-m)*d))}return Number.isFinite(n)?n:te(e,t)},ae=d.length/3;for(let t=0;t<=u.segments;t++){let n=t/u.segments,a=r.x+m*n,o=D(a),s=D(Math.min(i.x,a+5e-4))-D(Math.max(r.x,a-5e-4)),c=Math.min(i.x,a+5e-4)-Math.max(r.x,a-5e-4),l=new R(-s,c).normalize(),p=u.width*Math.sin(Math.PI*n)**.75*U.lerp(1,u.outer,n);for(let t of[1,-1]){let n=a+l.x*p*t,r=o+l.y*p*t,i=ie(n,r)+u.lift,s=(ie(n+4e-4,r)-ie(n-4e-4,r))/8e-4,c=(ie(n,r+4e-4)-ie(n,r-4e-4))/8e-4,m=new L(-s*e,-c,1).normalize();d.push(n*e,r,i),f.push(m.x,m.y,m.z)}}for(let t=0;t<u.segments;t++){let n=ae+t*2,r=n+1,i=n+2,a=n+3;e>0?p.push(n,r,i,r,a,i):p.push(n,i,r,r,i,a)}let oe=(r.x+i.x)/2,se=new L(oe*e,b(oe),ie(oe,b(oe))-u.sink);for(let t=0;t<o.count;t++)o.getX(t)*e<=0||o.getY(t)>=u.lashTop||(c[t*3]=se.x-o.getX(t),c[t*3+1]=se.y-o.getY(t),c[t*3+2]=se.z-o.getZ(t));for(let t=0;t<s.count;t++){let n=Math.abs(s.getX(t)),a=s.getY(t);if(s.getX(t)*e<=0||n<r.x-.003||n>i.x+.003||a>=b(n)||a<b(n)-E(n)-.004)continue;let o=D(n);l[t*3+1]=o-a,l[t*3+2]=ie(n,o)+u.lift*.5-s.getZ(t)}}for(let[e,t]of[[r,c],[i,l]])e.geometry.morphAttributes.position=[new I(t,3)],e.geometry.morphTargetsRelative=!0,e.updateMorphTargets();let m=d.length/3,h=new Ot;h.setAttribute(`position`,new I(d,3)),h.setAttribute(`normal`,new I(f,3));let g=r.skeleton.bones.findIndex(e=>e.name===`head`);h.setAttribute(`skinIndex`,new Te(new Uint16Array(m*4).map((e,t)=>t%4==0?Math.max(0,g):0),4)),h.setAttribute(`skinWeight`,new I(new Float32Array(m*4).map((e,t)=>+(t%4==0)),4));for(let[e,t]of Object.entries(r.geometry.attributes))h.getAttribute(e)||h.setAttribute(e,new I(new Float32Array(m*t.itemSize).fill(+(e===`color`)),t.itemSize));h.setIndex(p);let _=new He(h,r.material);_.name=ci,_.bind(r.skeleton,r.bindMatrix),_.position.copy(r.position),_.quaternion.copy(r.quaternion),_.scale.copy(r.scale),_.visible=!1,r.parent.add(_)}function ui(e,t){let n=t>=.5;if(e.closed!==n){e.closed=n;for(let t of e.morphs)t.morphTargetInfluences[0]=+!!n;for(let t of e.white)t.material.color.copy(n?e.lid:t.open);for(let t of e.hide)t.visible=!n;for(let t of e.lines)t.visible=n}}function di(){let e=$r.frames,t=ti.length,n=(e-1)*(t-1),r=new Ot;r.setAttribute(`position`,new at(new Float32Array(n*6*3),3)),r.setAttribute(`color`,new at(new Float32Array(n*6*3),3));let i=new B({vertexColors:!0,transparent:!0,opacity:1,side:2,depthWrite:!1,blending:2}),a=new V(r,i);return a.frustumCulled=!1,a.visible=!1,a.renderOrder=6,a.userData.noFade=!0,{mesh:a,samples:[],time:0}}var fi=new F($r.hot),pi=new F($r.cool),mi=new F($r.node),hi=new F,gi=new L,_i=new L;function vi(e,t){let n=t.samples,r=$r.frames,i=ti.length;if(n.length<2){t.mesh.visible=!1;return}let a=t.mesh.geometry.getAttribute(`position`),o=t.mesh.geometry.getAttribute(`color`),s=[];for(let t=0;t<r;t++){let a=n[Math.min(t,n.length-1)],o=Math.max(0,1-a.age/$r.fade)*(1-t/r*.6);_i.copy(a.tip).sub(a.grip).normalize();let c=Math.max(Math.hypot(a.tip.x-a.centre.x,a.tip.z-a.centre.z),.3),l=Math.max(Math.hypot(_i.x,_i.z),.2),u=Math.max(0,($r.outer-c)/l),d=[];for(let t=0;t<i;t++){let n=ti[t]/(i-1);gi.copy(a.tip).addScaledVector(_i,u*n);let r=Math.hypot(gi.x-a.centre.x,gi.z-a.centre.z),s=Math.max(0,1-Math.abs(r-$r.core)/$r.coreBand);hi.copy(fi).lerp(pi,n**.45).lerp(mi,s);let c=(1-n)**$r.falloff,l=($r.farGlow+($r.nearGlow-$r.farGlow)*c+$r.nodeGlow*s)*o;d.push({point:e.worldToLocal(gi.clone()),colour:hi.clone().multiplyScalar(Math.max(0,l))})}s.push(d)}let c=0,l=e=>{a.setXYZ(c,e.point.x,e.point.y,e.point.z),o.setXYZ(c,e.colour.r,e.colour.g,e.colour.b),c++};for(let e=0;e<r-1;e++)for(let t=0;t<i-1;t++)l(s[e][t]),l(s[e+1][t]),l(s[e][t+1]),l(s[e+1][t]),l(s[e+1][t+1]),l(s[e][t+1]);a.needsUpdate=!0,o.needsUpdate=!0,t.mesh.visible=!0}var yi=new z,bi=new F(`#ffc9ae`),Y=(e,t,n)=>new L(e,t,n),xi=U.clamp,Si=e=>(e=xi(e,0,1),e*e*(3-2*e));function X(e,t=!1){let n=e.clone().normalize(),r=Y(0,t?1:-1,0);r.addScaledVector(n,-r.dot(n)).normalize();let i=n.clone().cross(r).normalize();return new z().setFromRotationMatrix(new ft().makeBasis(r,i,n))}var Ci=(e,t)=>Si((t-e[0])/(e[1]-e[0])),wi={side:[.24,.38],back:[.02,.16],low:[.92,1.06],high:[1.46,1.62]};function Ti(e){let t=e.skeleton.bones,n=t.findIndex(e=>e.name===`spine02`);if(n<0)return;let r=new Set(t.map((e,t)=>/^(upper|lower)arm0[12]_[RL]$/.test(e.name)?t:-1).filter(e=>e>=0)),{position:i,skinIndex:a,skinWeight:o}=e.geometry.attributes,s=new L,c=[0,1,2,3];for(let e=0;e<i.count;e++){s.fromBufferAttribute(i,e);let t=(1-Ci(wi.side,Math.abs(s.x)))*(1-Ci(wi.back,s.z))*Ci(wi.low,s.y)*(1-Ci(wi.high,s.y));if(t<=.001)continue;let l=c.map(t=>a.getComponent(e,t)),u=c.map(t=>o.getComponent(e,t)),d=0;for(let e of c)r.has(l[e])&&u[e]>0&&(d+=u[e]*t,u[e]*=1-t);if(d<=0)continue;let f=c.find(e=>l[e]===n&&u[e]>0)??c.find(e=>u[e]<=1e-6);f===void 0&&(f=c.reduce((e,t)=>!r.has(l[t])&&u[t]>u[e]?t:e,0)),l[f]!==n&&(r.has(l[f])||u[f]<=1e-6)&&(l[f]=n),u[f]+=d;let p=u.reduce((e,t)=>e+t,0)||1;for(let t of c)a.setComponent(e,t,l[t]),o.setComponent(e,t,u[t]/p)}a.needsUpdate=!0,o.needsUpdate=!0}var Ei=Y(0,1.12,.4);X(Y(0,.32,.95));var Di=Y(.25,1.01,-.01),Oi=X(Y(.2,-.22,-.955).normalize(),!0),ki=Y(.9,-.05,-.433).normalize(),Ai=X(ki,!0),ji=Y(.27,1.09,.12),Mi={twist:30*Math.PI/180,lean:.12,load:.5,release:.4},Ni=Mi.twist,Pi=/^(?:upper|lower)leg|^foot_|^toe/,Fi={release:.12,recover:.22},Ii=(e,t,n)=>e<t?Math.min(t,e+n):Math.max(t,e-n),Li=[[`spine05`,.09,.08,0],[`spine03`,.11,.13,0],[`spine01`,.15,.14,0],[`neck02`,-.14,-.17,0],[`head`,-.12,-.18,0],[`upperleg01_R`,-.8713,.043,.0778],[`lowerleg01_R`,1.23,0,0],[`upperleg01_L`,.3579,-.007,.0196],[`lowerleg01_L`,.594,0,0]],Ri=[0,-.22,.03];ji.clone(),Ai.clone();var zi=e=>Z(e,ji,Ai,ji,1,Ni,Ai),Z=(e,t,n,r,i,a=0,o=Oi)=>({time:e,swordPosition:t,swordRotation:n,sayaPosition:r,sayaRotation:o,leftOnSaya:i,twist:a}),Bi=[zi(0),Z(.24,ji,Ai,ji,1,.6,Ai),Z(.42,ji,Ai,ji,1,.74,Ai),Z(.64,ji,Ai,ji,1,.91,Ai),Z(.72,ji,Ai,ji,1,.91,Ai),Z(D.draw,ji.clone().addScaledVector(ki,-.55),Ai,ji.clone().addScaledVector(ki,.23),1,.24,Ai),Z(.92,Y(-.1,1.23,.49),X(Y(.72,.05,.69)),ji.clone().addScaledVector(ki,.15),1,-.32,Ai),Z(D.follow,Y(-.39,1.3,.38),X(Y(-.8,.12,.6)),ji.clone().addScaledVector(ki,.1),1,-.38,Ai),Z(1.4,Y(-.39,1.3,.38),X(Y(-.8,.12,.6)),ji.clone().addScaledVector(ki,.1),1,-.38,Ai),Z(1.58,ji.clone().addScaledVector(ki,-.34),Ai,ji,1,.1,Ai),zi(D.duration)],Vi=[zi(0)],Hi=[Z(0,Ei.clone().add(Y(0,.055,0)),X(Y(0,.58,.82)),Di,.3)],Ui=(e,t)=>Ei.clone().lerp(e,t),Wi=1.6,Gi=1.5,Ki=Ui(Y(-.36,1.26,.35),Gi),qi=X(Y(-.9,.04,.43)),Ji=[zi(0),Z(.055,Ui(Y(.1,1.14,.3),Wi),X(Y(.91,.08,.4)),Di,.94,.34*Wi),Z(te,Ui(Y(-.07,1.16,.48),1.25),X(Y(.12,-.06,.99)),Di,1,.02),Z(.18,Ki,qi,Di,1,-.26*Gi),Z(.26,Ki,qi,Di,1,-.26*Gi),Z(.34,Ki,qi,Di,1,-.26*Gi),Z(.45,Ui(Y(-.1,1.18,.39),1.1),X(Y(-.15,.25,.95)),Di,.65,-.1),zi(ne)],Yi=[zi(0),Z(.09,Y(.34,1.16,.16),X(Y(.93,.1,.35)),Di,.95,.42),Z(m,Y(-.62,1.3,.34),X(Y(-.94,.02,.34)),Di,1,-.3),Z(.3,Y(-.16,1.86,.2),X(Y(-.12,.96,.25)),Di,1,-.08),Z(ve,Y(.02,.84,.72),X(Y(.02,-.78,.62)),Di,1,.04),Z(.5,Y(.46,1.8,.3),X(Y(.5,.8,.33)),Di,1,.3),Z(a,Y(-.5,.88,.62),X(Y(-.58,-.7,.42)),Di,1,-.26),Z(.7,Y(-.48,1.82,.28),X(Y(-.52,.79,.32)),Di,1,-.3),Z(o,Y(.52,.86,.6),X(Y(.6,-.69,.4)),Di,1,.28),Z(.9,Y(.52,.86,.6),X(Y(.6,-.69,.4)),Di,1,.28),Z(1.02,Y(.1,1.06,.58),X(Y(.12,-.16,.98)),Di,.7,.06),zi(y)];function Xi(e,t){let n=e[0],r=e[e.length-1];for(let i=1;i<e.length;i++){if(t<=e[i].time){n=e[i-1],r=e[i];break}n=e[i]}let i=n===r?1:Si((t-n.time)/Math.max(.001,r.time-n.time));return{swordPosition:n.swordPosition.clone().lerp(r.swordPosition,i),swordRotation:n.swordRotation.clone().slerp(r.swordRotation,i),sayaPosition:n.sayaPosition.clone().lerp(r.sayaPosition,i),sayaRotation:n.sayaRotation.clone().slerp(r.sayaRotation,i),leftOnSaya:U.lerp(n.leftOnSaya,r.leftOnSaya,i),twist:U.lerp(n.twist,r.twist,i)}}function Zi(e){let t=new ft,n={meshes:e.length,before:new Set(e.map(e=>e.skeleton)).size,after:0,merged:!1,reason:``};if(n.after=n.before,e.length<2)return n.reason=`スキンメッシュが1枚以下`,n;let r=e[0].skeleton;for(let i of e){if(!i.bindMatrix.equals(t))return n.reason=`bindMatrix が単位行列でない（${i.name}）`,n;let e=i.skeleton.bones;if(e.length!==r.bones.length)return n.reason=`骨の本数が違う（${i.name}）`,n;for(let t=0;t<e.length;t++)if(e[t]!==r.bones[t])return n.reason=`骨の並びが違う（${i.name} の ${t}本目）`,n;let a=i.skeleton.boneInverses;if(a!==r.boneInverses){if(a.length!==r.boneInverses.length)return n.reason=`逆行列の本数が違う（${i.name}）`,n;for(let e=0;e<a.length;e++)if(!a[e].equals(r.boneInverses[e]))return n.reason=`逆行列が違う（${i.name} の ${e}本目）`,n}}for(let t of e)t.skeleton!==r&&t.bind(r,t.bindMatrix);return n.after=new Set(e.map(e=>e.skeleton)).size,n.merged=!0,n.reason=`まとめた`,n}function Qi(e,t){if(!Yr)throw Error(`侍の読み込みが完了していません`);let n=new H;n.name=`${e===0?`azure`:`coral`}-samurai`;let i=new H;n.add(i);let a=Dt(Yr);a.scale.setScalar(1.12),a.position.y=-.028,i.add(a);let o=r(t,me()),s=o===`yuru`,c=E(t)?t:void 0,l=o===`grandpa`;(s||c||l)&&(a.scale.multiplyScalar(Vt.rigScale),a.position.set(0,-.028*Vt.rigScale-Vt.rigDown,c||l?sn.samuraiForward:Vt.rigForward));let u=o===`avatar`;u&&(a.scale.setScalar(Zt.scale),a.position.y=-.028*Zt.scale/1.12);let d=[],f=new Map,p=[];a.traverse(e=>{if(!(e instanceof V))return;e.geometry=e.geometry.clone();let t=e=>{let t=f.get(e);return t||(t=e.clone(),f.set(e,t),t instanceof W&&(/Katana_(Forged_Steel|Polished_Edge)|temper line/.test(t.name)&&(t.metalness=.68,t.roughness=Math.max(.23,t.roughness),t.envMapIntensity=2.4),p.push({material:t,emissive:t.emissive.clone(),intensity:t.emissiveIntensity}))),t};if(e.material=Array.isArray(e.material)?e.material.map(t):t(e.material),e.castShadow=ee.cast,e.receiveShadow=!0,e instanceof He){d.push(e),/Packed_indigo_wave_silk/.test([e.material].flat().map(e=>e.name).join())&&Ti(e),e.geometry.computeBoundingSphere();let t=e.geometry.boundingSphere;e.boundingSphere=new Ge(t.center.clone(),t.radius*ni.scale+ni.margin)}e.frustumCulled=!0}),n.userData.samuraiSkeletons=Zi(d),n.updateMatrixWorld(!0);let m=new Map;a.traverse(e=>{if(!(e instanceof xt))return;let t=e.getWorldQuaternion(new z).invert();m.set(e.name,{bone:e,rest:e.quaternion.clone(),x:Y(1,0,0).applyQuaternion(t),y:Y(0,1,0).applyQuaternion(t),z:Y(0,0,1).applyQuaternion(t)})});let h=a.getObjectByName(`Samurai_Katana`),g=a.getObjectByName(`Samurai_Saya`),_=e=>({position:new L().fromArray(e.userData.grip_wrist_position),quaternion:new z().fromArray(e.userData.grip_wrist_quaternion)}),v=_(h);v.position.z+=.03;let y=_(g),b=_(g),x=new z().setFromAxisAngle(Y(1,0,0),Math.PI);b.position.sub(Y(0,0,.06)).applyQuaternion(x).add(Y(0,0,-.195)),b.quaternion.premultiply(x);let S=new V(new Nt(.57,.62,32),new B({color:e===0?`#54d9ff`:`#ff6e89`,side:2,depthWrite:!1}));S.rotation.x=-Math.PI/2,S.position.y=.033,n.add(S);let C=new H;C.position.y=2.35,n.add(C);for(let e=0;e<3;e++){let t=new V(new Ze(.105),new W({color:`#ffe080`,emissive:`#ffd458`,emissiveIntensity:.6}));t.position.set(Math.cos(e*Math.PI*2/3)*.36,e*.035,Math.sin(e*Math.PI*2/3)*.36),C.add(t)}C.visible=!1;let w=Ir();i.add(w);let T=Vr(a),D=a.matrixWorld.clone().invert().multiply(m.get(`spine05`).bone.matrixWorld).invert(),O=di();n.add(O.mesh);let k={},A=a.getWorldQuaternion(new z).invert();for(let e of[`R`,`L`]){let t=e===`R`?-1:1,n=t=>a.worldToLocal(m.get(t+e).bone.getWorldPosition(new L)),r=Y(t*ri.wrist.x,ri.wrist.y,ri.wrist.z),i=r.clone().sub(n(`upperarm01_`)).normalize(),o=A.clone().multiply(m.get(`wrist_`+e).bone.getWorldQuaternion(new z)),s=new z().setFromUnitVectors(n(`wrist_`).sub(n(`lowerarm01_`)).normalize(),i);k[e]={position:r,quaternion:new z().setFromAxisAngle(i,t*ri.palm).multiply(s).multiply(o)}}let j={white:[],lid:new F(1,1,1),morphs:[],hide:[],lines:[],closed:void 0};a.traverse(e=>{let t=oi(e);if(t){if(e.name===ci)j.lines.push(e);else if(t===`SD_EyeWhite`){let t=e.material;j.white.push({material:t,open:t.color.clone()})}else t===`SD_Skin`?j.lid.copy(e.material.color).multiplyScalar(ai.lid):/^SD_(IrisContinuous|Pupil|Catchlight)$/.test(t)&&j.hide.push(e);e.morphTargetInfluences?.length&&j.morphs.push(e)}}),ui(j,0);let M;if(s||c||l){let e=e=>m.get(e).bone,t={hips:T.hips,wrist:{R:e(`wrist_R`),L:e(`wrist_L`)},elbow:{R:e(`lowerarm01_R`),L:e(`lowerarm01_L`)},foot:{R:e(`foot_R`),L:e(`foot_L`)}};M={parts:c?en(i,a,[h,g],t,p,c):l?on(i,a,[h,g],t,p):Yt(i,a,[h,g],t,p),bones:t},j.hide.length=0,j.lines.length=0,C.position.y=c||l?sn.stars:Vt.stars}return u&&(Wt(a,[h,g],p,E(t)?void 0:t),j.hide.length=0,j.lines.length=0,C.position.y=Zt.stars.default*Zt.scale),me()!==`classic`&&Qt(h,g,p),n.userData.samurai={model:a,motion:i,vfx:w,joints:m,stars:C,sword:h,saya:g,rightGrip:v,leftGrip:b,sayaGrip:y,materials:p,gripErrors:{right:0,left:0},footwork:T,torsoRestInverse:D,torsoDelta:new ft,slash:O,sideGrips:k,eyes:j,yuru:M},n.userData.characterAsset=s?`yuru-samurai-v1`:c?`pudding-samurai`:l?`grandpa-samurai`:u?`avatar-samurai`:`samurai-hybrid-v2`,n}function $i(e,t){let n=e.parent.getWorldQuaternion(new z);e.quaternion.copy(n.invert().multiply(t)),e.updateWorldMatrix(!1,!0)}function ea(e,t,n){let r=e.getWorldPosition(new L),i=t.getWorldPosition(new L).sub(r).normalize(),a=n.clone().sub(r).normalize();$i(e,new z().setFromUnitVectors(i,a).multiply(e.getWorldQuaternion(new z)))}var ta={x:.34,y:.86,z:.95};function na(e,t,n,r=0){let i=e.joints.get(`upperarm01_`+t).bone,a=e.joints.get(`lowerarm01_`+t).bone,o=e.joints.get(`wrist_`+t).bone,s=i.getWorldPosition(new L),c=a.getWorldPosition(new L),l=o.getWorldPosition(new L),u=e.model.localToWorld(n.position.clone()),d=s.distanceTo(c),f=c.distanceTo(l),p=u.clone().sub(s),m=xi(p.length(),.025,d+f-.001);p.normalize();let h=ri.pole,g=U.lerp(ta.x,h.x,r),_=e.model.localToWorld(Y(t===`R`?-g:g,U.lerp(ta.y,h.y,r),U.lerp(ta.z,h.z,r)).applyMatrix4(e.torsoDelta)).sub(s);_.addScaledVector(p,-_.dot(p)).normalize();let v=(d*d-f*f+m*m)/(2*m);return ea(i,a,s.clone().addScaledVector(p,v).addScaledVector(_,Math.sqrt(Math.max(0,d*d-v*v)))),ea(a,o,u),ia(e,t,r),$i(o,e.model.getWorldQuaternion(new z).multiply(n.quaternion)),o.getWorldPosition(new L).distanceTo(u)}var ra=Y(0,-1,0);function ia(e,t,n=0){let r=e.joints.get(`lowerarm01_`+t),i=e.joints.get(`wrist_`+t).bone.getWorldPosition(new L).sub(r.bone.getWorldPosition(new L));if(i.lengthSq()<1e-8)return;i.normalize();let a=r.bone.getWorldQuaternion(new z),o=Y(0,0,-1).applyQuaternion(e.model.getWorldQuaternion(new z)),s=r.y.clone().applyQuaternion(a).negate(),c=ra.clone().multiplyScalar(1-n).addScaledVector(o,n);for(let e of[s,c])e.addScaledVector(i,-e.dot(i));let l=xi(s.length()/.35,0,1)*xi(c.length()/.35,0,1);if(l<.001)return;s.normalize(),c.normalize();let u=Math.atan2(s.clone().cross(c).dot(i),xi(s.dot(c),-1,1))*l;$i(r.bone,new z().setFromAxisAngle(i,u).multiply(a))}function aa(e,t){let n=oa(e,t);e.gripErrors.right=na(e,`R`,n.R),e.gripErrors.left=na(e,`L`,n.L)}function oa(e,t){let n=sa(e.sword,e.rightGrip),r=sa(e.sword,e.leftGrip),i=sa(e.saya,e.sayaGrip);return r.position.lerp(i.position,t),r.quaternion.slerp(i.quaternion,t),{R:n,L:r}}function sa(e,t){return{position:t.position.clone().applyQuaternion(e.quaternion).add(e.position),quaternion:e.quaternion.clone().multiply(t.quaternion)}}function ca(e,t,n,r,i){let a=t.slash,o=Math.min(.1,Math.max(0,r-a.time));a.time=r;let s=fe(`samurai`),c=!i&&n.samuraiMotion===`reflect`&&n.action>0,l=c?ne-n.action:1/0,u=!i&&n.samuraiMotion===`kamaitachi`&&n.action>0,d=u?y-n.action:1/0,f=u&&ei.some(([e,t])=>d>=e&&d<=t);for(let e of a.samples)e.age+=o;if(c&&l>=s.windup&&l<=s.active||f){let n=t.sword.localToWorld(t.rightGrip.position.clone()),r=t.sword.localToWorld(t.rightGrip.position.clone().add(Y(0,0,.737))),i=e.getWorldPosition(new L);a.samples.unshift({tip:r,grip:n,centre:i,age:0})}for(;a.samples.length>$r.frames;)a.samples.pop();for(;a.samples.length&&a.samples[a.samples.length-1].age>$r.fade;)a.samples.pop();if(!a.samples.length){a.mesh.visible=!1;return}vi(e,a)}function la(e,n,r){let i=e.userData.samurai;if(!i)return;let a=e.userData.poseTime,o=n.hitStop>0?a??r:e.userData.poseTime=r,s=xi(o-(a??o),0,.1),c=n.stun>0,l=c?0:Math.min(1,n.moving),u=b(`samurai`,n.id,o),d=Math.sin(u)*l,f=e.userData.gait??={phase:u,moving:l};f.phase=u,f.moving=l;for(let e of i.joints.values())e.bone.quaternion.copy(e.rest);Hr(i.footwork);let p=(e,t=0,n=0,r=0)=>{let a=i.joints.get(e);if(a)for(let[e,i]of[[a.x,t],[a.y,n],[a.z,r]])i&&a.bone.quaternion.multiply(yi.setFromAxisAngle(e,i))},m;m=!c&&n.samuraiMotion===`iai`&&n.action>0?Xi(Bi,t(xe-n.action)):!c&&n.samuraiMotion===`reflect`&&n.action>0?Xi(Ji,ne-n.action):!c&&n.samuraiMotion===`kamaitachi`&&n.action>0?Xi(Yi,y-n.action):!c&&(n.guard>0||n.blocking)?Xi(Hi,0):Xi(Vi,0);let h=!c&&!n.guard&&!n.blocking&&!(n.action>0&&n.samuraiMotion),g=!c&&n.meditating?1:0,_=e.userData.samuraiCalm,v=Si(e.userData.samuraiCalm=n.action>0||n.guard>0||n.blocking?0:_===void 0?g:Ii(_,g,s/ri.settle)),x=1-v,S=!c&&n.samuraiMotion===`iai`&&n.action>0,C=S?t(xe-n.action):0,w=!c&&n.samuraiMotion===`reflect`&&n.action>0,T=w?ne-n.action:0,E=S?Si((C-.36)/.2)*(1-Si((C-.72)/.16)):w?.24*Si(T/.055)*(1-Si((T-.055)/.11)):0,D=S?Si((C-.76)/.22)*(1-Si((C-1.4)/.3)):w?.24*Si((T-.055)/.125)*(1-Si((T-.26)/.2)):0,O=w?Si(T/.055)*(1-Si((T-.26)/.2)):0;i.motion.position.y=S?0:(Math.abs(d)*.017+Math.sin(o*2.4+n.id)*.003)*(1-O),i.motion.rotation.set(c?.07:l*.025,0,c?Math.sin(o*4)*.09:-d*.008);let k=+!!h,A=h?Math.max(0,1-l*3):0,j=e.userData.samuraiStanceLegs,M=e.userData.samuraiStanceLegs=j===void 0?A:Ii(j,A,s/(A<j?Fi.release:Fi.recover)),ee=h&&Li.length>0,N=(ee?k:0)*x,te=(ee?M:0)*x,re=(ee?0:k)*x,ae=(ee?0:M)*x,oe=x-te;p(`upperleg01_R`,(-.1+d*.24+E*.1-D*.18)*oe),p(`upperleg01_L`,(.075-d*.24+E*.06+D*.1)*oe),p(`lowerleg01_R`,(-.04-Math.max(0,-Math.sin(u))*l*.24-E*.14-D*.12)*oe),p(`lowerleg01_L`,(-.04-Math.max(0,Math.sin(u))*l*.24-E*.12)*oe),p(`foot_R`,(.08-d*.08)*oe),p(`foot_L`,(-.04+d*.08)*oe);let se=m.twist*(h?re:1);p(`spine05`,E*.16+D*.08+Mi.lean*re,se-d*.015,-E*.025+D*.02),p(`head`,(c?.05:-E*.06)-Mi.lean*.55*re,h?-se:-m.twist*.3,c?Math.sin(o*4)*.08:-D*.01);for(let[e,t,n,r]of Li){let i=Pi.test(e)?te:N;i>0&&p(e,t*i,n*i,r*i)}v>0&&p(`head`,ri.nod*v);let ce=ie(n),le=c?0:ce.f*ce.s;if(le>0&&(p(`spine05`,.4*ce.along*le,0,.2*ce.side*le),p(`head`,.3*ce.along*le),p(`upperleg01_R`,-.25*le),i.motion.position.y-=.03*le,m.swordPosition.add(Y(0,.1,-.12).multiplyScalar(le)),m.swordRotation.slerp(X(Y(0,.8,.55)),.35*le)),v>0){let e=ii,t=X(e.direction,!0);m.swordPosition.lerp(e.position,v),m.swordRotation.slerp(t,v),m.sayaPosition.lerp(e.position,v),m.sayaRotation.slerp(t,v)}i.sword.position.copy(m.swordPosition),i.sword.quaternion.copy(m.swordRotation),i.saya.position.copy(m.sayaPosition),i.saya.quaternion.copy(m.sayaRotation);let P=i.joints.get(`finger1-2_L`);P&&P.bone.quaternion.multiply(yi.setFromAxisAngle(Y(-.9816983191,.0118977202,-.1900672821),U.degToRad(12)*(1-m.leftOnSaya))),i.model.updateWorldMatrix(!0,!0);let ue=h?Mi.load*ae:E,de=h?Mi.release*ae:D,fe=h?ae:O,pe=w&&O<1||h&&ae<1?Object.values(i.footwork.legs).flatMap(e=>[e.upper,e.lower,e.foot].map(e=>({bone:e,quaternion:e.quaternion.clone()}))):[],me=i.footwork.hips.position.clone();if(Jr(i.footwork,ue,de,S||w||ae>0,h||w||C>=.56,h||w||C>=.98),pe.length){i.footwork.hips.position.lerpVectors(me,i.footwork.hips.position,fe);for(let{bone:e,quaternion:t}of pe)e.quaternion.slerpQuaternions(t,e.quaternion,fe)}te>0&&Kr(i.footwork,new L(...Ri).multiplyScalar(te)),qr(i.footwork,ri.feet,ri.toe,v),e.userData.samuraiStanceWeight=S?1:O,i.joints.get(`spine05`).bone.updateWorldMatrix(!0,!1),i.torsoDelta.copy(i.model.matrixWorld).invert().multiply(i.joints.get(`spine05`).bone.matrixWorld).multiply(i.torsoRestInverse);let he=new z().setFromRotationMatrix(i.torsoDelta);for(let e of[i.sword,i.saya])e.position.applyMatrix4(i.torsoDelta),e.quaternion.premultiply(he);let ge=S?Si((C-.92)/.12)*(1-Si((C-1.4)/.18)):w?Si((T-.11)/.07)*(1-Si((T-.26)/.105)):0;if(ge>0){let e=i.joints.get(`upperarm01_R`).bone.getWorldPosition(new L),t=i.joints.get(`lowerarm01_R`).bone.getWorldPosition(new L),n=i.joints.get(`wrist_R`).bone.getWorldPosition(new L),r=(e.distanceTo(t)+t.distanceTo(n)-.0012)/i.model.getWorldScale(new L).x,a=i.model.worldToLocal(e).add(Y(-r,0,0)),o=X(Y(-1,0,0)),s=a.sub(i.rightGrip.position.clone().applyQuaternion(o));i.sword.position.lerp(s,ge),i.sword.quaternion.slerp(o,ge)}if(i.model.updateWorldMatrix(!0,!0),v>0){let e=oa(i,m.leftOnSaya);for(let t of[`R`,`L`])e[t].position.lerp(i.sideGrips[t].position,v),e[t].quaternion.slerp(i.sideGrips[t].quaternion,v);i.gripErrors.right=na(i,`R`,e.R,v),i.gripErrors.left=na(i,`L`,e.L,v)}else aa(i,m.leftOnSaya);ca(e,i,n,o,c);let _e=S?i.motion.worldToLocal(i.sword.localToWorld(i.rightGrip.position.clone().add(Y(0,0,.737)))).sub(i.motion.worldToLocal(i.sword.localToWorld(i.rightGrip.position.clone()))):void 0;Rr(i.vfx,S?xe-n.action:null,i.motion.worldToLocal(i.saya.getWorldPosition(new L)),_e),i.stars.visible=c,i.stars.rotation.y=o*2.1;let ve=!c&&n.meditating?1:0,ye=e.userData.samuraiEyes;ui(i.eyes,e.userData.samuraiEyes=ye===void 0?ve:Ii(ye,ve,s/ri.eyes)),e.userData.samuraiPose=n.samuraiMotion===`iai`&&n.action>0?`iai`:n.samuraiMotion===`reflect`&&n.action>0?`reflect`:n.samuraiMotion===`kamaitachi`&&n.action>0?`kamaitachi`:v>.5?`meditate`:`battou`;for(let e of i.materials)e.material.emissive.copy(n.hitFlash>0?bi:e.emissive),e.material.emissiveIntensity=n.hitFlash>0?.3*(n.hitFlash/.25):e.intensity;i.yuru&&Ut(i.yuru.parts,i.motion,i.yuru.bones,i.torsoDelta,f)}var ua={wrist:[-.4,1.34,.02],blade:[-.62,.72,-.3],yaw:-.35,elbow:[-1,.1,-.2]},da={wrist:[-.38,1.02,-.28],blade:[-.2,.3,-.93],yaw:-.45,elbow:[-.7,-.4,-.4]},fa=(e,t)=>({t:e,...t}),pa=f.swordsman.duration,ma={swordsman:{slash:{fadeIn:.03,fadeOut:.045,keys:[fa(.03,ua),fa(.12,{wrist:[-.36,1.28,.25],blade:[-.62,.45,.64],yaw:-.2,elbow:[-.9,-.2,-.3]}),fa(.19,{wrist:[-.14,1.1,.4],blade:[.05,-.12,.99],yaw:0,elbow:[-.6,-.6,-.3]}),fa(.27,{wrist:[-.03,.96,.28],blade:[.7,-.45,.55],yaw:.25,elbow:[-.4,-.8,-.2]}),fa(.35,{wrist:[0,.9,.16],blade:[.72,-.64,.26],yaw:.45,elbow:[-.3,-.9,-.2]}),fa(pa,{wrist:[0,.9,.16],blade:[.72,-.64,.26],yaw:.45,elbow:[-.3,-.9,-.2]})]},spin:{fadeIn:.05,fadeOut:.05,keys:[fa(.05,{wrist:[-.52,1.05,.12],blade:[-.98,.05,.15],yaw:0,elbow:[-.3,-.9,-.2]}),fa(.3,{wrist:[-.52,1.05,.12],blade:[-.98,.05,.15],yaw:Math.PI*2,elbow:[-.3,-.9,-.2]}),fa(.35,{wrist:[-.52,1.05,.12],blade:[-.98,.05,.15],yaw:Math.PI*2,elbow:[-.3,-.9,-.2]})]},charge:{fadeIn:.15,fadeOut:0,keys:[fa(.15,da),fa(ue.charge,da)]},thrust:{fadeIn:0,fadeOut:.2,keys:[fa(0,da),fa(.06,{wrist:[-.15,1.12,.44],blade:[.02,.02,1],yaw:.3,elbow:[-.6,-.7,-.2]}),fa(ue.follow,{wrist:[-.15,1.12,.44],blade:[.02,.02,1],yaw:.3,elbow:[-.6,-.7,-.2]})]},awaken:{fadeIn:.08,fadeOut:.1,keys:[fa(.08,{wrist:[-.3,1.45,.2],blade:[-.1,.99,.05],yaw:0,elbow:[-1,.1,-.2]}),fa(.35,{wrist:[-.3,1.45,.2],blade:[-.1,.99,.05],yaw:0,elbow:[-1,.1,-.2]})]}}};function ha(e){if(e.role!==`swordsman`||e.stun>0)return;let t=ma.swordsman;if(e.charge>0)return{motion:t.charge,t:ue.charge-e.charge,length:ue.charge};if(e.action>0){if(e.attackKind===`melee`)return{motion:t.slash,t:pa-e.action,length:pa};if(e.skillMotion===`spin`)return{motion:t.spin,t:.35-e.action,length:.35};if(e.skillMotion===`thrust`)return{motion:t.thrust,t:ue.follow-e.action,length:ue.follow};if(e.skillMotion===`awaken`)return{motion:t.awaken,t:.35-e.action,length:.35}}}var ga=e=>{let t=Math.min(1,Math.max(0,e));return t*t*(3-2*t)};function _a(e,t){let n=e.keys;if(t<=n[0].t)return n[0];for(let e=1;e<n.length;e++){let r=n[e-1],i=n[e];if(t<=i.t){let e=ga((t-r.t)/Math.max(1e-6,i.t-r.t)),n=(t,n)=>t.map((t,r)=>t+(n[r]-t)*e);return{t,wrist:n(r.wrist,i.wrist),blade:n(r.blade,i.blade),yaw:r.yaw+(i.yaw-r.yaw)*e,elbow:n(r.elbow,i.elbow)}}}return n[n.length-1]}function va(e,t,n){let r=e.fadeIn>0?ga(t/e.fadeIn):1,i=e.fadeOut>0?ga((n-t)/e.fadeOut):1;return Math.min(r,i)}var ya=new WeakMap,ba=new WeakMap,xa=new L,Sa=new L,Ca=new L,wa=new L,Ta=new z,Ea=new z;function Da(e){let t=ya.get(e);if(t)return t;let n=t=>e.model.getObjectByName(t),r=n(`upperarm01_R`),i=n(`lowerarm01_R`),a=n(`wrist_R`),o;if(e.model.traverse(e=>{e.isSkinnedMesh&&e.name===`Yuru_Body`&&(!o||String(e.userData.avatarPart??``).startsWith(`weapon-`))&&(o=e)}),!r||!i||!a||!o)return;let s=ba.get(o.geometry);if(s!==void 0)return s?(t={upper:r,lower:i,wrist:a,blade:s.clone(),lowerStand:i.quaternion.clone(),wristStand:a.quaternion.clone()},ya.set(e,t),t):void 0;e.model.updateMatrixWorld(!0);let c=o.skeleton.bones.indexOf(a),l=o.geometry.getAttribute(`position`),u=o.geometry.getAttribute(`skinIndex`),d=o.geometry.getAttribute(`skinWeight`),f=a.getWorldPosition(new L),p=new L,m=new L,h=0;for(let e=0;e<l.count;e++){let t=0;for(let n=0;n<4;n++)u.getComponent(e,n)===c&&(t+=d.getComponent(e,n));if(t<.95)continue;p.fromBufferAttribute(l,e),o.applyBoneTransform(e,p),p.applyMatrix4(o.matrixWorld);let n=p.distanceTo(f);n>h&&(h=n,m.copy(p))}if(h<.2){ba.set(o.geometry,null);return}let g=m.sub(f).normalize().applyQuaternion(a.getWorldQuaternion(new z).invert());return ba.set(o.geometry,g.clone()),t={upper:r,lower:i,wrist:a,blade:g,lowerStand:i.quaternion.clone(),wristStand:a.quaternion.clone()},ya.set(e,t),t}function Oa(e,t){e.parent.getWorldQuaternion(Ea),e.quaternion.copy(Ea.invert().multiply(t)),e.updateWorldMatrix(!1,!0)}function ka(e,t,n){let r=e.getWorldPosition(new L),i=t.getWorldPosition(new L).sub(r).normalize(),a=n.clone().sub(r).normalize();Oa(e,new z().setFromUnitVectors(i,a).multiply(e.getWorldQuaternion(new z)))}function Aa(e,t,n){if(!(n.role in ma))return 0;let r=ya.get(t)??Da(t);if(!r)return 0;r.lower.quaternion.copy(r.lowerStand),r.wrist.quaternion.copy(r.wristStand);let i=ha(n);if(!i)return 0;let a=va(i.motion,i.t,i.length);if(a<=0)return 0;let o=_a(i.motion,i.t),s=Math.atan2(Math.sin(o.yaw-e.rotation.y),Math.cos(o.yaw-e.rotation.y));e.rotation.y+=s*a,e.updateMatrixWorld(!0);let c=r.wrist.getWorldPosition(xa),l=r.blade.clone().applyQuaternion(r.wrist.getWorldQuaternion(Ta)),u=t.model.localToWorld(Sa.set(...o.wrist).divideScalar(Zt.scale)).sub(c).multiplyScalar(a).add(c),d=e.getWorldQuaternion(new z),f=new L(...o.blade).normalize().applyQuaternion(d).sub(l).multiplyScalar(a).add(l).normalize(),p=r.upper.getWorldPosition(new L),m=r.lower.getWorldPosition(Ca),h=r.wrist.getWorldPosition(wa),g=p.distanceTo(m),_=m.distanceTo(h),v=u.clone().sub(p),y=Math.min(Math.max(v.length(),.02),g+_-.001);v.normalize();let b=new L(...o.elbow).applyQuaternion(d);b.addScaledVector(v,-b.dot(v)).normalize();let x=(g*g-_*_+y*y)/(2*y),S=p.clone().addScaledVector(v,x).addScaledVector(b,Math.sqrt(Math.max(0,g*g-x*x))),C=p.clone().addScaledVector(v,y);ka(r.upper,r.lower,S),ka(r.lower,r.wrist,C);let w=r.wrist.getWorldQuaternion(new z),T=r.blade.clone().applyQuaternion(w);return Oa(r.wrist,new z().setFromUnitVectors(T,f).multiply(w)),r.wrist.getWorldPosition(new L).distanceTo(u)}var ja=new L(0,1,0),Ma=[2611711,16737405],Na=14478591;function Pa(e,t=0,n=0){return new W({color:e,roughness:t?.3:.82,metalness:t,emissive:e,emissiveIntensity:n})}function Fa(e,t,n,r=0,i=0,a=0){let o=new V(t,n);return o.position.set(r,i,a),o.castShadow=ee.cast,o.receiveShadow=!0,e.add(o),o}function Q(e,t,n,r=[0,0,0]){let i=Math.min(...n);return Fa(e,i>.045?new rr(n[0],n[1],n[2],1,i*.17):new pt(n[0],n[1],n[2]),t,...r)}function Ia(e,t,n,r=[0,0,0],i=[1,1,1]){let a=Fa(e,new je(n,20,14),t,...r);return a.scale.set(...i),a}function $(e,t,n,r,i,a=[0,0,0],o=8){return Fa(e,new _t(n,r,i,Math.max(14,o)),t,...a)}function La(e,t=0,n=0,r=0){let i=new H;return i.position.set(t,n,r),e.add(i),i}function Ra(e,t,n,r,i){let a=La(e,0,-.59,.035);a.rotation.x=Math.PI/2-.16,$(a,r,.045,.045,.24);for(let e=0;e<3;e++)$(a,n,.05,.05,.025,[0,-.075+e*.07,0]);if(Ia(a,n,.068,[0,-.16,0]),i===`katana`){$(a,n,.13,.13,.04,[0,.16,0],8);let e=new Ce;e.moveTo(-.045,.19),e.lineTo(-.035,1.01),e.lineTo(.105,1.28),e.lineTo(.11,1.08),e.lineTo(.07,.19),e.closePath(),Fa(a,new et(e,{depth:.027,bevelEnabled:!1}),t,0,0,-.015)}else{Q(a,n,[.4,.07,.1],[0,.15,0]);let e=new Ce;e.moveTo(-.1,.18),e.lineTo(-.1,.93),e.lineTo(0,1.17),e.lineTo(.1,.93),e.lineTo(.1,.18),e.closePath(),Fa(a,new et(e,{depth:.045,bevelEnabled:!0,bevelThickness:.012,bevelSize:.019,bevelSegments:1,steps:1}),t,0,0,-.025),Q(a,n,[.025,.75,.055],[0,.61,0])}return a}function za(e,t,n=1.02,r=.66){let i=La(e,0,1.51,-.24),a=new yt(1,1,10,12),o=a.getAttribute(`position`);for(let e=0;e<o.count;e++){let t=o.getX(e)+.5,i=.5-o.getY(e),a=.56+(r-.56)*i;o.setXYZ(e,(t-.5)*a,-i*n,-.2*i+Math.sin(t*Math.PI*8)*.024*i)}return a.computeVertexNormals(),t.side=2,Fa(i,a,t),i}function Ba(e,t,n){Ia(e,t,n?.23:.165,[0,-.08,0],[1,.72,1.03])}function Va(e,t){let n=[t.body,t.head,t.rightArm,t.leftArm,t.rightLeg,t.leftLeg,t.stars,...t.guns];t.cape&&n.push(t.cape);let r=new Set(n);t.halo&&r.add(t.halo),e.updateMatrixWorld(!0);for(let e of n){let t=new Map,n=e=>{for(let i of e.children)if(!r.has(i)){if(i instanceof V&&!Array.isArray(i.material)){let e=t.get(i.material)??[];e.push(i),t.set(i.material,e)}n(i)}};n(e);let i=e.matrixWorld.clone().invert();for(let[n,r]of t){if(r.length<2)continue;let t=r.map(e=>{let t=e.geometry.index?e.geometry.toNonIndexed():e.geometry.clone();return t.getAttribute(`uv`)||t.setAttribute(`uv`,new I(new Float32Array(t.getAttribute(`position`).count*2),2)),t.applyMatrix4(new ft().multiplyMatrices(i,e.matrixWorld)),t.clearGroups(),t}),a=lt(t,!1);if(t.forEach(e=>e.dispose()),!a)continue;let o=new V(a,n);o.castShadow=ee.cast,o.receiveShadow=!0,a.computeBoundingSphere(),e.add(o);for(let e of r)e.removeFromParent(),e.geometry.dispose()}}}function Ha(e,t,n){if(me()!==`human`&&(n=void 0),e===`samurai`)return Qi(t,n);let r=Ua(e,t);return me()===`human`&&Rt(r,r.userData.rig,t,n),r}function Ua(e,t){let n=new H,r=[];n.name=`${t===0?`azure`:`coral`}-${e}`;let i=[],a=(e,t=0,n=0)=>{let r=Pa(e,t,n);return i.push(r),r.userData.baseEmissive=n,r},o=a(Ma[t],.2,.22),s=a(1450812),c=a(2569550,.15),l=a(e===`ninja`?15316107:e===`gunner`?13275245:16041635),u=a(16774364),d=a(Na,.72),f=a(16107358,.55),p=a(e===`healer`?16110737:e===`swordsman`?16107878:e===`mage`?15063533:3746619),m=a({swordsman:3235508,samurai:11026259,paladin:13474630,mage:6901922,gunner:10184011,ninja:2440281,healer:15263698}[e]),h=a(e===`healer`?5483144:e===`mage`?12095959:e===`samurai`?7875903:4019840),g=un().cloth;for(let e of[m,h,s])e.map=g,e.roughness=.93;o.emissiveIntensity=.085,o.userData.baseEmissive=.085;let _=La(n),v=e===`paladin`,y=e===`ninja`,b=v?.77:y?.53:.63,x=$(_,m,b*.52,b*.41,.6,[0,1.18,0],6);x.scale.z=.71,Q(_,s,[b*.87,.13,.39],[0,.93,0]),Q(_,f,[.13,.14,.045],[0,.93,.213]);for(let e of[-1,1]){let t=Q(_,c,[.09,.53,.045],[e*.16,1.21,.239]);t.rotation.z=e*.32;for(let t=0;t<4;t++)Ia(_,f,.013,[e*.22,1.08+t*.075,.245],[1,1,.5]);Q(_,c,[.14,.2,.14],[b*.46*e,.91,-.055])}$(_,l,.11,.12,.15,[0,1.55,0]),Q(_,o,[.18,.35,.035],[0,1.26,.24]),Q(_,o,[.21,.3,.035],[0,1.29,-.235]);let S=La(_,-.16,.91,0),C=La(_,.16,.91,0);for(let t of[S,C]){$(t,s,y?.105:.125,.1,.42,[0,-.19,0]),$(t,c,.115,.13,.3,[0,-.56,0]),Q(t,c,[.235,.15,.35],[0,-.825,.055]),Q(t,e===`paladin`?f:d,[.18,.15,.07],[0,-.46,.11]),Q(t,c,[.235,.035,.35],[0,-.894,.055]);for(let e=0;e<3;e++)Q(t,f,[.055,.02,.026],[-.08,-.51-e*.048,.125]);$(t,o,.122,.122,.045,[0,-.65,0])}let w=La(_,-b*.62,1.48,0),T=La(_,b*.62,1.48,0);for(let t of[w,T]){$(t,m,y?.095:.12,.09,.33,[0,-.17,0]),$(t,e===`healer`||e===`mage`?m:c,.12,.1,.22,[0,-.4,0]),$(t,o,.125,.125,.045,[0,-.43,0]),Ia(t,l,.105,[0,-.565,0],[.85,1,.91]),Ba(t,e===`paladin`?f:e===`swordsman`?d:m,v);for(let e of[-1,1])Ia(t,f,.025,[e*(v?.16:.1),-.08,.09],[1,1,.6])}let E=La(_,0,1.83,.018);if(Ia(E,l,.285,[0,0,0],[.95,1.09,.91]),Ia(E,l,.068,[-.268,-.012,0]),Ia(E,l,.068,[.268,-.012,0]),Ia(E,p,.29,[0,.115,-.055],[1.02,.83,.92]),![`paladin`,`samurai`,`ninja`].includes(e))for(let e=0;e<14;e++){let t=e*Math.PI*2/14,n=Fa(E,new Xe(.085,.27+e%3*.017,7),p,Math.sin(t)*.23,.185+e%3*.012,Math.cos(t)*.2-.065);n.rotation.z=-Math.sin(t)*.95,n.rotation.x=Math.cos(t)*.7}for(let e of[-1,1]){Q(E,u,[.08,.081,.015],[e*.107,.018,.242]),Q(E,s,[.037,.058,.015],[e*.103,.011,.256]);let t=Q(E,p,[.103,.029,.024],[e*.111,.085,.24]);t.rotation.z=e*.08}Ia(E,l,.048,[0,-.035,.263],[.65,.9,.8]),Q(E,a(11167325),[.07,.014,.012],[0,-.125,.245]);let D,O;if(e===`swordsman`){D=za(_,h,.93,.71),Q(D,o,[.14,.66,.028],[0,-.39,-.098]),Ra(w,d,f,s,`sword`);for(let e=-1;e<=1;e++){let t=Fa(E,new Xe(.115,.25,4),p,e*.14,.27,.025);t.rotation.z=-e*.4,t.rotation.x=.2}Q(T,d,[.2,.24,.1],[0,-.38,.075]),Q(_,d,[.2,.25,.045],[-.18,1.27,.238])}else if(e===`samurai`){Ra(w,d,f,s,`katana`);for(let e=0;e<3;e++)Q(_,e%2?h:m,[.56,.105,.08],[0,1.12+e*.115,.233]),Q(_,f,[.52,.018,.014],[0,1.13+e*.115,.28]);for(let e of[-.24,0,.24])Q(_,m,[.21,.3,.1],[e,.81,.21]),Q(_,f,[.17,.025,.015],[e,.73,.268]);Ia(E,s,.305,[0,.13,-.035],[1.13,.8,1.08]),Q(E,m,[.59,.1,.5],[0,.1,-.07]);for(let e of[-1,1]){let t=Fa(E,new Xe(.06,.32,5),f,e*.19,.37,.13);t.rotation.z=-e*.42,Q(E,m,[.115,.31,.33],[e*.29,-.05,-.07])}Ia(E,o,.073,[0,.22,.245],[.8,1,.55]);let e=Q(_,s,[.075,.93,.09],[.36,.81,-.05]);e.rotation.z=-.38,D=za(_,o,.65,.25)}else if(e===`paladin`){D=za(_,u,1.1,.85),Q(D,o,[.25,.78,.028],[0,-.44,-.11]);let e=$(_,f,.44,.34,.51,[0,1.22,.018],6);e.scale.z=.71,Q(_,u,[.065,.25,.03],[0,1.25,.3]),Q(_,u,[.22,.06,.03],[0,1.29,.305]),Ra(w,d,f,s,`sword`).scale.setScalar(.82);let t=La(T,.07,-.34,.15),n=new Ce;n.moveTo(-.34,.38),n.lineTo(.34,.38),n.lineTo(.34,-.19),n.lineTo(0,-.52),n.lineTo(-.34,-.19),n.closePath();let r=new et(n,{depth:.075,bevelEnabled:!0,bevelSize:.04,bevelThickness:.025,bevelSegments:1,steps:1});Fa(t,r,f),Fa(t,r,o,0,0,.1).scale.set(.81,.84,.32),Q(t,u,[.075,.49,.025],[0,.005,.15]),Q(t,u,[.34,.075,.025],[0,.085,.15]),Ia(E,f,.305,[0,.12,-.07],[1.13,.87,1]),Q(E,f,[.62,.075,.22],[0,.12,.12]);for(let e of[-1,1])Q(E,f,[.075,.24,.18],[e*.265,-.07,.025]);let i=Fa(E,new Xe(.12,.3,5),o,0,.37,-.11);i.scale.z=1.8}else if(e===`mage`||e===`healer`){let t=$(_,m,.25,.45,.75,[0,.66,0],8);t.scale.z=.8,$(_,h,.44,.455,.08,[0,.3,0],8).scale.z=.8;for(let e of[-1,1]){let t=Q(_,h,[.1,.91,.035],[e*.15,.85,.29]);t.rotation.z=e*.055}let n=La(w,0,-.55,.05);if($(n,e===`mage`?s:f,.04,.045,1.8,[0,.1,0]),$(n,f,.075,.075,.12,[0,.86,0]),$(n,o,.047,.047,.31,[0,-.03,0]),D=za(_,h,.88,.65),e===`mage`){$(E,m,.46,.46,.065,[0,.235,0],10);let e=Fa(E,new Xe(.32,.68,8),m,.035,.58,-.025);e.rotation.z=-.1,$(E,f,.288,.31,.07,[.006,.3,0]),Ia(E,o,.065,[0,.32,.29],[1,1,.5]);let t=a(16748875,.2,.8),r=Fa(n,new It(.17,.035,5,8),f,0,1.02,0);r.rotation.z=Math.PI/4,Fa(n,new Ze(.13),t,0,1.06,0)}else{Ia(E,p,.27,[0,-.12,-.095],[1.08,1.3,.7]);for(let e of[-1,1])Ia(E,p,.1,[e*.21,-.23,.012],[.67,1.7,.8]);$(E,u,.281,.281,.075,[0,.17,0],12),Fa(E,new Ze(.075),o,0,.17,.275);let e=a(9174983,.2,.65);O=Fa(E,new It(.3,.025,6,24),f,0,.48,0),O.rotation.x=Math.PI/2,Fa(n,new It(.18,.035,6,16),f,0,1.04,0),Fa(n,new Ze(.12),e,0,1.04,0),Q(n,e,[.055,.24,.05],[0,1.05,0]),Q(n,e,[.21,.055,.05],[0,1.05,0])}}else if(e===`gunner`){D=za(_,m,.91,.76);for(let e of[-1,1]){let t=Q(_,m,[.23,.47,.18],[e*.245,.82,0]);t.rotation.z=e*.1;let n=Q(_,f,[.075,.39,.05],[e*.2,1.3,.235]);n.rotation.z=e*.25}for(let e of[w,T]){let t=La(e,0,-.56,.04);r.push(t);let n=La(t,0,.065,.462);n.name=`gun-muzzle`,Q(t,s,[.105,.18,.09],[0,-.04,.05]),Q(t,d,[.12,.115,.4],[0,.065,.21]),Q(t,f,[.14,.12,.08],[0,.065,.4]),Q(t,s,[.07,.07,.02],[0,.065,.444])}let e=$(E,s,.3,.3,.11,[0,.12,0]);e.scale.z=.9;for(let e of[-1,1])$(E,f,.092,.092,.04,[e*.105,.14,.255]).rotation.x=Math.PI/2,Ia(E,o,.071,[e*.105,.14,.28],[1,.82,.24]);Q(_,s,[.4,.1,.05],[0,1.18,.253]).rotation.z=-.55;for(let e=0;e<4;e++)$(_,f,.025,.025,.085,[-.08+e*.06,1.2-e*.035,.295])}else{Ia(E,s,.287,[0,-.12,.012],[1,.6,.91]),Q(E,s,[.42,.13,.14],[0,-.1,.21]),$(E,o,.293,.293,.085,[0,.14,0],12);let e=$(_,o,.19,.19,.16,[0,1.54,0],8);e.scale.z=1.04,D=za(_,o,.93,.22),D.position.x=.13,D.rotation.z=-.2,Ra(w,d,s,s,`sword`).scale.set(.66,.56,.72),Ra(T,d,s,s,`sword`).scale.set(.66,.56,.72),Q(_,d,[.09,.7,.075],[0,1.15,-.26]).rotation.z=-.6,Q(_,s,[.15,.23,.15],[.3,.95,.025])}let k=La(n,0,e===`mage`?2.95:2.48,0),A=a(16767339,.15,.5);for(let e=0;e<3;e++){let t=e*Math.PI*2/3,n=Fa(k,new Ze(.115),A,Math.cos(t)*.4,e*.035,Math.sin(t)*.4);n.scale.y=1.2}k.visible=!1;let j=Wa(e);n.add(j);let M={body:_,head:E,rightArm:w,leftArm:T,rightLeg:S,leftLeg:C,cape:D,halo:O,stars:k,materials:i,role:e,guns:r,swingTrail:j};n.userData.rig=M,Va(n,M);for(let e of r){let t=new V(new je(.11,8,6),new B({color:`#fff3b2`,transparent:!0,opacity:.9,depthWrite:!1}));t.name=`muzzle-flash`,t.position.set(0,.065,.51),t.scale.set(1,1,2.4),t.visible=!1,e.add(t)}return n}function Wa(t){let n=.6+.72,r=he(t)+.72,i=Math.acos(c.showAngle)*.55,a=new Nt(n,r,30,1,-Math.PI/2-i,i*2),o=a.getAttribute(`position`),s=new Float32Array(o.count*3),l=r-n;for(let t=0;t<o.count;t++){let r=(Math.hypot(o.getX(t),o.getY(t))-n)/l,i=+(Math.abs(r-e.core)<=e.criticalBand);s[t*3]=.72+i*.28,s[t*3+1]=.86+i*.14,s[t*3+2]=1}a.setAttribute(`color`,new at(s,3));let u=new V(a,new B({vertexColors:!0,transparent:!0,opacity:0,side:2,depthWrite:!1}));return u.rotation.x=-Math.PI/2,u.position.y=1.02,u.visible=!1,u.userData.noFade=!0,u}function Ga(e,t,n,r){if(e.userData.samurai){la(e,t,n);return}let i=e.userData.rig;if(!i)return;let a=t.hitStop>0?e.userData.poseTime??n:e.userData.poseTime=n,o=t.stun>0;if(o)for(let e of i.guns)e.getObjectByName(`muzzle-flash`).visible=!1;let s=o?0:Math.min(1,t.moving),c=b(i.role,t.id,a),l=Math.sin(c)*s,u=e.userData.gait??={phase:c,moving:s};u.phase=c,u.moving=s;let p=t.action>0?Math.sin(Math.min(1,t.action/.4)*Math.PI):0;if(i.body.position.y=Math.abs(l)*.055+Math.sin(a*2.4+t.id)*.009,i.body.rotation.x=o?.07:s*.09,i.body.rotation.z=o?Math.sin(a*5+t.id)*.14:-l*.022,i.body.rotation.y=p*(i.role===`swordsman`||i.role===`samurai`?.85:.2),i.rightLeg.rotation.x=l*.58,i.leftLeg.rotation.x=-l*.58,i.rightArm.rotation.x=-.24-l*.25-p*.9,i.leftArm.rotation.x=-.15+l*.28-p*.4,i.rightArm.rotation.z=.04-p*.65,i.leftArm.rotation.z=-.04,i.rightArm.rotation.y=-p*1.6,i.role===`gunner`?(i.rightArm.rotation.x=-.85-p*.35,i.leftArm.rotation.x=-.75-p*.3):i.role===`mage`||i.role===`healer`?(i.rightArm.rotation.x=-.12-p*.45,i.rightArm.rotation.z=.09,i.rightArm.rotation.y=0,i.leftArm.rotation.x=-.22-p*1.1,i.leftArm.rotation.z=-p*.6):i.role===`ninja`&&(i.rightArm.rotation.x=.25-p*1.45,i.leftArm.rotation.x=.25-p*1.1,i.body.rotation.x=s*.18),(t.guard>0&&t.attackKind!==`melee`||t.blocking)&&(i.leftArm.rotation.x=-.7,i.rightArm.rotation.x=-.5),i.role===`paladin`&&t.attackKind===`wall`&&t.action>0&&!o){let e=1-t.action/T.cast,n=U.smoothstep(e,0,.3)*(1-U.smoothstep(e,.75,1));i.body.rotation.y=0,i.body.rotation.x=s*.09-.08*n,i.rightArm.rotation.set(-.24-1.21*n,0,.04+.28*n),i.leftArm.rotation.set(-.15-.45*n,0,-.04-.12*n)}if(t.attackKind===`melee`&&t.action>0&&!o){let e=f[i.role],n=fe(i.role),r=S,a=e.duration-t.action,o=Math.min(1,a/Math.max(n.windup,1e-4)),c=U.smoothstep(a,n.windup,n.active),l=o*(1-U.smoothstep(a,n.active+r.hold,e.duration)),u=(e,t)=>(e*r.windupAmp*(1-c)+t*r.cutAmp*c)*l;if(i.body.rotation.y=u(-.32,.38),i.role===`mage`||i.role===`healer`?(i.rightArm.rotation.set(u(-1.1,.95),u(-.25,.4),u(.25,-.55)),i.leftArm.rotation.x=-.35-l*.5,i.body.rotation.x=s*.09+Math.sin(c*Math.PI)*.16*r.cutAmp):(i.rightArm.rotation.set(u(-1.35,.15),u(-.95,1.15),u(-.25,.3)),i.role===`ninja`&&i.leftArm.rotation.set(-.6*l,.7*l,.2*l)),i.swingTrail.visible=c>0&&c<1,i.swingTrail.visible){i.swingTrail.rotation.set(-Math.PI/2,0,u(-.32,.38));let e=i.swingTrail.material;e.opacity=.34*Math.sin(Math.min(1,c)*Math.PI)}}else i.swingTrail&&(i.swingTrail.visible=!1);if(i.role===`gunner`&&!o){let e=t.attackKind===`shot`?Math.max(0,1-(.35-t.action)/.16):0;i.body.rotation.set(0,0,0),i.body.position.y=0,i.rightArm.rotation.set(-1.45-e*.1,0,.04),i.leftArm.rotation.set(-1.4,0,-.04),i.guns.forEach((t,n)=>{t.rotation.set(n===0?1.45:1.4,0,0),t.getObjectByName(`muzzle-flash`).visible=n===0&&e>.45})}if((t.windup??0)>0&&!o){let e=t.windupSlot;i.role===`mage`?(i.leftArm.rotation.set(-1.4,0,-.3),i.rightArm.rotation.set(-.5,0,.2),i.body.rotation.set(-.08,-.25,0)):i.role===`gunner`&&e===3?(i.rightArm.rotation.set(-1.3,0,-.6),i.leftArm.rotation.set(-1.3,0,.6)):i.role===`gunner`?(i.rightArm.rotation.set(-1.55,0,-.25),i.leftArm.rotation.set(-1.55,0,.3),i.body.rotation.set(-.1,0,0)):i.role===`ninja`?(i.rightArm.rotation.set(-.5,1.1,.5),i.leftArm.rotation.set(-.3,0,-.2),i.body.rotation.set(.05,-.4,0)):i.role===`paladin`&&(i.leftArm.rotation.set(-1.15,0,-.1),i.rightArm.rotation.set(-.3,0,.1),i.body.rotation.set(.2,0,0),i.body.position.y-=.06)}t.charge>0&&(i.rightArm.rotation.x=-1.95,i.rightArm.rotation.z=-.15,i.body.rotation.y=-.28);let m=ie(t),h=o?0:m.f*m.s;i.head.rotation.x=.35*m.along*h,h>0&&(i.body.rotation.x+=.42*m.along*h,i.body.rotation.z+=.3*m.side*h,i.body.rotation.y+=.25*m.side*h,i.body.position.y-=.04*h,i.rightArm.rotation.x-=.9*h,i.leftArm.rotation.x-=.7*h,i.rightArm.rotation.z-=.35*h,i.leftArm.rotation.z+=.35*h,i.rightLeg.rotation.x+=.45*h,i.leftLeg.rotation.x-=.2*h),o?(i.head.rotation.z=Math.sin(a*4)*.1,i.rightArm.rotation.x=.07,i.leftArm.rotation.x=.07,i.rightArm.rotation.z=.2,i.leftArm.rotation.z=-.2):i.head.rotation.z=0;let g=t.dash&&O(t.dash.presentation)?t.dash:void 0;if(i.body.position.x=0,i.body.position.z=0,i.body.scale.setScalar(1),g&&(g.presentation===`dodge-roll`||g.presentation===`dodge-step`)){let t=U.clamp(1-g.left/d.length,0,1),n=new L(g.dir.x,0,g.dir.z).applyAxisAngle(ja,-e.rotation.y),r=new L().crossVectors(ja,n).normalize();if(g.presentation===`dodge-roll`){let e=1-J.roll.tuck*Math.sin(Math.PI*t);i.body.quaternion.setFromAxisAngle(r,Math.PI*2*J.roll.turns*t),i.body.scale.setScalar(e);let n=new L(0,J.roll.center*e,0);i.body.position.copy(n).sub(n.clone().applyQuaternion(i.body.quaternion))}else{let e=Math.sin(Math.PI*t);i.body.quaternion.setFromAxisAngle(r,J.step.lean*e),i.body.position.set(0,J.step.hop*e,0)}}i.cape&&(i.cape.rotation.x=.03+s*.27+Math.sin(a*5+t.id)*(.025+s*.06)),i.halo&&(i.halo.position.y=.48+Math.sin(a*2.5)*.04),i.stars.visible=o,i.stars.rotation.y=a*2.1;for(let e of i.materials)e.emissiveIntensity=e.userData.baseEmissive+.3*Math.max(0,t.hitFlash)/.25;let _=e.userData.yuruParty;_&&(Gt(_,Math.max(0,t.hitFlash)),e.userData.motionError=Aa(i.body,_,t),zt(_,i.body,u))}function Ka(e,t){let n=e.userData.rig;if(!n?.guns.length)return;e.updateMatrixWorld(!0);for(let e of n.guns){let n=e.getWorldPosition(new L),r=t.clone().sub(n).normalize(),i=new z().setFromUnitVectors(new L(0,0,1),r);e.quaternion.copy(e.parent.getWorldQuaternion(new z).invert().multiply(i)),e.updateMatrixWorld(!0)}let r=e.userData.yuruParty;return r&&(qt(e,r,t),zt(r,n.body,e.userData.gait)),n.guns[0].getObjectByName(`gun-muzzle`).getWorldPosition(new L)}function qa(e,t,n,r){let i=(e,t)=>e.role===t.role&&e.team===t.team&&(e.look??``)===(r.look?.(t)??``);for(let a of t){let t=e.get(a.id);t&&!i(t,a)&&r.ready(a)&&(e.delete(a.id),n.push(t),r.park(t))}for(let a of t){if(e.has(a.id)||!r.ready(a))continue;let t=n.findIndex(e=>i(e,a));if(t<0){e.set(a.id,r.create(a));continue}let[o]=n.splice(t,1);r.unpark(o),e.set(a.id,o)}}var Ja=class extends Ue{constructor(){super(),this.name=`RoomEnvironment`,this.position.y=-3.5;let e=new pt;e.deleteAttribute(`uv`);let t=new W({side:1}),n=new W,r=new we(16777215,900,28,2);r.position.set(.418,16.199,.3),this.add(r);let i=new V(e,t);i.position.set(-.757,13.219,.717),i.scale.set(31.713,28.305,28.591),this.add(i);let a=new Ke(e,n,6),o=new jt;o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),o.updateMatrix(),a.setMatrixAt(0,o.matrix),o.position.set(-5.607,-.754,-.758),o.rotation.set(0,.994,0),o.scale.set(1.97,1.534,3.955),o.updateMatrix(),a.setMatrixAt(1,o.matrix),o.position.set(6.167,.857,7.803),o.rotation.set(0,.561,0),o.scale.set(3.927,6.285,3.687),o.updateMatrix(),a.setMatrixAt(2,o.matrix),o.position.set(-2.017,.018,6.124),o.rotation.set(0,.333,0),o.scale.set(2.002,4.566,2.064),o.updateMatrix(),a.setMatrixAt(3,o.matrix),o.position.set(2.291,-.756,-2.621),o.rotation.set(0,-.286,0),o.scale.set(1.546,1.552,1.496),o.updateMatrix(),a.setMatrixAt(4,o.matrix),o.position.set(-2.193,-.369,-5.547),o.rotation.set(0,.516,0),o.scale.set(3.875,3.487,2.986),o.updateMatrix(),a.setMatrixAt(5,o.matrix),this.add(a);let s=new V(e,Ya(50));s.position.set(-16.116,14.37,8.208),s.scale.set(.1,2.428,2.739),this.add(s);let c=new V(e,Ya(50));c.position.set(-16.109,18.021,-8.207),c.scale.set(.1,2.425,2.751),this.add(c);let l=new V(e,Ya(17));l.position.set(14.904,12.198,-1.832),l.scale.set(.15,4.265,6.331),this.add(l);let u=new V(e,Ya(43));u.position.set(-.462,8.89,14.52),u.scale.set(4.38,5.441,.088),this.add(u);let d=new V(e,Ya(20));d.position.set(3.235,11.486,-12.541),d.scale.set(2.5,2,.1),this.add(d);let f=new V(e,Ya(100));f.position.set(0,20,0),f.scale.set(1,.1,1),this.add(f)}dispose(){let e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(let t of e)t.dispose()}};function Ya(e){return new ot({color:0,emissive:16777215,emissiveIntensity:e})}var Xa={name:`CopyShader`,uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`},Za=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error(`THREE.Pass: .render() must be implemented in derived pass.`)}dispose(){}},Qa=new ke(-1,1,1,-1,0,1),$a=new class extends Ot{constructor(){super(),this.setAttribute(`position`,new I([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute(`uv`,new I([0,2,0,0,2,0],2))}},eo=class{constructor(e){this._mesh=new V($a,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,Qa)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}},to=class extends Za{constructor(e,t=`tDiffuse`){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof vt?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Pe.clone(e.uniforms),this.material=new vt({name:e.name===void 0?`unspecified`:e.name,defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new eo(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}},no=class extends Za{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){let r=e.getContext(),i=e.state;i.buffers.color.setMask(!1),i.buffers.depth.setMask(!1),i.buffers.color.setLocked(!0),i.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),i.buffers.stencil.setTest(!0),i.buffers.stencil.setOp(r.REPLACE,r.REPLACE,r.REPLACE),i.buffers.stencil.setFunc(r.ALWAYS,a,4294967295),i.buffers.stencil.setClear(o),i.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),i.buffers.color.setLocked(!1),i.buffers.depth.setLocked(!1),i.buffers.color.setMask(!0),i.buffers.depth.setMask(!0),i.buffers.stencil.setLocked(!1),i.buffers.stencil.setFunc(r.EQUAL,1,4294967295),i.buffers.stencil.setOp(r.KEEP,r.KEEP,r.KEEP),i.buffers.stencil.setLocked(!0)}},ro=class extends Za{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}},io=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let n=e.getSize(new R);this._width=n.width,this._height=n.height,t=new Et(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Ie}),t.texture.name=`EffectComposer.rt1`}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name=`EffectComposer.rt2`,this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new to(Xa),this.copyPass.material.blending=0,this.timer=new Je}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){this.timer.update(),e===void 0&&(e=this.timer.getDelta());let t=this.renderer.getRenderTarget(),n=!1;for(let t=0,r=this.passes.length;t<r;t++){let r=this.passes[t];if(r.enabled!==!1){if(r.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(t),r.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),r.needsSwap){if(n){let t=this.renderer.getContext(),n=this.renderer.state.buffers.stencil;n.setFunc(t.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),n.setFunc(t.EQUAL,1,4294967295)}this.swapBuffers()}no!==void 0&&(r instanceof no?n=!0:r instanceof ro&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new R);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let n=this._width*this._pixelRatio,r=this._height*this._pixelRatio;this.renderTarget1.setSize(n,r),this.renderTarget2.setSize(n,r);for(let e=0;e<this.passes.length;e++)this.passes[e].setSize(n,r)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}},ao=class extends Za{constructor(e,t,n=null,r=null,i=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=r,this.clearAlpha=i,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new F}render(e,t,n){let r=e.autoClear;e.autoClear=!1;let i,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(i=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==1&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(i),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),e.autoClear=r}},oo={name:`GTAOShader`,defines:{PERSPECTIVE_CAMERA:1,SAMPLES:16,NORMAL_VECTOR_TYPE:1,DEPTH_SWIZZLING:`x`,SCREEN_SPACE_RADIUS:0,SCREEN_SPACE_RADIUS_SCALE:100,SCENE_CLIP_BOX:0},uniforms:{tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new R},cameraNear:{value:null},cameraFar:{value:null},cameraProjectionMatrix:{value:new ft},cameraProjectionMatrixInverse:{value:new ft},cameraWorldMatrix:{value:new ft},radius:{value:.25},distanceExponent:{value:1},thickness:{value:1},distanceFallOff:{value:1},scale:{value:1},sceneBoxMin:{value:new L(-1,-1,-1)},sceneBoxMax:{value:new L(1,1,1)}},vertexShader:`

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
		}`},so={name:`GTAODepthShader`,defines:{PERSPECTIVE_CAMERA:1},uniforms:{tDepth:{value:null},cameraNear:{value:null},cameraFar:{value:null}},vertexShader:`
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

		}`},co={name:`GTAOBlendShader`,uniforms:{tDiffuse:{value:null},intensity:{value:1}},vertexShader:`
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
		}`};function lo(e=5){let t=Math.floor(e)%2==0?Math.floor(e)+1:Math.floor(e),n=uo(t),r=n.length,i=new Uint8Array(r*4);for(let e=0;e<r;++e){let t=n[e],a=2*Math.PI*t/r,o=new L(Math.cos(a),Math.sin(a),0).normalize();i[e*4]=(o.x*.5+.5)*255,i[e*4+1]=(o.y*.5+.5)*255,i[e*4+2]=127,i[e*4+3]=255}let a=new Be(i,t,t);return a.wrapS=Ft,a.wrapT=Ft,a.needsUpdate=!0,a}function uo(e){let t=Math.floor(e)%2==0?Math.floor(e)+1:Math.floor(e),n=t*t,r=Array(n).fill(0),i=Math.floor(t/2),a=t-1;for(let e=1;e<=n;){if(i===-1&&a===t?(a=t-2,i=0):(a===t&&(a=0),i<0&&(i=t-1)),r[i*t+a]!==0){a-=2,i++;continue}r[i*t+a]=e++,a++,i--}return r}var fo={name:`PoissonDenoiseShader`,defines:{SAMPLES:16,SAMPLE_VECTORS:po(16,2,1),NORMAL_VECTOR_TYPE:1,DEPTH_VALUE_SOURCE:0},uniforms:{tDiffuse:{value:null},tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new R},cameraProjectionMatrixInverse:{value:new ft},lumaPhi:{value:5},depthPhi:{value:5},normalPhi:{value:5},radius:{value:4},index:{value:0}},vertexShader:`

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
		}`};function po(e,t,n){let r=mo(e,t,n),i=`vec3[SAMPLES](`;for(let t=0;t<e;t++){let n=r[t];i+=`vec3(${n.x}, ${n.y}, ${n.z})${t<e-1?`,`:`)`}`}return i}function mo(e,t,n){let r=[];for(let i=0;i<e;i++){let a=2*Math.PI*t*i/e,o=(i/(e-1))**n;r.push(new L(Math.cos(a),Math.sin(a),o))}return r}var ho=class{constructor(e=Math){this.grad3=[[1,1,0],[-1,1,0],[1,-1,0],[-1,-1,0],[1,0,1],[-1,0,1],[1,0,-1],[-1,0,-1],[0,1,1],[0,-1,1],[0,1,-1],[0,-1,-1]],this.grad4=[[0,1,1,1],[0,1,1,-1],[0,1,-1,1],[0,1,-1,-1],[0,-1,1,1],[0,-1,1,-1],[0,-1,-1,1],[0,-1,-1,-1],[1,0,1,1],[1,0,1,-1],[1,0,-1,1],[1,0,-1,-1],[-1,0,1,1],[-1,0,1,-1],[-1,0,-1,1],[-1,0,-1,-1],[1,1,0,1],[1,1,0,-1],[1,-1,0,1],[1,-1,0,-1],[-1,1,0,1],[-1,1,0,-1],[-1,-1,0,1],[-1,-1,0,-1],[1,1,1,0],[1,1,-1,0],[1,-1,1,0],[1,-1,-1,0],[-1,1,1,0],[-1,1,-1,0],[-1,-1,1,0],[-1,-1,-1,0]],this.p=[];for(let t=0;t<256;t++)this.p[t]=Math.floor(e.random()*256);this.perm=[];for(let e=0;e<512;e++)this.perm[e]=this.p[e&255];this.simplex=[[0,1,2,3],[0,1,3,2],[0,0,0,0],[0,2,3,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,3,0],[0,2,1,3],[0,0,0,0],[0,3,1,2],[0,3,2,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,3,2,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,0,3],[0,0,0,0],[1,3,0,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,3,0,1],[2,3,1,0],[1,0,2,3],[1,0,3,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,3,1],[0,0,0,0],[2,1,3,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,1,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,0,1,2],[3,0,2,1],[0,0,0,0],[3,1,2,0],[2,1,0,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,1,0,2],[0,0,0,0],[3,2,0,1],[3,2,1,0]]}noise(e,t){let n,r,i,a=.5*(Math.sqrt(3)-1),o=(e+t)*a,s=Math.floor(e+o),c=Math.floor(t+o),l=(3-Math.sqrt(3))/6,u=(s+c)*l,d=s-u,f=c-u,p=e-d,m=t-f,h,g;p>m?(h=1,g=0):(h=0,g=1);let _=p-h+l,v=m-g+l,y=p-1+2*l,b=m-1+2*l,x=s&255,S=c&255,C=this.perm[x+this.perm[S]]%12,w=this.perm[x+h+this.perm[S+g]]%12,T=this.perm[x+1+this.perm[S+1]]%12,E=.5-p*p-m*m;E<0?n=0:(E*=E,n=E*E*this._dot(this.grad3[C],p,m));let D=.5-_*_-v*v;D<0?r=0:(D*=D,r=D*D*this._dot(this.grad3[w],_,v));let O=.5-y*y-b*b;return O<0?i=0:(O*=O,i=O*O*this._dot(this.grad3[T],y,b)),70*(n+r+i)}noise3d(e,t,n){let r,i,a,o,s=(e+t+n)*(1/3),c=Math.floor(e+s),l=Math.floor(t+s),u=Math.floor(n+s),d=1/6,f=(c+l+u)*d,p=c-f,m=l-f,h=u-f,g=e-p,_=t-m,v=n-h,y,b,x,S,C,w;g>=_?_>=v?(y=1,b=0,x=0,S=1,C=1,w=0):g>=v?(y=1,b=0,x=0,S=1,C=0,w=1):(y=0,b=0,x=1,S=1,C=0,w=1):_<v?(y=0,b=0,x=1,S=0,C=1,w=1):g<v?(y=0,b=1,x=0,S=0,C=1,w=1):(y=0,b=1,x=0,S=1,C=1,w=0);let T=g-y+d,E=_-b+d,D=v-x+d,O=g-S+2*d,k=_-C+2*d,A=v-w+2*d,j=g-1+3*d,M=_-1+3*d,ee=v-1+3*d,N=c&255,te=l&255,ne=u&255,re=this.perm[N+this.perm[te+this.perm[ne]]]%12,ie=this.perm[N+y+this.perm[te+b+this.perm[ne+x]]]%12,ae=this.perm[N+S+this.perm[te+C+this.perm[ne+w]]]%12,oe=this.perm[N+1+this.perm[te+1+this.perm[ne+1]]]%12,se=.6-g*g-_*_-v*v;se<0?r=0:(se*=se,r=se*se*this._dot3(this.grad3[re],g,_,v));let ce=.6-T*T-E*E-D*D;ce<0?i=0:(ce*=ce,i=ce*ce*this._dot3(this.grad3[ie],T,E,D));let le=.6-O*O-k*k-A*A;le<0?a=0:(le*=le,a=le*le*this._dot3(this.grad3[ae],O,k,A));let P=.6-j*j-M*M-ee*ee;return P<0?o=0:(P*=P,o=P*P*this._dot3(this.grad3[oe],j,M,ee)),32*(r+i+a+o)}noise4d(e,t,n,r){let i=this.grad4,a=this.simplex,o=this.perm,s=(Math.sqrt(5)-1)/4,c=(5-Math.sqrt(5))/20,l,u,d,f,p,m=(e+t+n+r)*s,h=Math.floor(e+m),g=Math.floor(t+m),_=Math.floor(n+m),v=Math.floor(r+m),y=(h+g+_+v)*c,b=h-y,x=g-y,S=_-y,C=v-y,w=e-b,T=t-x,E=n-S,D=r-C,O=w>T?32:0,k=w>E?16:0,A=T>E?8:0,j=w>D?4:0,M=T>D?2:0,ee=+(E>D),N=O+k+A+j+M+ee,te=+(a[N][0]>=3),ne=+(a[N][1]>=3),re=+(a[N][2]>=3),ie=+(a[N][3]>=3),ae=+(a[N][0]>=2),oe=+(a[N][1]>=2),se=+(a[N][2]>=2),ce=+(a[N][3]>=2),le=+(a[N][0]>=1),P=+(a[N][1]>=1),ue=+(a[N][2]>=1),de=+(a[N][3]>=1),fe=w-te+c,pe=T-ne+c,me=E-re+c,he=D-ie+c,ge=w-ae+2*c,_e=T-oe+2*c,ve=E-se+2*c,ye=D-ce+2*c,be=w-le+3*c,xe=T-P+3*c,Se=E-ue+3*c,Ce=D-de+3*c,we=w-1+4*c,Te=T-1+4*c,F=E-1+4*c,Ee=D-1+4*c,De=h&255,Oe=g&255,ke=_&255,Ae=v&255,je=o[De+o[Oe+o[ke+o[Ae]]]]%32,Me=o[De+te+o[Oe+ne+o[ke+re+o[Ae+ie]]]]%32,Ne=o[De+ae+o[Oe+oe+o[ke+se+o[Ae+ce]]]]%32,I=o[De+le+o[Oe+P+o[ke+ue+o[Ae+de]]]]%32,Pe=o[De+1+o[Oe+1+o[ke+1+o[Ae+1]]]]%32,Fe=.6-w*w-T*T-E*E-D*D;Fe<0?l=0:(Fe*=Fe,l=Fe*Fe*this._dot4(i[je],w,T,E,D));let Ie=.6-fe*fe-pe*pe-me*me-he*he;Ie<0?u=0:(Ie*=Ie,u=Ie*Ie*this._dot4(i[Me],fe,pe,me,he));let Le=.6-ge*ge-_e*_e-ve*ve-ye*ye;Le<0?d=0:(Le*=Le,d=Le*Le*this._dot4(i[Ne],ge,_e,ve,ye));let Re=.6-be*be-xe*xe-Se*Se-Ce*Ce;Re<0?f=0:(Re*=Re,f=Re*Re*this._dot4(i[I],be,xe,Se,Ce));let ze=.6-we*we-Te*Te-F*F-Ee*Ee;return ze<0?p=0:(ze*=ze,p=ze*ze*this._dot4(i[Pe],we,Te,F,Ee)),27*(l+u+d+f+p)}_dot(e,t,n){return e[0]*t+e[1]*n}_dot3(e,t,n,r){return e[0]*t+e[1]*n+e[2]*r}_dot4(e,t,n,r,i){return e[0]*t+e[1]*n+e[2]*r+e[3]*i}},go=class e extends Za{constructor(e,t,n=512,r=512,i,a,o){super(),this.width=n,this.height=r,this.clear=!0,this.camera=t,this.scene=e,this.output=0,this._renderGBuffer=!0,this._visibilityCache=[],this.blendIntensity=1,this.pdRings=2,this.pdRadiusExponent=2,this.pdSamples=16,this.gtaoNoiseTexture=lo(),this.pdNoiseTexture=this._generateNoise(),this.gtaoRenderTarget=new Et(this.width,this.height,{type:Ie}),this.pdRenderTarget=this.gtaoRenderTarget.clone(),this.gtaoMaterial=new vt({defines:Object.assign({},oo.defines),uniforms:Pe.clone(oo.uniforms),vertexShader:oo.vertexShader,fragmentShader:oo.fragmentShader,blending:0,depthTest:!1,depthWrite:!1}),this.gtaoMaterial.defines.PERSPECTIVE_CAMERA=+!!this.camera.isPerspectiveCamera,this.gtaoMaterial.uniforms.tNoise.value=this.gtaoNoiseTexture,this.gtaoMaterial.uniforms.resolution.value.set(this.width,this.height),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.normalMaterial=new kt,this.normalMaterial.blending=0,this.pdMaterial=new vt({defines:Object.assign({},fo.defines),uniforms:Pe.clone(fo.uniforms),vertexShader:fo.vertexShader,fragmentShader:fo.fragmentShader,depthTest:!1,depthWrite:!1}),this.pdMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.pdMaterial.uniforms.tNoise.value=this.pdNoiseTexture,this.pdMaterial.uniforms.resolution.value.set(this.width,this.height),this.pdMaterial.uniforms.lumaPhi.value=10,this.pdMaterial.uniforms.depthPhi.value=2,this.pdMaterial.uniforms.normalPhi.value=3,this.pdMaterial.uniforms.radius.value=8,this.depthRenderMaterial=new vt({defines:Object.assign({},so.defines),uniforms:Pe.clone(so.uniforms),vertexShader:so.vertexShader,fragmentShader:so.fragmentShader,blending:0}),this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.copyMaterial=new vt({uniforms:Pe.clone(Xa.uniforms),vertexShader:Xa.vertexShader,fragmentShader:Xa.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blendSrc:208,blendDst:200,blendEquation:100,blendSrcAlpha:206,blendDstAlpha:200,blendEquationAlpha:100}),this.blendMaterial=new vt({uniforms:Pe.clone(co.uniforms),vertexShader:co.vertexShader,fragmentShader:co.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blending:5,blendSrc:208,blendDst:200,blendEquation:100,blendSrcAlpha:206,blendDstAlpha:200,blendEquationAlpha:100}),this._fsQuad=new eo(null),this._originalClearColor=new F,this.setGBuffer(i?i.depthTexture:void 0,i?i.normalTexture:void 0),a!==void 0&&this.updateGtaoMaterial(a),o!==void 0&&this.updatePdMaterial(o)}setSize(e,t){this.width=e,this.height=t,this.gtaoRenderTarget.setSize(e,t),this.normalRenderTarget.setSize(e,t),this.pdRenderTarget.setSize(e,t),this.gtaoMaterial.uniforms.resolution.value.set(e,t),this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.pdMaterial.uniforms.resolution.value.set(e,t),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse)}dispose(){this.gtaoNoiseTexture.dispose(),this.pdNoiseTexture.dispose(),this.normalRenderTarget.dispose(),this.gtaoRenderTarget.dispose(),this.pdRenderTarget.dispose(),this.normalMaterial.dispose(),this.pdMaterial.dispose(),this.copyMaterial.dispose(),this.depthRenderMaterial.dispose(),this._fsQuad.dispose()}get gtaoMap(){return this.pdRenderTarget.texture}setGBuffer(e,t){e===void 0?(this.depthTexture=new Ae,this.depthTexture.format=We,this.depthTexture.type=Ne,this.normalRenderTarget=new Et(this.width,this.height,{minFilter:Pt,magFilter:Pt,type:Ie,depthTexture:this.depthTexture}),this.normalTexture=this.normalRenderTarget.texture,this._renderGBuffer=!0):(this.depthTexture=e,this.normalTexture=t,this._renderGBuffer=!1);let n=+!!this.normalTexture,r=this.depthTexture===this.normalTexture?`w`:`x`;this.gtaoMaterial.defines.NORMAL_VECTOR_TYPE=n,this.gtaoMaterial.defines.DEPTH_SWIZZLING=r,this.gtaoMaterial.uniforms.tNormal.value=this.normalTexture,this.gtaoMaterial.uniforms.tDepth.value=this.depthTexture,this.pdMaterial.defines.NORMAL_VECTOR_TYPE=n,this.pdMaterial.defines.DEPTH_SWIZZLING=r,this.pdMaterial.uniforms.tNormal.value=this.normalTexture,this.pdMaterial.uniforms.tDepth.value=this.depthTexture,this.depthRenderMaterial.uniforms.tDepth.value=this.normalRenderTarget.depthTexture}setSceneClipBox(e){e?(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX!==1,this.gtaoMaterial.defines.SCENE_CLIP_BOX=1,this.gtaoMaterial.uniforms.sceneBoxMin.value.copy(e.min),this.gtaoMaterial.uniforms.sceneBoxMax.value.copy(e.max)):(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX===0,this.gtaoMaterial.defines.SCENE_CLIP_BOX=0)}updateGtaoMaterial(e){e.radius!==void 0&&(this.gtaoMaterial.uniforms.radius.value=e.radius),e.distanceExponent!==void 0&&(this.gtaoMaterial.uniforms.distanceExponent.value=e.distanceExponent),e.thickness!==void 0&&(this.gtaoMaterial.uniforms.thickness.value=e.thickness),e.distanceFallOff!==void 0&&(this.gtaoMaterial.uniforms.distanceFallOff.value=e.distanceFallOff,this.gtaoMaterial.needsUpdate=!0),e.scale!==void 0&&(this.gtaoMaterial.uniforms.scale.value=e.scale),e.samples!==void 0&&e.samples!==this.gtaoMaterial.defines.SAMPLES&&(this.gtaoMaterial.defines.SAMPLES=e.samples,this.gtaoMaterial.needsUpdate=!0),e.screenSpaceRadius!==void 0&&+!!e.screenSpaceRadius!==this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS&&(this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS=+!!e.screenSpaceRadius,this.gtaoMaterial.needsUpdate=!0)}updatePdMaterial(e){let t=!1;e.lumaPhi!==void 0&&(this.pdMaterial.uniforms.lumaPhi.value=e.lumaPhi),e.depthPhi!==void 0&&(this.pdMaterial.uniforms.depthPhi.value=e.depthPhi),e.normalPhi!==void 0&&(this.pdMaterial.uniforms.normalPhi.value=e.normalPhi),e.radius!==void 0&&e.radius!==this.radius&&(this.pdMaterial.uniforms.radius.value=e.radius),e.radiusExponent!==void 0&&e.radiusExponent!==this.pdRadiusExponent&&(this.pdRadiusExponent=e.radiusExponent,t=!0),e.rings!==void 0&&e.rings!==this.pdRings&&(this.pdRings=e.rings,t=!0),e.samples!==void 0&&e.samples!==this.pdSamples&&(this.pdSamples=e.samples,t=!0),t&&(this.pdMaterial.defines.SAMPLES=this.pdSamples,this.pdMaterial.defines.SAMPLE_VECTORS=po(this.pdSamples,this.pdRings,this.pdRadiusExponent),this.pdMaterial.needsUpdate=!0)}render(t,n,r){switch(this._renderGBuffer&&(this._overrideVisibility(),this._renderOverride(t,this.normalMaterial,this.normalRenderTarget,7829503,1),this._restoreVisibility()),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.gtaoMaterial.uniforms.cameraWorldMatrix.value.copy(this.camera.matrixWorld),this._renderPass(t,this.gtaoMaterial,this.gtaoRenderTarget,16777215,1),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this._renderPass(t,this.pdMaterial,this.pdRenderTarget,16777215,1),this.output){case e.OUTPUT.Off:break;case e.OUTPUT.Diffuse:this.copyMaterial.uniforms.tDiffuse.value=r.texture,this.copyMaterial.blending=0,this._renderPass(t,this.copyMaterial,this.renderToScreen?null:n);break;case e.OUTPUT.AO:this.copyMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.copyMaterial.blending=0,this._renderPass(t,this.copyMaterial,this.renderToScreen?null:n);break;case e.OUTPUT.Denoise:this.copyMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this.copyMaterial.blending=0,this._renderPass(t,this.copyMaterial,this.renderToScreen?null:n);break;case e.OUTPUT.Depth:this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this._renderPass(t,this.depthRenderMaterial,this.renderToScreen?null:n);break;case e.OUTPUT.Normal:this.copyMaterial.uniforms.tDiffuse.value=this.normalRenderTarget.texture,this.copyMaterial.blending=0,this._renderPass(t,this.copyMaterial,this.renderToScreen?null:n);break;case e.OUTPUT.Default:this.copyMaterial.uniforms.tDiffuse.value=r.texture,this.copyMaterial.blending=0,this._renderPass(t,this.copyMaterial,this.renderToScreen?null:n),this.blendMaterial.uniforms.intensity.value=this.blendIntensity,this.blendMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this._renderPass(t,this.blendMaterial,this.renderToScreen?null:n);break;default:console.warn(`THREE.GTAOPass: Unknown output type.`)}}_renderPass(e,t,n,r,i){e.getClearColor(this._originalClearColor);let a=e.getClearAlpha(),o=e.autoClear;e.setRenderTarget(n),e.autoClear=!1,r!=null&&(e.setClearColor(r),e.setClearAlpha(i||0),e.clear()),this._fsQuad.material=t,this._fsQuad.render(e),e.autoClear=o,e.setClearColor(this._originalClearColor),e.setClearAlpha(a)}_renderOverride(e,t,n,r,i){e.getClearColor(this._originalClearColor);let a=e.getClearAlpha(),o=e.autoClear;e.setRenderTarget(n),e.autoClear=!1,r=t.clearColor||r,i=t.clearAlpha||i,r!=null&&(e.setClearColor(r),e.setClearAlpha(i||0),e.clear()),this.scene.overrideMaterial=t,e.render(this.scene,this.camera),this.scene.overrideMaterial=null,e.autoClear=o,e.setClearColor(this._originalClearColor),e.setClearAlpha(a)}_overrideVisibility(){let e=this.scene,t=this._visibilityCache;e.traverse(function(e){(e.isPoints||e.isLine||e.isLine2)&&e.visible&&(e.visible=!1,t.push(e))})}_restoreVisibility(){let e=this._visibilityCache;for(let t=0;t<e.length;t++)e[t].visible=!0;e.length=0}_generateNoise(e=64){let t=new ho,n=e*e*4,r=new Uint8Array(n);for(let n=0;n<e;n++)for(let i=0;i<e;i++){let a=n,o=i;r[(n*e+i)*4]=(t.noise(a,o)*.5+.5)*255,r[(n*e+i)*4+1]=(t.noise(a+e,o)*.5+.5)*255,r[(n*e+i)*4+2]=(t.noise(a,o+e)*.5+.5)*255,r[(n*e+i)*4+3]=(t.noise(a+e,o+e)*.5+.5)*255}let i=new Be(r,e,e,ze,$e);return i.wrapS=Ft,i.wrapT=Ft,i.needsUpdate=!0,i}};go.OUTPUT={Off:-1,Default:0,Diffuse:1,Depth:2,Normal:3,AO:4,Denoise:5};var _o={name:`OutputShader`,uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`},vo=class extends Za{constructor(){super(),this.isOutputPass=!0,this.uniforms=Pe.clone(_o.uniforms),this.material=new mt({name:_o.name,uniforms:this.uniforms,vertexShader:_o.vertexShader,fragmentShader:_o.fragmentShader}),this._fsQuad=new eo(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},At.getTransfer(this._outputColorSpace)===`srgb`&&(this.material.defines.SRGB_TRANSFER=``),this._toneMapping===1?this.material.defines.LINEAR_TONE_MAPPING=``:this._toneMapping===2?this.material.defines.REINHARD_TONE_MAPPING=``:this._toneMapping===3?this.material.defines.CINEON_TONE_MAPPING=``:this._toneMapping===4?this.material.defines.ACES_FILMIC_TONE_MAPPING=``:this._toneMapping===6?this.material.defines.AGX_TONE_MAPPING=``:this._toneMapping===7?this.material.defines.NEUTRAL_TONE_MAPPING=``:this._toneMapping===5&&(this.material.defines.CUSTOM_TONE_MAPPING=``),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}},yo={name:`FXAAShader`,uniforms:{tDiffuse:{value:null},resolution:{value:new R(1/1024,1/512)}},vertexShader:`

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

		}`},bo={name:`LuminosityHighPassShader`,uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new F(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`},xo=class e extends Za{constructor(e,t=1,n,r){super(),this.strength=t,this.radius=n,this.threshold=r,this.resolution=e===void 0?new R(256,256):new R(e.x,e.y),this.clearColor=new F(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let i=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new Et(i,a,{type:Ie}),this.renderTargetBright.texture.name=`UnrealBloomPass.bright`,this.renderTargetBright.texture.generateMipmaps=!1;for(let e=0;e<this.nMips;e++){let t=new Et(i,a,{type:Ie});t.texture.name=`UnrealBloomPass.h`+e,t.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(t);let n=new Et(i,a,{type:Ie});n.texture.name=`UnrealBloomPass.v`+e,n.texture.generateMipmaps=!1,this.renderTargetsVertical.push(n),i=Math.round(i/2),a=Math.round(a/2)}let o=bo;this.highPassUniforms=Pe.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=r,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new vt({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];let s=[6,10,14,18,22];i=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let e=0;e<this.nMips;e++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(s[e])),this.separableBlurMaterials[e].uniforms.invSize.value=new R(1/i,1/a),i=Math.round(i/2),a=Math.round(a/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new L(1,1,1),new L(1,1,1),new L(1,1,1),new L(1,1,1),new L(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=Pe.clone(Xa.uniforms),this.blendMaterial=new vt({uniforms:this.copyUniforms,vertexShader:Xa.vertexShader,fragmentShader:Xa.fragmentShader,premultipliedAlpha:!0,blending:2,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new F,this._oldClearAlpha=1,this._basic=new B,this._fsQuad=new eo(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),r=Math.round(t/2);this.renderTargetBright.setSize(n,r);for(let e=0;e<this.nMips;e++)this.renderTargetsHorizontal[e].setSize(n,r),this.renderTargetsVertical[e].setSize(n,r),this.separableBlurMaterials[e].uniforms.invSize.value=new R(1/n,1/r),n=Math.round(n/2),r=Math.round(r/2)}render(t,n,r,i,a){t.getClearColor(this._oldClearColor),this._oldClearAlpha=t.getClearAlpha();let o=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),a&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=r.texture,t.setRenderTarget(null),t.clear(),this._fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=r.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this._fsQuad.render(t);let s=this.renderTargetBright;for(let n=0;n<this.nMips;n++)this._fsQuad.material=this.separableBlurMaterials[n],this.separableBlurMaterials[n].uniforms.colorTexture.value=s.texture,this.separableBlurMaterials[n].uniforms.direction.value=e.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[n]),t.clear(),this._fsQuad.render(t),this.separableBlurMaterials[n].uniforms.colorTexture.value=this.renderTargetsHorizontal[n].texture,this.separableBlurMaterials[n].uniforms.direction.value=e.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[n]),t.clear(),this._fsQuad.render(t),s=this.renderTargetsVertical[n];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this._fsQuad.render(t),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,a&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(r),this._fsQuad.render(t)),t.setClearColor(this._oldClearColor,this._oldClearAlpha),t.autoClear=o}_getSeparableBlurMaterial(e){let t=[],n=e/3;for(let r=0;r<e;r++)t.push(.39894*Math.exp(-.5*r*r/(n*n))/n);return new vt({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new R(.5,.5)},direction:{value:new R(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`

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

				}`})}_getCompositeMaterial(e){return new vt({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

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

				}`})}};xo.BlurDirectionX=new R(1,0),xo.BlurDirectionY=new R(0,1);var So={watercolor:{name:`水彩`,paper:`#fffaf0`,ink:`#4a3326`,paint:3,shade:.84,exposure:1.06,saturation:1.12,contrast:.92,warmth:.35,levels:0,bleed:.6,edge:.18,grain:.13,fine:.03,wash:.14,granulate:.22,hatch:0,wobble:.8,vignette:.06,stripes:!1,lines:[.08,.35]},pencil:{name:`色えんぴつ`,paper:`#fffcf4`,ink:`#3d3530`,paint:0,shade:.85,exposure:1.06,saturation:1,contrast:.92,warmth:.25,levels:0,bleed:.1,edge:.45,grain:.12,fine:.04,wash:0,granulate:0,hatch:.24,wobble:0,vignette:.05,stripes:!1,lines:[.1,.38]},pencil1:{name:`色えんぴつ（直す前）`,paper:`#fffcf4`,ink:`#3d3530`,paint:2,shade:.82,exposure:1.08,saturation:.95,contrast:.9,warmth:.25,levels:0,bleed:.1,edge:.5,grain:.16,fine:.08,wash:.03,granulate:0,hatch:.34,wobble:.5,vignette:.05,stripes:!0,lines:[.08,.35]},gouache:{name:`絵の具`,paper:`#fff8ec`,ink:`#2e2420`,paint:3.5,shade:.86,exposure:1.04,saturation:1.2,contrast:1,warmth:.3,levels:7,bleed:.2,edge:.45,grain:.08,fine:.02,wash:.05,granulate:.06,hatch:0,wobble:.4,vignette:.05,stripes:!1,lines:[.08,.35]}},Co=e=>new F(e);function wo(e){let t=e=>{let t=Co(e);return new L(t.r,t.g,t.b)};return{tDiffuse:{value:null},resolution:{value:new R(1/1024,1/512)},paper:{value:t(e.paper)},ink:{value:t(e.ink)},paint:{value:e.paint},shade:{value:e.shade},exposure:{value:e.exposure},saturation:{value:e.saturation},contrast:{value:e.contrast},warmth:{value:e.warmth},levels:{value:e.levels},bleed:{value:e.bleed},edge:{value:e.edge},grain:{value:e.grain},fine:{value:e.fine},wash:{value:e.wash},granulate:{value:e.granulate},hatch:{value:e.hatch},stripes:{value:+!!e.stripes},lines:{value:new R(...e.lines)},wobble:{value:e.wobble},vignette:{value:e.vignette},tMask:{value:null},maskOn:{value:0}}}var To={name:`PictureBookShader`,uniforms:wo(So.watercolor),vertexShader:`varying vec2 vUv;
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
}`},Eo=class extends go{setSize(e,t){let n=Math.min(.5,960/e);super.setSize(Math.max(1,Math.round(e*n)),Math.max(1,Math.round(t*n)))}render(e,t,n,r,i){this.setGBuffer(n.depthTexture,void 0),this.depthRenderMaterial.uniforms.tDepth.value=n.depthTexture,super.render(e,t,n,r,i)}},Do={name:`SharpenShader`,uniforms:{tDiffuse:{value:null},resolution:{value:new R(1/1024,1/512)},sharpness:{value:{sharpness:.5}.sharpness}},vertexShader:`varying vec2 vUv;
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
}`};function Oo(e,t,n){let r=new Eo(e,t,16,16);return r.blendIntensity=1,r.updateGtaoMaterial({radius:1.15,thickness:1,distanceExponent:1.5,distanceFallOff:1,scale:1.4,samples:n?4:8,screenSpaceRadius:!1}),r.updatePdMaterial({samples:n?4:8,rings:2,radius:4,depthPhi:1,normalPhi:3}),r}function ko(){let e=new xo(new R(16,16),.2,.45,1.25);return e.materialHighPassFilter.fragmentShader=e.materialHighPassFilter.fragmentShader.replace(`vec4 texel = texture2D( tDiffuse, vUv );`,`vec4 texel = texture2D( tDiffuse, vUv );
     texel.rgb=vec3(texel.r>=0.0?min(texel.r,16.0):0.0,
                    texel.g>=0.0?min(texel.g,16.0):0.0,
                    texel.b>=0.0?min(texel.b,16.0):0.0);`),e}function Ao(e){let t=e;return t.isMesh?[t.material].flat().some(e=>!e.transparent&&!e.isShaderMaterial):!1}var jo=e=>e.isMesh&&(/Line/.test(e.name)||[e.material].flat().some(e=>/Line/.test(e.name))),Mo=e=>!!(e.isMesh||e.isLine||e.isPoints||e.isSprite),No=class{renderer;scene;camera;mobile;composer;ao;bloom;sharpen;book;bookStyle=`off`;maskRoots=()=>[];mask;maskScene=Object.assign(new Ue,{overrideMaterial:new B({color:16777215,name:`Fighter mask`})});antialias;render3d;output=new vo;constructor(e,t,n,r=!1,i={}){this.renderer=e,this.scene=t,this.camera=n,this.mobile=r;let a=i.ambientOcclusion!==!1,o=i.bloom!==!1;this.composer=new io(e);for(let e of[this.composer.renderTarget1,this.composer.renderTarget2])e.depthTexture=new Ae(1,1,wt);this.antialias=new to(yo),this.render3d=new ao(t,n),this.composer.addPass(this.render3d),a&&(this.ao=Oo(t,n,r),this.composer.addPass(this.ao)),o&&(this.bloom=ko(),this.composer.addPass(this.bloom)),this.composer.addPass(this.output),this.composer.addPass(this.antialias),e.info.autoReset=!1}setAmbientOcclusion(e){e&&!this.ao&&(this.ao=Oo(this.scene,this.camera,this.mobile),this.composer.insertPass(this.ao,this.composer.passes.indexOf(this.render3d)+1),this.sizePasses()),this.ao&&(this.ao.enabled=e)}setBloom(e){e!==!!this.bloom&&(e?(this.bloom=ko(),this.composer.insertPass(this.bloom,this.composer.passes.indexOf(this.output)),this.sizePasses()):this.bloom&&=(this.composer.removePass(this.bloom),this.bloom.dispose(),void 0))}setSharpen(e){e!==!!this.sharpen&&(e?(this.sharpen=new to(Do),this.book?this.composer.insertPass(this.sharpen,this.composer.passes.indexOf(this.book)):this.composer.addPass(this.sharpen),this.sizePasses()):this.sharpen&&=(this.composer.removePass(this.sharpen),this.sharpen.dispose(),void 0))}setBook(e){if(this.bookStyle=e,e===`off`){this.book&&=(this.composer.removePass(this.book),this.book.dispose(),void 0),this.mask?.dispose(),this.mask=void 0;return}if(!this.book)this.book=new to({...To,uniforms:wo(So[e])}),this.composer.addPass(this.book);else for(let[t,n]of Object.entries(wo(So[e])))[`tDiffuse`,`resolution`,`tMask`,`maskOn`].includes(t)||(this.book.uniforms[t].value=n.value);this.sizePasses()}setAntialias(e){this.antialias.enabled=e}width=1;height=1;resize(e,t){this.width=e,this.height=t,this.composer.setSize(e,t),this.sizePasses()}sizePasses(){let e=this.renderer.getPixelRatio(),t=1/(this.width*e),n=1/(this.height*e);this.antialias.uniforms.resolution.value.set(t,n),this.sharpen?.uniforms.resolution.value.set(t,n),this.book?.uniforms.resolution.value.set(t,n)}render(e){this.renderer.info.reset(),this.renderMask(),this.composer.render(e)}renderMask(){let e=this.book;if(!e)return;let t=this.maskRoots().filter(e=>e.visible&&e.parent);if(!t.length){e.uniforms.maskOn.value=0;return}let n=this.renderer.getPixelRatio(),r=Math.max(1,Math.floor(this.width*n)),i=Math.max(1,Math.floor(this.height*n));this.mask?(this.mask.width!==r||this.mask.height!==i)&&this.mask.setSize(r,i):this.mask=new Et(r,i,{depthBuffer:!1,stencilBuffer:!1});let a=[],o=[];for(let e of t){let t=!1;e.traverse(e=>{e.visible&&jo(e)&&Ao(e)&&(t=!0)}),e.traverse(e=>{Mo(e)&&(!Ao(e)||t&&!jo(e))&&(a.push(e),o.push(e.layers.mask),e.layers.mask=0)})}let s=t.map(e=>e.parent),c=this.renderer.getRenderTarget(),l=this.renderer.getClearColor(new F),u=this.renderer.getClearAlpha();for(let e of t)this.maskScene.add(e);try{this.renderer.setRenderTarget(this.mask),this.renderer.setClearColor(0,0),this.renderer.clear(!0,!1,!1),this.renderer.render(this.maskScene,this.camera)}finally{t.forEach((e,t)=>s[t].add(e)),a.forEach((e,t)=>{e.layers.mask=o[t]}),this.renderer.setRenderTarget(c),this.renderer.setClearColor(l,u)}e.uniforms.tMask.value=this.mask.texture,e.uniforms.maskOn.value=1}warmMask(){if(!this.book)return;let e=[];for(let t of this.maskRoots())t.traverse(t=>{e.push(t)});let t=e.map(e=>e.visible),n=e.map(e=>e.frustumCulled);e.forEach(e=>{e.visible=!0,e.frustumCulled=!1});try{this.renderMask()}finally{e.forEach((e,r)=>{e.visible=t[r],e.frustumCulled=n[r]})}}},Po={colosseum:{pc:{pixelRatio:1.5,shadow:`every`,ambientOcclusion:!1,bloom:!1,lampLights:!0,movingShadows:!1,mapLight:!1,mapPointLights:!1,cullBuildings:!1,skyCube:0,bakeMapLight:!1,shadowSamples:5,fighterLight:!1,fighterKeepMetal:!1,fadeWhenNeeded:!1,sharpen:!1,antialias:!0},mobile:{pixelRatio:1.275,shadow:`once`,ambientOcclusion:!1,bloom:!1,lampLights:!0,movingShadows:!1,mapLight:!0,mapPointLights:!0,cullBuildings:!1,skyCube:512,bakeMapLight:!0,shadowSamples:1,fighterLight:!0,fighterKeepMetal:!0,fadeWhenNeeded:!0,sharpen:!0,antialias:!0}},royal:{pc:{pixelRatio:1.5,shadow:`every`,ambientOcclusion:!0,bloom:!0,lampLights:!0,movingShadows:!0,mapLight:!1,mapPointLights:!1,cullBuildings:!1,skyCube:0,bakeMapLight:!1,shadowSamples:5,fighterLight:!1,fighterKeepMetal:!1,fadeWhenNeeded:!1,sharpen:!1,antialias:!0},mobile:{pixelRatio:1.275,shadow:`once`,ambientOcclusion:!1,bloom:!1,lampLights:!1,movingShadows:!1,mapLight:!0,mapPointLights:!1,cullBuildings:!0,skyCube:512,bakeMapLight:!0,shadowSamples:1,fighterLight:!0,fighterKeepMetal:!0,fadeWhenNeeded:!0,sharpen:!0,antialias:!0},mobileBefore:{pixelRatio:1.275,shadow:`hz30`,ambientOcclusion:!0,bloom:!0,lampLights:!0,movingShadows:!0,mapLight:!1,mapPointLights:!1,cullBuildings:!1,skyCube:0,bakeMapLight:!1,shadowSamples:5,fighterLight:!1,fighterKeepMetal:!1,fadeWhenNeeded:!1,sharpen:!1,antialias:!0}},school:{pc:{pixelRatio:1.5,shadow:`every`,ambientOcclusion:!0,bloom:!1,lampLights:!0,movingShadows:!0,mapLight:!1,mapPointLights:!1,cullBuildings:!1,skyCube:0,bakeMapLight:!1,shadowSamples:5,fighterLight:!1,fighterKeepMetal:!1,fadeWhenNeeded:!1,sharpen:!1,antialias:!0},mobile:{pixelRatio:1.275,shadow:`once`,ambientOcclusion:!1,bloom:!1,lampLights:!1,movingShadows:!1,mapLight:!0,mapPointLights:!1,cullBuildings:!1,skyCube:512,bakeMapLight:!0,shadowSamples:1,fighterLight:!0,fighterKeepMetal:!0,fadeWhenNeeded:!0,sharpen:!0,antialias:!0}}};function Fo(e,t){return Po[e][t?`mobile`:`pc`]}function Io(e,t){return t?Po[e].mobileBefore:void 0}var Lo={environment:1.25,sun:1.25,probe:[3.8135,1.763,1.6363,.279,.2171,1.0862,1.2137,-.3469,-.6344],pixelPoints:[`05_Mortar_and_recesses`,`03_Pale_arch_and_coping`]},Ro={mapLightProbe:{value:Lo.probe.map(e=>new L(e,e,e))},mapLightSun:{value:Lo.sun}};function zo(e){return e.isMeshStandardMaterial===!0&&!e.transparent}function Bo(e,t,n){Object.assign(e.uniforms,Ro,t);let r=[n.points===`vertex`?`MAP_LIGHT_POINTS`:``,n.shadowOnce?`MAP_LIGHT_SHADOW_ONCE`:``,n.metalMap?`MAP_LIGHT_METAL_MAP`:``,n.sheen?`MAP_LIGHT_SHEEN`:``,n.baked?`MAP_LIGHT_BAKED\n#define MAP_LIGHT_BAKED_TEXELS ${n.baked.texels}`:``].filter(Boolean).map(e=>`#define ${e}\n`).join(``);e.vertexShader=r+e.vertexShader.replace(`#include <common>`,`#include <common>
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
	#endif`).replace(`#include <lights_fragment_maps>`,``).replace(`#include <lights_fragment_end>`,``).replace(`#include <envmap_fragment>`,``)}var Vo=e=>`map-light-v3:${e.points}:${e.shadowOnce?1:5}:${e.metalMap?`metal-map`:`metal`}:${e.sheen?`sheen`:``}:${e.baked?`baked${e.baked.texels}`:``}`,Ho=(e,t)=>Lo.environment*(e.envMap?e.envMapIntensity:t);function Uo(e,t,n,r){let i=new ot({name:e.name,color:e.color,map:e.map,vertexColors:e.vertexColors,emissive:e.emissive,emissiveIntensity:e.emissiveIntensity,emissiveMap:e.emissiveMap,alphaMap:e.alphaMap,alphaTest:e.alphaTest,side:e.side,fog:e.fog,flatShading:e.flatShading,depthWrite:e.depthWrite,depthTest:e.depthTest}),a={mapLightEnvironment:{value:Ho(e,t)},mapLightMetal:{value:e.metalness},...r?{mapLightBaked:{value:r.texture},mapLightBakedWidth:{value:r.width},mapLightBakedVertices:{value:r.vertices}}:{}},o={...n,metalMap:!1,...r?{baked:{texels:r.texels}}:{}};return i.onBeforeCompile=e=>Bo(e,a,o),i.customProgramCacheKey=()=>Vo(o),i.userData.mapLight=!0,r&&(i.userData.baked=!0),i.userData.environment=a.mapLightEnvironment,i.userData.sun=Ro.mapLightSun,i}function Wo(e,t,n){let r=new ot({name:e.name,map:e.map,vertexColors:e.vertexColors,emissiveMap:e.emissiveMap,alphaMap:e.alphaMap,alphaTest:e.alphaTest,side:e.side,fog:e.fog,flatShading:e.flatShading,transparent:e.transparent,opacity:e.opacity,alphaHash:e.alphaHash,depthWrite:e.depthWrite,depthTest:e.depthTest});r.color=e.color,r.emissive=e.emissive,Object.defineProperty(r,"emissiveIntensity",{configurable:!0,get:()=>e.emissiveIntensity,set:t=>{e.emissiveIntensity=t}});let i=!!(e.map&&e.metalnessMap),a={mapLightEnvironment:{value:Go.environment*(e.envMap?e.envMapIntensity:t)},mapLightMetal:{value:e.metalness},...i?{mapLightMetalMap:{value:e.metalnessMap}}:{},mapLightSun:Ko.sun,mapLightSheen:Ko.sheen},o={...n,metalMap:i,sheen:!0};return r.onBeforeCompile=e=>Bo(e,a,o),r.customProgramCacheKey=()=>Vo(o),r.userData.fighterLight=!0,r.userData.source=e,r.userData.environment=a.mapLightEnvironment,r.userData.sun=Ko.sun,r.userData.sheen=Ko.sheen,r}var Go={keepRoles:[`paladin`],keepMetalness:.5,environment:.95,sun:.85,sheen:.03},Ko={sun:{value:Go.sun},sheen:{value:Go.sheen}};function qo(e,t){return Go.keepRoles.includes(t)||e.metalness>=Go.keepMetalness&&!e.metalnessMap}function Jo(e,t,n){return!n||e.transparent||t<1}function Yo(e,t,n){return t?n&&Lo.pixelPoints.includes(e.name)?`pixel`:`vertex`:`none`}var Xo={width:2048};function Zo(e,t){let n={ambient:new F(0,0,0),hemispheres:[],fills:[],points:[]},r=0;return e.updateMatrixWorld(),e.traverseVisible(e=>{let i=e;if(!i.isLight)return;let a=i.color.clone().multiplyScalar(i.intensity);if(i.isAmbientLight)n.ambient.add(a);else if(i.isHemisphereLight){let e=i;n.hemispheres.push({sky:a,ground:e.groundColor.clone().multiplyScalar(e.intensity),direction:new L().setFromMatrixPosition(e.matrixWorld).normalize()})}else if(i.isDirectionalLight){let e=i,o=new L().setFromMatrixPosition(e.target.matrixWorld),s=new L().setFromMatrixPosition(e.matrixWorld).sub(o).normalize();t&&e.castShadow?(n.sun={color:a,direction:s},r++):n.fills.push({color:a,direction:s})}else if(i.isPointLight){let e=i;n.points.push({color:a,position:new L().setFromMatrixPosition(e.matrixWorld),distance:e.distance,decay:e.decay})}}),r>1?void 0:n}var Qo=Lo.probe;function $o(e,t,n,r,i,a,o,s,c,l){let u=e.ambient.r,d=e.ambient.g,f=e.ambient.b;for(let t of e.hemispheres){let e=.5*(n*t.direction.x+r*t.direction.y+i*t.direction.z)+.5;u+=t.ground.r+(t.sky.r-t.ground.r)*e,d+=t.ground.g+(t.sky.g-t.ground.g)*e,f+=t.ground.b+(t.sky.b-t.ground.b)*e}for(let t of e.fills){let e=Math.min(1,Math.max(0,n*t.direction.x+r*t.direction.y+i*t.direction.z));u+=t.color.r*e,d+=t.color.g*e,f+=t.color.b*e}if(t.points)for(let t of e.points){let e=t.position.x-a,c=t.position.y-o,l=t.position.z-s,p=Math.hypot(e,c,l);if(p===0)continue;let m=1/Math.max(p**+t.decay,.01);if(t.distance>0){let e=Math.min(1,Math.max(0,1-(p/t.distance)**4));m*=e*e}let h=Math.min(1,Math.max(0,(n*e+r*c+i*l)/p))*m;u+=t.color.r*h,d+=t.color.g*h,f+=t.color.b*h}let p=t.environment*(Qo[0]*.886227+Qo[1]*2*.511664*r+Qo[2]*2*.511664*i+Qo[3]*2*.511664*n+Qo[4]*2*.429043*n*r+Qo[5]*2*.429043*r*i+Qo[6]*(.743125*i*i-.247708)+Qo[7]*2*.429043*n*i+Qo[8]*.429043*(n*n-r*r)),m=1-t.metal;c[l]=u*m+p,c[l+1]=d*m+p,c[l+2]=f*m+p,c[l+3]=e.sun?n*e.sun.direction.x+r*e.sun.direction.y+i*e.sun.direction.z:0}function es(e,t,n,r,i=!1,a){let o=e.geometry,s=o.getAttribute(`position`),c=o.getAttribute(`normal`),l=e.isInstancedMesh===!0,u=a??(l?e.instanceMatrix.array:void 0),d=l?a?a.length/16:e.count:1,f=s.count,p=r?2:1,m=new Float32Array(f*d*p*4);e.updateWorldMatrix(!0,!1);let h=new ft,g=new ft,_=new ut,v=h.elements,y=_.elements,b=i?-1:1;for(let i=0;i<d;i++){l?(g.fromArray(u,i*16),h.multiplyMatrices(e.matrixWorld,g)):h.copy(e.matrixWorld),_.getNormalMatrix(h);for(let e=0;e<f;e++){let a=s.getX(e),o=s.getY(e),l=s.getZ(e),u=c.getX(e),d=c.getY(e),h=c.getZ(e),g=v[0]*a+v[4]*o+v[8]*l+v[12],_=v[1]*a+v[5]*o+v[9]*l+v[13],x=v[2]*a+v[6]*o+v[10]*l+v[14],S=y[0]*u+y[3]*d+y[6]*h,C=y[1]*u+y[4]*d+y[7]*h,w=y[2]*u+y[5]*d+y[8]*h,T=Math.hypot(S,C,w)||1;S*=b/T,C*=b/T,w*=b/T;let E=(i*f+e)*p*4;$o(t,n,S,C,w,g,_,x,m,E),r&&$o(t,n,-S,-C,-w,g,_,x,m,E+4)}}return{data:m,texels:p,vertices:f,count:d}}function ts(e,t=Xo.width){let n=e.vertices*e.count*e.texels,r=Math.max(1,Math.ceil(n/t)),i=new Float32Array(t*r*4);return i.set(e.data),{data:i,height:r}}function ns(e,t=Xo.width){let{data:n,height:r}=ts(e,t),i=new Be(n,t,r,ze,Qe);return i.internalFormat=`RGBA16F`,i.minFilter=i.magFilter=Pt,i.generateMipmaps=!1,i.needsUpdate=!0,i.onUpdate=()=>{i.image.data=null},i}var rs={margin:2},is=new Me,as=new ft;function os(e){return is.setFromProjectionMatrix(as.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse))}var ss=class{mesh;total;spheres;original;shown;constructor(e,t=rs.margin){this.mesh=e,this.total=e.count,this.original=e.instanceMatrix.array.slice(0,this.total*16),this.shown=[...Array(this.total).keys()],e.geometry.boundingSphere||e.geometry.computeBoundingSphere();let n=e.geometry.boundingSphere,r=new ft,i=new ft;e.updateWorldMatrix(!0,!1),this.spheres=this.shown.map(a=>{i.multiplyMatrices(e.matrixWorld,r.fromArray(this.original,a*16));let o=n.clone().applyMatrix4(i);return o.radius+=t,o})}pick(e,t){let n=[];for(let r=0;r<this.total;r++)(!t||t(r))&&(!e||e.intersectsSphere(this.spheres[r]))&&n.push(r);return n}show(e){if(e.length===this.shown.length&&e.every((e,t)=>e===this.shown[t]))return!1;let t=this.mesh.instanceMatrix.array;e.forEach((e,n)=>t.set(this.original.subarray(e*16,e*16+16),n*16)),this.mesh.count=e.length,this.mesh.instanceMatrix.clearUpdateRanges(),this.mesh.instanceMatrix.addUpdateRange(0,e.length*16),this.mesh.instanceMatrix.needsUpdate=!0;let n=this.mesh.geometry.getAttribute(`mapLightInstance`);return n&&(e.forEach((e,t)=>{n.array[t]=e}),n.clearUpdateRanges(),n.addUpdateRange(0,e.length),n.needsUpdate=!0),this.shown=[...e],!0}showAll(){return this.show([...Array(this.total).keys()])}get count(){return this.shown.length}},cs={height:2.8,base:`#ffc12e`,top:`#ffffff`,sheets:[-.1,.1],groundWidth:1.2,rise:.22,fade:.45,gain:.8},ls=`
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}`,us=`
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
}`;function ds(e=!1,t=0){let n=cs;return new vt({vertexShader:ls,fragmentShader:us,uniforms:{uBase:{value:new F(n.base)},uTop:{value:new F(n.top)},uTime:{value:0},uSeed:{value:t},uFade:{value:0},uGain:{value:n.gain},uGround:{value:+!!e}},transparent:!0,depthWrite:!1,side:2,blending:2})}function fs(e,t,n){let r=cs,i=new H,a=t%17*1.37;for(let t of r.sheets){let n=new V(new yt(e,r.height).translate(0,r.height/2,0).rotateY(Math.PI/2),ds(!1,a+t*9));n.position.x=t,i.add(n)}let o=new V(new yt(r.groundWidth,e).rotateX(-Math.PI/2),ds(!0,a));return o.position.y=.03,i.add(o),i.userData.born=n,i}var ps=e=>{let t=Math.max(0,Math.min(1,e));return t*t*(3-2*t)};function ms(e,t,n){let r=cs,i=j(t),a=ps((n-e.userData.born)/r.rise),o=Math.max(0,Math.min(1,t.life/r.fade));e.position.set(t.pos.x,0,t.pos.z),e.rotation.y=Math.atan2(-i.z,i.x);for(let t of e.children){let e=t,r=e.material,i=r.uniforms.uGround.value>.5;i||(e.scale.y=Math.max(.001,a)),r.uniforms.uTime.value=n,r.uniforms.uFade.value=i?o*a:o}}var hs={flare:`#ffffff`,glow:`#fff0c2`,cross:`#fff6d8`,streak:`#ffe39a`,ember:`#ffc44f`,ring:`#fff0c4`,streaks:9,embers:14},gs=e=>{let t=Math.min(1,Math.max(0,e));return t*t*(3-2*t)};function _s(e){let t=Math.abs(Math.floor(e))%233280+1;return()=>(t=(t*9301+49297)%233280,t/233280)}function vs(e){return new B({color:e,transparent:!0,opacity:0,depthWrite:!1,depthTest:!1,side:2})}function ys(e){let t=new H,n=_s(e);t.name=`clash-spark`;let r=new Mt(1,4),i=new Mt(1,28),a=new Nt(.9,1,48),o=(e,n,r,i)=>{let a=new V(e,vs(n));a.renderOrder=r,a.userData.clash=i,t.add(a)};o(a,hs.ring,20,{kind:`ring`,angle:0,length:1,speed:1});let s=(n()-.5)*.5;for(let e=0;e<hs.streaks;e++)o(r,hs.streak,21,{kind:`streak`,angle:(e+n()*.8)/hs.streaks*Math.PI*2,length:.45+n()*.6,speed:1});for(let e=0;e<hs.embers;e++)o(r,hs.ember,22,{kind:`ember`,angle:n()*Math.PI*2,length:1,speed:.75+n()*.7});return o(i,hs.glow,22,{kind:`glow`,angle:0,length:1,speed:1}),o(i,hs.flare,23,{kind:`flare`,angle:0,length:1,speed:1}),o(r,hs.cross,24,{kind:`cross`,angle:s,length:1.3,speed:1}),o(r,hs.cross,24,{kind:`cross`,angle:s+Math.PI/2,length:.95,speed:1}),t}function bs(e,t,n,r,i=0){e.rotation.z=t-Math.PI/2,e.scale.set(r,n/2,1),e.position.set(Math.cos(t)*(i+n/2),Math.sin(t)*(i+n/2),0)}function xs(e,t,n,r){let i=Math.min(1,Math.max(0,t)),a=n;e.quaternion.copy(r.quaternion);let o=.7+.3*gs(i/.25),s=1-.65*i;for(let t of e.children){let e=t,n=e.userData.clash;if(n.kind===`flare`)e.scale.setScalar(a*.26*(1-.5*gs(i/.35))),e.material.opacity=1-gs(i/.35);else if(n.kind===`glow`)e.scale.setScalar(a*.55*(1-.4*gs(i/.5))),e.material.opacity=.5*(1-gs(i/.5));else if(n.kind===`cross`)e.rotation.z=n.angle,e.position.set(0,0,0),e.scale.set(a*n.length*(1-.35*i),a*.055*s,1),e.material.opacity=1-gs(i/.65);else if(n.kind===`streak`)bs(e,n.angle,a*n.length*o,a*.035*s,a*.08),e.material.opacity=(1-i)**1.3;else if(n.kind===`ember`){let t=a*1.2*n.speed*(1-(1-i)*(1-i)),r=a*.6*i*i,o=Math.cos(n.angle)*t,s=Math.sin(n.angle)*t-r;e.rotation.z=n.angle-Math.PI/2,e.position.set(o,s,0),e.scale.set(a*.022*(1-.5*i),a*.09*(1-.4*i),1),e.material.opacity=i<.1?i/.1:1-(i-.1)/.9}else e.scale.setScalar(a*(.3+1.05*gs(i/.4))),e.material.opacity=.45*(1-gs(i/.4))}}var Ss={meditation:{color:`#a86cff`,light:`#dcc2ff`,circle:{radius:1.35,spin:.32,lift:.05,strength:1},sparks:{count:30,radius:[.42,.9],height:[.08,2.2],life:[1.7,2.6],size:[.11,.2],twinkle:7,glow:2.1},fadeIn:.3,fadeOut:.3},stance:{samurai:{color:`#dfe6ff`,light:`#ffffff`},swordsman:{color:`#ff3326`,light:`#ffae96`},ninja:{color:`#8ccc80`,light:`#b4f0a6`,shadow:!0,rim:{color:`#4f2790`,light:`#8a5fd4`,strength:.75}},paladin:{color:`#ffc31a`,light:`#fff09a`},mage:{color:`#a86cff`,light:`#dcc2ff`},healer:{color:`#ff5aad`,light:`#ffc4e1`},gunner:{color:`#9c5a24`,light:`#e0a868`}},heal:{color:`#5cff86`,light:`#c8ffd6`,pluses:{count:10,radius:[.34,.72],height:[.3,2.2],life:[.9,1.3],size:[.15,.21],width:.045,glow:1.9},sparks:{count:12,radius:[.3,.75],height:[.2,2],life:[.8,1.2],size:[.08,.13],twinkle:9,glow:1.9},fadeIn:.12,fadeOut:.35}};function Cs(e=!1){return new B({vertexColors:!0,transparent:!0,depthWrite:!1,side:2,blending:e?3:2,premultipliedAlpha:e})}var ws=(e,t)=>{let n=Math.sin(e*127.1+t*311.7)*43758.5453;return n-Math.floor(n)},Ts=(e,t)=>e[0]+(e[1]-e[0])*t;function Es(e,t,n,r,i,a,o,s,c){let l=r-t,u=i-n,d=Math.hypot(l,u)||1,f=-u/d*a,p=l/d*a,m=e.position.length/3;for(let[a,l,u]of[[t-f,n-p,0],[t,n,o],[t+f,n+p,0],[r-f,i-p,0],[r,i,o],[r+f,i+p,0]])e.position.push(a,s,l),e.colour.push(c.r*u,c.g*u,c.b*u);e.index.push(m,m+3,m+1,m+1,m+3,m+4,m+1,m+4,m+2,m+2,m+4,m+5)}function Ds(e,t,n,r,i,a,o=72){let s=e.position.length/3;for(let s=0;s<=o;s++){let c=s/o*Math.PI*2,l=Math.cos(c),u=Math.sin(c);for(let[o,s]of[[-1,0],[0,r],[1,0]])e.position.push(l*(t+o*n),i,u*(t+o*n)),e.colour.push(a.r*s,a.g*s,a.b*s)}for(let t=0;t<o;t++)for(let n=0;n<2;n++){let r=s+t*3+n,i=r+3;e.index.push(r,i,r+1,r+1,i,i+1)}}function Os(e,t,n,r,i,a=36){let o=e.position.length/3;e.position.push(0,r,0),e.colour.push(i.r*n,i.g*n,i.b*n);for(let n=0;n<=a;n++){let i=n/a*Math.PI*2;e.position.push(Math.cos(i)*t,r,Math.sin(i)*t),e.colour.push(0,0,0)}for(let t=0;t<a;t++)e.index.push(o,o+1+t,o+2+t)}function ks(e){let t=new Ot;return t.setAttribute(`position`,new I(e.position,3)),t.setAttribute(`color`,new I(e.colour,3)),t.setIndex(e.index),t}function As(e){let t={position:[],colour:[],index:[]},n=new F(e.color),r=new F(e.light);Os(t,1,.1,0,n),Ds(t,.97,.028,1,0,r),Ds(t,.86,.016,.85,0,n);for(let e=0;e<18;e++){let n=e/18*Math.PI*2,i=Math.cos(n),a=Math.sin(n),o=.915;if(e%2)Es(t,i*.885,a*.885,i*.9450000000000001,a*.9450000000000001,.012,.9,0,r);else{let e=.022,n=-a,s=i;Es(t,i*.893,a*.893,i*o+n*e,a*o+s*e,.008,.8,0,r),Es(t,i*o+n*e,a*o+s*e,i*.937,a*.937,.008,.8,0,r),Es(t,i*.937,a*.937,i*o-n*e,a*o-s*e,.008,.8,0,r),Es(t,i*o-n*e,a*o-s*e,i*.893,a*.893,.008,.8,0,r)}}Ds(t,.6,.016,.85,0,n);for(let e of[0,Math.PI/3])for(let r=0;r<3;r++){let i=e+r/3*Math.PI*2+Math.PI/2,a=i+Math.PI*2/3;Es(t,Math.cos(i)*.6,Math.sin(i)*.6,Math.cos(a)*.6,Math.sin(a)*.6,.014,.75,0,n)}return Ds(t,.25,.012,.7,0,r,48),Os(t,.16,.45,0,r,24),ks(t)}var js=9;function Ms(e,t){for(let n=0;n<4;n++){let r=t+1+n*2,i=t+2+n*2,a=t+1+(n+1)%4*2;e.push(t,r,i,t,i,a)}}var Ns=12;function Ps(e,t){for(let n of[0,6]){let r=t+n;e.push(r,r+3,r+1,r+1,r+3,r+4,r+1,r+4,r+2,r+2,r+4,r+5)}}function Fs(e,t,n=!1){let r=e*js+t*Ns,i=[];for(let t=0;t<e;t++)Ms(i,t*js);for(let n=0;n<t;n++)Ps(i,e*js+n*Ns);let a=new Ot;a.setAttribute(`position`,new at(new Float32Array(r*3),3)),a.setAttribute(`color`,new at(new Float32Array(r*3),3)),a.setIndex(i),a.boundingSphere=new Ge(new L(0,1.15,0),1.9);let o=new V(a,Cs(n));return o.renderOrder=7,{mesh:o,stars:e,pluses:t}}var Is=new L,Ls=new L,Rs=new L,zs=new L,Bs=new F,Vs=new Map,Hs=e=>Vs.get(e)??Vs.set(e,new F(e)).get(e);function Us(e,t,n,r,i,a){e.setXYZ(n,r.x,r.y,r.z),t.setXYZ(n,a.r,a.g,a.b);for(let o=0;o<4;o++){let s=o*Math.PI/2,c=Math.cos(s),l=Math.sin(s);Rs.copy(r).addScaledVector(Is,c*i).addScaledVector(Ls,l*i),e.setXYZ(n+1+o*2,Rs.x,Rs.y,Rs.z),t.setXYZ(n+1+o*2,0,0,0);let u=s+Math.PI/4,d=i*.2;Rs.copy(r).addScaledVector(Is,Math.cos(u)*d).addScaledVector(Ls,Math.sin(u)*d),e.setXYZ(n+2+o*2,Rs.x,Rs.y,Rs.z),t.setXYZ(n+2+o*2,a.r*.25,a.g*.25,a.b*.25)}}function Ws(e,t,n,r,i,a,o){for(let[s,c,l]of[[0,Is,Ls],[6,Ls,Is]]){let u=0;for(let d of[-1,1])for(let f of[-1,0,1]){Rs.copy(r).addScaledVector(c,d*i).addScaledVector(l,f*a*(f?1.6:0));let p=+!f;e.setXYZ(n+s+u,Rs.x,Rs.y,Rs.z),t.setXYZ(n+s+u,o.r*p,o.g*p,o.b*p),u++}}}function Gs(e,t,n,r,i,a){let o=e.mesh.geometry.getAttribute(`position`),s=e.mesh.geometry.getAttribute(`color`);Is.set(1,0,0).applyQuaternion(i.quaternion),Ls.set(0,1,0).applyQuaternion(i.quaternion);let c=Hs(t.color),l=Hs(t.light),u=(e,t,n)=>{let i=((r/Ts(t.life,ws(e,n+1))+ws(e,n+2))%1+1)%1,a=ws(e,n+3)*Math.PI*2+i*.9,o=Ts(t.radius,ws(e,n+4));return zs.set(Math.cos(a)*o,Ts(t.height,i),Math.sin(a)*o),Math.sin(Math.PI*i)**1.2};for(let i=0;i<e.stars;i++){let e=u(i+a*97,t.sparks,0),d=.5+.5*Math.sin(r*t.sparks.twinkle+ws(i,9)*20)**2;Bs.copy(c).lerp(l,ws(i,7)).multiplyScalar(n*e*d*t.sparks.glow),Us(o,s,i*js,zs,Ts(t.sparks.size,ws(i,5))*(.8+.4*d),Bs)}let d=t.pluses;for(let t=0;d&&t<e.pluses;t++){let r=u(t+a*53,d,20);Bs.copy(c).lerp(l,ws(t,27)*.5).multiplyScalar(n*r*d.glow),Ws(o,s,e.stars*js+t*Ns,zs,Ts(d.size,ws(t,25)),d.width,Bs)}o.needsUpdate=!0,s.needsUpdate=!0}function Ks(e=Ss.stance.samurai){let t=new H;t.name=`meditation-aura`,t.userData.spec={...Ss.meditation,color:e.color,light:e.light};let n=new V(As(e),Cs(e.shadow));if(n.scale.setScalar(Ss.meditation.circle.radius),n.position.y=Ss.meditation.circle.lift,n.renderOrder=6,t.add(n,Fs(Ss.meditation.sparks.count,0,e.shadow).mesh),e.rim){let n=new V(As(e.rim),Cs());n.scale.setScalar(Ss.meditation.circle.radius),n.position.y=Ss.meditation.circle.lift+.002,n.renderOrder=6,n.userData.strength=e.rim.strength,t.add(n)}return t.visible=!1,t}function qs(e,t,n,r,i){if(e.visible=t>.005,!e.visible)return;let[a,o,s]=e.children;a.rotation.y=n*Ss.meditation.circle.spin,a.scale.setScalar(Ss.meditation.circle.radius*(.82+.18*t));let c=Ss.meditation.circle.strength*t*(.86+.14*Math.sin(n*2.2));a.material.color.setScalar(c),s&&(s.rotation.y=a.rotation.y,s.scale.copy(a.scale),s.material.color.setScalar(c*s.userData.strength)),Gs({mesh:o,stars:Ss.meditation.sparks.count,pluses:0},e.userData.spec??Ss.meditation,t,n,r,i)}function Js(){let e=new H;return e.name=`heal-aura`,e.add(Fs(Ss.heal.sparks.count,Ss.heal.pluses.count).mesh),e.visible=!1,e}function Ys(e,t,n,r,i){if(e.visible=t>.005,!e.visible)return;let a=e.children[0];Gs({mesh:a,stars:Ss.heal.sparks.count,pluses:Ss.heal.pluses.count},Ss.heal,t,n,r,i)}var Xs=.6+P.puckRadius,Zs={ally:new F(`#a9f878`),enemy:new F(`#ff7869`)},Qs={radius:1.45,spread:72*Math.PI/180,thickness:.15,lateral:.065,centreY:1.05,rootFade:.03},$s=[0,Math.PI/2,Math.PI/4,-Math.PI/4],ec=[m,ve,a,o],tc=[new F(`#ffc66e`),new F(`#ff7762`)];function nc(e){let t=[],n=[],r=(e,r)=>{t.push(e.x,e.y,e.z),n.push(r,r,r)};for(let t=0;t<e.length-1;t++){let n=e[t],i=e[t+1],a=n.centre.clone().addScaledVector(n.across,-n.half),o=n.centre.clone().addScaledVector(n.across,n.half),s=i.centre.clone().addScaledVector(i.across,-i.half),c=i.centre.clone().addScaledVector(i.across,i.half);r(a,0),r(n.centre,n.glow),r(i.centre,i.glow),r(a,0),r(i.centre,i.glow),r(s,0),r(o,0),r(i.centre,i.glow),r(n.centre,n.glow),r(o,0),r(c,0),r(i.centre,i.glow)}let i=new Ot;return i.setAttribute(`position`,new I(t,3)),i.setAttribute(`color`,new I(n,3)),i}var rc=[[-.95,0],[-.34,.5],[.08,1],[.5,.8],[1.05,0]];function ic(e,t,n,r,i,a){let o=[],s=[],c=e=>{o.push(e.point.x,e.point.y,e.point.z),s.push(e.glow,e.glow,e.glow)};for(let o of[1,-1]){let s=[];for(let c=0;c<=40;c++){let l=c/40*2-1,u=l*t,d=Math.max(0,1-l*l),f=n*d**.55,p=.62+.38*d**.35,m=r*d**.5;s.push(rc.map(([t,n])=>{let r=e+t*f,s=i(r*Math.sin(u),r*Math.cos(u),o*m*n);return{point:s,glow:n*p*a(s)}}))}for(let e=0;e<40;e++)for(let t=0;t<rc.length-1;t++)c(s[e][t]),c(s[e][t+1]),c(s[e+1][t+1]),c(s[e][t]),c(s[e+1][t+1]),c(s[e+1][t])}let l=new Ot;return l.setAttribute(`position`,new I(o,3)),l.setAttribute(`color`,new I(s,3)),l}var ac=e=>new B({color:`#ffffff`,vertexColors:!0,transparent:!0,opacity:e,depthWrite:!1,side:2,blending:2}),oc=.62;function sc(){let e=Qs,t=new H,n=e=>Math.max(0,Math.min(1,e)),r=e=>{let t=n(e);return t*t*(3-2*t)};for(let n of $s){let i=Math.cos(n),a=Math.sin(n);t.add(new V(ic(e.radius,e.spread,e.thickness,e.lateral,(t,n,r)=>new L(t*i-r*a,e.centreY+t*a+r*i,n),t=>r(t.y/e.rootFade)),ac(oc)))}let i=new V(new je(.1,10,8),new B({color:`#ffffff`,transparent:!0,opacity:.55,depthWrite:!1,blending:2}));i.position.set(0,e.centreY,0),t.add(i);let a=[];for(let e=0;e<=10;e++){let t=1.1-e/10*3.4,i=r(n((1-Math.abs(t+.6)/2)/.5))*.6;a.push({centre:new L(0,.04,t),across:new L(1,0,0),half:.19*(.5+.5*i),glow:i})}return t.add(new V(nc(a),ac(.8))),t}var cc=new F(`#ffffff`),lc={taper:.935,height:.4583,floorGap:.085,coreRadius:.59,coreThickness:.035,coreLift:.0015,bandRadius:.957,bandThickness:.075,bandAt:.648,glowInner:1.18,glowOuter:1.31,glowLift:.025,trailRadius:.59,trailCount:14,trailLift:.06},uc=e=>e.isMesh===!0&&[e.material].flat().some(e=>e.name.startsWith(`Yuru_Line`)),dc=[`rift-arena`,`blender-harbour-city`,`terraced-valley`,`harbour-water`],fc=`EpicCity_TwilightSky`,pc=class{canvas;mapId;renderer;ready;scene=new Ue;camera=new Ee(60,1,.1,850);yaw=Math.PI/2;pitch=.58;gunPitch=.12;fighters=new Map;bench=[];viewing=0;avatar;setAvatar(e){this.avatar=e&&{id:e.id,look:{...e.look}}}footsteps=new l;steps=[];takeSteps(){let e=this.steps;return this.steps=[],e}get bookStyle(){return this.effects.bookStyle}setBook(e){this.effects.setBook(e)}avatarOf(e){return this.avatar&&e.id===this.avatar.id&&me()===`human`?this.avatar.look:void 0}seatActions={ready:e=>!(e.role===`samurai`&&!Zr())&&!(me()===`human`&&!Bt(e.role))&&!(e.role===`samurai`&&r(this.avatarOf(e),me())===`grandpa`&&!an())&&!(N(e.role,this.avatarOf(e),me())&&!rn(e.role))&&!(t=>t&&!nn(t,e.role))(this.avatarOf(e)),look:e=>{let t=this.avatarOf(e);return t?v(t):``},create:e=>this.createFighter(e),park:e=>{this.scene.remove(e.mesh,e.ring,e.shadow,e.heal,e.barrier),e.calm&&this.scene.remove(e.calm)},unpark:e=>{Object.assign(e,{healLevel:0,calmLevel:0,opacity:1}),this.scene.add(e.mesh,e.ring,e.shadow,e.heal,e.barrier),e.calm&&this.scene.add(e.calm)}};transient=new Map;puck=new H;puckTint=new F(u[0].color);puckParts=[];threatRing;threatDisplay=p();reachFan;coreBand;bodyRing;reachFanLevel=0;reachFanRole;corePulse=0;trail=[];target=new L;shake=new L;lastPhase=``;projection=new L;effects;effectShaders=new H;shadowElapsed=0;benchmarkMode=null;benchmarkSaved;setBenchmark(e){let t=this.benchmarkSaved,n=this.programKey();if(t){for(let e of t.hidden)e.visible=!0;this.benchmarkSaved=void 0}if(this.benchmarkMode=e,this.applyQuality(e?.quality?{...this.baseQuality,...e.quality}:this.baseQuality),e){let t={hidden:[]};if(e.hideScenery)for(let e of dc){let n=this.scene.getObjectByName(e);n?.visible&&(n.visible=!1,t.hidden.push(n))}if(e.hideOutlines)for(let e of[...this.fighters.values(),...this.bench])e.mesh.traverse(e=>{uc(e)&&e.visible&&(e.visible=!1,t.hidden.push(e))});this.benchmarkSaved=t}else{for(let e of this.plainMaterials.values())e.dispose();this.plainMaterials.clear()}if(n!==this.programKey()){let t=this.renderer.getRenderTarget();this.renderer.setRenderTarget(e?.direct?null:this.effects.composer.readBuffer),this.renderer.compile(this.scene,this.camera),this.renderer.setRenderTarget(t)}}benchmarkOptions(){let e=this.baseQuality;return{baked:e.bakeMapLight&&this.bakes.size>0,mobile:this.mobileDevice,pixelRatio:e.pixelRatio,outlines:[...this.fighters.values()].some(e=>{let t=!1;return e.mesh.traverse(e=>{uc(e)&&(t=!0)}),t}),gtao:Po[this.mapId].pc.ambientOcclusion&&!e.ambientOcclusion,before:Io(this.mapId,this.mobileDevice)}}programKey(){return`${!!this.benchmarkMode?.direct}:${this.lamps.filter(e=>e.visible).length}:${this.mapMaterialKey()}:${this.skyMesh?.visible}:${this.fighterMaterialKey()}`}mapMeshes=[];lightMaterials=new Map;plainMaterials=new Map;mapMaterialKey(){let e=this.benchmarkMode;if(e?.plainMaterials)return`plain`;if(!this.quality.mapLight||e?.standardMaterials)return`standard`;let t=e?.mapPointLights??this.quality.mapPointLights,n=e?.mapPixelPoints??!0,r=this.quality.bakeMapLight&&this.bakes.size>0&&t===this.baseQuality.mapPointLights&&n;return`light:${t}:${n}:${this.quality.shadowSamples}:${r}`}applyMapMaterials(){let e=this.mapMaterialKey(),[,t,n,r,i]=e.split(`:`),a=r===`1`;for(let{mesh:r,original:o}of this.mapMeshes){let s=o=>e===`plain`?this.plainOf(o):e!==`standard`&&r!==this.water&&zo(o)?this.lightOf(o,Yo(o,t===`true`,n===`true`),a,i===`true`?r:void 0):o;r.material=Array.isArray(o)?o.map(s):s(o)}}lightOf(e,t,n,r){let i=r&&this.bakes.get(r),a=`${e.uuid}:${t}:${n}${i?`:${r.uuid}`:``}`,o=this.lightMaterials.get(a);return o||this.lightMaterials.set(a,o=Uo(e,this.scene.environmentIntensity,{points:t,shadowOnce:n},i)),o}makeEnvironment(){let e=new Ja,t=new Ht(this.renderer);this.scene.environment=t.fromScene(e,.06).texture,e.dispose(),t.dispose()}bakes=new Map;bakeMs=0;bakeMap(){let e=this.quality;if(!e.mapLight||!e.bakeMapLight)return;let t=performance.now(),n=Zo(this.scene,this.renderer.shadowMap.enabled);if(!n)return;let r=new Map(this.culls.map(e=>[e.mesh,e])),i=new Map;for(let{mesh:e}of this.mapMeshes)i.set(e.geometry,(i.get(e.geometry)??0)+1);for(let{mesh:t,original:a}of this.mapMeshes){if(t===this.water||Array.isArray(a)||!zo(a)||this.bakes.has(t))continue;let o=a,s=t.isInstancedMesh===!0,c=r.get(t)?.original,l=s?c?c.length/16:t.count:1,u=t.geometry.getAttribute(`position`).count*l*(o.side===2?2:1);if(Math.ceil(u/Xo.width)>this.renderer.capabilities.maxTextureSize)continue;let d={environment:Ho(o,this.scene.environmentIntensity),metal:o.metalness,points:Yo(o,e.mapPointLights,!0)===`vertex`},f=()=>es(t,n,d,o.side===2,o.side===1,c),p=f();if(s){if((i.get(t.geometry)??0)>1){let e=new Ot,n=t.geometry;for(let[t,r]of Object.entries(n.attributes))e.setAttribute(t,r);e.setIndex(n.index);for(let t of n.groups)e.addGroup(t.start,t.count,t.materialIndex);e.boundingSphere=n.boundingSphere,e.boundingBox=n.boundingBox,t.geometry=e}let e=new it(Float32Array.from({length:p.count},(e,t)=>t),1);e.setUsage(Le),t.geometry.setAttribute(`mapLightInstance`,e)}this.bakes.set(t,{texture:ns(p),width:Xo.width,vertices:p.vertices,texels:p.texels,redo:f})}this.bakeMs=performance.now()-t}rebake(){for(let e of this.bakes.values())e.texture.image.data=ts(e.redo(),e.width).data,e.texture.needsUpdate=!0}bakeReport(){let e=0,t=0,n=0;for(let[r,i]of this.bakes)e+=i.texture.image.width*i.texture.image.height,r.isInstancedMesh&&t++,i.texels===2&&n++;return{meshes:this.bakes.size,instanced:t,doubleSided:n,texels:e,megabytes:+(e*8/1e6).toFixed(1),milliseconds:Math.round(this.bakeMs)}}fighterLightMaterials=new Map;fighterMaterialKey(){let e=this.quality;return`${e.fighterLight?`light:${e.mapPointLights}:${e.shadowSamples}:${e.fighterKeepMetal}`:`standard`}:${e.fadeWhenNeeded}`}applyFighterMaterials(){for(let e of[...this.fighters.values(),...this.bench])this.dressFighter(e)}dressFighter(e){let t=this.quality,n=new Set;for(let r of e.parts){let i=e=>e.isMeshStandardMaterial===!0,a=n=>t.fighterLight&&i(n)&&!(t.fighterKeepMetal&&qo(n,e.role))?this.fighterLightOf(n,t.mapPointLights,t.shadowSamples===1):n;r.mesh.material=Array.isArray(r.original)?r.original.map(a):a(r.original);for(let e of[r.mesh.material].flat())n.add(e)}e.fadeMaterials=[...n]}fighterLightOf(e,t,n){let r=`${e.uuid}:${t}:${n}`,i=this.fighterLightMaterials.get(r);return i||this.fighterLightMaterials.set(r,i=Wo(e,this.scene.environmentIntensity,{points:t?`vertex`:`none`,shadowOnce:n})),i}plainOf(e){let t=e;if(!t.isMeshStandardMaterial)return e;let n=this.plainMaterials.get(e);if(!n){let r=t.color.clone();t.emissive&&t.emissiveIntensity>0&&r.add(t.emissive.clone().multiplyScalar(t.emissiveIntensity)),n=new B({color:r,map:t.map,vertexColors:t.vertexColors,side:t.side,transparent:t.transparent,opacity:t.opacity,alphaTest:t.alphaTest,alphaMap:t.alphaMap,depthWrite:t.depthWrite,depthTest:t.depthTest,fog:t.fog}),this.plainMaterials.set(e,n)}return n}async prepareMapShaders(){let e=this.renderer.getRenderTarget();this.renderer.setRenderTarget(this.effects.composer.readBuffer);let t;try{t=Promise.all(dc.map(e=>this.scene.getObjectByName(e)).filter(e=>!!e).map(e=>this.renderer.compileAsync(e,this.camera,this.scene)))}finally{this.renderer.setRenderTarget(e)}await t}skyMesh;skyCube;skyColor=new F(`#203d61`);cacheSky(e){this.skyMesh&&e&&!this.skyCube&&(this.skyCube=new Lt(e,{type:Ie,generateMipmaps:!1,minFilter:st,magFilter:st,depthBuffer:!1}),this.drawSkyCube())}drawSkyCube(){let e=this.skyMesh,t=this.skyCube;if(!e||!t)return;let n=e.parent,r=new Ue,i=e.visible;r.add(e),e.visible=!0,new De(1,1e3,t).update(this.renderer,r),e.visible=i,n.add(e)}applySky(){let e=this.skyMesh;if(!e)return;let t=this.benchmarkMode,n=!!t?.hideSky,r=!!this.skyCube&&this.quality.skyCube>0&&!t?.liveSky;e.visible=!n&&!r,this.scene.background=r&&!n?this.skyCube.texture:this.skyColor}culls=[];cullShapes(e){if(!this.culls.length)return;let t=this.renderer.shadowMap.autoUpdate||this.renderer.shadowMap.needsUpdate,n=this.quality.cullBuildings&&this.quality.shadow===`once`&&!this.benchmarkMode?.drawAllBuildings&&!t,r=this.benchmarkMode?.halfShapes?e=>e%2==0:void 0,i=n?os(e):void 0;if(!i&&!r){if(!this.cullsFull){for(let e of this.culls)e.showAll();this.cullsFull=!0}return}this.cullsFull=!1;for(let e of this.culls)e.show(e.pick(i,r))}cullsFull=!0;quality;baseQuality;applyQuality(e){if(e!==this.quality){this.quality=e;let t=Math.min(devicePixelRatio,e.pixelRatio);this.renderer.getPixelRatio()!==t&&(this.renderer.setPixelRatio(t),this.resize()),this.renderer.shadowMap.autoUpdate=e.shadow===`every`,this.shadowBaked=!1,this.shadowElapsed=0,this.renderer.shadowMap.needsUpdate=!0,this.puckDisc.castShadow=e.movingShadows,this.effects.setBloom(e.bloom);for(let t of this.lamps)t.visible=e.lampLights;this.effects.setAmbientOcclusion(e.ambientOcclusion),this.effects.setSharpen(e.sharpen),this.effects.setAntialias(e.antialias)}this.applyMapMaterials(),this.applySky(),this.applyFighterMaterials()}lamps=[];puckDisc;shadowBaked=!1;sceneryReady=!1;viewportWidth=1;viewportHeight=1;water;mobileDevice=/Android|iPhone|iPad|iPod/i.test(navigator.userAgent)||navigator.platform===`MacIntel`&&navigator.maxTouchPoints>1;constructor(e,t=`royal`){this.canvas=e,this.mapId=t;let n=ae(t),r=n.shape===`circle`;this.renderer=new $t({canvas:e,antialias:!this.mobileDevice,alpha:!1,powerPreference:`high-performance`}),e.addEventListener(`webglcontextrestored`,()=>{this.makeEnvironment(),this.drawSkyCube(),this.rebake()}),this.baseQuality=this.quality=Fo(t,this.mobileDevice),this.renderer.setPixelRatio(Math.min(devicePixelRatio,this.quality.pixelRatio)),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.autoUpdate=this.quality.shadow===`every`,this.renderer.shadowMap.needsUpdate=!0,this.renderer.shadowMap.type=1,this.renderer.outputColorSpace=Oe,this.renderer.toneMapping=4;let i=er[t];this.renderer.toneMappingExposure=i.exposure,this.skyColor.set(i.background),this.scene.background=this.skyColor,this.scene.fog=new tt(i.fog.color,i.fog.density),this.scene.add(new rt(i.hemisphere.sky,i.hemisphere.ground,i.hemisphere.intensity));let a=new Fe(i.sun.color,i.sun.intensity);a.position.set(-28,47,-38),a.castShadow=!0,a.shadow.mapSize.set(2048,2048),Object.assign(a.shadow.camera,{left:-n.width/2-24,right:n.width/2+24,top:n.depth/2+24.5,bottom:-n.depth/2-24.5,near:1,far:160}),r||Object.assign(a.shadow.camera,{left:-P.width/2-31,right:P.width/2+31,top:P.depth/2+31.5,bottom:-P.depth/2-31.5}),a.shadow.bias=-3e-4,a.shadow.normalBias=.025,a.shadow.radius=2,this.scene.add(a);let o=new Fe(i.fill.color,i.fill.intensity);o.position.set(-15,15,35),this.scene.add(o),this.makeEnvironment(),this.scene.environmentIntensity=i.environment,this.ready=Promise.all([t===`school`?Qn(this.scene):r?En(this.scene):yn(this.scene),Qr(),me()===`human`?Xt():void 0,me()===`human`?tn():void 0,me()===`human`?cn():void 0]).then(()=>{this.water=this.scene.getObjectByName(`harbour-water`);for(let e of dc){let t=this.scene.getObjectByName(e);t&&(t.updateWorldMatrix(!0,!0),t.traverse(e=>{e.matrixAutoUpdate=!1,e.matrixWorldAutoUpdate=!1}))}this.scene.traverse(e=>{e.name===`city-lamp-light`&&e.isPointLight&&this.lamps.push(e)});for(let e of this.lamps)e.visible=this.quality.lampLights;for(let e of dc)this.scene.getObjectByName(e)?.traverse(e=>{let t=e;t.isMesh&&[t.material].flat().some(e=>e.isMeshStandardMaterial)&&this.mapMeshes.push({mesh:t,original:t.material})});for(let e of[`blender-harbour-city`,`rift-arena`])this.scene.getObjectByName(e)?.traverse(e=>{e.isInstancedMesh&&this.culls.push(new ss(e))});return this.skyMesh=this.scene.getObjectByName(fc),this.cacheSky(this.quality.skyCube),this.bakeMap(),this.applyMapMaterials(),this.applySky(),this.prepareMapShaders().then(()=>this.prepareEffectShaders())}).then(()=>{this.sceneryReady=!0}),this.scene.onBeforeRender=(e,t,n)=>this.cullShapes(n),this.ready.catch(e=>{console.error(`ゲームの素材の読み込みに失敗しました`,e)});let l=P.puckRadius,u=lc,d=l*u.height,f=u.floorGap+d,p=new V(new _t(l*u.taper,l,d,32),new W({color:`#101923`,metalness:.75,roughness:.26}));p.position.y=u.floorGap+d/2,p.castShadow=this.quality.movingShadows,this.puck.add(p),this.puckDisc=p;let m=new V(new _t(l*u.coreRadius,l*u.coreRadius,u.coreThickness,24),new B({color:`#e4ffc0`}));m.position.y=f+u.coreLift+u.coreThickness/2,this.puck.add(m);let h=new V(new It(l*u.bandRadius,l*u.bandThickness,6,32),new B({color:`#d0ff82`}));h.rotation.x=Math.PI/2,h.position.y=u.floorGap+d*u.bandAt,this.puck.add(h);let g=new V(new Nt(l*u.glowInner,l*u.glowOuter,32),new B({color:`#d0ff82`,transparent:!0,opacity:.55,side:2,depthWrite:!1}));g.rotation.x=-Math.PI/2,g.position.y=u.glowLift,this.puck.add(g),this.scene.add(this.puck),this.puckParts=[m.material,h.material,g.material];let _=new V(new Nt(s.ringRadius*s.ringInner,s.ringRadius,40),new B({color:`#ff5a5a`,transparent:!0,opacity:0,side:2,depthWrite:!1}));_.rotation.x=-Math.PI/2,_.visible=!1,this.threatRing=_,this.scene.add(_);let v=Math.acos(c.showAngle),y=new V(new Mt(1,48,-v,v*2),new B({color:`#ffffff`,transparent:!0,opacity:0,side:2,depthWrite:!1}));y.rotation.x=-Math.PI/2,y.visible=!1,this.reachFan=y,this.scene.add(y);let b=new V(new Nt(.9,1,48,1,-v,v*2),new B({color:`#ffffff`,transparent:!0,opacity:0,side:2,depthWrite:!1}));b.rotation.x=-Math.PI/2,b.visible=!1,this.coreBand=b,this.scene.add(b);let S=Xs,C=new V(new Nt(S-.06,S,48),new B({color:`#e8eef6`,transparent:!0,opacity:0,side:2,depthWrite:!1}));C.rotation.x=-Math.PI/2,C.visible=!1,this.bodyRing=C,this.scene.add(C);for(let e=0;e<u.trailCount;e++){let t=new V(new Mt(l*u.trailRadius*(1-e/18),12),new B({color:`#c7ff7b`,transparent:!0,opacity:.3*(1-e/u.trailCount),depthWrite:!1}));t.rotation.x=-Math.PI/2,t.position.y=u.trailLift,t.visible=!1,this.scene.add(t),this.trail.push(t)}this.effects=new No(this.renderer,this.scene,this.camera,this.mobileDevice,{ambientOcclusion:this.quality.ambientOcclusion,bloom:this.quality.bloom}),this.effects.setSharpen(this.quality.sharpen),this.effects.setAntialias(this.quality.antialias),this.effects.setBook(x()),this.effects.maskRoots=()=>[...this.fighters.values()].map(e=>e.mesh),this.resize()}async prepareEffectShaders(){let e=new yt(1,1),t=[new B,new B({transparent:!0,depthWrite:!1}),new B({transparent:!0,depthWrite:!1,side:2}),new W({color:`#87e5ff`,emissive:`#1a809b`,emissiveIntensity:.3,metalness:.2,roughness:.18,transparent:!0,opacity:.84}),ds()];for(let n of t){let t=new V(e,n);t.castShadow=!0,this.effectShaders.add(t)}let n=new Ot;n.setAttribute(`position`,new at(new Float32Array(9),3)),n.setAttribute(`color`,new at(new Float32Array(9),3)),this.effectShaders.add(new V(n,new B({vertexColors:!0,transparent:!0,depthWrite:!1,side:2,blending:2})));let r=new Nt(.5,1,4);r.setAttribute(`color`,new at(new Float32Array(r.getAttribute(`position`).count*3),3)),this.effectShaders.add(new V(r,new B({vertexColors:!0,transparent:!0,side:2,depthWrite:!1})));let i=new Ot;i.setAttribute(`position`,new at(new Float32Array(9),3)),this.effectShaders.add(new V(i,kr()));let a=new Ot;a.setAttribute(`position`,new at(new Float32Array(9),3)),a.setAttribute(`normal`,new at(new Float32Array([0,1,0,0,1,0,0,1,0]),3)),a.setAttribute(`skinIndex`,new Te(new Uint16Array(12),4)),a.setAttribute(`skinWeight`,new at(new Float32Array([1,0,0,0,1,0,0,0,1,0,0,0]),4));let o=new He(a,new B({transparent:!0,depthWrite:!1})),s=new xt;o.add(s),o.bind(new Ve([s])),o.frustumCulled=!1,this.effectShaders.add(o);let c=this.renderer.getRenderTarget();this.renderer.setRenderTarget(this.effects.composer.readBuffer);let l;try{l=this.renderer.compileAsync(this.effectShaders,this.camera,this.scene)}finally{this.renderer.setRenderTarget(c)}await l}async prepareFighterShaders(){let e=[...this.fighters.values()],t=e.flatMap(e=>[e.mesh,e.heal,e.barrier,...e.calm?[e.calm]:[]]),n=this.quality.fadeWhenNeeded?e.flatMap(e=>e.fadeMaterials).filter(e=>!e.transparent):[],r=n.map(e=>e.alphaHash),i=this.renderer.getRenderTarget();this.renderer.setRenderTarget(this.effects.composer.readBuffer);let a=[];try{for(let e of n.length?[!1,!0]:[void 0]){if(e!==void 0)for(let t of n)t.alphaHash!==e&&(t.alphaHash=e,t.needsUpdate=!0);a.push(...de(t).map(e=>this.renderer.compileAsync(e,this.camera,this.scene)))}}finally{n.forEach((e,t)=>{e.alphaHash!==r[t]&&(e.alphaHash=r[t],e.needsUpdate=!0)}),this.renderer.setRenderTarget(i)}await Promise.all(a),this.effects.warmMask()}sizeStale(){let e=this.canvas.clientWidth,t=this.canvas.clientHeight;return e>0&&t>0&&(e!==this.viewportWidth||t!==this.viewportHeight)}resize(){let e=this.canvas.clientWidth,t=this.canvas.clientHeight;this.viewportWidth=e,this.viewportHeight=t,this.renderer.setSize(e,t,!1),this.camera.aspect=e/t,this.camera.updateProjectionMatrix(),this.effects?.resize(e,t)}resetCamera(e=0){this.yaw=ce(e)*Math.PI/2,this.pitch=.58,this.gunPitch=.12,this.lastPhase=``}project(e,t,n){return this.projection.set(e,t,n).project(this.camera),{x:(this.projection.x*.5+.5)*this.viewportWidth,y:(-.5*this.projection.y+.5)*this.viewportHeight,visible:this.projection.z>-1&&this.projection.z<1&&Math.abs(this.projection.x)<1.08&&Math.abs(this.projection.y)<1.1}}groundAxes(e,t){this.camera.updateMatrixWorld();let n={x:Math.sin(this.yaw),z:Math.cos(this.yaw)},r={x:-n.z,z:n.x},i=.5,a=this.project(e.x,t,e.z);if(!a.visible)return;let o=this.project(e.x+r.x*i,t,e.z+r.z*i),s=this.project(e.x+n.x*i,t,e.z+n.z*i);return{right:r,forward:n,onRight:{x:(o.x-a.x)/i,y:(o.y-a.y)/i},onForward:{x:(s.x-a.x)/i,y:(s.y-a.y)/i}}}drawPuckState(e,t){let r=n(Math.hypot(e.puck.velocity.x,e.puck.velocity.z));this.puckTint.lerp(this.tierColor(r),t>0?Math.min(1,t/s.blend):0);for(let e of this.puckParts)e.color.copy(this.puckTint).multiplyScalar(r.glow);let i=pe(e);if(i>0){this.puckTint.lerp(cc,Math.min(1,i*1.1));for(let e of this.puckParts)e.color.copy(this.puckTint).multiplyScalar(1+i*1.6)}let a=.8+r.glow*.2,o=Math.min(1,r.glow),c=i>0?this.trail.length:r.trail;this.trail.forEach((t,n)=>{let r=e.puck.trail[e.puck.trail.length-1-n];if(t.visible=!!r&&n<c,!t.visible)return;t.position.set(r.x,lc.trailLift,r.z),t.scale.setScalar(a);let i=t.material;i.color.copy(this.puckTint),i.opacity=.3*(1-n/lc.trailCount)*o});let l=this.threatRing;if(!l)return;let u=e.fighters.find(t=>t.id===e.controlledId),d=u&&e.phase===`playing`?g(e.puck,u,le(e,u.id)):null,f=Se(this.threatDisplay,d,t);l.visible=f.visible,f.visible&&u&&(l.position.set(u.pos.x,.055,u.pos.z),l.material.opacity=f.opacity)}drawReachFan(t,n){let r=this.reachFan,i=this.coreBand,a=this.bodyRing;if(!r||!i||!a)return;let o=t.fighters.find(e=>e.id===t.controlledId),s=o&&t.phase===`playing`&&o.role!==`gunner`&&o.stun<=0&&!o.meditating&&!o.sprinting?!c.showWhenReady||o.cooldowns[0]<=0?1:.25:0,l=n>0?n/c.fadeIn:0;this.reachFanLevel+=U.clamp(s-this.reachFanLevel,-l,l);let u=this.reachFanLevel;if(r.visible=i.visible=a.visible=u>.01,!r.visible||!o)return;let d=he(o.role)+P.puckRadius;if(this.reachFanRole!==o.role){this.reachFanRole=o.role,r.material.color.set(h[o.role].color),i.material.color.set(h[o.role].color).lerp(new F(`#ffffff`),.45);let t=d-Xs,n=Math.acos(c.showAngle);i.geometry.dispose(),i.geometry=new Nt(Xs+t*(e.core-e.criticalBand),Xs+t*(e.core+e.criticalBand),48,1,-n,n*2)}let f=Math.atan2(-o.facing.z,o.facing.x);r.position.set(o.pos.x,.035,o.pos.z),r.scale.setScalar(d),r.rotation.set(-Math.PI/2,0,f),r.material.opacity=.15*u,i.position.set(o.pos.x,.04,o.pos.z),i.rotation.set(-Math.PI/2,0,f);let p=A(t,o);this.corePulse=p?this.corePulse+n:0;let m=p?.78+.22*Math.sin(this.corePulse/.12*Math.PI*2):0;i.material.opacity=(p?.62+.3*m:.28)*u,a.position.set(o.pos.x,.03,o.pos.z),a.material.opacity=.12*u}tierColor(e){return this.tierColors.get(e.color)??this.tierColors.set(e.color,new F(e.color)).get(e.color)}tierColors=new Map;dodgeGhost(e,t){let n=e.fighters.find(e=>e.dash?.presentation===`dodge-afterimage`&&Math.hypot(e.pos.x-t.pos.x,e.pos.z-t.pos.z)<1.5),r=n&&this.fighters.get(n.id)?.mesh.userData.samurai;if(!n||!r)return;let i=vr(r.model);return i.position.x+=t.pos.x-n.pos.x,i.position.z+=t.pos.z-n.pos.z,i}disposeObject(e){e.traverse(e=>{if(e instanceof V){if(e instanceof He&&e.skeleton.dispose(),e.userData.ghost)return;e.geometry.dispose(),(Array.isArray(e.material)?e.material:[e.material]).forEach(e=>e.dispose())}}),e.userData.ghostMaterial?.dispose(),this.scene.remove(e)}dropStaleAvatars(){let e=this.avatar?v(this.avatar.look):``;this.bench.some(t=>t.look&&t.look!==e)&&(this.bench=this.bench.filter(t=>{if(!t.look||t.look===e)return!0;for(let e of[t.mesh,t.ring,t.shadow,t.heal,t.barrier,t.calm])e?.traverse(e=>{e instanceof V&&(e instanceof He&&e.skeleton.dispose(),(Array.isArray(e.material)?e.material:[e.material]).forEach(e=>e.dispose()))});return!1}))}createFighter(e){let t=this.avatarOf(e),n=Ha(e.role,e.team,t),r=new V(new Nt(.77,.86,40),new B({color:e.team===this.viewing?Zs.ally:Zs.enemy,side:2,transparent:!0,opacity:.95,depthWrite:!1}));r.rotation.x=-Math.PI/2;let i=new V(new Mt(.68,20),new B({color:`#010611`,transparent:!0,opacity:.14,depthWrite:!1}));i.rotation.x=-Math.PI/2;let a=[];n.traverse(e=>{!(e instanceof V)||e.userData.samuraiVfx||e.userData.noFade||a.push({mesh:e,original:e.material})});let o=Js(),s=Ks(Ss.stance[e.role]),c=fr();this.scene.add(n,r,i,o,c),s&&this.scene.add(s);let l={mesh:n,role:e.role,team:e.team,look:t?v(t):``,ring:r,shadow:i,parts:a,fadeMaterials:[],heal:o,calm:s,healLevel:0,calmLevel:0,opacity:1,barrier:c};return this.dressFighter(l),l}draw(e,t,n){if(this.benchmarkMode?.skipRender)return;let r=this.water;r?.material.userData.shader&&(r.material.userData.shader.uniforms.harbourTime.value=n);let i=this.viewing=oe(e);qa(this.fighters,e.fighters,this.bench,this.seatActions),this.dropStaleAvatars();for(let r of e.fighters){let a=this.fighters.get(r.id);if(!a||!this.seatActions.ready(r))continue;a.mesh.position.set(r.pos.x,0,r.pos.z),a.mesh.rotation.y=Math.atan2(r.facing.x,r.facing.z),Ga(a.mesh,r,r.role===`samurai`&&e.phase!==`lobby`?e.elapsed:n,t);let o=a.mesh.userData.gait,s=this.footsteps.step(r.id,o);s>=0&&this.steps.length<32&&this.steps.push({id:r.id,foot:s,moving:o.moving,x:r.pos.x,z:r.pos.z,pudding:be(r.role,this.avatarOf(r),me())}),a.ring.position.set(r.pos.x,.045,r.pos.z),a.ring.visible=r.id===e.controlledId,a.ring.material.color.copy(r.team===i?Zs.ally:Zs.enemy),a.shadow.position.set(r.pos.x,.025,r.pos.z);let c=0;for(let t of e.effects)t.presentation===`guard-hit`&&Math.hypot(t.pos.x-r.pos.x,t.pos.z-r.pos.z)<.8&&(c=Math.max(c,t.life/t.maxLife));pr(a.barrier,!!r.blocking,r.pos.x,r.pos.z,Math.atan2(r.facing.x,r.facing.z),c,r.guardGauge/w.gauge,a.opacity,n);let l=(e,n,r)=>t>0?U.clamp(e+(n?t/r.fadeIn:-t/r.fadeOut),0,1):e;a.healLevel=l(a.healLevel,(r.healed??0)>0&&r.stun<=0,Ss.heal),a.calmLevel=l(a.calmLevel,(!!r.meditating||!!r.sprinting||(r.boost??0)>0)&&r.stun<=0,Ss.meditation),a.heal.position.set(r.pos.x,0,r.pos.z),Ys(a.heal,a.healLevel*a.opacity,n,this.camera,r.id),a.calm&&(a.calm.position.set(r.pos.x,0,r.pos.z),qs(a.calm,a.calmLevel*a.opacity,n,this.camera,r.id))}this.puck.position.set(e.puck.pos.x,0,e.puck.pos.z),this.puck.rotation.y=n*1.2,this.drawPuckState(e,t),this.drawReachFan(e,t);let a=new Set;for(let n of e.projectiles){let e=`p`+n.id;a.add(e);let r=this.transient.get(e);if(!r){if(n.kind===`bullet`){r=new H;let e=new V(new je(.12,8,6),new B({color:`#fff5ce`}));r.add(e);let t=new V(new _t(.055,.015,1.15,6),new B({color:n.team===0?`#ffc66e`:`#ff7762`,transparent:!0,opacity:.85,depthWrite:!1}));t.rotation.x=Math.PI/2,t.position.z=-.57,r.add(t)}else r=n.kind===`kamaitachi`?sc():new V(n.kind===`fire`?new nt(.39,1):new Ze(.2),new B({color:n.kind===`fire`?`#ff9d4a`:`#b7afff`}));this.transient.set(e,r),this.scene.add(r)}r.position.set(n.pos.x,n.kind===`kamaitachi`?0:n.height??1.1,n.pos.z),n.kind===`bullet`?(r.quaternion.setFromUnitVectors(new L(0,0,1),new L(n.velocity.x,n.verticalVelocity??0,n.velocity.z).normalize()),r.children[1].material.color.copy(tc[n.team])):n.kind===`kamaitachi`?(r.quaternion.setFromUnitVectors(new L(0,0,1),new L(n.velocity.x,0,n.velocity.z).normalize()),r.scale.setScalar(1+.22*(1-Math.max(0,Math.min(1,n.life/C.life))))):r.rotation.y+=t*10}for(let t of e.walls){let e=`w`+t.id;a.add(e);let r=this.transient.get(e);if(t.kind===`light`){r||(r=fs(t.width,t.id,n),this.transient.set(e,r),this.scene.add(r)),ms(r,t,n);continue}if(!r){r=new H;for(let e=0;e<6;e++){let n=1.6+e%3*.35,i=new V(new _t(.3,.53,n,5),new W({color:`#87e5ff`,emissive:`#1a809b`,emissiveIntensity:.3,metalness:.2,roughness:.18,transparent:!0,opacity:.84}));i.position.set(0,n/2,(e-2.5)*t.width/6),i.rotation.y=e,i.castShadow=this.quality.movingShadows,r.add(i)}this.transient.set(e,r),this.scene.add(r)}r.position.set(t.pos.x,0,t.pos.z),r.scale.y=Math.min(1,t.life*2);let i=j(t);r.rotation.y=Math.atan2(-i.z,i.x)}for(let t of e.effects){if(t.presentation===`samurai-iai`)continue;let n=`e`+t.id;a.add(n);let r=this.transient.get(n);if(t.presentation===`guard-hit`)continue;if(t.presentation===`guard-break`){r||(r=mr(t.id),this.transient.set(n,r),this.scene.add(r)),hr(r,t.pos.x,t.pos.z,Math.atan2(t.direction?.x??0,t.direction?.z??1),1-t.life/t.maxLife,t.maxLife);continue}if(t.presentation===`dodge-afterimage`){r||(r=this.dodgeGhost(e,t)??new H,this.transient.set(n,r),this.scene.add(r)),r.userData.ghostMaterial&&yr(r,1-t.life/t.maxLife);continue}if(t.presentation===`dodge-vanish`||t.presentation===`dodge-smoke`||t.presentation===`dodge-roll`||t.presentation===`dodge-step`){let e=t.presentation===`dodge-vanish`||t.presentation===`dodge-smoke`?`smoke`:`dust`;r||(r=gr(e,t.id),this.transient.set(n,r),this.scene.add(r)),_r(r,e,t.pos.x,t.pos.z,Math.min(1,(1-t.life/t.maxLife)*1.4),this.camera);continue}if(t.presentation===`kamaitachi-hold`){r||(r=sc(),this.transient.set(n,r),this.scene.add(r)),r.position.set(t.pos.x,0,t.pos.z),r.quaternion.setFromUnitVectors(new L(0,0,1),new L(t.direction?.x??1,0,t.direction?.z??0).normalize());let e=m+(t.maxLife-t.life);ec.forEach((t,n)=>{let i=r.children[n],a=e-t;i.visible=a>=0,i.material.opacity=oc*(1+.9*Math.max(0,1-a/.09))}),r.children[ec.length+1].visible=!1;continue}if(t.presentation===`wind`){if(!r){r=new H;let e=new V(new Nt(.9,1,40,1,0,Math.PI),new B({color:`#eaf6ff`,side:2,transparent:!0,opacity:.5,depthWrite:!1}));e.rotation.x=-Math.PI/2,r.add(e),this.transient.set(n,r),this.scene.add(r)}let e=1-t.life/t.maxLife,i=t.radius*(M.start+(1-M.start)*Math.min(1,e));r.position.set(t.pos.x,.45,t.pos.z),r.scale.set(i,1,i),r.rotation.y=Math.atan2(-(t.direction?.x??0),-(t.direction?.z??1)),r.children[0].material.opacity=.55*(1-e)*(1-e*.5);continue}if(t.presentation===`weapon-slash`||t.presentation===`staff-hit`){if(!r){let e=t.presentation===`staff-hit`;r=new H;let i=new V(new Nt(t.radius*(e?.92:.84),t.radius,28,1,.45,2.25),new B({color:e?`#ffe6b0`:t.team===0?`#c8edff`:`#ffb8a4`,side:2,transparent:!0,opacity:.7,depthWrite:!1}));i.rotation.x=Math.PI/2,i.position.y=e?.55:.8,r.add(i),this.transient.set(n,r),this.scene.add(r)}let e=1-t.life/t.maxLife;r.position.set(t.pos.x,0,t.pos.z),r.rotation.y=Math.atan2(t.direction?.x??0,t.direction?.z??1)+(e-.5)*.6;let i=r.children[0];i.material.opacity=Math.sin(Math.PI*e)*.72;continue}if(t.presentation===`clash-spark`){r||(r=ys(t.id),this.transient.set(n,r),this.scene.add(r)),r.position.set(t.pos.x,t.height??1.2,t.pos.z),xs(r,1-t.life/t.maxLife,t.radius,this.camera);continue}if(t.presentation===`shockwave`){r||(r=new V(new Nt(.86,1,64),new B({color:`#fff6d0`,side:2,transparent:!0,opacity:.95,depthWrite:!1})),r.rotation.x=-Math.PI/2,this.transient.set(n,r),this.scene.add(r));let e=1-t.life/t.maxLife,i=.6+(t.radius-.6)*e;r.position.set(t.pos.x,.09,t.pos.z),r.scale.setScalar(i),r.material.opacity=.95*(1-e)*(1-e);continue}let i=1-t.life/t.maxLife;if(!r){let e=(t.presentation===`crit-spark`?`#fff3c4`:t.presentation===`mid-spark`?`#8ff0ff`:t.presentation===`tip-spark`?`#8f9fb4`:``)||(t.kind===`heal`?`#a7ff91`:t.kind===`hit`?`#ffb089`:t.kind===`ice`?`#8ff0ff`:t.kind===`light`?`#ffe27a`:t.team===0?`#a6ecff`:`#ffc298`);r=new H;let i=[`slash`,`charge`].includes(t.kind),a=new V(new Nt(t.radius*.83,t.radius,i?28:48,1,0,i?Math.PI*1.3:Math.PI*2),new B({color:e,side:2,transparent:!0,opacity:.9,depthWrite:!1}));a.rotation.x=-Math.PI/2,a.position.y=t.kind===`heal`?.12:.65,r.add(a);for(let n=0;n<7;n++){let i=new V(new Ze(.095),new B({color:e,transparent:!0,opacity:1}));i.position.set(Math.cos(n*6.28/7)*t.radius,.4,Math.sin(n*6.28/7)*t.radius),r.add(i)}this.transient.set(n,r),this.scene.add(r)}r.position.set(t.pos.x,0,t.pos.z),r.scale.setScalar(.7+i*.5),r.rotation.y=i*2,r.children.forEach((e,t)=>{let n=e;n.material.opacity=1-i,t>0&&(e.position.y=.35+i*1.5)})}for(let[e,t]of this.transient)a.has(e)||(this.disposeObject(t),this.transient.delete(e));let o=e.fighters.find(t=>t.id===e.controlledId),s=e.phase===`lobby`;if(this.camera.position.sub(this.shake),this.shake.set(0,0,0),s){let e=this.camera.aspect;if(this.mapId===`colosseum`){let t=ae(this.mapId).radius;this.target.set(10,7,-6),this.camera.position.set(-t*.62,e<1.6?11:9.5,t*.54)}else this.target.set(35,8,-3),this.camera.position.set(-P.width/2-9+Math.sin(n*.06)*.5,e<1.6?13:11,12);this.camera.lookAt(this.target)}else{let e=new L(Math.sin(this.yaw),0,Math.cos(this.yaw)),n=new L(o.pos.x,0,o.pos.z),r=n.clone().addScaledVector(e,-8);r.y=1.56+this.pitch*3;let i=7;if(this.mapId===`colosseum`){let e=ae(this.mapId).radius-.9,t=Math.hypot(r.x,r.z);t>e&&(r.x*=e/t,r.z*=e/t);let a=Math.hypot(r.x-n.x,r.z-n.z);r.y+=Math.max(0,4-a)*.7,i=U.lerp(.65,7,U.smoothstep(a,.4,4))}let a=n.clone().addScaledVector(e,i);a.y=1.8;let s=this.lastPhase===`lobby`||this.lastPhase===``?1:1-Math.exp(-t*10);this.camera.position.lerp(r,s),this.target.lerp(a,s),this.camera.lookAt(this.target)}if(!s){let t=ie(o),r=Math.max(t.f>0?(.05+.07*t.s)*t.f:o.hitStop>0?.03:0,re(e));r>0&&(this.shake.set(Math.sin(n*80)*r,Math.cos(n*63)*r,0),this.camera.position.add(this.shake),this.camera.lookAt(this.target))}this.lastPhase=e.phase;let c=new Set(e.fighters.filter(e=>e.dash?.presentation===`dodge-vanish`).map(e=>e.id));for(let[t,n]of this.fighters){let r=n.mesh.position.distanceTo(this.camera.position),i=s||t===e.controlledId?1:U.smoothstep(r,4.5,6.5);for(let e of n.fadeMaterials){let t=Jo(e,i,this.quality.fadeWhenNeeded);e.alphaHash!==t&&(e.alphaHash=t,e.needsUpdate=!0),e.opacity=i}n.mesh.visible=i>.015&&!c.has(t)&&!this.benchmarkMode?.hideFighters,n.opacity=i}for(let t of e.fighters)if(t.role===`gunner`&&t.stun<=0){let n=this.fighters.get(t.id)?.mesh;if(!n)continue;t.id===e.controlledId&&!s?Ka(n,new L(t.pos.x+t.facing.x*12,1.2,t.pos.z+t.facing.z*12)):Ka(n,new L(e.puck.pos.x,.25,e.puck.pos.z))}this.quality.shadow===`once`?this.sceneryReady&&!this.shadowBaked&&(this.renderer.shadowMap.needsUpdate=!0,this.shadowBaked=!0):this.quality.shadow===`hz30`&&(this.shadowElapsed+=t,this.shadowElapsed>=1/30&&(this.renderer.shadowMap.needsUpdate=!0,this.shadowElapsed%=1/30)),this.benchmarkMode?.direct?(this.renderer.info.reset(),this.renderer.setRenderTarget(null),this.renderer.render(this.scene,this.camera)):this.effects.render(t)}gunAim(e){let t=e.fighters.find(t=>t.id===e.controlledId);this.camera.updateMatrixWorld(!0);let n=this.camera.position.clone(),r=this.camera.getWorldDirection(new L).multiplyScalar(100),i=ge(e,n,r,t.team,0),a=n.clone().addScaledVector(r,i?.t??1),o=this.fighters.get(t.id)?.mesh;return o&&(o.position.set(t.pos.x,0,t.pos.z),o.rotation.y=Math.atan2(t.facing.x,t.facing.z)),{origin:(o?Ka(o,a):void 0)??{x:t.pos.x,y:1.2,z:t.pos.z},target:a}}minimap(e,t){let r=e.getContext(`2d`),i=e.width,a=e.height,o=ae(t.mapId),c=o.shape===`circle`;r.clearRect(0,0,i,a);let l=Math.min(i-20,a-20)/(o.radius*2),u=c?l:(i-20)/o.width,d=c?l:(a-20)/o.depth,f=e=>i/2+e*u,p=e=>a/2+e*d;r.strokeStyle=`#ffffff35`,r.lineWidth=1,r.fillStyle=`#b28b5720`,r.beginPath(),c?r.arc(i/2,a/2,o.radius*u,0,Math.PI*2):r.rect(10,10,i-20,a-20),r.fill(),r.stroke(),r.beginPath(),r.moveTo(i/2,p(-o.depth/2)),r.lineTo(i/2,p(o.depth/2)),r.stroke(),r.beginPath(),r.arc(i/2,a/2,c?5*u:12,0,Math.PI*2),r.stroke();for(let e of[0,1])r.strokeStyle=e===0?`#83dbff`:`#ff907d`,r.lineWidth=3,r.beginPath(),r.moveTo(f((e?1:-1)*o.goalX),p(-o.goalWidth/2)),r.lineTo(f((e?1:-1)*o.goalX),p(o.goalWidth/2)),r.stroke();for(let e of t.walls){let t=j(e),n=-t.z*e.width/2,i=t.x*e.width/2;r.strokeStyle=e.kind===`light`?`#ffe27a`:`#b1f1ff`,r.lineWidth=3,r.beginPath(),r.moveTo(f(e.pos.x-n),p(e.pos.z-i)),r.lineTo(f(e.pos.x+n),p(e.pos.z+i)),r.stroke()}for(let e of t.fighters){let n=e.id===t.controlledId;r.fillStyle=e.stun>0?`#7b8194`:n?`#c6ff8b`:e.team===0?`#85dcff`:`#ff897d`,r.beginPath(),r.arc(f(e.pos.x),p(e.pos.z),n?4:3,0,Math.PI*2),r.fill(),n&&(r.strokeStyle=`#c6ff8b77`,r.lineWidth=1,r.beginPath(),r.arc(f(e.pos.x),p(e.pos.z),7,0,Math.PI*2),r.stroke())}let m=n(Math.hypot(t.puck.velocity.x,t.puck.velocity.z));r.globalAlpha=!m.blink||Math.floor(t.elapsed/(s.blinkPeriod/2))%2==0?1:.35,r.fillStyle=m.color,r.beginPath(),r.arc(f(t.puck.pos.x),p(t.puck.pos.z),m.dot,0,Math.PI*2),r.fill(),r.globalAlpha=1}};export{pc as GameView};