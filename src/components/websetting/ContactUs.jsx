// import { useState, useEffect } from "react";
// import axios from "axios";
// import {
//   Box,
//   Typography,
//   Paper,
//   Card,
//   CardContent,
//   CardHeader,
//   TextField,
//   Table,
//   TableBody,
//   TableCell,
//   TableContainer,
//   TableHead,
//   TableRow,
//   Button,
//   Select,
//   MenuItem,
//   FormControl,
//   InputLabel,
//   Dialog,
//   DialogActions,
//   DialogContent,
//   DialogTitle,
//   InputAdornment,
//   Pagination,
// } from "@mui/material";
// import { Search, ArrowUpward, ArrowDownward } from "@mui/icons-material";

// function AdminSubmissionsPage() {
//   const [submissions, setSubmissions] = useState([]);
//   const [searchTerm, setSearchTerm] = useState("");
//   const [statusFilter, setStatusFilter] = useState("all");
//   const [sortField, setSortField] = useState("createdAt");
//   const [sortDirection, setSortDirection] = useState("desc");
//   const [currentPage, setCurrentPage] = useState(1);
//   const [selectedSubmission, setSelectedSubmission] = useState(null);
//   const [isDialogOpen, setIsDialogOpen] = useState(false);

//   const itemsPerPage = 5;

//   // Fetch submissions from the API
//   useEffect(() => {
//     const fetchSubmissions = async () => {
//       try {
//         const response = await axios.get("https://e-commerce-backend-1-0.onrender.com/api/contact-web"); // Update this endpoint as needed
//         setSubmissions(response.data); // Assuming your API returns an array of submissions
//       } catch (error) {
//         console.error("Error fetching submissions:", error);
//       }
//     };

//     fetchSubmissions();
//   }, []);

//   // Filter and sort submissions
//   const filteredSubmissions = submissions
//     .filter((submission) => {
//       const searchLower = searchTerm.toLowerCase();
//       const matchesSearch =
//         submission.firstName.toLowerCase().includes(searchLower) ||
//         submission.lastName.toLowerCase().includes(searchLower) ||
//         submission.email.toLowerCase().includes(searchLower) ||
//         (submission.subject && submission.subject.toLowerCase().includes(searchLower)) ||
//         submission.message.toLowerCase().includes(searchLower);

//       const matchesStatus = statusFilter === "all" || submission.status === statusFilter;
//       return matchesSearch && matchesStatus;
//     })
//     .sort((a, b) => {
//       if (sortField === "name") {
//         const nameA = `${a.firstName} ${a.lastName}`.toLowerCase();
//         const nameB = `${b.firstName} ${b.lastName}`.toLowerCase();
//         return sortDirection === "asc" ? nameA.localeCompare(nameB) : nameB.localeCompare(nameA);
//       } else if (sortField === "createdAt") {
//         return sortDirection === "asc"
//           ? new Date(a.createdAt) - new Date(b.createdAt)
//           : new Date(b.createdAt) - new Date(a.createdAt);
//       }
//       return 0;
//     });

//   const totalPages = Math.ceil(filteredSubmissions.length / itemsPerPage);
//   const paginatedSubmissions = filteredSubmissions.slice(
//     (currentPage - 1) * itemsPerPage,
//     currentPage * itemsPerPage
//   );

//   // Sort handler
//   const handleSort = (field) => {
//     if (sortField === field) {
//       setSortDirection((prev) => (prev === "asc" ? "desc" : "asc"));
//     } else {
//       setSortField(field);
//       setSortDirection("asc");
//     }
//   };

//   // Format date for displaying
//   const formatDate = (dateString) => {
//     const date = new Date(dateString);
//     return new Intl.DateTimeFormat("en-US", {
//       year: "numeric",
//       month: "short",
//       day: "numeric",
//       hour: "2-digit",
//       minute: "2-digit",
//     }).format(date);
//   };

//   // Handle viewing submission details
//   const viewSubmissionDetails = (submission) => {
//     setSelectedSubmission(submission);
//     setIsDialogOpen(true);

//     // Mark as read
//     if (submission.status === "unread") {
//       const updated = submissions.map((s) =>
//         s.id === submission.id ? { ...s, status: "read" } : s
//       );
//       setSubmissions(updated);
//     }
//   };

