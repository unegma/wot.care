/**
 * todo this will need to be uuid and position to protect against hacking? or maybe just use uuids
 */
export function getRose(objectData: any, uuid: string|null): any {
  try {
    const rose = objectData.filter((r: any) => {
      return (r.uuid === uuid);
    })
    // console.log(`Rose:`, rose);
    if (rose.length > 0) {
      return rose[0];
    } else {
      return null;
    }
  } catch(err) {
    console.log(`Info: Something went wrong:`, err);
  }
}

/**
 * TODO CHECK THIS DOESN'T CROSS OVER BETWEEN ROCKETS AND ROSES (it shouldn't do because the data returned should only be of one type
 */
export function checkObjectPlacement(objectData: any, location: any): any {
  try {
    // console.log(`objectData`, objectData)
    // console.log(`Location: ${JSON.stringify(location)}`)
    let occupied;
    const occupiedPosition = objectData.filter((object: any) => {
      // console.log(`Searching Position: ${JSON.stringify(object.position)}`)
      return (object.position.x === location.x && object.position.y === location.y && object.position.z === location.z);
    })
    // console.log(`Occupied Location: ${JSON.stringify(occupiedPosition)}`)
    occupied = (occupiedPosition.length === 0) ? false : true;
    // console.log(`Occupied: ${occupied}`)
    return occupied;
  } catch(err) {
    console.log(`Info: Something went wrong:`, err);
  }
}

/**
 *
 * @param playerPosition
 * @param myPosition
 * @param scale
 * @param spaceAround
 */
export function interactivePlayerPosition(playerPosition: any, myPosition: any, scale: number, spaceAround: number): boolean {

  // console.log('here1')
  // check for if player position is 0 0 0 (if they have never moved)
  if (typeof playerPosition === "undefined") {
    return false
  }

  // create sphere around interactive
  // const sphere = 4/3 * Math.PI * Math.pow(spaceAround, 3);
  //   this.contains = function (x, y) {
  //     return this.x <= x && x <= this.x + this.width &&
  //       this.y <= y && y <= this.y + this.height;
  //   }
  // console.log('here2')
  if (isInside(playerPosition.x, playerPosition.z, myPosition.x -spaceAround, myPosition.z -spaceAround, myPosition.x +spaceAround, myPosition.z +spaceAround)) {
    // console.log('interactivePlayerPosition returning true')
    return true;
  } else {
    // console.log('interactivePlayerPosition returning false')
    return false;
  }

}


/**
 *
 */
export function withinFence(playerPosition: any, boxTopLeftX: number, boxTopLeftZ: number, boxBottomRightX: number, boxBottomRightZ: number): boolean {

  // check for if player position is 0 0 0 (if they have never moved)
  if (typeof playerPosition === "undefined") {
    return false
  }

  if (isInside(playerPosition.x, playerPosition.z, boxTopLeftX, boxTopLeftZ, boxBottomRightX, boxBottomRightZ)) {
    return true;
  } else {
    return false;
  }

}
function isInside(x: number, z: number, topLeftX: number, topLeftZ: number, bottomRightX: number, bottomRightZ: number) {
  let x1 = Math.min(topLeftX, bottomRightX);
  let x2 = Math.max(topLeftX, bottomRightX);
  let z1 = Math.min(topLeftZ, bottomRightZ);
  let z2 = Math.max(topLeftZ, bottomRightZ);
  // console.log(x1,x2,z1,z2);
  // console.log('here3')
  if ((x1 <= x ) && ( x <= x2) && (z1 <= z) && (z <= z2)) {
    // console.log(x1 + "," + x + "," + x2);
    // console.log(z1 + "," + z + "," + z2);
    // console.log('isInside returning true')
    return true;
  } else {
    // console.log('isInside returning false')
    return false;
  }
}

/**
 * https://stackoverflow.com/questions/46155/how-can-i-validate-an-email-address-in-javascript
 * @param email
 */
export function validEmail(email: string) {
    // var re = /\S+@\S+\.\S+/;
  // /^.+?@[^@]+?$/
  var re = /^\S+@\S+\.\S+$/;
    return re.test(email);
}

