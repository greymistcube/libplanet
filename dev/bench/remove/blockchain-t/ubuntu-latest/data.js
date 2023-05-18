window.BENCHMARK_DATA = {
  "lastUpdate": 1684400180332,
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
          "id": "4cee5a03eb1b4fc8fd2c2ac78089220e7f5184da",
          "message": "Cleanup",
          "timestamp": "2023-05-18T17:31:50+09:00",
          "tree_id": "b8f88932d597c482d3db31fe2450c40a34019690",
          "url": "https://github.com/greymistcube/libplanet/commit/4cee5a03eb1b4fc8fd2c2ac78089220e7f5184da"
        },
        "date": 1684399663008,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4272265.904761905,
            "unit": "ns",
            "range": "± 100709.55862027434"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4384652.652173913,
            "unit": "ns",
            "range": "± 165776.94859542343"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5391299.125,
            "unit": "ns",
            "range": "± 135258.80417838355"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5504103.75862069,
            "unit": "ns",
            "range": "± 240793.88553191035"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8433814.736842105,
            "unit": "ns",
            "range": "± 180809.5541778212"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 334959.13513513515,
            "unit": "ns",
            "range": "± 9477.761266254816"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 323496.9069767442,
            "unit": "ns",
            "range": "± 10075.414314567332"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 301018.1818181818,
            "unit": "ns",
            "range": "± 9481.950773227474"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5349829.785714285,
            "unit": "ns",
            "range": "± 32697.00742641224"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4715069.266666667,
            "unit": "ns",
            "range": "± 46664.77295021629"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 25794.606382978724,
            "unit": "ns",
            "range": "± 2209.575944418378"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 116622.11764705883,
            "unit": "ns",
            "range": "± 6267.260642592174"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 104591,
            "unit": "ns",
            "range": "± 5325.3786970192705"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 121410.75,
            "unit": "ns",
            "range": "± 14298.92782436207"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7328.136842105263,
            "unit": "ns",
            "range": "± 1009.650577965301"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 24725.369565217392,
            "unit": "ns",
            "range": "± 2320.1719608371177"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7283786.413802084,
            "unit": "ns",
            "range": "± 31385.852426922633"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2209535.279166667,
            "unit": "ns",
            "range": "± 3020.0235075079445"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1610940.0845052083,
            "unit": "ns",
            "range": "± 2931.4444966156693"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3135296.5915178573,
            "unit": "ns",
            "range": "± 2738.4686112108375"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 996456.4309895834,
            "unit": "ns",
            "range": "± 684.3101129527348"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 912650.9841496394,
            "unit": "ns",
            "range": "± 429.6393991178837"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9850315.93939394,
            "unit": "ns",
            "range": "± 271278.53847567114"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 26326173.133333333,
            "unit": "ns",
            "range": "± 291527.7777276774"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 66724844.266666666,
            "unit": "ns",
            "range": "± 318226.1053708436"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 133950651.13333334,
            "unit": "ns",
            "range": "± 461994.5667552915"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 270025421.21428573,
            "unit": "ns",
            "range": "± 602416.6646691511"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1700214.1230769232,
            "unit": "ns",
            "range": "± 76576.35265057918"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3269958,
            "unit": "ns",
            "range": "± 81854.75395081111"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2754529.4444444445,
            "unit": "ns",
            "range": "± 135447.16487218314"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6665142.038461538,
            "unit": "ns",
            "range": "± 178057.53095704337"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 56301.04651162791,
            "unit": "ns",
            "range": "± 2727.8653878594896"
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
          "id": "4d2fcc5472b8f2f01e5047eac91f02b32b4121af",
          "message": "Changelog",
          "timestamp": "2023-05-18T17:35:40+09:00",
          "tree_id": "fa8176e9b74d51837b5c4a29d6d2abfb42b86fe1",
          "url": "https://github.com/greymistcube/libplanet/commit/4d2fcc5472b8f2f01e5047eac91f02b32b4121af"
        },
        "date": 1684400171449,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3412432.602040816,
            "unit": "ns",
            "range": "± 310470.3208809373"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3893720.4591836734,
            "unit": "ns",
            "range": "± 401074.760882291"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5522549.375,
            "unit": "ns",
            "range": "± 403194.3514112805"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4980232.474226804,
            "unit": "ns",
            "range": "± 588490.707823183"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8538509.927835051,
            "unit": "ns",
            "range": "± 603727.0002170416"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 351801.47252747254,
            "unit": "ns",
            "range": "± 39775.832921606685"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 320646.39361702127,
            "unit": "ns",
            "range": "± 42644.69955950937"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 253454.28723404257,
            "unit": "ns",
            "range": "± 31072.12030952366"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4984538.171717172,
            "unit": "ns",
            "range": "± 559919.1867860794"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4428384.113402062,
            "unit": "ns",
            "range": "± 403804.56163764716"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 29075.64285714286,
            "unit": "ns",
            "range": "± 10841.785941297088"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 110941.68041237113,
            "unit": "ns",
            "range": "± 19100.24546883407"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 106818.93617021276,
            "unit": "ns",
            "range": "± 16501.126641762825"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 113947.66326530612,
            "unit": "ns",
            "range": "± 32344.12992550609"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 14013.13,
            "unit": "ns",
            "range": "± 10036.554840369152"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 31262.846153846152,
            "unit": "ns",
            "range": "± 8595.373692248737"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6065372.300951087,
            "unit": "ns",
            "range": "± 139107.3299574031"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1970602.6266769255,
            "unit": "ns",
            "range": "± 117540.40451095633"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1472563.2762161726,
            "unit": "ns",
            "range": "± 85279.23966705406"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2737029.331796875,
            "unit": "ns",
            "range": "± 110310.25561181451"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 900093.8391617064,
            "unit": "ns",
            "range": "± 40985.03125461236"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 934463.5443960336,
            "unit": "ns",
            "range": "± 32409.795648538784"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9204781.57142857,
            "unit": "ns",
            "range": "± 1038243.5031652575"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 24047879.86734694,
            "unit": "ns",
            "range": "± 1701998.9274229337"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 60615697.81818182,
            "unit": "ns",
            "range": "± 3660740.3861843343"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 119094210.5483871,
            "unit": "ns",
            "range": "± 3616982.0761785447"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 238434278.4716981,
            "unit": "ns",
            "range": "± 9894902.676243987"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1715053.0208333333,
            "unit": "ns",
            "range": "± 182935.84142971973"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3191595.216494845,
            "unit": "ns",
            "range": "± 293550.719280588"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2517719.989361702,
            "unit": "ns",
            "range": "± 172740.91882699198"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6582918.693877551,
            "unit": "ns",
            "range": "± 479538.2920933665"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 69442.6,
            "unit": "ns",
            "range": "± 13203.04327539356"
          }
        ]
      }
    ]
  }
}