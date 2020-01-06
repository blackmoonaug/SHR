<!DOCTYPE html
    PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">

<head>
    <title>{{ $title }}</title>
    <style>
        .text-danger {
            color: red !important
        }

        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }

    </style>
</head>

<body>
    <h2>{{ $heading }}</h2>
    @if($user->ProgramCode == 'BLIS' || $user->ProgramCode == 'BSCpE' || $user->ProgramCode == 'BSP' ||
    $user->ProgramCode == 'BSCRIM')
    <h3>Enrollment Schedule [Regular Student]: <b class="text-danger">November 4, 2019</b></h3>
    @endif

    @if($user->ProgramCode == 'BEED' || $user->ProgramCode == 'BSED' )
    <h3>Enrollment Schedule [Regular Student]: <b class="text-danger">November 5, 2019</b></h3>
    @endif


    @if($user->ProgramCode == 'BSIT' || $user->ProgramCode == 'ACT')
    <h3>Enrollment Schedule [Regular Student]: <b class="text-danger">November 6, 2019</b></h3>
    @endif

    @if($user->ProgramCode == 'BSBA' || $user->ProgramCode == 'BSOA' || $user->ProgramCode == 'BSEntrep' ||
    $user->ProgramCode == 'BSAIS')
    <h3>Enrollment Schedule [Regular Student]: <b class="text-danger">November 7, 2019</b></h3>
    @endif

    @if($user->ProgramCode == 'BSHRM' || $user->ProgramCode == 'HRS' || $user->ProgramCode == 'BSTM' ||
    $user->ProgramCode == 'MSTM')
    <h3>Enrollment Schedule [Regular Student]: <b class="text-danger">November 8, 2019</b></h3>
    @endif

    <p>
        Student Number: {{ $user->student_number }} <br>
        Student Name: {{ $user->lastname }}, {{ $user->firstname }} <br>
    </p>

    <table width="100%" style="width:100%;" border="1">
        <thead>
            <tr>
                <th>Procedure</th>
                <th>Description</th>
                <th>Location</th>
                <th>Signature</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Checks Account Balance</td>
                <td>
                    <p>
                        <i>
                            This department checks or validates your previous account balance,
                            <br />
                            <br />Note:
                            <b class="text-danger">
                                If you still have an unpaid balance, Please proceed to the cashier window that
                                will be designated for clearing your account balance
                            </b>.
                        </i>
                    </p>
                </td>
                <td>
                    <h4>Accounting Department</h4>
                </td>
                <td></td>
            </tr>
            <tr>
                <td>Sectioning</td>
                <td>
                    <p>
                        <i>
                            This step will assigned you to your new section for the upcoming second semester,
                            <br />
                            <br />Note:
                            <b class="text-danger">Prepare your clearance here, make sure your balance was cleared and
                                signed by the accounting department</b>.
                        </i>
                    </p>
                </td>
                <td>
                    <h4>ROOM C208</h4>
                </td>
                <td></td>
            </tr>
            <tr>
                <td>Payment</td>
                <td>
                    <p>
                        <i>
                            Please prepare
                            <b class="text-danger">PHP 1,000.00</b> for the enrollment.
                        </i>
                    </p>
                </td>
                <td>
                    <h4>Cashier Department</h4>
                </td>
                <td></td>
            </tr>
            <tr>
                <td>ID Validation</td>
                <td>
                    <p>
                        <i>
                            Validating your ID and placing new
                            <b class="text-danger">ID Stickers</b> for the second semester.
                        </i>
                    </p>
                </td>
                <td>
                    <h4>ROOM C209</h4>
                </td>
                <td></td>
            </tr>
            <tr>
                <td>Printing Certificate of Registration</td>
                <td>
                    <p>
                        <i>
                            This department prints your new
                            <b class="text-danger">Certificate of Registration</b>.
                        </i>
                    </p>
                </td>
                <td>
                    <h4>Registrar Office - Main Campus</h4>
                </td>
                <td></td>
            </tr>
        </tbody>
    </table>
    <h4><i>This enrollment slip will be used as a pass and a tracker through the whole enrollment process.</i></h4>
    <h3><b>Remarks</b></h3>
</body>

</html>