//   return (
//     <Box sx={{ maxWidth: 1200, mx: "auto", p: 3 }}>
//       <Typography variant="h4" gutterBottom>
//         Contact Form Submissions
//       </Typography>

//       <Card>
//         <CardHeader
//           title="All Submissions"
//           subheader={`You have received ${submissions.length} total submissions.`}
//         />
//         <CardContent>
//           <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2, mb: 3 }}>
//             <TextField
//               value={searchTerm}
//               onChange={(e) => {
//                 setSearchTerm(e.target.value);
//                 setCurrentPage(1);
//               }}
//               placeholder="Search by name, email, subject..."
//               size="small"
//               sx={{
//                 width: 300,
//                 backgroundColor: "#f9f9f9",
//                 borderRadius: "25px",
//                 boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
//                 "& .MuiOutlinedInput-root": {
//                   borderRadius: "25px",
//                 },
//               }}
//               InputProps={{
//                 startAdornment: (
//                   <InputAdornment position="start">
//                     <Search color="action" />
//                   </InputAdornment>
//                 ),
//               }}
//               variant="outlined"
//             />

//             <FormControl sx={{ minWidth: 180 }}>
//               <InputLabel id="status-filter-label">Filter by status</InputLabel>
//               <Select
//                 labelId="status-filter-label"
//                 value={statusFilter}
//                 label="Filter by status"
//                 onChange={(e) => {
//                   setStatusFilter(e.target.value);
//                   setCurrentPage(1);
//                 }}
//               >
//                 <MenuItem value="all">All</MenuItem>
//                 <MenuItem value="unread">Unread</MenuItem>
//                 <MenuItem value="read">Read</MenuItem>
//               </Select>
//             </FormControl>
//           </Box>

//           <TableContainer component={Paper}>
//             <Table>
//               <TableHead>
//                 <TableRow>
//                   <TableCell>
//                     <Button onClick={() => handleSort("name")}>
//                       Name {sortField === "name" ? (sortDirection === "asc" ? <ArrowUpward fontSize="small" /> : <ArrowDownward fontSize="small" />) : null}
//                     </Button>
//                   </TableCell>
//                   <TableCell>Email</TableCell>
//                   <TableCell>Subject</TableCell>
//                   <TableCell>Status</TableCell>
//                   <TableCell>
//                     <Button onClick={() => handleSort("createdAt")}>
//                       Date {sortField === "createdAt" ? (sortDirection === "asc" ? <ArrowUpward fontSize="small" /> : <ArrowDownward fontSize="small" />) : null}
//                     </Button>
//                   </TableCell>
//                   <TableCell>Actions</TableCell>
//                 </TableRow>
//               </TableHead>
//               <TableBody>
//                 {paginatedSubmissions.map((submission) => (
//                   <TableRow key={submission.id}>
//                     <TableCell>{submission.name || `${submission.firstName} ${submission.lastName}`}</TableCell>
//                     <TableCell>{submission.email}</TableCell>
//                     <TableCell>{submission.subject || "—"}</TableCell>
//                     <TableCell>{submission.status}</TableCell>
//                     <TableCell>{formatDate(submission.createdAt)}</TableCell>
//                     <TableCell>
//                       <Button variant="outlined" size="small" onClick={() => viewSubmissionDetails(submission)}>
//                         View
//                       </Button>
//                     </TableCell>
//                   </TableRow>
//                 ))}
//               </TableBody>
//             </Table>
//           </TableContainer>

//           {/* Pagination */}
//           <Box sx={{ display: "flex", justifyContent: "center", mt: 3 }}>
//             <Pagination
//               count={totalPages}
//               page={currentPage}
//               onChange={(e, value) => setCurrentPage(value)}
//               color="primary"
//             />
//           </Box>
//         </CardContent>
//       </Card>

