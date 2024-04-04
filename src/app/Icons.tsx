import { twMerge } from 'tailwind-merge';

export const WhatsappIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="26"
    height="25"
    viewBox="0 0 26 25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M16.966 2.042a10.1 10.1 0 0 1 3.32 2.232 10.18 10.18 0 0 1 2.996 7.243c0 5.642-4.598 10.24-10.24 10.24-1.716 0-3.4-.433-4.898-1.25l-5.425 1.426 1.446-5.311a10.27 10.27 0 0 1-1.364-5.115c0-5.642 4.599-10.24 10.24-10.24a10.1 10.1 0 0 1 3.925.775M8.702 18.833a8.54 8.54 0 0 0 4.34 1.189c4.691 0 8.514-3.813 8.494-8.505a8.46 8.46 0 0 0-2.49-6.024 8.43 8.43 0 0 0-6.015-2.5c-4.69 0-8.514 3.823-8.514 8.514a8.54 8.54 0 0 0 1.302 4.526l.206.32-.857 3.142 3.224-.848z"
      fill="#fff"
    />
    <path
      d="M17.712 13.656c-.258-.124-1.519-.744-1.746-.837-.238-.082-.403-.124-.579.124-.175.259-.66.837-.806 1.003-.144.175-.3.196-.558.062-.258-.124-1.085-.403-2.056-1.271-.765-.682-1.27-1.52-1.426-1.778-.145-.258-.02-.392.114-.527.113-.113.258-.3.382-.444s.176-.258.258-.424c.083-.175.042-.32-.02-.444a85 85 0 0 1-.786-1.901c-.206-.496-.423-.434-.578-.445h-.496a.93.93 0 0 0-.682.32c-.228.259-.889.879-.889 2.14 0 1.254.91 2.467 1.042 2.642l.002.003c.124.176 1.808 2.759 4.37 3.865.61.268 1.086.423 1.458.537.61.196 1.167.165 1.612.103.496-.072 1.519-.62 1.725-1.219.217-.6.217-1.106.145-1.22s-.227-.165-.486-.289"
      fill="#fff"
    />
  </svg>
);

export const MailIcon = () => (
  <svg
    width="26"
    height="25"
    viewBox="0 0 26 25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M4.733 20.867a2 2 0 0 1-1.46-.607 2 2 0 0 1-.607-1.46V6.4q0-.852.607-1.46a2 2 0 0 1 1.46-.607h16.533a2 2 0 0 1 1.46.607q.607.608.607 1.46v12.4a2 2 0 0 1-.607 1.46 2 2 0 0 1-1.46.607zm16.533-12.4-7.724 4.83a1.1 1.1 0 0 1-.543.156q-.129 0-.27-.04a1 1 0 0 1-.272-.115L4.733 8.467V18.8h16.533zm-8.267 3.1L21.266 6.4H4.733zM4.733 8.725V7.201v.026-.013z"
      fill="#fff"
    />
  </svg>
);

export const ArrowRight = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="12"
    height="13"
    viewBox="0 0 12 13"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={twMerge('group-hover:translate-x-1 transition', props.className)}
    {...props}
  >
    <path
      className="group-hover:fill-primary transition fill-[--contact-color]"
      d="m9.38 7.265-3.775 3.776a.7.7 0 0 0-.221.54.78.78 0 0 0 .24.538.8.8 0 0 0 .54.222.7.7 0 0 0 .54-.222l5.084-5.085a.7.7 0 0 0 .164-.25.9.9 0 0 0 .048-.289.9.9 0 0 0-.048-.289.7.7 0 0 0-.164-.25L6.703.87a.72.72 0 0 0-.53-.212.8.8 0 0 0-.549.212.75.75 0 0 0-.23.549.75.75 0 0 0 .23.549L9.38 5.725H.77a.75.75 0 0 0-.548.221.75.75 0 0 0-.222.549q0 .327.222.549.22.221.548.221z"
    />
  </svg>
);

