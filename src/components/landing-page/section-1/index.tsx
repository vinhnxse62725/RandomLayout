import React from "react";
import styles from "./section1.module.scss";
const Section1: React.FC = () => {
  return (
    <>
      <section className="py-12 px-4">
        <div className="flex flex-wrap -mx-4">
          <div className="w-full flex items-center lg:w-3/4 px-4 mb-8 lg:mb-0 relative">
            <div className="w-full overflow-hidden relative z-10">
              <img
                className="rounded shadow animated slideInLeft"
                src="https://images.unsplash.com/photo-1449247709967-d4461a6a6103?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1"
                alt=""
                style={{
                  animationDelay: "20ms",
                  animationDuration: "2000ms",
                }}
              />
              <div
                className={`${styles.title} ${styles.title1} ${styles.title_inner}`}
              >
                <div
                  className={`animated slideInUp`}
                  style={{
                    animationDelay: "1000ms",
                    animationDuration: "2000ms",
                  }}
                >
                  Home
                </div>
              </div>
              <div
                className={`${styles.title} ${styles.title2} ${styles.title_inner}`}
              >
                <div
                  className={`animated slideInUp`}
                  style={{
                    animationDelay: "1000ms",
                    animationDuration: "2000ms",
                  }}
                >
                  Furniture
                </div>
              </div>
            </div>
            <div
              className="w-full absolute top-0"
              style={{ left: "-25px", height: "100%" }}
            >
              <div className={`${styles.title} ${styles.title1}`}>
                <div
                  className={`animated slideInUp`}
                  style={{
                    animationDelay: "1000ms",
                    animationDuration: "2000ms",
                  }}
                >
                  Home
                </div>
              </div>
              <div className={`${styles.title} ${styles.title2}`}>
                <div
                  className={`animated slideInUp`}
                  style={{
                    animationDelay: "1000ms",
                    animationDuration: "2000ms",
                  }}
                >
                  Furniture
                </div>
              </div>
            </div>
          </div>

          <div className="lg:w-1/5 px-4">
            {/* <div className={styles.sub_title}>
              <div
                className={`animated slideInUp`}
                style={{
                  animationDelay: "1000ms",
                  animationDuration: "2000ms",
                }}
              >
                We create your space better base on your idea!
              </div>
            </div> */}
          </div>
          <div className="hidden lg:w-1/5"></div>
        </div>
      </section>
    </>
  );
};
export default Section1;
