CREATE TABLE LoginAttempt (
    Id INTEGER NOT NULL AUTO_INCREMENT,
    UserId INTEGER,
    IsSuccess INTEGER,
    ResultedInLockout INTEGER,
    LoginDateTime TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT LoginAttemptId_pk PRIMARY KEY (Id)
)