export const MegafoneIcon = () => (
  <svg
    width={28}
    height={28}
    viewBox="0 0 28 28"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#a)" fillRule="evenodd" clipRule="evenodd">
      <path
        d="M28.713 13.003h-5.545v2.772h5.545zm-8.318 9.15 4.437 3.326 1.663-2.218-4.436-3.327zm0-15.527 1.664 2.218 4.436-3.327-1.663-2.218zm-2.772 3.119v9.288a6.3 6.3 0 0 0 1.508-2.027q.57-1.196.571-2.617 0-1.421-.572-2.617a6.3 6.3 0 0 0-1.507-2.027"
        fill="#D8A31E"
      />
      <path
        d="M5.146 24.093v-5.545H3.76a2.67 2.67 0 0 1-1.958-.814 2.67 2.67 0 0 1-.815-1.959v-2.772q0-1.144.815-1.958a2.67 2.67 0 0 1 1.958-.815h5.545l6.932-4.159v16.636l-6.932-4.16H7.92v5.546zm8.318-13.1v6.792l-3.396-2.01H3.76v-2.772h6.308z"
        fill="#fff"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h28v28H0z" />
      </clipPath>
    </defs>
  </svg>
);

export const ChatIcon = () => (
  <svg
    width={28}
    height={28}
    viewBox="0 0 28 28"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M4 5v14l4-4h10q.424 0 .712-.287A.97.97 0 0 0 19 14V5a.97.97 0 0 0-.288-.713A.97.97 0 0 0 18 4H5a.97.97 0 0 0-.713.287A.97.97 0 0 0 4 5m13 1v7H6V6z"
      fill="#fff"
    />
    <path
      d="M9 20a.97.97 0 0 1-.713-.288A.97.97 0 0 1 8 19v-2h13V8h2q.424 0 .712.287Q24 8.576 24 9v15l-4-4z"
      fill="#D8A31E"
    />
  </svg>
);

export const IdeaIcon = () => (
  <svg
    width={28}
    height={28}
    viewBox="0 0 28 28"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12.703 24.724q.58.345 1.297.345t1.297-.345.91-.924q.91 0 1.558-.648.65-.649.649-1.559v-3.917a8.1 8.1 0 0 0 2.607-2.814Q22 13.124 22 11q0-3.338-2.331-5.669T14 3 8.331 5.331 6 11q0 2.07.98 3.835a8 8 0 0 0 2.606 2.84v3.918q0 .91.649 1.559.648.648 1.558.648.33.579.91.924m3.504-3.13h-4.414V20.6h4.414zm0-2.097h-4.414v-1.049h4.414zm-3.035-3.256h-1.6a6.04 6.04 0 0 1-2.427-2.11Q8.207 12.738 8.207 11q0-2.428 1.683-4.11Q11.572 5.207 14 5.207q2.427 0 4.11 1.683 1.683 1.682 1.683 4.11 0 1.738-.938 3.131a6.04 6.04 0 0 1-2.427 2.11z"
      fill="#fff"
    />
    <path
      d="M13.172 13.262v2.98h1.656v-2.98l2.427-2.427-1.158-1.16L14 11.773l-2.097-2.096-1.158 1.159z"
      fill="#D8A31E"
    />
  </svg>
);

export const PhoneIcon = () => (
  <svg
    width={28}
    height={28}
    viewBox="0 0 28 28"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M20.067 22q-2.778 0-5.49-1.211-2.71-1.212-4.933-3.433-2.221-2.222-3.433-4.934Q5.001 9.712 5 6.933q0-.4.267-.666A.9.9 0 0 1 5.933 6h3.6q.312 0 .556.211t.289.5l.578 3.111q.045.356-.023.6a.93.93 0 0 1-.244.422l-2.156 2.178q.445.822 1.056 1.59.61.765 1.344 1.477.69.69 1.445 1.278t1.6 1.077l2.089-2.088q.2-.201.522-.3.323-.1.633-.056l3.067.622q.311.09.511.322.2.234.2.523v3.6a.9.9 0 0 1-.267.666.9.9 0 0 1-.666.267M7.689 11.333l1.467-1.466-.378-2.09H6.8q.111.912.311 1.8.2.89.578 1.756m7.955 7.956q.867.378 1.767.6t1.811.289v-1.956l-2.089-.422z"
      fill="#fff"
    />
    <path
      d="M15.667 14q0-1.11-.778-1.889A2.57 2.57 0 0 0 13 11.333V9.556q1.845 0 3.144 1.3 1.3 1.299 1.3 3.144z"
      fill="#D8A31E"
    />
    <path
      d="M19.222 14q0-2.6-1.81-4.411Q15.6 7.777 13 7.778V6a7.7 7.7 0 0 1 3.122.633q1.455.634 2.534 1.711a8.1 8.1 0 0 1 1.71 2.534A7.7 7.7 0 0 1 21 14z"
      fill="#D8A31E"
    />
  </svg>
);

