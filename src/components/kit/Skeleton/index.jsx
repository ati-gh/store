import { Skeleton } from "@mui/material";
import { useTheme } from "@mui/material/styles";

const SkeletonLoader = () => {
  const theme = useTheme();
  const skeletonBaseColor =
    theme.palette.mode === "dark" ? "#2d3748" : "#edf2f7";
  const pulseAnimation = {
    animation: "pulse 1.5s ease-in-out 0.5s infinite",
    "@keyframes pulse": {
      "0%, 100%": { opacity: 1 },
      "50%": { opacity: 0.5 },
    },
  };

  return (
    <div className=" rounded-lg border h-[400px]  w-full flex flex-col justify-center items-center shadow">
      <div className="w-[90%] m-auto h-[95%] flex flex-col">
        <Skeleton
          variant="rectangular"
          sx={{
            width: "100%",
            height: "100%",
            overflow: "hidden",
            borderRadius: "8px",
            ...pulseAnimation,
          }}
        />
        {[1, 2, 3].map((item) => (
          <Skeleton
            key={item}
            variant="text"
            width={item === 3 ? "60%" : "100%"}
            height={20}
            sx={{
              bgcolor: skeletonBaseColor,
              ...pulseAnimation,
              borderRadius: "4px",
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default SkeletonLoader;
