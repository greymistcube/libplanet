window.BENCHMARK_DATA = {
  "lastUpdate": 1681802421871,
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
          "id": "d2ed2693ec59760d48ad3470a61629982a10c806",
          "message": "Prepare 1.1.0",
          "timestamp": "2023-04-18T15:44:40+09:00",
          "tree_id": "12f24b946ecaf7de0e7fbca77aff22ba4d17a8ae",
          "url": "https://github.com/greymistcube/libplanet/commit/d2ed2693ec59760d48ad3470a61629982a10c806"
        },
        "date": 1681801164111,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1325802.0202020202,
            "unit": "ns",
            "range": "± 135865.06059231967"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2408372.222222222,
            "unit": "ns",
            "range": "± 70797.88782608505"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2137452.525252525,
            "unit": "ns",
            "range": "± 166558.21948571593"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5448695,
            "unit": "ns",
            "range": "± 407466.2550011307"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 46717.89473684211,
            "unit": "ns",
            "range": "± 2693.1741514574187"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 6920590,
            "unit": "ns",
            "range": "± 102988.90925032379"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19117803.57142857,
            "unit": "ns",
            "range": "± 543544.6456719304"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 47329560.60606061,
            "unit": "ns",
            "range": "± 1465694.4599615983"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 94301247.82608695,
            "unit": "ns",
            "range": "± 2346196.888558465"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 188644660,
            "unit": "ns",
            "range": "± 2906194.6419428177"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4822033.370535715,
            "unit": "ns",
            "range": "± 13622.453599066599"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1508065.8984375,
            "unit": "ns",
            "range": "± 6026.360062073304"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1160258.8541666667,
            "unit": "ns",
            "range": "± 8336.635575562908"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2625013.2682291665,
            "unit": "ns",
            "range": "± 10917.34498488353"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 826918.0598958334,
            "unit": "ns",
            "range": "± 3486.347953083204"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 781697.0552884615,
            "unit": "ns",
            "range": "± 1609.0947495903706"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2973600,
            "unit": "ns",
            "range": "± 146030.25347364656"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3113321.4285714286,
            "unit": "ns",
            "range": "± 47852.179093078346"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3848106.25,
            "unit": "ns",
            "range": "± 72745.29509413878"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4027770.3703703703,
            "unit": "ns",
            "range": "± 163286.74122609463"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6725157.142857143,
            "unit": "ns",
            "range": "± 157682.59438323742"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 303380.95238095237,
            "unit": "ns",
            "range": "± 5769.9756539884165"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 253571.42857142858,
            "unit": "ns",
            "range": "± 5989.335760928991"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 206250,
            "unit": "ns",
            "range": "± 3553.546440908337"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5124007.142857143,
            "unit": "ns",
            "range": "± 53169.70601162506"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3580126.6666666665,
            "unit": "ns",
            "range": "± 47640.58094084236"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19579.381443298967,
            "unit": "ns",
            "range": "± 2108.313808094531"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 86531.25,
            "unit": "ns",
            "range": "± 6196.2010857247715"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 80275,
            "unit": "ns",
            "range": "± 7219.287032883365"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 182076.5306122449,
            "unit": "ns",
            "range": "± 19181.61598935217"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6392.783505154639,
            "unit": "ns",
            "range": "± 1047.740368471639"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17981.9587628866,
            "unit": "ns",
            "range": "± 1695.0630759989783"
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
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "ff0633b44c3f2b3182362f39e957058a5e2888b8",
          "message": "Update CHANGES.md\n\nCo-authored-by: Hong Minhee (洪 民憙) <hong@minhee.org>",
          "timestamp": "2023-04-18T16:00:30+09:00",
          "tree_id": "b2d6a09751ee7609ecd7bdca13376d6dff6b07ff",
          "url": "https://github.com/greymistcube/libplanet/commit/ff0633b44c3f2b3182362f39e957058a5e2888b8"
        },
        "date": 1681802397280,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1729277.551020408,
            "unit": "ns",
            "range": "± 215130.32900992842"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3158910.8695652173,
            "unit": "ns",
            "range": "± 181858.11245959694"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2630240.625,
            "unit": "ns",
            "range": "± 194607.83214515503"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6953229.333333333,
            "unit": "ns",
            "range": "± 338422.8163724211"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 55500,
            "unit": "ns",
            "range": "± 9183.50555036302"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8610800,
            "unit": "ns",
            "range": "± 224140.4098625086"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23274041.666666668,
            "unit": "ns",
            "range": "± 772844.9821924188"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 58479050,
            "unit": "ns",
            "range": "± 993859.6996795166"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 112659207.59493671,
            "unit": "ns",
            "range": "± 5833748.908210238"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 224632481.8181818,
            "unit": "ns",
            "range": "± 7086236.013677084"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6002418.080357143,
            "unit": "ns",
            "range": "± 236682.88594364285"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1778674.1333007812,
            "unit": "ns",
            "range": "± 33136.402918839914"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1433189.55859375,
            "unit": "ns",
            "range": "± 37774.06078997508"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3075090.5412946427,
            "unit": "ns",
            "range": "± 39044.75818311063"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1008095.7853618421,
            "unit": "ns",
            "range": "± 20751.905415010086"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 920970.693359375,
            "unit": "ns",
            "range": "± 15458.812369572102"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3495724.210526316,
            "unit": "ns",
            "range": "± 217924.21809690338"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3704793.023255814,
            "unit": "ns",
            "range": "± 201438.07093332836"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4625881.632653061,
            "unit": "ns",
            "range": "± 295999.3220063769"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4759551.898734177,
            "unit": "ns",
            "range": "± 246508.1778748306"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8945983.333333334,
            "unit": "ns",
            "range": "± 582676.7385214851"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 370476.4705882353,
            "unit": "ns",
            "range": "± 19309.981671582776"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 297996.77419354836,
            "unit": "ns",
            "range": "± 17277.337830943292"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 257388.76404494382,
            "unit": "ns",
            "range": "± 19249.24106061332"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 6189445.3125,
            "unit": "ns",
            "range": "± 270700.8642656807"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4302007.44680851,
            "unit": "ns",
            "range": "± 245454.81954643392"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 23233.333333333332,
            "unit": "ns",
            "range": "± 6811.739566246449"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 92361.22448979592,
            "unit": "ns",
            "range": "± 14904.352319802298"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 84884.53608247422,
            "unit": "ns",
            "range": "± 10895.969631456486"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 202249.48453608248,
            "unit": "ns",
            "range": "± 23242.69205807557"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 11213.636363636364,
            "unit": "ns",
            "range": "± 5905.436003973928"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 23430.303030303032,
            "unit": "ns",
            "range": "± 6826.201838496183"
          }
        ]
      }
    ]
  }
}