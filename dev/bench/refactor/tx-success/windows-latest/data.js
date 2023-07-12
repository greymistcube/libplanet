window.BENCHMARK_DATA = {
  "lastUpdate": 1689127652512,
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
          "id": "aaac5d80bcb28312ff9d0464f0e0481f27b77455",
          "message": "Changelog",
          "timestamp": "2023-07-12T10:49:20+09:00",
          "tree_id": "cb1787efb83c661ea8d11c9c0f014cbbcfd2c083",
          "url": "https://github.com/greymistcube/libplanet/commit/aaac5d80bcb28312ff9d0464f0e0481f27b77455"
        },
        "date": 1689127521142,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1427803.0612244897,
            "unit": "ns",
            "range": "± 86713.83967125604"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2606177.6315789474,
            "unit": "ns",
            "range": "± 131991.10636572875"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1826901.0869565217,
            "unit": "ns",
            "range": "± 99845.263243742"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4830032.432432433,
            "unit": "ns",
            "range": "± 163564.52864245974"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 47560,
            "unit": "ns",
            "range": "± 2667.1450881698047"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7533357.894736842,
            "unit": "ns",
            "range": "± 164616.83563080485"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20901535.714285713,
            "unit": "ns",
            "range": "± 247543.6988839402"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 52490226.666666664,
            "unit": "ns",
            "range": "± 645160.2452842535"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 105531985.71428572,
            "unit": "ns",
            "range": "± 1500759.1965182375"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 209929960,
            "unit": "ns",
            "range": "± 2169599.6140828775"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4963682.271634615,
            "unit": "ns",
            "range": "± 23473.418265996"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1566053.4244791667,
            "unit": "ns",
            "range": "± 12823.794198959498"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1211802.1065848214,
            "unit": "ns",
            "range": "± 4938.916424106009"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2704273.995535714,
            "unit": "ns",
            "range": "± 13907.871952694006"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 854972.3933293269,
            "unit": "ns",
            "range": "± 2080.5324644042503"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 772828.2435825893,
            "unit": "ns",
            "range": "± 3833.7663572558213"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3354847.8260869565,
            "unit": "ns",
            "range": "± 82731.47619951065"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3517834.4827586208,
            "unit": "ns",
            "range": "± 101310.04137181377"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4300818.75,
            "unit": "ns",
            "range": "± 82038.97625519226"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3871316.6666666665,
            "unit": "ns",
            "range": "± 112252.99960152614"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6618931.37254902,
            "unit": "ns",
            "range": "± 269827.23620138573"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 267412.6984126984,
            "unit": "ns",
            "range": "± 12289.025947167607"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 260650,
            "unit": "ns",
            "range": "± 12192.951936388372"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 236178.57142857142,
            "unit": "ns",
            "range": "± 15081.57372356683"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4268878.571428572,
            "unit": "ns",
            "range": "± 44152.06552484142"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3894521.4285714286,
            "unit": "ns",
            "range": "± 47527.20967341402"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21277.083333333332,
            "unit": "ns",
            "range": "± 2097.1900582328913"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 89444.68085106384,
            "unit": "ns",
            "range": "± 6075.025855447906"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 82326.04166666667,
            "unit": "ns",
            "range": "± 6341.9280613302235"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 101485.26315789473,
            "unit": "ns",
            "range": "± 14064.047784673718"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6258.585858585859,
            "unit": "ns",
            "range": "± 1262.8935111933654"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18600,
            "unit": "ns",
            "range": "± 1598.1310924031693"
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
          "id": "ecdebfb7e8cfbf78e974a5a9ae926cb8fe5ec597",
          "message": "Removed ActionsLogsList from TxExecution",
          "timestamp": "2023-07-12T10:24:37+09:00",
          "tree_id": "56adda268a6b85b4d29c5baba373e3dd0e7fa0fc",
          "url": "https://github.com/greymistcube/libplanet/commit/ecdebfb7e8cfbf78e974a5a9ae926cb8fe5ec597"
        },
        "date": 1689127626566,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1886402.1276595744,
            "unit": "ns",
            "range": "± 166296.1582643715"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3578573.9583333335,
            "unit": "ns",
            "range": "± 283327.89791290514"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2362352.0833333335,
            "unit": "ns",
            "range": "± 189180.5976360415"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6871269.072164948,
            "unit": "ns",
            "range": "± 585409.6726796018"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 59729.032258064515,
            "unit": "ns",
            "range": "± 9877.451051292901"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8831271.666666666,
            "unit": "ns",
            "range": "± 393557.0607053994"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 24178939.17525773,
            "unit": "ns",
            "range": "± 1417103.90942795"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 66004485.55555555,
            "unit": "ns",
            "range": "± 2503094.88135602"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 130037164.28571428,
            "unit": "ns",
            "range": "± 2300109.0755430716"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 264150611.7647059,
            "unit": "ns",
            "range": "± 8295093.103164088"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6290639.947916667,
            "unit": "ns",
            "range": "± 74568.12947668647"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1991665.1432291667,
            "unit": "ns",
            "range": "± 26748.130969247217"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1534870.1729910714,
            "unit": "ns",
            "range": "± 17782.440279120525"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3131147.2135416665,
            "unit": "ns",
            "range": "± 51679.06658048956"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1060784.814453125,
            "unit": "ns",
            "range": "± 20322.969647761947"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 982038.3161272322,
            "unit": "ns",
            "range": "± 11762.444383862356"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3732934.0206185565,
            "unit": "ns",
            "range": "± 216154.2109074936"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3975255.5555555555,
            "unit": "ns",
            "range": "± 338617.99294690805"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5319968.367346939,
            "unit": "ns",
            "range": "± 397103.9944285645"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4795956.701030928,
            "unit": "ns",
            "range": "± 355533.38653212786"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8274369.444444444,
            "unit": "ns",
            "range": "± 388685.38406480185"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 336336.170212766,
            "unit": "ns",
            "range": "± 41817.80978581427"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 337048.4210526316,
            "unit": "ns",
            "range": "± 49842.02674911129"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 274311.7021276596,
            "unit": "ns",
            "range": "± 37396.27908689214"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4864111.70212766,
            "unit": "ns",
            "range": "± 384057.2747542941"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4344290.816326531,
            "unit": "ns",
            "range": "± 337381.0743006104"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 23117.391304347828,
            "unit": "ns",
            "range": "± 5901.398766871956"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 114703.0612244898,
            "unit": "ns",
            "range": "± 21940.216118256463"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 113424.46808510639,
            "unit": "ns",
            "range": "± 23719.520050676707"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 132083.87096774194,
            "unit": "ns",
            "range": "± 23151.135244596633"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8716.304347826086,
            "unit": "ns",
            "range": "± 1954.3289325710207"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 25265.625,
            "unit": "ns",
            "range": "± 7905.0660388732595"
          }
        ]
      }
    ]
  }
}