export const CrisisIcon = () => (
  <svg
    width={31}
    height={31}
    viewBox="0 0 31 31"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M14.64 11.046q-.39 0-.675-.222a1.2 1.2 0 0 1-.405-.576l-1.2-3.841q-.21-.768-.285-1.344A9 9 0 0 1 12 3.955q0-1.242.87-2.098Q13.74 1 15 1t2.13.857.87 2.098q0 .53-.075 1.108-.075.576-.285 1.344l-1.2 3.84a1.2 1.2 0 0 1-.405.577q-.285.222-.675.222z"
      fill="#D79318"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M15 27q-2.49 0-4.68-.93a12.1 12.1 0 0 1-3.81-2.527 11.9 11.9 0 0 1-2.565-3.752A11.4 11.4 0 0 1 3 15.18q0-3.368 1.785-6.218Q6.57 6.11 9.63 4.605q.03.561.12 1.137t.3 1.344a9.6 9.6 0 0 0-3.405 3.442A9.1 9.1 0 0 0 5.4 15.182q0 3.96 2.79 6.707 2.79 2.748 6.81 2.747 4.02 0 6.81-2.747 2.79-2.748 2.79-6.707a9.2 9.2 0 0 0-1.245-4.668 9.5 9.5 0 0 0-3.435-3.457q.21-.768.3-1.344t.15-1.108q3.06 1.506 4.845 4.343T27 15.182q0 2.452-.945 4.609a11.9 11.9 0 0 1-2.565 3.752 12.1 12.1 0 0 1-3.81 2.526Q17.49 27 15 27m0-4.727q-3 0-5.1-2.068t-2.1-5.023q0-1.714.765-3.22A6.86 6.86 0 0 1 10.74 9.45q.15.442.33 1.02.18.575.48 1.432a4.8 4.8 0 0 0-1.005 1.507 4.6 4.6 0 0 0-.345 1.773q0 1.95 1.41 3.338 1.41 1.39 3.39 1.39t3.39-1.39 1.41-3.338q0-.945-.345-1.773a4.8 4.8 0 0 0-1.005-1.507q.24-.708.435-1.314t.345-1.138q1.41 1.005 2.19 2.511t.78 3.22q0 2.955-2.1 5.024-2.1 2.067-5.1 2.068"
      fill="#050A30"
    />
    <path
      d="M15 17.546q-.99 0-1.695-.695a2.26 2.26 0 0 1-.705-1.67q0-.975.705-1.668A2.33 2.33 0 0 1 15 12.817q.99 0 1.695.694.705.695.705 1.67t-.705 1.67a2.33 2.33 0 0 1-1.695.694"
      fill="#D79318"
    />
  </svg>
);

export const LampIcon = () => (
  <svg
    width={37}
    height={37}
    viewBox="0 0 37 37"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M16.48 32.48q.732.437 1.64.437t1.64-.437a3.17 3.17 0 0 0 1.151-1.169q1.152 0 1.972-.82.82-.819.82-1.971v-4.955a10.2 10.2 0 0 0 3.298-3.56q1.239-2.198 1.239-4.885 0-4.223-2.95-7.171Q22.343 5 18.12 5t-7.171 2.949T8 15.119q0 2.618 1.239 4.851t3.297 3.595v4.955q0 1.152.82 1.971t1.972.82q.42.733 1.152 1.17m4.431-3.96h-5.583v-1.256h5.583zm0-2.652h-5.583v-1.326h5.583zm-3.838-4.118h-2.024a7.64 7.64 0 0 1-3.07-2.67q-1.187-1.762-1.187-3.96 0-3.07 2.128-5.2 2.13-2.128 5.2-2.128t5.2 2.128q2.127 2.13 2.128 5.2 0 2.198-1.187 3.96a7.64 7.64 0 0 1-3.07 2.67z"
      fill="#050A30"
    />
    <path
      d="M17.073 17.981v3.769h2.094v-3.769l3.07-3.07-1.465-1.466-2.652 2.652-2.652-2.652-1.466 1.465z"
      fill="#D8A31E"
    />
  </svg>
);