//       {/* Dialog for submission details */}
//       {selectedSubmission && (
//         <Dialog open={isDialogOpen} onClose={() => setIsDialogOpen(false)} maxWidth="sm" fullWidth>
//           <DialogTitle>
//             Message from {selectedSubmission.firstName} {selectedSubmission.lastName}
//           </DialogTitle>
//           <DialogContent dividers>
//             <Typography variant="subtitle2" gutterBottom>
//               Email: {selectedSubmission.email}
//             </Typography>
//             {selectedSubmission.phone && (
//               <Typography variant="subtitle2" gutterBottom>
//                 Phone: {selectedSubmission.phone}
//               </Typography>
//             )}
//             <Typography variant="subtitle2" gutterBottom>
//               Country: {selectedSubmission.country}
//             </Typography>
//             <Typography variant="subtitle2" gutterBottom>
//               Subject: {selectedSubmission.subject || "—"}
//             </Typography>
//             <Typography variant="body1" sx={{ mt: 2 }}>
//               {selectedSubmission.message}
//             </Typography>
//           </DialogContent>
//           <DialogActions>
//             <Button onClick={() => setIsDialogOpen(false)} color="primary">
//               Close
//             </Button>
//           </DialogActions>
//         </Dialog>
//       )}
//     </Box>
//   );
// }

// export default AdminSubmissionsPage;
import { useState, useEffect } from "react";
import axios from "axios";
import {
  Box,
  Typography,
  Paper,
  Card,
  CardContent,
  CardHeader,
  TextField,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Button,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  InputAdornment,
  Pagination,
} from "@mui/material";
import { Search, ArrowUpward, ArrowDownward } from "@mui/icons-material";

