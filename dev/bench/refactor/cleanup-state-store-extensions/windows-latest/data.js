window.BENCHMARK_DATA = {
  "lastUpdate": 1696575625916,
  "repoUrl": "https://github.com/greymistcube/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "greymistcube@gmail.com",
            "name": "Say Cheong",
            "username": "greymistcube"
          },
          "committer": {
            "email": "greymistcube@gmail.com",
            "name": "Say Cheong",
            "username": "greymistcube"
          },
          "distinct": true,
          "id": "a7262433136bc8624a3b123bb7834f73ccd77f45",
          "message": "Remove more",
          "timestamp": "2023-10-06T14:17:58+09:00",
          "tree_id": "57f5b62f0971a37b87bbbfbace9bff439ab8d517",
          "url": "https://github.com/greymistcube/libplanet/commit/a7262433136bc8624a3b123bb7834f73ccd77f45"
        },
        "date": 1696570776850,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1294784.4444444445,
            "unit": "ns",
            "range": "± 104619.44295967891"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2455665.11627907,
            "unit": "ns",
            "range": "± 132640.1711552875"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1879838.383838384,
            "unit": "ns",
            "range": "± 156132.5174377298"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7542148.148148148,
            "unit": "ns",
            "range": "± 208925.06822077176"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 44183.78378378379,
            "unit": "ns",
            "range": "± 2220.146053879192"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7256793.333333333,
            "unit": "ns",
            "range": "± 43873.33174144902"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 18230700,
            "unit": "ns",
            "range": "± 167480.23764014666"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 45946276.92307692,
            "unit": "ns",
            "range": "± 282981.28958715673"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 90749953.33333333,
            "unit": "ns",
            "range": "± 735751.7922570925"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 180637873.33333334,
            "unit": "ns",
            "range": "± 1090472.649468154"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4411725.600961538,
            "unit": "ns",
            "range": "± 6297.686481277378"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1406640.6510416667,
            "unit": "ns",
            "range": "± 3201.8248071189396"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1007372.7957589285,
            "unit": "ns",
            "range": "± 995.8782449421385"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2549353.1808035714,
            "unit": "ns",
            "range": "± 2992.5325577784893"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 812431.1979166666,
            "unit": "ns",
            "range": "± 893.521617833936"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 739306.0825892857,
            "unit": "ns",
            "range": "± 675.5600591172756"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2888628.378378378,
            "unit": "ns",
            "range": "± 97931.56946203455"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3063768.1818181816,
            "unit": "ns",
            "range": "± 73735.74849461153"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3764846.6666666665,
            "unit": "ns",
            "range": "± 48029.58711143828"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3449219.35483871,
            "unit": "ns",
            "range": "± 87291.00151926634"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 9062701.818181818,
            "unit": "ns",
            "range": "± 386157.89348443557"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 239373.68421052632,
            "unit": "ns",
            "range": "± 6948.057640712466"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 231895.65217391305,
            "unit": "ns",
            "range": "± 8131.118729144201"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 197813.04347826086,
            "unit": "ns",
            "range": "± 4890.650109957132"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3707507.6923076925,
            "unit": "ns",
            "range": "± 26441.36473843151"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3370370,
            "unit": "ns",
            "range": "± 21904.637473766667"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 16527.659574468085,
            "unit": "ns",
            "range": "± 1401.6238090939994"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 78092.30769230769,
            "unit": "ns",
            "range": "± 5661.610111958352"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 62118.75,
            "unit": "ns",
            "range": "± 757.3803535872844"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 67941.93548387097,
            "unit": "ns",
            "range": "± 8178.28942703266"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3972.9166666666665,
            "unit": "ns",
            "range": "± 462.14127861889676"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 15148.91304347826,
            "unit": "ns",
            "range": "± 1228.0149769299485"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "greymistcube@gmail.com",
            "name": "Say Cheong",
            "username": "greymistcube"
          },
          "committer": {
            "email": "greymistcube@gmail.com",
            "name": "Say Cheong",
            "username": "greymistcube"
          },
          "distinct": true,
          "id": "4bc58cedb91aad1cea3054870db6ea9944b1bc9a",
          "message": "Changelog",
          "timestamp": "2023-10-06T15:42:32+09:00",
          "tree_id": "983f3967a5ba2a637eee58e9b864e38fff9e71d1",
          "url": "https://github.com/greymistcube/libplanet/commit/4bc58cedb91aad1cea3054870db6ea9944b1bc9a"
        },
        "date": 1696575562341,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1375902.0202020202,
            "unit": "ns",
            "range": "± 116671.92357623653"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2606184.8484848486,
            "unit": "ns",
            "range": "± 173003.79101876516"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2026558.9473684211,
            "unit": "ns",
            "range": "± 132219.47461310416"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 9000801.111111112,
            "unit": "ns",
            "range": "± 552302.347277051"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 53167.708333333336,
            "unit": "ns",
            "range": "± 4311.319123855169"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7462500,
            "unit": "ns",
            "range": "± 104753.575913506"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20696335,
            "unit": "ns",
            "range": "± 417529.15344163"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 52611188.461538464,
            "unit": "ns",
            "range": "± 1400831.129673216"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 105221580,
            "unit": "ns",
            "range": "± 1961938.2425113618"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 209165033.33333334,
            "unit": "ns",
            "range": "± 2848418.9744153726"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4579504.166666667,
            "unit": "ns",
            "range": "± 22311.301194666266"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1434014.5228794643,
            "unit": "ns",
            "range": "± 4763.100314711881"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1080691.5104166667,
            "unit": "ns",
            "range": "± 4429.144412128645"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2693120.546875,
            "unit": "ns",
            "range": "± 9872.603390359316"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 836190.4361979166,
            "unit": "ns",
            "range": "± 3454.2867392636454"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 769428.0203683035,
            "unit": "ns",
            "range": "± 1351.374339297022"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3308738.709677419,
            "unit": "ns",
            "range": "± 99060.57634067266"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3373540.9638554216,
            "unit": "ns",
            "range": "± 174668.21442599955"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4147584.210526316,
            "unit": "ns",
            "range": "± 142756.04313675337"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4142295.3846153845,
            "unit": "ns",
            "range": "± 192252.60030000992"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 10308177.586206896,
            "unit": "ns",
            "range": "± 450992.39385312214"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 262437.14285714284,
            "unit": "ns",
            "range": "± 12655.905093963527"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 252183.33333333334,
            "unit": "ns",
            "range": "± 4711.3338521767555"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 239247.47474747474,
            "unit": "ns",
            "range": "± 18161.196262374302"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4281650,
            "unit": "ns",
            "range": "± 53643.219515610734"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3910064.285714286,
            "unit": "ns",
            "range": "± 63766.55268836667"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 24247.252747252747,
            "unit": "ns",
            "range": "± 2225.6754609851046"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 95358.76288659793,
            "unit": "ns",
            "range": "± 8114.374495523869"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 76410.41666666667,
            "unit": "ns",
            "range": "± 5515.9763971608045"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 86193.75,
            "unit": "ns",
            "range": "± 9781.968508165259"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6184.693877551021,
            "unit": "ns",
            "range": "± 1082.603966657209"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 21534.736842105263,
            "unit": "ns",
            "range": "± 2527.119646278534"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "greymistcube@gmail.com",
            "name": "Say Cheong",
            "username": "greymistcube"
          },
          "committer": {
            "email": "greymistcube@gmail.com",
            "name": "Say Cheong",
            "username": "greymistcube"
          },
          "distinct": true,
          "id": "696d8b7b6554142aa07f2a9a8eb0088e5a5375b2",
          "message": "Remove unnecessary code",
          "timestamp": "2023-10-06T15:40:27+09:00",
          "tree_id": "b786885bc365a6a510c9b491a85425a6cc814ab1",
          "url": "https://github.com/greymistcube/libplanet/commit/696d8b7b6554142aa07f2a9a8eb0088e5a5375b2"
        },
        "date": 1696575599408,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1722137.5,
            "unit": "ns",
            "range": "± 191165.9985457665"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3265818.947368421,
            "unit": "ns",
            "range": "± 228639.65856116317"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2572653.6842105263,
            "unit": "ns",
            "range": "± 218129.20181188648"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 11407784.615384616,
            "unit": "ns",
            "range": "± 977712.9024097316"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 61052.083333333336,
            "unit": "ns",
            "range": "± 11603.547362919184"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9377066.304347826,
            "unit": "ns",
            "range": "± 706529.2389954027"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 25486758.620689657,
            "unit": "ns",
            "range": "± 723662.111622565"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 64548207.89473684,
            "unit": "ns",
            "range": "± 1389045.9028955367"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 133323844.44444445,
            "unit": "ns",
            "range": "± 2818061.9895119458"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 262221430.76923078,
            "unit": "ns",
            "range": "± 7052178.325979525"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5586382.552083333,
            "unit": "ns",
            "range": "± 78082.5704094466"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1804641.4963942308,
            "unit": "ns",
            "range": "± 16021.308592709374"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1325486.9140625,
            "unit": "ns",
            "range": "± 14300.404823322833"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3208839.1666666665,
            "unit": "ns",
            "range": "± 37395.38486248979"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1081765.1692708333,
            "unit": "ns",
            "range": "± 11061.751246366031"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 996844.5033482143,
            "unit": "ns",
            "range": "± 16058.635516088676"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3834420.202020202,
            "unit": "ns",
            "range": "± 269867.04586676887"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3878936.4583333335,
            "unit": "ns",
            "range": "± 243782.84949813393"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5215630.263157895,
            "unit": "ns",
            "range": "± 265498.441436599"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4829696.808510638,
            "unit": "ns",
            "range": "± 412193.96531665564"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 13274789.411764706,
            "unit": "ns",
            "range": "± 821712.2958484067"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 305928.26086956525,
            "unit": "ns",
            "range": "± 24836.083843441418"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 302230.92783505155,
            "unit": "ns",
            "range": "± 31078.517368730576"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 264755.3191489362,
            "unit": "ns",
            "range": "± 35061.35211686281"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4735780,
            "unit": "ns",
            "range": "± 200447.91916180195"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4410859.782608695,
            "unit": "ns",
            "range": "± 283517.20147042675"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 24346.39175257732,
            "unit": "ns",
            "range": "± 7612.559001627811"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 104222.34042553192,
            "unit": "ns",
            "range": "± 21988.44346643056"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 107828.86597938144,
            "unit": "ns",
            "range": "± 20003.1557862487"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 113779.34782608696,
            "unit": "ns",
            "range": "± 17746.07548655169"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 9265.934065934065,
            "unit": "ns",
            "range": "± 1219.582786604572"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 23617.582417582416,
            "unit": "ns",
            "range": "± 6066.842367539833"
          }
        ]
      }
    ]
  }
}