window.BENCHMARK_DATA = {
  "lastUpdate": 1702392046175,
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
          "id": "5e119e4c89abc2575593bef0141eab83e735888b",
          "message": "Updated PublicKeyType",
          "timestamp": "2023-12-12T23:19:39+09:00",
          "tree_id": "10154c1d6706819011527e83383a4d02d77757be",
          "url": "https://github.com/greymistcube/libplanet/commit/5e119e4c89abc2575593bef0141eab83e735888b"
        },
        "date": 1702391925315,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 11740302.469696969,
            "unit": "ns",
            "range": "± 1824019.5285239862"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 27069164.57731959,
            "unit": "ns",
            "range": "± 4377716.241379517"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 69042381.67777778,
            "unit": "ns",
            "range": "± 9185025.549784966"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 119506604.97,
            "unit": "ns",
            "range": "± 15409276.698254215"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 217730533.7820513,
            "unit": "ns",
            "range": "± 7619152.961532345"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 73117.74742268042,
            "unit": "ns",
            "range": "± 21756.008910390196"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 257698.74210526317,
            "unit": "ns",
            "range": "± 30213.360817837638"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 255485.83695652173,
            "unit": "ns",
            "range": "± 27705.323492215164"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 234163.22631578948,
            "unit": "ns",
            "range": "± 23832.262444025237"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3738264.1764705884,
            "unit": "ns",
            "range": "± 74334.69697106064"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3568891.375,
            "unit": "ns",
            "range": "± 164988.87227638034"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12186.5,
            "unit": "ns",
            "range": "± 626.2408654995469"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 57405.01098901099,
            "unit": "ns",
            "range": "± 6345.1783960465345"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 53266.2,
            "unit": "ns",
            "range": "± 7059.924055357517"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 59134.054945054944,
            "unit": "ns",
            "range": "± 9971.662966585347"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3205.9444444444443,
            "unit": "ns",
            "range": "± 356.7865745796073"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12828.92857142857,
            "unit": "ns",
            "range": "± 1075.1996932564005"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1420420.8936170214,
            "unit": "ns",
            "range": "± 443008.24699414114"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3042277.6052631577,
            "unit": "ns",
            "range": "± 629393.846513478"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2119979.9375,
            "unit": "ns",
            "range": "± 572595.5211452278"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7877766.455555555,
            "unit": "ns",
            "range": "± 1010953.8764124992"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3112261.0833333335,
            "unit": "ns",
            "range": "± 122674.85132898533"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3314323.575,
            "unit": "ns",
            "range": "± 166132.10044067263"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3975464.272727273,
            "unit": "ns",
            "range": "± 168821.11837390732"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3820862.7527472526,
            "unit": "ns",
            "range": "± 224628.26142305986"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 15589008.036082475,
            "unit": "ns",
            "range": "± 2076754.5351902302"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4312737.045052083,
            "unit": "ns",
            "range": "± 48566.790207232356"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1316656.2359375,
            "unit": "ns",
            "range": "± 18035.312241911488"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 852258.2416015625,
            "unit": "ns",
            "range": "± 14928.363946261348"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2054432.5791519007,
            "unit": "ns",
            "range": "± 124058.61077620886"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 626779.9792829241,
            "unit": "ns",
            "range": "± 7370.4721920313505"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 570972.8350911458,
            "unit": "ns",
            "range": "± 3851.8081616148447"
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
          "id": "65bb38b9639f64f14feed57d2591029fec102d2d",
          "message": "Changelog",
          "timestamp": "2023-12-12T23:22:30+09:00",
          "tree_id": "0fa6d0e6cbcf60bfa543a2fe18cb6a1cea6ff2c1",
          "url": "https://github.com/greymistcube/libplanet/commit/65bb38b9639f64f14feed57d2591029fec102d2d"
        },
        "date": 1702392031179,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8321674.75,
            "unit": "ns",
            "range": "± 74010.14061246792"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20277088.5,
            "unit": "ns",
            "range": "± 515246.3140752071"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 50031956.03125,
            "unit": "ns",
            "range": "± 1554276.1880017307"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 100317015.03333333,
            "unit": "ns",
            "range": "± 1786792.3731317231"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 202271550.92,
            "unit": "ns",
            "range": "± 5233566.210831314"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 67203.71134020618,
            "unit": "ns",
            "range": "± 11272.000045243709"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 323012.5104166667,
            "unit": "ns",
            "range": "± 31916.214400898192"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 313643.65625,
            "unit": "ns",
            "range": "± 37146.86745249488"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 302801.656626506,
            "unit": "ns",
            "range": "± 16069.336079506973"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4307995.708333333,
            "unit": "ns",
            "range": "± 251687.21639597858"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3991637.101010101,
            "unit": "ns",
            "range": "± 246624.75403413552"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 26361.415730337078,
            "unit": "ns",
            "range": "± 3328.29221089636"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 114018.28260869565,
            "unit": "ns",
            "range": "± 13955.887322675353"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 118861.70224719102,
            "unit": "ns",
            "range": "± 13114.082917871652"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 129685.60638297872,
            "unit": "ns",
            "range": "± 25826.021743194575"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 9217.443181818182,
            "unit": "ns",
            "range": "± 991.4266610903672"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 30489.293478260868,
            "unit": "ns",
            "range": "± 8511.032387292356"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1471939.9680851065,
            "unit": "ns",
            "range": "± 185053.52871050214"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2813227.98989899,
            "unit": "ns",
            "range": "± 187722.90143336565"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2217823.948979592,
            "unit": "ns",
            "range": "± 221241.88121160268"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 9771785.25,
            "unit": "ns",
            "range": "± 614451.1938785971"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3201466.5476190476,
            "unit": "ns",
            "range": "± 116655.43314879003"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3349935.96,
            "unit": "ns",
            "range": "± 76405.16018430954"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4275851.224137931,
            "unit": "ns",
            "range": "± 187522.36176343035"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4088605.714285714,
            "unit": "ns",
            "range": "± 168463.14550641895"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 20802156.489361703,
            "unit": "ns",
            "range": "± 3494122.4151071715"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6783898.296316965,
            "unit": "ns",
            "range": "± 112499.16379773471"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2028891.3584558824,
            "unit": "ns",
            "range": "± 64973.218092991985"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1213397.283482143,
            "unit": "ns",
            "range": "± 28082.363511115644"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3161009.2183314734,
            "unit": "ns",
            "range": "± 86055.95256142628"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 893719.896484375,
            "unit": "ns",
            "range": "± 8031.819064024625"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 781994.778515625,
            "unit": "ns",
            "range": "± 20568.50947999722"
          }
        ]
      }
    ]
  }
}