function AdminSubmissionsPage() {
  const [submissions, setSubmissions] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [sortField, setSortField] = useState("createdAt");
  const [sortDirection, setSortDirection] = useState("desc");
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedSubmission, setSelectedSubmission] = useState(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const itemsPerPage = 5;

  // Fetch submissions from the API
  useEffect(() => {
    const fetchSubmissions = async () => {
      try {
        const response = await axios.get("https://e-commerce-backend-1-0.onrender.com/api/contact-web"); // Update this endpoint as needed
        setSubmissions(response.data); // Assuming your API returns an array of submissions
      } catch (error) {
        console.error("Error fetching submissions:", error);
      }
    };

    fetchSubmissions();
  }, []);

  // Filter and sort submissions
  const filteredSubmissions = submissions
    .filter((submission) => {
      const searchLower = searchTerm.toLowerCase();
      const matchesSearch =
        submission.firstName.toLowerCase().includes(searchLower) ||
        submission.lastName.toLowerCase().includes(searchLower) ||
        submission.email.toLowerCase().includes(searchLower) ||
        (submission.subject && submission.subject.toLowerCase().includes(searchLower)) ||
        submission.message.toLowerCase().includes(searchLower);

      const matchesStatus = statusFilter === "all" || submission.status === statusFilter;
      return matchesSearch && matchesStatus;
    })
    .sort((a, b) => {
      if (sortField === "name") {
        const nameA = `${a.firstName} ${a.lastName}`.toLowerCase();
        const nameB = `${b.firstName} ${b.lastName}`.toLowerCase();
        return sortDirection === "asc" ? nameA.localeCompare(nameB) : nameB.localeCompare(nameA);
      } else if (sortField === "createdAt") {
        return sortDirection === "asc"
          ? new Date(a.createdAt) - new Date(b.createdAt)
          : new Date(b.createdAt) - new Date(a.createdAt);
      }
      return 0;
    });

  const totalPages = Math.ceil(filteredSubmissions.length / itemsPerPage);
  const paginatedSubmissions = filteredSubmissions.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  // Sort handler
  const handleSort = (field) => {
    if (sortField === field) {
      setSortDirection((prev) => (prev === "asc" ? "desc" : "asc"));
    } else {
      setSortField(field);
      setSortDirection("asc");
    }
  };

  // Format date for displaying
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    }).format(date);
  };

  // Handle viewing submission details and update status to 'read'
  
  const viewSubmissionDetails = async (submission) => {
    setSelectedSubmission(submission);
    setIsDialogOpen(true);
  
    if (submission.status === "unread") {
      try {
        console.log("Updating status for:", submission.id);  // Debug log
        const response = await axios.put(
            `https://e-commerce-backend-1-0.onrender.com/api/contact-web/${submission._id}`,
            { status: "read" }
          );
          
        console.log("Response from status update:", response); // Log response
        const updated = submissions.map((s) =>
          s.id === submission._id ? { ...s, status: "read" } : s
        );
        setSubmissions(updated);
      } catch (error) {
        console.error("Error updating status:", error);
      }
    }
  };
  

  return (
    <Box sx={{ maxWidth: 1200, mx: "auto", p: 3 }}>
      <Typography variant="h4" gutterBottom>
        Contact Form Submissions
      </Typography>

      <Card>
        <CardHeader
          title="All Submissions"
          subheader={`You have received ${submissions.length} total submissions.`}
        />
        <CardContent>
          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2, mb: 3 }}>
            <TextField
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value);
                setCurrentPage(1);
              }}
              placeholder="Search by name, email, subject..."
              size="small"
              sx={{
                width: 300,
                backgroundColor: "#f9f9f9",
                borderRadius: "25px",
                boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
                "& .MuiOutlinedInput-root": {
                  borderRadius: "25px",
                },
              }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Search color="action" />
                  </InputAdornment>
                ),
              }}
              variant="outlined"
            />

            <FormControl sx={{ minWidth: 180 }}>
              <InputLabel id="status-filter-label">Filter by status</InputLabel>
              <Select
                labelId="status-filter-label"
                value={statusFilter}
                label="Filter by status"
                onChange={(e) => {
                  setStatusFilter(e.target.value);
                  setCurrentPage(1);
                }}
              >
                <MenuItem value="all">All</MenuItem>
                <MenuItem value="unread">Unread</MenuItem>
                <MenuItem value="read">Read</MenuItem>
              </Select>
            </FormControl>
          </Box>

          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>
                    <Button onClick={() => handleSort("name")}>
                      Name{" "}
                      {sortField === "name"
                        ? sortDirection === "asc"
                          ? <ArrowUpward fontSize="small" />
                          : <ArrowDownward fontSize="small" />
                        : null}
                    </Button>
                  </TableCell>
                  <TableCell>Email</TableCell>
                  <TableCell>Subject</TableCell>
                  <TableCell>Status</TableCell>
                  <TableCell>
                    <Button onClick={() => handleSort("createdAt")}>
                      Date{" "}
                      {sortField === "createdAt"
                        ? sortDirection === "asc"
                          ? <ArrowUpward fontSize="small" />
                          : <ArrowDownward fontSize="small" />
                        : null}
                    </Button>
                  </TableCell>
                  <TableCell>Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {paginatedSubmissions.map((submission) => (
                  <TableRow key={submission.id}>
                    <TableCell>{submission.name || `${submission.firstName} ${submission.lastName}`}</TableCell>
                    <TableCell>{submission.email}</TableCell>
                    <TableCell>{submission.subject || "—"}</TableCell>
                    <TableCell>{submission.status}</TableCell>
                    <TableCell>{formatDate(submission.createdAt)}</TableCell>
                    <TableCell>
                      <Button variant="outlined" size="small" onClick={() => viewSubmissionDetails(submission)}>
                        View
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>

          {/* Pagination */}
          <Box sx={{ display: "flex", justifyContent: "center", mt: 3 }}>
            <Pagination
              count={totalPages}
              page={currentPage}
              onChange={(e, value) => setCurrentPage(value)}
              color="primary"
            />
          </Box>
        </CardContent>
      </Card>

      {/* Dialog for submission details */}
      {selectedSubmission && (
        <Dialog open={isDialogOpen} onClose={() => setIsDialogOpen(false)} maxWidth="sm" fullWidth>
          <DialogTitle>
            Message from {selectedSubmission.firstName} {selectedSubmission.lastName}
          </DialogTitle>
          <DialogContent dividers>
            <Typography variant="subtitle2" gutterBottom>
              Email: {selectedSubmission.email}
            </Typography>
            {selectedSubmission.phone && (
              <Typography variant="subtitle2" gutterBottom>
                Phone: {selectedSubmission.phone}
              </Typography>
            )}
            <Typography variant="subtitle2" gutterBottom>
              Country: {selectedSubmission.country}
            </Typography>
            <Typography variant="h6" gutterBottom>
              Subject: {selectedSubmission.subject}
            </Typography>
            <Typography variant="body1" paragraph>
              {selectedSubmission.message}
            </Typography>
            <Typography variant="body2" color="textSecondary">
              {formatDate(selectedSubmission.createdAt)}
            </Typography>
          </DialogContent>
          <DialogActions>
            <Button onClick={() => setIsDialogOpen(false)} color="primary">
              Close
            </Button>
          </DialogActions>
        </Dialog>
      )}
    </Box>
  );
}

export default AdminSubmissionsPage;