/**
 * getRoseSize (and position offset)
 */
export function getRoseSize(chainId: any, donationAmount: any, roseSizings: any) {
  if (chainId === 137) {
    switch (true) {
      case donationAmount <= roseSizings.amounts['137'][0]:
        return roseSizings.roseScale10;
      case donationAmount <= roseSizings.amounts['137'][1]:
        return roseSizings.roseScale100;
      case donationAmount <= roseSizings.amounts['137'][2]:
        return roseSizings.roseScale1000;
      case donationAmount > roseSizings.amounts['137'][3]:
        return roseSizings.roseScale1001;
      default:
        return roseSizings.roseScale10;
    }
  } else { // ethereum or none
    switch (true) {
      case donationAmount <= roseSizings.amounts['1'][0]:
        return roseSizings.roseScale10;
      case donationAmount <= roseSizings.amounts['1'][1]:
        return roseSizings.roseScale100;
      case donationAmount <= roseSizings.amounts['1'][2]:
        return roseSizings.roseScale1000;
      case donationAmount > roseSizings.amounts['1'][3]:
        return roseSizings.roseScale1001;
      default:
        return roseSizings.roseScale10;
    }
  }
}

export function getRocketSize(chainId: any, donationAmount: any, rocketSizings: any) {
  if (chainId === 137) {
    switch (true) {
      case donationAmount <= rocketSizings.amounts['137'][0]:
        return rocketSizings.rocketScale10;
      case donationAmount <= rocketSizings.amounts['137'][1]:
        return rocketSizings.rocketScale100;
      case donationAmount <= rocketSizings.amounts['137'][2]:
        return rocketSizings.rocketScale1000;
      case donationAmount > rocketSizings.amounts['137'][3]:
        return rocketSizings.rocketScale1001;
      default:
        return rocketSizings.rocketScale10;
    }
  } else { // ethereum or none
    switch (true) {
      case donationAmount <= rocketSizings.amounts['1'][0]:
        return rocketSizings.rocketScale10;
      case donationAmount <= rocketSizings.amounts['1'][1]:
        return rocketSizings.rocketScale100;
      case donationAmount <= rocketSizings.amounts['1'][2]:
        return rocketSizings.rocketScale1000;
      case donationAmount > rocketSizings.amounts['1'][3]:
        return rocketSizings.rocketScale1001;
      default:
        return rocketSizings.rocketScale10;
    }
  }
}

export function getSigns() {
  return [
    {
      name: 'thursdao',
      position: {
        x: -6,
        y: -0.55,
        z: -14
      },
      rotation: [0,0.3,0]
    },
    {
      name: 'mondao',
      position: {
        x: 20,
        y: -0.55,
        z: -10
      },
      rotation: [0,-0.3,0]
    },
    {
      name: 'tuesdao',
      position: {
        x: 25,
        y: -0.55,
        z: -10
      },
      rotation: [0,0.3,0]
    },
    {
      name: 'ethldn',
      position: {
        x: -18,
        y: -0.55,
        z: -20
      },
      rotation: [0,0.3,0]
    },
    {
      name: 'metafashion',
      position: {
        x: -30,
        y: -0.55,
        z: -10
      },
      rotation: [0,0.7,0]
    },
    {
      name: 'web4london',
      position: {
        x: 10,
        y: -0.55,
        z: -1
      },
      rotation: [0,-0.9,0]
    },
    {
      name: 'wibt',
      position: {
        x: 35,
        y: -0.55,
        z: -1
      },
      rotation: [0,-0.9,0]
    },
    {
      name: 'thebiggerpie',
      position: {
        x: 35,
        y: -0.55,
        z: -15
      },
      rotation: [0,-0.9,0]
    }
  ];
}

