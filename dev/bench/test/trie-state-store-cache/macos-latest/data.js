window.BENCHMARK_DATA = {
  "lastUpdate": 1700201228089,
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
          "id": "e0a3acc770b366a4aac36b44f933beca69ce8ce8",
          "message": "Tune ContextTimeoutOption",
          "timestamp": "2023-11-16T13:03:22+09:00",
          "tree_id": "dcf69d0992d138a93059d895526a95cd3535e952",
          "url": "https://github.com/greymistcube/libplanet/commit/e0a3acc770b366a4aac36b44f933beca69ce8ce8"
        },
        "date": 1700108334045,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8198403.266666667,
            "unit": "ns",
            "range": "± 59324.83678680416"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20007538.11764706,
            "unit": "ns",
            "range": "± 641733.7648663197"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 49799482.5,
            "unit": "ns",
            "range": "± 855773.582347574"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 99013321.76923077,
            "unit": "ns",
            "range": "± 948816.567691753"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 203364984.7142857,
            "unit": "ns",
            "range": "± 2527359.3387561403"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 57933.65217391304,
            "unit": "ns",
            "range": "± 7007.904994016404"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 289977.3714285714,
            "unit": "ns",
            "range": "± 14123.380537324283"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 271566.0561797753,
            "unit": "ns",
            "range": "± 14846.17573604207"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 254839.25396825396,
            "unit": "ns",
            "range": "± 11552.170268057935"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3766438.214285714,
            "unit": "ns",
            "range": "± 103691.1452344242"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3376095.8571428573,
            "unit": "ns",
            "range": "± 52560.16715061986"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 16923.63186813187,
            "unit": "ns",
            "range": "± 1981.6322128139789"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 81482.82608695653,
            "unit": "ns",
            "range": "± 5877.771868170544"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 78058.63541666667,
            "unit": "ns",
            "range": "± 10596.87174904367"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 84937.85714285714,
            "unit": "ns",
            "range": "± 12243.723026577594"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4872.414893617021,
            "unit": "ns",
            "range": "± 631.3375868685464"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17124.96875,
            "unit": "ns",
            "range": "± 2103.166749917972"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1392128.6630434783,
            "unit": "ns",
            "range": "± 139188.05270696813"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2707483.6703296704,
            "unit": "ns",
            "range": "± 252594.8526937974"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2260911.8080808083,
            "unit": "ns",
            "range": "± 209037.98106709134"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 10765215.40860215,
            "unit": "ns",
            "range": "± 660071.6801088355"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3171986.1272727274,
            "unit": "ns",
            "range": "± 125972.10646277487"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3396230.2288135593,
            "unit": "ns",
            "range": "± 149875.769249394"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4271247.350877193,
            "unit": "ns",
            "range": "± 165362.95211902075"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4279693.55882353,
            "unit": "ns",
            "range": "± 134277.13275703715"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 17539325.78125,
            "unit": "ns",
            "range": "± 2072057.3329500752"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5174888.496875,
            "unit": "ns",
            "range": "± 55057.1824638702"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1641621.721484375,
            "unit": "ns",
            "range": "± 12848.858813622752"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 983618.4242788461,
            "unit": "ns",
            "range": "± 5262.68292907898"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2392380.96640625,
            "unit": "ns",
            "range": "± 29234.56181527029"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 808571.8072916666,
            "unit": "ns",
            "range": "± 10567.141061360127"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 766844.4093191965,
            "unit": "ns",
            "range": "± 8363.455287200699"
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
          "id": "7a9366b3d402748a9ef77f3be6ed9fe35c0015e0",
          "message": "Add missing cache",
          "timestamp": "2023-11-17T14:50:59+09:00",
          "tree_id": "6056f90d4aeb350ae9f2092c2b02e3e095346059",
          "url": "https://github.com/greymistcube/libplanet/commit/7a9366b3d402748a9ef77f3be6ed9fe35c0015e0"
        },
        "date": 1700201207960,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9661531.448979592,
            "unit": "ns",
            "range": "± 1065793.1615972137"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20785306.5,
            "unit": "ns",
            "range": "± 1099386.2017436826"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 50006276.48648649,
            "unit": "ns",
            "range": "± 1603715.994530838"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 99605890.04545455,
            "unit": "ns",
            "range": "± 3100377.674936637"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 205090424.1818182,
            "unit": "ns",
            "range": "± 4869450.726029723"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 36737.02222222222,
            "unit": "ns",
            "range": "± 4951.285353439653"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 264648.22580645164,
            "unit": "ns",
            "range": "± 34620.26589269739"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 248921.45833333334,
            "unit": "ns",
            "range": "± 28866.018164112567"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 244507.0625,
            "unit": "ns",
            "range": "± 24325.467341997337"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3985467.096153846,
            "unit": "ns",
            "range": "± 161741.14132995374"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3447904.0789473685,
            "unit": "ns",
            "range": "± 106938.43471214073"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 16572.919540229886,
            "unit": "ns",
            "range": "± 3843.721725457408"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 90087.31052631579,
            "unit": "ns",
            "range": "± 21459.804943639097"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 73897.63636363637,
            "unit": "ns",
            "range": "± 22173.950021597342"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 81585.10638297872,
            "unit": "ns",
            "range": "± 21883.175650310084"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6627.934065934066,
            "unit": "ns",
            "range": "± 1536.7170693266703"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16674.63829787234,
            "unit": "ns",
            "range": "± 3833.9947662672694"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1061558.7525773195,
            "unit": "ns",
            "range": "± 94139.28297419987"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2236298.1958762887,
            "unit": "ns",
            "range": "± 137704.3601416212"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1542239.237113402,
            "unit": "ns",
            "range": "± 133792.62939828853"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6647215.222222222,
            "unit": "ns",
            "range": "± 466887.942783324"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3064561.240506329,
            "unit": "ns",
            "range": "± 158448.38930602034"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3192567.340425532,
            "unit": "ns",
            "range": "± 194504.94473630257"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3855734.2409638553,
            "unit": "ns",
            "range": "± 205783.46742031194"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3601068.2125,
            "unit": "ns",
            "range": "± 185079.2335756615"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 13805522.117021276,
            "unit": "ns",
            "range": "± 1916033.9387970767"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4599486.726171875,
            "unit": "ns",
            "range": "± 105128.77584996975"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1377066.8857421875,
            "unit": "ns",
            "range": "± 55886.2204987588"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 878138.261858259,
            "unit": "ns",
            "range": "± 9733.369047512844"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2244986.748598845,
            "unit": "ns",
            "range": "± 261393.72435257284"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 649571.5134055398,
            "unit": "ns",
            "range": "± 19790.76749976109"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 600047.5950317383,
            "unit": "ns",
            "range": "± 18471.614733944207"
          }
        ]
      }
    ]
  }
}