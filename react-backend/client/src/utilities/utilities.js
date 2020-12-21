/**
 * @function formatSizeUnits Converts file size from bytes to KB, MB and GB depending on amount of bytes
 * @param {number} bytes Number of bytes produced from file
 * 
 */

export function formatSizeUnits(bytes){
    if      (bytes >= 1073741824) { bytes = (bytes / 1073741824).toFixed(2) + " GB"; }
    else if (bytes >= 1048576)    { bytes = (bytes / 1048576).toFixed(2) + " MB"; }
    else if (bytes >= 1024)       { bytes = (bytes / 1024).toFixed(2) + " KB"; }
    else if (bytes > 1)           { bytes = bytes + " bytes"; }
    else if (bytes === 1)          { bytes = bytes + " byte"; }
    else                          { bytes = "0 bytes"; }
    return bytes;
  }

  /**
   * 
   * @function scale Re-maps a number from one range to another
   * @param {number} num Value that will change dynamically, the incoming value to be converted.
   * @param {*} in_min lower bound of the value's current range
   * @param {*} in_max upper bound of the value's current range
   * @param {*} out_min lower bound of the value's target range
   * @param {*} out_max upper bound of the value's target range
   */
  export function scale (num, in_min, in_max, out_min, out_max) {
    return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
  }