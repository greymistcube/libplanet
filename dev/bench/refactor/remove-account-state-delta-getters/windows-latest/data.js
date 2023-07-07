window.BENCHMARK_DATA = {
  "lastUpdate": 1688717813689,
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
          "id": "0aed9b230db9b2c83eecbce1661b3802ebae291f",
          "message": "Changelog",
          "timestamp": "2023-07-07T15:47:32+09:00",
          "tree_id": "b15415eece6a9424f5306a422cfab23d029cd5fe",
          "url": "https://github.com/greymistcube/libplanet/commit/0aed9b230db9b2c83eecbce1661b3802ebae291f"
        },
        "date": 1688713326036,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1368651.0204081633,
            "unit": "ns",
            "range": "± 121014.0532393749"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2463367.272727273,
            "unit": "ns",
            "range": "± 103547.58443548667"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1796419.191919192,
            "unit": "ns",
            "range": "± 147070.65890089844"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4603917.777777778,
            "unit": "ns",
            "range": "± 161301.696841789"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 43902.857142857145,
            "unit": "ns",
            "range": "± 2097.892070321149"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 6897710,
            "unit": "ns",
            "range": "± 28978.85435968786"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 17716480,
            "unit": "ns",
            "range": "± 207356.70508294913"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 45392980,
            "unit": "ns",
            "range": "± 480161.74536741857"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 90855533.33333333,
            "unit": "ns",
            "range": "± 856597.9300754373"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 181991600,
            "unit": "ns",
            "range": "± 918036.5671210644"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4777748.177083333,
            "unit": "ns",
            "range": "± 13020.851930046245"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1505973.828125,
            "unit": "ns",
            "range": "± 828.4678209890673"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1159581.5625,
            "unit": "ns",
            "range": "± 1604.8889972650695"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2715386.5234375,
            "unit": "ns",
            "range": "± 15940.995611238719"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 822837.7301897322,
            "unit": "ns",
            "range": "± 856.9596582259056"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 750342.5013950893,
            "unit": "ns",
            "range": "± 1071.6487738550234"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3031900,
            "unit": "ns",
            "range": "± 77991.12257173889"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3133902.777777778,
            "unit": "ns",
            "range": "± 99939.42589992374"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3974818.5185185187,
            "unit": "ns",
            "range": "± 108462.783539357"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3558356.25,
            "unit": "ns",
            "range": "± 66593.9483611937"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 5990106.25,
            "unit": "ns",
            "range": "± 185601.28951425644"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 257190.9090909091,
            "unit": "ns",
            "range": "± 10524.0198121722"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 238972.3404255319,
            "unit": "ns",
            "range": "± 9210.738112509945"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 216805.1948051948,
            "unit": "ns",
            "range": "± 11081.455539298362"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3849326.6666666665,
            "unit": "ns",
            "range": "± 25681.607277990843"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3454961.5384615385,
            "unit": "ns",
            "range": "± 32335.469133794308"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18483.673469387755,
            "unit": "ns",
            "range": "± 1574.2577290371485"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 83624.65753424658,
            "unit": "ns",
            "range": "± 4069.4587690201447"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 69155.88235294117,
            "unit": "ns",
            "range": "± 2206.4905875648956"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 84252.56410256411,
            "unit": "ns",
            "range": "± 4671.291830529042"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4981.443298969072,
            "unit": "ns",
            "range": "± 799.521979178186"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17863.40206185567,
            "unit": "ns",
            "range": "± 1794.4143001025072"
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
          "id": "c37b35e24d3b2dbe5d84caed9104cd77a4d5835a",
          "message": "Removed all getters",
          "timestamp": "2023-07-07T15:45:31+09:00",
          "tree_id": "a96da9c51e476c1f685c53e176dbe6ee9b5516f7",
          "url": "https://github.com/greymistcube/libplanet/commit/c37b35e24d3b2dbe5d84caed9104cd77a4d5835a"
        },
        "date": 1688713792347,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1899021.0526315789,
            "unit": "ns",
            "range": "± 224858.501556611"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3504164.5161290322,
            "unit": "ns",
            "range": "± 250609.90153812378"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2363337.234042553,
            "unit": "ns",
            "range": "± 254547.05333623424"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6914151.612903226,
            "unit": "ns",
            "range": "± 783831.9821366032"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 65677.65957446808,
            "unit": "ns",
            "range": "± 16265.499832039903"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10663565.957446808,
            "unit": "ns",
            "range": "± 864212.4862609244"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 26562789.898989897,
            "unit": "ns",
            "range": "± 1825563.105773732"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 70942027.16049382,
            "unit": "ns",
            "range": "± 3727038.7996039274"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 143197026.53061223,
            "unit": "ns",
            "range": "± 5692453.955924733"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 276158725.71428573,
            "unit": "ns",
            "range": "± 8933463.777193982"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6654584.319196428,
            "unit": "ns",
            "range": "± 241247.71010428257"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2063667.5390625,
            "unit": "ns",
            "range": "± 46253.75686843805"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1559683.7890625,
            "unit": "ns",
            "range": "± 27555.862883241047"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3321258.9599609375,
            "unit": "ns",
            "range": "± 64569.83268034643"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1115529.1945684524,
            "unit": "ns",
            "range": "± 23982.81971260704"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 1033378.4505208334,
            "unit": "ns",
            "range": "± 20979.16141169082"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4274044.086021505,
            "unit": "ns",
            "range": "± 378120.5985621994"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4501878.409090909,
            "unit": "ns",
            "range": "± 316609.0309735205"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5622483.908045977,
            "unit": "ns",
            "range": "± 314362.0427533904"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5235859.139784946,
            "unit": "ns",
            "range": "± 369598.438742632"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8802266.304347826,
            "unit": "ns",
            "range": "± 563339.4523042531"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 361437.63440860214,
            "unit": "ns",
            "range": "± 52288.399482391"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 327551.724137931,
            "unit": "ns",
            "range": "± 31798.628250613107"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 330095.652173913,
            "unit": "ns",
            "range": "± 39774.65345935466"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5435279.545454546,
            "unit": "ns",
            "range": "± 329908.8139983744"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4788154.736842105,
            "unit": "ns",
            "range": "± 332129.12823639595"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 25447.31182795699,
            "unit": "ns",
            "range": "± 7204.883479700016"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 126213.54166666667,
            "unit": "ns",
            "range": "± 22909.054150300555"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 136469.1489361702,
            "unit": "ns",
            "range": "± 27898.91132340728"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 156084.53608247422,
            "unit": "ns",
            "range": "± 29604.315353389873"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 9095.744680851063,
            "unit": "ns",
            "range": "± 1988.24042236394"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 26213.636363636364,
            "unit": "ns",
            "range": "± 5940.803417515095"
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
          "id": "b5b06964502c9e20c320ae2620b0874770d608aa",
          "message": "Changelog",
          "timestamp": "2023-07-07T16:55:12+09:00",
          "tree_id": "5fbeb27ab23662e211cb6e2b3e02fc25efac6354",
          "url": "https://github.com/greymistcube/libplanet/commit/b5b06964502c9e20c320ae2620b0874770d608aa"
        },
        "date": 1688717786552,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1776821.875,
            "unit": "ns",
            "range": "± 166126.83689729363"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3440771.717171717,
            "unit": "ns",
            "range": "± 290941.7407984938"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2296295.789473684,
            "unit": "ns",
            "range": "± 202214.38587406016"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6562947.422680412,
            "unit": "ns",
            "range": "± 466453.41029695916"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 61712.765957446805,
            "unit": "ns",
            "range": "± 11886.83408335795"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9237414.89361702,
            "unit": "ns",
            "range": "± 561180.4877005215"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 24909930.43478261,
            "unit": "ns",
            "range": "± 620162.7934625366"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 63469159.67741936,
            "unit": "ns",
            "range": "± 1909220.2260530062"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 129511395.6521739,
            "unit": "ns",
            "range": "± 3179078.1290233782"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 261086968,
            "unit": "ns",
            "range": "± 6800254.238980088"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5867757.421875,
            "unit": "ns",
            "range": "± 55906.922362198435"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1955724.0885416667,
            "unit": "ns",
            "range": "± 16021.245128524966"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1463931.5885416667,
            "unit": "ns",
            "range": "± 15334.295314960224"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3291528.75,
            "unit": "ns",
            "range": "± 41600.052860456984"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1060791.6927083333,
            "unit": "ns",
            "range": "± 15210.962366329595"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 997349.2252604166,
            "unit": "ns",
            "range": "± 18535.075033922618"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4366745.263157895,
            "unit": "ns",
            "range": "± 277570.0355434263"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3923619.587628866,
            "unit": "ns",
            "range": "± 261348.70728555016"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5154784.883720931,
            "unit": "ns",
            "range": "± 278641.58530794986"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4668632.653061224,
            "unit": "ns",
            "range": "± 355847.91920594114"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8204007.44680851,
            "unit": "ns",
            "range": "± 471719.97143360914"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 339318.75,
            "unit": "ns",
            "range": "± 42481.4394455793"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 320682.4175824176,
            "unit": "ns",
            "range": "± 28617.262053237853"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 273408.60215053766,
            "unit": "ns",
            "range": "± 35705.82602538713"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4968147.191011236,
            "unit": "ns",
            "range": "± 275055.7485186526"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4421973.958333333,
            "unit": "ns",
            "range": "± 275141.32110217627"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18930.232558139534,
            "unit": "ns",
            "range": "± 2696.973020757197"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 101277.08333333333,
            "unit": "ns",
            "range": "± 19333.720088388072"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 98305.78947368421,
            "unit": "ns",
            "range": "± 18554.604382335787"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 131167.02127659574,
            "unit": "ns",
            "range": "± 27218.587056538792"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6853.763440860215,
            "unit": "ns",
            "range": "± 1486.8670841874894"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19816.86746987952,
            "unit": "ns",
            "range": "± 2628.2155347032926"
          }
        ]
      }
    ]
  }
}