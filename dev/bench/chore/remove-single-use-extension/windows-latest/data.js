window.BENCHMARK_DATA = {
  "lastUpdate": 1689903676733,
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
          "id": "af86f2410462b8ca09b8023e578a566d3d066f6a",
          "message": "Removed KeyValuePairExtensions",
          "timestamp": "2023-07-20T20:05:07+09:00",
          "tree_id": "256acdd1ba23fd837a2a0a0fe8e2e6555f3c5e7c",
          "url": "https://github.com/greymistcube/libplanet/commit/af86f2410462b8ca09b8023e578a566d3d066f6a"
        },
        "date": 1689903520249,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1632184.6153846155,
            "unit": "ns",
            "range": "± 129276.73583189835"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3169713.095238095,
            "unit": "ns",
            "range": "± 169946.68248215265"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2175942.7083333335,
            "unit": "ns",
            "range": "± 194216.42390563418"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5932563.440860215,
            "unit": "ns",
            "range": "± 354056.7210100377"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 56419.14893617021,
            "unit": "ns",
            "range": "± 4465.712302049504"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8715444.444444444,
            "unit": "ns",
            "range": "± 306702.448011361"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 24269386.666666668,
            "unit": "ns",
            "range": "± 368759.62721896044"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 62695126,
            "unit": "ns",
            "range": "± 2530582.263546378"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 127995266.66666667,
            "unit": "ns",
            "range": "± 4274093.239239673"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 249660371.875,
            "unit": "ns",
            "range": "± 7699061.667092918"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6099457.752403846,
            "unit": "ns",
            "range": "± 54586.35805383629"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1914687.2786458333,
            "unit": "ns",
            "range": "± 28431.63076639928"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1477805.2315848214,
            "unit": "ns",
            "range": "± 14789.164376236942"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3305163.203125,
            "unit": "ns",
            "range": "± 58101.70461007011"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1059844.517299107,
            "unit": "ns",
            "range": "± 16856.113730853576"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 961573.7723214285,
            "unit": "ns",
            "range": "± 22015.69374966245"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3901428.3582089553,
            "unit": "ns",
            "range": "± 177552.06475504255"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4151228.5714285714,
            "unit": "ns",
            "range": "± 178046.8678995257"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5030654.285714285,
            "unit": "ns",
            "range": "± 161261.75532683637"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4570977.419354838,
            "unit": "ns",
            "range": "± 135026.43373225708"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7607745.3125,
            "unit": "ns",
            "range": "± 350509.0316204703"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 316800,
            "unit": "ns",
            "range": "± 13076.261983112008"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 308496.8253968254,
            "unit": "ns",
            "range": "± 13227.049121743747"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 284072.22222222225,
            "unit": "ns",
            "range": "± 18924.551723292956"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4984061.538461538,
            "unit": "ns",
            "range": "± 68006.14602692831"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4611263.636363637,
            "unit": "ns",
            "range": "± 173193.10246068612"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 26821.505376344085,
            "unit": "ns",
            "range": "± 1950.5768077989014"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 109971.13402061856,
            "unit": "ns",
            "range": "± 9886.195750081763"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 94878.72340425532,
            "unit": "ns",
            "range": "± 9860.956706627607"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 119165.625,
            "unit": "ns",
            "range": "± 18167.529323232873"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7082.65306122449,
            "unit": "ns",
            "range": "± 1363.0450681375278"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 25576.288659793816,
            "unit": "ns",
            "range": "± 2492.855340596581"
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
          "id": "11fb62c7f7f55e8cefa32e2ae5b7fbe2ace6e968",
          "message": "Changelog",
          "timestamp": "2023-07-21T10:23:40+09:00",
          "tree_id": "8e3d883ff8074edfc138c9d935e9de390f595bd1",
          "url": "https://github.com/greymistcube/libplanet/commit/11fb62c7f7f55e8cefa32e2ae5b7fbe2ace6e968"
        },
        "date": 1689903652922,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1435098.969072165,
            "unit": "ns",
            "range": "± 89621.46726515613"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2778984.745762712,
            "unit": "ns",
            "range": "± 121199.0565764456"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2118116.6666666665,
            "unit": "ns",
            "range": "± 29146.614752234113"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5108206,
            "unit": "ns",
            "range": "± 202165.03907572594"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 50694.565217391304,
            "unit": "ns",
            "range": "± 4714.237591872416"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8110100,
            "unit": "ns",
            "range": "± 157767.08570970478"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21188171.42857143,
            "unit": "ns",
            "range": "± 328262.64444231807"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 51670964.28571428,
            "unit": "ns",
            "range": "± 439449.9036945427"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 104708580,
            "unit": "ns",
            "range": "± 1503622.6104217204"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 211143126.66666666,
            "unit": "ns",
            "range": "± 1595851.1264555736"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5064814.635416667,
            "unit": "ns",
            "range": "± 32933.50431784345"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1567064.140625,
            "unit": "ns",
            "range": "± 4378.68553957045"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1228198.8131009615,
            "unit": "ns",
            "range": "± 3803.323634457241"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2698647.2786458335,
            "unit": "ns",
            "range": "± 13180.093518370604"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 848517.7994791666,
            "unit": "ns",
            "range": "± 3480.9409561731386"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 777167.2916666666,
            "unit": "ns",
            "range": "± 2376.15428250656"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3383164.1025641025,
            "unit": "ns",
            "range": "± 118472.30297499805"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3583001.785714286,
            "unit": "ns",
            "range": "± 154023.95503305967"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4397800,
            "unit": "ns",
            "range": "± 78932.75619158373"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3969146.93877551,
            "unit": "ns",
            "range": "± 146790.31970529826"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6460665.384615385,
            "unit": "ns",
            "range": "± 130330.4444627047"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 281733.07692307694,
            "unit": "ns",
            "range": "± 12868.585407286047"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 269869.1489361702,
            "unit": "ns",
            "range": "± 16481.929019812535"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 262270.88607594935,
            "unit": "ns",
            "range": "± 13624.385677976072"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4161613.3333333335,
            "unit": "ns",
            "range": "± 48685.695562258865"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4312761.538461538,
            "unit": "ns",
            "range": "± 36598.78273161414"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 24429.591836734693,
            "unit": "ns",
            "range": "± 3061.170491844396"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 104419.79166666667,
            "unit": "ns",
            "range": "± 9228.840604513049"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 96827,
            "unit": "ns",
            "range": "± 13981.769190519835"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 108781.9587628866,
            "unit": "ns",
            "range": "± 21034.26542964951"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6641,
            "unit": "ns",
            "range": "± 1593.3634458927036"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 24218.08510638298,
            "unit": "ns",
            "range": "± 2579.112240610763"
          }
        ]
      }
    ]
  }
}