export const AssessorIcon = () => (
  <svg
    width={26}
    height={26}
    viewBox="0 0 26 26"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M2.166 3.25v15.167l4.333-4.333h10.834q.46 0 .772-.312.31-.311.311-.772V3.25q0-.46-.311-.772a1.05 1.05 0 0 0-.772-.311H3.249q-.46 0-.772.311a1.05 1.05 0 0 0-.311.772m14.083 1.084v7.583H4.333V4.334z"
      fill="#050A30"
    />
    <path
      d="M7.583 19.5q-.461 0-.772-.311a1.05 1.05 0 0 1-.312-.772V16.25h14.084V6.5h2.166q.461 0 .772.312.312.311.312.772v16.25L19.499 19.5z"
      fill="#D8A31E"
    />
  </svg>
);

export const SearchIcon = () => (
  <svg
    width={30}
    height={30}
    viewBox="0 0 30 30"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M6.36 17.89q2.358 2.36 5.765 2.36a7.62 7.62 0 0 0 4.75-1.625l7 7q.344.345.875.344.531 0 .875-.344.345-.344.344-.875 0-.531-.344-.875l-7-7a7.62 7.62 0 0 0 1.625-4.75q0-3.406-2.36-5.766Q15.533 4 12.126 4T6.359 6.36Q4 8.717 4 12.124t2.36 5.766m9.75-1.78q-1.64 1.64-3.985 1.64-2.343 0-3.984-1.64T6.5 12.124 8.14 8.14t3.986-1.64 3.984 1.64q1.641 1.64 1.641 3.985t-1.64 3.984"
      fill="#050A30"
    />
    <path
      d="m12.125 13.938-1.719 1.343q-.187.156-.375.016-.187-.141-.125-.36l.656-2.124-1.812-1.438a.31.31 0 0 1-.078-.36.29.29 0 0 1 .297-.203h2.156l.688-2.156q.062-.219.312-.219t.313.22l.687 2.156h2.156q.219 0 .297.203a.31.31 0 0 1-.078.359l-1.812 1.438.656 2.124q.062.219-.125.36-.188.14-.375-.016z"
      fill="#D8A31E"
    />
  </svg>
);

export const CapIcon = () => (
  <svg
    width={29}
    height={29}
    viewBox="0 0 29 29"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M5.94 21.45a2.46 2.46 0 0 1-.964-.888 2.34 2.34 0 0 1-.342-1.248v-5.777l-2.982-1.594a1.2 1.2 0 0 1-.497-.452A1.2 1.2 0 0 1 1 10.89q0-.33.155-.602.156-.27.497-.451l10.5-5.536q.28-.15.574-.226a2.44 2.44 0 0 1 1.212 0q.295.075.574.226l11.836 6.258q.31.15.481.436.171.285.171.617v7.702q0 .511-.357.857-.357.345-.886.346-.528 0-.885-.346a1.15 1.15 0 0 1-.357-.857v-7.1l-2.485 1.323v5.777q0 .691-.342 1.248a2.46 2.46 0 0 1-.963.888l-6.213 3.25q-.279.15-.574.225a2.45 2.45 0 0 1-1.212 0 2.5 2.5 0 0 1-.574-.226zm7.392-6.108 8.511-4.452-8.51-4.453L4.82 10.89zm0 7.251 6.213-3.25v-4.542l-5.001 2.678q-.28.15-.59.225a2.6 2.6 0 0 1-1.243 0 2.5 2.5 0 0 1-.59-.226l-5.002-2.677v4.543z"
      fill="#050A30"
    />
  </svg>
);

