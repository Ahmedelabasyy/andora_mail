import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function User() {
  const { id } = useParams();
  console.log(id);
  const [userData, setUserData] = useState({});
  const [showPass, setShowPass] = useState(false);
  console.log(userData);
  console.log(showPass);
  const getUserData = async () => {
    const res = await axios.get(
      `https://2bb76d45-8288-43d7-bb6d-7b8740651850.mock.pstmn.io/user?id=${id}`
    );
    const data = res.data;
    setUserData(data);
  };

  useEffect(() => {
    getUserData();
  }, []);

  const handleDisplayingPass = () => {
    console.log("trigger");
    setShowPass((prev) => !prev);
  };

  return (
    <section className="w-full h-screen bg-[#185860]">
      <div className="w-full h-full flex justify-center items-center ">
        <div className="w-[411px] flex flex-col items-center gap-10">
          <div className="text-center ali">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="229"
              height="183"
              viewBox="0 0 229 183"
              fill="none"
            >
              <g clip-path="url(#clip0_2185_19639)">
                <path
                  d="M174.04 61.0304V61.2281H139.464C134.969 61.2281 131 63.3392 128.422 66.6406C126.223 69.4642 125.143 73.1262 125.626 76.964C126.484 83.7536 132.051 88.8057 138.902 89.0706C146.896 89.3791 153.414 83.063 153.414 75.1548V73.7343C153.414 68.9951 157.263 65.155 162.008 65.155V92.5132C162.008 97.1417 158.249 100.895 153.612 100.895H153.414V92.8434C151.3 94.4941 148.919 95.8125 146.274 96.6052C143.028 97.587 139.636 97.9844 135.878 97.3633C125.046 95.5714 116.935 86.1515 116.917 75.1895C116.913 72.1401 117.507 69.2904 118.636 66.6385C119.43 64.6576 120.487 62.8766 121.81 61.2259C125.909 56.011 132.323 52.6444 139.529 52.6444H165.642C170.278 52.6444 174.038 56.3976 174.038 61.0261L174.04 61.0304Z"
                  fill="#D79379"
                />
                <path
                  d="M173.727 39.6473V39.4496H139.342C134.871 39.4496 130.926 37.3493 128.361 34.0675C126.173 31.2591 125.1 27.6167 125.583 23.8005C126.436 17.0479 131.973 12.0241 138.785 11.7591C146.735 11.4528 153.216 17.7342 153.216 25.5989V27.002C153.216 31.7152 157.043 35.5357 161.765 35.5357V8.33605C161.762 3.73146 158.022 0 153.412 0H153.214V8.00808C151.11 6.36607 148.743 5.05419 146.113 4.26576C142.884 3.28837 139.512 2.89307 135.774 3.51209C125.002 5.29528 116.935 14.6609 116.917 25.562C116.913 28.5941 117.505 31.4307 118.627 34.0653C119.417 36.0353 120.468 37.8076 121.784 39.4475C125.861 44.632 132.238 47.9812 139.405 47.9812H165.439C170.041 48.0463 173.724 44.3062 173.724 39.6451L173.727 39.6473Z"
                  fill="#D79379"
                />
                <path
                  d="M55.0231 61.0304V61.2281H89.7167C94.2269 61.2281 98.2084 63.3392 100.795 66.6406C103.004 69.4642 104.085 73.1262 103.6 76.964C102.738 83.7536 97.1532 88.8057 90.2802 89.0706C82.2584 89.3791 75.7183 83.063 75.7183 75.1548V73.7343C75.7183 68.9951 71.8565 65.155 67.0939 65.155V92.5132C67.0939 97.1417 70.8665 100.895 75.5203 100.895H75.7183V92.8434C77.8418 94.4941 80.2285 95.8125 82.8829 96.6052C86.1399 97.587 89.5448 97.9844 93.3131 97.3633C104.183 95.5714 112.322 86.1515 112.337 75.1917C112.342 72.1423 111.746 69.2926 110.612 66.6406C109.816 64.6598 108.754 62.8788 107.427 61.2281C103.313 56.0131 96.8791 52.6466 89.6471 52.6466H63.4452C58.7914 52.6466 55.0188 56.3998 55.0188 61.0282L55.0231 61.0304Z"
                  fill="#D79379"
                />
                <path
                  d="M55.5322 39.6473V39.4496H89.9168C94.3879 39.4496 98.3324 37.3493 100.898 34.0675C103.086 31.2591 104.159 27.6167 103.676 23.8005C102.823 17.0479 97.2859 12.0241 90.4738 11.7591C82.5238 11.4528 76.0424 17.7342 76.0424 25.5989V27.002C76.0424 31.7152 72.2154 35.5357 67.4942 35.5357V8.33605C67.4942 3.73146 71.232 0 75.8445 0H76.0424V8.00808C78.1463 6.36607 80.5135 5.05419 83.1439 4.26576C86.3726 3.28837 89.7449 2.89307 93.4828 3.51209C104.255 5.29528 112.322 14.6609 112.339 25.562C112.344 28.5941 111.752 31.4307 110.629 34.0653C109.84 36.0353 108.789 37.8076 107.472 39.4475C103.395 44.632 97.0183 47.9812 89.8515 47.9812H63.8173C59.2157 48.0463 55.5322 44.3062 55.5322 39.6451V39.6473Z"
                  fill="#D79379"
                />
                <path
                  d="M27.479 155.553H23.4866L20.186 147.84H7.13626L4.06636 155.553H0L11.8967 128.221H15.6584L27.479 155.553ZM19.0351 145.066L14.1985 133.429C14.1224 133.023 13.8918 132.482 13.7373 131.602H13.6612C13.585 132.347 13.3544 132.955 13.1999 133.429L8.36335 145.066H19.0329H19.0351Z"
                  fill="#D79379"
                />
                <path
                  d="M59.5595 155.62H55.1733L39.2472 133.785C38.786 133.175 38.4771 132.699 38.2464 132.022H38.1703C38.2464 132.632 38.4009 133.852 38.4009 135.818V155.62H34.7849V128.223H39.5562L55.1755 149.651C55.8673 150.533 56.2524 151.144 56.4069 151.482H56.4831C56.4069 150.737 56.2524 149.313 56.2524 147.482V128.155H59.8684L59.5617 155.62H59.5595Z"
                  fill="#D79379"
                />
                <path
                  d="M68.4407 155.594V128.181H76.9868C87.9196 128.181 93.3849 132.66 93.3849 141.55C93.3849 145.757 91.8446 149.15 88.8421 151.661C85.8397 154.171 81.7602 155.461 76.6778 155.461L68.4407 155.596V155.594ZM72.1372 131.098V152.677H76.7562C80.8356 152.677 83.9164 151.728 86.3031 149.76C88.5353 147.792 89.7668 145.077 89.7668 141.55C89.7668 134.561 85.5329 131.033 77.0629 131.033L72.135 131.101L72.1372 131.098Z"
                  fill="#D79379"
                />
                <path
                  d="M114.428 155.029C110.327 155.029 107.018 153.824 104.501 151.478C102.055 149.132 100.76 146.026 100.76 142.158C100.76 138.038 101.983 134.804 104.572 132.33C107.018 129.858 110.542 128.716 114.931 128.716C118.96 128.716 122.195 129.921 124.643 132.267C127.089 134.613 128.239 137.719 128.239 141.587C128.239 145.772 127.017 149.069 124.499 151.541C121.982 153.887 118.673 155.029 114.428 155.029ZM114.715 131.381C111.693 131.381 109.248 132.395 107.305 134.298C105.434 136.2 104.427 138.735 104.427 141.969C104.427 145.203 105.362 147.612 107.231 149.515C109.102 151.417 111.476 152.432 114.496 152.432C117.733 152.432 120.179 151.543 122.05 149.706C123.921 147.866 124.854 145.331 124.854 142.034C124.854 138.737 123.919 136.011 122.193 134.172C120.322 132.269 117.805 131.383 114.711 131.383L114.715 131.381Z"
                  fill="#D79379"
                />
                <path
                  d="M159.102 155.477H154.848L149.683 147.844C149.228 147.175 148.848 146.506 148.241 146.037C147.786 145.568 147.405 145.166 146.948 144.764C146.493 144.497 145.96 144.163 145.43 144.096C144.899 144.028 144.366 143.896 143.606 143.896H140.643V155.344H137.073V128.299H146.263C147.555 128.299 148.845 128.499 149.985 128.768C151.126 129.035 152.037 129.504 152.949 130.106C153.784 130.707 154.467 131.444 154.924 132.315C155.379 133.186 155.607 134.256 155.607 135.462C155.607 136.4 155.531 137.269 155.153 138.073C154.848 138.809 154.393 139.545 153.71 140.214C153.179 140.816 152.418 141.352 151.508 141.754C150.673 142.156 149.761 142.49 148.697 142.692V142.76C149.228 142.96 149.685 143.162 149.99 143.429C150.294 143.696 150.749 144.03 151.054 144.3C151.358 144.702 151.737 145.036 152.041 145.438C152.346 145.907 152.801 146.376 153.105 146.978L159.106 155.481L159.102 155.477ZM140.643 131.309V141.15H145.58C146.415 141.15 147.327 141.083 148.086 140.749C148.845 140.481 149.529 140.147 150.062 139.678C150.592 139.209 151.049 138.739 151.354 138.07C151.659 137.401 151.809 136.733 151.809 135.862C151.809 134.389 151.278 133.251 150.138 132.515C148.998 131.778 147.555 131.242 145.58 131.242H140.643V131.309Z"
                  fill="#D79379"
                />
                <path
                  d="M192.803 155.62H188.506L183.287 147.907C182.825 147.232 182.442 146.554 181.829 146.081C181.368 145.607 180.985 145.201 180.523 144.795C180.062 144.523 179.525 144.187 178.987 144.119C178.45 144.052 177.913 143.917 177.145 143.917H174.151V155.485H170.544V128.155H179.829C181.135 128.155 182.438 128.357 183.591 128.629C184.742 128.9 185.662 129.374 186.585 129.982C187.429 130.59 188.121 131.335 188.58 132.215C189.041 133.094 189.27 134.176 189.27 135.395C189.27 136.342 189.194 137.221 188.808 138.034C188.502 138.779 188.04 139.521 187.351 140.199C186.813 140.807 186.045 141.348 185.125 141.754C184.281 142.16 183.361 142.499 182.286 142.701V142.768C182.823 142.97 183.284 143.175 183.591 143.444C183.898 143.715 184.359 144.052 184.666 144.324C184.973 144.595 185.356 145.069 185.665 145.473C185.971 145.946 186.433 146.42 186.739 147.028L192.803 155.618V155.62ZM174.153 131.2V141.144H179.142C179.986 141.144 180.906 141.076 181.674 140.738C182.442 140.466 183.132 140.129 183.67 139.656C184.207 139.183 184.668 138.709 184.975 138.034C185.282 137.358 185.436 136.68 185.436 135.801C185.436 134.313 184.899 133.162 183.748 132.419C182.673 131.674 181.139 131.133 179.142 131.133H174.153V131.2Z"
                  fill="#D79379"
                />
                <path
                  d="M229 155.477H224.955L221.672 147.807H208.62L205.568 155.477H201.523L213.355 128.297H217.095L229.002 155.477H229ZM220.604 145.049L215.796 133.477C215.72 133.073 215.491 132.534 215.337 131.661H215.26C215.184 132.402 214.956 133.008 214.801 133.477L209.993 145.049H220.604Z"
                  fill="#D79379"
                />
                <path
                  d="M17.8037 165.086L10.3193 182.898H7.67147L0.417725 165.086H3.06554L8.7071 179.234C8.82241 179.64 9.05304 180.252 9.05304 180.863C9.05304 180.457 9.16835 179.844 9.51428 179.234L15.1558 165.086H17.8037Z"
                  fill="#D79379"
                />
                <path
                  d="M47.6258 165.086V166.836H45.6459V181.147H47.6258V182.898H41.2206V181.147H43.2005V166.836H41.2206V165.086H47.6258Z"
                  fill="#D79379"
                />
                <path
                  d="M84.6256 182.898H74.1475V165.086H76.4493V181.065H84.5103L84.6256 182.898Z"
                  fill="#D79379"
                />
                <path
                  d="M119.739 182.898H109.261V165.086H111.563V181.065H119.624L119.739 182.898Z"
                  fill="#D79379"
                />
                <path
                  d="M158.873 183H156.195L153.982 177.955H145.247L143.267 183H140.589L148.508 164.981H151.071L158.875 183H158.873ZM153.166 175.998L150.022 168.276C149.905 167.968 149.905 167.659 149.672 167.145C149.555 167.557 149.555 168.072 149.322 168.276L146.178 175.998H153.166Z"
                  fill="#D79379"
                />
                <path
                  d="M192.631 181.521C190.738 182.505 188.513 182.898 186.063 182.898C183.391 182.898 181.052 182.012 179.383 180.537C177.602 178.962 176.823 176.897 176.823 174.141C176.823 171.384 177.826 169.319 179.716 167.646C181.609 165.974 184.059 165.088 186.953 165.088C189.067 165.088 190.738 165.383 192.185 165.974V168.237C190.627 167.351 188.624 166.958 186.62 166.958C184.394 166.958 182.612 167.646 181.165 168.926C179.718 170.205 179.051 172.075 179.051 174.141C179.051 176.206 179.718 178.076 180.943 179.258C182.168 180.537 183.95 181.128 186.176 181.128C187.734 181.128 189.07 180.832 190.184 180.242V175.42H185.841V173.55H192.409L192.631 181.521Z"
                  fill="#D79379"
                />
                <path
                  d="M229 182.898H215.297V164.981H228.41V166.927H218.246V172.968H227.527V174.914H218.246V181.26H228.854V183H229.002V182.898H229Z"
                  fill="#D79379"
                />
              </g>
              <defs>
                <clipPath id="clip0_2185_19639">
                  <rect width="229" height="183" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>

          <form className="text-left flex flex-col w-full">
            <label className="text-[#D79479] text-left">Email</label>
            <input
              type="text"
              disabled
              value={userData[0]?.email}
              className="border-none px-2 py-4 w-full rounded-md disabled:bg-slate-50 my-2"
            />
            <label className="text-[#D79479] text-left mb-2">Password</label>
            <div
              onClick={handleDisplayingPass}
              className="bg-white flex items-center rounded-md pr-3"
            >
              <input
                type={showPass ? "text" : "password"}
                disabled
                value={userData[0]?.password}
                className="border-none px-2 py-3 text-lg  w-full rounded-md focus:outline-none disabled:bg-slate-50"
              />
              <div className="cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  viewBox="0 0 18 18"
                  fill="none"
                >
                  <path
                    d="M9.00088 2.99835C6.78163 2.99835 4.91188 4.08885 3.37587 5.88134C2.85012 6.49409 2.39037 7.14885 2.01612 7.80285C1.79037 8.19885 1.65237 8.50484 1.57137 8.69384C1.49037 8.88209 1.49037 9.11459 1.57137 9.30284C1.65237 9.49184 1.79037 9.79783 2.01612 10.1938C2.39037 10.8478 2.85012 11.5026 3.37587 12.1153C4.91188 13.9078 6.78163 14.9983 9.00088 14.9983C11.2201 14.9983 13.0899 13.9078 14.6259 12.1153C15.1509 11.5026 15.6114 10.8478 15.9849 10.1938C16.2114 9.79783 16.3494 9.49184 16.4304 9.30284C16.5114 9.11459 16.5114 8.88209 16.4304 8.69384C16.3494 8.50484 16.2114 8.19885 15.9849 7.80285C15.6114 7.14885 15.1509 6.49409 14.6259 5.88134C13.0899 4.08885 11.2201 2.99835 9.00088 2.99835ZM9.00088 4.49835C10.7191 4.49835 12.2244 5.3766 13.5009 6.86535C13.9599 7.40085 14.3431 7.97685 14.6724 8.55285C14.7886 8.7561 14.8389 8.86109 14.9071 8.99834C14.8389 9.13559 14.7886 9.24059 14.6724 9.44384C14.3431 10.0198 13.9599 10.5958 13.5009 11.1313C12.2244 12.6201 10.7191 13.4983 9.00088 13.4983C7.28263 13.4983 5.77738 12.6201 4.50088 11.1313C4.04188 10.5958 3.65862 10.0198 3.32862 9.44384C3.21312 9.24059 3.16287 9.13559 3.09462 8.99834C3.16287 8.86109 3.21312 8.7561 3.32862 8.55285C3.65862 7.97685 4.04188 7.40085 4.50088 6.86535C5.77738 5.3766 7.28263 4.49835 9.00088 4.49835ZM9.00088 5.99835C7.34413 5.99835 6.00088 7.34159 6.00088 8.99834C6.00088 10.6551 7.34413 11.9983 9.00088 11.9983C10.6576 11.9983 12.0009 10.6551 12.0009 8.99834C12.0009 8.58434 11.6649 8.24834 11.2509 8.24834C10.8369 8.24834 10.5009 8.58434 10.5009 8.99834C10.5009 9.82709 9.82888 10.4983 9.00088 10.4983C8.17213 10.4983 7.50088 9.82709 7.50088 8.99834C7.50088 8.16959 8.17213 7.49834 9.00088 7.49834C9.18463 7.49834 9.37287 7.52909 9.54012 7.59209C9.92712 7.73834 10.3546 7.53435 10.5009 7.1466C10.6471 6.7596 10.4431 6.3321 10.0554 6.18585C9.71938 6.0591 9.36613 5.99835 9.00088 5.99835Z"
                    fill="#185860"
                  />
                </svg>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}