window.BENCHMARK_DATA = {
  "lastUpdate": 1700816357062,
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
          "id": "230112d213d64abb0a6d51bbb0b61790bd7cd397",
          "message": "Remove unnecessary extensions",
          "timestamp": "2023-11-16T22:21:59+09:00",
          "tree_id": "4940d84801c8aca15903cc63aa02253da0eac664",
          "url": "https://github.com/greymistcube/libplanet/commit/230112d213d64abb0a6d51bbb0b61790bd7cd397"
        },
        "date": 1700147300929,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8617357.261363637,
            "unit": "ns",
            "range": "± 514796.639573973"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21351353.411764707,
            "unit": "ns",
            "range": "± 413391.9872442587"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 54211940.78181818,
            "unit": "ns",
            "range": "± 2289074.6269590454"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 102184020.03846154,
            "unit": "ns",
            "range": "± 689038.9026353562"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 210679471.08333334,
            "unit": "ns",
            "range": "± 718074.4601707666"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 67750.39247311828,
            "unit": "ns",
            "range": "± 9011.51465512966"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 356225.29292929295,
            "unit": "ns",
            "range": "± 53372.64032450741"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 327926.6770833333,
            "unit": "ns",
            "range": "± 33193.00437235305"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 305064.8918918919,
            "unit": "ns",
            "range": "± 15157.936185123028"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4393376.591836735,
            "unit": "ns",
            "range": "± 358760.5125632144"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3919316.7441860465,
            "unit": "ns",
            "range": "± 211826.6901573457"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 23652.36842105263,
            "unit": "ns",
            "range": "± 3850.0436307354535"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 116279.69191919192,
            "unit": "ns",
            "range": "± 21469.75206964857"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 113120.06060606061,
            "unit": "ns",
            "range": "± 5276.991091605686"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 130740.77083333333,
            "unit": "ns",
            "range": "± 23379.160263375878"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 9131.083333333334,
            "unit": "ns",
            "range": "± 1365.9271974640267"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 27456.41208791209,
            "unit": "ns",
            "range": "± 6556.2152016207765"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1415031.3181818181,
            "unit": "ns",
            "range": "± 139285.71332749916"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2749299.597938144,
            "unit": "ns",
            "range": "± 159208.9080412941"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2105036.5757575757,
            "unit": "ns",
            "range": "± 193076.71366859102"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 20873002.51010101,
            "unit": "ns",
            "range": "± 2449797.5437490144"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3230505.6785714286,
            "unit": "ns",
            "range": "± 72920.66775361837"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3348477.6951219514,
            "unit": "ns",
            "range": "± 148648.41860559076"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4393466.633333334,
            "unit": "ns",
            "range": "± 130519.44696044692"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4070125.59375,
            "unit": "ns",
            "range": "± 187783.62032282428"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 23062937.840206187,
            "unit": "ns",
            "range": "± 3047182.565760692"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6550842.323102678,
            "unit": "ns",
            "range": "± 115383.10106306605"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1761247.2798978365,
            "unit": "ns",
            "range": "± 21643.436261226427"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1108736.4229266827,
            "unit": "ns",
            "range": "± 11712.750522028216"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3032217.2565104165,
            "unit": "ns",
            "range": "± 38394.71192573379"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 808955.6780215993,
            "unit": "ns",
            "range": "± 16344.753235176318"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 779451.3298527644,
            "unit": "ns",
            "range": "± 6576.424725748473"
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
          "id": "92952511538ebfcb54e8bb01725dbd27eecef617",
          "message": "Add missing cache",
          "timestamp": "2023-11-17T09:43:58+09:00",
          "tree_id": "79f699a8f5975c1c98e0075549838a2014366aa1",
          "url": "https://github.com/greymistcube/libplanet/commit/92952511538ebfcb54e8bb01725dbd27eecef617"
        },
        "date": 1700184140829,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 11449681.13402062,
            "unit": "ns",
            "range": "± 2114857.9229731895"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 32123804.805263158,
            "unit": "ns",
            "range": "± 5167121.070231094"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 68838658.36597939,
            "unit": "ns",
            "range": "± 10377340.523394443"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 153975045.36813188,
            "unit": "ns",
            "range": "± 19591888.022324268"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 308430378.58947366,
            "unit": "ns",
            "range": "± 54818094.87371777"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 57580.790322580644,
            "unit": "ns",
            "range": "± 12754.0357079126"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 393607.7419354839,
            "unit": "ns",
            "range": "± 97488.86177437457"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 346037.05,
            "unit": "ns",
            "range": "± 83220.70269323043"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 347222.09793814435,
            "unit": "ns",
            "range": "± 89839.34701520216"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5858920.601010101,
            "unit": "ns",
            "range": "± 1240164.5823932167"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 5103104.826530612,
            "unit": "ns",
            "range": "± 1111964.8450019853"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 27796.40206185567,
            "unit": "ns",
            "range": "± 4459.616179905961"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 132671.8901098901,
            "unit": "ns",
            "range": "± 32945.21101109489"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 133885.94680851063,
            "unit": "ns",
            "range": "± 29759.120466110806"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 115979.2,
            "unit": "ns",
            "range": "± 20776.02424573995"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8625.302083333334,
            "unit": "ns",
            "range": "± 1624.1150342962758"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 29361.459595959597,
            "unit": "ns",
            "range": "± 5556.997752272266"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1133683.4838709678,
            "unit": "ns",
            "range": "± 105064.18634128758"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2762656.213483146,
            "unit": "ns",
            "range": "± 534080.6025563607"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2082437.182795699,
            "unit": "ns",
            "range": "± 458535.46569208294"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 18124777.88372093,
            "unit": "ns",
            "range": "± 3019279.905046595"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4242078.798969072,
            "unit": "ns",
            "range": "± 975592.7251335378"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4129555.0860215053,
            "unit": "ns",
            "range": "± 821493.4378523224"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5806128.427835052,
            "unit": "ns",
            "range": "± 1192766.4930607073"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5493912.354166667,
            "unit": "ns",
            "range": "± 1315931.2643635825"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 27172544.6344086,
            "unit": "ns",
            "range": "± 7625897.481580472"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7402742.576936142,
            "unit": "ns",
            "range": "± 944024.1284217236"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2251394.4631696427,
            "unit": "ns",
            "range": "± 328815.3314034699"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1261420.9227106154,
            "unit": "ns",
            "range": "± 199700.48735857426"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2430237.9716145834,
            "unit": "ns",
            "range": "± 39177.974624006405"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 721352.1751098633,
            "unit": "ns",
            "range": "± 14138.061709721427"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 651074.2076822916,
            "unit": "ns",
            "range": "± 13411.880867788706"
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
          "id": "7d64d9aaf51665b1cf3739ac1fc0e006ba96a6b7",
          "message": "Remove caching while writing",
          "timestamp": "2023-11-17T13:22:50+09:00",
          "tree_id": "161d53684b30dcad10be36fda99fc1883bc401b4",
          "url": "https://github.com/greymistcube/libplanet/commit/7d64d9aaf51665b1cf3739ac1fc0e006ba96a6b7"
        },
        "date": 1700196316955,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7640525.657894737,
            "unit": "ns",
            "range": "± 127462.86842286578"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19163355.975609757,
            "unit": "ns",
            "range": "± 680664.4121986064"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 49934610.26923077,
            "unit": "ns",
            "range": "± 789075.1935385239"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 100038219.93548387,
            "unit": "ns",
            "range": "± 2890068.4028282207"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 197463496.93548387,
            "unit": "ns",
            "range": "± 5978512.837835041"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 45353.8064516129,
            "unit": "ns",
            "range": "± 8412.805502247962"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 253193.02,
            "unit": "ns",
            "range": "± 10090.371572394131"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 237361.51764705882,
            "unit": "ns",
            "range": "± 12504.386794633472"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 227425.17,
            "unit": "ns",
            "range": "± 27541.5094427475"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3993824.772727273,
            "unit": "ns",
            "range": "± 94336.74557122319"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3638831.0714285714,
            "unit": "ns",
            "range": "± 61149.76358525818"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18080.0206185567,
            "unit": "ns",
            "range": "± 4153.0039378627835"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 82686.75280898876,
            "unit": "ns",
            "range": "± 9607.312207235338"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 76803.88775510204,
            "unit": "ns",
            "range": "± 13760.063746280543"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 72804.59574468085,
            "unit": "ns",
            "range": "± 14998.736044467032"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6824.556701030928,
            "unit": "ns",
            "range": "± 1375.526020360576"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17977.75,
            "unit": "ns",
            "range": "± 3779.9988359786566"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1041977.7676767677,
            "unit": "ns",
            "range": "± 95102.3218083735"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2226352.3586956523,
            "unit": "ns",
            "range": "± 122997.35685559802"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1420158.25,
            "unit": "ns",
            "range": "± 100885.54387433837"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 13510451.430107526,
            "unit": "ns",
            "range": "± 1255238.3690182932"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2968876.1136363638,
            "unit": "ns",
            "range": "± 158434.687500961"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3195348.8095238097,
            "unit": "ns",
            "range": "± 146049.38351603798"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3755261.1097560977,
            "unit": "ns",
            "range": "± 238026.47677262768"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3457595.7714285715,
            "unit": "ns",
            "range": "± 167102.7064041728"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 15493049.983146068,
            "unit": "ns",
            "range": "± 1574033.52668076"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4624038.604447115,
            "unit": "ns",
            "range": "± 214213.86219996668"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1347186.041766827,
            "unit": "ns",
            "range": "± 20399.494595870878"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 875775.4234793527,
            "unit": "ns",
            "range": "± 10037.191126163436"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2120541.955150463,
            "unit": "ns",
            "range": "± 58663.35068958499"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 641396.4736979167,
            "unit": "ns",
            "range": "± 8134.54696857522"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 572645.7322265625,
            "unit": "ns",
            "range": "± 6431.475835722357"
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
          "id": "f569134a3685f787d245d8cd019e83ec0dfa13fb",
          "message": "Commit frequently",
          "timestamp": "2023-11-17T16:08:27+09:00",
          "tree_id": "1ee50c563d7535f84d9c3d16d27b943b055cdaa7",
          "url": "https://github.com/greymistcube/libplanet/commit/f569134a3685f787d245d8cd019e83ec0dfa13fb"
        },
        "date": 1700205875724,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7685510.846153846,
            "unit": "ns",
            "range": "± 207698.1777552595"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19088533.43243243,
            "unit": "ns",
            "range": "± 645355.1841489022"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 48216171.414634146,
            "unit": "ns",
            "range": "± 1722700.3517966056"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 94717836.14285715,
            "unit": "ns",
            "range": "± 1569822.0598978654"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 197360465.3529412,
            "unit": "ns",
            "range": "± 3839874.3155734106"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 39784.729166666664,
            "unit": "ns",
            "range": "± 8073.700648244034"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 243494.11111111112,
            "unit": "ns",
            "range": "± 21783.422298833426"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 239452.93258426967,
            "unit": "ns",
            "range": "± 22999.789291919093"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 225516.54255319148,
            "unit": "ns",
            "range": "± 14247.063877039693"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3896396.710526316,
            "unit": "ns",
            "range": "± 82788.38771670211"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3562820.1428571427,
            "unit": "ns",
            "range": "± 61828.95304181733"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17616.81818181818,
            "unit": "ns",
            "range": "± 3885.0143523062084"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 80792.32105263158,
            "unit": "ns",
            "range": "± 14499.738611715133"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 83110.19354838709,
            "unit": "ns",
            "range": "± 10702.80152298419"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 80544.38461538461,
            "unit": "ns",
            "range": "± 13447.38057993223"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5841.333333333333,
            "unit": "ns",
            "range": "± 2008.0310527409506"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19113.15263157895,
            "unit": "ns",
            "range": "± 5076.148883202157"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1023237.969072165,
            "unit": "ns",
            "range": "± 75224.45785232433"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2265617.8068181816,
            "unit": "ns",
            "range": "± 124730.9994620016"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1543512.98989899,
            "unit": "ns",
            "range": "± 116364.04064404992"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6939722.188888889,
            "unit": "ns",
            "range": "± 429817.044903538"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2951344.125,
            "unit": "ns",
            "range": "± 91134.75654770585"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3019354.4716981133,
            "unit": "ns",
            "range": "± 122435.37992166186"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3627261.5517241377,
            "unit": "ns",
            "range": "± 92452.24639841533"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3530412.2525252528,
            "unit": "ns",
            "range": "± 215686.64632537786"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 14347236.25,
            "unit": "ns",
            "range": "± 2677663.6833800413"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4575962.597377232,
            "unit": "ns",
            "range": "± 195844.35913066706"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1420054.4636140047,
            "unit": "ns",
            "range": "± 59758.04197086017"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 883998.5733173077,
            "unit": "ns",
            "range": "± 13802.638861607547"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2175289.2522615134,
            "unit": "ns",
            "range": "± 140329.79222276201"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 663893.3468981291,
            "unit": "ns",
            "range": "± 31160.713546696756"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 596044.1017456055,
            "unit": "ns",
            "range": "± 11621.17283572145"
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
          "id": "ebd89d9e125ae385e8e84e5db9972d16f1829116",
          "message": "Commit frequently",
          "timestamp": "2023-11-24T17:32:56+09:00",
          "tree_id": "052793f7c80cd2d7d33fa75139da8fee48235591",
          "url": "https://github.com/greymistcube/libplanet/commit/ebd89d9e125ae385e8e84e5db9972d16f1829116"
        },
        "date": 1700815681552,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7739082.882352941,
            "unit": "ns",
            "range": "± 153895.66715265345"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 18930565.714285713,
            "unit": "ns",
            "range": "± 484996.09044891293"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 46285759.85714286,
            "unit": "ns",
            "range": "± 608970.2997385274"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 95712277.55,
            "unit": "ns",
            "range": "± 2152932.155744603"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 192858280.52631578,
            "unit": "ns",
            "range": "± 4244308.772009503"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 37571.021505376346,
            "unit": "ns",
            "range": "± 6962.502562607435"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 221324.74175824175,
            "unit": "ns",
            "range": "± 12038.838091167603"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 207767.93975903615,
            "unit": "ns",
            "range": "± 9467.135620776773"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 201225.28282828283,
            "unit": "ns",
            "range": "± 21557.22276092377"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3717849.880952381,
            "unit": "ns",
            "range": "± 86141.49974459242"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3464517.4285714286,
            "unit": "ns",
            "range": "± 80315.45893573131"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 13445.768421052631,
            "unit": "ns",
            "range": "± 1466.4442191670066"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 59074.54838709677,
            "unit": "ns",
            "range": "± 6363.737197584125"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 57505.891304347824,
            "unit": "ns",
            "range": "± 9681.379917601342"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 65407.113402061856,
            "unit": "ns",
            "range": "± 13607.030687200742"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3797.6063829787236,
            "unit": "ns",
            "range": "± 976.6713297780541"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 15644.09595959596,
            "unit": "ns",
            "range": "± 2821.0542063359135"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1132296.6855670102,
            "unit": "ns",
            "range": "± 99523.19506394496"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2314664.638554217,
            "unit": "ns",
            "range": "± 133837.30902394222"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1489021.9545454546,
            "unit": "ns",
            "range": "± 81738.14925231248"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6444045.458333333,
            "unit": "ns",
            "range": "± 165251.04648592652"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2917759.7580645164,
            "unit": "ns",
            "range": "± 126745.15108126479"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2994660.5483870967,
            "unit": "ns",
            "range": "± 81706.16718413965"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3541430.04,
            "unit": "ns",
            "range": "± 137186.13082931063"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3457804.847826087,
            "unit": "ns",
            "range": "± 84912.14523880159"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 14157119.883838383,
            "unit": "ns",
            "range": "± 2379682.6535243583"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4574152.913461538,
            "unit": "ns",
            "range": "± 71653.38274656217"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1389677.9479166667,
            "unit": "ns",
            "range": "± 7199.507935377173"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 919589.0854817708,
            "unit": "ns",
            "range": "± 14149.425496160897"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2179943.68307864,
            "unit": "ns",
            "range": "± 122083.01387962663"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 703366.6314871652,
            "unit": "ns",
            "range": "± 25420.7768648574"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 597555.5853794643,
            "unit": "ns",
            "range": "± 25464.078081617303"
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
          "id": "a795dbbbc6f39719823c74582623c6a04ed8628a",
          "message": "Remove unused parameter",
          "timestamp": "2023-11-24T17:38:07+09:00",
          "tree_id": "a4ab10da4f1463df43fa4fbfc8f875e0d2a70406",
          "url": "https://github.com/greymistcube/libplanet/commit/a795dbbbc6f39719823c74582623c6a04ed8628a"
        },
        "date": 1700816343641,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8760412.52631579,
            "unit": "ns",
            "range": "± 502174.4847408108"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21007527.797872342,
            "unit": "ns",
            "range": "± 816693.5535018472"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 50244016.791666664,
            "unit": "ns",
            "range": "± 1294524.1833853382"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 96261324.57142857,
            "unit": "ns",
            "range": "± 1204075.5093247949"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 205975669.25,
            "unit": "ns",
            "range": "± 4036421.400818742"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 64154.221052631576,
            "unit": "ns",
            "range": "± 9824.559838745143"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 336079.6304347826,
            "unit": "ns",
            "range": "± 36050.218296489664"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 334298.23626373627,
            "unit": "ns",
            "range": "± 58002.86372371534"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 307431.6590909091,
            "unit": "ns",
            "range": "± 25708.923202407226"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4555897.33,
            "unit": "ns",
            "range": "± 421920.6472108342"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4109421.510638298,
            "unit": "ns",
            "range": "± 287252.74262365483"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 22790.956521739132,
            "unit": "ns",
            "range": "± 3547.2926618560946"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 86759.75789473685,
            "unit": "ns",
            "range": "± 13003.120137609354"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 97046.26315789473,
            "unit": "ns",
            "range": "± 20958.265161988576"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 109388.34736842105,
            "unit": "ns",
            "range": "± 19719.284779857393"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7281.005154639175,
            "unit": "ns",
            "range": "± 1521.1195789321273"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20073.478494623654,
            "unit": "ns",
            "range": "± 3503.4585271851593"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1441901.6391752576,
            "unit": "ns",
            "range": "± 153983.87335510613"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2722518.5789473685,
            "unit": "ns",
            "range": "± 113582.33470953813"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2109056.4897959186,
            "unit": "ns",
            "range": "± 241235.96191851757"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 9304109.476744186,
            "unit": "ns",
            "range": "± 712014.7363653075"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3138861.111111111,
            "unit": "ns",
            "range": "± 129256.33385446477"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3280400.4285714286,
            "unit": "ns",
            "range": "± 90352.61009303681"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4376963.395348838,
            "unit": "ns",
            "range": "± 153599.3040138218"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4059638.3048780486,
            "unit": "ns",
            "range": "± 213198.89333158676"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 19666688.075757574,
            "unit": "ns",
            "range": "± 3387229.7246458037"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5530844.319444444,
            "unit": "ns",
            "range": "± 113722.8494264561"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1838616.2674804688,
            "unit": "ns",
            "range": "± 64804.69288517558"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1149361.43671875,
            "unit": "ns",
            "range": "± 19518.99977393255"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2670183.950706845,
            "unit": "ns",
            "range": "± 143364.22642749717"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 866103.7688598633,
            "unit": "ns",
            "range": "± 16584.787039598286"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 825915.7933999595,
            "unit": "ns",
            "range": "± 42207.80376980526"
          }
        ]
      }
    ]
  }
}