export const PinIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width={20}
    height={21}
    viewBox="0 0 20 21"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M10 9.667a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5" fill="#000" />
    <path
      d="M9.999 2.167a6.667 6.667 0 0 0-6.667 6.6c0 4.566 5.875 9.65 6.125 9.866a.83.83 0 0 0 1.083 0c.292-.216 6.125-5.3 6.125-9.866A6.667 6.667 0 0 0 10 2.167m0 9.166A2.917 2.917 0 1 1 10 5.5a2.917 2.917 0 0 1 0 5.833"
      fill="#000"
    />
  </svg>
);

export const WhatsappFixedIcon = () => (
  <svg
    width={37}
    height={37}
    viewBox="0 0 37 37"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M24.416 3.046a15.1 15.1 0 0 1 4.953 3.33 15.18 15.18 0 0 1 4.47 10.807c0 8.418-6.86 15.278-15.278 15.278-2.559 0-5.072-.647-7.307-1.865L3.16 32.723 5.318 24.8a15.3 15.3 0 0 1-2.035-7.631c0-8.418 6.86-15.278 15.278-15.278 2.01-.007 4 .386 5.855 1.156m-12.33 25.052a12.74 12.74 0 0 0 6.475 1.773c7 0 12.704-5.689 12.673-12.688a12.62 12.62 0 0 0-3.716-8.988 12.57 12.57 0 0 0-8.972-3.73c-7 0-12.703 5.704-12.703 12.703a12.74 12.74 0 0 0 1.942 6.752l.308.478-1.28 4.687 4.81-1.264z"
      fill="#fff"
    />
    <path
      d="M25.53 20.374c-.386-.185-2.267-1.11-2.606-1.248-.354-.124-.6-.185-.863.185-.262.385-.987 1.248-1.203 1.495-.215.262-.447.293-.832.092-.385-.184-1.619-.6-3.068-1.896-1.14-1.017-1.896-2.266-2.127-2.651-.216-.386-.031-.586.17-.787.169-.17.385-.447.57-.663.185-.215.262-.385.385-.632.123-.262.062-.478-.03-.663-.093-.185-.864-2.065-1.172-2.836-.309-.74-.633-.648-.864-.663h-.74c-.262 0-.663.092-1.017.478-.34.385-1.326 1.31-1.326 3.191 0 1.871 1.358 3.681 1.554 3.943l.003.004c.185.262 2.698 4.116 6.521 5.765.91.401 1.619.633 2.174.802.91.293 1.742.247 2.405.154.74-.108 2.266-.925 2.575-1.819.323-.894.323-1.65.215-1.819s-.339-.247-.724-.432"
      fill="#fff"
    />
  </svg>
);

export const HalfCircle = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="180"
    height="366"
    viewBox="0 0 180 366"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <circle cx="-3" cy="183" r="183" fill="#373B59" />
  </svg>
);

export const SingleArrowIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M12 9.05q-.2 0-.375.063a.9.9 0 0 0-.325.212l-4.6 4.6a.95.95 0 0 0-.275.7q0 .425.275.7a.95.95 0 0 0 .7.275.95.95 0 0 0 .7-.275l3.9-3.9 3.9 3.9a.95.95 0 0 0 .7.275.95.95 0 0 0 .7-.275.95.95 0 0 0 .275-.7.95.95 0 0 0-.275-.7l-4.6-4.6a.9.9 0 0 0-.325-.212A1.1 1.1 0 0 0 12 9.05"
      fill="#333"
    />
  </svg>
);

