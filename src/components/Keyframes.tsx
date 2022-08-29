import {Keyframes } from "scrollex";

export const keyframes: Record<string, Keyframes> ={
    imageContainer:  ({section}) => ({
       [section.topAt("container-bottom")]: {
         translateY: 125,
         translateX: -250,
         opacity: 0,
         rotateX: -25,
         rotateY: -50,
         scale: 0.4
       },
       [section.topAt('container-top')]: {
        translateY: 0,
        translateX: 0,
        opacity: 1,
        rotateX: 0,
        rotateY: 0,
        scale: 1.4
       },
       [section.bottomAt("container-top")]: {
        translateY: -125,
        translateX: 250,
        opacity: 0,
        rotateX: 25,
        rotateY: 50,
        scale: 0.4
       }
    }),
    image: ({section}) => ({
        [section.topAt("container-bottom")]:{
            translateY: -62.5,
            translateX: 125,
            scale: 1.8
        },
        [section.topAt('container-top')]:{
            translateY: 0,
            translateX: 0,
            scale: 1.2,
        },
        [section.bottomAt("container-top")]:{
            translateY: 62.5,
            translateX: -125,
            scale: 2
        }
    })
}

