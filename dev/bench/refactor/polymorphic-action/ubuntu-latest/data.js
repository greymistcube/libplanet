window.BENCHMARK_DATA = {
  "lastUpdate": 1682405307688,
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
          "id": "4d274668f6e5f59f976c213633050e5f9f0b6354",
          "message": "More generic action type attribute",
          "timestamp": "2023-04-25T15:05:55+09:00",
          "tree_id": "25a1af8f6e05b1ac97500b0c46b20ad00c536bb8",
          "url": "https://github.com/greymistcube/libplanet/commit/4d274668f6e5f59f976c213633050e5f9f0b6354"
        },
        "date": 1682403695239,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7200002.052631579,
            "unit": "ns",
            "range": "± 159857.10675595867"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23309281.066666666,
            "unit": "ns",
            "range": "± 385442.7498592582"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 63308106.5625,
            "unit": "ns",
            "range": "± 1189621.2551985313"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 125516028.76470588,
            "unit": "ns",
            "range": "± 2576511.3686512844"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 247483714.6153846,
            "unit": "ns",
            "range": "± 2316558.2412509993"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 56052.885416666664,
            "unit": "ns",
            "range": "± 5571.991402248612"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1525043.9278350514,
            "unit": "ns",
            "range": "± 137382.03639768914"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3013452.282608696,
            "unit": "ns",
            "range": "± 115445.89247332622"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2629781.701298701,
            "unit": "ns",
            "range": "± 134705.73776511458"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6603835.02,
            "unit": "ns",
            "range": "± 817095.5418728981"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5637098.040736607,
            "unit": "ns",
            "range": "± 44294.189450569196"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1741802.2947916666,
            "unit": "ns",
            "range": "± 5216.3961091882165"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1259128.8663504464,
            "unit": "ns",
            "range": "± 7746.394335265719"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2434348.218191964,
            "unit": "ns",
            "range": "± 5241.38548264833"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 758724.7876953125,
            "unit": "ns",
            "range": "± 2451.6487349261815"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 704656.7126302083,
            "unit": "ns",
            "range": "± 1492.8699470312247"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 307277.8333333333,
            "unit": "ns",
            "range": "± 8940.721011900756"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 314137.4776119403,
            "unit": "ns",
            "range": "± 14840.866466126574"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 230843.8383838384,
            "unit": "ns",
            "range": "± 17788.646154050675"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4412021.785714285,
            "unit": "ns",
            "range": "± 74759.01472596267"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4196715.615384615,
            "unit": "ns",
            "range": "± 55503.528444202624"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 27034.212765957447,
            "unit": "ns",
            "range": "± 2867.815885694875"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 114334.01041666667,
            "unit": "ns",
            "range": "± 11445.98833836535"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 90368.72164948453,
            "unit": "ns",
            "range": "± 10547.177155664158"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 133189.70103092783,
            "unit": "ns",
            "range": "± 19948.578528183483"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 9116.60824742268,
            "unit": "ns",
            "range": "± 1384.9911819567437"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 23208.505263157895,
            "unit": "ns",
            "range": "± 3524.8807671812597"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3448017.361111111,
            "unit": "ns",
            "range": "± 169552.71388014196"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4106363.703703704,
            "unit": "ns",
            "range": "± 214859.52420438823"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4463133.619047619,
            "unit": "ns",
            "range": "± 150028.20803613652"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5329390.692307692,
            "unit": "ns",
            "range": "± 145660.55569790173"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7555912.57,
            "unit": "ns",
            "range": "± 548244.6717371054"
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
          "id": "af902ed0d0a03114471168937609ece48c506ad6",
          "message": "Added test for integer type id",
          "timestamp": "2023-04-25T15:24:04+09:00",
          "tree_id": "c93cdcdd0f726862bedf4aaff39ff28520f60b89",
          "url": "https://github.com/greymistcube/libplanet/commit/af902ed0d0a03114471168937609ece48c506ad6"
        },
        "date": 1682404680490,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7563612.071428572,
            "unit": "ns",
            "range": "± 42995.63055521641"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20461796.4,
            "unit": "ns",
            "range": "± 282582.91948250716"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 50982484.625,
            "unit": "ns",
            "range": "± 964657.4181878162"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 104686401.04,
            "unit": "ns",
            "range": "± 2790690.95780641"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 205050657.53333333,
            "unit": "ns",
            "range": "± 3565852.6799965464"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 48031.77380952381,
            "unit": "ns",
            "range": "± 2428.4395919676313"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1444484.4516129033,
            "unit": "ns",
            "range": "± 80287.62178886119"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2691704.846153846,
            "unit": "ns",
            "range": "± 92773.60002107521"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2298226.311111111,
            "unit": "ns",
            "range": "± 126846.30990178577"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5880290.95,
            "unit": "ns",
            "range": "± 415623.0114522704"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5884974.216666667,
            "unit": "ns",
            "range": "± 24251.214082438233"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1860375.9151785714,
            "unit": "ns",
            "range": "± 9573.95573103539"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1342307.1420200893,
            "unit": "ns",
            "range": "± 7611.820934635882"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2630906.9408854167,
            "unit": "ns",
            "range": "± 5465.628152483082"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 831128.5570963542,
            "unit": "ns",
            "range": "± 2255.8582956080454"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 752968.3923688616,
            "unit": "ns",
            "range": "± 746.7939819276145"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 294680.65789473685,
            "unit": "ns",
            "range": "± 10134.598098076243"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 280915.2105263158,
            "unit": "ns",
            "range": "± 9058.821369423807"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 224107.23076923078,
            "unit": "ns",
            "range": "± 2568.4491479569974"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4281279.6,
            "unit": "ns",
            "range": "± 63236.872427405826"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3963547.2,
            "unit": "ns",
            "range": "± 45415.27195024033"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19910.708333333332,
            "unit": "ns",
            "range": "± 1968.6934481992"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 87818.96610169491,
            "unit": "ns",
            "range": "± 3884.4593551213416"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 73448.88095238095,
            "unit": "ns",
            "range": "± 2611.7021942280585"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 95967.62105263158,
            "unit": "ns",
            "range": "± 15534.596456542962"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6061.958762886598,
            "unit": "ns",
            "range": "± 940.1276389131707"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18248.77894736842,
            "unit": "ns",
            "range": "± 1556.790862974675"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3289051.1,
            "unit": "ns",
            "range": "± 115528.54720311142"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3465090.6666666665,
            "unit": "ns",
            "range": "± 97691.02050548096"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4196242.866666666,
            "unit": "ns",
            "range": "± 62780.44020219158"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4476841.68,
            "unit": "ns",
            "range": "± 118577.37247247751"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6720011,
            "unit": "ns",
            "range": "± 113073.20496091606"
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
          "id": "67ed9fb9fa43e61a55173a2e583f1148a31f4d80",
          "message": "Changelog",
          "timestamp": "2023-04-25T15:28:47+09:00",
          "tree_id": "4c842014e58b00895e9c64496a7937bd58226f44",
          "url": "https://github.com/greymistcube/libplanet/commit/67ed9fb9fa43e61a55173a2e583f1148a31f4d80"
        },
        "date": 1682405299035,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10730579.284210525,
            "unit": "ns",
            "range": "± 634246.0112189614"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 27076495.643835615,
            "unit": "ns",
            "range": "± 1336252.4141464878"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 68787769.64516129,
            "unit": "ns",
            "range": "± 1906209.014962482"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 138145325.8888889,
            "unit": "ns",
            "range": "± 2941396.075086592"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 286927423.2432432,
            "unit": "ns",
            "range": "± 9699938.802211197"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 70070.2688172043,
            "unit": "ns",
            "range": "± 15299.260642223562"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1852287.3010752688,
            "unit": "ns",
            "range": "± 191265.1522635746"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3730073.815217391,
            "unit": "ns",
            "range": "± 259623.24084431256"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2936606.3846153845,
            "unit": "ns",
            "range": "± 234189.7793824378"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7825257.152941177,
            "unit": "ns",
            "range": "± 422159.48984901834"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7678245.299479167,
            "unit": "ns",
            "range": "± 197225.17825240028"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2364132.936104911,
            "unit": "ns",
            "range": "± 28084.286001292752"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1755774.3815104167,
            "unit": "ns",
            "range": "± 28194.912638813057"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3342313.177864583,
            "unit": "ns",
            "range": "± 56099.17476054851"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1110267.742466518,
            "unit": "ns",
            "range": "± 16690.7046937869"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 990991.443359375,
            "unit": "ns",
            "range": "± 14765.378284196711"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 388645.7157894737,
            "unit": "ns",
            "range": "± 42974.98603385294"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 377748.78571428574,
            "unit": "ns",
            "range": "± 46398.260001424555"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 315182.07692307694,
            "unit": "ns",
            "range": "± 27568.53464014959"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5574128.291666667,
            "unit": "ns",
            "range": "± 362350.6637226291"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 5263084.95,
            "unit": "ns",
            "range": "± 120649.80249093917"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 27562.60606060606,
            "unit": "ns",
            "range": "± 8807.544174402108"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 124723.58762886598,
            "unit": "ns",
            "range": "± 21125.2838845583"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 102382.15625,
            "unit": "ns",
            "range": "± 20782.203608061103"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 127279.24742268042,
            "unit": "ns",
            "range": "± 25199.31783097466"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6530.7692307692305,
            "unit": "ns",
            "range": "± 1020.9682014519691"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 27459.563829787236,
            "unit": "ns",
            "range": "± 7632.174539773011"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4255998.9677419355,
            "unit": "ns",
            "range": "± 256018.67059015232"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4360020.810526316,
            "unit": "ns",
            "range": "± 361005.0068844244"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5418164.092783505,
            "unit": "ns",
            "range": "± 345362.5822188268"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5716649.760416667,
            "unit": "ns",
            "range": "± 350463.50901257206"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 9575446.747368421,
            "unit": "ns",
            "range": "± 668647.2710958722"
          }
        ]
      }
    ]
  }
}