export const InstagramIcon = () => (
  <svg
    width={17}
    height={17}
    viewBox="0 0 17 17"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8.5 0C6.193 0 5.904.01 4.997.051 4.09.093 3.473.236 2.933.446a4.2 4.2 0 0 0-1.506.98 4.2 4.2 0 0 0-.98 1.506C.234 3.472.091 4.09.05 4.995.011 5.902 0 6.192 0 8.5c0 2.309.01 2.597.051 3.504.042.905.185 1.523.395 2.063a4.2 4.2 0 0 0 .98 1.506c.473.473.947.764 1.506.98.54.211 1.158.354 2.063.396.907.041 1.196.051 3.505.051 2.308 0 2.597-.01 3.504-.051.905-.042 1.523-.185 2.064-.395a4.2 4.2 0 0 0 1.505-.981c.473-.473.763-.947.98-1.506.21-.54.353-1.158.396-2.063.04-.906.051-1.195.051-3.504 0-2.308-.01-2.598-.051-3.505-.043-.905-.186-1.522-.395-2.063a4.2 4.2 0 0 0-.981-1.506 4.15 4.15 0 0 0-1.505-.98c-.542-.21-1.16-.353-2.065-.395C11.096.011 10.807 0 8.498 0zm-.762 1.532h.763c2.27 0 2.538.008 3.435.049.828.038 1.278.176 1.578.292.396.154.68.339.977.636.297.298.481.58.636.978.116.299.255.749.292 1.577.041.896.05 1.166.05 3.434s-.009 2.538-.05 3.434c-.038.829-.176 1.278-.292 1.578a2.6 2.6 0 0 1-.636.976 2.6 2.6 0 0 1-.977.636c-.3.117-.75.255-1.578.293-.896.04-1.166.05-3.435.05s-2.539-.01-3.435-.05c-.829-.038-1.279-.177-1.578-.293a2.6 2.6 0 0 1-.978-.636 2.6 2.6 0 0 1-.636-.977c-.116-.3-.255-.75-.293-1.578-.04-.896-.049-1.165-.049-3.435s.009-2.538.05-3.434c.037-.828.176-1.278.292-1.578a2.6 2.6 0 0 1 .636-.977 2.6 2.6 0 0 1 .978-.636c.3-.117.75-.255 1.578-.294.784-.035 1.088-.046 2.672-.047zm5.3 1.411a1.02 1.02 0 1 0 0 2.04 1.02 1.02 0 0 0 0-2.04M8.501 4.135a4.365 4.365 0 1 0 0 8.73 4.365 4.365 0 0 0 0-8.73m0 1.532a2.833 2.833 0 1 1 0 5.666 2.833 2.833 0 0 1 0-5.666"
      fill="#fff"
    />
  </svg>
);

export const FacebookIcon = () => (
  <svg
    width={8}
    height={16}
    viewBox="0 0 8 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M5.333 8.762h1.905L8 5.714H5.333V4.19c0-.784 0-1.523 1.524-1.523H8V.107A22 22 0 0 0 5.823 0C3.755 0 2.286 1.262 2.286 3.581v2.133H0v3.048h2.286v6.476h3.047z"
      fill="#F6F6F6"
    />
  </svg>
);

export const LinkedinIcon = () => (
  <svg
    width={14}
    height={14}
    viewBox="0 0 14 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M2.938 1.47A1.47 1.47 0 1 1 0 1.468a1.47 1.47 0 0 1 2.938.002m.044 2.556H.044v9.196h2.938zm4.642 0H4.701v9.196h2.894V8.396c0-2.688 3.504-2.938 3.504 0v4.826H14V7.397c0-4.532-5.186-4.363-6.405-2.137z"
      fill="#F6F6F6"
    />
  </svg>
);

export const CarouselLikeArrow = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="14"
    height="15"
    viewBox="0 0 14 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M5.922 3.556 1.518 7.961a.82.82 0 0 1-.63.258.9.9 0 0 1-.629-.28.95.95 0 0 1-.258-.63.82.82 0 0 1 .258-.63L6.192.748a.8.8 0 0 1 .292-.19A1 1 0 0 1 6.82.5q.18 0 .337.056a.8.8 0 0 1 .292.191l5.933 5.933q.247.247.247.618 0 .37-.247.64a.88.88 0 0 1-.64.27.88.88 0 0 1-.641-.27L7.72 3.556v10.045a.87.87 0 0 1-.259.64.87.87 0 0 1-.64.259.87.87 0 0 1-.64-.258.87.87 0 0 1-.259-.64z"
      fill="#fff"
    />
  </svg>
);

