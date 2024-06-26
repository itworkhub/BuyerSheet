

(function (window) {
    window.numeral.locale('');
})(this);

function ready(fn) {
    if (document.readyState !== 'loading') {
        fn();
    } else {
        document.addEventListener('DOMContentLoaded', fn);
    }
}

ready(function () {
    const applicationInputs = document.querySelectorAll(
        '.application input:not([type="hidden"]), .application select, .application textarea');

        const APY = {};

APY.config = {
    }

APY.cells = {};


            APY.cells.s0r0c0 = {v: 'BUYER\u0027S\u0020CONVENTIONAL\u0020ESTIMATED\u0020Closing\u0020Costs',
                t: 'text',
                f: ''
            };
                APY.cells.s0r1c0 = {v: 'Purchase\u0020Price\u003A',
                t: 'text',
                f: ''
            };
    APY.cells.s0r1c2 = {v: 250000,i: 250000,t: 'number',
                f: '$0,0.00'
            };                APY.cells.s0r1c4 = {v: 'Purchase\u0020Price',
                t: 'text',
                f: ''
            };
    APY.cells.s0r1c6 = {v: 250000,t: 'number',
                f: '$0,0.00'
            };                APY.cells.s0r2c0 = {v: 'MIP',
                t: 'text',
                f: ''
            };
                APY.cells.s0r2c1 = {v: '\u002B',
                t: 'text',
                f: ''
            };
    APY.cells.s0r2c2 = {v: 0,i: 0,t: 'number',
                f: '$0,0.00'
            };                APY.cells.s0r2c4 = {v: 'Closing\u0020Costs',
                t: 'text',
                f: ''
            };
                APY.cells.s0r2c5 = {v: '\u002B',
                t: 'text',
                f: ''
            };
    APY.cells.s0r2c6 = {v: 3610.95,t: 'number',
                f: '$0,0.00'
            };                APY.cells.s0r3c0 = {v: 'Down\u0020Payment',
                t: 'text',
                f: ''
            };
                APY.cells.s0r3c1 = {v: '\u002D',
                t: 'text',
                f: ''
            };
    APY.cells.s0r3c2 = {v: 50000,i: 50000,t: 'number',
                f: '$0,0.00'
            };                APY.cells.s0r3c4 = {v: 'Pre\u002DPaids',
                t: 'text',
                f: ''
            };
                APY.cells.s0r3c5 = {v: '\u002B',
                t: 'text',
                f: ''
            };
    APY.cells.s0r3c6 = {v: 0,t: 'number',
                f: '$0,0.00'
            };    APY.cells.s0r3c8 = {v: '2024\u002D12\u002D31',t: 'date',
                f: 'M/DD/YYYY'
            };
            APY.cells.s0r3c9 = {v: '2024\u002D06\u002D24',t: 'date',
                f: 'M/DD/YYYY'
            };
                        APY.cells.s0r4c0 = {v: 'Loan\u0020Amount',
                t: 'text',
                f: ''
            };
    APY.cells.s0r4c2 = {v: 200000,t: 'number',
                f: '$0,0.00'
            };                APY.cells.s0r4c4 = {v: 'Total\u0020Costs',
                t: 'text',
                f: ''
            };
                APY.cells.s0r4c5 = {v: '\u003D',
                t: 'text',
                f: ''
            };
    APY.cells.s0r4c6 = {v: 253610.95,t: 'number',
                f: '$0,0.00'
            };                APY.cells.s0r4c10 = {v: 'calender\u0020calcs',
                t: 'text',
                f: ''
            };
                APY.cells.s0r5c0 = {v: 'Annual\u0020Taxes',
                t: 'text',
                f: ''
            };
    APY.cells.s0r5c2 = {v: 3500,i: 3500,t: 'number',
                f: '$0,0.00'
            };                APY.cells.s0r5c8 = {v: '1',
                t: 'number',
                f: ''
            };
    APY.cells.s0r5c9 = {v: '2024\u002D12\u002D31',t: 'date',
                f: 'M/DD/YY'
            };
            APY.cells.s0r5c10 = {v: 7,t: 'number',
                f: '0.[000000000]'
            };                APY.cells.s0r6c0 = {v: 'Closing\u0020Date',
                t: 'text',
                f: ''
            };
    APY.cells.s0r6c2 = {v: '2024\u002D01\u002D01',i: '2024\u002D01\u002D01',t: 'date',
                f: 'M/DD/YYYY'
            };
                        APY.cells.s0r6c4 = {v: 'Less\u003A',
                t: 'text',
                f: ''
            };
                APY.cells.s0r6c8 = {v: '2',
                t: 'number',
                f: ''
            };
    APY.cells.s0r6c9 = {v: '2025\u002D01\u002D31',t: 'date',
                f: 'M/DD/YY'
            };
            APY.cells.s0r6c10 = {v: 1,t: 'number',
                f: ''
            };                APY.cells.s0r7c4 = {v: 'Loan\u0020Amt',
                t: 'text',
                f: ''
            };
                APY.cells.s0r7c5 = {v: '\u002D',
                t: 'text',
                f: ''
            };
    APY.cells.s0r7c6 = {v: 200000,t: 'number',
                f: '$0,0.00'
            };                APY.cells.s0r7c8 = {v: '3',
                t: 'number',
                f: ''
            };
    APY.cells.s0r7c9 = {v: '2025\u002D02\u002D28',t: 'date',
                f: 'M/DD/YY'
            };
                        APY.cells.s0r8c0 = {v: 'ESTIMATED\u0020Closing\u0020Costs\u003A',
                t: 'text',
                f: ''
            };
                APY.cells.s0r8c4 = {v: 'Earnest\u0020Money',
                t: 'text',
                f: ''
            };
                APY.cells.s0r8c5 = {v: '\u002D',
                t: 'text',
                f: ''
            };
    APY.cells.s0r8c6 = {v: 0,i: 0,t: 'number',
                f: '$0,0.00'
            };                APY.cells.s0r8c8 = {v: '4',
                t: 'number',
                f: ''
            };
    APY.cells.s0r8c9 = {v: '2025\u002D03\u002D31',t: 'date',
                f: 'M/DD/YY'
            };
                        APY.cells.s0r9c0 = {v: 'Credit\u0020Report',
                t: 'text',
                f: ''
            };
    APY.cells.s0r9c2 = {v: 94,i: 94,t: 'number',
                f: '$0,0.00'
            };                APY.cells.s0r9c4 = {v: 'Seller\u0020Consessions',
                t: 'text',
                f: ''
            };
                APY.cells.s0r9c5 = {v: '\u002D',
                t: 'text',
                f: ''
            };
    APY.cells.s0r9c6 = {v: 0,i: 0,t: 'number',
                f: '$0,0.00'
            };                APY.cells.s0r9c8 = {v: '5',
                t: 'number',
                f: ''
            };
    APY.cells.s0r9c9 = {v: '2025\u002D04\u002D30',t: 'date',
                f: 'M/DD/YY'
            };
                        APY.cells.s0r10c0 = {v: 'Appraisal',
                t: 'text',
                f: ''
            };
    APY.cells.s0r10c2 = {v: 500,i: 500,t: 'number',
                f: '$0,0.00'
            };                APY.cells.s0r10c4 = {v: 'Tax\u0020Credit',
                t: 'text',
                f: ''
            };
                APY.cells.s0r10c5 = {v: '\u002D',
                t: 'text',
                f: ''
            };
    APY.cells.s0r10c6 = {v: 2041.66666666667,t: 'number',
                f: '$0,0.00'
            };                APY.cells.s0r10c8 = {v: '6',
                t: 'number',
                f: ''
            };
    APY.cells.s0r10c9 = {v: '2025\u002D05\u002D31',t: 'date',
                f: 'M/DD/YY'
            };
                        APY.cells.s0r11c0 = {v: 'Loan\u0020Fees\/Origination',
                t: 'text',
                f: ''
            };
    APY.cells.s0r11c2 = {v: 1000,i: 1000,t: 'number',
                f: '$0,0.00'
            };                APY.cells.s0r11c4 = {v: 'Other\u0020\u003A',
                t: 'text',
                f: ''
            };
                APY.cells.s0r11c5 = {v: '\u002D',
                t: 'text',
                f: ''
            };
    APY.cells.s0r11c6 = {v: 0,i: 0,t: 'number',
                f: '$0,0.00'
            };                APY.cells.s0r11c8 = {v: '7',
                t: 'number',
                f: ''
            };
    APY.cells.s0r11c9 = {v: '2025\u002D06\u002D30',t: 'date',
                f: 'M/DD/YY'
            };
                        APY.cells.s0r12c0 = {v: 'Loan\u0020Discount\u0020\u0028if\u0020applicable\u0029',
                t: 'text',
                f: ''
            };
    APY.cells.s0r12c2 = {v: 0,i: 0,t: 'number',
                f: '$0,0.00'
            };                APY.cells.s0r12c5 = {v: '\u002D',
                t: 'text',
                f: ''
            };
    APY.cells.s0r12c6 = {v: 0,i: 0,t: 'number',
                f: '$0,0.00'
            };                APY.cells.s0r12c8 = {v: '8',
                t: 'number',
                f: ''
            };
    APY.cells.s0r12c9 = {v: '2025\u002D07\u002D31',t: 'date',
                f: 'M/DD/YY'
            };
                        APY.cells.s0r13c0 = {v: 'Premium\u0020for\u0020Lender\u0020\u0027s\u0020Coverage',
                t: 'text',
                f: ''
            };
    APY.cells.s0r13c2 = {v: 490,i: 490,t: 'number',
                f: '$0,0.00'
            };                APY.cells.s0r13c4 = {v: 'Total\u0020Costs',
                t: 'text',
                f: ''
            };
                APY.cells.s0r13c5 = {v: '\u002D',
                t: 'text',
                f: ''
            };
    APY.cells.s0r13c6 = {v: 202041.666666667,t: 'number',
                f: '$0,0.00'
            };                APY.cells.s0r13c8 = {v: '9',
                t: 'number',
                f: ''
            };
    APY.cells.s0r13c9 = {v: '2025\u002D08\u002D31',t: 'date',
                f: 'M/DD/YY'
            };
                        APY.cells.s0r14c0 = {v: 'Mortgage\u0020Reg.\u0020Tax\u0020\u00280.1\u0025\u0029',
                t: 'text',
                f: ''
            };
    APY.cells.s0r14c2 = {v: 200,t: 'number',
                f: '$0,0.00'
            };                APY.cells.s0r14c8 = {v: '10',
                t: 'number',
                f: ''
            };
    APY.cells.s0r14c9 = {v: '2025\u002D09\u002D30',t: 'date',
                f: 'M/DD/YY'
            };
                        APY.cells.s0r15c0 = {v: 'Closing\u0020\/\u0020Escrow\u0020Fee',
                t: 'text',
                f: ''
            };
    APY.cells.s0r15c2 = {v: 570,i: 570,t: 'number',
                f: '$0,0.00'
            };                APY.cells.s0r15c4 = {v: 'Due\u0020at\u0020Closing',
                t: 'text',
                f: ''
            };
    APY.cells.s0r15c6 = {v: 51569.2833333334,t: 'number',
                f: '$0,0.00'
            };                APY.cells.s0r15c8 = {v: '11',
                t: 'number',
                f: ''
            };
    APY.cells.s0r15c9 = {v: '2025\u002D10\u002D31',t: 'date',
                f: 'M/DD/YY'
            };
                        APY.cells.s0r16c0 = {v: 'Record\u0020Deed\u0020\u0026\u0020Mortgage',
                t: 'text',
                f: ''
            };
    APY.cells.s0r16c2 = {v: 50,i: 50,t: 'number',
                f: '$0,0.00'
            };                APY.cells.s0r16c8 = {v: '12',
                t: 'number',
                f: ''
            };
    APY.cells.s0r16c9 = {v: '2025\u002D11\u002D30',t: 'date',
                f: 'M/DD/YY'
            };
                        APY.cells.s0r17c0 = {v: 'Transaction\u0020Processing\u0020Fee',
                t: 'text',
                f: ''
            };
    APY.cells.s0r17c2 = {v: 449,i: 449,t: 'number',
                f: '$0,0.00'
            };                APY.cells.s0r17c4 = {v: 'Estimated\u0020Monthly\u0020Payment\u003A',
                t: 'text',
                f: ''
            };
                APY.cells.s0r18c0 = {v: 'Title\u0020Examination',
                t: 'text',
                f: ''
            };
    APY.cells.s0r18c2 = {v: 150,i: 150,t: 'number',
                f: '$0,0.00'
            };                APY.cells.s0r18c4 = {v: 'Interest\u0020Rate',
                t: 'text',
                f: ''
            };
    APY.cells.s0r18c6 = {v: 5,i: 5,t: 'number',
                f: '0,0'
            };                APY.cells.s0r19c0 = {v: 'Title\u0020\u002D\u0020Courier\/Wire\/E\u002DMail\u0020Fee',
                t: 'text',
                f: ''
            };
    APY.cells.s0r19c2 = {v: 75,i: 75,t: 'number',
                f: '$0,0.00'
            };                APY.cells.s0r19c4 = {v: 'Term\u0020Years',
                t: 'text',
                f: ''
            };
    APY.cells.s0r19c6 = {v: 30,i: 30,t: 'number',
                f: '0,0'
            };                APY.cells.s0r20c0 = {v: 'Flood\u0020Certificate',
                t: 'text',
                f: ''
            };
    APY.cells.s0r20c2 = {v: 8,i: 8,t: 'number',
                f: '$0,0.00'
            };                APY.cells.s0r20c4 = {v: 'P\u0026I',
                t: 'text',
                f: ''
            };
    APY.cells.s0r20c6 = {v: 1073.64324602428,t: 'number',
                f: '$0,0.00'
            };                APY.cells.s0r21c0 = {v: 'MERS\u0020Fee',
                t: 'text',
                f: ''
            };
    APY.cells.s0r21c2 = {v: 24.95,i: 24.95,t: 'number',
                f: '$0,0.00'
            };                APY.cells.s0r21c4 = {v: 'Homeowners\u0020Ins',
                t: 'text',
                f: ''
            };
    APY.cells.s0r21c6 = {v: 0,t: 'number',
                f: '$0,0.00'
            };                APY.cells.s0r22c0 = {v: 'Home\u0020Warranty',
                t: 'text',
                f: ''
            };
    APY.cells.s0r22c2 = {v: 0,i: 0,t: 'number',
                f: '$0,0.00'
            };                APY.cells.s0r22c4 = {v: 'Property\u0020Taxes',
                t: 'text',
                f: ''
            };
    APY.cells.s0r22c6 = {v: 291.666666666667,t: 'number',
                f: '$0,0.00'
            };                APY.cells.s0r23c0 = {v: 'Other\u0020\u003A',
                t: 'text',
                f: ''
            };
    APY.cells.s0r23c2 = {v: 0,i: 0,t: 'number',
                f: '$0,0.00'
            };                APY.cells.s0r23c4 = {v: 'PMI',
                t: 'text',
                f: ''
            };
    APY.cells.s0r23c6 = {v: '',i: '',t: 'text',
                f: '$0,0.00'
            };
                        APY.cells.s0r25c0 = {v: 'Total\u0020ESTIMATED\u0020Closing\u0020Costs\u003A',
                t: 'text',
                f: ''
            };
    APY.cells.s0r25c2 = {v: 3610.95,t: 'number',
                f: '$0,0.00'
            };                APY.cells.s0r25c4 = {v: 'Total\u0020Estimated\u0020Pmt.',
                t: 'text',
                f: ''
            };
    APY.cells.s0r25c6 = {v: 1365.30991269094,t: 'number',
                f: '$0,0.00'
            };                APY.cells.s0r27c0 = {v: 'PRE\u002DPAIDS',
                t: 'text',
                f: ''
            };
                APY.cells.s0r27c4 = {v: 'The\u0020costs\u0020shown\u0020on\u0020this\u0020sheet\u0020are\u0020approximations\u0020based\u0020on\u0020information\u0020available\u0020at\u0020the\u0020time,\u0020and\u0020are\u0020subject\u0020to\u0020change\u0020at\u0020closing.\u0020We\u0020assume\u0020no\u0020liability\u0020for\u0020the\u0020accuracy\u0020of\u0020estimates.',
                t: 'text',
                f: ''
            };
                APY.cells.s0r28c0 = {v: '1st\u0020Year\u0020Homeowners\u0020Ins.',
                t: 'text',
                f: ''
            };
    APY.cells.s0r28c2 = {v: 0,i: 0,t: 'number',
                f: '$0,0.00'
            };                APY.cells.s0r29c0 = {v: 'Home\u0020Inspection',
                t: 'text',
                f: ''
            };
    APY.cells.s0r29c2 = {v: 0,i: 0,t: 'number',
                f: '$0,0.00'
            };                APY.cells.s0r30c0 = {v: 'Other\u0020\u003A',
                t: 'text',
                f: ''
            };
    APY.cells.s0r30c2 = {v: 0,i: 0,t: 'number',
                f: '$0,0.00'
            };                APY.cells.s0r31c0 = {v: 'Total\u0020Pre\u002Dpaids',
                t: 'text',
                f: ''
            };
    APY.cells.s0r31c2 = {v: 0,t: 'number',
                f: '$0,0.00'
            };    
        
    APY.formulas = {
                s0r1c6: function() { APY.set('s0r1c6',formulajs.SUM(APY.RANGE([0,1,2]))) },
                    s0r2c6: function() { APY.set('s0r2c6',formulajs.SUM(APY.RANGE([0,25,2]))) },
                    s0r3c6: function() { APY.set('s0r3c6',formulajs.SUM(APY.RANGE([0,31,2]))) },
                    s0r3c8: function() { APY.set('s0r3c8',formulajs.DATE(formulajs.YEAR(APY.RANGE([0,3,9])),formulajs.MONTH(1)+1,0)) },
                    s0r3c9: function() { APY.set('s0r3c9',formulajs.TODAY()) },
                    s0r4c2: function() { APY.set('s0r4c2',formulajs.SUM(APY.RANGE([0,1,2])+APY.RANGE([0,2,2])-APY.RANGE([0,3,2]))) },
                    s0r4c6: function() { APY.set('s0r4c6',formulajs.SUM(APY.RANGE([0,1,6],[0,3,6]))) },
                    s0r5c9: function() { APY.set('s0r5c9',APY.RANGE([0,3,8])) },
                    s0r5c10: function() { APY.set('s0r5c10',formulajs.IF(APY.RANGE([0,6,10])<6,APY.RANGE([0,6,10])+6,APY.RANGE([0,6,10]))) },
                    s0r6c9: function() { APY.set('s0r6c9',formulajs.DATE(formulajs.YEAR(APY.RANGE([0,5,9])),formulajs.MONTH(APY.RANGE([0,5,9]))+2,0)) },
                    s0r6c10: function() { APY.set('s0r6c10',formulajs.MONTH(APY.RANGE([0,6,2]))) },
                    s0r7c6: function() { APY.set('s0r7c6',formulajs.SUM(APY.RANGE([0,4,2]))) },
                    s0r7c9: function() { APY.set('s0r7c9',formulajs.DATE(formulajs.YEAR(APY.RANGE([0,6,9])),formulajs.MONTH(APY.RANGE([0,6,9]))+2,0)) },
                    s0r8c9: function() { APY.set('s0r8c9',formulajs.DATE(formulajs.YEAR(APY.RANGE([0,7,9])),formulajs.MONTH(APY.RANGE([0,7,9]))+2,0)) },
                    s0r9c9: function() { APY.set('s0r9c9',formulajs.DATE(formulajs.YEAR(APY.RANGE([0,8,9])),formulajs.MONTH(APY.RANGE([0,8,9]))+2,0)) },
                    s0r10c6: function() { APY.set('s0r10c6',APY.RANGE([0,5,2])/12*APY.RANGE([0,5,10])) },
                    s0r10c9: function() { APY.set('s0r10c9',formulajs.DATE(formulajs.YEAR(APY.RANGE([0,9,9])),formulajs.MONTH(APY.RANGE([0,9,9]))+2,0)) },
                    s0r11c9: function() { APY.set('s0r11c9',formulajs.DATE(formulajs.YEAR(APY.RANGE([0,10,9])),formulajs.MONTH(APY.RANGE([0,10,9]))+2,0)) },
                    s0r12c9: function() { APY.set('s0r12c9',formulajs.DATE(formulajs.YEAR(APY.RANGE([0,11,9])),formulajs.MONTH(APY.RANGE([0,11,9]))+2,0)) },
                    s0r13c6: function() { APY.set('s0r13c6',formulajs.SUM(APY.RANGE([0,7,6],[0,12,6]))) },
                    s0r13c9: function() { APY.set('s0r13c9',formulajs.DATE(formulajs.YEAR(APY.RANGE([0,12,9])),formulajs.MONTH(APY.RANGE([0,12,9]))+2,0)) },
                    s0r14c2: function() { APY.set('s0r14c2',APY.RANGE([0,4,2])*0.001) },
                    s0r14c9: function() { APY.set('s0r14c9',formulajs.DATE(formulajs.YEAR(APY.RANGE([0,13,9])),formulajs.MONTH(APY.RANGE([0,13,9]))+2,0)) },
                    s0r15c6: function() { APY.set('s0r15c6',APY.RANGE([0,4,6])-APY.RANGE([0,13,6])) },
                    s0r15c9: function() { APY.set('s0r15c9',formulajs.DATE(formulajs.YEAR(APY.RANGE([0,14,9])),formulajs.MONTH(APY.RANGE([0,14,9]))+2,0)) },
                    s0r16c9: function() { APY.set('s0r16c9',formulajs.DATE(formulajs.YEAR(APY.RANGE([0,15,9])),formulajs.MONTH(APY.RANGE([0,15,9]))+2,0)) },
                    s0r20c6: function() { APY.set('s0r20c6',formulajs.PMT(APY.RANGE([0,18,6])/12/100,APY.RANGE([0,19,6])*12,-APY.RANGE([0,7,6]))) },
                    s0r21c6: function() { APY.set('s0r21c6',formulajs.SUM(APY.RANGE([0,28,2])/12)) },
                    s0r22c6: function() { APY.set('s0r22c6',formulajs.SUM(APY.RANGE([0,5,2])/12)) },
                    s0r25c2: function() { APY.set('s0r25c2',formulajs.SUM(APY.RANGE([0,9,2],[0,23,2]))) },
                    s0r25c6: function() { APY.set('s0r25c6',formulajs.SUM(APY.RANGE([0,20,6],[0,23,6]))) },
                    s0r31c2: function() { APY.set('s0r31c2',formulajs.SUM(APY.RANGE([0,28,2],[0,30,2]))) },
        }
    ;

    APY.calculate = function () {
                        // Step 1
                APY.formulas.s0r1c6();
                APY.formulas.s0r3c9();
                APY.formulas.s0r4c2();
                APY.formulas.s0r6c10();
                APY.formulas.s0r7c6();
                APY.formulas.s0r14c2();
                APY.formulas.s0r20c6();
                APY.formulas.s0r21c6();
                APY.formulas.s0r22c6();
                APY.formulas.s0r25c2();
                APY.formulas.s0r25c6();
                APY.formulas.s0r31c2();
                        // Step 2
                APY.formulas.s0r2c6();
                APY.formulas.s0r3c6();
                APY.formulas.s0r3c8();
                APY.formulas.s0r4c6();
                APY.formulas.s0r5c9();
                APY.formulas.s0r5c10();
                APY.formulas.s0r6c9();
                APY.formulas.s0r7c9();
                APY.formulas.s0r8c9();
                APY.formulas.s0r9c9();
                APY.formulas.s0r10c6();
                APY.formulas.s0r10c9();
                APY.formulas.s0r11c9();
                APY.formulas.s0r12c9();
                APY.formulas.s0r13c6();
                APY.formulas.s0r13c9();
                APY.formulas.s0r14c9();
                APY.formulas.s0r15c6();
                APY.formulas.s0r15c9();
                APY.formulas.s0r16c9();
                                
        
            };
    
    APY.getValue = function (value, type, format) {
        type = type ? type : 'text';
        let returnedValue;
        if (type === 'boolean') {
            returnedValue = (value === 'true');
        } else if (type === 'number') {
            returnedValue = numeral(value).value();
        } else if (type === 'date') {
            const m = format ? moment(value, format) : moment(value);
            if (!!value && m.isValid()) {
                returnedValue = m.toDate();
            } else {
                returnedValue = null;
            }
        } else {
            returnedValue = value;
        }

        return returnedValue;
};

APY.set = function (cellId, value, parseValue = false) {
        const isCellAddress = /s\d*r\d*c\d*/.test(cellId);
        let cell;
        if (isCellAddress) {
            cell = APY.cells[cellId];
            if (!cell) {
                return;
            }
        } else {
            const cellIds = Object.keys(APY.cells).filter(function (cell) {
                return APY.cells[cell].name === cellId;
            });

            if (cellIds.length > 0) {
                cell = APY.cells[cellIds[0]];
                cellId = cellIds[0];
            } else {
                return;
            }
        }

        if (parseValue) {
            value = APY.getValue(value, cell.t, '');
        }

        cell.v = value;

        const cellElement = document.getElementById(cellId);
        if (!cellElement) {
            return;
        }

        if (APY.config.clearZeroInputs && cell.v === 0 && cellElement.matches('input')) {
            cellElement.value = null;
            return;
        }

        const displayedValue = APY.formatValue(value, cell.t, cell.f);
        if (cellElement.matches('div')) {
            cellElement.innerHTML = displayedValue;
            const output = document.getElementById(cellId + '-out');
            if (output) {
                output.value = displayedValue;
            }
        } else {
            cellElement.value = displayedValue;
        }
};

APY.setMatrix = function (cellId, value, matrixColumnsSpanned = 1, matrixRowsSpanned = 1) {
        for (let collOffset = 0; collOffset < matrixColumnsSpanned; collOffset++) {
            for (let rowOffSet = 0; rowOffSet < matrixRowsSpanned; rowOffSet++) {
                const regex = /s(\d+)r(\d+)c(\d+)/;
                const result = cellId.replace(regex, function (match, sheet, row, col) {
                    return 's' + sheet + 'r' + (parseInt(row, 10) + rowOffSet) + 'c' + (parseInt(col, 10) + collOffset);
                });

                APY.set(result, value[rowOffSet + collOffset])
            }
        }
};

APY.formatValue = function (value, type, format) {
        if (value instanceof Error) {
            return value.toString();
        }

        let formattedValue;
        if (value === null) {
            formattedValue = '';
        } else {
            formattedValue = value + '';
        }

        if (type === 'number') {
            if (value === null) {
                return '';
            }
            format = format ? format : '0.[000000000]';
            value = Math.abs(value) <= 1e-7 ? 0 : value;
            formattedValue = numeral(value).format(format);
        }

        if (type === 'date') {
            if (!value) {
                return value;
            }

            formattedValue = moment(value).format(format);
        }

        return formattedValue;
};

APY.getInputs = function () {
        const inputs = {};
        const applicationInputs = document.querySelectorAll('.application input:not([type="hidden"]), .application select, .application textarea');
        applicationInputs.forEach(function (inputElement) {
            let cellId = inputElement.id
            const cell = APY.cells[cellId];

            if (cell) {
                let value = cell.v;

                if (value instanceof Date) {
                    value = APY.dateToString(value);
                }

                // Use named range instead of cell location id
                if (cell.name) {
                    cellId = cell.name;
                }

                inputs[cellId] = {
                    value: value,
                    type: cell.t
                };
            }
        });

        return inputs;
};

APY.setInputs = function (data) {
        Object.keys(data).forEach(function (key) {
            if (data.hasOwnProperty(key)) {
                let value = data[key]?.value ?? data[key];
                APY.set(key, value, true);
            }
        });
};

APY.dateToString = function (date) {
        return date.getFullYear() + '-' +
            ((date.getMonth() + 1) < 10 ? '0' : '') +
            (date.getMonth() + 1) + '-' +
            (date.getDate() < 10 ? '0' : '') +
            date.getDate() +
            'T' +
            (date.getHours() < 10 ? '0' : '') +
            date.getHours() +
            ':' +
            (date.getMinutes() < 10 ? '0' : '') +
            date.getMinutes() +
            ':' +
            (date.getSeconds() < 10 ? '0' : '') +
            date.getSeconds();
};

APY.RANGE = function () {
        let value = null;
        if (arguments.length === 1) {
            const cellId = 's' + arguments[0][0] + 'r' + arguments[0][1] + 'c' + arguments[0][2];

            if (APY.cells && APY.cells.hasOwnProperty(cellId)) {
                value = APY.cells[cellId].v;
            }

            return value;
        } else if (arguments.length === 2) {
            const values = [];
            const head = arguments[0];
            const tail = arguments[1];
            for (let i = 0; i <= (tail[1] - head[1]); i++) {
                const row = [];
                for (let j = 0; j <= tail[2] - head[2]; j++) {
                    value = null;
                    const cellId = 's' + head[0] + 'r' + (head[1] + i) + 'c' + (head[2] + j);

                    if (APY.cells && APY.cells.hasOwnProperty(cellId)) {
                        value = APY.cells[cellId].v;
                    }
                    row.push(value);
                }
                values.push(row);
            }

            return values;
        }
};

APY.onSaveButtonClicked = function () {
        const blob = new Blob([JSON.stringify(APY.getInputs())], {type: 'application/json'});
        const fileName = document.title + ' ' + (new Date()).toISOString().slice(0, 10) + '.json';
        const url = window.URL.createObjectURL(blob);

        if (window.navigator && window.navigator.msSaveOrOpenBlob) {
            window.navigator.msSaveOrOpenBlob(blob, fileName);
        } else {
            const a = document.createElement('a');
            a.style.display = 'none';
            a.href = url;
            a.download = fileName;
            document.body.appendChild(a);
            a.click();
            window.URL.revokeObjectURL(url);
        }
};

APY.onDataFileSelected = function () {
        const file = document.getElementById('data-file');
        const blob = file.files[0];
        if (blob) {
            const reader = new FileReader();

            reader.onload = function (evt) {
                APY.setInputs(JSON.parse(evt.target.result));
                APY.calculate();
            };

            reader.onerror = function (evt) {
                console.error("An error occurred reading the file", evt);
            };

            reader.readAsText(blob, "UTF-8");
        }
};

APY.onCalculateButtonClicked = function () {
        APY.calculate();
};

APY.onSendButtonClicked = function () {
        document.querySelector('form.application').requestSubmit();
};

APY.onResetButtonClicked = function () {
        APY.resetState();
        APY.calculate();
    }

    APY.onSaveButtonClicked = function () {
        const blob = new Blob([JSON.stringify(APY.getInputs())], {type: 'application/json'});
        const fileName = document.title + ' ' + (new Date()).toISOString().slice(0, 10) + '.json';
        const url = window.URL.createObjectURL(blob);

        if (window.navigator && window.navigator.msSaveOrOpenBlob) {
            window.navigator.msSaveOrOpenBlob(blob, fileName);
        } else {
            const a = document.createElement('a');
            a.style.display = 'none';
            a.href = url;
            a.download = fileName;
            document.body.appendChild(a);
            a.click();
            window.URL.revokeObjectURL(url);
        }
};

formulajs.OFFSET = function (reference, rows, cols, height, width) {
        rows = rows >= 0 ? rows : 0;
        cols = cols >= 0 ? cols : 0;
        height = height >= 1 ? height : 1;
        width = width >= 1 ? width : 1;

        if (width === 1 && height === 1) {
            return APY.RANGE([reference[0], reference[1] + rows, reference[2] + cols]);
        } else {
            return APY.RANGE(
                [reference[0], reference[1] + rows, reference[2] + cols],
                [reference[0], reference[1] + rows + height - 1, reference[2] + cols + width - 1]
            );
        }
};

formulajs.HYPERLINK = function (url, text) {
        text = text === undefined ? url : text;
        return '<a href="' + url + '" target="_blank">' + text + '</a>';
};

// Expose Appizy App API called APY :)
window.APY = APY;


    APY.bindInputs = function () {
        applicationInputs.forEach(function (inputElement) {
            inputElement.addEventListener('change', function (event) {
                const cell = APY.cells[event.target.id];

                if (inputElement.type === 'checkbox') {
                    cell.v = event.target.checked;
                    inputElement.checked = event.target.checked;
                } else {
                    cell.v = APY.getValue(event.target.value, cell.t, cell.f);
                    inputElement.value = APY.formatValue(cell.v, cell.t, cell.f);
                }

                                APY.calculate();
                            })
        });
    }

    APY.resetState = function () {
        // Display formatted values in input fields on application start
        applicationInputs.forEach(function (inputElement) {
            var cell = APY.cells[inputElement.id];
            // Recompute Office value in Javascript value
            cell.v = APY.getValue(cell.i, cell.t);

            
            if (inputElement.type === 'checkbox') {
                inputElement.checked = cell.v;
            } else {
                inputElement.value = APY.formatValue(cell.v, cell.t, cell.f);
            }
        });
    }

    APY.init = function () {
        APY.bindInputs();
        APY.resetState();
        APY.calculate();
    };

    window.addEventListener('load', APY.init);

    
    
    
    
    
        document.querySelectorAll(".appizy a.switch-tab").forEach(function (anchor) {
        anchor.addEventListener('click', function (event) {
            const href = anchor.getAttribute("href");
            const navAnchor = document.querySelector(href);
            bootstrap.Tab.getOrCreateInstance(navAnchor).show();
            event.preventDefault();
        });
    });
    });

