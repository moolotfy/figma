import React, { useState } from "react";
import { BiUser } from "react-icons/bi";
import { RiRepeatLine } from "react-icons/ri";
import { AiOutlineHeart } from "react-icons/ai";

const CarCardMenuColored = ({ car: { id, name, recomended, views, h }, style }) => {
  const [isFav, setIsFav] = useState(false);
  return (
    <div className={`p-2 w-full sm:w-full md:w-1/2 xl:w-1/3`}>
      <div className={`p-6 rounded-2xl overflow-hidden `} style={style}>
        <div className="text-xl font-bold flex justify-start content-center align-center mb-2 ">
          <svg className="mx-1" width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M8.5 6H6.7C8.2 4.7 10 4 12 4C12.3 4 12.6 4 12.9 4.1C13.4 4.2 13.9 3.8 14 3.2C14.1 2.7 13.7 2.2 13.1 2.1C12.7 2 12.4 2 12 2C9.6 2 7.3 2.9 5.5 4.4V3C5.5 2.4 5.1 2 4.5 2C3.9 2 3.5 2.4 3.5 3V7C3.5 7.6 3.9 8 4.5 8H8.5C9.1 8 9.5 7.6 9.5 7C9.5 6.4 9.1 6 8.5 6ZM7 14.5C6.4 14.5 6 14.9 6 15.5V17.3C4.7 15.8 4 14 4 12C4 11.7 4 11.4 4.1 11.1C4.2 10.6 3.8 10.1 3.2 10C2.7 9.9 2.2 10.3 2.1 10.9C2 11.3 2 11.6 2 12C2 14.4 2.9 16.7 4.4 18.5H3C2.4 18.5 2 18.9 2 19.5C2 20.1 2.4 20.5 3 20.5H7C7.3 20.5 7.6 20.3 7.8 20.1C7.8 20 7.9 19.9 7.9 19.8C7.9 19.7 7.9 19.7 7.9 19.6V19.5V15.5C8 14.9 7.6 14.5 7 14.5ZM21 5.5C21.6 5.5 22 5.1 22 4.5C22 3.9 21.6 3.5 21 3.5H17C16.9 3.5 16.9 3.5 16.8 3.5C16.7 3.5 16.6 3.6 16.5 3.6C16.4 3.7 16.3 3.7 16.3 3.8C16.3 3.9 16.2 4 16.2 4C16.2 4.1 16.2 4.1 16.2 4.2V4.3V8.3C16.2 8.9 16.6 9.3 17.2 9.3C17.8 9.3 18.2 8.9 18.2 8.3V6.7C19.5 8.1 20.2 10 20.2 12C20.2 12.3 20.2 12.6 20.1 12.9C20 13.4 20.4 13.9 21 14H21.1C21.6 14 22 13.6 22.1 13.1C22.1 12.7 22.2 12.4 22.2 12C22.2 9.6 21.3 7.3 19.8 5.5H21ZM20.3 16.5C20.2 16.4 20.1 16.3 20 16.2C19.9 16.1 19.8 16.1 19.7 16.1H19.6H19.5H15.5C14.9 16.1 14.5 16.5 14.5 17.1C14.5 17.7 14.9 18.1 15.5 18.1H17.3C15.9 19.4 14 20.1 12 20.1C11.7 20.1 11.4 20.1 11.1 20C10.6 19.9 10.1 20.3 10 20.9C9.9 21.5 10.3 21.9 10.9 22C11.3 22 11.6 22.1 12 22.1C14.4 22.1 16.7 21.2 18.5 19.7V21C18.5 21.6 18.9 22 19.5 22C20.1 22 20.5 21.6 20.5 21V17C20.5 16.8 20.4 16.6 20.3 16.5Z"
              fill="#72767C"
            />
          </svg>
          {recomended}% Recommend
        </div>

        <img className="w-full" src={`./cars/${id}.svg`} alt={`cars id ${id}`} style={{ maxHeight: "12em" }} />
        <div className="text-xl font-bold flex justify-between ">{name}</div>
        <div className="w-full mt-4">
          <div className="grid grid-cols-4 gap-4 ">
            <div className=" col-span-3 text-gray-500 text-base flex content-center items-center">
              <svg className="mr-5" width={18} height={18} viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M3.58317 13.5837H2.33317V4.41699H8.83317L8.1665 5.08366C7.99984 5.25033 7.9165 5.41699 7.9165 5.66699C7.9165 6.16699 8.24984 6.50033 8.74984 6.50033C8.99984 6.50033 9.1665 6.41699 9.33317 6.25033L11.4165 4.16699C11.7498 3.83366 11.7498 3.33366 11.4165 3.00033L9.33317 0.916992C8.99984 0.583659 8.49984 0.583659 8.1665 0.916992C7.83317 1.25033 7.83317 1.75033 8.1665 2.08366L8.83317 2.75033H1.49984C0.999837 2.75033 0.666504 3.08366 0.666504 3.58366V14.417C0.666504 14.917 0.999837 15.2503 1.49984 15.2503H3.58317C4.08317 15.2503 4.4165 14.917 4.4165 14.417C4.4165 13.917 4.08317 13.5837 3.58317 13.5837ZM16.4998 2.75033H14.4165C13.9165 2.75033 13.5832 3.08366 13.5832 3.58366C13.5832 4.08366 13.9165 4.41699 14.4165 4.41699H15.6665V13.5837H8.6665L9.33317 12.917C9.6665 12.5837 9.6665 12.0837 9.33317 11.7503C8.99984 11.417 8.49984 11.417 8.1665 11.7503L6.08317 13.8337C5.74984 14.167 5.74984 14.667 6.08317 15.0003L8.1665 17.0837C8.33317 17.2503 8.49984 17.3337 8.74984 17.3337C8.99984 17.3337 9.1665 17.2503 9.33317 17.0837C9.6665 16.7503 9.6665 16.2503 9.33317 15.917L8.6665 15.2503H16.4998C16.9998 15.2503 17.3332 14.917 17.3332 14.417V3.58366C17.3332 3.08366 16.9998 2.75033 16.4998 2.75033Z"
                  fill="#72767C"
                />
              </svg>
              <span className="mr-5">{views}K</span>
              <svg className="mr-5" width={16} height={16} style={{ minHight: "16px" }} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M9.33736 7.33687H8.6707V6.67021C8.6707 6.4934 8.60046 6.32383 8.47543 6.1988C8.35041 6.07378 8.18084 6.00354 8.00403 6.00354C7.82722 6.00354 7.65765 6.07378 7.53262 6.1988C7.4076 6.32383 7.33736 6.4934 7.33736 6.67021V7.33687H6.6707C6.49388 7.33687 6.32432 7.40711 6.19929 7.53214C6.07427 7.65716 6.00403 7.82673 6.00403 8.00354C6.00403 8.18035 6.07427 8.34992 6.19929 8.47494C6.32432 8.59997 6.49388 8.67021 6.6707 8.67021H7.33736V9.33687C7.33736 9.51368 7.4076 9.68325 7.53262 9.80828C7.65765 9.9333 7.82722 10.0035 8.00403 10.0035C8.18084 10.0035 8.35041 9.9333 8.47543 9.80828C8.60046 9.68325 8.6707 9.51368 8.6707 9.33687V8.67021H9.33736C9.51417 8.67021 9.68374 8.59997 9.80877 8.47494C9.93379 8.34992 10.004 8.18035 10.004 8.00354C10.004 7.82673 9.93379 7.65716 9.80877 7.53214C9.68374 7.40711 9.51417 7.33687 9.33736 7.33687ZM14.4774 7.53021L12.9107 6.00354V3.76354C12.9107 3.58673 12.8405 3.41716 12.7154 3.29214C12.5904 3.16711 12.4208 3.09687 12.244 3.09687H10.0374L8.47736 1.53021C8.41539 1.46772 8.34165 1.41812 8.26041 1.38428C8.17917 1.35043 8.09204 1.33301 8.00403 1.33301C7.91602 1.33301 7.82888 1.35043 7.74764 1.38428C7.6664 1.41812 7.59267 1.46772 7.53069 1.53021L6.00403 3.09687H3.76403C3.58722 3.09687 3.41765 3.16711 3.29262 3.29214C3.1676 3.41716 3.09736 3.58673 3.09736 3.76354V6.00354L1.53069 7.53021C1.46821 7.59218 1.41861 7.66592 1.38477 7.74716C1.35092 7.8284 1.3335 7.91553 1.3335 8.00354C1.3335 8.09155 1.35092 8.17869 1.38477 8.25992C1.41861 8.34116 1.46821 8.4149 1.53069 8.47687L3.09736 10.0369V12.2435C3.09736 12.4204 3.1676 12.5899 3.29262 12.7149C3.41765 12.84 3.58722 12.9102 3.76403 12.9102H6.00403L7.56403 14.4769C7.626 14.5394 7.69974 14.589 7.78098 14.6228C7.86222 14.6566 7.94935 14.6741 8.03736 14.6741C8.12537 14.6741 8.21251 14.6566 8.29375 14.6228C8.37499 14.589 8.44872 14.5394 8.5107 14.4769L10.0707 12.9102H12.2774C12.4542 12.9102 12.6237 12.84 12.7488 12.7149C12.8738 12.5899 12.944 12.4204 12.944 12.2435V10.0369L14.5107 8.47687C14.571 8.41272 14.6181 8.33725 14.6491 8.25482C14.6801 8.17238 14.6945 8.08461 14.6914 7.99659C14.6883 7.90857 14.6678 7.82203 14.6311 7.74198C14.5943 7.66193 14.5421 7.58995 14.4774 7.53021ZM11.7774 9.29021C11.7144 9.35195 11.6643 9.42558 11.6299 9.50683C11.5956 9.58808 11.5777 9.67534 11.5774 9.76354V11.5769H9.76403C9.67582 11.5772 9.58857 11.5951 9.50732 11.6294C9.42607 11.6638 9.35244 11.7139 9.2907 11.7769L8.00403 13.0635L6.71736 11.7769C6.65562 11.7139 6.58199 11.6638 6.50074 11.6294C6.41949 11.5951 6.33223 11.5772 6.24403 11.5769H4.4307V9.76354C4.43033 9.67534 4.41246 9.58808 4.37813 9.50683C4.3438 9.42558 4.29369 9.35195 4.2307 9.29021L2.94403 8.00354L4.2307 6.71687C4.29369 6.65513 4.3438 6.5815 4.37813 6.50025C4.41246 6.419 4.43033 6.33174 4.4307 6.24354V4.43021H6.24403C6.33223 4.42984 6.41949 4.41197 6.50074 4.37764C6.58199 4.34331 6.65562 4.2932 6.71736 4.23021L8.00403 2.94354L9.2907 4.23021C9.35244 4.2932 9.42607 4.34331 9.50732 4.37764C9.58857 4.41197 9.67582 4.42984 9.76403 4.43021H11.5774V6.24354C11.5777 6.33174 11.5956 6.419 11.6299 6.50025C11.6643 6.5815 11.7144 6.65513 11.7774 6.71687L13.064 8.00354L11.7774 9.29021Z"
                  fill="#72767C"
                />
              </svg>
              <svg className="mr-5" width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M13.2252 6.38708C13.1699 6.27741 13.0853 6.18518 12.9809 6.12063C12.8764 6.05607 12.7561 6.0217 12.6333 6.02133H9.3083V2.03132C9.31544 1.88547 9.27438 1.74133 9.19145 1.62115C9.10852 1.50096 8.98834 1.41141 8.84945 1.36632C8.71594 1.32239 8.57194 1.3219 8.43812 1.36491C8.30431 1.40792 8.18757 1.49222 8.10465 1.60572L2.78464 8.92073C2.71799 9.01707 2.67796 9.1293 2.66862 9.24608C2.65928 9.36285 2.68095 9.48002 2.73144 9.58573C2.77794 9.70659 2.85872 9.81125 2.96386 9.88686C3.06899 9.96246 3.19392 10.0057 3.3233 10.0113H6.6483V14.0013C6.6484 14.1416 6.69283 14.2782 6.77525 14.3916C6.85766 14.5051 6.97383 14.5896 7.10715 14.6331C7.17396 14.6538 7.24336 14.665 7.3133 14.6663C7.41823 14.6666 7.52173 14.6421 7.61535 14.5947C7.70897 14.5473 7.79004 14.4784 7.85195 14.3937L13.172 7.07868C13.2436 6.97946 13.2865 6.86239 13.2959 6.74036C13.3053 6.61834 13.2808 6.49609 13.2252 6.38708ZM7.9783 11.9531V9.34633C7.9783 9.16996 7.90824 9.00082 7.78353 8.8761C7.65882 8.75139 7.48967 8.68133 7.3133 8.68133H4.6533L7.9783 4.07952V6.68633C7.9783 6.8627 8.04836 7.03184 8.17308 7.15655C8.29779 7.28127 8.46693 7.35133 8.6433 7.35133H11.3033L7.9783 11.9531Z"
                  fill="#72767C"
                />
              </svg>
            </div>
            <div className="text-gray-500 text-base font-bold text-end">
              ${h}
              <span className="text-gray-400 font-normal">/h</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarCardMenuColored;