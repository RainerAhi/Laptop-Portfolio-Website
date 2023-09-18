import { Text, Html, ContactShadows, PresentationControls, Float, useGLTF, OrbitControls, Environment } from '@react-three/drei';

export const Experience = () => {

  const computer = useGLTF('./computermodel.gltf')

  return (
    <>
    

      <color args={ [ '#FF5F6D' ] } attach="background" />

      <PresentationControls
        global
        rotation={ [ 0.13, 0.1, 0 ] }
        polar={ [ - 0.4, 0.2 ] }
        azimuth={ [ - 1, 0.75 ] }
        config={ { mass: 2, tension: 400 } }
        snap={ { mass: 4, tension: 400 } }
      >
      <Float rotationIntensity={ 0.4 } >  
        <rectAreaLight
          width={ 2.5 }
          height={ 1.65 }
          intensity={ 65 }
          color={ '#FFC371' }
          rotation={ [ - 0.1, Math.PI, 0 ] }
          position={ [ 0, 0.55, - 1.15 ] }
        />

        <primitive
            object={ computer.scene }
            position-y={ - 1.2 }
            // rotation-x={ 0.13 }
        >
            <Html
                transform
                wrapperClass="htmlScreen"
                distanceFactor={ 1.17 }
                position={ [ 0, 1.56, - 1.4 ] }
                rotation-x={ - 0.256 }
            >
                <iframe src="https://rainer-ahi-html-site.vercel.app/" />
            </Html>
        </primitive>

        <Text
            font="./bangers-v20-latin-regular.woff"
            fontSize={ 0.95 }
            position={ [ 2, 0.75, 0.75 ] }
            rotation-y={ - 1.25 }
            maxWidth={ 2 }
            letterSpacing={ 0.035 }
        >
            PORTFOLIO WEBSITE
        </Text>
      </Float>
      </PresentationControls>

      <ContactShadows
        position-y={ - 1.4 }
        opacity={ 0.4 }
        scale={ 5 }
        blur={ 2.4 }
      />

      <directionalLight scale={ 10 } />

      <ambientLight />

    </>
  );
};