export function getDayOrNight(time: any) {
  let day = false;
  let night = true;
  let sunset = false;
  let sunrise = false;
  let sunPosition = {x: 0, y: 0, z: 0};

  console.log('the time', time)

  if (time >= 5 && time < 6) {
    day = false;
    night = true;
    sunrise = true;
    sunset = false;
    sunPosition = {x: -100, y: 0, z: -100};
  }
  if (time >= 6 && time < 7) {
    day = true;
    night = true;
    sunrise = false;
    sunset = false;
    sunPosition = {x: -80, y: 20, z: -80};
  }
  if (time >= 7 && time < 9) {
    day = true;
    night = false;
    sunrise = false;
    sunset = false;
    sunPosition = {x: -60, y: 40, z: -60};
  }
  if (time >= 9 && time < 11) {
    day = true;
    night = false;
    sunrise = false;
    sunset = false;
    sunPosition = {x: -40, y: 60, z: -40};
  }
  if (time >= 11 && time < 13) {
    day = true;
    night = false;
    sunrise = false;
    sunset = false;
    sunPosition = {x: -20, y: 80, z: -20};
  }

  // midday
  if (time >= 13 && time < 14) {
    day = true;
    night = false;
    sunrise = false;
    sunset = false;
    sunPosition = {x: 0, y: 100, z: 0};
  }

  if (time >= 14 && time < 16) {
    day = true;
    night = false;
    sunrise = false;
    sunset = false;
    sunPosition = {x: 20, y: 80, z: 20};
  }
  if (time >= 16 && time < 18) {
    day = true;
    night = false;
    sunrise = false;
    sunset = false;
    sunPosition = {x: 40, y: 60, z: 40};
  }
  if (time >= 18 && time < 20) {
    day = true;
    night = false;
    sunrise = false;
    sunset = false;
    sunPosition = {x: 60, y: 40, z: 60};
  }
  if (time >= 20 && time < 21) {
    day = true;
    night = true;
    sunrise = false;
    sunset = false;
    sunPosition = {x: 80, y: 20, z: 80};
  }
  // sunset
  if (time >= 21 && time < 22) {
    day = false;
    night = true;
    sunrise = false;
    sunset = true;
    sunPosition = {x: 100, y: 0, z: 100};
  }

  if (time >= 22 || time < 5) {
    day = false;
    night = true;
    sunrise = false;
    sunset = false;
    sunPosition = {x: -100, y: -100, z: -100}; // this shouldn't be shown because the sky will be night // todo chck
  }

  // day and night are activated during sunset and sunrise
  return {
    day: day,
    night: night,
    sunset: sunset,
    sunrise: sunrise,
    sunPosition: sunPosition
  }
}

export function getObjectArrays(data: any) {

  interface objectArrays {
    blackObjectArray: []
    redObjectArray: []
    whiteObjectArray: []
    purpleObjectArray: []
    brownObjectArray: []
    yellowObjectArray: []
    blueObjectArray: []
    orangeObjectArray: []
    pinkObjectArray: []
    greenObjectArray: []
  }

  const objectArrays: objectArrays = <any>{};

  objectArrays.blackObjectArray = data.filter((object: any) => {
    return (object.color === 'black');
  });
  objectArrays.redObjectArray = data.filter((object: any) => {
    return (object.color === 'red');
  });
  objectArrays.whiteObjectArray = data.filter((object: any) => {
    return (object.color === 'white');
  });
  objectArrays.purpleObjectArray = data.filter((object: any) => {
    return (object.color === 'purple');
  });
  objectArrays.brownObjectArray = data.filter((object: any) => {
    return (object.color === 'brown');
  });
  objectArrays.yellowObjectArray = data.filter((object: any) => {
    return (object.color === 'yellow');
  });
  objectArrays.blueObjectArray = data.filter((object: any) => {
    return (object.color === 'blue');
  });
  objectArrays.orangeObjectArray = data.filter((object: any) => {
    return (object.color === 'orange');
  });
  objectArrays.pinkObjectArray = data.filter((object: any) => {
    return (object.color === 'pink');
  });
  objectArrays.greenObjectArray = data.filter((object: any) => {
    return (object.color === 'green');
  });

  // this is what broke the rockets and roses and necessitated the adding of the checks in the render functions (because the object is {} and not undefined), it wasn't that the api was held up
  return objectArrays;
}
