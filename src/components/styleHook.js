import { Button } from '@mui/material';
import { green, pink } from '@mui/material/colors';
import { styled } from '@mui/system';

export const ConnectButton = styled(Button)(({ theme }) => ({
    color: "#fff",
    borderRadius: 30,
    fontSize: 20,
    fontWeight: 900,
    textTransform: "none",
    backgroundColor: green[600],
    padding: "3px 24px",
    marginRight: 20,
    position: "relative",
    zIndex: 15,
    '&:hover': {
        backgroundColor: green[800],
    },
    '&:disabled': {
        color: "#fff",
        backgroundColor: green[600],
    }
}));

export const ActionButton = styled(Button)(({ theme }) => ({
    color: "#fff",
    fontSize: 24,
    fontWeight: 700,
    letterSpacing: 12,
    fontWeight: 800,
    textTransform: "none",
    backgroundColor: pink[600],
    borderColor: `${pink[800]} !important`,
    '&:hover': {
        backgroundColor: pink[800],
    },
    '&:disabled': {
        color: "#fff",
        fontSize: 40,
        lineHeight: "45px",
    },
    '&:first-child': {
        '&:disabled': {
            backgroundColor: pink[700],
            borderColor: `${pink[800]} !important`,
        }
    },
    '&:last-child': {
        '&:disabled': {
            backgroundColor: pink[700],
            borderColor: `${pink[800]} !important`,
        }
    }
}));

export const MintButton = styled(Button)(({ theme }) => ({
    color: "#fff",
    fontSize: 24,
    fontWeight: 700,
    letterSpacing: 12,
    fontWeight: 800,
    textTransform: "none",
    backgroundColor: pink[600],
    borderColor: `${pink[800]} !important`,
    minHeight: 54,
    display: "flex !important",
    alignItems: "center",
    '&:hover': {
        backgroundColor: pink[800],
    },
    '&:disabled': {
        color: "#fff",
        fontSize: 40,
        backgroundColor: pink[800],
        borderColor: `${pink[800]} !important`,
        fontSize: 24,
    }
}));