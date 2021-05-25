using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

// Code scaffolded by EF Core assumes nullable reference types (NRTs) are not used or disabled.
// If you have enabled NRTs for your project, then un-comment the following line:
// #nullable disable

namespace BankingBackEndAPI.Models
{
    public partial class OnlineBankingDBContext : DbContext
    {
        public OnlineBankingDBContext()
        {
        }

        public OnlineBankingDBContext(DbContextOptions<OnlineBankingDBContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Account> Account { get; set; }
        public virtual DbSet<AccountsType> AccountsType { get; set; }
        public virtual DbSet<Branch> Branch { get; set; }
        public virtual DbSet<City> City { get; set; }
        public virtual DbSet<Complaints> Complaints { get; set; }
        public virtual DbSet<Customer> Customer { get; set; }
        public virtual DbSet<Departments> Departments { get; set; }
        public virtual DbSet<Employees> Employees { get; set; }
        public virtual DbSet<Loan> Loan { get; set; }
        public virtual DbSet<LoanApplications> LoanApplications { get; set; }
        public virtual DbSet<Transactions> Transactions { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. See http://go.microsoft.com/fwlink/?LinkId=723263 for guidance on storing connection strings.
                optionsBuilder.UseSqlServer("Server=.;Database=OnlineBankingDB;Trusted_Connection=True;");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Account>(entity =>
            {
                entity.HasKey(e => e.AccId)
                    .HasName("PK__Account__91CBC3788F2457C1");

                entity.Property(e => e.AccAccountCode)
                    .IsRequired()
                    .HasMaxLength(60);

                entity.Property(e => e.AccDateOfOpening).HasColumnType("date");

                entity.Property(e => e.AccLoginName)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.AccOpeningBalance).HasColumnType("money");

                entity.Property(e => e.AccPassword)
                    .IsRequired()
                    .HasMaxLength(70)
                    .IsUnicode(false);

                entity.HasOne(d => d.AccBranch)
                    .WithMany(p => p.Account)
                    .HasForeignKey(d => d.AccBranchId)
                    .OnDelete(DeleteBehavior.SetNull)
                    .HasConstraintName("FK__Account__AccBran__33D4B598");

                entity.HasOne(d => d.AccCustomer)
                    .WithMany(p => p.Account)
                    .HasForeignKey(d => d.AccCustomerId)
                    .OnDelete(DeleteBehavior.SetNull)
                    .HasConstraintName("FK__Account__AccCust__31EC6D26");

                entity.HasOne(d => d.AccTypeNavigation)
                    .WithMany(p => p.Account)
                    .HasForeignKey(d => d.AccType)
                    .OnDelete(DeleteBehavior.SetNull)
                    .HasConstraintName("FK__Account__AccType__32E0915F");
            });

            modelBuilder.Entity<AccountsType>(entity =>
            {
                entity.HasKey(e => e.ActypeId)
                    .HasName("PK__Accounts__CDF3CB42FB46650D");

                entity.Property(e => e.ActypeId).ValueGeneratedOnAdd();

                entity.Property(e => e.ActypeName)
                    .IsRequired()
                    .HasMaxLength(80)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<Branch>(entity =>
            {
                entity.HasKey(e => e.BranId)
                    .HasName("PK__Branch__852886C914F64477");

                entity.Property(e => e.BranAddress).HasMaxLength(150);

                entity.Property(e => e.BranName)
                    .IsRequired()
                    .HasMaxLength(150);

                entity.HasOne(d => d.BranchCity)
                    .WithMany(p => p.Branch)
                    .HasForeignKey(d => d.BranchCityId)
                    .OnDelete(DeleteBehavior.SetNull)
                    .HasConstraintName("FK__Branch__BranchCi__49C3F6B7");
            });

            modelBuilder.Entity<City>(entity =>
            {
                entity.Property(e => e.CityName)
                    .HasMaxLength(70)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<Complaints>(entity =>
            {
                entity.HasKey(e => e.CompId)
                    .HasName("PK__Complain__AD362A16AF45D918");

                entity.Property(e => e.CompDate).HasColumnType("date");

                entity.Property(e => e.CompMatter)
                    .HasMaxLength(200)
                    .IsUnicode(false);

                entity.HasOne(d => d.CompCust)
                    .WithMany(p => p.Complaints)
                    .HasForeignKey(d => d.CompCustId)
                    .OnDelete(DeleteBehavior.SetNull)
                    .HasConstraintName("FK__Complaint__CompC__48CFD27E");
            });

            modelBuilder.Entity<Customer>(entity =>
            {
                entity.HasKey(e => e.CustId)
                    .HasName("PK__Customer__049E3AA9E5785EFE");

                entity.Property(e => e.CustAddress).HasMaxLength(150);

                entity.Property(e => e.CustContact).HasMaxLength(15);

                entity.Property(e => e.CustDob)
                    .HasColumnName("CustDOB")
                    .HasColumnType("date");

                entity.Property(e => e.CustEmail).HasMaxLength(35);

                entity.Property(e => e.CustFirstName)
                    .IsRequired()
                    .HasMaxLength(70)
                    .IsUnicode(false);

                entity.Property(e => e.CustImagePath)
                    .HasMaxLength(500)
                    .IsUnicode(false);

                entity.Property(e => e.CustLastName)
                    .IsRequired()
                    .HasMaxLength(70)
                    .IsUnicode(false);

                entity.Property(e => e.CustNic)
                    .HasColumnName("CustNIC")
                    .HasMaxLength(25);

                entity.Property(e => e.CustOccupation).HasMaxLength(100);

                entity.HasOne(d => d.CustCityNavigation)
                    .WithMany(p => p.Customer)
                    .HasForeignKey(d => d.CustCity)
                    .OnDelete(DeleteBehavior.SetNull)
                    .HasConstraintName("FK__Customer__CustCi__2D27B809");
            });

            modelBuilder.Entity<Departments>(entity =>
            {
                entity.HasKey(e => e.DeptId)
                    .HasName("PK__Departme__014881AE4ED75BD4");

                entity.Property(e => e.DeptId).ValueGeneratedOnAdd();

                entity.Property(e => e.DeptName)
                    .IsRequired()
                    .HasMaxLength(70)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<Employees>(entity =>
            {
                entity.HasKey(e => e.EmpId)
                    .HasName("PK__Employee__AF2DBB999BFC9289");

                entity.Property(e => e.EmpContact).HasMaxLength(15);

                entity.Property(e => e.EmpDateOfBirth).HasColumnType("date");

                entity.Property(e => e.EmpEmail).HasMaxLength(35);

                entity.Property(e => e.EmpFirstName)
                    .IsRequired()
                    .HasMaxLength(70)
                    .IsUnicode(false);

                entity.Property(e => e.EmpImagePath)
                    .HasMaxLength(500)
                    .IsUnicode(false);

                entity.Property(e => e.EmpLastName)
                    .IsRequired()
                    .HasMaxLength(70)
                    .IsUnicode(false);

                entity.Property(e => e.EmpPassword)
                    .IsRequired()
                    .HasMaxLength(100);

                entity.Property(e => e.EmpQualification)
                    .IsRequired()
                    .HasMaxLength(80)
                    .IsUnicode(false);

                entity.Property(e => e.EmpSalary).HasColumnType("money");

                entity.Property(e => e.EmpUserName)
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.HasOne(d => d.EmpDepartmentNavigation)
                    .WithMany(p => p.Employees)
                    .HasForeignKey(d => d.EmpDepartment)
                    .OnDelete(DeleteBehavior.SetNull)
                    .HasConstraintName("FK__Employees__EmpDe__267ABA7A");
            });

            modelBuilder.Entity<Loan>(entity =>
            {
                entity.Property(e => e.LoanAmountTransffered).HasColumnType("money");

                entity.Property(e => e.LoanDateOfTransfer).HasColumnType("date");

                entity.HasOne(d => d.LoanCustomer)
                    .WithMany(p => p.Loan)
                    .HasForeignKey(d => d.LoanCustomerId)
                    .OnDelete(DeleteBehavior.SetNull)
                    .HasConstraintName("FK__Loan__LoanCustom__38996AB5");
            });

            modelBuilder.Entity<LoanApplications>(entity =>
            {
                entity.HasKey(e => e.LoanAppId)
                    .HasName("PK__LoanAppl__7A516B7AD4DA566F");

                entity.Property(e => e.LoanAppBody)
                    .HasMaxLength(800)
                    .IsUnicode(false);

                entity.Property(e => e.LoanAppMoneyAsked).HasColumnType("money");

                entity.Property(e => e.LoanAppSubject)
                    .HasMaxLength(200)
                    .IsUnicode(false);

                entity.Property(e => e.LoanReason)
                    .HasMaxLength(150)
                    .IsUnicode(false);

                entity.HasOne(d => d.LoanAppCust)
                    .WithMany(p => p.LoanApplications)
                    .HasForeignKey(d => d.LoanAppCustId)
                    .OnDelete(DeleteBehavior.SetNull)
                    .HasConstraintName("FK__LoanAppli__LoanA__3B75D760");
            });

            modelBuilder.Entity<Transactions>(entity =>
            {
                entity.HasKey(e => e.TranId)
                    .HasName("PK__Transact__F70897C9870EDA66");

                entity.Property(e => e.TranAccountNoReciever)
                    .IsRequired()
                    .HasMaxLength(60);

                entity.Property(e => e.TranAccountNoSender)
                    .IsRequired()
                    .HasMaxLength(60);

                entity.Property(e => e.TranAmountTransffered).HasColumnType("money");

                entity.Property(e => e.TranDate).HasColumnType("date");
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
