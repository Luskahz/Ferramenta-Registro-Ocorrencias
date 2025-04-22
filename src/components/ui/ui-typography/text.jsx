import clsx from "clsx";
import { twMerge } from "tailwind-merge";

//===== X Small ====
export function Title_Xs({ children, className }) {
  return (
    <h1
      className={twMerge(
        clsx(
          "p-4 pb-6 text-center text-sm font-bold text-[var(--gray-70)]",
          className,
        ),
      )}
    >
      {children}
    </h1>
  );
}
export function Title_Xs_Left({ children, className }) {
  return (
    <h1
      className={twMerge(
        clsx(
          "p-4 pb-6 text-start text-sm font-bold text-[var(--gray-70)]",
          className,
        ),
      )}
    >
      {children}
    </h1>
  );
}

//===== Small ====
export function Title_Sm({ children, className }) {
  return (
    <h1
      className={twMerge(
        clsx(
          "p-4 pb-6 text-center text-base font-bold text-[var(--gray-60)]",
          className,
        ),
      )}
    >
      {children}
    </h1>
  );
}
export function Title_Sm_Left({ children, className }) {
  return (
    <h1
      className={twMerge(
        clsx(
          "p-4 pb-6 text-start text-base font-bold text-[var(--gray-60)]",
          className,
        ),
      )}
    >
      {children}
    </h1>
  );
}

//===== Medium ====
export function Title_Md({ children, className }) {
  return (
    <h1
      className={twMerge(
        clsx(
          "p-4 pb-6 text-center text-2xl font-bold text-[var(--gray-50)]",
          className,
        ),
      )}
    >
      {children}
    </h1>
  );
}

export function Title_Md_Left({ children, className }) {
  return (
    <h1
      className={twMerge(
        clsx(
          "p-4 pb-6 text-start text-2xl font-bold text-[var(--gray-50)]",
          className,
        ),
      )}
    >
      {children}
    </h1>
  );
}

//===== large ====
export function Title_Lg({ children, className }) {
  return (
    <h1
      className={twMerge(
        clsx(
          "p-4 pb-6 text-center text-4xl font-bold text-[var(--gray-40)]",
          className,
        ),
      )}
    >
      {children}
    </h1>
  );
}

export function Title_Lg_Left({ children, className }) {
  return (
    <h1
      className={twMerge(
        clsx(
          "p-4 pb-6 text-start text-4xl font-bold text-[var(--gray-40)]",
          className,
        ),
      )}
    >
      {children}
    </h1>
  );
}

//===== X large ====
export function Title_Xl({ children, className }) {
  return (
    <h1
      className={twMerge(
        clsx(
          "p-4 pb-6 text-center text-5xl font-bold text-[var(--gray-30)]",
          className,
        ),
      )}
    >
      {children}
    </h1>
  );
}
export function Title_Xl_Left({ children, className }) {
  return (
    <h1
      className={twMerge(
        clsx(
          "p-4 pb-6 text-start text-5xl font-bold text-[var(--gray-30)]",
          className,
        ),
      )}
    >
      {children}
    </h1>
  );
}
