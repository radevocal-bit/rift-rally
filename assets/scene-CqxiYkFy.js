import{$ as e,$n as t,An as n,Bn as r,C as i,Cn as a,Dt as o,E as s,Et as c,F as l,Fn as u,G as d,Gn as f,H as p,Hn as m,I as h,In as g,J as _,L as v,Ln as y,M as b,Mn as x,Mt as S,Nt as C,On as w,Ot as T,P as E,Pn as D,Q as O,R as ee,St as te,T as k,Tt as A,U as ne,V as j,Vn as re,W as M,Wn as N,X as ie,Y as ae,Yn as oe,Z as se,_ as ce,at as le,b as P,bt as F,d as ue,dt as I,er as L,ft as de,g as fe,gt as pe,h as me,ht as R,it as he,jn as ge,jt as _e,k as ve,kn as ye,kt as be,l as xe,m as Se,mt as z,ot as Ce,pt as B,q as V,qn as we,rr as Te,rt as Ee,tt as De,v as H,vn as Oe,vt as ke,w as Ae,x as je,xn as Me,yt as Ne,zn as Pe,zt as Fe}from"./avatar-CaObH7tW.js";import{$ as Ie,Ct as U,I as Le,It as Re,Lt as ze,M as Be,Pt as Ve,R as He,Rt as Ue,Vt as We,X as Ge,Y as Ke,_t as qe,bt as Je,c as Ye,ct as Xe,d as Ze,dt as Qe,f as $e,ht as et,i as tt,it as nt,k as rt,l as it,lt as at,n as ot,ot as st,p as ct,pt as lt,rt as ut,st as dt,u as ft,ut as pt,vt as mt,wt as ht,xt as gt,yt as _t,zt as vt}from"./index-D5xlJ7s3.js";import{i as yt,n as bt,r as xt,t as St}from"./three.module-BNWPDXo8.js";import{cpuYuruReady as Ct,grandpaReady as wt,loadAllCpuYuru as Tt,loadGrandpa as Et,seatLookReady as Dt}from"./pudding-D3mJE5fv.js";import{loadYuruParty as Ot,yuruPartyReady as kt}from"./yuru-party-ZVP_8DMg.js";import{loadSamuraiModel as At,samuraiModelReady as jt,t as Mt}from"./samurai-6bVovsmG.js";import{a as Nt,aimGuns as Pt,animateCharacter as Ft,c as It,createCharacter as Lt,i as Rt,l as zt,n as Bt,o as Vt,r as Ht,s as Ut,t as Wt,u as Gt}from"./characters-x4nQZNW9.js";function Kt(e,t){let n=(e,t,n)=>e+Math.max(-1,Math.min(1,e/t))*(n-t);return{x:n(e,17,U.width/2),z:n(t,10.5,U.depth/2)}}var qt=e=>e.isMesh===!0,Jt=`city-lamp-light`,Yt=e=>e.isMeshStandardMaterial===!0;async function Xt(t){let n=new V;n.name=`blender-harbour-city`;let r=new xe,a=new Pe,o=await fetch(`./models/twilight-city-layout.json`);if(!o.ok)throw Error(`City layout unavailable`);let s=await o.json(),c=e=>({...e,...Kt(e.x,e.z)}),l={...s,palace:c(s.palace),blocks:s.blocks.map(e=>({...e,placements:e.placements.map(c)}))},[u,d,f,p]=await Promise.all([r.loadAsync(`./models/twilight-infrastructure.glb`),r.loadAsync(`./models/monumental-palace-v3.glb`),Promise.all(l.blocks.map(e=>r.loadAsync(`./models/${e.model}.glb`))),Promise.all([`weathered-limestone-v3`,`aged-oak-v3`,`lime-plaster-v3`].map(e=>a.loadAsync(`./textures/${e}.png`)))]),m=zt(),h=p.map(e=>(e.colorSpace=w,e.wrapS=e.wrapT=Me,e.anisotropy=8,e)),g=h.map(e=>{let t=e.clone();return t.colorSpace=``,t.needsUpdate=!0,t}),_=new Set;for(let e of[u.scene,d.scene,...f.map(e=>e.scene)])e.traverse(e=>{if(qt(e)){e.receiveShadow=!0;for(let t of Array.isArray(e.material)?e.material:[e.material]){if(!Yt(t)||_.has(t))continue;_.add(t),t.envMapIntensity=.25;let e=t.name;/WarmGlass/i.test(e)?(t.color.set(`#6b391d`),t.emissive.set(`#ff9b43`),t.emissiveIntensity=1.05,t.roughness=.35):/Recess|Shadow|DarkStone/i.test(e)?(t.normalMap=null,t.map=h[0],t.bumpMap=g[0],t.bumpScale=.055):/Stone|limestone/i.test(e)?(t.normalMap=null,t.map=h[0],t.bumpMap=g[0],t.bumpScale=.095,t.roughness=.88,t.color.lerp(new i(`#c1b9a8`),.48)):/Oak|Wood|walnut/i.test(e)?(t.normalMap=null,t.map=h[1],t.bumpMap=g[1],t.bumpScale=.045,t.roughness=.82,t.color.lerp(new i(`#aea094`),.58)):/Plaster/i.test(e)?(t.normalMap=null,t.map=h[2],t.bumpMap=g[2],t.bumpScale=.035,t.roughness=.94,t.color.lerp(new i(`#d0bbaa`),.44)):/Slate|RoofTile/i.test(e)?(t.normalMap=null,t.map=m.slate,t.bumpMap=m.slate,t.bumpScale=.045,t.roughness=.66,t.color.set(`#3b5266`)):/Linen|Canvas|Teal/i.test(e)&&(t.normalMap=null,t.map=m.cloth,t.bumpMap=m.cloth,t.bumpScale=.012,t.roughness=.94),/Leaves|Flowers/i.test(e)&&(t.side=2,t.roughness=.86),t.onBeforeCompile=e=>{e.fragmentShader=e.fragmentShader.replace(`#include <normal_fragment_maps>`,`
          vec3 stableSurfaceNormal=normal;
          #include <normal_fragment_maps>
          if(!(dot(normal,normal)>0.5))normal=stableSurfaceNormal;
        `)},t.customProgramCacheKey=()=>`city-stable-normal-v1`,t.needsUpdate=!0}}});u.scene.updateMatrixWorld(!0),u.scene.traverse(e=>{if(!qt(e))return;e.castShadow=!/StoneRecess|Flowers/.test(e.name);let t=e.geometry.clone().applyMatrix4(e.matrixWorld),n=t.getAttribute(`position`);for(let e=0;e<n.count;e++){let t=Kt(n.getX(e),n.getZ(e));n.setXYZ(e,t.x,n.getY(e),t.z)}t.computeVertexNormals(),/Stone|Approach/i.test(e.name)&&Gt(t,.25),t.applyMatrix4(e.matrixWorld.clone().invert()),t.computeBoundingBox(),t.computeBoundingSphere(),e.geometry.dispose(),e.geometry=t}),n.add(u.scene);let v=new fe(1,1,1),y=new F({color:`#9d998f`,map:h[0],bumpMap:g[0],bumpScale:.08,roughness:.92}),b=[];function x(t,r,i){t.updateMatrixWorld(!0);let a=new A,o=new B,s=new me().setFromObject(t),c=s.getSize(new L),l=s.getCenter(new L);for(let e of r){let t=new L(l.x*e.scale,0,l.z*e.scale).applyAxisAngle(new L(0,1,0),e.angle),n=e.y-.01,r=-5.35;a.position.set(e.x+t.x,(n+r)/2,e.z+t.z),a.rotation.set(0,e.angle,0),a.scale.set(c.x*e.scale,n-r,c.z*e.scale),a.updateMatrix();let i=v.clone().applyMatrix4(a.matrix);Gt(i,.25),b.push(i)}t.traverse(t=>{if(!qt(t))return;let s=new e(t.geometry,t.material,r.length);s.name=i,s.castShadow=!0,s.receiveShadow=!0,r.forEach((e,n)=>{a.position.set(e.x,e.y,e.z),a.rotation.set(0,e.angle,0),a.scale.setScalar(e.scale),a.updateMatrix(),o.multiplyMatrices(a.matrix,t.matrixWorld),s.setMatrixAt(n,o)}),s.computeBoundingSphere(),n.add(s)})}l.blocks.forEach((e,t)=>x(f[t].scene,e.placements,e.model)),x(d.scene,[l.palace],`monumental-palace`);let C=new z(ue(b,!1),y);C.name=`grounded-building-foundations`,C.receiveShadow=!0,C.castShadow=!0,C.geometry.computeBoundingSphere(),n.add(C),b.forEach(e=>e.dispose()),v.dispose(),n.userData={authoredWith:`Blender 5.2`,ready:!0,version:3,archetypes:l.blocks.length,buildings:l.blocks.reduce((e,t)=>e+t.placements.length,0),palace:l.palace,court:{width:U.width,depth:U.depth}},t.add(n);for(let[e,n,r,i,a]of[[4,5,-19,22,19],[16,5,20,24,22],[-24,4,13,16,18],[39,8,-20,34,32]]){let o=Kt(e,r),s=new S(`#ffad65`,i,a,1.6);s.position.set(o.x,n,o.z),s.name=Jt,t.add(s)}}function Zt(e){let t=new z(new _e(780,680),new F({color:`#273c38`,roughness:1}));t.rotation.x=-Math.PI/2,t.position.y=-5.3,t.receiveShadow=!0,t.name=`terraced-valley`,e.add(t);let n=new F({color:`#173b4b`,roughness:.27,metalness:.6,envMapIntensity:.75});n.onBeforeCompile=e=>{e.uniforms.harbourTime={value:0},n.userData.shader=e,e.vertexShader=e.vertexShader.replace(`#include <common>`,`#include <common>
varying vec3 waterPosition;`).replace(`#include <worldpos_vertex>`,`#include <worldpos_vertex>
waterPosition=(modelMatrix*vec4(transformed,1.0)).xyz;`),e.fragmentShader=e.fragmentShader.replace(`#include <common>`,`#include <common>
varying vec3 waterPosition;uniform float harbourTime;`).replace(`#include <normal_fragment_maps>`,`#include <normal_fragment_maps>
        float w1=sin(waterPosition.x*2.2+waterPosition.z*1.7+harbourTime*.7);
        float w2=cos(waterPosition.x*.81-waterPosition.z*3.1-harbourTime*.43);
        normal=normalize(normal+vec3(w1*.10,w2*.075,0.0));`)};let r=new z(new _e(134,220),n),i=Kt(76,95);r.rotation.x=-Math.PI/2,r.position.set(i.x,-2.6,i.z),r.name=`harbour-water`,e.add(r)}function Qt(e){if(e.getObjectByName(`EpicCity_TwilightSky`))return;let t=(e,t)=>{let n=I.degToRad(e),r=I.degToRad(t);return new L(Math.cos(r)*Math.cos(n),Math.sin(r),Math.cos(r)*Math.sin(n))},n=t(-25,25),r=t(25,20),a=new ge({name:`EpicCity_TwilightSkyMaterial`,side:1,depthTest:!1,depthWrite:!1,fog:!1,toneMapped:!0,uniforms:{uZenith:{value:new i(`#142b59`)},uMiddle:{value:new i(`#36648c`)},uHorizon:{value:new i(`#829aaa`)},uBelow:{value:new i(`#566e8a`)},uBlueDirection:{value:n},uAmberDirection:{value:r},uBlueRadius:{value:I.degToRad(5)},uAmberRadius:{value:I.degToRad(6.5)},uBlueTint:{value:new i(`#c3e8f2`)},uAmberTint:{value:new i(`#efb983`)}},vertexShader:`
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
    `}),o=new y(650,48,32),s=new z(o,a);s.name=`EpicCity_TwilightSky`,s.renderOrder=-1e4,s.frustumCulled=!1,s.castShadow=!1,s.receiveShadow=!1;let c=new L;s.onBeforeRender=(e,t,n)=>{n.getWorldPosition(c),s.position.copy(c),s.updateMatrixWorld(!0)},s.userData.dispose=()=>{s.removeFromParent(),o.dispose(),a.dispose()},e.add(s)}function $t(e){let n=new V;n.name=`rift-arena`,e.add(n);let r=U.width/2,i=U.depth/2,o=U.goalWidth/2,s=U.width/34,c=U.depth/21;n.userData={theme:`twilight-royal-approach`,courtWidth:U.width,courtDepth:U.depth,goalWidth:U.goalWidth,area:U.width*U.depth,tallSceneryInnerX:r+10,tallSceneryInnerZ:i+10.5};let l=(e,t={})=>new F({color:e,roughness:.91,metalness:.02,...t}),u=l(14999251),d=l(15853526),f=l(7892576),m=l(6505267),h=l(9725249),g=l(3749691,{metalness:.5}),_=l(12558946,{metalness:.45,roughness:.65}),v=l(3767956,{side:2}),y=l(11029589,{side:2}),b=l(15058812);l(7374940);let x=new R({color:7981525}),S=new R({color:15114373}),C=l(11968633,{metalness:.25,roughness:.8}),T=new R({color:16032847}),E=new R({color:16770976}),D=l(15119979,{emissive:16760166,emissiveIntensity:.8,roughness:.4}),O=zt(),ee=new Pe().load(`./textures/weathered-limestone-v3.png`);ee.colorSpace=w,ee.wrapS=ee.wrapT=Me,ee.anisotropy=8;let te=e=>{let t=e.clone();return t.colorSpace=``,t.needsUpdate=!0,t},A=(e,t,n,r)=>{e.map=t,e.bumpMap=te(t),e.bumpScale=r,e.userData.worldScale=n};for(let e of[u,d])A(e,ee,.22,.045);for(let e of[m,h])A(e,O.wood,.42,.027);for(let e of[v,y])e.map=O.cloth,e.bumpMap=te(O.cloth),e.bumpScale=.012,e.roughness=.83;let ne=new fe(1,1,1);new ie(1,1);function j(e,t,r,i,a,o=n){let s=new z(e,t);return s.position.set(r,i,a),s.receiveShadow=!0,s.castShadow=t instanceof F,o.add(s),s}function M(e,t,r,i,a,o,s,c=n){let l=j(ne,s,e,t,r,c);return l.scale.set(i,a,o),l}function N(e,t,r,i,a,o,s,c=20,l=n){return j(new ve(i,a,o,Math.max(12,c)),s,e,t,r,l)}function ae(e,t,n,r,i,a=0){let o=M(e,.016,t,n,.018,r,i);return o.rotation.y=a,o}function oe(e,t,n,r,i,o=0,s=Math.PI*2){let c=j(new a(n-r/2,n+r/2,80,1,o,s),i,e,.031,t);return c.rotation.x=-Math.PI/2,c}function se(e,t,r,i,a,o,s=0,c=n){let l=new V;l.position.set(e,t,r),l.rotation.y=s,c.add(l);let u=new _e(i,a,10,12),d=u.getAttribute(`position`);for(let e=0;e<d.count;e++){let t=(d.getX(e)+i/2)/i,n=(a/2-d.getY(e))/a;d.setXYZ(e,d.getX(e),-n*a+(n>.99?.26*(1-Math.abs(t-.5)*2):0),Math.sin(t*Math.PI*5+n*.8)*.048*n)}u.computeVertexNormals(),j(u,o,0,0,0,l),M(0,-a*.44,.055,i*.065,a*.88,.018,b,l);let f=j(new je(i*.18,6),b,0,-a*.4,.025,l);f.rotation.z=Math.PI/6,M(0,.045,0,i+.22,.09,.1,m,l)}function ce(e,r,i,a,o=n){let s=new V;s.position.set(e,r,i),s.scale.setScalar(a),o.add(s);let c=[new t(.36,0),new t(.43,.15),new t(.48,.55),new t(.44,.94),new t(.37,1.07)];j(new De(c,18),h,0,0,0,s),N(0,1.055,0,.365,.365,.04,m,18,s);for(let e of[.1,.26,.84,1.01]){let t=j(new re(e<.2||e>1?.395:.458,.025,5,20),g,0,e,0,s);t.rotation.x=Math.PI/2}}function P(e,t,r,i=n){let a=new V;a.position.set(e,t,r),i.add(a),M(0,0,0,.27,.4,.27,g,a),M(0,0,0,.225,.3,.285,D,a),M(0,0,0,.285,.3,.225,D,a);for(let e of[-.135,.135])for(let t of[-.135,.135])M(e,0,t,.035,.43,.035,g,a);N(0,.27,0,.04,.23,.18,g,4,a);let o=j(new re(.1,.018,4,14),g,0,.44,0,a);o.rotation.y=Math.PI/2}function ue(e,t){N(e,.18,t,.47,.55,.38,f,8),N(e,.75,t,.18,.26,1.1,g,8),N(e,1.38,t,.43,.22,.3,_,8);let n=j(new k(.28,.75,7),T,e,1.86,t);n.rotation.z=.13;let r=j(new k(.16,.54,6),E,e-.04,1.81,t+.03);r.rotation.z=-.12}Qt(e),Zt(e),M(0,-.95,0,U.width+22,1.5,U.depth+19,f),M(0,-.24,0,U.width+22.5,.24,U.depth+19.5,u),M(0,-.33,0,U.width+3.9,.56,U.depth+3.9,d),M(0,-.135,0,U.width+2.2,.14,U.depth+2.2,f);let I=new Pe().load(`./textures/limestone-court-v2.png`);I.wrapS=I.wrapT=Me,I.repeat.set(6*s,4*c),I.colorSpace=w,I.anisotropy=8;let L=j(new _e(U.width,U.depth),l(11778756,{map:I,bumpMap:te(I),bumpScale:.12,roughness:.74,metalness:.04}),0,-.03,0);L.rotation.x=-Math.PI/2,L.name=`playable-stone-floor`,L.castShadow=!1;for(let e of[-i-.6,i+.6])for(let t=0;t<U.width;t++)M(-r+.5+t,-.035,e,.96,.16,1,u);for(let e of[-r-.6,r+.6])for(let t=-i;t<=i;t++)M(e,-.035,t,1,.16,.96,d);for(let e of[-i+.18,i-.18])ae(0,e,U.width-.15,.09,C);for(let e of[-6.2*s,6.2*s])ae(e,0,U.depth-.4,.035,C,Math.PI/2);for(let e=-i+.8;e<=i-.8;e+=1.6)if(Math.abs(e)>3.8*c){let t=ae(0,e,.13,.13,C);t.rotation.y=Math.PI/4}oe(0,0,3.2*c,.09,C),oe(0,0,2.98*c,.025,C),oe(0,0,.93,.065,C);for(let e=0;e<8;e++){let t=e*Math.PI/4,n=3.45*c,r=ae(Math.sin(t)*n,Math.cos(t)*n,.31,.31,C);r.rotation.y=t+Math.PI/4,ae(Math.sin(t)*2.65*c,Math.cos(t)*2.65*c,.38,.065,C,Math.PI/2-t)}let de=ae(0,0,.42,.42,b);de.rotation.y=Math.PI/4;for(let e of[-1,1]){let t=e<0?v:y,a=e<0?x:S;oe(e*(r-.25),0,o+1.1,.075,a,e<0?-Math.PI/2:Math.PI/2,Math.PI).scale.x=.74;for(let t of[-i-.22,i+.22]){M(e*(r/2+.2),.2,t,r+.1,.46,.28,u),M(e*(r/2+.2),.43,t,r+.1,.035,.3,_);for(let n=.55;n<r;n+=1.2)M(e*n,.22,t,.025,.32,.287,f);ae(e*(r/2-.05),t-Math.sign(t)*.4,r-.15,.1,a)}let s=i-o;for(let t of[-(i+o)/2,(i+o)/2])M(e*(r+.45),.2,t,.3,.46,s,u),M(e*(r+.45),.43,t,.32,.035,s,_);let c=new V;n.add(c),c.name=e<0?`azure-goal`:`ember-goal`,c.userData={goalPlane:e*r,opening:U.goalWidth};for(let t of[-o,o]){M(e*(r+.22),1.14,t,.23,2.35,.23,d,c);for(let n of[.3,.9,1.5,2.1])M(e*(r+.22),n,t,.265,.1,.265,u,c);M(e*(r+.07),1.18,t,.05,2.25,.1,a,c)}M(e*(r+.22),2.33,0,.23,.18,U.goalWidth+.22,d,c),M(e*(r+.08),2.33,0,.055,.07,U.goalWidth+.2,_,c);for(let t of[-o,o])M(e*(r+.22),2.48,t,.31,.18,.35,u,c);M(e*(r+1),-.04,0,1.7,.04,U.goalWidth-.02,t,c),se(e*(r+1.9),3.7,o+1.05,1.2,1.25,t,e<0?Math.PI/2:-Math.PI/2,c),N(e*(r+1.9),1.84,o+1.05,.06,.08,3.78,g,12,c),N(e*(r+1.9),.1,o+1.05,.22,.27,.24,f,12,c);let l=[];for(let t=-o;t<=o;t+=.47)l.push(e*(r+1.78),.1,t,e*(r+1.78),2.23,t);for(let t=.2;t<2.3;t+=.35)l.push(e*(r+1.78),t,-o,e*(r+1.78),t,o);let m=new H;m.setAttribute(`position`,new p(l,3)),c.add(new le(m,new he({color:12167038,transparent:!0,opacity:.4})));for(let t of[-o-1.8,o+1.8])ue(e*(r+2.4),t)}for(let e of[-1,1]){for(let t of[-19,-5,17]){let{x:n,z:r}=Kt(t,e*17.6);M(n,.2,r,3.4,.55,1.2,f),M(n,.52,r,3.6,.12,1.4,u)}for(let[t,n]of[[-23,.9],[-21,.68],[10,.87],[25,1.1]]){let{x:r,z:i}=Kt(t,e*18.2);ce(r,-.05,i,n),n>.85&&P(r,n*1.08+.15,i)}for(let t of[-22,22]){let{x:n,z:r}=Kt(t,e*16.5);N(n,1.7,r,.055,.075,3.5,g,10),se(n,3.35,r,1,1.7,n<0?v:y,e<0?0:Math.PI)}}return en(n),Xt(e)}function en(t){t.updateWorldMatrix(!0,!0);let n=t.matrixWorld.clone().invert(),r=new Map;t.traverse(t=>{if(!(t instanceof z)||t instanceof e||Array.isArray(t.material)||t.material.transparent)return;let n=`${t.material.uuid}:${t.castShadow}:${t.receiveShadow}:${t.renderOrder}:${t.layers.mask}`,i=r.get(n)||[];i.push(t),r.set(n,i)});let i=new Set;for(let e of r.values()){if(e.length<2)continue;let r=e.map(e=>{let t=e.geometry.index?e.geometry.toNonIndexed():e.geometry.clone();return t.applyMatrix4(new B().multiplyMatrices(n,e.matrixWorld)),e.material.userData.worldScale&&Gt(t,e.material.userData.worldScale),t.clearGroups(),t}),a=ue(r,!1);if(r.forEach(e=>e.dispose()),!a)continue;a.computeBoundingBox(),a.computeBoundingSphere();let o=e[0],s=new z(a,o.material);s.name=`arena-batch`,s.castShadow=o.castShadow,s.receiveShadow=o.receiveShadow,s.renderOrder=o.renderOrder,s.layers.mask=o.layers.mask,t.add(s);for(let t of e)i.add(t.geometry),t.removeFromParent()}t.traverse(e=>{e instanceof z&&i.delete(e.geometry)}),i.forEach(e=>e.dispose())}var tn=ht.colosseum;function nn(e){return()=>(e=Math.imul(e,1664525)+1013904223>>>0,e/4294967296)}function rn(){let e=document.createElement(`canvas`);e.width=e.height=1024;let t=e.getContext(`2d`),n=nn(4815);t.fillStyle=`#8f7456`,t.fillRect(0,0,1024,1024);for(let e=0;e<700;e++){let r=n()*1024,i=n()*1024,a=8+n()*80;for(let n of[-1024,0,1024])for(let o of[-1024,0,1024]){let s=r+n,c=i+o;if(s+a<0||c+a<0||s-a>1024||c-a>1024)continue;let l=t.createRadialGradient(s,c,0,s,c,a);l.addColorStop(0,e%2?`#d4b78e28`:`#392e2928`),l.addColorStop(1,`#00000000`),t.fillStyle=l,t.fillRect(s-a,c-a,a*2,a*2)}}for(let e=0;e<62e3;e++){let r=n()*1024,i=n()*1024,a=.35+n()*1.4;t.fillStyle=e%3==0?`#dfc9a13b`:`#342b292b`,t.fillRect(r,i,a,a*.7)}for(let e=0;e<1600;e++){let e=n()*1024,r=n()*1024,i=.7+n()*2;t.fillStyle=`#4c423d50`,t.beginPath(),t.ellipse(e,r,i*1.5,i,.6,0,Math.PI*2),t.fill(),t.fillStyle=`#b5a18b65`,t.fillRect(e-i,r-i*.4,i*2,.7)}let r=new P(e);return r.colorSpace=w,r.wrapS=r.wrapT=Me,r.repeat.set(6,6),r.anisotropy=8,r.name=`Colosseum packed earth`,r}function an(e,t,n,r=.5){let i=new H().setFromPoints(t);e.add(new Ee(i,new he({color:n,transparent:!0,opacity:r,depthWrite:!1})))}function on(t){let n=nn(65123),r=[],a=[4609910,7552059,7823433,10127200,3755078,11182225,5850724,3359059],o=(e,t)=>Math.abs(Math.atan2(Math.sin(e-t),Math.cos(e-t)));for(let e=0;e<8;e++){let t=34.48+e*1.86,i=11+e*1.22+.46,s=Math.floor(2*Math.PI*t/1.05);for(let e=0;e<s;e++){let c=(e+.5)*Math.PI*2/s;o(c,Math.round(c/(Math.PI/6))*Math.PI/6)*t<1.08||t>=39.2&&(o(c,-Math.PI/2)<16*Math.PI/180||o(c,Math.PI/2)<11*Math.PI/180)||t>=44.5&&o(c,59*Math.PI/180)<.075||n()<.14||r.push({x:Math.cos(c)*t,y:i,z:Math.sin(c)*t,angle:-c-Math.PI/2,color:a[Math.floor(n()*a.length)],size:.88+n()*.24})}}let s=new e(new ve(.21,.28,.66,7),new F({roughness:1}),r.length),c=new e(new y(.18,7,5),new F({roughness:1}),r.length),l=new e(new ve(.075,.085,.53,5),new F({roughness:1}),r.length*2),u=new A,d=new i;r.forEach((e,t)=>{u.position.set(e.x,e.y+.32*e.size,e.z),u.rotation.set(0,e.angle,0),u.scale.set(e.size,e.size,e.size),u.updateMatrix(),s.setMatrixAt(t,u.matrix),s.setColorAt(t,d.setHex(e.color)),u.position.y=e.y+.86*e.size,u.updateMatrix(),c.setMatrixAt(t,u.matrix),c.setColorAt(t,d.setHSL(.07+n()*.04,.19+n()*.15,.37+n()*.28));for(let n=0;n<2;n++){let r=n?1:-1,i=t%9==0;u.position.set(e.x+Math.cos(e.angle)*r*.26,e.y+(i?.72:.3),e.z-Math.sin(e.angle)*r*.26),u.rotation.set(i?.4:-.6,e.angle,r*(i?.5:.12)),u.updateMatrix(),l.setMatrixAt(t*2+n,u.matrix),l.setColorAt(t*2+n,d.setHex(e.color))}}),s.name=`Colosseum audience clothing`,c.name=`Colosseum audience faces`,l.name=`Colosseum audience arms`;for(let e of[s,c,l])e.receiveShadow=!0,e.castShadow=!1,e.computeBoundingSphere(),t.add(e);t.userData.spectators=r.length}async function sn(e){Qt(e);let t=new V;t.name=`rift-arena`,t.userData={mapId:`colosseum`,radius:tn.radius,area:tn.area},e.add(t);let n=rn(),r=new z(new je(tn.radius+2,192),new F({map:n,bumpMap:n,bumpScale:.065,roughness:.98,color:`#c4b4a0`}));r.name=`Colosseum circular soil`,r.rotation.x=-Math.PI/2,r.position.y=-.035,r.receiveShadow=!0,t.add(r);let i=new R({color:`#d9cab1`,transparent:!0,opacity:.29,side:2,depthWrite:!1});for(let[e,n]of[[5,.065],[tn.radius-1.4,.07]]){let r=new z(new a(e-n,e,192),i);r.rotation.x=-Math.PI/2,r.position.y=.003,t.add(r)}let o=new z(new je(.3,24),i);o.rotation.x=-Math.PI/2,o.position.y=.004,t.add(o),an(t,[new L(0,.005,-tn.radius+1.4),new L(0,.005,tn.radius-1.4)],`#dac9a8`,.28);let s=[];for(let e of[-1,1]){let n=e<0?`#76caff`:`#ee9565`,r=e*tn.goalX,o=new V;o.name=e<0?`Azure scoring gate`:`Ember scoring gate`,o.position.x=e*(tn.radius+5.7),s.push(o);let l=new z(new fe(.3,8.1,15.1),new F({color:`#282b2a`,roughness:.94}));l.position.y=4,o.add(l);let u=new F({color:`#434847`,metalness:.55,roughness:.67});for(let t=-7;t<=7;t+=.7){let n=new z(new fe(.25,7.8,.09),u);n.position.set(-e*.28,3.9,t),o.add(n)}for(let t of[1,3,5,7]){let n=new z(new fe(.32,.13,14.8),u);n.position.set(-e*.3,t,0),o.add(n)}let d=new z(new ve(1.05,1.05,.12,8),new F({color:n,roughness:.72,emissive:n,emissiveIntensity:.12}));d.rotation.z=Math.PI/2,d.position.set(-e*.5,4.1,0),o.add(d),t.add(o);let f=new z(new _e(.14,tn.goalWidth),new R({color:n,transparent:!0,opacity:.65,depthWrite:!1}));f.rotation.x=-Math.PI/2,f.position.set(r,.018,0),t.add(f);for(let i of[-tn.goalWidth/2,tn.goalWidth/2]){let a=new z(new c(.24),new F({color:n,emissive:n,emissiveIntensity:1.3,roughness:.32}));a.position.set(r,2.3,i),t.add(a);let o=new S(n,12,6,2);o.position.set(r-e*.8,2.5,i),t.add(o)}let p=new z(new a(3.9,3.96,64,1,-Math.PI/2,Math.PI),i);p.rotation.x=-Math.PI/2,p.rotation.z=e<0?0:Math.PI,p.position.set(r,.012,0),t.add(p)}for(let e of s)en(e);let l=await new xe().loadAsync(`./models/maps/royal-colosseum-v1.glb`);l.scene.name=`Blender Colosseum`,l.scene.traverse(e=>{if(e instanceof z){e.castShadow=!0,e.receiveShadow=!0;for(let t of Array.isArray(e.material)?e.material:[e.material])t instanceof F&&t.map&&(t.map.anisotropy=8)}}),t.add(l.scene),on(t)}var cn={zenith:`#86c6ee`,middle:`#b4def4`,horizon:`#fdf3df`,below:`#e4f0f2`,sun:{azimuth:-126.4,elevation:44.9,color:`#fff2c9`},rainbow:{azimuth:6,elevation:-15,radius:33,width:5.4,strength:.78},clouds:[[-158,12,6.5],[-122,19,5],[-84,11,7],[-46,21,5.5],[-14,9,4.5],[34,20,5.5],[68,11,7.5],[104,17,6],[138,10,7],[172,22,5.5],[-178,30,4],[10,29,4]]},ln=(e,t)=>{let n=I.degToRad(e),r=I.degToRad(t);return new L(Math.cos(r)*Math.cos(n),Math.sin(r),Math.cos(r)*Math.sin(n))};function un(e){if(e.getObjectByName(`EpicCity_TwilightSky`))return;let n=cn,r=n.clouds.length,a=[],o=[],s=[],c=[];n.clouds.forEach(([e,n,r],i)=>{let l=ln(e,n),u=new L().crossVectors(l,new L(0,1,0)).normalize(),d=new L().crossVectors(u,l).normalize();a.push(l),o.push(u),s.push(d),c.push(new t(Math.sin(I.degToRad(r)),i*7.31+1.7))});let l=new ge({name:`StorybookSkyMaterial`,side:1,depthTest:!1,depthWrite:!1,fog:!1,toneMapped:!0,defines:{CLOUDS:r},uniforms:{uZenith:{value:new i(n.zenith)},uMiddle:{value:new i(n.middle)},uHorizon:{value:new i(n.horizon)},uBelow:{value:new i(n.below)},uSunDir:{value:ln(n.sun.azimuth,n.sun.elevation)},uSunColor:{value:new i(n.sun.color)},uRainbowDir:{value:ln(n.rainbow.azimuth,n.rainbow.elevation)},uRainbow:{value:new L(I.degToRad(n.rainbow.radius),I.degToRad(n.rainbow.width),n.rainbow.strength)},uCloudC:{value:a},uCloudR:{value:o},uCloudU:{value:s},uCloudS:{value:c}},vertexShader:`
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
      }`}),u=new y(650,48,32),d=new z(u,l);d.name=`EpicCity_TwilightSky`,d.renderOrder=-1e4,d.frustumCulled=!1,d.castShadow=!1,d.receiveShadow=!1;let f=new L;d.onBeforeRender=(e,t,n)=>{n.getWorldPosition(f),d.position.copy(f),d.updateMatrixWorld(!0)},d.userData.dispose=()=>{d.removeFromParent(),u.dispose(),l.dispose()},e.add(d)}var W={dirt:{half:28,radius:33},trackLines:[24,25.6,27.2,28.8,30.4],clear:12,building:{front:90,z:-6,length:46,depth:11},open:[{x0:54,x1:116,z0:-44,z1:34},{x0:-42,x1:30,z0:-56,z1:-33},{x0:-36,x1:46,z0:33,z1:52},{x0:-97,x1:-64,z0:-2,z1:32}],rings:[{radius:185},{radius:310},{radius:500}]};function dn(e){return()=>{e=e+1831565813|0;let t=Math.imul(e^e>>>15,1|e);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}var fn=(e,t)=>{let n=Math.sin(e*127.1+t*311.7)*43758.5453;return n-Math.floor(n)};function pn(e,t){let n=Math.floor(e),r=Math.floor(t),i=e-n,a=t-r,o=i*i*(3-2*i),s=a*a*(3-2*a),c=fn(n,r),l=fn(n+1,r),u=fn(n,r+1),d=fn(n+1,r+1);return c+(l-c)*o+(u-c)*s+(c-l-u+d)*o*s}var mn=(e,t,n)=>pn(Math.cos(e)*t+n,Math.sin(e)*t+n*1.7),hn=(e,t,n)=>{let r=Math.min(1,Math.max(0,(n-e)/(t-e)));return r*r*(3-2*r)},gn=(e,t)=>Math.hypot(Math.max(Math.abs(e)-W.dirt.half,0),t)-W.dirt.radius,_n=(e,t)=>Math.hypot(Math.max(Math.abs(e)-U.width/2,0),Math.max(Math.abs(t)-U.depth/2,0)),vn=(e,t)=>Math.min(...W.open.map(n=>Math.hypot(Math.max(n.x0-e,0,e-n.x1),Math.max(n.z0-t,0,t-n.z1))));function yn(e,t){let n=hn(30,110,gn(e,t))*hn(0,20,vn(e,t));return n<=0?0:n*(5+11*pn(e*.011+3.1,t*.011+7.7))+n*n*9}var bn=new i;function G(e,t){e.getAttribute(`uv`)&&e.deleteAttribute(`uv`);let n=e.getAttribute(`position`),r=new Float32Array(n.count*3);for(let e=0;e<n.count;e++){let i=typeof t==`function`?t(n.getX(e),n.getY(e),n.getZ(e)):bn.set(t);r[e*3]=i.r,r[e*3+1]=i.g,r[e*3+2]=i.b}return e.setAttribute(`color`,new p(r,3)),e.index||e.setIndex([...Array(n.count).keys()]),e}var xn=(e,t,n,r)=>{let a=new i(e),o=new i(t);return(e,t)=>bn.copy(a).lerp(o,hn(n,r,t))};function Sn(e,t,n=1){let r=e.index?e.toNonIndexed():e,a=t.map(e=>new i(e)),o=r.getAttribute(`position`).count;r.getAttribute(`uv`)&&r.deleteAttribute(`uv`);let s=new Float32Array(o*3);for(let e=0;e<o;e++){let t=a[Math.floor(e/3/n)%a.length];s[e*3]=t.r,s[e*3+1]=t.g,s[e*3+2]=t.b}return r.setAttribute(`color`,new p(s,3)),r.setIndex([...Array(o).keys()]),r}function Cn(e,t,n){let r=e.index?e.toNonIndexed():e,a=t.map(e=>new i(e)),o=r.getAttribute(`position`),s=o.count,c=new Float32Array(s*3);r.getAttribute(`uv`)&&r.deleteAttribute(`uv`);for(let e=0;e<s;e+=3){let t=(o.getX(e)+o.getX(e+1)+o.getX(e+2))/3,r=(o.getZ(e)+o.getZ(e+1)+o.getZ(e+2))/3,i=a[Math.floor((Math.atan2(r,t)+Math.PI)/(Math.PI*2)*n)%a.length];for(let t=0;t<3;t++)c[(e+t)*3]=i.r,c[(e+t)*3+1]=i.g,c[(e+t)*3+2]=i.b}return r.setAttribute(`color`,new p(c,3)),r.setIndex([...Array(s).keys()]),r}var K=(e,t,n,r,i=0,a=1,o=0,s=0)=>e.applyMatrix4(new B().compose(new L(t,n,r),new C().setFromEuler(new ee(o,i,s,`YXZ`)),Array.isArray(a)?new L(...a):new L(a,a,a))),q=(e,t,n,r)=>G(new fe(e,t,n),r),J=(e,t,n,r,i=10)=>G(new ve(e,t,n,i,1),r),wn=(e,t,n,r=10)=>G(new k(e,t,r,1),n),Y=(e,t,n=10,r=7)=>G(new y(e,n,r),t);function X(e,t,n,r,i=6){let a=t.clone().sub(e);return J(n,n,a.length(),r,i).applyMatrix4(new B().compose(e.clone().add(t).multiplyScalar(.5),new C().setFromUnitVectors(new L(0,1,0),a.normalize()),new L(1,1,1)))}function Tn(e,t,n){let r=0;e.forEach(([t,n],i)=>{let[a,o]=e[(i+1)%e.length];r+=t*o-a*n}),r<0&&(e=[...e].reverse());let i=[],a=[],o=e.length,s=(t,n)=>{let r=i.length/3;for(let[n,r]of e)i.push(n,r,t);for(let e=1;e<o-1;e++)a.push(...n?[r,r+e+1,r+e]:[r,r+e,r+e+1])};s(t/2,!1),s(-t/2,!0);for(let n=0;n<o;n++){let[r,s]=e[n],[c,l]=e[(n+1)%o],u=i.length/3;i.push(r,s,t/2,c,l,t/2,c,l,-t/2,r,s,-t/2),a.push(u,u+3,u+2,u,u+2,u+1)}let c=new H;return c.setAttribute(`position`,new p(i,3)),c.setIndex(a),c.computeVertexNormals(),G(c,n)}function En(e,t,n,r,i){let a=[],o=[],s=e.length;for(let r=0;r<s;r++){let o=e[i?(r-1+s)%s:Math.max(0,r-1)],c=e[i?(r+1)%s:Math.min(s-1,r+1)].clone().sub(o).normalize(),l=-c.y*t/2,u=c.x*t/2,d=e[r];a.push(d.x-l,n,d.y-u,d.x+l,n,d.y+u)}for(let e=0;e<(i?s:s-1);e++){let t=e*2,n=(e+1)%s*2;o.push(t,n,t+1,t+1,n,n+1)}let c=new H;c.setAttribute(`position`,new p(a,3)),c.setIndex(o),c.computeVertexNormals();let l=c.getAttribute(`normal`);for(let e=0;e<l.count;e++)l.setXYZ(e,0,1,0);return G(c,r)}var Dn={dirt:`#dcbd8f`,dirtDark:`#c9a575`,grass:`#93c66e`,grassLight:`#a9d47e`,grassDark:`#7cb35f`,chalk:`#fbfaf3`,board:`#fbf6ec`,azure:`#8ccdf0`,ember:`#f6a596`,posts:[`#f4a9bd`,`#9ddbc6`,`#f7dc72`,`#c4b2ee`],trunk:`#94653f`,leaves:[`#6fb05d`,`#5d9e55`,`#86c26b`],pine:`#3f8061`,blossom:`#f3b5c8`,autumn:`#eba648`,wall:`#f7edd9`,roof:`#e2705a`,trim:`#4aa3a2`,glass:`#a9daf0`,wood:`#a76a45`,navy:`#3f4b77`,cap:[`#e5574d`,`#9c84d6`,`#f29e4c`],stem:`#f8eedb`,rainbow:[`#ff9aa2`,`#ffc58e`,`#fff09a`,`#a9e8a4`,`#9ccff6`,`#c9a8ef`]};function On(){let e=dn(20261002),t=[],n=7.5;for(let r=-175;r<=175;r+=n)for(let i=-175;i<=175;i+=n){let a=r+(e()-.5)*n*.9,o=i+(e()-.5)*n*.9,s=e(),c=e(),l=e(),u=e(),d=_n(a,o),f=gn(a,o),p=Math.hypot(a,o);if(d<W.clear+2||f<4||vn(a,o)<3||p>175||s>.82*hn(4,10,f)*(1-.8*hn(45,120,f))+.035)continue;let m=c<.58?`round`:c<.8?`pine`:c<.9?`blossom`:`autumn`;t.push({x:a,z:o,y:yn(a,o),scale:.78+l*.62,kind:m,tint:u})}return t}function kn(e){un(e);let n=new V;n.name=`rift-arena`,e.add(n);let r=U.width/2,o=U.depth/2,s=U.goalWidth/2;n.userData={mapId:`school`,theme:`storybook-forest-school`,courtWidth:U.width,courtDepth:U.depth,goalWidth:U.goalWidth,area:U.width*U.depth,tallClear:W.clear};let c=[],l=[],u=[],d=[],f=[],m=dn(7),h=Dn,g=(e,t,n)=>new L(e,t,n),_=(e,t)=>Math.abs(e)<r+30&&Math.abs(t)<o+30?c:u,v=(e,t)=>{let n=gn(e,t),r=pn(e*.06,t*.06),a=pn(e*.4+9,t*.4+2),o=bn.set(h.dirt).lerp(new i(h.dirtDark),r*.45+a*.15).clone(),s=new i(h.grass).lerp(new i(r>.5?h.grassLight:h.grassDark),Math.abs(r-.5)*1.2),c=yn(e,t);return c>0&&s.lerp(new i(`#9fc7a0`),hn(4,40,c)*.35),o.lerp(s,hn(-.4,1.1,n))},b=new _e(130,84,130,84);b.rotateX(-Math.PI/2);let x=new _e(1e3,1e3,100,100);x.rotateX(-Math.PI/2);{let e=x.getAttribute(`position`);for(let t=0;t<e.count;t++)e.setY(t,yn(e.getX(t),e.getZ(t))-.05);x.computeVertexNormals()}for(let e of[b,x]){let t=e.getAttribute(`position`),n=e.getAttribute(`uv`),r=new Float32Array(t.count*3);for(let e=0;e<t.count;e++){let i=t.getX(e),a=t.getZ(e),o=v(i,a);r[e*3]=o.r,r[e*3+1]=o.g,r[e*3+2]=o.b,n.setXY(e,i/5,a/5)}e.setAttribute(`color`,new p(r,3))}let S=new F({name:`School yard ground`,vertexColors:!0,roughness:1,metalness:0,map:An()}),C=new z(ue([b,x]),S);C.name=`school-yard-ground`,C.receiveShadow=!0,n.add(C),b.dispose(),x.dispose();let w=.12,T=.012,E=(e,t,n,r)=>l.push(K(q(n,.004,r,h.chalk),e,T,t));for(let e of[-o+.1,o-.1])E(0,e,U.width,w);for(let e of[-r+.1,r-.1])E(e,0,w,U.depth);E(0,0,w,U.depth);let D=(e,t,n,r=0,i=Math.PI*2)=>l.push(K(G(new a(n-w/2,n+w/2,72,1,r,i),h.chalk),e,T,t,0,1,-Math.PI/2));D(0,0,6.4),l.push(K(G(new je(.28,16),h.chalk),0,T,0,0,1,-Math.PI/2));for(let e of[-1,1]){let t=e*(r-9),n=e*(r-3.5),i=e*(r-7);E(t,0,w,26),E(n,0,w,19);for(let n of[-13,13])E((t+e*r)/2,n,9,w);for(let t of[-9.5,9.5])E((n+e*r)/2,t,3.5,w);l.push(K(G(new je(.22,14),h.chalk),i,T,0,0,1,-Math.PI/2));let a=Math.acos(2/6.4);D(i,0,6.4,e>0?Math.PI-a:-a,a*2);for(let t of[-1,1])D(e*r,t*o,1,e>0?t>0?Math.PI/2:Math.PI:t>0?0:-Math.PI/2,Math.PI/2)}let O=e=>{let n=[],r=W.dirt.half;for(let i=0;i<=36;i++){let a=-Math.PI/2+Math.PI*i/36;n.push(new t(r+Math.cos(a)*e,Math.sin(a)*e))}for(let i=0;i<=36;i++){let a=Math.PI/2+Math.PI*i/36;n.push(new t(-r+Math.cos(a)*e,Math.sin(a)*e))}return n};for(let e of W.trackLines)l.push(En(O(e),.1,.011,h.chalk,!0));E(0,(W.trackLines[0]+W.trackLines.at(-1))/2,.16,W.trackLines.at(-1)-W.trackLines[0]);for(let e of[-o-.22,o+.22]){c.push(K(q(U.width+.6,.42,.16,h.board),0,.21,e));for(let t of[-1,1])c.push(K(q(r+.3,.07,.24,t<0?h.azure:h.ember),t*(r+.3)/2,.45,e))}for(let e of[-1,1])for(let t of[-(o+s)/2,(o+s)/2])c.push(K(q(.16,.42,o-s+.3,h.board),e*(r+.45),.21,t)),c.push(K(q(.24,.07,o-s+.3,e<0?h.azure:h.ember),e*(r+.45),.45,t));let ee=0,te=(e,t)=>{let n=h.posts[ee++%h.posts.length];c.push(K(J(.08,.09,.5,h.board,8),e,.25,t),K(Y(.14,n,9,6),e,.56,t))};for(let e=-r;e<=r+.01;e+=3.4)for(let t of[-o-.22,o+.22])te(e,t);for(let e of[-1,1])for(let t of[-o,-s-.2,s+.2,o])te(e*(r+.45),t);for(let e of[-1,1]){let t=e<0?h.azure:h.ember,i=e*(r+.22),a=e*(r+1.9);for(let e of[-s,s])c.push(K(J(.12,.12,2.42,`#ffffff`,10),i,1.21,e)),c.push(X(g(i,2.36,e),g(a,.06,e),.07,`#f4f4f0`)),c.push(X(g(i,.06,e),g(a,.06,e),.06,`#f4f4f0`));c.push(X(g(i,2.36,-s-.1),g(i,2.36,s+.1),.11,`#ffffff`,10)),c.push(X(g(a,.06,-s),g(a,.06,s),.06,`#f4f4f0`)),l.push(K(q(1.66,.02,U.goalWidth-.1,t),(i+a)/2,.012,0));let o=[];for(let e=-s;e<=s+.01;e+=.5)o.push(i,2.36,e,a,.06,e);for(let e=.08;e<1;e+=.12){let t=i+(a-i)*e,n=2.36+-2.3*e;o.push(t,n,-s,t,n,s)}for(let e of[-s,s]){for(let t=.15;t<1;t+=.17){let n=i+(a-i)*t;o.push(n,.06,e,n,2.36+-2.3*t,e)}for(let t=.4;t<2.36;t+=.35)o.push(i,t,e,i+(a-i)*(2.36-t)/2.3,t,e)}let u=new H;u.setAttribute(`position`,new p(o,3));let d=new le(u,new he({color:t,transparent:!0,opacity:.6}));d.name=e<0?`azure-goal`:`ember-goal`,d.userData={goalPlane:e*r,opening:U.goalWidth},n.add(d);for(let n of[-s-1.2,s+1.2])c.push(K(J(.05,.05,3.2,`#ffffff`,6),e*(r+1.2),1.6,n)),c.push(K(Tn([[0,0],[1.1,-.35],[0,-.7]],.03,t),e*(r+1.2),3.15,n,e<0?0:Math.PI))}for(let e=-27;e<=27;e+=9){c.push(K(q(7.6,.28,1.4,`#d9876a`),e,.14,35)),c.push(K(q(7.2,.1,1,`#8a6a4e`),e,.27,35));for(let t=0;t<9;t++){let n=e-3.2+t*.8,r=35+(t%2?.25:-.25),i=h.rainbow[(t+Math.round(e/9)+3)%6];c.push(K(J(.025,.025,.45,`#5f9e55`,4),n,.5,r),K(wn(.13,.26,i,6),n,.8,r,0,1,Math.PI))}}c.push(K(q(3.2,1,2,`#ffffff`),0,.5,37.4),K(q(3.4,.08,2.2,`#7fbf8f`),0,1.04,37.4),K(q(1.2,.5,.8,`#7fbf8f`),0,.25,36.1));for(let e of[-17,4]){for(let[t,n]of[[-3.2,-2.2],[3.2,-2.2],[-3.2,2.2],[3.2,2.2]])c.push(K(J(.06,.06,2.7,`#ffffff`,6),e+t,1.35,42+n));c.push(K(Sn(new k(3.9,1.3,4,1).rotateY(Math.PI/4),[`#7ec0ea`,`#ffffff`]),e,3.3,42,0,[1.3,1,1]));for(let t=0;t<12;t++)for(let n of[-2.76,2.76])c.push(K(Tn([[-.3,0],[.3,0],[0,-.38]],.02,t%2?`#7ec0ea`:`#ffffff`),e-3.3+t*.6,2.66,42+n));for(let t=0;t<9;t++)for(let n of[-3.58,3.58])c.push(K(Tn([[-.3,0],[.3,0],[0,-.38]],.02,t%2?`#7ec0ea`:`#ffffff`),e+n,2.66,39.6+t*.6,Math.PI/2));c.push(K(q(5.2,.08,1,`#ffffff`),e,.78,42),K(q(.08,.74,.9,`#d8d0c0`),e-2.4,.37,42),K(q(.08,.74,.9,`#d8d0c0`),e+2.4,.37,42))}c.push(K(J(.09,.11,9,`#ffffff`,8),26,4.5,39),K(Y(.2,`#f7dc72`),26,9.1,39),K(Tn([[0,0],[2.6,-.8],[0,-1.6]],.04,`#f9e27a`),26.1,8.7,39),K(J(.32,.32,.05,`#e2705a`,14),26.9,8.1,39,0,1,Math.PI/2));let A=[-34,-10,14,38];for(let e of A)c.push(K(J(.07,.09,6.2,`#f3ece0`,6),e,3.1,48));for(let e=0;e<A.length-1;e++){let t=A[e],n=A[e+1],r=[];for(let e=0;e<=1.0001;e+=1/26)r.push(g(t+(n-t)*e,6.1-Math.sin(Math.PI*e)*1.6,48));for(let t=0;t<r.length-1;t++)c.push(X(r[t],r[t+1],.02,`#7a6a5a`,4)),t%1==0&&c.push(K(Tn([[-.3,0],[.3,0],[0,-.62]],.02,h.rainbow[(t+e)%6]),r[t].x+.45,r[t].y-.02,48))}for(let e=0;e<9;e++)c.push(K(G(new re(.48,.2,6,14),h.posts[e%4]),-33+e*1.5,.25,-35.5,0,1,0,0));[.9,1.15,1.4].forEach((e,t)=>{let n=-33+t*1.8;for(let r of[-41,-39])c.push(K(J(.07,.07,e,h.posts[t],6),n,e/2,r));c.push(X(g(n,e,-41),g(n,e,-39),.035,`#b9c2cc`,6))});for(let e=0;e<=3;e++)for(let t=0;t<=3;t++){let n=[`#ef7f74`,`#f7d36a`,`#8fd18a`,`#7dbbea`];c.push(X(g(-24+e,0,-44+t),g(-24+e,3,-44+t),.045,`#f2f2f2`,5));for(let r=1;r<=3;r++)e<3&&c.push(X(g(-24+e,r,-44+t),g(-23+e,r,-44+t),.04,n[r],5)),t<3&&c.push(X(g(-24+e,r,-44+t),g(-24+e,r,-43+t),.04,n[r],5))}for(let[e,t]of[[-.8,-.8],[.8,-.8],[-.8,.8],[.8,.8]])c.push(K(J(.08,.08,3.2,`#7dbbea`,6),-8+e,1.6,-44+t));c.push(K(q(1.8,.12,1.8,`#f7d36a`),-8,2.2,-44),K(wn(1.5,1,`#ef7f74`,4),-8,3.7,-44,Math.PI/4)),c.push(K(q(.9,.1,4.6,`#f7d36a`),-8,1.15,-40.2,0,1,-.5),K(q(.08,.3,4.6,`#ef7f74`),-7.55,1.32,-40.2,0,1,-.5),K(q(.08,.3,4.6,`#ef7f74`),-8.45,1.32,-40.2,0,1,-.5));for(let e=0;e<6;e++)c.push(X(g(-8.6,.35*e+.2,-45.2),g(-7.4,.35*e+.2,-45.2),.04,`#f2f2f2`,5));for(let e of[-46,-42])c.push(X(g(6,0,e-1.2),g(6,2.8,e),.08,`#ef7f74`),X(g(6,0,e+1.2),g(6,2.8,e),.08,`#ef7f74`));c.push(X(g(6,2.8,-46.3),g(6,2.8,-41.7),.08,`#f7d36a`));for(let e of[-45,-43])c.push(X(g(5.75,2.8,e),g(5.75,.65,e),.015,`#9aa3ad`,4),X(g(6.25,2.8,e),g(6.25,.65,e),.015,`#9aa3ad`,4),K(q(.75,.08,.4,`#8fd18a`),6,.62,e));c.push(K(q(5,.2,.25,h.wood),20,.1,-41.5),K(q(5,.2,.25,h.wood),20,.1,-45.5),K(q(.25,.2,4.2,h.wood),17.5,.1,-43.5),K(q(.25,.2,4.2,h.wood),22.5,.1,-43.5)),l.push(K(q(4.8,.06,3.8,`#f0dca9`),20,.04,-43.5)),c.push(K(wn(.6,.7,`#e8cf98`,8),19,.4,-43),K(J(.22,.17,.32,`#e5574d`,10),21.2,.2,-44.2));for(let e=0;e<4;e++)c.push(K(q(2.2,.45,.5,h.wood),-14+e*9,.45,51.5),K(q(.1,.45,.4,`#7c5338`),-14.9+e*9,.22,51.5),K(q(.1,.45,.4,`#7c5338`),-13.1+e*9,.22,51.5));{let e=W.building,t=e.front,n=(t+(e.front+e.depth))/2,r=8.8;u.push(K(q(e.depth,r,e.length,h.wall),n,r/2,e.z),K(q(e.depth+.3,.5,e.length+.3,`#d9c9ae`),n,.25,e.z));let i=(e,t,n,r,i,a,o,s=!1)=>{let c=s?Math.PI/2:0;u.push(K(Tn([[-n/2-.7,0],[n/2+.7,0],[0,r]],e,o),a,i,t,c)),u.push(K(Tn([[-n/2,0],[n/2,0],[0,r-.4]],e-.6,h.wall),a,i-.02,t,c))};i(e.length+1.2,e.z,e.depth,4.6,r,n,h.roof);for(let n=e.z-e.length/2+2.6;n<=e.z+e.length/2-2.4;n+=3.7)if(!(Math.abs(n-e.z)<5)){for(let[e,r]of[[2.6,m()<.25],[6.6,m()<.2]])if(u.push(K(q(.12,2.5,2.2,`#ffffff`),t-.06,e,n)),(r?d:u).push(K(q(.14,2.1,1.8,r?`#ffe7b0`:h.glass),t-.09,e,n)),u.push(K(q(.18,.1,1.8,`#ffffff`),t-.1,e,n),K(q(.18,2.1,.1,`#ffffff`),t-.1,e,n)),e<3){u.push(K(q(.5,.3,2,h.wood),t-.3,e-1.35,n));for(let r=0;r<4;r++)u.push(K(Y(.17,r%2?`#f08a9b`:`#f7d36a`,7,5),t-.32,e-1.1,n-.7+r*.47))}}let a=t-.4,o=7.2,s=17.5;u.push(K(q(o,s,o,h.wall),a+o/2-1,s/2,e.z),K(q(7.6000000000000005,.5,7.6000000000000005,h.trim),a+o/2-1,s,e.z),K(q(7.6000000000000005,.4,7.6000000000000005,h.trim),a+o/2-1,r,e.z)),u.push(K(wn(o*.78,7.5,h.trim,4),a+o/2-1,21.4,e.z,Math.PI/4),K(Y(.35,`#f7d36a`),a+o/2-1,25.3,e.z)),u.push(K(J(.05,.05,2.2,`#5d5a6b`,5),a+o/2-1,26.3,e.z),K(Tn([[0,.25],[1.4,0],[0,-.25]],.05,`#5d5a6b`),a+o/2-1,26.9,e.z,Math.PI/2));let c=a-1.05;u.push(K(J(2.25,2.25,.2,h.navy,32),c,12,e.z,0,1,0,Math.PI/2),K(J(2,2,.24,`#fffdf6`,32),c-.02,12,e.z,0,1,0,Math.PI/2));for(let t=0;t<12;t++){let n=t*Math.PI/6;u.push(K(q(.1,t%3?.22:.42,.1,h.navy),c-.16,12+Math.cos(n)*1.65,e.z+Math.sin(n)*1.65,0,1,n))}for(let[t,n,r]of[[1.1,-Math.PI/3,.16],[1.55,Math.PI/3,.11]])u.push(K(q(.1,t,r,h.navy),c-.22,12+Math.cos(n)*t/2,e.z+Math.sin(n)*t/2,0,1,n));u.push(K(Tn([[-1.1,0],[1.1,0],[1.1,1.8],[0,2.6],[-1.1,1.8]],.2,`#6b5a78`),a-1.02,14.6,e.z,Math.PI/2)),u.push(K(Y(.5,`#f2c75c`,10,7),a-1,15.7,e.z)),u.push(K(Tn([[-1.4,0],[1.4,0],[1.4,2.6],[0,3.8],[-1.4,2.6]],.25,h.wood),a-1.05,.5,e.z,Math.PI/2)),u.push(K(q(.12,3,.08,`#7c5338`),a-1.2,2.2,e.z),K(Y(.09,`#f7d36a`,6,4),a-1.25,2,e.z+.45));for(let t=0;t<3;t++)u.push(K(q(1.2-t*.3,.2,4.2,`#d9c9ae`),a-1.6-t*.3+.45,.1+t*.2,e.z));i(4.4,e.z,3.2,1.6,4.4,a-2.2,h.roof,!0);for(let t of[e.z-3.4,e.z+3.4])u.push(K(J(.15,.15,3.9,`#ffffff`,8),a-3.3,2.45,t));for(let t of[e.z-5.5,e.z+5.5])u.push(K(Y(1.25,`#6fb05d`,10,7),a-2.4,1,t),K(Y(.9,`#86c26b`,9,6),a-2.6,1.9,t));for(let t=W.dirt.half+W.dirt.radius+1.5;t<a-2.6;t+=1.7)u.push(K(J(.62,.66,.1,`#e9e2d4`,12),t,.05,e.z+Math.sin(t*.7)*.35,t));for(let n of[e.z-e.length/2+.4,e.z+e.length/2-.4])u.push(K(q(.3,6,.5,`#9ccf88`),t-.1,3.6,n),K(Y(1.1,`#86c26b`,9,6),t-.3,6.6,n))}for(let e of On()){let t=e.scale,n=_(e.x,e.z),r=.9+e.tint*.2,a=gn(e.x,e.z)>45,o=a?[8,5,7,4]:[10,7,9,6];if(n.push(K(J(.24,.38,3.2,h.trunk,a?5:7),e.x,e.y+1.4*t,e.z,0,t)),e.kind===`pine`){let o=new i(h.pine).multiplyScalar(r);[[2.7,3.4,2.6],[2.1,3,4.4],[1.4,2.6,6]].forEach(([r,i,s])=>n.push(K(wn(r,i,xn(`#${o.getHexString()}`,`#7fb48a`,-i/2,i/2),a?7:9),e.x,e.y+s*t,e.z,e.tint*6,t)))}else{let a=e.kind===`blossom`?h.blossom:e.kind===`autumn`?h.autumn:h.leaves[Math.floor(e.tint*3)%3],s=new i(a).lerp(new i(`#fffbe8`),.32),c=xn(`#${new i(a).multiplyScalar(r*.9).getHexString()}`,`#${s.getHexString()}`,-1.6,1.8);n.push(K(Y(2.3,c,o[0],o[1]),e.x,e.y+4.6*t,e.z,0,t)),n.push(K(Y(1.6,c,o[2],o[3]),e.x+1.2*t,e.y+4*t,e.z+.6*t,0,t),K(Y(1.5,c,o[2],o[3]),e.x-1.1*t,e.y+4.2*t,e.z-.5*t,0,t))}}let ne=dn(11);for(let e=0;e<46;e++){let t=ne()*Math.PI*2,n=W.dirt.radius+3+ne()*30,r=Math.cos(t)*(n+W.dirt.half*Math.abs(Math.cos(t))),i=Math.sin(t)*n,a=[`#ffffff`,`#fff1a0`,`#f8c0d0`,`#d6c6f4`][e%4];for(let e=0;e<12;e++){let e=r+(ne()-.5)*3.2,t=i+(ne()-.5)*3.2;gn(e,t)<1||vn(e,t)<.5||_(e,t).push(K(Y(.11,a,6,4),e,yn(e,t)+.07,t,0,[1,.45,1]),K(Y(.04,`#f2c94c`,4,3),e,yn(e,t)+.12,t))}}let j=(e,t,n,r,i)=>{let a=yn(e,t);i.push(K(J(.42,.55,2.2,h.stem,10),e,a+1.1*n,t,0,n));let o=G(new y(1.5,14,7,0,Math.PI*2,0,Math.PI/2),xn(r,r,0,1));i.push(K(o,e,a+2*n,t,0,[n,n*.72,n]),K(G(new je(1.5,14),`#f1dfc2`),e,a+2*n+.01,t,0,n,Math.PI/2));for(let r=0;r<7;r++){let o=r*2.4,s=.55+r%3*.3,c=Math.sqrt(Math.max(0,1.5**2-s*s))*.72;i.push(K(Y(.2+r%2*.08,`#fffaf0`,7,5),e+Math.cos(o)*s*n,a+(2+c)*n,t+Math.sin(o)*s*n,0,[n,n*.5,n]))}};for(let[e,t,n]of[[-62,-40,5],[-58,42,4],[52,46,4],[-30,-64,5],[66,-40,3],[-82,-8,4]])for(let r=0;r<n;r++){let n=e+(m()-.5)*9,i=t+(m()-.5)*9;_n(n,i)<W.clear+1||gn(n,i)<1||j(n,i,.6+m()*1.8,h.cap[r%3],_(n,i))}{let e=yn(-98,16);u.push(K(J(2.1,3.2,24,h.trunk,12),-98,e+12,16));for(let t=0;t<6;t++){let n=t*Math.PI/3+.3;u.push(X(g(-98+Math.cos(n)*1.5,e+2.5,16+Math.sin(n)*1.5),g(-98+Math.cos(n)*4.2,e-.3,16+Math.sin(n)*4.2),.7,h.trunk,7))}for(let[t,n,r]of[[3,15,2],[-3.5,17,-1.5],[1,19,-3.5]])u.push(X(g(-98,e+n-4,16),g(-98+t*2,e+n,16+r*2),.6,h.trunk,7));for(let[t,n,r,i]of[[0,29,0,9.5],[6,26,5,7],[-7,27,-3,7.5],[3,32,-6,6.5],[-4,33,5,6],[7,30,-6,5.5],[-8,24,6,6]])u.push(K(Y(i,xn(`#5d9e55`,`#a6d67d`,-i,i),14,10),-98+t,e+n,16+r));let t=e+13;u.push(X(g(-96.5,e+10,16.5),g(-90.6,t-.2,17),.6,h.trunk,7),X(g(-89,t-.2,17),g(-88.7,e+.2,17),.3,h.trunk,6));for(let n of[-.45,.45])u.push(X(g(-87.1,t,17+n),g(-86.4,e+.05,17+n),.04,`#c9a77a`,4));for(let n=1;n<10;n++){let r=n/10;u.push(X(g(-87.1+.7*r,t-(t-e)*r,16.55),g(-87.1+.7*r,t-(t-e)*r,17.45),.035,`#a8835a`,4))}u.push(K(q(3.6,.3,3.6,h.wood),-89,t,17),K(q(3,2.6,3,`#fbe9c8`),-89,t+1.45,17),K(Tn([[-2,0],[2,0],[0,1.7]],3.6,`#e5574d`),-89,t+2.75,17,Math.PI/2)),u.push(K(J(.55,.55,.1,`#ffe7b0`,14),-87.48,t+1.6,17,0,1,0,Math.PI/2)),u.push(K(Tn([[-.9,0],[.9,0],[.9,1.4],[0,2.2],[-.9,1.4]],.3,`#7c5338`),-95.5,e+.1,16,Math.PI/2+.1));for(let e=0;e<8;e++)d.push(K(Y(.16,`#fff1b0`,6,4),-94.5+e*.55,t-.6-Math.sin(e/7*Math.PI)*.7,15.1))}let M=(e,t,n,r)=>{u.push(K(wn(9,15,xn(`#a1849a`,`#dcbcc4`,-7.5,7.5),8),e,t-7.6*r,n,.4,r,Math.PI)),u.push(K(J(9.4,9.1,1.4,xn(`#7fb35f`,`#a6d67d`,-.7,.7),12),e,t,n,0,r));for(let[i,a,o]of[[-3,2,2.4],[3.5,-2,1.9],[0,-4.5,1.6]])u.push(K(J(.25,.35,2.4,h.trunk,6),e+i*r,t+1.6*r,n+a*r,0,r),K(Y(o,xn(`#5d9e55`,`#a6d67d`,-o,o),9,6),e+i*r,t+(2.9+o*.6)*r,n+a*r,0,r));u.push(K(q(.3,22,2.4,xn(`#e8f6ff`,`#a9daf0`,-11,11)),e+9.1*r,t-11*r,n,0,r))};M(-150,66,118,1),M(165,82,-150,.85),M(-40,104,-235,.7),M(120,58,185,.65),u.push(K(Cn(new y(6,16,10),[`#f7d36a`,`#ef7f74`,`#7dbbea`,`#ffffff`],16),46,46,118,0,[1,1.18,1])),u.push(K(q(1.8,1.3,1.8,h.wood),46,35.8,118));for(let[e,t]of[[-.8,-.8],[.8,-.8],[-.8,.8],[.8,.8]])u.push(X(g(46+e,36.4,118+t),g(46+e*3.4,41.4,118+t*3.4),.04,`#6b5a4a`,4));let N=[{r:W.rings[0].radius,h:e=>22+12*mn(e,2.2,1)+2.2*Math.abs(Math.sin(e*47)),low:`#5f9f55`,high:`#9fd27a`,snow:999},{r:W.rings[1].radius,h:e=>52+42*mn(e,1.6,5)+26*Math.max(0,Math.sin(e*5+1))**3,low:`#4f8f9c`,high:`#8cc3c0`,snow:999},{r:W.rings[2].radius,h:e=>95+60*mn(e,1.3,9)+90*Math.max(0,Math.sin(e*4+2.2))**6+45*Math.max(0,Math.sin(e*9+.7))**8,low:`#6c7cc4`,high:`#a3afe8`,snow:162}];for(let e of N){let t=[0,.45,.75,.9,.975,1],n=[],r=[],a=[],o=new i(e.low),s=new i(e.high);for(let a=0;a<=360;a++){let c=a/360*Math.PI*2,l=e.h(c),u=Math.cos(c),d=Math.sin(c);for(let a of t){let t=-6+(l+6)*a,c=o.clone().lerp(s,Math.min(1,a*a/.95));a===1&&c.lerp(new i(`#ffffff`),.22),t>e.snow&&c.lerp(new i(`#fbfdff`),hn(e.snow,e.snow+8,t)),n.push(u*e.r,t,d*e.r),r.push(c.r,c.g,c.b)}}for(let e=0;e<360;e++)for(let n=0;n<t.length-1;n++){let r=e*t.length+n,i=r+t.length;a.push(r,i,r+1,i,i+1,r+1)}let c=new H;c.setAttribute(`position`,new p(n,3)),c.setAttribute(`color`,new p(r,3)),c.setIndex(a),c.computeVertexNormals(),f.push(c)}{let e=I.degToRad(-112),t=W.rings[1].radius-6,n=N[1].h(e+Math.PI*2)-4,r=Math.cos(e)*t,i=Math.sin(e)*t,a=1.7,o=`#f6cbd6`;f.push(K(G(new fe(16*a,8*a,5*a),o),r,n+4*a,i,-e+Math.PI/2));for(let[t,s,c]of[[-9,16,3.2],[9,15,3.2],[-3,21,3.8],[3.5,12,2.6],[0,26,2.4]]){let l=r-Math.sin(e)*t*a,u=i+Math.cos(e)*t*a;f.push(K(G(new ve(c*a,c*a,s*a,10),o),l,n+s*a/2,u),K(G(new k(c*1.3*a,c*2.2*a,10),`#8094dc`),l,n+(s+c*1.1)*a,u))}}let ie=new F({name:`School scenery`,vertexColors:!0,roughness:.92,metalness:0}),ae=new F({name:`School warm lights`,vertexColors:!0,roughness:.6,metalness:0,emissive:`#ffcf7a`,emissiveIntensity:.55}),oe=new R({name:`School paper mountains`,vertexColors:!0,fog:!0}),se=(e,t,r,i)=>{if(!e.length)return;let a=ue(e,!1);if(e.forEach(e=>e.dispose()),!a)throw Error(`${r} の形をまとめられない`);a.computeBoundingSphere();let o=new z(a,t);o.name=r,o.castShadow=i,o.receiveShadow=!0,n.add(o)};return se(c,ie,`school-near`,!0),se(l,ie,`school-lines`,!1),se(u,ie,`school-far`,!1),se(d,ae,`school-lights`,!1),se(f,oe,`school-paper-mountains`,!1),Promise.resolve()}function An(){if(typeof document>`u`)return null;let e=document.createElement(`canvas`);e.width=e.height=256;let t=e.getContext(`2d`);t.fillStyle=`#ffffff`,t.fillRect(0,0,256,256);let n=dn(42);for(let e=0;e<26;e++)t.fillStyle=`rgba(150,130,110,${.035+n()*.03})`,t.beginPath(),t.arc(n()*256,n()*256,14+n()*30,0,Math.PI*2),t.fill();for(let e=0;e<1500;e++){let e=185+Math.floor(n()*55);t.fillStyle=`rgb(${e},${e-6},${e-14})`,t.beginPath(),t.arc(n()*256,n()*256,.6+n()*1.5,0,Math.PI*2),t.fill()}for(let e=0;e<40;e++){let e=n()*256,r=n()*256,i=1.6+n()*2.2;t.fillStyle=`rgb(205,195,182)`,t.beginPath(),t.arc(e,r,i,0,Math.PI*2),t.fill(),t.fillStyle=`rgb(246,242,234)`,t.beginPath(),t.arc(e-i*.3,r-i*.3,i*.5,0,Math.PI*2),t.fill()}let r=new P(e);return r.colorSpace=w,r.wrapS=r.wrapT=Me,r.anisotropy=8,r.name=`School ground speckles`,r}var Z={margin:6.5,wall:7.2,ridge:12.5,garden:-.6,bays:14,open:{south:[2,6,9,12],north:[3,7,11]},low:1.5,hang:6.8,rings:[{radius:185},{radius:310},{radius:500}]},jn=ht.dojo,Mn=jn.width/2,Nn=jn.depth/2,Pn=jn.goalWidth/2,Fn={x:Mn+Z.margin,z:Nn+Z.margin},In={x:Fn.x-1,z:Fn.z-1},Ln=(e,t)=>{let n=Math.abs(e)-Fn.x,r=Math.abs(t)-Fn.z;return n>0||r>0?Math.hypot(Math.max(n,0),Math.max(r,0)):Math.max(n,r)};function Rn(e,t){let n=hn(40,120,Ln(e,t));return Z.garden+(n<=0?0:n*(5+11*pn(e*.011+1.3,t*.011+4.1))+n*n*9)}var zn=e=>Z.wall+(Z.ridge-Z.wall)*(1-Math.min(1,Math.abs(e)/Fn.z)),Q={wood:`#e3bf8a`,woodLight:`#efd3a4`,woodDark:`#a8774a`,beam:`#7a5638`,plaster:`#fbf4e4`,dado:`#b98a5a`,azure:`#8ccdf0`,ember:`#f6a596`,posts:[`#f4a9bd`,`#9ddbc6`,`#f7dc72`,`#c4b2ee`],thatch:`#dcb46c`,thatchDark:`#a98444`,stone:`#c8c3bb`,gravel:`#ede3c9`,grass:`#93c66e`,grassDark:`#7cb35f`,leaves:[`#6fb05d`,`#5d9e55`,`#86c26b`],pine:`#3f8061`,blossom:`#f6bfd0`,trunk:`#94653f`,paper:`#fff4dc`,rainbow:[`#ff9aa2`,`#ffc58e`,`#fff09a`,`#a9e8a4`,`#9ccff6`,`#c9a8ef`]};function Bn(e,t,n){let[r,i,a,o]=e;new L().subVectors(i,r).cross(new L().subVectors(a,r)).dot(t)<0&&([i,o]=[o,i]);let s=new H;return s.setAttribute(`position`,new p([r,i,a,r,a,o].flatMap(e=>[e.x,e.y,e.z]),3)),s.computeVertexNormals(),G(s,n)}function Vn(e,t,n=[1,1]){let[r,i,a,o]=e,s=[[0,0],[n[0],0],[n[0],n[1]],[0,n[1]]];new L().subVectors(i,r).cross(new L().subVectors(a,r)).dot(t)<0&&([i,o]=[o,i],s=[s[0],s[3],s[2],s[1]]);let c=new H,l=[0,1,2,0,2,3],u=[r,i,a,o];return c.setAttribute(`position`,new p(l.flatMap(e=>[u[e].x,u[e].y,u[e].z]),3)),c.setAttribute(`uv`,new p(l.flatMap(e=>s[e]),2)),c.setAttribute(`color`,new p(Array(18).fill(1),3)),c.computeVertexNormals(),c.setIndex([0,1,2,3,4,5]),c}function Hn(e,t,n,r,i){let a=t.clone().sub(e);return q(n,r,a.length(),i).applyMatrix4(new B().compose(e.clone().add(t).multiplyScalar(.5),new C().setFromUnitVectors(new L(0,0,1),a.normalize()),new L(1,1,1)))}function Un(e,t,n,r,i){let a=[-e/2,0,-t/2],o=[e/2,0,-t/2],s=[e/2,0,t/2],c=[-e/2,0,t/2],l=[0,n,-r/2],u=[0,n,r/2],d=[a,u,l,a,c,u,s,l,u,s,o,l,o,a,l,c,s,u],f=new H;return f.setAttribute(`position`,new p(d.flat(),3)),f.computeVertexNormals(),G(f,i)}var Wn={x0:-Fn.x-32,x1:-Fn.x,z:16};function Gn(){let e=dn(20261006),t=[],n=Wn;for(let r=-150;r<=150;r+=9)for(let i=-150;i<=150;i+=9){let a=r+(e()-.5)*9*.9,o=i+(e()-.5)*9*.9,s=e(),c=e(),l=e(),u=e(),d=Ln(a,o);if(d<7||Math.hypot(a,o)>150||a>n.x0&&a<n.x1&&Math.abs(o)<n.z||s>.7*hn(7,12,d)*(1-.75*hn(40,110,d))+.03)continue;let f=c<.45?`round`:c<.62?`pine`:c<.86?`blossom`:`autumn`;t.push({x:a,z:o,y:Rn(a,o),scale:.8+l*.6,kind:f,tint:u})}return t}var Kn=()=>new Promise(e=>setTimeout(e,0));async function qn(e){await Kn(),un(e);let t=new V;t.name=`rift-arena`,e.add(t),t.userData={mapId:`dojo`,theme:`storybook-grandpa-dojo-hall`,courtWidth:jn.width,courtDepth:jn.depth,goalWidth:jn.goalWidth,area:jn.area,hall:{...Fn},camera:{...In}};let n=[],r=[],o=[],s=[],c=[],l=[],u=[],d=[],f=(e,t,n)=>new L(e,t,n),m=Fn.x,h=Fn.z,g=Z.wall,_=Z.garden,v=new _e(m*2,h*2,1,1);v.rotateX(-Math.PI/2);{let e=v.getAttribute(`position`),t=v.getAttribute(`uv`);for(let n=0;n<e.count;n++)t.setXY(n,e.getX(n)/8,e.getZ(n)/8)}let y=new z(v,new F({name:`Dojo wooden floor`,color:`#ffffff`,roughness:.58,metalness:0,map:$n()}));y.name=`dojo-floor`,y.receiveShadow=!0,t.add(y);let b=2.7,S=[];for(let e of[-1,1]){let t=new _e(m*2-1.2,b,1,1);t.rotateX(-Math.PI/2),t.translate(0,.004,e*(h-b/2-.15));let n=t.getAttribute(`position`),r=t.getAttribute(`uv`);for(let e=0;e<n.count;e++)r.setXY(e,n.getX(e)/1.8,(Math.abs(n.getZ(e))-(h-b-.15))/1.8);S.push(t)}let C=new z(ue(S),new F({name:`Dojo tatami`,color:`#ffffff`,roughness:.95,metalness:0,map:er()}));S.forEach(e=>e.dispose()),C.name=`dojo-tatami`,C.receiveShadow=!0,t.add(C);for(let e of[-1,1])r.push(K(q(m*2-1.2,.03,.12,Q.woodDark),0,.015,e*(h-b-.15)));let w=.1,E=.006,D=(e,t,n,i)=>r.push(K(q(n,.004,i,`#fdfbf4`),e,E,t));for(let e of[-Nn+.08,Nn-.08])D(0,e,jn.width,w);for(let e of[-Mn+.08,Mn-.08])D(e,0,w,jn.depth);D(0,0,w,jn.depth),r.push(K(G(new a(4.5-w/2,4.55,64,1),`#fdfbf4`),0,E,0,0,1,-Math.PI/2));for(let e of[-1,1])r.push(K(q(.12,.004,1.2,`#e8705f`),e*3.6,.007,0));let O=(e,t,n,i,o)=>r.push(K(G(new a(e-w/(2*t),e+w/(2*t),36,1),`#fdfbf4`),i,E,o,0,[t,1,n],-Math.PI/2));O(1,1.1,.95,0,0);for(let[e,t,n]of[[1.5,-1.15,.36],[1.85,-.4,.38],[1.85,.4,.38],[1.5,1.15,.36]])O(n,1,1.1,e,t);for(let e of[-Nn-.22,Nn+.22]){n.push(K(q(jn.width+.6,.4,.14,Q.wood),0,.2,e));for(let t of[-1,1])n.push(K(q(Mn+.3,.08,.22,t<0?Q.azure:Q.ember),t*(Mn+.3)/2,.44,e))}for(let e of[-1,1])for(let t of[-(Nn+Pn)/2,(Nn+Pn)/2])n.push(K(q(.14,.4,Nn-Pn+.3,Q.wood),e*(Mn+.4),.2,t)),n.push(K(q(.22,.08,Nn-Pn+.3,e<0?Q.azure:Q.ember),e*(Mn+.4),.44,t));let ee=0,te=(e,t)=>{let r=Q.posts[ee++%Q.posts.length];n.push(K(J(.08,.09,.5,Q.woodLight,8),e,.25,t),K(Y(.14,r,9,6),e,.56,t))};for(let e=-Mn;e<=Mn+.01;e+=jn.width/14)for(let t of[-Nn-.22,Nn+.22])te(e,t);for(let e of[-1,1])for(let t of[-Nn,-Pn-.2,Pn+.2,Nn])te(e*(Mn+.4),t);for(let e of[-1,1]){let i=e<0?Q.azure:Q.ember,a=e*(Mn+.22),o=e*(Mn+1.9);for(let e of[-Pn,Pn])n.push(K(J(.12,.12,2.42,Q.woodLight,10),a,1.21,e)),n.push(X(f(a,2.36,e),f(o,.06,e),.07,Q.wood)),n.push(X(f(a,.06,e),f(o,.06,e),.06,Q.woodDark));n.push(X(f(a,2.36,-Pn-.1),f(a,2.36,Pn+.1),.11,Q.woodLight,10),K(q(.24,.12,jn.goalWidth-.3,i),a,2.36,0)),n.push(X(f(o,.06,-Pn),f(o,.06,Pn),.06,Q.woodDark)),r.push(K(q(1.66,.02,jn.goalWidth-.1,i),(a+o)/2,.012,0));let s=[];for(let e=-Pn;e<=Pn+.01;e+=.5)s.push(a,2.36,e,o,.06,e);for(let e=.08;e<1;e+=.12){let t=a+(o-a)*e,n=2.36+-2.3*e;s.push(t,n,-Pn,t,n,Pn)}for(let e of[-Pn,Pn]){for(let t=.15;t<1;t+=.17){let n=a+(o-a)*t;s.push(n,.06,e,n,2.36+-2.3*t,e)}for(let t=.4;t<2.36;t+=.35)s.push(a,t,e,a+(o-a)*(2.36-t)/2.3,t,e)}let c=new H;c.setAttribute(`position`,new p(s,3));let l=new le(c,new he({color:i,transparent:!0,opacity:.6}));l.name=e<0?`azure-goal`:`ember-goal`,l.userData={goalPlane:e*Mn,opening:jn.goalWidth},t.add(l)}let k=4.4,A=.9,ne=(e,t,r,i,a,o)=>{let s=a.clone().multiplyScalar(t/2),c=(t,n)=>e.clone().add(s.clone().multiplyScalar(t)).setY(n);l.push(Vn([c(-1,r),c(1,r),c(1,i),c(-1,i)],o,[1,Math.max(1,Math.round((i-r)/t))])),n.push(Hn(c(-1,r+.04),c(1,r+.04),.08,.08,Q.beam),Hn(c(-1,i-.04),c(1,i-.04),.08,.08,Q.beam));for(let e of[-1,1]){let t=c(e,(r+i)/2).sub(a.clone().multiplyScalar(e*.04));n.push(K(q(.08,i-r,.08,Q.beam),t.x,t.y,t.z))}};await Kn();let M=m*2/Z.bays;for(let e of[-1,1]){let t=e*h,r=f(0,0,-e),i=f(1,0,0),a=e<0?Z.open.south:Z.open.north;for(let r=0;r<=Z.bays;r++)n.push(K(q(.36,g,.36,Q.beam),-m+r*M,g/2,t+e*.05));for(let o=0;o<Z.bays;o++){let s=-m+(o+.5)*M;if(n.push(K(q(M-.36,A,.14,Q.dado),s,A/2,t+e*.02)),a.includes(o))ne(f(s-M/4,0,t-e*.08),M/2-.2,A,k,i,r),ne(f(s-M/4+.12,0,t-e*.2),M/2-.2,A,k,i,r);else for(let n of[-1,1])ne(f(s+n*M/4,0,t-e*.08),M/2-.12,A,k,i,r);let c=6.5,l=M-1.6,u=M-.36;if(o%2==1){n.push(K(q(u,.5999999999999996,.3,Q.plaster),s,9.4/2,t+e*.15),K(q(u,g-c,.3,Q.plaster),s,(c+g)/2,t+e*.15));for(let r of[-1,1])n.push(K(q((u-l)/2,1.5,.3,Q.plaster),s+r*(l/2+(u-l)/4),11.5/2,t+e*.15));for(let r=1;r<4;r++)n.push(K(q(.07,1.5,.07,Q.beam),s-l/2+r*l/4,11.5/2,t+e*.1));n.push(K(q(l+.1,.1,.14,Q.beam),s,5,t),K(q(l+.1,.1,.14,Q.beam),s,c,t))}else{n.push(K(q(u,g-k,.3,Q.plaster),s,(k+g)/2,t+e*.15));let r=Q.posts[(o/2+ +(e>0))%Q.posts.length],i=t-e*.03;n.push(K(q(1.5,1.9,.04,r),s,5.75,i),K(J(.035,.035,1.8,Q.beam,6),s,6.72,i-e*.02,0,1,0,Math.PI/2));let a=(t,r,a)=>n.push(K(G(new je(a,16),`#ffffff`),s+t,5.7+r,i-e*.03,e>0?Math.PI:0));a(0,-.15,.32);for(let[e,t]of[[-.36,.22],[-.13,.4],[.13,.4],[.36,.22]])a(e,t,.12)}}n.push(K(q(m*2,.26,.3,Q.beam),0,4.53,t-e*.05),K(q(m*2,.34,.4,Q.beam),0,g-.17,t),K(q(m*2,.08,.14,Q.beam),0,A,t-e*.02))}{let e=m,t=3.6,r=1.7;o.push(K(q(.3,k,t*2,Q.plaster),e+r+.15,k/2,0),K(q(r,.45,t*2,Q.woodDark),e+r/2,.225,0),K(q(1.5999999999999999,.02,t*2-.2,`#c9dca0`),e+r/2,.46,0));for(let t of[-1,1])o.push(K(q(r,k,.3,Q.plaster),e+r/2,k/2,t*3.75));o.push(K(q(2,.3,7.5,Q.woodLight),e+r/2,4.550000000000001,0)),n.push(K(q(.16,.5,t*2,Q.beam),e-.02,.25,0)),u.push(Yn(Jn.scroll,1.25,3,e+r-.02,2.55,0,-1)),o.push(K(J(.04,.04,1.45,Q.beam,6),e+r-.06,4.08,0,0,1,Math.PI/2),K(J(.05,.05,1.5,Q.beam,6),e+r-.06,1.03,0,0,1,Math.PI/2)),o.push(K(J(.32,.24,.62,`#6f88b8`,12),e+.9,.78,-2.2));for(let t=0;t<7;t++){let n=t*.9;o.push(K(J(.02,.02,1+t%3*.25,`#5f9e55`,4),e+.9+Math.cos(n)*.12,1.5,-2.2+Math.sin(n)*.12,0,1,Math.cos(n)*.25,Math.sin(n)*.25),K(Y(.17,Q.rainbow[t%6],7,5),e+.9+Math.cos(n)*.35,2.05+t%3*.22,-2.2+Math.sin(n)*.35))}o.push(K(q(.9,.22,.55,`#7a8fbf`),e+.9,.58,2.3),K(J(.06,.08,.55,Q.trunk,5),e+.9,.9,2.3,0,1,0,.3));for(let[t,n]of[[-.25,1.25],[.22,1.15],[0,1.4]])o.push(K(Y(.3,Q.pine,8,5),e+.9,n,2.3+t,0,[1,.55,1]));n.push(K(q(.3,g-k,7.5600000000000005,Q.plaster),e+.15,(k+g)/2,0)),n.push(K(q(.12,1.7,6,Q.beam),e-.06,5.85,0)),u.push(Yn(Jn.plaque,5.6,1.45,e-.13,5.85,0,-1));let i=h-t,a=-(t+i/2),s=a-1.5,c=3.1,l=1.65;n.push(K(q(.14,A,i,Q.dado),e-.02,A/2,a));let d=new x;d.moveTo(-i/2,A),d.lineTo(i/2,A),d.lineTo(i/2,g),d.lineTo(-i/2,g),d.lineTo(-i/2,A);let f=new T;f.absarc(-(s-a),c,l,0,Math.PI*2,!0),d.holes.push(f);let p=new j(d,{depth:.3,bevelEnabled:!1,curveSegments:36});p.deleteAttribute(`uv`),p.rotateY(Math.PI/2),p.translate(e,0,a),n.push(G(p,Q.plaster)),n.push(K(G(new re(l,.1,8,40),Q.beam),e-.02,c,s,Math.PI/2));for(let t of[-1,0,1]){let r=t*.55,i=Math.sqrt(l**2-r**2);n.push(K(q(.05,i*2,.05,Q.beam),e+.15,c,s+r),K(q(.05,.05,i*2,Q.beam),e+.15,c+r,s))}let _=t+i/2;n.push(K(q(.14,A,i,Q.dado),e-.02,A/2,_),K(q(.3,g-A,i,Q.plaster),e+.15,(A+g)/2,_)),n.push(K(q(.1,1.6,5.4,Q.woodLight),e-.06,2.9,_-2),K(q(.12,1.7,.12,Q.beam),e-.1,2.9,_-4.75),K(q(.12,1.7,.12,Q.beam),e-.1,2.9,_+.75));for(let t=0;t<3;t++)for(let r=0;r<14;r++){let i=_-4.4+r*.37,a=3.4-t*.5;n.push(K(q(.04,.38,.26,`#f5e2bd`),e-.13,a,i),K(q(.045,.22,.05,`#3b2a20`),e-.15,a-.02,i))}n.push(K(q(.1,.08,3.2,Q.beam),e-.15,1.6,_+3.2),K(q(.1,.08,3.2,Q.beam),e-.15,2.5,_+3.2));for(let t=0;t<6;t++)n.push(K(q(.06,1.05,.06,`#d9b98a`),e-.2,2.05,_+1.9+t*.52,0,1,0,.05));for(let r of[-h,-3.6,t,h])n.push(K(q(.36,g,.36,Q.beam),e+.05,g/2,r));n.push(K(q(.3,.26,h*2,Q.beam),e-.05,4.53,0),K(q(.4,.34,h*2,Q.beam),e,g-.17,0))}{let e=-m,t=h-5;for(let r of[-1,1]){let i=r*(5+t/2);n.push(K(q(.14,A,t,Q.dado),e-.02,A/2,i));for(let n=0;n<4;n++)ne(f(e+.08,0,r*(5.2+(n+.5)*(t-.4)/4)),(t-.4)/4-.06,A,k,f(0,0,1),f(1,0,0));n.push(K(q(.3,g-k,t,Q.plaster),e-.15,(k+g)/2,i));for(let t=0;t<2;t++)n.push(K(q(.08,4.300000000000001,2.4,`#b88a5c`),e+.22+t*.1,4.300000000000001/2,r*3.7),K(q(.1,.1,2.4,Q.beam),e+.27+t*.1,k*.55,r*3.7))}n.push(K(q(.3,g-k,10,Q.plaster),e-.15,(k+g)/2,0)),n.push(K(q(.4,.4,h*2,Q.beam),e+.05,4.6000000000000005,0),K(q(.4,.34,h*2,Q.beam),e,g-.17,0),K(q(.5,.12,10,Q.woodDark),e,.06,0));for(let t of[-h,-5,5,h])n.push(K(q(.36,g,.36,Q.beam),e-.05,g/2,t));n.push(K(J(.95,.95,.14,Q.beam,32),e+.08,5.8,0,0,1,0,Math.PI/2)),u.push(Xn(Jn.clock,.85,e+.17,5.8,0,1))}await Kn();for(let e of[-1,1]){let t=f(0,Z.ridge-g,-e*h),n=f(0,-1,-e*.25);for(let r=0;r<44;r++){let i=f(-m-.3+(m*2+.6)*r/44,g,e*h),a=f(-m-.3+(m*2+.6)*(r+1)/44,g,e*h);o.push(Bn([i,a,a.clone().add(t),i.clone().add(t)],n,r%2?`#e2c08e`:`#d8b27c`))}}for(let e=0;e<=10;e++){let t=-m+e*m*2/10;o.push(K(q(.36,.42,h*2,Q.beam),t,g-.1,0),K(q(.3,Z.ridge-g-.3,.3,Q.beam),t,(g+Z.ridge)/2-.15,0));for(let e of[-1,1])o.push(Hn(f(t,g,e*h),f(t,Z.ridge-.1,0),.26,.3,Q.beam))}o.push(K(q(m*2+.6,.4,.4,Q.beam),0,Z.ridge-.2,0));for(let e of[-1,1])o.push(K(q(m*2+.6,.26,.26,Q.beam),0,zn(h/2)-.25,e*h/2));for(let e of[-1,1])o.push(K(Tn([[-h,0],[h,0],[0,Z.ridge-g]],.3,Q.plaster),e*(m+.15),g,0,Math.PI/2));for(let e of[-7.5,7.5])for(let t=0;t<10;t++){let n=-m+(t+.5)*m*2/10,r=zn(e)-.1;o.push(X(f(n,r,e),f(n,8.15,e),.015,`#6b5a4a`,4),K(J(.16,.2,.14,Q.beam,10),n,8.12,e)),s.push(K(Y(.5,Q.paper,14,10),n,7.6,e,0,[1,1.08,1]))}for(let e of[-1,1]){let t=e*(h-.45),n=[-m+2,-m/2,0,m/2,m-2];for(let e=0;e<n.length-1;e++){let r=n[e],i=n[e+1],a=[];for(let e=0;e<=1.0001;e+=1/14)a.push(f(r+(i-r)*e,7-Math.sin(Math.PI*e)*.2,t));for(let n=0;n<a.length-1;n++)o.push(X(a[n],a[n+1],.015,`#7a6a5a`,3)),o.push(K(Tn([[-.22,0],[.22,0],[0,-.42]],.02,Q.rainbow[(n+e)%6]),a[n].x+.3,a[n].y-.02,t))}}{let e=new L(28,-47,38),t=t=>t.clone().add(e.clone().multiplyScalar(-t.y/e.y));for(let e=1;e<Z.bays;e+=2){let n=-m+(e+.5)*M,r=M-1.6,a=-h+.2;for(let e of[5,6.5]){let o=f(n-r/2,e,a),s=f(n+r/2,e,a);d.push(Bn([o,s,t(s),t(o)],f(0,1,0),(e,t)=>new i(`#fff1c4`).multiplyScalar(.25+.75*Math.min(1,t/5))))}}}{let e=m-1.4,t=h-1.7;n.push(K(J(.5,.5,.7,`#c46a43`,18),e,.82,t,0,1,Math.PI/2),K(J(.48,.48,.72,Q.paper,18),e,.82,t,0,1,Math.PI/2));for(let r of[-.4,.4])n.push(X(f(e-.45,0,t+r),f(e,.55,t+r*.6),.045,Q.beam),X(f(e+.45,0,t+r),f(e,.55,t+r*.6),.045,Q.beam));for(let[e,t,r]of[[-14,h-1.4,Q.azure],[-12.8,h-1.4,Q.azure],[12.8,h-1.4,Q.ember],[14,h-1.4,Q.ember],[-4,-h+1.4,`#c4b2ee`],[4,-h+1.4,`#f7dc72`],[-20,-h+1.4,Q.posts[1]],[20,-h+1.4,Q.posts[0]]])n.push(K(q(.9,.12,.9,r),e,.06,t,.1),K(q(.86,.1,.86,r),e,.17,t,-.15));let r=h-1.5;n.push(K(J(.8,.8,.08,Q.woodDark,20),-22,.38,r));for(let[e,t]of[[-.4,-.4],[.4,-.4],[-.4,.4],[.4,.4]])n.push(K(q(.08,.34,.08,Q.beam),-22+e,.17,r+t));n.push(K(Y(.16,`#7fb5a8`,10,7),-22,.5,r,0,[1,.85,1]),K(J(.03,.03,.2,`#7fb5a8`,5),-21.82,.55,r,0,1,0,-.9));for(let[e,t]of[[.35,.2],[-.3,.3],[.1,-.4]])n.push(K(J(.06,.05,.1,`#fbf4e4`,8),-22+e,.47,r+t));for(let[e,t]of[[-m+1.1,-h+1.1],[-m+1.1,h-1.1],[m-1.1,-h+1.1]])n.push(K(J(.32,.26,.5,`#d9876a`,10),e,.25,t),K(Y(.55,xn(`#5d9e55`,`#a6d67d`,-.5,.5),9,6),e,.95,t))}await Kn();let N=new _e(700,700,70,70);N.rotateX(-Math.PI/2);{let e=N.getAttribute(`position`),t=new Float32Array(e.count*3);for(let n=0;n<e.count;n++){let r=e.getX(n),a=e.getZ(n);e.setY(n,Rn(r,a)-.02);let o=pn(r*.07,a*.07),s=new i(Q.grass).lerp(new i(o>.5?`#a9d47e`:Q.grassDark),Math.abs(o-.5)*1.1);s.lerp(new i(Q.gravel),1-hn(2,4,Ln(r,a))),t.set([s.r,s.g,s.b],n*3)}N.deleteAttribute(`uv`),N.setAttribute(`color`,new p(t,3)),N.computeVertexNormals()}let ie=new z(N,new F({name:`Dojo garden ground`,vertexColors:!0,roughness:1,metalness:0}));ie.name=`dojo-garden-ground`,ie.receiveShadow=!0,t.add(ie),o.push(K(q(m*2+1.4,-_,h*2+1.4,Q.stone),0,_/2-.01,0));for(let e of[-1,1]){o.push(K(q(m*2,.12,2,Q.wood),0,-.07,e*(h+1.35)));for(let t=-m;t<=m+.01;t+=4.4)o.push(K(q(.18,-_,.18,Q.beam),t,_/2,e*(h+2.2)))}o.push(K(q(1.6,.3,3,Q.stone),-m-1.1,-.16,0));for(let e=0;e<9;e++)o.push(K(J(.6,.65,.14,e%2?Q.stone:`#d6d1c8`,9),-m-3-e*1.6,Rn(-m-3-e*1.6,0)+.05,Math.sin(e*1.3)*.4,e));{let e=-m-18,t=(e-12+e)/2,n=4.2,r=.7,i=_;o.push(K(q(12.4,r,20.4,Q.stone),t,i+r/2,0),K(q(12,n,20,`#fbf1dc`),t,i+r+n/2,0));for(let t=-10;t<=10.01;t+=20/6)o.push(K(q(.32,n,.32,Q.beam),e+.05,i+r+n/2,t));for(let t=-8.333333333333334;t<10;t+=20/6){s.push(K(q(.1,2.2,2.6,`#ffe9b8`),e+.1,i+r+2.3,t));for(let n=1;n<4;n++)o.push(K(q(.12,2.2,.05,Q.beam),e+.12,i+r+2.3,t-1.3+n*.65))}o.push(K(q(2.2,.25,21.4,Q.woodDark),e+1.1,i+r-.05,0));let a=7.6,c=i+r+n-.4;o.push(K(Un(17,24.6,a,9,xn(Q.thatch,Q.thatchDark,0,a)),t,c,0),K(q(.9,.7,10.2,`#7a5d3a`),t,c+a+.1,0));for(let e of[-1,1])o.push(K(q(.6,.45,24.6,Q.thatchDark),t+e*(17/2-.2),c+.05,0),K(q(17,.45,.6,Q.thatchDark),t,c+.05,e*(24.6/2-.2)));u.push(Yn(Jn.house,3.6,.9,e+2.65,i+r+n-.75,0,1));let l=e-2,d=Rn(l,16);o.push(K(J(.3,.45,3.6,Q.trunk,7),l,d+1.8,16));for(let[e,t,n,r]of[[0,5,0,2.6],[1.6,4.3,1,1.8],[-1.5,4.5,-.8,1.9]])o.push(K(Y(r,xn(`#5f9a4c`,`#9bcf6d`,-r,r),10,7),l+e,d+t,16+n));for(let e=0;e<14;e++){let t=e*2.4,n=2+e%3*.5;o.push(K(Y(.22,`#f39a3a`,7,5),l+Math.cos(t)*n,d+3.8+e%4*.6,16+Math.sin(t)*n))}}for(let[e,t,n]of[[-m-6,-9,`#f48fb1`],[-m-6,9,`#f7a8c4`],[-m-9,-14,`#e98ab4`],[-m-9,14,`#f48fb1`]]){let r=Rn(e,t);o.push(K(Y(1.2,n,10,6),e,r+.6,t,0,[1.3,.75,1]),K(Y(.9,`#86c26b`,9,5),e+.9,r+.45,t+.4,0,[1.2,.7,1]))}for(let e of Gn()){let t=e.scale,n=Ln(e.x,e.z)>45,r=n?[8,5,7,4]:[10,7,9,6];if(o.push(K(J(.24,.38,3.2,Q.trunk,n?5:7),e.x,e.y+1.4*t,e.z,0,t)),e.kind===`pine`)[[2.7,3.4,2.6],[2.1,3,4.4],[1.4,2.6,6]].forEach(([r,i,a])=>o.push(K(wn(r,i,xn(Q.pine,`#7fb48a`,-i/2,i/2),n?7:9),e.x,e.y+a*t,e.z,e.tint*6,t)));else{let n=e.kind===`blossom`?Q.blossom:e.kind===`autumn`?`#eba648`:Q.leaves[Math.floor(e.tint*3)%3],a=new i(n).lerp(new i(`#fffbe8`),.32),s=xn(`#${new i(n).multiplyScalar(.9).getHexString()}`,`#${a.getHexString()}`,-1.6,1.8);o.push(K(Y(2.3,s,r[0],r[1]),e.x,e.y+4.6*t,e.z,0,t)),o.push(K(Y(1.6,s,r[2],r[3]),e.x+1.2*t,e.y+4*t,e.z+.6*t,0,t),K(Y(1.5,s,r[2],r[3]),e.x-1.1*t,e.y+4.2*t,e.z-.5*t,0,t))}}let ae=[{r:Z.rings[0].radius,h:e=>22+12*mn(e,2.2,3)+2.2*Math.abs(Math.sin(e*47)),low:`#5f9f55`,high:`#9fd27a`,snow:999},{r:Z.rings[1].radius,h:e=>52+42*mn(e,1.6,7)+26*Math.max(0,Math.sin(e*5+2))**3,low:`#4f8f9c`,high:`#8cc3c0`,snow:999},{r:Z.rings[2].radius,h:e=>95+60*mn(e,1.3,11)+90*Math.max(0,Math.sin(e*4+1.2))**6+45*Math.max(0,Math.sin(e*9+.2))**8,low:`#6c7cc4`,high:`#a3afe8`,snow:162}];for(let e of ae){let t=[0,.45,.75,.9,.975,1],n=[],r=[],a=[],o=new i(e.low),s=new i(e.high);for(let a=0;a<=240;a++){let c=a/240*Math.PI*2,l=e.h(c),u=Math.cos(c),d=Math.sin(c);for(let a of t){let t=-6+(l+6)*a,c=o.clone().lerp(s,Math.min(1,a*a/.95));a===1&&c.lerp(new i(`#ffffff`),.22),t>e.snow&&c.lerp(new i(`#fbfdff`),hn(e.snow,e.snow+8,t)),n.push(u*e.r,t,d*e.r),r.push(c.r,c.g,c.b)}}for(let e=0;e<240;e++)for(let n=0;n<t.length-1;n++){let r=e*t.length+n,i=r+t.length;a.push(r,i,r+1,i,i+1,r+1)}let l=new H;l.setAttribute(`position`,new p(n,3)),l.setAttribute(`color`,new p(r,3)),l.setIndex(a),l.computeVertexNormals(),c.push(l)}await Kn();let oe=new F({name:`Dojo hall`,vertexColors:!0,roughness:.88,metalness:0}),se=new F({name:`Dojo warm lights`,vertexColors:!0,roughness:.6,metalness:0,emissive:`#ffd89a`,emissiveIntensity:.7}),ce=new R({name:`Dojo paper mountains`,vertexColors:!0,fog:!0}),P=(e,n,r,i)=>{if(!e.length)return;let a=ue(e,!1);if(e.forEach(e=>e.dispose()),!a)throw Error(`${r} の形をまとめられない`);a.computeBoundingSphere();let o=new z(a,n);return o.name=r,o.castShadow=i,o.receiveShadow=!0,t.add(o),o};P(n,oe,`dojo-near`,!0),P(r,oe,`dojo-lines`,!1),P(o,oe,`dojo-far`,!1),P(s,se,`dojo-lights`,!1),P(c,ce,`dojo-paper-mountains`,!1);let I=Qn();P(l,new F({name:`Dojo shoji`,vertexColors:!0,roughness:.9,metalness:0,map:I,emissive:`#fff1d6`,emissiveIntensity:.35,emissiveMap:I,side:2}),`dojo-shoji`,!1),P(u,new F({name:`Dojo signs`,color:`#ffffff`,roughness:.8,metalness:0,map:Zn()}),`dojo-signs`,!1);let de=P(d,new R({name:`Dojo sunbeams`,vertexColors:!0,transparent:!0,opacity:.22,blending:2,depthWrite:!1,side:2,fog:!1}),`dojo-sunbeams`,!1);de&&(de.receiveShadow=!1,de.renderOrder=3)}var Jn={plaque:[0,0,768,256],house:[0,256,768,512],clock:[0,512,384,896],scroll:[768,0,1024,1024]};function Yn(e,t,n,r,i,a,o){let s=new _e(t,n,1,1),c=s.getAttribute(`uv`),[l,u,d,f]=e;for(let e=0;e<c.count;e++)c.setXY(e,(l+(d-l)*c.getX(e))/1024,1-(f-(f-u)*c.getY(e))/1024);return s.translate(0,0,.02),s.rotateY(o<0?-Math.PI/2:Math.PI/2),s.translate(r,i,a),s}function Xn(e,t,n,r,i,a){let o=new je(t,32),s=o.getAttribute(`uv`),[c,l,u,d]=e;for(let e=0;e<s.count;e++)s.setXY(e,(c+(u-c)*s.getX(e))/1024,1-(d-(d-l)*s.getY(e))/1024);return o.translate(0,0,.02),o.rotateY(a<0?-Math.PI/2:Math.PI/2),o.translate(n,r,i),o}function Zn(){if(typeof document>`u`)return null;let e=document.createElement(`canvas`);e.width=e.height=1024;let t=e.getContext(`2d`),n=`"Hiragino Mincho ProN","Yu Mincho","YuMincho","MS Mincho","Noto Serif JP",serif`;t.fillStyle=`#4a3324`,t.fillRect(0,0,768,256),t.strokeStyle=`#c9a24f`,t.lineWidth=12,t.strokeRect(10,10,748,236),t.fillStyle=`#f6e3b0`,t.font=`bold 104px ${n}`,t.textAlign=`center`,t.textBaseline=`middle`,t.fillText(`おじいちゃんの道場`,384,132,700),t.fillStyle=`#f3dfb8`,t.fillRect(0,256,768,256),t.strokeStyle=`#8a5a3a`,t.lineWidth=12,t.strokeRect(10,266,748,236),t.fillStyle=`#4a3020`,t.font=`bold 110px ${n}`,t.fillText(`おじいちゃんの家`,384,388,700),t.fillStyle=`#fffdf6`,t.beginPath(),t.arc(192,704,180,0,Math.PI*2),t.fill(),t.strokeStyle=`#3f4b77`,t.lineWidth=14,t.stroke();for(let e=0;e<12;e++){let n=e*Math.PI/6,r=e%3?140:120;t.lineWidth=e%3?6:12,t.beginPath(),t.moveTo(192+Math.sin(n)*r,704-Math.cos(n)*r),t.lineTo(192+Math.sin(n)*160,704-Math.cos(n)*160),t.stroke()}t.lineCap=`round`,t.lineWidth=14,t.beginPath(),t.moveTo(192,704),t.lineTo(192+Math.sin(-Math.PI/3)*85,704-Math.cos(-Math.PI/3)*85),t.stroke(),t.lineWidth=9,t.beginPath(),t.moveTo(192,704),t.lineTo(192+Math.sin(Math.PI/3)*125,704-Math.cos(Math.PI/3)*125),t.stroke(),t.fillStyle=`#e8705f`,t.beginPath(),t.arc(192,704,14,0,Math.PI*2),t.fill(),t.fillStyle=`#7f93b8`,t.fillRect(768,0,256,1024),t.fillStyle=`#fbf6e8`,t.fillRect(790,120,212,800),t.fillStyle=`#2a211c`,t.font=`bold 170px ${n}`,t.textAlign=`center`,[`心`,`技`,`体`].forEach((e,n)=>t.fillText(e,896,260+n*250,200)),t.fillStyle=`#c0392b`,t.fillRect(930,830,46,46);let r=new P(e);return r.colorSpace=w,r.anisotropy=8,r.name=`Dojo signs`,r}function Qn(){if(typeof document>`u`)return null;let e=document.createElement(`canvas`);e.width=128,e.height=128;let t=e.getContext(`2d`);t.fillStyle=`#fffaf0`,t.fillRect(0,0,128,128);let n=dn(5);for(let e=0;e<60;e++)t.fillStyle=`rgba(230,215,185,${.08+n()*.08})`,t.fillRect(n()*128,n()*128,6+n()*20,2);t.fillStyle=`#7a5a3c`;for(let e=1;e<3;e++)t.fillRect(e*128/3-3,0,6,128);for(let e=1;e<4;e++)t.fillRect(0,e*128/4-3,128,6);t.fillRect(0,0,128,3),t.fillRect(0,125,128,3),t.fillRect(0,0,3,128),t.fillRect(125,0,3,128);let r=new P(e);return r.colorSpace=w,r.wrapS=r.wrapT=Me,r.anisotropy=4,r.name=`Dojo shoji`,r}function $n(){if(typeof document>`u`)return null;let e=1024,t=document.createElement(`canvas`);t.width=t.height=e;let n=t.getContext(`2d`),r=dn(606);for(let t=0;t<16;t++){let i=[],a=r()*e;for(;i.length<3;)i.push(a%e),a+=e*(.28+r()*.2);i.sort((e,t)=>e-t);for(let a=0;a<i.length;a++){let o=i[a],s=a+1<i.length?i[a+1]:i[0]+e,c=.93+r()*.12,l=r(),u=`rgb(${Math.round(236*c-l*6)},${Math.round(202*c-l*4)},${Math.round(150*c)})`;for(let e of[0,-1024]){n.fillStyle=u,n.fillRect(o+e,t*64,s-o,64);for(let i=0;i<7;i++){n.strokeStyle=`rgba(160,110,62,${.05+r()*.07})`,n.lineWidth=.8+r()*1.4,n.beginPath();let i=t*64+3+r()*58,a=r()*6,c=1+r()*2.2;for(let t=0;t<=s-o;t+=16)n.lineTo(o+e+t,i+Math.sin(t/70+a)*c);n.stroke()}n.fillStyle=`rgba(120,78,42,.55)`,n.fillRect(o+e-1,t*64,2.5,64)}}n.fillStyle=`rgba(120,78,42,.6)`,n.fillRect(0,t*64-1,e,2.5)}let i=new P(t);return i.colorSpace=w,i.wrapS=i.wrapT=Me,i.anisotropy=8,i.name=`Dojo wooden floor`,i}function er(){if(typeof document>`u`)return null;let e=document.createElement(`canvas`);e.width=e.height=512;let t=e.getContext(`2d`),n=dn(77);for(let e=0;e<2;e++){let r=e*512/2;t.fillStyle=e?`#cbdda2`:`#c4d89b`,t.fillRect(0,r,512,256);for(let e=r+2;e<r+256;e+=4)t.fillStyle=`rgba(120,150,80,${.1+n()*.08})`,t.fillRect(0,e,512,1.4);for(let e=0;e<40;e++)t.fillStyle=`rgba(255,255,230,${.05+n()*.05})`,t.fillRect(n()*512,r+n()*512/2,30+n()*80,2);t.fillStyle=`#3f5c4c`,t.fillRect(0,r,512,9),t.fillRect(0,r+256-9,512,9),t.fillStyle=`rgba(255,255,255,.25)`;for(let e=0;e<512;e+=12)t.fillRect(e,r+3,5,2),t.fillRect(e+6,r+256-6,5,2)}t.fillStyle=`rgba(90,110,60,.5)`,t.fillRect(510,0,2,512);let r=new P(e);return r.colorSpace=w,r.wrapS=r.wrapT=Me,r.anisotropy=8,r.name=`Dojo tatami`,r}var tr={royal:{hemisphere:{sky:`#88a8de`,ground:`#323043`,intensity:.65},sun:{color:`#99b9ef`,intensity:1.75},fill:{color:`#e9a775`,intensity:.32},fog:{color:`#48658a`,density:.0034},environment:.22,background:`#203d61`,exposure:.92},colosseum:{hemisphere:{sky:`#c5d4ec`,ground:`#645342`,intensity:.85},sun:{color:`#ffe1b3`,intensity:2.4},fill:{color:`#e9a775`,intensity:.32},fog:{color:`#48658a`,density:.0034},environment:.3,background:`#203d61`,exposure:.92},school:{hemisphere:{sky:`#dcefff`,ground:`#9cc77f`,intensity:1.05},sun:{color:`#fff1d8`,intensity:2.2},fill:{color:`#ffd6b0`,intensity:.35},fog:{color:`#e4f0f2`,density:.0012},environment:.25,background:`#bfe3f7`,exposure:.95},dojo:{hemisphere:{sky:`#fff1dc`,ground:`#c9a77a`,intensity:1.05},sun:{color:`#ffecd0`,intensity:2.2},fill:{color:`#ffd6b0`,intensity:.35},fog:{color:`#e4f0f2`,density:.0012},environment:.25,background:`#bfe3f7`,exposure:.95}};function nr(e,t,n,r){let i=(e,t)=>e.role===t.role&&e.team===t.team&&(e.look??``)===(r.look?.(t)??``);for(let[i,a]of[...e])t.some(e=>e.id===i)||(e.delete(i),n.push(a),r.park(a));for(let a of t){let t=e.get(a.id);t&&!i(t,a)&&r.ready(a)&&(e.delete(a.id),n.push(t),r.park(t))}for(let a of t){if(e.has(a.id)||!r.ready(a))continue;let t=n.findIndex(e=>i(e,a));if(t<0){e.set(a.id,r.create(a));continue}let[o]=n.splice(t,1);r.unpark(o),e.set(a.id,o)}}var rr=class extends n{constructor(){super(),this.name=`RoomEnvironment`,this.position.y=-3.5;let t=new fe;t.deleteAttribute(`uv`);let n=new F({side:1}),r=new F,i=new S(16777215,900,28,2);i.position.set(.418,16.199,.3),this.add(i);let a=new z(t,n);a.position.set(-.757,13.219,.717),a.scale.set(31.713,28.305,28.591),this.add(a);let o=new e(t,r,6),s=new A;s.position.set(-10.906,2.009,1.846),s.rotation.set(0,-.195,0),s.scale.set(2.328,7.905,4.651),s.updateMatrix(),o.setMatrixAt(0,s.matrix),s.position.set(-5.607,-.754,-.758),s.rotation.set(0,.994,0),s.scale.set(1.97,1.534,3.955),s.updateMatrix(),o.setMatrixAt(1,s.matrix),s.position.set(6.167,.857,7.803),s.rotation.set(0,.561,0),s.scale.set(3.927,6.285,3.687),s.updateMatrix(),o.setMatrixAt(2,s.matrix),s.position.set(-2.017,.018,6.124),s.rotation.set(0,.333,0),s.scale.set(2.002,4.566,2.064),s.updateMatrix(),o.setMatrixAt(3,s.matrix),s.position.set(2.291,-.756,-2.621),s.rotation.set(0,-.286,0),s.scale.set(1.546,1.552,1.496),s.updateMatrix(),o.setMatrixAt(4,s.matrix),s.position.set(-2.193,-.369,-5.547),s.rotation.set(0,.516,0),s.scale.set(3.875,3.487,2.986),s.updateMatrix(),o.setMatrixAt(5,s.matrix),this.add(o);let c=new z(t,ir(50));c.position.set(-16.116,14.37,8.208),c.scale.set(.1,2.428,2.739),this.add(c);let l=new z(t,ir(50));l.position.set(-16.109,18.021,-8.207),l.scale.set(.1,2.425,2.751),this.add(l);let u=new z(t,ir(17));u.position.set(14.904,12.198,-1.832),u.scale.set(.15,4.265,6.331),this.add(u);let d=new z(t,ir(43));d.position.set(-.462,8.89,14.52),d.scale.set(4.38,5.441,.088),this.add(d);let f=new z(t,ir(20));f.position.set(3.235,11.486,-12.541),f.scale.set(2.5,2,.1),this.add(f);let p=new z(t,ir(100));p.position.set(0,20,0),p.scale.set(1,.1,1),this.add(p)}dispose(){let e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(let t of e)t.dispose()}};function ir(e){return new ke({color:0,emissive:16777215,emissiveIntensity:e})}var ar={name:`CopyShader`,uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`},or=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error(`THREE.Pass: .render() must be implemented in derived pass.`)}dispose(){}},sr=new o(-1,1,1,-1,0,1),cr=new class extends H{constructor(){super(),this.setAttribute(`position`,new p([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute(`uv`,new p([0,2,0,0,2,0],2))}},lr=class{constructor(e){this._mesh=new z(cr,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,sr)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}},ur=class extends or{constructor(e,t=`tDiffuse`){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof ge?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=N.clone(e.uniforms),this.material=new ge({name:e.name===void 0?`unspecified`:e.name,defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new lr(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}},dr=class extends or{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){let r=e.getContext(),i=e.state;i.buffers.color.setMask(!1),i.buffers.depth.setMask(!1),i.buffers.color.setLocked(!0),i.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),i.buffers.stencil.setTest(!0),i.buffers.stencil.setOp(r.REPLACE,r.REPLACE,r.REPLACE),i.buffers.stencil.setFunc(r.ALWAYS,a,4294967295),i.buffers.stencil.setClear(o),i.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),i.buffers.color.setLocked(!1),i.buffers.depth.setLocked(!1),i.buffers.color.setMask(!0),i.buffers.depth.setMask(!0),i.buffers.stencil.setLocked(!1),i.buffers.stencil.setFunc(r.EQUAL,1,4294967295),i.buffers.stencil.setOp(r.KEEP,r.KEEP,r.KEEP),i.buffers.stencil.setLocked(!0)}},fr=class extends or{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}},pr=class{constructor(e,n){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),n===void 0){let r=e.getSize(new t);this._width=r.width,this._height=r.height,n=new Te(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:_}),n.texture.name=`EffectComposer.rt1`}else this._width=n.width,this._height=n.height;this.renderTarget1=n,this.renderTarget2=n.clone(),this.renderTarget2.texture.name=`EffectComposer.rt2`,this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new ur(ar),this.copyPass.material.blending=0,this.timer=new r}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){this.timer.update(),e===void 0&&(e=this.timer.getDelta());let t=this.renderer.getRenderTarget(),n=!1;for(let t=0,r=this.passes.length;t<r;t++){let r=this.passes[t];if(r.enabled!==!1){if(r.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(t),r.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),r.needsSwap){if(n){let t=this.renderer.getContext(),n=this.renderer.state.buffers.stencil;n.setFunc(t.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),n.setFunc(t.EQUAL,1,4294967295)}this.swapBuffers()}dr!==void 0&&(r instanceof dr?n=!0:r instanceof fr&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let n=this.renderer.getSize(new t);this._pixelRatio=this.renderer.getPixelRatio(),this._width=n.width,this._height=n.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let n=this._width*this._pixelRatio,r=this._height*this._pixelRatio;this.renderTarget1.setSize(n,r),this.renderTarget2.setSize(n,r);for(let e=0;e<this.passes.length;e++)this.passes[e].setSize(n,r)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}},mr=class extends or{constructor(e,t,n=null,r=null,a=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=r,this.clearAlpha=a,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new i}render(e,t,n){let r=e.autoClear;e.autoClear=!1;let i,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(i=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==1&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(i),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),e.autoClear=r}},hr={name:`GTAOShader`,defines:{PERSPECTIVE_CAMERA:1,SAMPLES:16,NORMAL_VECTOR_TYPE:1,DEPTH_SWIZZLING:`x`,SCREEN_SPACE_RADIUS:0,SCREEN_SPACE_RADIUS_SCALE:100,SCENE_CLIP_BOX:0},uniforms:{tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new t},cameraNear:{value:null},cameraFar:{value:null},cameraProjectionMatrix:{value:new B},cameraProjectionMatrixInverse:{value:new B},cameraWorldMatrix:{value:new B},radius:{value:.25},distanceExponent:{value:1},thickness:{value:1},distanceFallOff:{value:1},scale:{value:1},sceneBoxMin:{value:new L(-1,-1,-1)},sceneBoxMax:{value:new L(1,1,1)}},vertexShader:`

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
		}`},gr={name:`GTAODepthShader`,defines:{PERSPECTIVE_CAMERA:1},uniforms:{tDepth:{value:null},cameraNear:{value:null},cameraFar:{value:null}},vertexShader:`
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

		}`},_r={name:`GTAOBlendShader`,uniforms:{tDiffuse:{value:null},intensity:{value:1}},vertexShader:`
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
		}`};function vr(e=5){let t=Math.floor(e)%2==0?Math.floor(e)+1:Math.floor(e),n=yr(t),r=n.length,i=new Uint8Array(r*4);for(let e=0;e<r;++e){let t=n[e],a=2*Math.PI*t/r,o=new L(Math.cos(a),Math.sin(a),0).normalize();i[e*4]=(o.x*.5+.5)*255,i[e*4+1]=(o.y*.5+.5)*255,i[e*4+2]=127,i[e*4+3]=255}let a=new b(i,t,t);return a.wrapS=Me,a.wrapT=Me,a.needsUpdate=!0,a}function yr(e){let t=Math.floor(e)%2==0?Math.floor(e)+1:Math.floor(e),n=t*t,r=Array(n).fill(0),i=Math.floor(t/2),a=t-1;for(let e=1;e<=n;){if(i===-1&&a===t?(a=t-2,i=0):(a===t&&(a=0),i<0&&(i=t-1)),r[i*t+a]!==0){a-=2,i++;continue}r[i*t+a]=e++,a++,i--}return r}var br={name:`PoissonDenoiseShader`,defines:{SAMPLES:16,SAMPLE_VECTORS:xr(16,2,1),NORMAL_VECTOR_TYPE:1,DEPTH_VALUE_SOURCE:0},uniforms:{tDiffuse:{value:null},tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new t},cameraProjectionMatrixInverse:{value:new B},lumaPhi:{value:5},depthPhi:{value:5},normalPhi:{value:5},radius:{value:4},index:{value:0}},vertexShader:`

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
		}`};function xr(e,t,n){let r=Sr(e,t,n),i=`vec3[SAMPLES](`;for(let t=0;t<e;t++){let n=r[t];i+=`vec3(${n.x}, ${n.y}, ${n.z})${t<e-1?`,`:`)`}`}return i}function Sr(e,t,n){let r=[];for(let i=0;i<e;i++){let a=2*Math.PI*t*i/e,o=(i/(e-1))**n;r.push(new L(Math.cos(a),Math.sin(a),o))}return r}var Cr=class{constructor(e=Math){this.grad3=[[1,1,0],[-1,1,0],[1,-1,0],[-1,-1,0],[1,0,1],[-1,0,1],[1,0,-1],[-1,0,-1],[0,1,1],[0,-1,1],[0,1,-1],[0,-1,-1]],this.grad4=[[0,1,1,1],[0,1,1,-1],[0,1,-1,1],[0,1,-1,-1],[0,-1,1,1],[0,-1,1,-1],[0,-1,-1,1],[0,-1,-1,-1],[1,0,1,1],[1,0,1,-1],[1,0,-1,1],[1,0,-1,-1],[-1,0,1,1],[-1,0,1,-1],[-1,0,-1,1],[-1,0,-1,-1],[1,1,0,1],[1,1,0,-1],[1,-1,0,1],[1,-1,0,-1],[-1,1,0,1],[-1,1,0,-1],[-1,-1,0,1],[-1,-1,0,-1],[1,1,1,0],[1,1,-1,0],[1,-1,1,0],[1,-1,-1,0],[-1,1,1,0],[-1,1,-1,0],[-1,-1,1,0],[-1,-1,-1,0]],this.p=[];for(let t=0;t<256;t++)this.p[t]=Math.floor(e.random()*256);this.perm=[];for(let e=0;e<512;e++)this.perm[e]=this.p[e&255];this.simplex=[[0,1,2,3],[0,1,3,2],[0,0,0,0],[0,2,3,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,3,0],[0,2,1,3],[0,0,0,0],[0,3,1,2],[0,3,2,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,3,2,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,0,3],[0,0,0,0],[1,3,0,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,3,0,1],[2,3,1,0],[1,0,2,3],[1,0,3,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,3,1],[0,0,0,0],[2,1,3,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,1,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,0,1,2],[3,0,2,1],[0,0,0,0],[3,1,2,0],[2,1,0,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,1,0,2],[0,0,0,0],[3,2,0,1],[3,2,1,0]]}noise(e,t){let n,r,i,a=.5*(Math.sqrt(3)-1),o=(e+t)*a,s=Math.floor(e+o),c=Math.floor(t+o),l=(3-Math.sqrt(3))/6,u=(s+c)*l,d=s-u,f=c-u,p=e-d,m=t-f,h,g;p>m?(h=1,g=0):(h=0,g=1);let _=p-h+l,v=m-g+l,y=p-1+2*l,b=m-1+2*l,x=s&255,S=c&255,C=this.perm[x+this.perm[S]]%12,w=this.perm[x+h+this.perm[S+g]]%12,T=this.perm[x+1+this.perm[S+1]]%12,E=.5-p*p-m*m;E<0?n=0:(E*=E,n=E*E*this._dot(this.grad3[C],p,m));let D=.5-_*_-v*v;D<0?r=0:(D*=D,r=D*D*this._dot(this.grad3[w],_,v));let O=.5-y*y-b*b;return O<0?i=0:(O*=O,i=O*O*this._dot(this.grad3[T],y,b)),70*(n+r+i)}noise3d(e,t,n){let r,i,a,o,s=(e+t+n)*(1/3),c=Math.floor(e+s),l=Math.floor(t+s),u=Math.floor(n+s),d=1/6,f=(c+l+u)*d,p=c-f,m=l-f,h=u-f,g=e-p,_=t-m,v=n-h,y,b,x,S,C,w;g>=_?_>=v?(y=1,b=0,x=0,S=1,C=1,w=0):g>=v?(y=1,b=0,x=0,S=1,C=0,w=1):(y=0,b=0,x=1,S=1,C=0,w=1):_<v?(y=0,b=0,x=1,S=0,C=1,w=1):g<v?(y=0,b=1,x=0,S=0,C=1,w=1):(y=0,b=1,x=0,S=1,C=1,w=0);let T=g-y+d,E=_-b+d,D=v-x+d,O=g-S+2*d,ee=_-C+2*d,te=v-w+2*d,k=g-1+3*d,A=_-1+3*d,ne=v-1+3*d,j=c&255,re=l&255,M=u&255,N=this.perm[j+this.perm[re+this.perm[M]]]%12,ie=this.perm[j+y+this.perm[re+b+this.perm[M+x]]]%12,ae=this.perm[j+S+this.perm[re+C+this.perm[M+w]]]%12,oe=this.perm[j+1+this.perm[re+1+this.perm[M+1]]]%12,se=.6-g*g-_*_-v*v;se<0?r=0:(se*=se,r=se*se*this._dot3(this.grad3[N],g,_,v));let ce=.6-T*T-E*E-D*D;ce<0?i=0:(ce*=ce,i=ce*ce*this._dot3(this.grad3[ie],T,E,D));let le=.6-O*O-ee*ee-te*te;le<0?a=0:(le*=le,a=le*le*this._dot3(this.grad3[ae],O,ee,te));let P=.6-k*k-A*A-ne*ne;return P<0?o=0:(P*=P,o=P*P*this._dot3(this.grad3[oe],k,A,ne)),32*(r+i+a+o)}noise4d(e,t,n,r){let i=this.grad4,a=this.simplex,o=this.perm,s=(Math.sqrt(5)-1)/4,c=(5-Math.sqrt(5))/20,l,u,d,f,p,m=(e+t+n+r)*s,h=Math.floor(e+m),g=Math.floor(t+m),_=Math.floor(n+m),v=Math.floor(r+m),y=(h+g+_+v)*c,b=h-y,x=g-y,S=_-y,C=v-y,w=e-b,T=t-x,E=n-S,D=r-C,O=w>T?32:0,ee=w>E?16:0,te=T>E?8:0,k=w>D?4:0,A=T>D?2:0,ne=+(E>D),j=O+ee+te+k+A+ne,re=+(a[j][0]>=3),M=+(a[j][1]>=3),N=+(a[j][2]>=3),ie=+(a[j][3]>=3),ae=+(a[j][0]>=2),oe=+(a[j][1]>=2),se=+(a[j][2]>=2),ce=+(a[j][3]>=2),le=+(a[j][0]>=1),P=+(a[j][1]>=1),F=+(a[j][2]>=1),ue=+(a[j][3]>=1),I=w-re+c,L=T-M+c,de=E-N+c,fe=D-ie+c,pe=w-ae+2*c,me=T-oe+2*c,R=E-se+2*c,he=D-ce+2*c,ge=w-le+3*c,_e=T-P+3*c,ve=E-F+3*c,ye=D-ue+3*c,be=w-1+4*c,xe=T-1+4*c,Se=E-1+4*c,z=D-1+4*c,Ce=h&255,B=g&255,V=_&255,we=v&255,Te=o[Ce+o[B+o[V+o[we]]]]%32,Ee=o[Ce+re+o[B+M+o[V+N+o[we+ie]]]]%32,De=o[Ce+ae+o[B+oe+o[V+se+o[we+ce]]]]%32,H=o[Ce+le+o[B+P+o[V+F+o[we+ue]]]]%32,Oe=o[Ce+1+o[B+1+o[V+1+o[we+1]]]]%32,ke=.6-w*w-T*T-E*E-D*D;ke<0?l=0:(ke*=ke,l=ke*ke*this._dot4(i[Te],w,T,E,D));let Ae=.6-I*I-L*L-de*de-fe*fe;Ae<0?u=0:(Ae*=Ae,u=Ae*Ae*this._dot4(i[Ee],I,L,de,fe));let je=.6-pe*pe-me*me-R*R-he*he;je<0?d=0:(je*=je,d=je*je*this._dot4(i[De],pe,me,R,he));let Me=.6-ge*ge-_e*_e-ve*ve-ye*ye;Me<0?f=0:(Me*=Me,f=Me*Me*this._dot4(i[H],ge,_e,ve,ye));let Ne=.6-be*be-xe*xe-Se*Se-z*z;return Ne<0?p=0:(Ne*=Ne,p=Ne*Ne*this._dot4(i[Oe],be,xe,Se,z)),27*(l+u+d+f+p)}_dot(e,t,n){return e[0]*t+e[1]*n}_dot3(e,t,n,r){return e[0]*t+e[1]*n+e[2]*r}_dot4(e,t,n,r,i){return e[0]*t+e[1]*n+e[2]*r+e[3]*i}},wr=class e extends or{constructor(e,t,n=512,r=512,a,o,s){super(),this.width=n,this.height=r,this.clear=!0,this.camera=t,this.scene=e,this.output=0,this._renderGBuffer=!0,this._visibilityCache=[],this.blendIntensity=1,this.pdRings=2,this.pdRadiusExponent=2,this.pdSamples=16,this.gtaoNoiseTexture=vr(),this.pdNoiseTexture=this._generateNoise(),this.gtaoRenderTarget=new Te(this.width,this.height,{type:_}),this.pdRenderTarget=this.gtaoRenderTarget.clone(),this.gtaoMaterial=new ge({defines:Object.assign({},hr.defines),uniforms:N.clone(hr.uniforms),vertexShader:hr.vertexShader,fragmentShader:hr.fragmentShader,blending:0,depthTest:!1,depthWrite:!1}),this.gtaoMaterial.defines.PERSPECTIVE_CAMERA=+!!this.camera.isPerspectiveCamera,this.gtaoMaterial.uniforms.tNoise.value=this.gtaoNoiseTexture,this.gtaoMaterial.uniforms.resolution.value.set(this.width,this.height),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.normalMaterial=new Ne,this.normalMaterial.blending=0,this.pdMaterial=new ge({defines:Object.assign({},br.defines),uniforms:N.clone(br.uniforms),vertexShader:br.vertexShader,fragmentShader:br.fragmentShader,depthTest:!1,depthWrite:!1}),this.pdMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.pdMaterial.uniforms.tNoise.value=this.pdNoiseTexture,this.pdMaterial.uniforms.resolution.value.set(this.width,this.height),this.pdMaterial.uniforms.lumaPhi.value=10,this.pdMaterial.uniforms.depthPhi.value=2,this.pdMaterial.uniforms.normalPhi.value=3,this.pdMaterial.uniforms.radius.value=8,this.depthRenderMaterial=new ge({defines:Object.assign({},gr.defines),uniforms:N.clone(gr.uniforms),vertexShader:gr.vertexShader,fragmentShader:gr.fragmentShader,blending:0}),this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.copyMaterial=new ge({uniforms:N.clone(ar.uniforms),vertexShader:ar.vertexShader,fragmentShader:ar.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blendSrc:208,blendDst:200,blendEquation:100,blendSrcAlpha:206,blendDstAlpha:200,blendEquationAlpha:100}),this.blendMaterial=new ge({uniforms:N.clone(_r.uniforms),vertexShader:_r.vertexShader,fragmentShader:_r.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blending:5,blendSrc:208,blendDst:200,blendEquation:100,blendSrcAlpha:206,blendDstAlpha:200,blendEquationAlpha:100}),this._fsQuad=new lr(null),this._originalClearColor=new i,this.setGBuffer(a?a.depthTexture:void 0,a?a.normalTexture:void 0),o!==void 0&&this.updateGtaoMaterial(o),s!==void 0&&this.updatePdMaterial(s)}setSize(e,t){this.width=e,this.height=t,this.gtaoRenderTarget.setSize(e,t),this.normalRenderTarget.setSize(e,t),this.pdRenderTarget.setSize(e,t),this.gtaoMaterial.uniforms.resolution.value.set(e,t),this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.pdMaterial.uniforms.resolution.value.set(e,t),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse)}dispose(){this.gtaoNoiseTexture.dispose(),this.pdNoiseTexture.dispose(),this.normalRenderTarget.dispose(),this.gtaoRenderTarget.dispose(),this.pdRenderTarget.dispose(),this.normalMaterial.dispose(),this.pdMaterial.dispose(),this.copyMaterial.dispose(),this.depthRenderMaterial.dispose(),this._fsQuad.dispose()}get gtaoMap(){return this.pdRenderTarget.texture}setGBuffer(e,t){e===void 0?(this.depthTexture=new l,this.depthTexture.format=E,this.depthTexture.type=we,this.normalRenderTarget=new Te(this.width,this.height,{minFilter:te,magFilter:te,type:_,depthTexture:this.depthTexture}),this.normalTexture=this.normalRenderTarget.texture,this._renderGBuffer=!0):(this.depthTexture=e,this.normalTexture=t,this._renderGBuffer=!1);let n=+!!this.normalTexture,r=this.depthTexture===this.normalTexture?`w`:`x`;this.gtaoMaterial.defines.NORMAL_VECTOR_TYPE=n,this.gtaoMaterial.defines.DEPTH_SWIZZLING=r,this.gtaoMaterial.uniforms.tNormal.value=this.normalTexture,this.gtaoMaterial.uniforms.tDepth.value=this.depthTexture,this.pdMaterial.defines.NORMAL_VECTOR_TYPE=n,this.pdMaterial.defines.DEPTH_SWIZZLING=r,this.pdMaterial.uniforms.tNormal.value=this.normalTexture,this.pdMaterial.uniforms.tDepth.value=this.depthTexture,this.depthRenderMaterial.uniforms.tDepth.value=this.normalRenderTarget.depthTexture}setSceneClipBox(e){e?(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX!==1,this.gtaoMaterial.defines.SCENE_CLIP_BOX=1,this.gtaoMaterial.uniforms.sceneBoxMin.value.copy(e.min),this.gtaoMaterial.uniforms.sceneBoxMax.value.copy(e.max)):(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX===0,this.gtaoMaterial.defines.SCENE_CLIP_BOX=0)}updateGtaoMaterial(e){e.radius!==void 0&&(this.gtaoMaterial.uniforms.radius.value=e.radius),e.distanceExponent!==void 0&&(this.gtaoMaterial.uniforms.distanceExponent.value=e.distanceExponent),e.thickness!==void 0&&(this.gtaoMaterial.uniforms.thickness.value=e.thickness),e.distanceFallOff!==void 0&&(this.gtaoMaterial.uniforms.distanceFallOff.value=e.distanceFallOff,this.gtaoMaterial.needsUpdate=!0),e.scale!==void 0&&(this.gtaoMaterial.uniforms.scale.value=e.scale),e.samples!==void 0&&e.samples!==this.gtaoMaterial.defines.SAMPLES&&(this.gtaoMaterial.defines.SAMPLES=e.samples,this.gtaoMaterial.needsUpdate=!0),e.screenSpaceRadius!==void 0&&+!!e.screenSpaceRadius!==this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS&&(this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS=+!!e.screenSpaceRadius,this.gtaoMaterial.needsUpdate=!0)}updatePdMaterial(e){let t=!1;e.lumaPhi!==void 0&&(this.pdMaterial.uniforms.lumaPhi.value=e.lumaPhi),e.depthPhi!==void 0&&(this.pdMaterial.uniforms.depthPhi.value=e.depthPhi),e.normalPhi!==void 0&&(this.pdMaterial.uniforms.normalPhi.value=e.normalPhi),e.radius!==void 0&&e.radius!==this.radius&&(this.pdMaterial.uniforms.radius.value=e.radius),e.radiusExponent!==void 0&&e.radiusExponent!==this.pdRadiusExponent&&(this.pdRadiusExponent=e.radiusExponent,t=!0),e.rings!==void 0&&e.rings!==this.pdRings&&(this.pdRings=e.rings,t=!0),e.samples!==void 0&&e.samples!==this.pdSamples&&(this.pdSamples=e.samples,t=!0),t&&(this.pdMaterial.defines.SAMPLES=this.pdSamples,this.pdMaterial.defines.SAMPLE_VECTORS=xr(this.pdSamples,this.pdRings,this.pdRadiusExponent),this.pdMaterial.needsUpdate=!0)}render(t,n,r){switch(this._renderGBuffer&&(this._overrideVisibility(),this._renderOverride(t,this.normalMaterial,this.normalRenderTarget,7829503,1),this._restoreVisibility()),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.gtaoMaterial.uniforms.cameraWorldMatrix.value.copy(this.camera.matrixWorld),this._renderPass(t,this.gtaoMaterial,this.gtaoRenderTarget,16777215,1),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this._renderPass(t,this.pdMaterial,this.pdRenderTarget,16777215,1),this.output){case e.OUTPUT.Off:break;case e.OUTPUT.Diffuse:this.copyMaterial.uniforms.tDiffuse.value=r.texture,this.copyMaterial.blending=0,this._renderPass(t,this.copyMaterial,this.renderToScreen?null:n);break;case e.OUTPUT.AO:this.copyMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.copyMaterial.blending=0,this._renderPass(t,this.copyMaterial,this.renderToScreen?null:n);break;case e.OUTPUT.Denoise:this.copyMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this.copyMaterial.blending=0,this._renderPass(t,this.copyMaterial,this.renderToScreen?null:n);break;case e.OUTPUT.Depth:this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this._renderPass(t,this.depthRenderMaterial,this.renderToScreen?null:n);break;case e.OUTPUT.Normal:this.copyMaterial.uniforms.tDiffuse.value=this.normalRenderTarget.texture,this.copyMaterial.blending=0,this._renderPass(t,this.copyMaterial,this.renderToScreen?null:n);break;case e.OUTPUT.Default:this.copyMaterial.uniforms.tDiffuse.value=r.texture,this.copyMaterial.blending=0,this._renderPass(t,this.copyMaterial,this.renderToScreen?null:n),this.blendMaterial.uniforms.intensity.value=this.blendIntensity,this.blendMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this._renderPass(t,this.blendMaterial,this.renderToScreen?null:n);break;default:console.warn(`THREE.GTAOPass: Unknown output type.`)}}_renderPass(e,t,n,r,i){e.getClearColor(this._originalClearColor);let a=e.getClearAlpha(),o=e.autoClear;e.setRenderTarget(n),e.autoClear=!1,r!=null&&(e.setClearColor(r),e.setClearAlpha(i||0),e.clear()),this._fsQuad.material=t,this._fsQuad.render(e),e.autoClear=o,e.setClearColor(this._originalClearColor),e.setClearAlpha(a)}_renderOverride(e,t,n,r,i){e.getClearColor(this._originalClearColor);let a=e.getClearAlpha(),o=e.autoClear;e.setRenderTarget(n),e.autoClear=!1,r=t.clearColor||r,i=t.clearAlpha||i,r!=null&&(e.setClearColor(r),e.setClearAlpha(i||0),e.clear()),this.scene.overrideMaterial=t,e.render(this.scene,this.camera),this.scene.overrideMaterial=null,e.autoClear=o,e.setClearColor(this._originalClearColor),e.setClearAlpha(a)}_overrideVisibility(){let e=this.scene,t=this._visibilityCache;e.traverse(function(e){(e.isPoints||e.isLine||e.isLine2)&&e.visible&&(e.visible=!1,t.push(e))})}_restoreVisibility(){let e=this._visibilityCache;for(let t=0;t<e.length;t++)e[t].visible=!0;e.length=0}_generateNoise(e=64){let t=new Cr,n=e*e*4,r=new Uint8Array(n);for(let n=0;n<e;n++)for(let i=0;i<e;i++){let a=n,o=i;r[(n*e+i)*4]=(t.noise(a,o)*.5+.5)*255,r[(n*e+i)*4+1]=(t.noise(a+e,o)*.5+.5)*255,r[(n*e+i)*4+2]=(t.noise(a,o+e)*.5+.5)*255,r[(n*e+i)*4+3]=(t.noise(a+e,o+e)*.5+.5)*255}let i=new b(r,e,e,Fe,f);return i.wrapS=Me,i.wrapT=Me,i.needsUpdate=!0,i}};wr.OUTPUT={Off:-1,Default:0,Diffuse:1,Depth:2,Normal:3,AO:4,Denoise:5};var Tr={name:`OutputShader`,uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`},Er=class extends or{constructor(){super(),this.isOutputPass=!0,this.uniforms=N.clone(Tr.uniforms),this.material=new Oe({name:Tr.name,uniforms:this.uniforms,vertexShader:Tr.vertexShader,fragmentShader:Tr.fragmentShader}),this._fsQuad=new lr(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},Ae.getTransfer(this._outputColorSpace)===`srgb`&&(this.material.defines.SRGB_TRANSFER=``),this._toneMapping===1?this.material.defines.LINEAR_TONE_MAPPING=``:this._toneMapping===2?this.material.defines.REINHARD_TONE_MAPPING=``:this._toneMapping===3?this.material.defines.CINEON_TONE_MAPPING=``:this._toneMapping===4?this.material.defines.ACES_FILMIC_TONE_MAPPING=``:this._toneMapping===6?this.material.defines.AGX_TONE_MAPPING=``:this._toneMapping===7?this.material.defines.NEUTRAL_TONE_MAPPING=``:this._toneMapping===5&&(this.material.defines.CUSTOM_TONE_MAPPING=``),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}},Dr={name:`FXAAShader`,uniforms:{tDiffuse:{value:null},resolution:{value:new t(1/1024,1/512)}},vertexShader:`

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

		}`},Or={name:`LuminosityHighPassShader`,uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new i(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`},kr=class e extends or{constructor(e,n=1,r,a){super(),this.strength=n,this.radius=r,this.threshold=a,this.resolution=e===void 0?new t(256,256):new t(e.x,e.y),this.clearColor=new i(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let o=Math.round(this.resolution.x/2),s=Math.round(this.resolution.y/2);this.renderTargetBright=new Te(o,s,{type:_}),this.renderTargetBright.texture.name=`UnrealBloomPass.bright`,this.renderTargetBright.texture.generateMipmaps=!1;for(let e=0;e<this.nMips;e++){let t=new Te(o,s,{type:_});t.texture.name=`UnrealBloomPass.h`+e,t.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(t);let n=new Te(o,s,{type:_});n.texture.name=`UnrealBloomPass.v`+e,n.texture.generateMipmaps=!1,this.renderTargetsVertical.push(n),o=Math.round(o/2),s=Math.round(s/2)}let c=Or;this.highPassUniforms=N.clone(c.uniforms),this.highPassUniforms.luminosityThreshold.value=a,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new ge({uniforms:this.highPassUniforms,vertexShader:c.vertexShader,fragmentShader:c.fragmentShader}),this.separableBlurMaterials=[];let l=[6,10,14,18,22];o=Math.round(this.resolution.x/2),s=Math.round(this.resolution.y/2);for(let e=0;e<this.nMips;e++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(l[e])),this.separableBlurMaterials[e].uniforms.invSize.value=new t(1/o,1/s),o=Math.round(o/2),s=Math.round(s/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=n,this.compositeMaterial.uniforms.bloomRadius.value=.1;let u=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=u,this.bloomTintColors=[new L(1,1,1),new L(1,1,1),new L(1,1,1),new L(1,1,1),new L(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=N.clone(ar.uniforms),this.blendMaterial=new ge({uniforms:this.copyUniforms,vertexShader:ar.vertexShader,fragmentShader:ar.fragmentShader,premultipliedAlpha:!0,blending:2,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new i,this._oldClearAlpha=1,this._basic=new R,this._fsQuad=new lr(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,n){let r=Math.round(e/2),i=Math.round(n/2);this.renderTargetBright.setSize(r,i);for(let e=0;e<this.nMips;e++)this.renderTargetsHorizontal[e].setSize(r,i),this.renderTargetsVertical[e].setSize(r,i),this.separableBlurMaterials[e].uniforms.invSize.value=new t(1/r,1/i),r=Math.round(r/2),i=Math.round(i/2)}render(t,n,r,i,a){t.getClearColor(this._oldClearColor),this._oldClearAlpha=t.getClearAlpha();let o=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),a&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=r.texture,t.setRenderTarget(null),t.clear(),this._fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=r.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this._fsQuad.render(t);let s=this.renderTargetBright;for(let n=0;n<this.nMips;n++)this._fsQuad.material=this.separableBlurMaterials[n],this.separableBlurMaterials[n].uniforms.colorTexture.value=s.texture,this.separableBlurMaterials[n].uniforms.direction.value=e.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[n]),t.clear(),this._fsQuad.render(t),this.separableBlurMaterials[n].uniforms.colorTexture.value=this.renderTargetsHorizontal[n].texture,this.separableBlurMaterials[n].uniforms.direction.value=e.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[n]),t.clear(),this._fsQuad.render(t),s=this.renderTargetsVertical[n];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this._fsQuad.render(t),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,a&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(r),this._fsQuad.render(t)),t.setClearColor(this._oldClearColor,this._oldClearAlpha),t.autoClear=o}_getSeparableBlurMaterial(e){let n=[],r=e/3;for(let t=0;t<e;t++)n.push(.39894*Math.exp(-.5*t*t/(r*r))/r);return new ge({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new t(.5,.5)},direction:{value:new t(.5,.5)},gaussianCoefficients:{value:n}},vertexShader:`

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

				}`})}_getCompositeMaterial(e){return new ge({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

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

				}`})}};kr.BlurDirectionX=new t(1,0),kr.BlurDirectionY=new t(0,1);var Ar={watercolor:{name:`水彩`,paper:`#fffaf0`,ink:`#4a3326`,paint:3,shade:.84,exposure:1.06,saturation:1.12,contrast:.92,warmth:.35,levels:0,bleed:.6,edge:.18,grain:.13,fine:.03,wash:.14,granulate:.22,hatch:0,wobble:.8,vignette:.06,stripes:!1,lines:[.08,.35]},pencil:{name:`色えんぴつ`,paper:`#fffcf4`,ink:`#3d3530`,paint:0,shade:.85,exposure:1.06,saturation:1,contrast:.92,warmth:.25,levels:0,bleed:.1,edge:.45,grain:.12,fine:.04,wash:0,granulate:0,hatch:.24,wobble:0,vignette:.05,stripes:!1,lines:[.1,.38]},pencil1:{name:`色えんぴつ（直す前）`,paper:`#fffcf4`,ink:`#3d3530`,paint:2,shade:.82,exposure:1.08,saturation:.95,contrast:.9,warmth:.25,levels:0,bleed:.1,edge:.5,grain:.16,fine:.08,wash:.03,granulate:0,hatch:.34,wobble:.5,vignette:.05,stripes:!0,lines:[.08,.35]},gouache:{name:`絵の具`,paper:`#fff8ec`,ink:`#2e2420`,paint:3.5,shade:.86,exposure:1.04,saturation:1.2,contrast:1,warmth:.3,levels:7,bleed:.2,edge:.45,grain:.08,fine:.02,wash:.05,granulate:.06,hatch:0,wobble:.4,vignette:.05,stripes:!1,lines:[.08,.35]}},jr=e=>new i(e);function Mr(e){let n=e=>{let t=jr(e);return new L(t.r,t.g,t.b)};return{tDiffuse:{value:null},resolution:{value:new t(1/1024,1/512)},paper:{value:n(e.paper)},ink:{value:n(e.ink)},paint:{value:e.paint},shade:{value:e.shade},exposure:{value:e.exposure},saturation:{value:e.saturation},contrast:{value:e.contrast},warmth:{value:e.warmth},levels:{value:e.levels},bleed:{value:e.bleed},edge:{value:e.edge},grain:{value:e.grain},fine:{value:e.fine},wash:{value:e.wash},granulate:{value:e.granulate},hatch:{value:e.hatch},stripes:{value:+!!e.stripes},lines:{value:new t(...e.lines)},wobble:{value:e.wobble},vignette:{value:e.vignette},tMask:{value:null},maskOn:{value:0}}}var Nr={name:`PictureBookShader`,uniforms:Mr(Ar.watercolor),vertexShader:`varying vec2 vUv;
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
}`};async function Pr(e,t){let r=new rr,i=new St(e),a=i;a._setSize(256);let s=a._allocateTargets(),c=new n,l=new fe,u=new R({side:1,depthWrite:!1,depthTest:!1});for(let e of[a._blurMaterial,a._ggxMaterial])c.add(new z(a._lodMeshes[0].geometry,e));c.add(new z(l,u));let d=e.getRenderTarget(),f=e.toneMapping,p;e.setRenderTarget(s),e.toneMapping=0;try{p=Promise.all([e.compileAsync(r,new be(90,1,.1,100)),e.compileAsync(c,new o)])}finally{e.setRenderTarget(d),e.toneMapping=f}await p;let m=i.fromScene(r,t).texture;return s.dispose(),l.dispose(),u.dispose(),r.dispose(),i.dispose(),m}var Fr={0:1,1:0,2:2};function Ir(e){let t=e,n=new pe;return n.side=e.shadowSide??Fr[e.side],n.alphaMap=t.alphaMap??null,n.alphaTest=e.alphaToCoverage===!0?.5:e.alphaTest,n.map=t.map??null,n.clipShadows=e.clipShadows,n.clippingPlanes=e.clippingPlanes??null,n.clipIntersection=e.clipIntersection,n.displacementMap=t.displacementMap??null,n.displacementScale=t.displacementScale??1,n.displacementBias=t.displacementBias??0,n.wireframe=t.wireframe??!1,n}function Lr(t,n){let r;if(t.isSkinnedMesh){let e=t,i=new u(t.geometry,n);i.bind(e.skeleton,e.bindMatrix),i.bindMode=e.bindMode,r=i}else if(t.isInstancedMesh){let i=t,a=new e(t.geometry,n,1);i.instanceColor&&(a.instanceColor=new se(new Float32Array(3),3)),a.morphTexture=i.morphTexture,r=a}else r=new z(t.geometry,n);return r.morphTargetInfluences=t.morphTargetInfluences,r.castShadow=t.castShadow,r.receiveShadow=t.receiveShadow,r.frustumCulled=!1,r}function Rr(e){let t=new V,n=new Set;return e.traverseVisible(e=>{let r=e;if(!r.isMesh||!e.castShadow)return;let i=Array.isArray(r.material)?r.geometry.groups.map(e=>r.material[e.materialIndex??0]):[r.material];for(let e of i){if(!e||!e.visible)continue;let i=Ir(e),a=r.geometry,o=[r.isSkinnedMesh,r.isInstancedMesh,!!r.instanceColor,!!r.morphTexture,i.side,i.alphaTest>0,!!i.map,!!i.alphaMap,!!i.displacementMap,i.wireframe,Object.keys(a.attributes).sort().join(`+`),Object.keys(a.morphAttributes).sort().join(`+`),a.morphTargetsRelative].join(`|`);if(n.has(o)){i.dispose();continue}n.add(o),t.add(Lr(r,i))}}),t}function zr(e){let t=e;if(!t||!t.isTexture||!(t.isCubeTexture||t.mapping===306))return;let n=bt.backgroundCube,r=new ge({name:`BackgroundCubeMaterial`,uniforms:N.clone(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:1,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1});r.uniforms.envMap.value=t,Object.defineProperty(r,"envMap",{get(){return this.uniforms.envMap.value}}),r.toneMapped=Ae.getTransfer(t.colorSpace)!==ye;let i=new fe(1,1,1);i.deleteAttribute(`normal`),i.deleteAttribute(`uv`);let a=new z(i,r);return a.frustumCulled=!1,a}var Br={1:`LINEAR_TONE_MAPPING`,2:`REINHARD_TONE_MAPPING`,3:`CINEON_TONE_MAPPING`,4:`ACES_FILMIC_TONE_MAPPING`,6:`AGX_TONE_MAPPING`,7:`NEUTRAL_TONE_MAPPING`,5:`CUSTOM_TONE_MAPPING`};function Vr(e,t){let n=e;if(n._outputColorSpace===t.outputColorSpace&&n._toneMapping===t.toneMapping)return;n._outputColorSpace=t.outputColorSpace,n._toneMapping=t.toneMapping;let r={};Ae.getTransfer(t.outputColorSpace)===`srgb`&&(r.SRGB_TRANSFER=``);let i=Br[t.toneMapping];i&&(r[i]=``),e.material.defines=r,e.material.needsUpdate=!0}var Hr=new o(-1,1,1,-1,0,1),Ur=class extends wr{setSize(e,t){let n=Math.min(.5,960/e);super.setSize(Math.max(1,Math.round(e*n)),Math.max(1,Math.round(t*n)))}render(e,t,n,r,i){this.setGBuffer(n.depthTexture,void 0),this.depthRenderMaterial.uniforms.tDepth.value=n.depthTexture,super.render(e,t,n,r,i)}},Wr={name:`SharpenShader`,uniforms:{tDiffuse:{value:null},resolution:{value:new t(1/1024,1/512)},sharpness:{value:{sharpness:.5}.sharpness}},vertexShader:`varying vec2 vUv;
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
}`};function Gr(e,t,n){let r=new Ur(e,t,16,16);return r.blendIntensity=1,r.updateGtaoMaterial({radius:1.15,thickness:1,distanceExponent:1.5,distanceFallOff:1,scale:1.4,samples:n?4:8,screenSpaceRadius:!1}),r.updatePdMaterial({samples:n?4:8,rings:2,radius:4,depthPhi:1,normalPhi:3}),r}function Kr(){let e=new kr(new t(16,16),.2,.45,1.25);return e.materialHighPassFilter.fragmentShader=e.materialHighPassFilter.fragmentShader.replace(`vec4 texel = texture2D( tDiffuse, vUv );`,`vec4 texel = texture2D( tDiffuse, vUv );
     texel.rgb=vec3(texel.r>=0.0?min(texel.r,16.0):0.0,
                    texel.g>=0.0?min(texel.g,16.0):0.0,
                    texel.b>=0.0?min(texel.b,16.0):0.0);`),e}function qr(e){let t=e;return t.isMesh?[t.material].flat().some(e=>!e.transparent&&!e.isShaderMaterial):!1}var Jr=e=>e.isMesh&&(/Line/.test(e.name)||[e.material].flat().some(e=>/Line/.test(e.name))),Yr=e=>!!(e.isMesh||e.isLine||e.isPoints||e.isSprite),Xr=class{renderer;scene;camera;mobile;composer;ao;bloom;sharpen;book;bookStyle=`off`;maskRoots=()=>[];mask;maskScene=Object.assign(new n,{overrideMaterial:new R({color:16777215,name:`Fighter mask`})});antialias;render3d;output=new Er;constructor(e,t,n,r=!1,i={}){this.renderer=e,this.scene=t,this.camera=n,this.mobile=r;let a=i.ambientOcclusion!==!1,o=i.bloom!==!1;this.composer=new pr(e);for(let e of[this.composer.renderTarget1,this.composer.renderTarget2])e.depthTexture=new l(1,1,oe);this.antialias=new ur(Dr),this.render3d=new mr(t,n),this.composer.addPass(this.render3d),a&&(this.ao=Gr(t,n,r),this.composer.addPass(this.ao)),o&&(this.bloom=Kr(),this.composer.addPass(this.bloom)),this.composer.addPass(this.output),this.composer.addPass(this.antialias),e.info.autoReset=!1}setAmbientOcclusion(e){e&&!this.ao&&(this.ao=Gr(this.scene,this.camera,this.mobile),this.composer.insertPass(this.ao,this.composer.passes.indexOf(this.render3d)+1),this.sizePasses()),this.ao&&(this.ao.enabled=e)}setBloom(e){e!==!!this.bloom&&(e?(this.bloom=Kr(),this.composer.insertPass(this.bloom,this.composer.passes.indexOf(this.output)),this.sizePasses()):this.bloom&&=(this.composer.removePass(this.bloom),this.bloom.dispose(),void 0))}setSharpen(e){e!==!!this.sharpen&&(e?(this.sharpen=new ur(Wr),this.book?this.composer.insertPass(this.sharpen,this.composer.passes.indexOf(this.book)):this.composer.addPass(this.sharpen),this.sizePasses()):this.sharpen&&=(this.composer.removePass(this.sharpen),this.sharpen.dispose(),void 0))}setBook(e){if(this.bookStyle=e,e===`off`){this.book&&=(this.composer.removePass(this.book),this.book.dispose(),void 0),this.mask?.dispose(),this.mask=void 0;return}if(!this.book)this.book=new ur({...Nr,uniforms:Mr(Ar[e])}),this.composer.addPass(this.book);else for(let[t,n]of Object.entries(Mr(Ar[e])))[`tDiffuse`,`resolution`,`tMask`,`maskOn`].includes(t)||(this.book.uniforms[t].value=n.value);this.sizePasses()}setAntialias(e){this.antialias.enabled=e}width=1;height=1;resize(e,t){this.width=e,this.height=t,this.composer.setSize(e,t),this.sizePasses()}sizePasses(){let e=this.renderer.getPixelRatio(),t=1/(this.width*e),n=1/(this.height*e);this.antialias.uniforms.resolution.value.set(t,n),this.sharpen?.uniforms.resolution.value.set(t,n),this.book?.uniforms.resolution.value.set(t,n)}render(e){this.renderer.info.reset(),this.renderMask(),this.composer.render(e)}screenQuads(){let e=this.composer.passes.filter(e=>e.enabled),t=e[e.length-1],n=[];for(let r of e){if(r===this.ao&&this.ao){let e=this.composer.readBuffer,t=this.output._fsQuad._mesh.geometry;this.ao.setGBuffer(e.depthTexture,void 0),this.ao.depthRenderMaterial.uniforms.tDepth.value=e.depthTexture;for(let e of[this.ao.gtaoMaterial,this.ao.pdMaterial,this.ao.copyMaterial,this.ao.blendMaterial])n.push({mesh:new z(t,e),toScreen:!1});continue}if(r!==this.output&&!(r instanceof ur))continue;r===this.output&&Vr(this.output,this.renderer);let e=r._fsQuad?._mesh;e&&n.push({mesh:e,toScreen:this.composer.renderToScreen&&r===t})}return n}renderMask(){let e=this.book;if(!e)return;let t=this.maskRoots().filter(e=>e.visible&&e.parent);if(!t.length){e.uniforms.maskOn.value=0;return}let n=this.renderer.getPixelRatio(),r=Math.max(1,Math.floor(this.width*n)),a=Math.max(1,Math.floor(this.height*n));this.mask?(this.mask.width!==r||this.mask.height!==a)&&this.mask.setSize(r,a):this.mask=new Te(r,a,{depthBuffer:!1,stencilBuffer:!1});let o=[],s=[];for(let e of t){let t=!1;e.traverse(e=>{e.visible&&Jr(e)&&qr(e)&&(t=!0)}),e.traverse(e=>{Yr(e)&&(!qr(e)||t&&!Jr(e))&&(o.push(e),s.push(e.layers.mask),e.layers.mask=0)})}let c=t.map(e=>e.parent),l=this.renderer.getRenderTarget(),u=this.renderer.getClearColor(new i),d=this.renderer.getClearAlpha();for(let e of t)this.maskScene.add(e);try{this.renderer.setRenderTarget(this.mask),this.renderer.setClearColor(0,0),this.renderer.clear(!0,!1,!1),this.renderer.render(this.maskScene,this.camera)}finally{t.forEach((e,t)=>c[t].add(e)),o.forEach((e,t)=>{e.layers.mask=s[t]}),this.renderer.setRenderTarget(l),this.renderer.setClearColor(u,d)}e.uniforms.tMask.value=this.mask.texture,e.uniforms.maskOn.value=1}warmMask(){if(!this.book)return;let e=[];for(let t of this.maskRoots())t.traverse(t=>{e.push(t)});let t=e.map(e=>e.visible),n=e.map(e=>e.frustumCulled);e.forEach(e=>{e.visible=!0,e.frustumCulled=!1});try{this.renderMask()}finally{e.forEach((e,r)=>{e.visible=t[r],e.frustumCulled=n[r]})}}},Zr={colosseum:{pc:{pixelRatio:1.5,shadow:`every`,ambientOcclusion:!1,bloom:!1,lampLights:!0,movingShadows:!1,mapLight:!1,mapPointLights:!1,cullBuildings:!1,skyCube:0,bakeMapLight:!1,shadowSamples:5,fighterLight:!1,fighterKeepMetal:!1,fadeWhenNeeded:!1,sharpen:!1,antialias:!0},mobile:{pixelRatio:1.275,shadow:`once`,ambientOcclusion:!1,bloom:!1,lampLights:!0,movingShadows:!1,mapLight:!0,mapPointLights:!0,cullBuildings:!1,skyCube:512,bakeMapLight:!0,shadowSamples:1,fighterLight:!0,fighterKeepMetal:!0,fadeWhenNeeded:!0,sharpen:!0,antialias:!0}},royal:{pc:{pixelRatio:1.5,shadow:`every`,ambientOcclusion:!0,bloom:!0,lampLights:!0,movingShadows:!0,mapLight:!1,mapPointLights:!1,cullBuildings:!1,skyCube:0,bakeMapLight:!1,shadowSamples:5,fighterLight:!1,fighterKeepMetal:!1,fadeWhenNeeded:!1,sharpen:!1,antialias:!0},mobile:{pixelRatio:1.275,shadow:`once`,ambientOcclusion:!1,bloom:!1,lampLights:!1,movingShadows:!1,mapLight:!0,mapPointLights:!1,cullBuildings:!0,skyCube:512,bakeMapLight:!0,shadowSamples:1,fighterLight:!0,fighterKeepMetal:!0,fadeWhenNeeded:!0,sharpen:!0,antialias:!0},mobileBefore:{pixelRatio:1.275,shadow:`hz30`,ambientOcclusion:!0,bloom:!0,lampLights:!0,movingShadows:!0,mapLight:!1,mapPointLights:!1,cullBuildings:!1,skyCube:0,bakeMapLight:!1,shadowSamples:5,fighterLight:!1,fighterKeepMetal:!1,fadeWhenNeeded:!1,sharpen:!1,antialias:!0}},school:{pc:{pixelRatio:1.5,shadow:`every`,ambientOcclusion:!0,bloom:!1,lampLights:!0,movingShadows:!0,mapLight:!1,mapPointLights:!1,cullBuildings:!1,skyCube:0,bakeMapLight:!1,shadowSamples:5,fighterLight:!1,fighterKeepMetal:!1,fadeWhenNeeded:!1,sharpen:!1,antialias:!0},mobile:{pixelRatio:1.275,shadow:`once`,ambientOcclusion:!1,bloom:!1,lampLights:!1,movingShadows:!1,mapLight:!0,mapPointLights:!1,cullBuildings:!1,skyCube:512,bakeMapLight:!0,shadowSamples:1,fighterLight:!0,fighterKeepMetal:!0,fadeWhenNeeded:!0,sharpen:!0,antialias:!0}},dojo:{pc:{pixelRatio:1.5,shadow:`every`,ambientOcclusion:!0,bloom:!1,lampLights:!0,movingShadows:!0,mapLight:!1,mapPointLights:!1,cullBuildings:!1,skyCube:0,bakeMapLight:!1,shadowSamples:5,fighterLight:!1,fighterKeepMetal:!1,fadeWhenNeeded:!1,sharpen:!1,antialias:!0},mobile:{pixelRatio:1.275,shadow:`once`,ambientOcclusion:!1,bloom:!1,lampLights:!1,movingShadows:!1,mapLight:!0,mapPointLights:!1,cullBuildings:!1,skyCube:512,bakeMapLight:!0,shadowSamples:1,fighterLight:!0,fighterKeepMetal:!0,fadeWhenNeeded:!0,sharpen:!0,antialias:!0}}};function Qr(e,t){return Zr[e][t?`mobile`:`pc`]}function $r(e,t){return t?Zr[e].mobileBefore:void 0}var ei={environment:1.25,sun:1.25,probe:[3.8135,1.763,1.6363,.279,.2171,1.0862,1.2137,-.3469,-.6344],pixelPoints:[`05_Mortar_and_recesses`,`03_Pale_arch_and_coping`]},ti={mapLightProbe:{value:ei.probe.map(e=>new L(e,e,e))},mapLightSun:{value:ei.sun}};function ni(e){return e.isMeshStandardMaterial===!0&&!e.transparent}function ri(e,t,n){Object.assign(e.uniforms,ti,t);let r=[n.points===`vertex`?`MAP_LIGHT_POINTS`:``,n.shadowOnce?`MAP_LIGHT_SHADOW_ONCE`:``,n.metalMap?`MAP_LIGHT_METAL_MAP`:``,n.sheen?`MAP_LIGHT_SHEEN`:``,n.baked?`MAP_LIGHT_BAKED\n#define MAP_LIGHT_BAKED_TEXELS ${n.baked.texels}`:``].filter(Boolean).map(e=>`#define ${e}\n`).join(``);e.vertexShader=r+e.vertexShader.replace(`#include <common>`,`#include <common>
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
	#endif`).replace(`#include <lights_fragment_maps>`,``).replace(`#include <lights_fragment_end>`,``).replace(`#include <envmap_fragment>`,``)}var ii=e=>`map-light-v3:${e.points}:${e.shadowOnce?1:5}:${e.metalMap?`metal-map`:`metal`}:${e.sheen?`sheen`:``}:${e.baked?`baked${e.baked.texels}`:``}`,ai=(e,t)=>ei.environment*(e.envMap?e.envMapIntensity:t);function oi(e,t,n,r){let i=new ke({name:e.name,color:e.color,map:e.map,vertexColors:e.vertexColors,emissive:e.emissive,emissiveIntensity:e.emissiveIntensity,emissiveMap:e.emissiveMap,alphaMap:e.alphaMap,alphaTest:e.alphaTest,side:e.side,fog:e.fog,flatShading:e.flatShading,depthWrite:e.depthWrite,depthTest:e.depthTest}),a={mapLightEnvironment:{value:ai(e,t)},mapLightMetal:{value:e.metalness},...r?{mapLightBaked:{value:r.texture},mapLightBakedWidth:{value:r.width},mapLightBakedVertices:{value:r.vertices}}:{}},o={...n,metalMap:!1,...r?{baked:{texels:r.texels}}:{}};return i.onBeforeCompile=e=>ri(e,a,o),i.customProgramCacheKey=()=>ii(o),i.userData.mapLight=!0,r&&(i.userData.baked=!0),i.userData.environment=a.mapLightEnvironment,i.userData.sun=ti.mapLightSun,i}function si(e,t,n){let r=new ke({name:e.name,map:e.map,vertexColors:e.vertexColors,emissiveMap:e.emissiveMap,alphaMap:e.alphaMap,alphaTest:e.alphaTest,side:e.side,fog:e.fog,flatShading:e.flatShading,transparent:e.transparent,opacity:e.opacity,alphaHash:e.alphaHash,depthWrite:e.depthWrite,depthTest:e.depthTest});r.color=e.color,r.emissive=e.emissive,Object.defineProperty(r,"emissiveIntensity",{configurable:!0,get:()=>e.emissiveIntensity,set:t=>{e.emissiveIntensity=t}});let i=!!(e.map&&e.metalnessMap),a={mapLightEnvironment:{value:ci.environment*(e.envMap?e.envMapIntensity:t)},mapLightMetal:{value:e.metalness},...i?{mapLightMetalMap:{value:e.metalnessMap}}:{},mapLightSun:li.sun,mapLightSheen:li.sheen},o={...n,metalMap:i,sheen:!0};return r.onBeforeCompile=e=>ri(e,a,o),r.customProgramCacheKey=()=>ii(o),r.userData.fighterLight=!0,r.userData.source=e,r.userData.environment=a.mapLightEnvironment,r.userData.sun=li.sun,r.userData.sheen=li.sheen,r}var ci={keepRoles:[`paladin`],keepMetalness:.5,environment:.95,sun:.85,sheen:.03},li={sun:{value:ci.sun},sheen:{value:ci.sheen}};function ui(e,t){return ci.keepRoles.includes(t)||e.metalness>=ci.keepMetalness&&!e.metalnessMap}function di(e,t,n){return!n||e.transparent||t<1}function fi(e,t,n){return t?n&&ei.pixelPoints.includes(e.name)?`pixel`:`vertex`:`none`}var pi={width:2048};function mi(e,t){let n={ambient:new i(0,0,0),hemispheres:[],fills:[],points:[]},r=0;return e.updateMatrixWorld(),e.traverseVisible(e=>{let i=e;if(!i.isLight)return;let a=i.color.clone().multiplyScalar(i.intensity);if(i.isAmbientLight)n.ambient.add(a);else if(i.isHemisphereLight){let e=i;n.hemispheres.push({sky:a,ground:e.groundColor.clone().multiplyScalar(e.intensity),direction:new L().setFromMatrixPosition(e.matrixWorld).normalize()})}else if(i.isDirectionalLight){let e=i,o=new L().setFromMatrixPosition(e.target.matrixWorld),s=new L().setFromMatrixPosition(e.matrixWorld).sub(o).normalize();t&&e.castShadow?(n.sun={color:a,direction:s},r++):n.fills.push({color:a,direction:s})}else if(i.isPointLight){let e=i;n.points.push({color:a,position:new L().setFromMatrixPosition(e.matrixWorld),distance:e.distance,decay:e.decay})}}),r>1?void 0:n}var hi=ei.probe;function gi(e,t,n,r,i,a,o,s,c,l){let u=e.ambient.r,d=e.ambient.g,f=e.ambient.b;for(let t of e.hemispheres){let e=.5*(n*t.direction.x+r*t.direction.y+i*t.direction.z)+.5;u+=t.ground.r+(t.sky.r-t.ground.r)*e,d+=t.ground.g+(t.sky.g-t.ground.g)*e,f+=t.ground.b+(t.sky.b-t.ground.b)*e}for(let t of e.fills){let e=Math.min(1,Math.max(0,n*t.direction.x+r*t.direction.y+i*t.direction.z));u+=t.color.r*e,d+=t.color.g*e,f+=t.color.b*e}if(t.points)for(let t of e.points){let e=t.position.x-a,c=t.position.y-o,l=t.position.z-s,p=Math.hypot(e,c,l);if(p===0)continue;let m=1/Math.max(p**+t.decay,.01);if(t.distance>0){let e=Math.min(1,Math.max(0,1-(p/t.distance)**4));m*=e*e}let h=Math.min(1,Math.max(0,(n*e+r*c+i*l)/p))*m;u+=t.color.r*h,d+=t.color.g*h,f+=t.color.b*h}let p=t.environment*(hi[0]*.886227+hi[1]*2*.511664*r+hi[2]*2*.511664*i+hi[3]*2*.511664*n+hi[4]*2*.429043*n*r+hi[5]*2*.429043*r*i+hi[6]*(.743125*i*i-.247708)+hi[7]*2*.429043*n*i+hi[8]*.429043*(n*n-r*r)),m=1-t.metal;c[l]=u*m+p,c[l+1]=d*m+p,c[l+2]=f*m+p,c[l+3]=e.sun?n*e.sun.direction.x+r*e.sun.direction.y+i*e.sun.direction.z:0}function _i(e,t,n,r,i=!1,a){let o=e.geometry,s=o.getAttribute(`position`),c=o.getAttribute(`normal`),l=e.isInstancedMesh===!0,u=a??(l?e.instanceMatrix.array:void 0),d=l?a?a.length/16:e.count:1,f=s.count,p=r?2:1,m=new Float32Array(f*d*p*4);e.updateWorldMatrix(!0,!1);let h=new B,g=new B,_=new de,v=h.elements,y=_.elements,b=i?-1:1;for(let i=0;i<d;i++){l?(g.fromArray(u,i*16),h.multiplyMatrices(e.matrixWorld,g)):h.copy(e.matrixWorld),_.getNormalMatrix(h);for(let e=0;e<f;e++){let a=s.getX(e),o=s.getY(e),l=s.getZ(e),u=c.getX(e),d=c.getY(e),h=c.getZ(e),g=v[0]*a+v[4]*o+v[8]*l+v[12],_=v[1]*a+v[5]*o+v[9]*l+v[13],x=v[2]*a+v[6]*o+v[10]*l+v[14],S=y[0]*u+y[3]*d+y[6]*h,C=y[1]*u+y[4]*d+y[7]*h,w=y[2]*u+y[5]*d+y[8]*h,T=Math.hypot(S,C,w)||1;S*=b/T,C*=b/T,w*=b/T;let E=(i*f+e)*p*4;gi(t,n,S,C,w,g,_,x,m,E),r&&gi(t,n,-S,-C,-w,g,_,x,m,E+4)}}return{data:m,texels:p,vertices:f,count:d}}function vi(e,t=pi.width){let n=e.vertices*e.count*e.texels,r=Math.max(1,Math.ceil(n/t)),i=new Float32Array(t*r*4);return i.set(e.data),{data:i,height:r}}function yi(e,t=pi.width){let{data:n,height:r}=vi(e,t),i=new b(n,t,r,Fe,ne);return i.internalFormat=`RGBA16F`,i.minFilter=i.magFilter=te,i.generateMipmaps=!1,i.needsUpdate=!0,i.onUpdate=()=>{i.image.data=null},i}var bi={margin:2},xi=new d,Si=new B;function Ci(e){return xi.setFromProjectionMatrix(Si.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse))}var wi=class{mesh;total;spheres;original;shown;constructor(e,t=bi.margin){this.mesh=e,this.total=e.count,this.original=e.instanceMatrix.array.slice(0,this.total*16),this.shown=[...Array(this.total).keys()],e.geometry.boundingSphere||e.geometry.computeBoundingSphere();let n=e.geometry.boundingSphere,r=new B,i=new B;e.updateWorldMatrix(!0,!1),this.spheres=this.shown.map(a=>{i.multiplyMatrices(e.matrixWorld,r.fromArray(this.original,a*16));let o=n.clone().applyMatrix4(i);return o.radius+=t,o})}pick(e,t){let n=[];for(let r=0;r<this.total;r++)(!t||t(r))&&(!e||e.intersectsSphere(this.spheres[r]))&&n.push(r);return n}show(e){if(e.length===this.shown.length&&e.every((e,t)=>e===this.shown[t]))return!1;let t=this.mesh.instanceMatrix.array;e.forEach((e,n)=>t.set(this.original.subarray(e*16,e*16+16),n*16)),this.mesh.count=e.length,this.mesh.instanceMatrix.clearUpdateRanges(),this.mesh.instanceMatrix.addUpdateRange(0,e.length*16),this.mesh.instanceMatrix.needsUpdate=!0;let n=this.mesh.geometry.getAttribute(`mapLightInstance`);return n&&(e.forEach((e,t)=>{n.array[t]=e}),n.clearUpdateRanges(),n.addUpdateRange(0,e.length),n.needsUpdate=!0),this.shown=[...e],!0}showAll(){return this.show([...Array(this.total).keys()])}get count(){return this.shown.length}},Ti={height:2.8,base:`#ffc12e`,top:`#ffffff`,sheets:[-.1,.1],groundWidth:1.2,rise:.22,fade:.45,gain:.8},Ei=`
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}`,Di=`
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
}`;function Oi(e=!1,t=0){let n=Ti;return new ge({vertexShader:Ei,fragmentShader:Di,uniforms:{uBase:{value:new i(n.base)},uTop:{value:new i(n.top)},uTime:{value:0},uSeed:{value:t},uFade:{value:0},uGain:{value:n.gain},uGround:{value:+!!e}},transparent:!0,depthWrite:!1,side:2,blending:2})}function ki(e,t,n){let r=Ti,i=new V,a=t%17*1.37;for(let t of r.sheets){let n=new z(new _e(e,r.height).translate(0,r.height/2,0).rotateY(Math.PI/2),Oi(!1,a+t*9));n.position.x=t,i.add(n)}let o=new z(new _e(r.groundWidth,e).rotateX(-Math.PI/2),Oi(!0,a));return o.position.y=.03,i.add(o),i.userData.born=n,i}var Ai=e=>{let t=Math.max(0,Math.min(1,e));return t*t*(3-2*t)};function ji(e,t,n){let r=Ti,i=gt(t),a=Ai((n-e.userData.born)/r.rise),o=Math.max(0,Math.min(1,t.life/r.fade));e.position.set(t.pos.x,0,t.pos.z),e.rotation.y=Math.atan2(-i.z,i.x);for(let t of e.children){let e=t,r=e.material,i=r.uniforms.uGround.value>.5;i||(e.scale.y=Math.max(.001,a)),r.uniforms.uTime.value=n,r.uniforms.uFade.value=i?o*a:o}}var Mi={flare:`#ffffff`,glow:`#fff0c2`,cross:`#fff6d8`,streak:`#ffe39a`,ember:`#ffc44f`,ring:`#fff0c4`,streaks:9,embers:14},Ni=e=>{let t=Math.min(1,Math.max(0,e));return t*t*(3-2*t)};function Pi(e){let t=Math.abs(Math.floor(e))%233280+1;return()=>(t=(t*9301+49297)%233280,t/233280)}function Fi(e){return new R({color:e,transparent:!0,opacity:0,depthWrite:!1,depthTest:!1,side:2})}function Ii(e){let t=new V,n=Pi(e);t.name=`clash-spark`;let r=new je(1,4),i=new je(1,28),o=new a(.9,1,48),s=(e,n,r,i)=>{let a=new z(e,Fi(n));a.renderOrder=r,a.userData.clash=i,t.add(a)};s(o,Mi.ring,20,{kind:`ring`,angle:0,length:1,speed:1});let c=(n()-.5)*.5;for(let e=0;e<Mi.streaks;e++)s(r,Mi.streak,21,{kind:`streak`,angle:(e+n()*.8)/Mi.streaks*Math.PI*2,length:.45+n()*.6,speed:1});for(let e=0;e<Mi.embers;e++)s(r,Mi.ember,22,{kind:`ember`,angle:n()*Math.PI*2,length:1,speed:.75+n()*.7});return s(i,Mi.glow,22,{kind:`glow`,angle:0,length:1,speed:1}),s(i,Mi.flare,23,{kind:`flare`,angle:0,length:1,speed:1}),s(r,Mi.cross,24,{kind:`cross`,angle:c,length:1.3,speed:1}),s(r,Mi.cross,24,{kind:`cross`,angle:c+Math.PI/2,length:.95,speed:1}),t}function Li(e,t,n,r,i=0){e.rotation.z=t-Math.PI/2,e.scale.set(r,n/2,1),e.position.set(Math.cos(t)*(i+n/2),Math.sin(t)*(i+n/2),0)}function Ri(e,t,n,r){let i=Math.min(1,Math.max(0,t)),a=n;e.quaternion.copy(r.quaternion);let o=.7+.3*Ni(i/.25),s=1-.65*i;for(let t of e.children){let e=t,n=e.userData.clash;if(n.kind===`flare`)e.scale.setScalar(a*.26*(1-.5*Ni(i/.35))),e.material.opacity=1-Ni(i/.35);else if(n.kind===`glow`)e.scale.setScalar(a*.55*(1-.4*Ni(i/.5))),e.material.opacity=.5*(1-Ni(i/.5));else if(n.kind===`cross`)e.rotation.z=n.angle,e.position.set(0,0,0),e.scale.set(a*n.length*(1-.35*i),a*.055*s,1),e.material.opacity=1-Ni(i/.65);else if(n.kind===`streak`)Li(e,n.angle,a*n.length*o,a*.035*s,a*.08),e.material.opacity=(1-i)**1.3;else if(n.kind===`ember`){let t=a*1.2*n.speed*(1-(1-i)*(1-i)),r=a*.6*i*i,o=Math.cos(n.angle)*t,s=Math.sin(n.angle)*t-r;e.rotation.z=n.angle-Math.PI/2,e.position.set(o,s,0),e.scale.set(a*.022*(1-.5*i),a*.09*(1-.4*i),1),e.material.opacity=i<.1?i/.1:1-(i-.1)/.9}else e.scale.setScalar(a*(.3+1.05*Ni(i/.4))),e.material.opacity=.45*(1-Ni(i/.4))}}var zi={meditation:{color:`#a86cff`,light:`#dcc2ff`,circle:{radius:1.35,spin:.32,lift:.05,strength:1},sparks:{count:30,radius:[.42,.9],height:[.08,2.2],life:[1.7,2.6],size:[.11,.2],twinkle:7,glow:2.1},fadeIn:.3,fadeOut:.3},stance:{samurai:{color:`#dfe6ff`,light:`#ffffff`},swordsman:{color:`#ff3326`,light:`#ffae96`},ninja:{color:`#8ccc80`,light:`#b4f0a6`,shadow:!0,rim:{color:`#4f2790`,light:`#8a5fd4`,strength:.75}},paladin:{color:`#ffc31a`,light:`#fff09a`},mage:{color:`#a86cff`,light:`#dcc2ff`},healer:{color:`#ff5aad`,light:`#ffc4e1`},gunner:{color:`#9c5a24`,light:`#e0a868`}},heal:{color:`#5cff86`,light:`#c8ffd6`,pluses:{count:10,radius:[.34,.72],height:[.3,2.2],life:[.9,1.3],size:[.15,.21],width:.045,glow:1.9},sparks:{count:12,radius:[.3,.75],height:[.2,2],life:[.8,1.2],size:[.08,.13],twinkle:9,glow:1.9},fadeIn:.12,fadeOut:.35}};function Bi(e=!1){return new R({vertexColors:!0,transparent:!0,depthWrite:!1,side:2,blending:e?3:2,premultipliedAlpha:e})}var Vi=(e,t)=>{let n=Math.sin(e*127.1+t*311.7)*43758.5453;return n-Math.floor(n)},Hi=(e,t)=>e[0]+(e[1]-e[0])*t;function Ui(e,t,n,r,i,a,o,s,c){let l=r-t,u=i-n,d=Math.hypot(l,u)||1,f=-u/d*a,p=l/d*a,m=e.position.length/3;for(let[a,l,u]of[[t-f,n-p,0],[t,n,o],[t+f,n+p,0],[r-f,i-p,0],[r,i,o],[r+f,i+p,0]])e.position.push(a,s,l),e.colour.push(c.r*u,c.g*u,c.b*u);e.index.push(m,m+3,m+1,m+1,m+3,m+4,m+1,m+4,m+2,m+2,m+4,m+5)}function Wi(e,t,n,r,i,a,o=72){let s=e.position.length/3;for(let s=0;s<=o;s++){let c=s/o*Math.PI*2,l=Math.cos(c),u=Math.sin(c);for(let[o,s]of[[-1,0],[0,r],[1,0]])e.position.push(l*(t+o*n),i,u*(t+o*n)),e.colour.push(a.r*s,a.g*s,a.b*s)}for(let t=0;t<o;t++)for(let n=0;n<2;n++){let r=s+t*3+n,i=r+3;e.index.push(r,i,r+1,r+1,i,i+1)}}function Gi(e,t,n,r,i,a=36){let o=e.position.length/3;e.position.push(0,r,0),e.colour.push(i.r*n,i.g*n,i.b*n);for(let n=0;n<=a;n++){let i=n/a*Math.PI*2;e.position.push(Math.cos(i)*t,r,Math.sin(i)*t),e.colour.push(0,0,0)}for(let t=0;t<a;t++)e.index.push(o,o+1+t,o+2+t)}function Ki(e){let t=new H;return t.setAttribute(`position`,new p(e.position,3)),t.setAttribute(`color`,new p(e.colour,3)),t.setIndex(e.index),t}function qi(e){let t={position:[],colour:[],index:[]},n=new i(e.color),r=new i(e.light);Gi(t,1,.1,0,n),Wi(t,.97,.028,1,0,r),Wi(t,.86,.016,.85,0,n);for(let e=0;e<18;e++){let n=e/18*Math.PI*2,i=Math.cos(n),a=Math.sin(n),o=.915;if(e%2)Ui(t,i*.885,a*.885,i*.9450000000000001,a*.9450000000000001,.012,.9,0,r);else{let e=.022,n=-a,s=i;Ui(t,i*.893,a*.893,i*o+n*e,a*o+s*e,.008,.8,0,r),Ui(t,i*o+n*e,a*o+s*e,i*.937,a*.937,.008,.8,0,r),Ui(t,i*.937,a*.937,i*o-n*e,a*o-s*e,.008,.8,0,r),Ui(t,i*o-n*e,a*o-s*e,i*.893,a*.893,.008,.8,0,r)}}Wi(t,.6,.016,.85,0,n);for(let e of[0,Math.PI/3])for(let r=0;r<3;r++){let i=e+r/3*Math.PI*2+Math.PI/2,a=i+Math.PI*2/3;Ui(t,Math.cos(i)*.6,Math.sin(i)*.6,Math.cos(a)*.6,Math.sin(a)*.6,.014,.75,0,n)}return Wi(t,.25,.012,.7,0,r,48),Gi(t,.16,.45,0,r,24),Ki(t)}var Ji=9;function Yi(e,t){for(let n=0;n<4;n++){let r=t+1+n*2,i=t+2+n*2,a=t+1+(n+1)%4*2;e.push(t,r,i,t,i,a)}}var Xi=12;function Zi(e,t){for(let n of[0,6]){let r=t+n;e.push(r,r+3,r+1,r+1,r+3,r+4,r+1,r+4,r+2,r+2,r+4,r+5)}}function Qi(e,t,n=!1){let r=e*Ji+t*Xi,i=[];for(let t=0;t<e;t++)Yi(i,t*Ji);for(let n=0;n<t;n++)Zi(i,e*Ji+n*Xi);let a=new H;a.setAttribute(`position`,new ce(new Float32Array(r*3),3)),a.setAttribute(`color`,new ce(new Float32Array(r*3),3)),a.setIndex(i),a.boundingSphere=new g(new L(0,1.15,0),1.9);let o=new z(a,Bi(n));return o.renderOrder=7,{mesh:o,stars:e,pluses:t}}var $i=new L,ea=new L,ta=new L,na=new L,ra=new i,ia=new Map,aa=e=>ia.get(e)??ia.set(e,new i(e)).get(e);function oa(e,t,n,r,i,a){e.setXYZ(n,r.x,r.y,r.z),t.setXYZ(n,a.r,a.g,a.b);for(let o=0;o<4;o++){let s=o*Math.PI/2,c=Math.cos(s),l=Math.sin(s);ta.copy(r).addScaledVector($i,c*i).addScaledVector(ea,l*i),e.setXYZ(n+1+o*2,ta.x,ta.y,ta.z),t.setXYZ(n+1+o*2,0,0,0);let u=s+Math.PI/4,d=i*.2;ta.copy(r).addScaledVector($i,Math.cos(u)*d).addScaledVector(ea,Math.sin(u)*d),e.setXYZ(n+2+o*2,ta.x,ta.y,ta.z),t.setXYZ(n+2+o*2,a.r*.25,a.g*.25,a.b*.25)}}function sa(e,t,n,r,i,a,o){for(let[s,c,l]of[[0,$i,ea],[6,ea,$i]]){let u=0;for(let d of[-1,1])for(let f of[-1,0,1]){ta.copy(r).addScaledVector(c,d*i).addScaledVector(l,f*a*(f?1.6:0));let p=+!f;e.setXYZ(n+s+u,ta.x,ta.y,ta.z),t.setXYZ(n+s+u,o.r*p,o.g*p,o.b*p),u++}}}function ca(e,t,n,r,i,a){let o=e.mesh.geometry.getAttribute(`position`),s=e.mesh.geometry.getAttribute(`color`);$i.set(1,0,0).applyQuaternion(i.quaternion),ea.set(0,1,0).applyQuaternion(i.quaternion);let c=aa(t.color),l=aa(t.light),u=(e,t,n)=>{let i=((r/Hi(t.life,Vi(e,n+1))+Vi(e,n+2))%1+1)%1,a=Vi(e,n+3)*Math.PI*2+i*.9,o=Hi(t.radius,Vi(e,n+4));return na.set(Math.cos(a)*o,Hi(t.height,i),Math.sin(a)*o),Math.sin(Math.PI*i)**1.2};for(let i=0;i<e.stars;i++){let e=u(i+a*97,t.sparks,0),d=.5+.5*Math.sin(r*t.sparks.twinkle+Vi(i,9)*20)**2;ra.copy(c).lerp(l,Vi(i,7)).multiplyScalar(n*e*d*t.sparks.glow),oa(o,s,i*Ji,na,Hi(t.sparks.size,Vi(i,5))*(.8+.4*d),ra)}let d=t.pluses;for(let t=0;d&&t<e.pluses;t++){let r=u(t+a*53,d,20);ra.copy(c).lerp(l,Vi(t,27)*.5).multiplyScalar(n*r*d.glow),sa(o,s,e.stars*Ji+t*Xi,na,Hi(d.size,Vi(t,25)),d.width,ra)}o.needsUpdate=!0,s.needsUpdate=!0}function la(e=zi.stance.samurai){let t=new V;t.name=`meditation-aura`,t.userData.spec={...zi.meditation,color:e.color,light:e.light};let n=new z(qi(e),Bi(e.shadow));if(n.scale.setScalar(zi.meditation.circle.radius),n.position.y=zi.meditation.circle.lift,n.renderOrder=6,t.add(n,Qi(zi.meditation.sparks.count,0,e.shadow).mesh),e.rim){let n=new z(qi(e.rim),Bi());n.scale.setScalar(zi.meditation.circle.radius),n.position.y=zi.meditation.circle.lift+.002,n.renderOrder=6,n.userData.strength=e.rim.strength,t.add(n)}return t.visible=!1,t}function ua(e,t,n,r,i){if(e.visible=t>.005,!e.visible)return;let[a,o,s]=e.children;a.rotation.y=n*zi.meditation.circle.spin,a.scale.setScalar(zi.meditation.circle.radius*(.82+.18*t));let c=zi.meditation.circle.strength*t*(.86+.14*Math.sin(n*2.2));a.material.color.setScalar(c),s&&(s.rotation.y=a.rotation.y,s.scale.copy(a.scale),s.material.color.setScalar(c*s.userData.strength)),ca({mesh:o,stars:zi.meditation.sparks.count,pluses:0},e.userData.spec??zi.meditation,t,n,r,i)}function da(){let e=new V;return e.name=`heal-aura`,e.add(Qi(zi.heal.sparks.count,zi.heal.pluses.count).mesh),e.visible=!1,e}function fa(e,t,n,r,i){if(e.visible=t>.005,!e.visible)return;let a=e.children[0];ca({mesh:a,stars:zi.heal.sparks.count,pluses:zi.heal.pluses.count},zi.heal,t,n,r,i)}var $={emit:.6,leash:1.2,facing:.5,release:.15,rate:90,mobile:.7,ahead:.12,fallback:.45,height:.9,puff:{size:[.3,1.5],grow:.55,alpha:.42,young:.9,spread:.35,pull:.1,rise:.55,pace:[.94,1],buoy:1.5,stretch:.9},cool:.72,coolTime:1.25,burn:.32,drag:.06,splash:{puffs:14,embers:14,smoke:5,speed:[1.5,4.5],stop:.26},ember:{rate:32,life:[.3,.75],gravity:6,size:[.035,.06],spread:2.2},smoke:{after:.3,chance:.6,size:[.45,1.6],life:[.8,1.25],rise:1,alpha:.4},flare:{size:.55,alpha:.9},ignite:{puffs:7,size:[.25,.75],life:.2,speed:3},glow:{scale:2.8,min:1.6,alpha:.9,y:.08},cover:.85,max:640};function pa(e){let t=e*2654435761+2654435769>>>0;return()=>{t=t+1831565813>>>0;let e=t;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}}var ma=(e,t)=>t[0]+(t[1]-t[0])*e(),ha=e=>(e()+e()+e()-1.5)/1.5,ga=e=>{let t=Math.min(1,Math.max(0,e));return t*t*(3-2*t)},_a=(e,t,n,r)=>(e.size=t,e.alpha=n,e.heat=r,e);function va(e,t={size:0,alpha:0,heat:0}){let n=e.age;if(e.kind===0){let r=e.life>e.fade?1-Math.min(1,Math.max(0,(n-e.fade)/(e.life-e.fade))):1,i=e.stream?1+$.puff.young*(1-ga(n/.15)):1;return _a(t,e.s0+(e.s1-e.s0)*ga(n/$.puff.grow),Math.min(1,e.alpha*i)*Math.min(1,n/.04+.25)*r,e.heat*(1-$.cool*ga(n/$.coolTime))*(1-.45*(1-r))*(1+.3*(i-1)/$.puff.young))}if(e.kind===1)return _a(t,e.s0,e.alpha*(1-n/e.life),e.heat*(1-.5*n/e.life));if(e.kind===2)return _a(t,e.s0,e.alpha,1);let r=n/e.life;return _a(t,e.s0+(e.s1-e.s0)*ga(r),e.alpha*ga(r/.15)*(1-ga((r-.35)/.65)),e.heat*Math.max(0,1-n/.35))}var ya=class{particles=[];streams=new Map;starts=[];density;constructor(e=1){this.density=e}track(e,t){let n=new Set;for(let t of e){if(t.kind!==`fire`)continue;let e=Math.hypot(t.velocity.x,t.velocity.z),r=this.streams.get(t.id);if(r){let e=(t.pos.x-r.ox)*r.dx+(t.pos.z-r.oz)*r.dz;e>r.head&&(r.advance+=e-r.head,r.head=e),r.life=t.life}else{if(e<1e-6)continue;let n=t.velocity.x/e,i=t.velocity.z/e,a=Math.max(0,dt.thrownLife-t.life);r={id:t.id,caster:t.owner,ox:t.pos.x-n*e*a,oz:t.pos.z-i*e*a,dx:n,dz:i,nx:-i,nz:n,speed:e,y:$.height,head:e*a,advance:0,life:t.life,time:a,dt:0,emitting:!0,started:!1,carry:0,emberCarry:0,alive:!0,hold:1,rng:pa(t.id)},this.streams.set(t.id,r)}n.add(t.id)}for(let e of this.streams.values())e.alive&&!n.has(e.id)&&this.finish(e,t)}hold(e){let t=0;for(let n of this.streams.values())n.caster===e&&(t=Math.max(t,n.hold));return t}update(e,t){if(!(e>0))return;for(let n of this.streams.values())n.dt=n.alive?Math.min(n.advance/n.speed,e*2):e,n.advance=0,n.time+=n.dt,n.emitting&&this.emit(n,t(n.caster)),n.hold=n.emitting?1:Math.max(0,n.hold-e/$.release);this.step(e);let n=new Set;for(let e of this.particles)e.stream&&n.add(e.stream);for(let[e,t]of this.streams)!t.alive&&t.hold<=0&&!n.has(t)&&this.streams.delete(e)}add(e){this.particles.length<$.max&&this.particles.push(e)}puff(e,t,n,r,i){let a=e.rng,o=$.puff;this.add({kind:0,x:t,y:n,z:r,vx:0,vy:0,vz:0,age:i,life:1/0,fade:1/0,s0:o.size[0]*(.8+.4*a()),s1:o.size[1]*(.8+.4*a()),heat:.92+.08*a(),alpha:o.alpha*(.75+.5*a()),seed:a(),rot:a()*Math.PI*2,spin:(a()-.5)*4,stream:e,lane:ha(a),lift:ha(a),pace:ma(a,o.pace),smoked:!1})}free(e,t,n,r,i,a,o,s,c,l,u,d,f){this.add({kind:e,x:n,y:r,z:i,vx:a,vy:o,vz:s,age:0,life:c,fade:e===0?0:c,s0:l,s1:u,heat:d,alpha:f,seed:t(),rot:t()*Math.PI*2,spin:(t()-.5)*(e===3?1.2:5),lane:0,lift:0,pace:0,smoked:!0})}smoke(e,t,n,r,i=.6){let a=$.smoke;this.free(3,e,t,n,r,(e()-.5)*.6,a.rise*.5,(e()-.5)*.6,ma(e,a.life),a.size[0],a.size[1]*(.8+.4*e()),i,a.alpha*(.7+.6*e()))}ember(e,t,n,r,i,a){let o=e.rng,s=$.ember,c=(o()-.5)*2*a;this.free(1,o,t,n,r,e.dx*i+e.nx*c,(o()-.25)*a,e.dz*i+e.nz*c,ma(o,s.life),ma(o,s.size),0,.85+.15*o(),1)}emit(e,t){let n=e.rng,r=t?t.x+e.dx*$.ahead:e.ox-e.dx*$.fallback,i=t?t.z+e.dz*$.ahead:e.oz-e.dz*$.fallback,a=t?t.y:$.height;if(!e.started){e.started=!0,e.y=a,this.starts.push({caster:e.caster,x:r,z:i}),this.starts.length>16&&this.starts.shift();let t=(r-e.ox)*e.dx+(i-e.oz)*e.dz,o=(r-e.ox)*e.nx+(i-e.oz)*e.nz;for(let n=e.head;n>t;n-=.18){let r=(n-t)/Math.max(1e-6,e.head-t);this.puff(e,e.ox+e.dx*n+e.nx*o*(1-r),a,e.oz+e.dz*n+e.nz*o*(1-r),(n-t)/e.speed)}let s=$.ignite;for(let t=0;t<s.puffs;t++){let t=n()*Math.PI*2,o=s.speed*(.4+.6*n());this.free(0,n,r,a,i,e.dx*o+e.nx*Math.cos(t)*o*.5,Math.sin(t)*o*.5,e.dz*o+e.nz*Math.cos(t)*o*.5,s.life*(.7+.6*n()),s.size[0],s.size[1],1,$.puff.alpha)}}if(t){let n=Math.abs((r-e.ox)*e.nx+(i-e.oz)*e.nz),a=t.fx*e.dx+t.fz*e.dz;if(n>$.leash||a<$.facing){e.emitting=!1;return}}if(e.time-e.dt>=$.emit){e.emitting=!1;return}let o=Math.max(0,Math.min(e.dt,$.emit-(e.time-e.dt)));e.carry+=$.rate*this.density*o;let s=Math.floor(e.carry);e.carry-=s;for(let t=0;t<s;t++){let c=(t+n())/s*o,l=e.speed*c;this.puff(e,r+e.dx*l,a,i+e.dz*l,c)}for(e.emberCarry+=$.ember.rate*this.density*o;e.emberCarry>=1;e.emberCarry--)this.ember(e,r,a,i,e.speed*(.55+.4*n()),$.ember.spread);e.dt>0&&this.free(2,n,r,a,i,0,0,0,Math.max(e.dt,1/30)*1.01,$.flare.size*(.85+.3*n()),0,1,$.flare.alpha)}finish(e,t){if(e.alive=!1,e.emitting=!1,!(t&&e.life>.1)){for(let t of this.particles)t.stream===e&&(t.fade=t.age,t.life=t.age+$.burn*(.6+.4*e.rng()));return}e.end=e.head+e.speed/60;let n=e.rng,r=$.splash,i=e.ox+e.dx*e.end,a=e.oz+e.dz*e.end,o=e.y+.1;for(let t=0;t<r.puffs;t++){let t=n()*Math.PI*2,s=ma(n,r.speed);this.free(0,n,i,o,a,e.nx*Math.cos(t)*s-e.dx*n()*2,Math.abs(Math.sin(t))*s*.8+.4,e.nz*Math.cos(t)*s-e.dz*n()*2,.3+.25*n(),.35,1.15*(.8+.4*n()),.85+.15*n(),$.puff.alpha)}for(let t=0;t<r.embers;t++){let t=n()*Math.PI*2,s=ma(n,r.speed)*1.4;this.free(1,n,i,o,a,e.nx*Math.cos(t)*s-e.dx*n()*3,Math.abs(Math.sin(t))*s+1,e.nz*Math.cos(t)*s-e.dz*n()*3,ma(n,$.ember.life),ma(n,$.ember.size),0,.9,1)}for(let e=0;e<r.smoke;e++)this.smoke(n,i+(n()-.5)*.6,o+.2,a+(n()-.5)*.6,.8)}step(e){let t=this.particles;for(let n=t.length-1;n>=0;n--){let r=t[n],i=r.stream,a=i&&i.alive?i.dt:e;if(r.age+=a,r.age>=r.life){t[n]=t[t.length-1],t.pop();continue}i?this.ride(r,i,a):this.fly(r,a)}}ride(e,t,n){let r=(e.x-t.ox)*t.dx+(e.z-t.oz)*t.dz,i=(e.x-t.ox)*t.nx+(e.z-t.oz)*t.nz;t.alive?r=Math.min(r+t.speed*e.pace*n,t.head):t.end===void 0?(e.pace*=Math.exp(-n/$.drag),r+=t.speed*e.pace*n):(r+=t.speed*e.pace*n,r>=t.end&&(r=t.end,this.scatter(e,t)));let a=$.puff,o=a.spread*Math.min(e.age,a.grow)+.02,s=1-Math.exp(-n/a.pull);i+=(e.lane*o-i)*s,e.y+=(t.y+e.lift*o*.6+a.rise*e.age*e.age-e.y)*s,e.x=t.ox+t.dx*r+t.nx*i,e.z=t.oz+t.dz*r+t.nz*i,!e.smoked&&e.age>$.smoke.after&&(e.smoked=!0,t.rng()<$.smoke.chance&&this.smoke(t.rng,e.x,e.y+.15,e.z))}scatter(e,t){let n=t.rng,r=n()*Math.PI*2,i=1+2.5*n();e.stream=void 0,e.vx=t.nx*Math.cos(r)*i-t.dx*n()*1.5,e.vz=t.nz*Math.cos(r)*i-t.dz*n()*1.5,e.vy=Math.abs(Math.sin(r))*i*.7+.5,e.fade=e.age,e.life=e.age+$.splash.stop*(.6+.4*n()),e.s1*=1.3}fly(e,t){if(e.kind===2)return;e.kind===1?e.vy-=$.ember.gravity*t:e.kind===3?e.vy+=($.smoke.rise-e.vy)*(1-Math.exp(-t/.4)):e.vy+=$.puff.buoy*t;let n=Math.exp(-t*(e.kind===1?.6:e.kind===3?1.6:3.5));e.vx*=n,e.vz*=n,e.x+=e.vx*t,e.y+=e.vy*t,e.z+=e.vz*t,e.kind===1&&e.y<.02&&(e.y=.02,e.vy*=-.3,e.vx*=.5,e.vz*=.5)}};function ba(e=64){let t=pa(7),n=new Uint8Array(e*e*4),r=new Float32Array(e*e);for(let[n,i]of[[4,.5],[8,.25],[16,.15],[32,.1]]){let a=Float32Array.from({length:n*n},()=>t()),o=(e,t)=>a[(t+n)%n*n+(e+n)%n];for(let t=0;t<e;t++)for(let a=0;a<e;a++){let s=a/e*n,c=t/e*n,l=Math.floor(s),u=Math.floor(c),d=ga(s-l),f=ga(c-u),p=o(l,u)+(o(l+1,u)-o(l,u))*d,m=o(l,u+1)+(o(l+1,u+1)-o(l,u+1))*d;r[t*e+a]+=(p+(m-p)*f)*i}}let i=1/0,a=-1/0;for(let e of r)i=Math.min(i,e),a=Math.max(a,e);for(let t=0;t<e*e;t++){let e=Math.round((r[t]-i)/(a-i)*255);n.set([e,e,e,255],t*4)}let o=new b(n,e,e,Fe);return o.wrapS=o.wrapT=Me,o.magFilter=o.minFilter=Ce,o.needsUpdate=!0,o}var xa=`
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
}`,Sa=`
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
}`,Ca=`
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
}`,wa=`
varying vec2 vUv;
varying vec4 vA;
void main() {
  float r = length(vUv);
  if (r > 1.0) discard;
  // 床の色 × (1 ＋ 明かり)（材質の blendSrc＝床の色）。明るい砂は橙に、暗い床は少しだけ照らされる。
  gl_FragColor = vec4(vec3(1.0, 0.45, 0.12) * (0.6 + 0.4 * vA.y) * exp(-r * r * 3.0) * (1.0 - smoothstep(0.8, 1.0, r)) * vA.z, 1.0);
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
}`,Ta=class{mesh;at;a;b;c;count=0;max;constructor(e,t,n){this.max=e;let r=new O;r.setIndex([0,1,2,0,2,3]),r.setAttribute(`position`,new ce(new Float32Array([-.5,-.5,0,.5,-.5,0,.5,.5,0,-.5,.5,0]),3));let i=t=>new se(new Float32Array(e*t),t).setUsage(v);r.setAttribute(`iPos`,this.at=i(3)),r.setAttribute(`iA`,this.a=i(4)),r.setAttribute(`iB`,this.b=i(2)),r.setAttribute(`iC`,this.c=i(4)),r.instanceCount=0,this.mesh=new z(r,t),this.mesh.frustumCulled=!1,this.mesh.renderOrder=n,this.mesh.matrixAutoUpdate=!1,this.mesh.visible=!1}put(e,t,n,r,i,a,o,s,c,l=0,u=0,d=0,f=0){if(this.count>=this.max)return;let p=this.count++,m=this.at.array,h=this.a.array,g=this.b.array,_=this.c.array;m[p*3]=e,m[p*3+1]=t,m[p*3+2]=n,h[p*4]=r,h[p*4+1]=i,h[p*4+2]=a,h[p*4+3]=o,g[p*2]=s,g[p*2+1]=c,_[p*4]=l,_[p*4+1]=u,_[p*4+2]=d,_[p*4+3]=f}commit(){this.mesh.geometry.instanceCount=this.count,this.mesh.visible=this.count>0;for(let e of[this.at,this.a,this.b,this.c])e.clearUpdateRanges(),e.addUpdateRange(0,Math.max(1,this.count)*e.itemSize),e.needsUpdate=!0}},Ea=class{root=new V;fire;smoke;glow;timed;look={size:0,alpha:0,heat:0};constructor(){let e=ba(),t=(t,n,r=!1)=>new ge({uniforms:{uNoise:{value:e},uTime:{value:0},uCover:{value:$.cover}},vertexShader:xa,fragmentShader:t,defines:r?{FLAT:``}:{},transparent:!0,depthWrite:!1,blending:n}),n=t(Sa,5),r=t(Ca,1),i=t(wa,5,!0);n.blendSrc=201,n.blendDst=205,i.blendSrc=208,i.blendDst=201,this.timed=[n,r],this.smoke=new Ta($.max/2,r,30),this.glow=new Ta($.max/2,i,31),this.fire=new Ta($.max,n,32),this.root.name=`flame-vfx`,this.root.matrixAutoUpdate=!1,this.root.add(this.smoke.mesh,this.glow.mesh,this.fire.mesh)}warmup(){return[this.smoke,this.glow,this.fire].map(e=>{let t=new z(e.mesh.geometry,e.mesh.material);return t.frustumCulled=!1,t})}write(e,t){for(let e of this.timed)e.uniforms.uTime.value=t;this.fire.count=this.smoke.count=this.glow.count=0;let n=$.glow,r=this.look;for(let t of e.particles){let{size:e,alpha:i,heat:a}=va(t,r);if(i<=.002)continue;let o=t.rot+t.spin*t.age;if(t.kind===3){this.smoke.put(t.x,t.y,t.z,e,a,i,t.seed,o,3);continue}let s=t.stream,c=Math.hypot(t.vx,t.vy,t.vz);s?this.fire.put(t.x,t.y,t.z,e,a,i,t.seed,o,0,s.dx,0,s.dz,$.puff.stretch):c>.01?this.fire.put(t.x,t.y,t.z,e,a,i,t.seed,o,t.kind,t.vx/c,t.vy/c,t.vz/c,t.kind===1?Math.min(3,c*.35):Math.min(.8,c*.12)):this.fire.put(t.x,t.y,t.z,e,a,i,t.seed,o,t.kind),(t.kind===2||t.kind===0&&t.seed<.5)&&this.glow.put(t.x,n.y,t.z,Math.max(n.min,e*n.scale),a,i*n.alpha*Math.min(1,a*1.4),0,0,0)}this.fire.commit(),this.smoke.commit(),this.glow.commit()}},Da={radius:.82,width:.1,glowOut:.16,glowIn:.07,wall:{height:.38,alpha:.8},ally:`#3b9dff`,enemy:`#ff3b3b`,opacity:.95,pulse:{speed:.7,depth:.22},lift:.035,capacity:16};function Oa(e,t,n){return n?null:e===t?`ally`:`enemy`}function ka(e){let{opacity:t,pulse:n}=Da;return t*(1-n.depth*.5*(1+Math.sin(e*Math.PI*2*n.speed)))}function Aa(){let{radius:e,width:t,glowOut:n,glowIn:r}=Da;return[[e-t/2-r,0],[e-t/2,.8],[e,1],[e+t/2,.8],[e+t/2+n*.35,.32],[e+t/2+n,0]]}var ja;function Ma(){let{height:e,alpha:t}=Da.wall;return[[0,t],[e*.35,t*.45],[e,0]]}function Na(){if(ja)return ja;let e=Aa(),t=Ma(),n=[],r=[],i=[],a=[],o=[],s=e[e.length-1][0],c=(e,t)=>{let c=n.length/3;for(let o=0;o<=64;o++){let c=o/64*Math.PI*2,l=Math.cos(c),u=Math.sin(c);for(let o=0;o<e;o++){let e=t(l,u,o);n.push(...e.at),r.push(...e.normal),i.push(.5+e.at[0]/s/2,.5+e.at[1]/s/2),a.push(1,1,1,e.alpha)}}for(let t=0;t<64;t++)for(let n=0;n<e-1;n++){let r=c+t*e+n,i=r+e;o.push(r,i,r+1,r+1,i,i+1)}};return c(e.length,(t,n,r)=>({at:[t*e[r][0],n*e[r][0],0],normal:[0,0,1],alpha:e[r][1]})),c(t.length,(e,n,r)=>({at:[e*Da.radius,n*Da.radius,t[r][0]],normal:[e,n,0],alpha:t[r][1]})),ja=new H,ja.setAttribute(`position`,new p(n,3)),ja.setAttribute(`normal`,new p(r,3)),ja.setAttribute(`uv`,new p(i,2)),ja.setAttribute(`color`,new p(a,4)),ja.setIndex(o),ja}var Pa={ally:new i(Da.ally),enemy:new i(Da.enemy)};function Fa(t=Da.capacity){let n=new R({vertexColors:!0,transparent:!0,depthWrite:!1,side:2,opacity:Da.opacity}),r=new e(Na(),n,t);return r.name=`team-rings`,r.instanceColor=new se(new Float32Array(t*3).fill(1),3),r.count=0,r.frustumCulled=!1,r}var Ia=new B;function La(e,t,n){let r=Math.min(t.length,e.instanceMatrix.count);for(let n=0;n<r;n++){let r=t[n];e.setMatrixAt(n,Ia.makeRotationX(-Math.PI/2).setPosition(r.x,Da.lift,r.z)),e.setColorAt(n,Pa[r.kind])}e.count=r,e.instanceMatrix.needsUpdate=!0,e.instanceColor&&(e.instanceColor.needsUpdate=!0),e.material.opacity=ka(n)}var Ra={fan:.15,bandIdle:.28,bandArmed:.62,bandPulse:.3,body:.12,bandLight:.45,bodyColor:`#e8eef6`},za={royal:{vivid:0,lightness:.5,bandVivid:0,fan:1,band:1,body:1,flash:`light`},colosseum:{vivid:0,lightness:.5,bandVivid:0,fan:1,band:1,body:1,flash:`light`},school:{vivid:.6,lightness:.64,bandVivid:.2,fan:5,band:1.8,body:3.5,flash:`deep`},dojo:{vivid:.6,lightness:.64,bandVivid:.2,fan:5,band:1.8,body:3.5,flash:`deep`}},Ba=new i(`#ffffff`);function Va(e,t,n=.5){let r=e.getHSL({h:0,s:0,l:0},w);return e.clone().setHSL(r.h,r.s+(1-r.s)*t,r.l+(n-r.l)*t,w)}function Ha(e,t){let n=new i(e);if(t.vivid<=0)return{fan:n,band:n.clone().lerp(Ba,Ra.bandLight),body:new i(Ra.bodyColor)};let r=Va(n,t.vivid,t.lightness);return{fan:r,band:Va(n,t.bandVivid,t.lightness),body:r.clone()}}function Ua(e,t,n,r){let i=Ra.bandIdle*e.band;return{fan:Math.min(1,Ra.fan*e.fan)*t,band:Math.min(1,n?Math.max(i,Ra.bandArmed+Ra.bandPulse*r):i)*t,body:Math.min(1,Ra.body*e.body)*t}}var Wa={pad:.9,peak:1,decay:.22,hold:.7,pulse:.25,fadeOut:.35,lightWidth:1.35,bandHide:.3,burst:{time:.45,grow:2.6,width:.45},fanOpacity:.85,colors:{light:`#ffffff`,haloDark:`#ffcf4a`,haloBright:`#ff8c00`,ringDark:`#fff1b8`,ringBright:`#ff7a00`,fanDark:`#fff3c4`}};function Ga(e){let t=Wa.colors,n=e===`light`;return{light:new i(t.light),halo:new i(n?t.haloDark:t.haloBright),ring:new i(n?t.ringDark:t.ringBright),fan:new i(n?t.fanDark:t.haloBright),additive:n}}var Ka={fan:1,glow:2,light:3,burst:4};function qa(e,t){let{peak:n,decay:r,hold:i,pulse:a}=Wa,o=i*(1-a+a*t);return Math.min(1,o+(n-o)*Math.exp(-Math.max(0,e)/r))}function Ja(e){return Math.min(1,Math.max(0,1-e/Wa.bandHide))}function Ya(e,t,n,r){e.burst>=0&&(e.burst=e.burst+n>Wa.burst.time?-1:e.burst+n),t?(e.since=e.level>0&&e.since>=0?e.since+n:0,e.since===0&&(e.burst=0),e.level=qa(e.since,r)):(e.since=-1,e.level=Math.max(0,e.level-n/Wa.fadeOut))}function Xa(e,t){let n=Math.min(1,Math.max(0,e/Wa.burst.time)),r=1-(1-n)**2;return{scale:(t+Wa.burst.grow*r)/t,opacity:(1-n)**1.5}}function Za(e,t,n,r=Wa.pad){return eo([[Math.max(.05,e-r),0],[e-r*.4,.45],[e,.9],[(e+t)/2,1],[t,.9],[t+r*.4,.45],[t+r,0]],n)}function Qa(e,t,n){let r=(e+t)/2,i=(t-e)*Wa.lightWidth/2,a=(t-e)/2;return eo([[r-i,0],[r-a,1],[r+a,1],[r+i,0]],n)}function $a(e,t){let n=Wa.burst.width/2;return eo([[e-n,0],[e-n*.3,1],[e+n*.3,1],[e+n,0]],t)}function eo(e,t){let n=[],r=[],i=[],a=[],o=[],s=e[e.length-1][0];for(let o=0;o<=48;o++){let c=-t+2*t*o/48,l=Math.cos(c),u=Math.sin(c),d=Math.min(1,Math.min(o,48-o)/(48*.1));for(let[t,o]of e)n.push(l*t,u*t,0),r.push(0,0,1),i.push(.5+l*t/s/2,.5+u*t/s/2),a.push(1,1,1,o*d)}let c=e.length;for(let e=0;e<48;e++)for(let t=0;t<c-1;t++){let n=e*c+t,r=n+c;o.push(n,r,n+1,n+1,r,r+1)}let l=new H;return l.setAttribute(`position`,new p(n,3)),l.setAttribute(`normal`,new p(r,3)),l.setAttribute(`uv`,new p(i,2)),l.setAttribute(`color`,new p(a,4)),l.setIndex(o),l}function to(){return new R({vertexColors:!0,transparent:!0,depthWrite:!1,side:2,blending:2,opacity:0})}var no=.6+U.puckRadius,ro={ally:new i(`#a9f878`),enemy:new i(`#ff7869`)},io={radius:1.45,spread:72*Math.PI/180,thickness:.15,lateral:.065,centreY:1.05,rootFade:.03},ao=[0,Math.PI/2,Math.PI/4,-Math.PI/4],oo=[Ue,Ve,ze,Re],so=[new i(`#ffc66e`),new i(`#ff7762`)];function co(e){let t=[],n=[],r=(e,r)=>{t.push(e.x,e.y,e.z),n.push(r,r,r)};for(let t=0;t<e.length-1;t++){let n=e[t],i=e[t+1],a=n.centre.clone().addScaledVector(n.across,-n.half),o=n.centre.clone().addScaledVector(n.across,n.half),s=i.centre.clone().addScaledVector(i.across,-i.half),c=i.centre.clone().addScaledVector(i.across,i.half);r(a,0),r(n.centre,n.glow),r(i.centre,i.glow),r(a,0),r(i.centre,i.glow),r(s,0),r(o,0),r(i.centre,i.glow),r(n.centre,n.glow),r(o,0),r(c,0),r(i.centre,i.glow)}let i=new H;return i.setAttribute(`position`,new p(t,3)),i.setAttribute(`color`,new p(n,3)),i}var lo=[[-.95,0],[-.34,.5],[.08,1],[.5,.8],[1.05,0]];function uo(e,t,n,r,i,a){let o=[],s=[],c=e=>{o.push(e.point.x,e.point.y,e.point.z),s.push(e.glow,e.glow,e.glow)};for(let o of[1,-1]){let s=[];for(let c=0;c<=40;c++){let l=c/40*2-1,u=l*t,d=Math.max(0,1-l*l),f=n*d**.55,p=.62+.38*d**.35,m=r*d**.5;s.push(lo.map(([t,n])=>{let r=e+t*f,s=i(r*Math.sin(u),r*Math.cos(u),o*m*n);return{point:s,glow:n*p*a(s)}}))}for(let e=0;e<40;e++)for(let t=0;t<lo.length-1;t++)c(s[e][t]),c(s[e][t+1]),c(s[e+1][t+1]),c(s[e][t]),c(s[e+1][t+1]),c(s[e+1][t])}let l=new H;return l.setAttribute(`position`,new p(o,3)),l.setAttribute(`color`,new p(s,3)),l}var fo=e=>new R({color:`#ffffff`,vertexColors:!0,transparent:!0,opacity:e,depthWrite:!1,side:2,blending:2}),po=.62;function mo(){let e=io,t=new V,n=e=>Math.max(0,Math.min(1,e)),r=e=>{let t=n(e);return t*t*(3-2*t)};for(let n of ao){let i=Math.cos(n),a=Math.sin(n);t.add(new z(uo(e.radius,e.spread,e.thickness,e.lateral,(t,n,r)=>new L(t*i-r*a,e.centreY+t*a+r*i,n),t=>r(t.y/e.rootFade)),fo(po)))}let i=new z(new y(.1,10,8),new R({color:`#ffffff`,transparent:!0,opacity:.55,depthWrite:!1,blending:2}));i.position.set(0,e.centreY,0),t.add(i);let a=[];for(let e=0;e<=10;e++){let t=1.1-e/10*3.4,i=r(n((1-Math.abs(t+.6)/2)/.5))*.6;a.push({centre:new L(0,.04,t),across:new L(1,0,0),half:.19*(.5+.5*i),glow:i})}return t.add(new z(co(a),fo(.8))),t}var ho=new i(`#ffffff`),go={taper:.935,height:.4583,floorGap:.085,coreRadius:.59,coreThickness:.035,coreLift:.0015,bandRadius:.957,bandThickness:.075,bandAt:.648,glowInner:1.18,glowOuter:1.31,glowLift:.025,trailRadius:.59,trailCount:14,trailLift:.06},_o=e=>e.isMesh===!0&&[e.material].flat().some(e=>e.name.startsWith(`Yuru_Line`)),vo=[`rift-arena`,`blender-harbour-city`,`terraced-valley`,`harbour-water`],yo=.06,bo=`EpicCity_TwilightSky`,xo=class{canvas;mapId;renderer;ready;scene=new n;camera=new be(60,1,.1,850);yaw=Math.PI/2;pitch=.58;gunPitch=.12;fighters=new Map;bench=[];viewing=0;avatars=[];setAvatars(e){this.avatars=e.map(e=>({id:e.id,look:{...e.look}}))}setAvatar(e){this.setAvatars(e?[e]:[])}footsteps=new Ge;steps=[];takeSteps(){let e=this.steps;return this.steps=[],e}takeFlames(){return this.flameSim.starts.splice(0)}get bookStyle(){return this.effects.bookStyle}setBook(e){this.effects.setBook(e)}avatarOf(e){if(ot()===`human`)return this.avatars.find(t=>t.id===e.id)?.look}seatActions={ready:e=>!(e.role===`samurai`&&!jt())&&!(ot()===`human`&&e.role!==`samurai`&&!kt(e.role))&&!(e.role===`samurai`&&Le(this.avatarOf(e),ot())===`grandpa`&&!wt())&&!(rt(e.role,this.avatarOf(e),ot())&&!Ct(e.role))&&!(t=>t&&!Dt(t,e.role))(this.avatarOf(e)),look:e=>{let t=this.avatarOf(e);return t?He(t):``},create:e=>this.createFighter(e),park:e=>{this.scene.remove(e.mesh,e.ring,e.shadow,e.heal,e.barrier),e.calm&&this.scene.remove(e.calm)},unpark:e=>{Object.assign(e,{healLevel:0,calmLevel:0,opacity:1}),this.scene.add(e.mesh,e.ring,e.shadow,e.heal,e.barrier),e.calm&&this.scene.add(e.calm)}};transient=new Map;puck=new V;puckTint=new i(it[0].color);puckParts=[];threatRing;teamRings=Fa();ringSpots=[];threatDisplay=ft();reachFan;coreBand;bodyRing;coreGlow;coreLight;coreBurst;coreFlash={since:-1,level:0,burst:-1};coreOut=1;reachFanFlash;reachFanLevel=0;reachFanRole;reachLook=za.royal;corePulse=0;trail=[];target=new L;shake=new L;lastPhase=``;projection=new L;effects;effectShaders=new V;shadowElapsed=0;benchmarkMode=null;benchmarkSaved;setBenchmark(e){let t=this.benchmarkSaved,n=this.programKey();if(t){for(let e of t.hidden)e.visible=!0;this.benchmarkSaved=void 0}if(this.benchmarkMode=e,this.applyQuality(e?.quality?{...this.baseQuality,...e.quality}:this.baseQuality),e){let t={hidden:[]};if(e.hideScenery)for(let e of vo){let n=this.scene.getObjectByName(e);n?.visible&&(n.visible=!1,t.hidden.push(n))}if(e.hideOutlines)for(let e of[...this.fighters.values(),...this.bench])e.mesh.traverse(e=>{_o(e)&&e.visible&&(e.visible=!1,t.hidden.push(e))});this.benchmarkSaved=t}else{for(let e of this.plainMaterials.values())e.dispose();this.plainMaterials.clear()}if(n!==this.programKey()){let t=this.renderer.getRenderTarget();this.renderer.setRenderTarget(e?.direct?null:this.effects.composer.readBuffer),this.renderer.compile(this.scene,this.camera),this.renderer.setRenderTarget(t)}}benchmarkOptions(){let e=this.baseQuality;return{baked:e.bakeMapLight&&this.bakes.size>0,mobile:this.mobileDevice,pixelRatio:e.pixelRatio,outlines:[...this.fighters.values()].some(e=>{let t=!1;return e.mesh.traverse(e=>{_o(e)&&(t=!0)}),t}),gtao:Zr[this.mapId].pc.ambientOcclusion&&!e.ambientOcclusion,before:$r(this.mapId,this.mobileDevice)}}programKey(){return`${!!this.benchmarkMode?.direct}:${this.lamps.filter(e=>e.visible).length}:${this.mapMaterialKey()}:${this.skyMesh?.visible}:${this.fighterMaterialKey()}`}mapMeshes=[];lightMaterials=new Map;plainMaterials=new Map;mapMaterialKey(){let e=this.benchmarkMode;if(e?.plainMaterials)return`plain`;if(!this.quality.mapLight||e?.standardMaterials)return`standard`;let t=e?.mapPointLights??this.quality.mapPointLights,n=e?.mapPixelPoints??!0,r=this.quality.bakeMapLight&&this.bakes.size>0&&t===this.baseQuality.mapPointLights&&n;return`light:${t}:${n}:${this.quality.shadowSamples}:${r}`}applyMapMaterials(){let e=this.mapMaterialKey(),[,t,n,r,i]=e.split(`:`),a=r===`1`;for(let{mesh:r,original:o}of this.mapMeshes){let s=o=>e===`plain`?this.plainOf(o):e!==`standard`&&r!==this.water&&ni(o)?this.lightOf(o,fi(o,t===`true`,n===`true`),a,i===`true`?r:void 0):o;r.material=Array.isArray(o)?o.map(s):s(o)}}lightOf(e,t,n,r){let i=r&&this.bakes.get(r),a=`${e.uuid}:${t}:${n}${i?`:${r.uuid}`:``}`,o=this.lightMaterials.get(a);return o||this.lightMaterials.set(a,o=oi(e,this.scene.environmentIntensity,{points:t,shadowOnce:n},i)),o}makeEnvironment(){let e=new rr,t=new St(this.renderer);this.scene.environment=t.fromScene(e,yo).texture,e.dispose(),t.dispose()}bakes=new Map;bakeMs=0;bakeMap(){let e=this.quality;if(!e.mapLight||!e.bakeMapLight)return;let t=performance.now(),n=mi(this.scene,this.renderer.shadowMap.enabled);if(!n)return;let r=new Map(this.culls.map(e=>[e.mesh,e])),i=new Map;for(let{mesh:e}of this.mapMeshes)i.set(e.geometry,(i.get(e.geometry)??0)+1);for(let{mesh:t,original:a}of this.mapMeshes){if(t===this.water||Array.isArray(a)||!ni(a)||this.bakes.has(t))continue;let o=a,s=t.isInstancedMesh===!0,c=r.get(t)?.original,l=s?c?c.length/16:t.count:1,u=t.geometry.getAttribute(`position`).count*l*(o.side===2?2:1);if(Math.ceil(u/pi.width)>this.renderer.capabilities.maxTextureSize)continue;let d={environment:ai(o,this.scene.environmentIntensity),metal:o.metalness,points:fi(o,e.mapPointLights,!0)===`vertex`},f=()=>_i(t,n,d,o.side===2,o.side===1,c),p=f();if(s){if((i.get(t.geometry)??0)>1){let e=new H,n=t.geometry;for(let[t,r]of Object.entries(n.attributes))e.setAttribute(t,r);e.setIndex(n.index);for(let t of n.groups)e.addGroup(t.start,t.count,t.materialIndex);e.boundingSphere=n.boundingSphere,e.boundingBox=n.boundingBox,t.geometry=e}let e=new se(Float32Array.from({length:p.count},(e,t)=>t),1);e.setUsage(v),t.geometry.setAttribute(`mapLightInstance`,e)}this.bakes.set(t,{texture:yi(p),width:pi.width,vertices:p.vertices,texels:p.texels,redo:f})}this.bakeMs=performance.now()-t}rebake(){for(let e of this.bakes.values())e.texture.image.data=vi(e.redo(),e.width).data,e.texture.needsUpdate=!0}bakeReport(){let e=0,t=0,n=0;for(let[r,i]of this.bakes)e+=i.texture.image.width*i.texture.image.height,r.isInstancedMesh&&t++,i.texels===2&&n++;return{meshes:this.bakes.size,instanced:t,doubleSided:n,texels:e,megabytes:+(e*8/1e6).toFixed(1),milliseconds:Math.round(this.bakeMs)}}fighterLightMaterials=new Map;fighterMaterialKey(){let e=this.quality;return`${e.fighterLight?`light:${e.mapPointLights}:${e.shadowSamples}:${e.fighterKeepMetal}`:`standard`}:${e.fadeWhenNeeded}`}applyFighterMaterials(){for(let e of[...this.fighters.values(),...this.bench])this.dressFighter(e)}dressFighter(e){let t=this.quality,n=new Set;for(let r of e.parts){let i=e=>e.isMeshStandardMaterial===!0,a=n=>t.fighterLight&&i(n)&&!(t.fighterKeepMetal&&ui(n,e.role))?this.fighterLightOf(n,t.mapPointLights,t.shadowSamples===1):n;r.mesh.material=Array.isArray(r.original)?r.original.map(a):a(r.original);for(let e of[r.mesh.material].flat())n.add(e)}e.fadeMaterials=[...n]}fighterLightOf(e,t,n){let r=`${e.uuid}:${t}:${n}`,i=this.fighterLightMaterials.get(r);return i||this.fighterLightMaterials.set(r,i=si(e,this.scene.environmentIntensity,{points:t?`vertex`:`none`,shadowOnce:n})),i}plainOf(e){let t=e;if(!t.isMeshStandardMaterial)return e;let n=this.plainMaterials.get(e);if(!n){let r=t.color.clone();t.emissive&&t.emissiveIntensity>0&&r.add(t.emissive.clone().multiplyScalar(t.emissiveIntensity)),n=new R({color:r,map:t.map,vertexColors:t.vertexColors,side:t.side,transparent:t.transparent,opacity:t.opacity,alphaTest:t.alphaTest,alphaMap:t.alphaMap,depthWrite:t.depthWrite,depthTest:t.depthTest,fog:t.fog}),this.plainMaterials.set(e,n)}return n}async prepareMapShaders(){let e=this.renderer.getRenderTarget();this.renderer.setRenderTarget(this.effects.composer.readBuffer);let t;try{t=Promise.all(vo.map(e=>this.scene.getObjectByName(e)).filter(e=>!!e).map(e=>this.renderer.compileAsync(e,this.camera,this.scene)))}finally{this.renderer.setRenderTarget(e)}await t}skyMesh;skyCube;skyColor=new i(`#203d61`);async cacheSky(e){this.skyMesh&&e&&!this.skyCube&&(this.skyCube=new xt(e,{type:_,generateMipmaps:!1,minFilter:Ce,magFilter:Ce,depthBuffer:!1}),await this.prepareSkyCube(),this.drawSkyCube())}async prepareSkyCube(){let e=this.skyMesh,t=this.skyCube;if(!e||!t)return;let r=e.parent,i=new n,a=this.renderer,o=a.getRenderTarget(),s;i.add(e),a.setRenderTarget(t);try{s=a.compileAsync(i,new be(90,1,1,1e3))}finally{a.setRenderTarget(o),r.add(e)}await s}drawSkyCube(){let e=this.skyMesh,t=this.skyCube;if(!e||!t)return;let r=e.parent,i=new n,a=e.visible;i.add(e),e.visible=!0,new s(1,1e3,t).update(this.renderer,i),e.visible=a,r.add(e)}applySky(){let e=this.skyMesh;if(!e)return;let t=this.benchmarkMode,n=!!t?.hideSky,r=!!this.skyCube&&this.quality.skyCube>0&&!t?.liveSky;e.visible=!n&&!r,this.scene.background=r&&!n?this.skyCube.texture:this.skyColor}culls=[];cullShapes(e){if(!this.culls.length)return;let t=this.renderer.shadowMap.autoUpdate||this.renderer.shadowMap.needsUpdate,n=this.quality.cullBuildings&&this.quality.shadow===`once`&&!this.benchmarkMode?.drawAllBuildings&&!t,r=this.benchmarkMode?.halfShapes?e=>e%2==0:void 0,i=n?Ci(e):void 0;if(!i&&!r){if(!this.cullsFull){for(let e of this.culls)e.showAll();this.cullsFull=!0}return}this.cullsFull=!1;for(let e of this.culls)e.show(e.pick(i,r))}cullsFull=!0;quality;baseQuality;applyQuality(e){if(e!==this.quality){this.quality=e;let t=Math.min(devicePixelRatio,e.pixelRatio);this.renderer.getPixelRatio()!==t&&(this.renderer.setPixelRatio(t),this.resize()),this.renderer.shadowMap.autoUpdate=e.shadow===`every`,this.shadowBaked=!1,this.shadowElapsed=0,this.renderer.shadowMap.needsUpdate=!0,this.puckDisc.castShadow=e.movingShadows,this.effects.setBloom(e.bloom);for(let t of this.lamps)t.visible=e.lampLights;this.effects.setAmbientOcclusion(e.ambientOcclusion),this.effects.setSharpen(e.sharpen),this.effects.setAntialias(e.antialias)}this.applyMapMaterials(),this.applySky(),this.applyFighterMaterials()}lamps=[];puckDisc;shadowBaked=!1;sceneryReady=!1;viewportWidth=1;viewportHeight=1;water;mobileDevice=/Android|iPhone|iPad|iPod/i.test(navigator.userAgent)||navigator.platform===`MacIntel`&&navigator.maxTouchPoints>1;flameSim=new ya(this.mobileDevice?$.mobile:1);flameView=new Ea;flameAt=new L;constructor(e,t=`royal`,n){this.canvas=e,this.mapId=t,this.reachLook=za[t];let r=vt(t),i=r.shape===`circle`;this.renderer=new yt({canvas:e,antialias:!this.mobileDevice,alpha:!1,powerPreference:`high-performance`}),e.addEventListener(`webglcontextrestored`,()=>{this.makeEnvironment(),this.drawSkyCube(),this.rebake()}),this.baseQuality=this.quality=Qr(t,this.mobileDevice),this.renderer.setPixelRatio(Math.min(devicePixelRatio,this.quality.pixelRatio)),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.autoUpdate=this.quality.shadow===`every`,this.renderer.shadowMap.needsUpdate=!0,this.renderer.shadowMap.type=1,this.renderer.outputColorSpace=w,this.renderer.toneMapping=4,this.scene.add(this.flameView.root);let o=tr[t];this.renderer.toneMappingExposure=o.exposure,this.skyColor.set(o.background),this.scene.background=this.skyColor,this.scene.fog=new M(o.fog.color,o.fog.density),this.scene.add(new ae(o.hemisphere.sky,o.hemisphere.ground,o.hemisphere.intensity));let s=new h(o.sun.color,o.sun.intensity);s.position.set(-28,47,-38),s.castShadow=!0,s.shadow.mapSize.set(2048,2048),Object.assign(s.shadow.camera,{left:-r.width/2-24,right:r.width/2+24,top:r.depth/2+24.5,bottom:-r.depth/2-24.5,near:1,far:160}),i||Object.assign(s.shadow.camera,{left:-r.width/2-31,right:r.width/2+31,top:r.depth/2+31.5,bottom:-r.depth/2-31.5}),s.shadow.bias=-3e-4,s.shadow.normalBias=.025,s.shadow.radius=2,this.scene.add(s);let c=new h(o.fill.color,o.fill.intensity);c.position.set(-15,15,35),this.scene.add(c);let l=Pr(this.renderer,yo).then(e=>{this.scene.environment=e});this.scene.environmentIntensity=o.environment;let u=(e,t)=>t?.then(t=>(performance.mark(`scene:${e}`),t));this.ready=Promise.all([u(`map`,t===`school`?kn(this.scene):t===`dojo`?qn(this.scene):i?sn(this.scene):$t(this.scene)),u(`samurai`,At()),u(`yuru-party`,ot()===`human`?Ot(n?.filter(e=>e!==`samurai`)):void 0),u(`grandpa`,ot()===`human`&&(!n||n.includes(`samurai`))?Et():void 0),u(`cpu-yuru`,ot()===`human`?Tt(n):void 0),u(`environment`,l)]).then(async()=>{this.water=this.scene.getObjectByName(`harbour-water`);for(let e of vo){let t=this.scene.getObjectByName(e);t&&(t.updateWorldMatrix(!0,!0),t.traverse(e=>{e.matrixAutoUpdate=!1,e.matrixWorldAutoUpdate=!1}))}this.scene.traverse(e=>{e.name===`city-lamp-light`&&e.isPointLight&&this.lamps.push(e)});for(let e of this.lamps)e.visible=this.quality.lampLights;for(let e of vo)this.scene.getObjectByName(e)?.traverse(e=>{let t=e;t.isMesh&&[t.material].flat().some(e=>e.isMeshStandardMaterial)&&this.mapMeshes.push({mesh:t,original:t.material})});for(let e of[`blender-harbour-city`,`rift-arena`])this.scene.getObjectByName(e)?.traverse(e=>{e.isInstancedMesh&&this.culls.push(new wi(e))});return this.skyMesh=this.scene.getObjectByName(bo),await this.cacheSky(this.quality.skyCube),this.bakeMap(),this.applyMapMaterials(),this.applySky(),performance.mark(`scene:map-ready`),this.prepareMapShaders().then(()=>this.prepareEffectShaders())}).then(()=>{this.sceneryReady=!0,performance.mark(`scene:shaders`)}),this.scene.onBeforeRender=(e,t,n)=>this.cullShapes(n),this.ready.catch(e=>{console.error(`ゲームの素材の読み込みに失敗しました`,e)});let d=U.puckRadius,f=go,p=d*f.height,m=f.floorGap+p,g=new z(new ve(d*f.taper,d,p,32),new F({color:`#101923`,metalness:.75,roughness:.26}));g.position.y=f.floorGap+p/2,g.castShadow=this.quality.movingShadows,this.puck.add(g),this.puckDisc=g;let _=new z(new ve(d*f.coreRadius,d*f.coreRadius,f.coreThickness,24),new R({color:`#e4ffc0`}));_.position.y=m+f.coreLift+f.coreThickness/2,this.puck.add(_);let v=new z(new re(d*f.bandRadius,d*f.bandThickness,6,32),new R({color:`#d0ff82`}));v.rotation.x=Math.PI/2,v.position.y=f.floorGap+p*f.bandAt,this.puck.add(v);let y=new z(new a(d*f.glowInner,d*f.glowOuter,32),new R({color:`#d0ff82`,transparent:!0,opacity:.55,side:2,depthWrite:!1}));y.rotation.x=-Math.PI/2,y.position.y=f.glowLift,this.puck.add(y),this.scene.add(this.puck),this.puckParts=[_.material,v.material,y.material];let b=new z(new a(Ye.ringRadius*Ye.ringInner,Ye.ringRadius,40),new R({color:`#ff5a5a`,transparent:!0,opacity:0,side:2,depthWrite:!1}));b.rotation.x=-Math.PI/2,b.visible=!1,this.threatRing=b,this.scene.add(b),this.scene.add(this.teamRings);let x=Math.acos(Ie.showAngle),S=new z(new je(1,48,-x,x*2),new R({color:`#ffffff`,transparent:!0,opacity:0,side:2,depthWrite:!1}));S.rotation.x=-Math.PI/2,S.visible=!1,this.reachFan=S,this.scene.add(S);let C=new z(S.geometry,new R({color:`#ffffff`,transparent:!0,opacity:0,side:2,depthWrite:!1}));C.rotation.x=-Math.PI/2,C.visible=!1,C.renderOrder=Ka.fan,this.reachFanFlash=C,this.scene.add(C);let T=new z(new a(.9,1,48,1,-x,x*2),new R({color:`#ffffff`,transparent:!0,opacity:0,side:2,depthWrite:!1}));T.rotation.x=-Math.PI/2,T.visible=!1,this.coreBand=T,this.scene.add(T);let E=new z(Za(.9,1,x),to());E.rotation.x=-Math.PI/2,E.visible=!1,E.renderOrder=Ka.glow,this.coreGlow=E,this.scene.add(E);let D=new z(Qa(.9,1,x),to());D.material.blending=1,D.rotation.x=-Math.PI/2,D.visible=!1,D.renderOrder=Ka.light,this.coreLight=D,this.scene.add(D);let O=new z($a(1,x),to());O.rotation.x=-Math.PI/2,O.visible=!1,O.renderOrder=Ka.burst,this.coreBurst=O,this.scene.add(O);let ee=no,te=new z(new a(ee-.06,ee,48),new R({color:`#e8eef6`,transparent:!0,opacity:0,side:2,depthWrite:!1}));te.rotation.x=-Math.PI/2,te.visible=!1,this.bodyRing=te,this.scene.add(te);for(let e=0;e<f.trailCount;e++){let t=new z(new je(d*f.trailRadius*(1-e/18),12),new R({color:`#c7ff7b`,transparent:!0,opacity:.3*(1-e/f.trailCount),depthWrite:!1}));t.rotation.x=-Math.PI/2,t.position.y=f.trailLift,t.visible=!1,this.scene.add(t),this.trail.push(t)}this.effects=new Xr(this.renderer,this.scene,this.camera,this.mobileDevice,{ambientOcclusion:this.quality.ambientOcclusion,bloom:this.quality.bloom}),this.effects.setSharpen(this.quality.sharpen),this.effects.setAntialias(this.quality.antialias),this.effects.setBook(Ke()),this.effects.maskRoots=()=>[...this.fighters.values()].map(e=>e.mesh),this.resize()}async prepareEffectShaders(){let e=new _e(1,1),t=[new R,new R({transparent:!0,depthWrite:!1}),new R({transparent:!0,depthWrite:!1,side:2}),new F({color:`#87e5ff`,emissive:`#1a809b`,emissiveIntensity:.3,metalness:.2,roughness:.18,transparent:!0,opacity:.84}),Oi()];for(let n of t){let t=new z(e,n);t.castShadow=!0,this.effectShaders.add(t)}for(let e of this.flameView.warmup())this.effectShaders.add(e);this.effectShaders.add(new z(Za(.9,1,Math.PI/2),to()));let n=Fa(1);n.count=1,this.effectShaders.add(n);let r=new H;r.setAttribute(`position`,new ce(new Float32Array(9),3)),r.setAttribute(`color`,new ce(new Float32Array(9),3)),this.effectShaders.add(new z(r,new R({vertexColors:!0,transparent:!0,depthWrite:!1,side:2,blending:2})));let i=new a(.5,1,4);i.setAttribute(`color`,new ce(new Float32Array(i.getAttribute(`position`).count*3),3)),this.effectShaders.add(new z(i,new R({vertexColors:!0,transparent:!0,side:2,depthWrite:!1})));let o=new H;o.setAttribute(`position`,new ce(new Float32Array(9),3)),this.effectShaders.add(new z(o,Mt()));let s=new H;s.setAttribute(`position`,new ce(new Float32Array(9),3)),s.setAttribute(`normal`,new ce(new Float32Array([0,1,0,0,1,0,0,1,0]),3)),s.setAttribute(`skinIndex`,new m(new Uint16Array(12),4)),s.setAttribute(`skinWeight`,new ce(new Float32Array([1,0,0,0,1,0,0,0,1,0,0,0]),4));let c=new u(s,new R({transparent:!0,depthWrite:!1})),l=new Se;c.add(l),c.bind(new D([l])),c.frustumCulled=!1,this.effectShaders.add(c);let d=this.renderer.getRenderTarget();this.renderer.setRenderTarget(this.effects.composer.readBuffer);let f;try{f=this.renderer.compileAsync(this.effectShaders,this.camera,this.scene)}finally{this.renderer.setRenderTarget(d)}await f}async prepareFirstDraw(){let e=this.renderer,t=this.effects.composer,n=e.getRenderTarget(),r=[];try{e.setRenderTarget(t.readBuffer);for(let t of[this.puck,this.skyMesh?.visible?this.skyMesh:void 0])t&&r.push(e.compileAsync(t,this.camera,this.scene));let n=zr(this.scene.background);n&&(this.standIns.push(n),r.push(e.compileAsync(n,this.camera,this.scene)));let i=Rr(this.scene);if(i.children.length){this.standIns.push(i);let t=this.scene.fog;this.scene.fog=null;try{r.push(e.compileAsync(i,this.camera,this.scene))}finally{this.scene.fog=t}}for(let{mesh:n,toScreen:i}of this.effects.screenQuads())e.setRenderTarget(i?null:t.writeBuffer),r.push(e.compileAsync(n,Hr))}finally{e.setRenderTarget(n)}await Promise.all(r)}checkPrograms(){for(let e of this.renderer.info.programs??[])e.getUniforms()}standIns=[];async seatGently(e){this.viewing=_t(e);for(let t=1;t<e.fighters.length;t++)nr(this.fighters,e.fighters.slice(0,t),this.bench,this.seatActions),await new Promise(e=>setTimeout(e,0));this.seat(e)}seat(e){this.viewing=_t(e),nr(this.fighters,e.fighters,this.bench,this.seatActions),this.dropStaleAvatars();for(let e of this.fighters.values())for(let t of e.fadeMaterials){let e=di(t,1,this.quality.fadeWhenNeeded);t.alphaHash!==e&&(t.alphaHash=e,t.needsUpdate=!0)}}async prepareFighterShaders(){let e=[...this.fighters.values()],t=e.flatMap(e=>[e.mesh,e.heal,e.barrier,...e.calm?[e.calm]:[]]),n=this.quality.fadeWhenNeeded?e.flatMap(e=>e.fadeMaterials).filter(e=>!e.transparent):[],r=n.map(e=>e.alphaHash),i=[];try{for(let e of n.length?[!1,!0]:[void 0]){if(e!==void 0)for(let t of n)t.alphaHash!==e&&(t.alphaHash=e,t.needsUpdate=!0);for(let e of tt(t)){let t=this.renderer.getRenderTarget();this.renderer.setRenderTarget(this.effects.composer.readBuffer);try{i.push(this.renderer.compileAsync(e,this.camera,this.scene))}finally{this.renderer.setRenderTarget(t)}await new Promise(e=>setTimeout(e,0))}}}finally{n.forEach((e,t)=>{e.alphaHash!==r[t]&&(e.alphaHash=r[t],e.needsUpdate=!0)})}await Promise.all(i),this.effects.warmMask()}sizeStale(){let e=this.canvas.clientWidth,t=this.canvas.clientHeight;return e>0&&t>0&&(e!==this.viewportWidth||t!==this.viewportHeight)}resize(){let e=this.canvas.clientWidth,t=this.canvas.clientHeight;this.viewportWidth=e,this.viewportHeight=t,this.renderer.setSize(e,t,!1),this.camera.aspect=e/t,this.camera.updateProjectionMatrix(),this.effects?.resize(e,t)}dispose(){this.renderer.dispose(),this.renderer.forceContextLoss()}resetCamera(e=0){this.yaw=Qe(e)*Math.PI/2,this.pitch=.58,this.gunPitch=.12,this.lastPhase=``}project(e,t,n){return this.projection.set(e,t,n).project(this.camera),{x:(this.projection.x*.5+.5)*this.viewportWidth,y:(-.5*this.projection.y+.5)*this.viewportHeight,visible:this.projection.z>-1&&this.projection.z<1&&Math.abs(this.projection.x)<1.08&&Math.abs(this.projection.y)<1.1}}groundAxes(e,t){this.camera.updateMatrixWorld();let n={x:Math.sin(this.yaw),z:Math.cos(this.yaw)},r={x:-n.z,z:n.x},i=.5,a=this.project(e.x,t,e.z);if(!a.visible)return;let o=this.project(e.x+r.x*i,t,e.z+r.z*i),s=this.project(e.x+n.x*i,t,e.z+n.z*i);return{right:r,forward:n,onRight:{x:(o.x-a.x)/i,y:(o.y-a.y)/i},onForward:{x:(s.x-a.x)/i,y:(s.y-a.y)/i}}}drawPuckState(e,t){let n=ct(Math.hypot(e.puck.velocity.x,e.puck.velocity.z));this.puckTint.lerp(this.tierColor(n),t>0?Math.min(1,t/Ye.blend):0);for(let e of this.puckParts)e.color.copy(this.puckTint).multiplyScalar(n.glow);let r=qe(e);if(r>0){this.puckTint.lerp(ho,Math.min(1,r*1.1));for(let e of this.puckParts)e.color.copy(this.puckTint).multiplyScalar(1+r*1.6)}let i=.8+n.glow*.2,a=Math.min(1,n.glow),o=r>0?this.trail.length:n.trail;this.trail.forEach((t,n)=>{let r=e.puck.trail[e.puck.trail.length-1-n];if(t.visible=!!r&&n<o,!t.visible)return;t.position.set(r.x,go.trailLift,r.z),t.scale.setScalar(i);let s=t.material;s.color.copy(this.puckTint),s.opacity=.3*(1-n/go.trailCount)*a});let s=this.threatRing;if(!s)return;let c=e.fighters.find(t=>t.id===e.controlledId),l=c&&e.phase===`playing`?Ze(e.puck,c,et(e,c.id)):null,u=$e(this.threatDisplay,l,t);s.visible=u.visible,u.visible&&c&&(s.position.set(c.pos.x,.055,c.pos.z),s.material.opacity=u.opacity)}drawReachFan(e,t){let n=this.reachFan,r=this.coreBand,i=this.bodyRing,o=this.coreGlow,s=this.coreLight,c=this.coreBurst,l=this.reachFanFlash;if(!n||!r||!i||!o||!s||!c||!l)return;let u=e.fighters.find(t=>t.id===e.controlledId),d=u&&e.phase===`playing`&&u.role!==`gunner`&&u.stun<=0&&!u.meditating&&!u.sprinting?!Ie.showWhenReady||u.cooldowns[0]<=0?1:.25:0,f=t>0?t/Ie.fadeIn:0;this.reachFanLevel+=I.clamp(d-this.reachFanLevel,-f,f);let p=this.reachFanLevel;if(n.visible=r.visible=i.visible=p>.01,!n.visible||!u){o.visible=s.visible=c.visible=l.visible=!1,Object.assign(this.coreFlash,{since:-1,level:0,burst:-1});return}let m=pt(u.role)+U.puckRadius;if(this.reachFanRole!==u.role){this.reachFanRole=u.role;let e=Ha(st[u.role].color,this.reachLook);n.material.color.copy(e.fan),r.material.color.copy(e.band),i.material.color.copy(e.body);let t=Ga(this.reachLook.flash);s.material.color.copy(t.light),o.material.color.copy(t.halo),c.material.color.copy(t.ring),l.material.color.copy(t.fan),o.material.blending=c.material.blending=t.additive?2:1;let d=m-no,f=Math.acos(Ie.showAngle),p=no+d*(Xe.core-Xe.criticalBand),h=no+d*(Xe.core+Xe.criticalBand);r.geometry.dispose(),r.geometry=new a(p,h,48,1,-f,f*2),this.coreOut=h,o.geometry.dispose(),o.geometry=Za(p,h,f),s.geometry.dispose(),s.geometry=Qa(p,h,f),c.geometry.dispose(),c.geometry=$a(h,f)}let h=Math.atan2(-u.facing.z,u.facing.x);n.position.set(u.pos.x,.035,u.pos.z),n.scale.setScalar(m),n.rotation.set(-Math.PI/2,0,h);let g=mt(e,u);this.corePulse=g?this.corePulse+t:0;let _=g?.78+.22*Math.sin(this.corePulse/.12*Math.PI*2):0,v=Ua(this.reachLook,p,g,_);n.material.opacity=v.fan,r.position.set(u.pos.x,.04,u.pos.z),r.rotation.set(-Math.PI/2,0,h),Ya(this.coreFlash,g&&p>.2,t,g?.5+.5*Math.sin(this.corePulse/.12*Math.PI*2):0);let y=this.coreFlash.level;if(r.material.opacity=v.band*Ja(y),n.material.opacity=v.fan*Ja(y),o.visible=s.visible=l.visible=y>.001,o.visible&&(l.position.copy(n.position),l.rotation.copy(n.rotation),l.scale.copy(n.scale),l.material.opacity=Wa.fanOpacity*y,o.position.set(u.pos.x,.045,u.pos.z),o.rotation.set(-Math.PI/2,0,h),o.material.opacity=y,s.position.set(u.pos.x,.05,u.pos.z),s.rotation.set(-Math.PI/2,0,h),s.material.opacity=y),c.visible=this.coreFlash.burst>=0,c.visible){let e=Xa(this.coreFlash.burst,this.coreOut);c.position.set(u.pos.x,.055,u.pos.z),c.rotation.set(-Math.PI/2,0,h),c.scale.set(e.scale,e.scale,1),c.material.opacity=e.opacity}i.position.set(u.pos.x,.03,u.pos.z),i.material.opacity=v.body}tierColor(e){return this.tierColors.get(e.color)??this.tierColors.set(e.color,new i(e.color)).get(e.color)}tierColors=new Map;dodgeGhost(e,t){let n=e.fighters.find(e=>e.dash?.presentation===`dodge-afterimage`&&Math.hypot(e.pos.x-t.pos.x,e.pos.z-t.pos.z)<1.5),r=n&&this.fighters.get(n.id)?.mesh.userData.samurai;if(!n||!r)return;let i=Wt(r.model);return i.position.x+=t.pos.x-n.pos.x,i.position.z+=t.pos.z-n.pos.z,i}disposeObject(e){e.traverse(e=>{if(e instanceof z){if(e instanceof u&&e.skeleton.dispose(),e.userData.ghost)return;e.geometry.dispose(),(Array.isArray(e.material)?e.material:[e.material]).forEach(e=>e.dispose())}}),e.userData.ghostMaterial?.dispose(),this.scene.remove(e)}dropStaleAvatars(){let e=new Set(this.avatars.map(e=>He(e.look)));this.bench.some(t=>t.look&&!e.has(t.look))&&(this.bench=this.bench.filter(t=>{if(!t.look||e.has(t.look))return!0;for(let e of[t.mesh,t.ring,t.shadow,t.heal,t.barrier,t.calm])e?.traverse(e=>{e instanceof z&&(e instanceof u&&e.skeleton.dispose(),(Array.isArray(e.material)?e.material:[e.material]).forEach(e=>e.dispose()))});return!1}))}createFighter(e){let t=this.avatarOf(e),n=Lt(e.role,e.team,t),r=new z(new a(.77,.86,40),new R({color:e.team===this.viewing?ro.ally:ro.enemy,side:2,transparent:!0,opacity:.95,depthWrite:!1}));r.rotation.x=-Math.PI/2;let i=new z(new je(.68,20),new R({color:`#010611`,transparent:!0,opacity:.14,depthWrite:!1}));i.rotation.x=-Math.PI/2;let o=[];n.traverse(e=>{!(e instanceof z)||e.userData.samuraiVfx||e.userData.noFade||o.push({mesh:e,original:e.material})});let s=da(),c=la(zi.stance[e.role]),l=Bt();this.scene.add(n,r,i,s,l),c&&this.scene.add(c);let u={mesh:n,role:e.role,team:e.team,look:t?He(t):``,ring:r,shadow:i,parts:o,fadeMaterials:[],heal:s,calm:c,healLevel:0,calmLevel:0,opacity:1,barrier:l};return this.dressFighter(u),u}flameNozzle=e=>{let t=e===void 0?void 0:this.fighters.get(e);if(!t)return;let n=t.mesh.getObjectByName(`PudHand_L`)??t.mesh.getObjectByName(`wrist_L`);if(!n)return;n.updateWorldMatrix(!0,!1);let r=n.getWorldPosition(this.flameAt),i=t.mesh.rotation.y;return{x:r.x,y:r.y,z:r.z,fx:Math.sin(i),fz:Math.cos(i)}};draw(e,t,n){if(this.benchmarkMode?.skipRender)return;let r=this.water;r?.material.userData.shader&&(r.material.userData.shader.uniforms.harbourTime.value=n);let i=this.viewing=_t(e);nr(this.fighters,e.fighters,this.bench,this.seatActions),this.dropStaleAvatars(),this.flameSim.track(e.projectiles,e.phase===`playing`);let o=this.ringSpots;o.length=0;for(let r of e.fighters){let a=this.fighters.get(r.id);if(!a||!this.seatActions.ready(r))continue;a.mesh.position.set(r.pos.x,0,r.pos.z),a.mesh.rotation.y=Math.atan2(r.facing.x,r.facing.z),a.mesh.userData.flameHold=r.role===`mage`?this.flameSim.hold(r.id):0,Ft(a.mesh,r,r.role===`samurai`&&e.phase!==`lobby`?e.elapsed:n,t);let s=a.mesh.userData.gait,c=this.footsteps.step(r.id,s);c>=0&&this.steps.length<32&&this.steps.push({id:r.id,foot:c,moving:s.moving,x:r.pos.x,z:r.pos.z,pudding:Be(r.role,this.avatarOf(r),ot())}),a.ring.position.set(r.pos.x,.045,r.pos.z),a.ring.visible=r.id===e.controlledId;let l=Oa(r.team,i,r.id===e.controlledId);l&&o.push({x:r.pos.x,z:r.pos.z,kind:l}),a.ring.material.color.copy(r.team===i?ro.ally:ro.enemy),a.shadow.position.set(r.pos.x,.025,r.pos.z);let u=0;for(let t of e.effects)t.presentation===`guard-hit`&&Math.hypot(t.pos.x-r.pos.x,t.pos.z-r.pos.z)<.8&&(u=Math.max(u,t.life/t.maxLife));Vt(a.barrier,!!r.blocking,r.pos.x,r.pos.z,Math.atan2(r.facing.x,r.facing.z),u,r.guardGauge/ut.gauge,a.opacity,n);let d=(e,n,r)=>t>0?I.clamp(e+(n?t/r.fadeIn:-t/r.fadeOut),0,1):e;a.healLevel=d(a.healLevel,(r.healed??0)>0&&r.stun<=0,zi.heal),a.calmLevel=d(a.calmLevel,(!!r.meditating||!!r.sprinting||(r.boost??0)>0)&&r.stun<=0,zi.meditation),a.heal.position.set(r.pos.x,0,r.pos.z),fa(a.heal,a.healLevel*a.opacity,n,this.camera,r.id),a.calm&&(a.calm.position.set(r.pos.x,0,r.pos.z),ua(a.calm,a.calmLevel*a.opacity,n,this.camera,r.id))}La(this.teamRings,o,n),this.puck.position.set(e.puck.pos.x,0,e.puck.pos.z),this.puck.rotation.y=n*1.2,this.drawPuckState(e,t),this.drawReachFan(e,t),this.flameSim.update(t,this.flameNozzle),this.flameView.write(this.flameSim,n);let s=new Set;for(let n of e.projectiles){if(n.kind===`fire`)continue;let e=`p`+n.id;s.add(e);let r=this.transient.get(e);if(!r){if(n.kind===`bullet`){r=new V;let e=new z(new y(.12,8,6),new R({color:`#fff5ce`}));r.add(e);let t=new z(new ve(.055,.015,1.15,6),new R({color:n.team===0?`#ffc66e`:`#ff7762`,transparent:!0,opacity:.85,depthWrite:!1}));t.rotation.x=Math.PI/2,t.position.z=-.57,r.add(t)}else r=n.kind===`kamaitachi`?mo():new z(new c(.2),new R({color:`#b7afff`}));this.transient.set(e,r),this.scene.add(r)}r.position.set(n.pos.x,n.kind===`kamaitachi`?0:n.height??1.1,n.pos.z),n.kind===`bullet`?(r.quaternion.setFromUnitVectors(new L(0,0,1),new L(n.velocity.x,n.verticalVelocity??0,n.velocity.z).normalize()),r.children[1].material.color.copy(so[n.team])):n.kind===`kamaitachi`?(r.quaternion.setFromUnitVectors(new L(0,0,1),new L(n.velocity.x,0,n.velocity.z).normalize()),r.scale.setScalar(1+.22*(1-Math.max(0,Math.min(1,n.life/nt.life))))):r.rotation.y+=t*10}for(let t of e.walls){let e=`w`+t.id;s.add(e);let r=this.transient.get(e);if(t.kind===`light`){r||(r=ki(t.width,t.id,n),this.transient.set(e,r),this.scene.add(r)),ji(r,t,n);continue}if(!r){r=new V;for(let e=0;e<6;e++){let n=1.6+e%3*.35,i=new z(new ve(.3,.53,n,5),new F({color:`#87e5ff`,emissive:`#1a809b`,emissiveIntensity:.3,metalness:.2,roughness:.18,transparent:!0,opacity:.84}));i.position.set(0,n/2,(e-2.5)*t.width/6),i.rotation.y=e,i.castShadow=this.quality.movingShadows,r.add(i)}this.transient.set(e,r),this.scene.add(r)}r.position.set(t.pos.x,0,t.pos.z),r.scale.y=Math.min(1,t.life*2);let i=gt(t);r.rotation.y=Math.atan2(-i.z,i.x)}for(let t of e.effects){if(t.presentation===`samurai-iai`)continue;let n=`e`+t.id;s.add(n);let r=this.transient.get(n);if(t.presentation===`guard-hit`)continue;if(t.presentation===`guard-break`){r||(r=Ht(t.id),this.transient.set(n,r),this.scene.add(r)),Ut(r,t.pos.x,t.pos.z,Math.atan2(t.direction?.x??0,t.direction?.z??1),1-t.life/t.maxLife,t.maxLife);continue}if(t.presentation===`dodge-afterimage`){r||(r=this.dodgeGhost(e,t)??new V,this.transient.set(n,r),this.scene.add(r)),r.userData.ghostMaterial&&Nt(r,1-t.life/t.maxLife);continue}if(t.presentation===`dodge-vanish`||t.presentation===`dodge-smoke`||t.presentation===`dodge-roll`||t.presentation===`dodge-step`){let e=t.presentation===`dodge-vanish`||t.presentation===`dodge-smoke`?`smoke`:`dust`;r||(r=Rt(e,t.id),this.transient.set(n,r),this.scene.add(r)),It(r,e,t.pos.x,t.pos.z,Math.min(1,(1-t.life/t.maxLife)*1.4),this.camera);continue}if(t.presentation===`kamaitachi-hold`){r||(r=mo(),this.transient.set(n,r),this.scene.add(r)),r.position.set(t.pos.x,0,t.pos.z),r.quaternion.setFromUnitVectors(new L(0,0,1),new L(t.direction?.x??1,0,t.direction?.z??0).normalize());let e=Ue+(t.maxLife-t.life);oo.forEach((t,n)=>{let i=r.children[n],a=e-t;i.visible=a>=0,i.material.opacity=po*(1+.9*Math.max(0,1-a/.09))}),r.children[oo.length+1].visible=!1;continue}if(t.presentation===`wind`){if(!r){r=new V;let e=new z(new a(.9,1,40,1,0,Math.PI),new R({color:`#eaf6ff`,side:2,transparent:!0,opacity:.5,depthWrite:!1}));e.rotation.x=-Math.PI/2,r.add(e),this.transient.set(n,r),this.scene.add(r)}let e=1-t.life/t.maxLife,i=t.radius*(at.start+(1-at.start)*Math.min(1,e));r.position.set(t.pos.x,.45,t.pos.z),r.scale.set(i,1,i),r.rotation.y=Math.atan2(-(t.direction?.x??0),-(t.direction?.z??1)),r.children[0].material.opacity=.55*(1-e)*(1-e*.5);continue}if(t.presentation===`weapon-slash`||t.presentation===`staff-hit`){if(!r){let e=t.presentation===`staff-hit`;r=new V;let i=new z(new a(t.radius*(e?.92:.84),t.radius,28,1,.45,2.25),new R({color:e?`#ffe6b0`:t.team===0?`#c8edff`:`#ffb8a4`,side:2,transparent:!0,opacity:.7,depthWrite:!1}));i.rotation.x=Math.PI/2,i.position.y=e?.55:.8,r.add(i),this.transient.set(n,r),this.scene.add(r)}let e=1-t.life/t.maxLife;r.position.set(t.pos.x,0,t.pos.z),r.rotation.y=Math.atan2(t.direction?.x??0,t.direction?.z??1)+(e-.5)*.6;let i=r.children[0];i.material.opacity=Math.sin(Math.PI*e)*.72;continue}if(t.presentation===`clash-spark`){r||(r=Ii(t.id),this.transient.set(n,r),this.scene.add(r)),r.position.set(t.pos.x,t.height??1.2,t.pos.z),Ri(r,1-t.life/t.maxLife,t.radius,this.camera);continue}if(t.presentation===`shockwave`){r||(r=new z(new a(.86,1,64),new R({color:`#fff6d0`,side:2,transparent:!0,opacity:.95,depthWrite:!1})),r.rotation.x=-Math.PI/2,this.transient.set(n,r),this.scene.add(r));let e=1-t.life/t.maxLife,i=.6+(t.radius-.6)*e;r.position.set(t.pos.x,.09,t.pos.z),r.scale.setScalar(i),r.material.opacity=.95*(1-e)*(1-e);continue}let i=1-t.life/t.maxLife;if(!r){let e=(t.presentation===`crit-spark`?`#fff3c4`:t.presentation===`mid-spark`?`#8ff0ff`:t.presentation===`tip-spark`?`#8f9fb4`:``)||(t.kind===`heal`?`#a7ff91`:t.kind===`hit`?`#ffb089`:t.kind===`ice`?`#8ff0ff`:t.kind===`light`?`#ffe27a`:t.team===0?`#a6ecff`:`#ffc298`);r=new V;let i=[`slash`,`charge`].includes(t.kind),o=new z(new a(t.radius*.83,t.radius,i?28:48,1,0,i?Math.PI*1.3:Math.PI*2),new R({color:e,side:2,transparent:!0,opacity:.9,depthWrite:!1}));o.rotation.x=-Math.PI/2,o.position.y=t.kind===`heal`?.12:.65,r.add(o);for(let n=0;n<7;n++){let i=new z(new c(.095),new R({color:e,transparent:!0,opacity:1}));i.position.set(Math.cos(n*6.28/7)*t.radius,.4,Math.sin(n*6.28/7)*t.radius),r.add(i)}this.transient.set(n,r),this.scene.add(r)}r.position.set(t.pos.x,0,t.pos.z),r.scale.setScalar(.7+i*.5),r.rotation.y=i*2,r.children.forEach((e,t)=>{let n=e;n.material.opacity=1-i,t>0&&(e.position.y=.35+i*1.5)})}for(let[e,t]of this.transient)s.has(e)||(this.disposeObject(t),this.transient.delete(e));let l=e.fighters.find(t=>t.id===e.controlledId),u=e.phase===`lobby`;if(this.camera.position.sub(this.shake),this.shake.set(0,0,0),u){let e=this.camera.aspect;if(this.mapId===`colosseum`){let t=vt(this.mapId).radius;this.target.set(10,7,-6),this.camera.position.set(-t*.62,e<1.6?11:9.5,t*.54)}else this.target.set(35,8,-3),this.camera.position.set(-U.width/2-9+Math.sin(n*.06)*.5,e<1.6?13:11,12);this.camera.lookAt(this.target)}else{let e=new L(Math.sin(this.yaw),0,Math.cos(this.yaw)),n=new L(l.pos.x,0,l.pos.z),r=n.clone().addScaledVector(e,-8);r.y=1.56+this.pitch*3;let i=7;if(this.mapId===`colosseum`){let e=vt(this.mapId).radius-.9,t=Math.hypot(r.x,r.z);t>e&&(r.x*=e/t,r.z*=e/t);let a=Math.hypot(r.x-n.x,r.z-n.z);r.y+=Math.max(0,4-a)*.7,i=I.lerp(.65,7,I.smoothstep(a,.4,4))}else if(this.mapId===`dojo`){r.x=I.clamp(r.x,-In.x,In.x),r.z=I.clamp(r.z,-In.z,In.z);let e=Math.hypot(r.x-n.x,r.z-n.z);r.y+=Math.max(0,4-e)*.7,i=I.lerp(.65,7,I.smoothstep(e,.4,4))}let a=n.clone().addScaledVector(e,i);a.y=1.8;let o=this.lastPhase===`lobby`||this.lastPhase===``?1:1-Math.exp(-t*10);this.camera.position.lerp(r,o),this.target.lerp(a,o),this.camera.lookAt(this.target)}if(!u){let t=We(l),r=Math.max(t.f>0?(.05+.07*t.s)*t.f:l.hitStop>0?.03:0,lt(e));r>0&&(this.shake.set(Math.sin(n*80)*r,Math.cos(n*63)*r,0),this.camera.position.add(this.shake),this.camera.lookAt(this.target))}this.lastPhase=e.phase;let d=new Set(e.fighters.filter(e=>e.dash?.presentation===`dodge-vanish`).map(e=>e.id));for(let[t,n]of this.fighters){let r=n.mesh.position.distanceTo(this.camera.position),i=u||t===e.controlledId?1:I.smoothstep(r,4.5,6.5);for(let e of n.fadeMaterials){let t=di(e,i,this.quality.fadeWhenNeeded);e.alphaHash!==t&&(e.alphaHash=t,e.needsUpdate=!0),e.opacity=i}n.mesh.visible=i>.015&&!d.has(t)&&!this.benchmarkMode?.hideFighters,n.opacity=i}for(let t of e.fighters)if(t.role===`gunner`&&t.stun<=0){let n=this.fighters.get(t.id)?.mesh;if(!n)continue;t.id===e.controlledId&&!u?Pt(n,new L(t.pos.x+t.facing.x*12,1.2,t.pos.z+t.facing.z*12)):Pt(n,new L(e.puck.pos.x,.25,e.puck.pos.z))}this.quality.shadow===`once`?this.sceneryReady&&!this.shadowBaked&&(this.renderer.shadowMap.needsUpdate=!0,this.shadowBaked=!0):this.quality.shadow===`hz30`&&(this.shadowElapsed+=t,this.shadowElapsed>=1/30&&(this.renderer.shadowMap.needsUpdate=!0,this.shadowElapsed%=1/30)),this.benchmarkMode?.direct?(this.renderer.info.reset(),this.renderer.setRenderTarget(null),this.renderer.render(this.scene,this.camera)):this.effects.render(t)}gunAim(e){let t=e.fighters.find(t=>t.id===e.controlledId);this.camera.updateMatrixWorld(!0);let n=this.camera.position.clone(),r=this.camera.getWorldDirection(new L).multiplyScalar(100),i=Je(e,n,r,t.team,0),a=n.clone().addScaledVector(r,i?.t??1),o=this.fighters.get(t.id)?.mesh;return o&&(o.position.set(t.pos.x,0,t.pos.z),o.rotation.y=Math.atan2(t.facing.x,t.facing.z)),{origin:(o?Pt(o,a):void 0)??{x:t.pos.x,y:1.2,z:t.pos.z},target:a}}minimap(e,t){let n=e.getContext(`2d`),r=e.width,i=e.height,a=vt(t.mapId),o=a.shape===`circle`;n.clearRect(0,0,r,i);let s=Math.min(r-20,i-20)/(a.radius*2),c=o?s:(r-20)/a.width,l=o?s:(i-20)/a.depth,u=e=>r/2+e*c,d=e=>i/2+e*l;n.strokeStyle=`#ffffff35`,n.lineWidth=1,n.fillStyle=`#b28b5720`,n.beginPath(),o?n.arc(r/2,i/2,a.radius*c,0,Math.PI*2):n.rect(10,10,r-20,i-20),n.fill(),n.stroke(),n.beginPath(),n.moveTo(r/2,d(-a.depth/2)),n.lineTo(r/2,d(a.depth/2)),n.stroke(),n.beginPath(),n.arc(r/2,i/2,o?5*c:12,0,Math.PI*2),n.stroke();for(let e of[0,1])n.strokeStyle=e===0?`#83dbff`:`#ff907d`,n.lineWidth=3,n.beginPath(),n.moveTo(u((e?1:-1)*a.goalX),d(-a.goalWidth/2)),n.lineTo(u((e?1:-1)*a.goalX),d(a.goalWidth/2)),n.stroke();for(let e of t.walls){let t=gt(e),r=-t.z*e.width/2,i=t.x*e.width/2;n.strokeStyle=e.kind===`light`?`#ffe27a`:`#b1f1ff`,n.lineWidth=3,n.beginPath(),n.moveTo(u(e.pos.x-r),d(e.pos.z-i)),n.lineTo(u(e.pos.x+r),d(e.pos.z+i)),n.stroke()}for(let e of t.fighters){let r=e.id===t.controlledId;n.fillStyle=e.stun>0?`#7b8194`:r?`#c6ff8b`:e.team===0?`#85dcff`:`#ff897d`,n.beginPath(),n.arc(u(e.pos.x),d(e.pos.z),r?4:3,0,Math.PI*2),n.fill(),r&&(n.strokeStyle=`#c6ff8b77`,n.lineWidth=1,n.beginPath(),n.arc(u(e.pos.x),d(e.pos.z),7,0,Math.PI*2),n.stroke())}let f=ct(Math.hypot(t.puck.velocity.x,t.puck.velocity.z));n.globalAlpha=!f.blink||Math.floor(t.elapsed/(Ye.blinkPeriod/2))%2==0?1:.35,n.fillStyle=f.color,n.beginPath(),n.arc(u(t.puck.pos.x),d(t.puck.pos.z),f.dot,0,Math.PI*2),n.fill(),n.globalAlpha=1}};export{xo as GameView};