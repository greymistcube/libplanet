window.BENCHMARK_DATA = {
  "lastUpdate": 1684399672247,
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
      }
    ]
  }
}