window.BENCHMARK_DATA = {
  "lastUpdate": 1706247614095,
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
          "id": "43f1a0ff33d50a9e90602666c3b215515c5a3cd0",
          "message": "Release 3.9.6",
          "timestamp": "2024-01-26T14:25:55+09:00",
          "tree_id": "27eaabd17f16bc3ddddb2605fb0cb3539cc6672e",
          "url": "https://github.com/greymistcube/libplanet/commit/43f1a0ff33d50a9e90602666c3b215515c5a3cd0"
        },
        "date": 1706247376159,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2405309.204225352,
            "unit": "ns",
            "range": "± 117032.87226604257"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2667645.822222222,
            "unit": "ns",
            "range": "± 101006.82184281346"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3164502.3666666667,
            "unit": "ns",
            "range": "± 57973.18248720902"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2948884.7291666665,
            "unit": "ns",
            "range": "± 106640.56176144903"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6827309.818181818,
            "unit": "ns",
            "range": "± 167229.8904527014"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 41320.0824742268,
            "unit": "ns",
            "range": "± 5466.733884882923"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 952418.7173913043,
            "unit": "ns",
            "range": "± 72432.04403269605"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1893724.7741935484,
            "unit": "ns",
            "range": "± 57026.50042492506"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1442685.8144329898,
            "unit": "ns",
            "range": "± 125847.95478881533"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5752192,
            "unit": "ns",
            "range": "± 146190.18484390684"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5617795.6,
            "unit": "ns",
            "range": "± 36446.154435197765"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14587242.92857143,
            "unit": "ns",
            "range": "± 48050.54208405383"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 36326383.416666664,
            "unit": "ns",
            "range": "± 394690.38507658313"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 75168955.07142857,
            "unit": "ns",
            "range": "± 466876.09349993896"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 152898587.25,
            "unit": "ns",
            "range": "± 794921.4870734805"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3710665.0027901786,
            "unit": "ns",
            "range": "± 8395.068513427716"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1199933.6216517857,
            "unit": "ns",
            "range": "± 3567.158469850088"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 749628.8376652644,
            "unit": "ns",
            "range": "± 3674.7070806206198"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1950731.4915865385,
            "unit": "ns",
            "range": "± 4188.491650600656"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 618750.4473407452,
            "unit": "ns",
            "range": "± 642.3743161659069"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 579800.1567382812,
            "unit": "ns",
            "range": "± 1970.9698738375657"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 204785.42666666667,
            "unit": "ns",
            "range": "± 10167.429250909605"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 191041.22463768115,
            "unit": "ns",
            "range": "± 9192.931741103594"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 163522.82142857142,
            "unit": "ns",
            "range": "± 4598.964658474142"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3107436.346153846,
            "unit": "ns",
            "range": "± 44295.11875637118"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2857423.153846154,
            "unit": "ns",
            "range": "± 26583.96153963938"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 14811.69587628866,
            "unit": "ns",
            "range": "± 3300.2495980076246"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 68077.61458333333,
            "unit": "ns",
            "range": "± 5704.791818462407"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 72109.24242424243,
            "unit": "ns",
            "range": "± 16227.495120930234"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 65188.257894736846,
            "unit": "ns",
            "range": "± 15252.356870344202"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3677.1938775510203,
            "unit": "ns",
            "range": "± 1344.0423920824473"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12724.573684210527,
            "unit": "ns",
            "range": "± 1358.7557374625308"
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
          "id": "0cf9befcdce0a60ce9387fa85607921c485c17d2",
          "message": "Release 3.9.6",
          "timestamp": "2024-01-26T14:29:10+09:00",
          "tree_id": "fe7b38878dadae1236572a61986f6953de322925",
          "url": "https://github.com/greymistcube/libplanet/commit/0cf9befcdce0a60ce9387fa85607921c485c17d2"
        },
        "date": 1706247607908,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2504385.236842105,
            "unit": "ns",
            "range": "± 51600.71008000019"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2547128.980769231,
            "unit": "ns",
            "range": "± 103257.94735031112"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3149384.9565217393,
            "unit": "ns",
            "range": "± 77632.5107784796"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2973738.268656716,
            "unit": "ns",
            "range": "± 140544.6331105146"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7089104.2894736845,
            "unit": "ns",
            "range": "± 151472.0723457991"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 41571.31958762887,
            "unit": "ns",
            "range": "± 6497.595328508065"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 973889.8222222222,
            "unit": "ns",
            "range": "± 75455.75350064476"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1932909.2388059702,
            "unit": "ns",
            "range": "± 91292.40932119921"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1455974.802197802,
            "unit": "ns",
            "range": "± 113779.71230791345"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5919262.75,
            "unit": "ns",
            "range": "± 242615.72015633175"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5680156,
            "unit": "ns",
            "range": "± 76908.83449778505"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14471311.533333333,
            "unit": "ns",
            "range": "± 131690.98115223416"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 36939875.538461536,
            "unit": "ns",
            "range": "± 198819.58173413377"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 74539019.85714285,
            "unit": "ns",
            "range": "± 329541.93182468787"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 148954471.92857143,
            "unit": "ns",
            "range": "± 1381067.4495210897"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3766697.3038504464,
            "unit": "ns",
            "range": "± 46643.948180775216"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1221664.3723493305,
            "unit": "ns",
            "range": "± 4465.254806954596"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 759921.4173177084,
            "unit": "ns",
            "range": "± 2170.8158792994686"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1955050.2568359375,
            "unit": "ns",
            "range": "± 3165.8922257229974"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 611844.7290039062,
            "unit": "ns",
            "range": "± 2034.718355563244"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 564271.0892427885,
            "unit": "ns",
            "range": "± 3202.5958225865575"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 200100.74324324325,
            "unit": "ns",
            "range": "± 10043.520328926332"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 197971.61538461538,
            "unit": "ns",
            "range": "± 7606.439594195884"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 163637.89655172414,
            "unit": "ns",
            "range": "± 4699.265613938504"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3074797.9166666665,
            "unit": "ns",
            "range": "± 20287.32119266224"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2806026.4285714286,
            "unit": "ns",
            "range": "± 29610.27576694458"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 16506.835051546394,
            "unit": "ns",
            "range": "± 3680.7285133754785"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 59701.34375,
            "unit": "ns",
            "range": "± 4482.846704419965"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 60499.65957446808,
            "unit": "ns",
            "range": "± 3457.025620519589"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 64334,
            "unit": "ns",
            "range": "± 12298.52377697354"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2766.5520833333335,
            "unit": "ns",
            "range": "± 476.5510602739706"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 13730.134020618556,
            "unit": "ns",
            "range": "± 2785.6435321306594"
          }
        ]
      }
    ]
  }
}