export const CloseIcon = () => (
  <svg
    width="24"
    height="25"
    viewBox="0 0 24 25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="m12 13.9-4.9 4.9a.95.95 0 0 1-.7.275.95.95 0 0 1-.7-.275.95.95 0 0 1-.275-.7q0-.425.275-.7l4.9-4.9-4.9-4.9a.95.95 0 0 1-.275-.7q0-.425.275-.7a.95.95 0 0 1 .7-.275q.425 0 .7.275l4.9 4.9 4.9-4.9a.95.95 0 0 1 .7-.275q.425 0 .7.275a.95.95 0 0 1 .275.7.95.95 0 0 1-.275.7l-4.9 4.9 4.9 4.9a.95.95 0 0 1 .275.7.95.95 0 0 1-.275.7.95.95 0 0 1-.7.275.95.95 0 0 1-.7-.275z"
      fill="#333"
    />
  </svg>
);

export const UnisalenBubble = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="254"
    height="737"
    viewBox="0 0 254 737"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      opacity=".4"
      fillRule="evenodd"
      clipRule="evenodd"
      d="M444.699 156.594c27.155 42.674 39.853 88.75 44.027 139.127 4.585 55.32 1.331 107.485-19.325 158.967-40.151 100.073-50.718 237.034-153.121 270.841C209.073 760.923 64.316 706.082 13.1 605.332c-49.522-97.419 65.315-195.668 88.364-302.383 13.642-63.163-18.68-131.929 17.062-185.734C160.036 54.729 227.057-7.336 301.605 1.665c72.513 8.754 103.862 93.277 143.094 154.929"
      fill="url(#a)"
    />
    <defs>
      <linearGradient
        id="a"
        x1="612.445"
        y1="272.695"
        x2="-146.088"
        y2="-108.979"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#050A30" stopOpacity=".67" />
        <stop offset="1" stopColor="#D79318" stopOpacity=".38" />
      </linearGradient>
    </defs>
  </svg>
);

export const CalendarIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="23"
    height="22"
    viewBox="0 0 23 22"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M15.167 2.75a.917.917 0 0 1 .91.81l.006.107v.916h1.834a1.833 1.833 0 0 1 1.828 1.696l.005.138v11a1.833 1.833 0 0 1-1.696 1.828l-.137.005H5.083a1.834 1.834 0 0 1-1.828-1.696l-.005-.137v-11a1.833 1.833 0 0 1 1.696-1.83l.137-.004h1.834v-.916a.917.917 0 0 1 1.827-.108l.006.108v.916h5.5v-.916a.917.917 0 0 1 .917-.917m2.75 8.25H5.083v6.417h12.834zm0-4.583H5.083v2.75h12.834z"
      fill="#D8A31E"
    />
  </svg>
);

export const ClockIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="23"
    height="22"
    viewBox="0 0 23 22"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#a)">
      <path
        d="M11.5 1.833A9.166 9.166 0 0 1 20.667 11a9.166 9.166 0 0 1-9.167 9.167A9.166 9.166 0 0 1 2.334 11 9.166 9.166 0 0 1 11.5 1.833m0 1.834a7.333 7.333 0 1 0 0 14.666 7.333 7.333 0 0 0 0-14.666m0 1.833a.917.917 0 0 1 .91.81l.007.107v4.204l2.481 2.48a.917.917 0 0 1-1.21 1.373l-.086-.076-2.75-2.75a.9.9 0 0 1-.26-.528l-.008-.12V6.417A.917.917 0 0 1 11.5 5.5"
        fill="#D8A31E"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M.5 0h22v22H.5z" />
      </clipPath>
    </defs>
  </svg>
);

export const LocationPinIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width={23}
    height={22}
    viewBox="0 0 23 22"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M5.018 15.014c-1.659.497-2.684 1.185-2.684 1.944 0 1.52 4.103 2.75 9.166 2.75s9.167-1.23 9.167-2.75c0-.76-1.026-1.447-2.685-1.944"
      stroke="#D8A31E"
      strokeWidth={1.833}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M11.5 16.042s5.958-3.894 5.958-8.396c0-3.21-2.667-5.813-5.958-5.813S5.542 4.436 5.542 7.646c0 4.502 5.958 8.396 5.958 8.396Z"
      stroke="#D8A31E"
      strokeWidth={1.833}
      strokeLinejoin="round"
    />
    <path
      d="M11.5 10.083a2.292 2.292 0 1 0 0-4.583 2.292 2.292 0 0 0 0 4.583Z"
      stroke="#D8A31E"
      strokeWidth={1.833}
      strokeLinejoin="round"
    />
  </svg>
);
